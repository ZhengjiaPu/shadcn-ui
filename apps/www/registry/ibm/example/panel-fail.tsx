import * as React from "react"

import { Button } from "@/registry/ibm/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ibm/ui/card"

export default function FailPanel() {
  return (
    <Card className="w-[350px] border border-gray-200 bg-white shadow-md">
      <CardHeader className="bg-blue-600 p-4">
        <CardTitle className="text-center font-bold text-white">
          Application Failed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-center text-black">
          Please try again
        </CardDescription>

        <CardDescription className="text-center">
          <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
            Back
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
