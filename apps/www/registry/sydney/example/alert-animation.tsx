import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import { Alert, AlertTitle } from "@/registry/sydney/ui/alert"

export default function AlertAnimation() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Info Alert */}
      <Alert variant="info" animate>
        <RocketIcon className="h-5 w-5 mr-2 text-blue-700" />
        <AlertTitle>Heads up!</AlertTitle>
      </Alert>

      {/* Success Alert */}
      <Alert variant="success" animate>
        <CheckCircledIcon className="h-5 w-5 mr-2 text-green-700" />
        <AlertTitle>Successful alert</AlertTitle>
      </Alert>

      {/* Information Alert */}
      <Alert variant="info" animate>
        <InfoCircledIcon className="h-5 w-5 mr-2 text-blue-700" />
        <AlertTitle>Information alert</AlertTitle>
      </Alert>

      {/* Warning Alert */}
      <Alert variant="warning" animate>
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-yellow-700" />
        <AlertTitle>Warning alert</AlertTitle>
      </Alert>

      {/* Error Alert */}
      <Alert variant="error" animate>
        <CrossCircledIcon className="h-5 w-5 mr-2 text-red-700" />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
