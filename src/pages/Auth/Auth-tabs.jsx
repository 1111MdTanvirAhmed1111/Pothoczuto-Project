"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { loginSchema, registerSchema } from "./schemas"
import { useToast } from '@/hooks/use-toast';

const AuthTabs = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const { toast } = useToast()

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onLogin = async (data) => {
    setIsLoading(true)
    setServerError("")

    try {
      const response = await fetch(`${import.meta.env.VITE_bApi}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const dataa = await response.json()

      if (response.ok) {
        toast({
          title: "লগইন সফল",
          description: "আপনি সফলভাবে লগইন করেছেন।",
        })
        localStorage.setItem("jwt",JSON.stringify(dataa.token))
        // Handle successful login (e.g., store token, redirect)
      } else {
        const errorData = await response.json()
        setServerError(errorData.message || "লগইন ব্যর্থ হয়েছে")
      }
    } catch (error) {
      console.error("Error during login:", error)
      setServerError("একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।")
    } finally {
      setIsLoading(false)

    }
  }

  const onRegister = async (data) => {
    setIsLoading(true)
    setServerError("")
    delete data.confirmPassword
    try {
      const response = await fetch(`${import.meta.env.VITE_bApi}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "নিবন্ধন সফল",
          description: "আপনি সফলভাবে নিবন্ধন করেছেন।",
        })
        // Handle successful registration (e.g., show success message, redirect)
      } else {
        const errorData = await response.json()
        setServerError(errorData.message || "নিবন্ধন ব্যর্থ হয়েছে")
      }
    } catch (error) {
      console.error("Error during registration:", error)
      setServerError("একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">লগইন</TabsTrigger>
        <TabsTrigger value="register">নিবন্ধন</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>লগইন</CardTitle>
            <CardDescription>আপনার অ্যাকাউন্টে প্রবেশ করতে আপনার তথ্য দিন।</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmitLogin(onLogin)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="login-email">ইমেইল</Label>
                <Input
                  id="login-email"
                  placeholder="আপনার ইমেইল"
                  {...registerLogin("email")}
                  aria-invalid={loginErrors.email ? "true" : "false"}
                />
                {loginErrors.email && <p className="text-sm text-red-500">{loginErrors.email.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="login-password">পাসওয়ার্ড</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="আপনার পাসওয়ার্ড"
                  {...registerLogin("password")}
                  aria-invalid={loginErrors.password ? "true" : "false"}
                />
                {loginErrors.password && <p className="text-sm text-red-500">{loginErrors.password.message}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "লগইন হচ্ছে..." : "লগইন"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>নিবন্ধন</CardTitle>
            <CardDescription>শুরু করতে একটি নতুন অ্যাকাউন্ট তৈরি করুন।</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmitSignUp(onRegister)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">ব্যবহারকারীর নাম</Label>
                <Input
                  id="username"
                  placeholder="আপনার ব্যবহারকারীর নাম"
                  {...registerSignUp("username")}
                  aria-invalid={signUpErrors.username ? "true" : "false"}
                />
                {signUpErrors.username && <p className="text-sm text-red-500">{signUpErrors.username.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="register-email">ইমেইল</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="আপনার ইমেইল"
                  {...registerSignUp("email")}
                  aria-invalid={signUpErrors.email ? "true" : "false"}
                />
                {signUpErrors.email && <p className="text-sm text-red-500">{signUpErrors.email.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="register-password">পাসওয়ার্ড</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="আপনার পাসওয়ার্ড"
                  {...registerSignUp("password")}
                  aria-invalid={signUpErrors.password ? "true" : "false"}
                />
                {signUpErrors.password && <p className="text-sm text-red-500">{signUpErrors.password.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">পাসওয়ার্ড নিশ্চিত করুন</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  {...registerSignUp("confirmPassword")}
                  aria-invalid={signUpErrors.confirmPassword ? "true" : "false"}
                />
                {signUpErrors.confirmPassword && (
                  <p className="text-sm text-red-500">{signUpErrors.confirmPassword.message}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "নিবন্ধন হচ্ছে..." : "নিবন্ধন"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      {serverError && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>ত্রুটি</AlertTitle>
          <AlertDescription>{serverError}</AlertDescription>
        </Alert>
      )}
    </Tabs>
  )
}

export default AuthTabs

