import * as React from "react"

import { Avatar, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import { Label } from "@/registry/default/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ibm/ui/card"

export default function SuccessPanel() {
  return (
    <Card className="w-[350px] border border-gray-200 bg-white shadow-md">
      <CardHeader className="bg-blue-600 p-4">
        <CardTitle className="text-center font-semibold text-white">
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
