import Cookies from 'js-cookie';

const COOKIE_OPTIONS = {
  secure: true, // Only transmitted over HTTPS
  sameSite: 'strict' as const, // Protect against CSRF
  expires: 7, // 7 days
  path: '/'
};

export const cookieService = {
  setAccessToken: (token: string) => {
    Cookies.set('access_token', token, COOKIE_OPTIONS);
  },

  setRefreshToken: (token: string) => {
    Cookies.set('refreshToken', token, COOKIE_OPTIONS);
  },

  getAccessToken: () => {
    return Cookies.get('access_token');
  },

  getRefreshToken: () => {
    return Cookies.get('refreshToken');
  },

  clearTokens: () => {
    Cookies.remove('access_token', { path: '/' });
    Cookies.remove('refreshToken', { path: '/' });
  }
};