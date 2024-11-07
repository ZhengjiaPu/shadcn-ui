import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import { Alert, AlertTitle } from "@/registry/sydney/ui/alert"

export default function AlertHover() {
  return (
    <div style={{ width: "500px" }}>
      <Alert className="hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
        <RocketIcon className="h-5 w-5 mr-2 transition-colors duration-300 hover:text-blue-800" />
        <AlertTitle>Heads up!</AlertTitle>
      </Alert>
      <br />
      <Alert className="hover:bg-green-100 hover:text-green-800 transition-colors duration-300">
        <CheckCircledIcon className="h-5 w-5 mr-2 transition-colors duration-300 hover:text-green-800" />
        <AlertTitle>Successful alert</AlertTitle>
      </Alert>
      <br />
      <Alert className="hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300">
        <InfoCircledIcon className="h-5 w-5 mr-2 transition-colors duration-300 hover:text-blue-700" />
        <AlertTitle>Information alert</AlertTitle>
      </Alert>
      <br />
      <Alert className="hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300">
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 transition-colors duration-300 hover:text-yellow-800" />
        <AlertTitle>Warning alert</AlertTitle>
      </Alert>
      <br />
      <Alert className="hover:bg-red-100 hover:text-red-800 transition-colors duration-300">
        <CrossCircledIcon className="h-5 w-5 mr-2 transition-colors duration-300 hover:text-red-800" />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
