'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const router = useRouter()

  let errorMessage = "An error occurred"
  if (error === "Configuration") {
    errorMessage = "There is a problem with the server configuration."
  } else if (error === "AccessDenied") {
    errorMessage = "You do not have permission to access this resource."
  } else if (error === "Verification") {
    errorMessage = "The verification token has expired or has already been used."
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Error</CardTitle>
        <CardDescription>Authentication Error</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{errorMessage}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => router.push('/auth/login')}
          className="w-full"
        >
          Return to Login
        </Button>
      </CardFooter>
    </Card>
  )
}
