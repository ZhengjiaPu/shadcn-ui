import React, { useState } from "react"

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

export default function NoticeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-none border border-gray-400 px-4 py-2 text-sm font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Submit Application
        </Button>
      </DialogTrigger>
      <DialogContent
        style={{ backgroundColor: "white" }}
        className="rounded-md p-6"
      >
        <DialogHeader>
          <DialogTitle>Submit Application</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to submit your application? You will not be able
          to make changes after that.
        </DialogDescription>
        <DialogFooter className="mt-4 flex justify-center space-x-4">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
