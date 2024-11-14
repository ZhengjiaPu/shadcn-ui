import * as React from "react"

import { Avatar, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Label } from "@/registry/default/ui/label"

export default function SuccessPanel() {
  return (
    <Card className="w-[350px] rounded-md bg-white shadow-md">
      <CardHeader className="rounded-t-md bg-gray-100 p-4">
        <CardTitle className="text-center font-semibold text-gray-800">
          Application Complete
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="mb-4 text-center text-gray-600">
          Your Reference Number:{" "}
          <span className="font-semibold text-gray-800">KDU3957KF</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
