import React, { useState } from "react"
import { InfoCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/ibm/ui/button"
import Messages from "@/registry/ibm/ui/messages"

export function MessageNormal() {
  const [isVisible, setIsVisible] = useState(false)
  const showMessage = () => {
    setIsVisible(true)
  }

  const hideMessage = () => {
    setIsVisible(false)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <Button
        onClick={showMessage}
        className="bg-blue-600 hover:bg-blue-800 shadow-md text-white px-4 py-2 border-none rounded-none"
      >
        Display normal message
      </Button>
      {isVisible && (
        <Messages
          icon={
            <InfoCircledIcon
              style={{ color: "#1890ff", marginRight: "10px" }}
            />
          }
          description="This is a normal message!"
          duration={1000}
          isVisible={isVisible}
          hideMessage={hideMessage}
        />
      )}
    </div>
  )
}

export default MessageNormal
