import React, { useState } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"
import { Button } from "@/registry/ibm/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ibm/ui/dialog"

export default function SignupModal() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSignUp = () => {
    toast({
      title: "Signed up with email: ",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-black">
          {email}
        </div>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-none border border-gray-400 px-4 py-2 text-sm font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create your student account</DialogTitle>
          <DialogDescription>E-mail</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="email" className="sr-only">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your student e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="mt-6 flex justify-center">
          <Button
            variant="outline"
            className="rounded-none border border-gray-400 px-4 py-2 text-sm font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
