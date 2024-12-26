import React, { useState } from "react"
import { SendHorizontal } from "lucide-react"

import { Button } from "@/registry/sydney/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/sydney/ui/card"
import { Input } from "@/registry/sydney/ui/input"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

export default function NormalChat() {
  const [messages, setMessages] = useState([
    { text: "Hi, how can I help you today?", type: "received" },
    { text: "Hey, I'm having trouble with my account.", type: "sent" },
    { text: "What seems to be the problem?", type: "received" },
    { text: "I can't log in.", type: "sent" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const { toast } = useToast()

  const handleSent = () => {
    toast({
      description: (
        <div className="w-80 rounded-md bg-white p-4 text-black">
          The Message is: {newMessage}
        </div>
      ),
    })
  }

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    setMessages([...messages, { text: newMessage, type: "sent" }])
    handleSent()
    setNewMessage("")
  }

  return (
    <>
      <Toaster />
      <Card className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-sm">
        <CardHeader className="flex flex-col bg-gray-100 p-4">
          <div className="font-bold">Sofia Davis</div>
          <div className="text-sm text-gray-500">m@example.com</div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "sent" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`${
                    message.type === "sent"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  } max-w-xs break-words rounded-lg px-4 py-2`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form className="mt-4 flex" onSubmit={sendMessage}>
            <Input
              type="text"
              placeholder="Type your message..."
              className="mr-2 flex-grow rounded-full border border-gray-300 px-4 py-2"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button disabled={!newMessage.trim()} type="submit">
              <SendHorizontal />
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
