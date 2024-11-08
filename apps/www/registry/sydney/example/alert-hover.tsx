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
      {/* Info Alert */}
      <Alert variant="info" hoverEffect>
        <RocketIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-blue-800" />
        <AlertTitle className="hover:text-blue-800">Heads up!</AlertTitle>
      </Alert>
      <br />

      {/* Success Alert */}
      <Alert variant="success" hoverEffect>
        <CheckCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-green-800" />
        <AlertTitle className="hover:text-green-800">
          Successful alert
        </AlertTitle>
      </Alert>
      <br />

      {/* Information Alert */}
      <Alert variant="info" hoverEffect>
        <InfoCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-blue-800" />
        <AlertTitle className="hover:text-blue-800">
          Information alert
        </AlertTitle>
      </Alert>
      <br />

      {/* Warning Alert */}
      <Alert variant="warning" hoverEffect>
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-yellow-800" />
        <AlertTitle className="hover:text-yellow-800">Warning alert</AlertTitle>
      </Alert>
      <br />

      {/* Error Alert */}
      <Alert variant="error" hoverEffect>
        <CrossCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-red-800" />
        <AlertTitle className="hover:text-red-800">Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
