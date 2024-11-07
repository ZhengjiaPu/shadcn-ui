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
      <Alert className="border-l-8 border-blue-500 border-t border-r border-b border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 rounded-none">
        <RocketIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-blue-800" />
        <AlertTitle className="font-semibold text-black hover:text-blue-800">
          Heads up!
        </AlertTitle>
      </Alert>
      <br />

      {/* Success Alert */}
      <Alert className="border-l-8  border-t border-r border-b border-green-300 bg-green-50 hover:bg-green-100 hover:text-green-800 transition-colors duration-300 rounded-none">
        <CheckCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-green-800" />
        <AlertTitle className="font-semibold text-black hover:text-green-800">
          Successful alert
        </AlertTitle>
      </Alert>
      <br />

      {/* Info Alert with Upgrade Message */}
      <Alert className="border-l-8  border-t border-r border-b border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 rounded-none">
        <InfoCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-blue-800" />
        <AlertTitle className="font-semibold text-black hover:text-blue-800">
          Information alert
        </AlertTitle>
      </Alert>
      <br />

      {/* Warning Alert */}
      <Alert className="border-l-8 border-t border-r border-b border-yellow-300 bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-300 rounded-none">
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-yellow-800" />
        <AlertTitle className="font-semibold text-black hover:text-yellow-800">
          Warning alert
        </AlertTitle>
      </Alert>
      <br />

      {/* Error Alert */}
      <Alert className="border-l-8  border-t border-r border-b border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-800 transition-colors duration-300 rounded-none">
        <CrossCircledIcon className="h-5 w-5 mr-2 text-black transition-colors duration-300 hover:text-red-800" />
        <AlertTitle className="font-semibold text-black hover:text-red-800">
          Error alert
        </AlertTitle>
      </Alert>
    </div>
  )
}
