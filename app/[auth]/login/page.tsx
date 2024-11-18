import { LoginPageComponent } from "@/components/login-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login to your account',
  }

export default function LoginPage() {
  return (
    <div>
        <LoginPageComponent />
    </div>
  )
}
