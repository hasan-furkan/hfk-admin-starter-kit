import axios, { AxiosError } from "axios";
import eventEmitter from "./events";
import { newRefreshToken } from "./auth";
import { cookieService } from "./cookie";

const INACTIVITY_TIMEOUT = 15 * 60 * 1000; // 15 minutes
const REFRESH_INTERVAL = 45 * 60 * 1000; // 45 minutes
const REQUEST_TIMEOUT = 30000; // 30 seconds

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

let inactivityTimer: NodeJS.Timeout | null = null;
let refreshTokenInterval: NodeJS.Timeout | null = null;

const endSession = () => {
  cookieService.clearTokens();
  eventEmitter.emit("unauthorized");
  clearEventListeners();
  stopTokenRefresh();
};

const clearEventListeners = () => {
  document.removeEventListener("mousemove", resetInactivityTimer);
  document.removeEventListener("mousedown", resetInactivityTimer);
  document.removeEventListener("keypress", resetInactivityTimer);
  document.removeEventListener("touchmove", resetInactivityTimer);
};

const resetInactivityTimer = () => {
  if (inactivityTimer) clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(endSession, INACTIVITY_TIMEOUT);
};

const setupActivityListeners = () => {
  document.addEventListener("mousemove", resetInactivityTimer);
  document.addEventListener("mousedown", resetInactivityTimer);
  document.addEventListener("keypress", resetInactivityTimer);
  document.addEventListener("touchmove", resetInactivityTimer);
};

export const refreshTokenAfterInterval = () => {
  if (refreshTokenInterval) {
    clearInterval(refreshTokenInterval);
  }

  refreshTokenInterval = setInterval(async () => {
    try {
      const refreshToken = cookieService.getRefreshToken();
      if (refreshToken) {
        const { data } = await newRefreshToken(refreshToken);
        cookieService.setAccessToken(data.access);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      endSession();
    }
  }, REFRESH_INTERVAL);
};

const stopTokenRefresh = () => {
  if (refreshTokenInterval) {
    clearInterval(refreshTokenInterval);
    refreshTokenInterval = null;
  }
};

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    const accessToken = cookieService.getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    resetInactivityTimer();
    setupActivityListeners();
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && originalRequest) {
      try {
        const refreshToken = cookieService.getRefreshToken();
        if (refreshToken) {
          const { data } = await newRefreshToken(refreshToken);
          cookieService.setAccessToken(data.access);
          
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${data.access}`;
          }
          
          return api(originalRequest);
        }
      } catch (refreshError) {
        endSession();
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
