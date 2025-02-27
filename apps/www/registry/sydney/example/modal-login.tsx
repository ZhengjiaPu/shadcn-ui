import React, { useState } from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/sydney/ui/dialog"
import { Input } from "@/registry/sydney/ui/input"
import { Label } from "@/registry/sydney/ui/label"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

export default function LoginModal() {
  const [formMode, setFormMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { toast } = useToast()

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (formMode === "login") {
      toast({
        title: "Login Attempt",
        description: `Logged in with Email: ${email}`,
      })
    } else {
      if (password !== confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match.",
        })
        return
      }
      toast({
        title: "Signup Attempt",
        description: `Signed up with Email: ${email}`,
      })
    }
  }

  const switchToSignUp = () => {
    setFormMode("signup")
  }

  const switchToSignIn = () => {
    setFormMode("login")
  }

  return (
    <>
      <Toaster />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-orange-600 text-white hover:bg-orange-700"
          >
            {formMode === "login" ? "Login" : "Sign Up"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formMode === "signup"
                ? "Create Your Account"
                : "Login to Your Account"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {formMode === "signup" && (
              <>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </>
            )}

            <DialogFooter>
              <Button
                variant="destructive"
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                {formMode === "signup" ? "Create Account" : "Login"}
              </Button>
            </DialogFooter>
          </form>

          {formMode === "login" ? (
            <p className="text-center">
              Don’t have an account?{" "}
              <Button
                asChild
                variant="default"
                className="bg-orange-600 text-white hover:bg-orange-700"
                onClick={switchToSignUp}
              >
                <span>Sign Up</span>
              </Button>
            </p>
          ) : (
            <p className="text-center">
              Already have an account?{" "}
              <Button
                asChild
                variant="default"
                className="bg-orange-600 text-white hover:bg-orange-700"
                onClick={switchToSignIn}
              >
                <span>Login Here</span>
              </Button>
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
