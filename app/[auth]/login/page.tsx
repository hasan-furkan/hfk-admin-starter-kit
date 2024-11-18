import { LoginPageComponent } from "@/components/login-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login to your account',
  }

const LoginPage = () => {
  return (
    <div>
        <LoginPageComponent />
    </div>
  )
}

export default LoginPage