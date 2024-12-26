import React, { useState } from "react"
import { SendHorizontal, Upload } from "lucide-react"

import { Button } from "@/registry/sydney/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/sydney/ui/card"
import { Input } from "@/registry/sydney/ui/input"
import { Toaster } from "@/registry/sydney/ui/toaster"
import { useToast } from "@/registry/sydney/ui/use-toast"

export default function AttachmentChat() {
  interface IMessage {
    text: React.ReactNode
    type: string
    fileUrl?: string
    isImage?: boolean
  }

  const [messages, setMessages] = useState<IMessage[]>([
    { text: "Hi, how can I help you today?", type: "received" },
    { text: "Hey, I'm having trouble with my account.", type: "sent" },
    { text: "What seems to be the problem?", type: "received" },
    { text: "I can't log in.", type: "sent" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const { toast } = useToast()

  const handleSent = (message: string) => {
    toast({
      description: (
        <div className="w-[340px] rounded-md bg-orange-600 p-4 text-black">
          Message sent: {message}
        </div>
      ),
    })
  }

  const sendFiles = (files: File[]) => {
    const fileMessages = files.map((file) => {
      const fileUrl = URL.createObjectURL(file)
      const isImage = file.type.startsWith("image/")
      const textContent = isImage ? (
        <img
          src={fileUrl}
          alt={`Thumbnail of ${file.name}`}
          className="max-h-[100px] max-w-[100px] rounded"
        />
      ) : (
        <span className="text-white underline">{file.name}</span>
      )
      return {
        text: textContent,
        type: "sent",
        fileUrl,
        isImage,
      }
    })
    setMessages((prevMessages) => [...prevMessages, ...fileMessages])
    handleSent(`Sent files: ${files.map((file) => file.name).join(", ")}`)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : []
    sendFiles(files)
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
                  {message.fileUrl ? (
                    <a
                      href={message.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {message.text}
                    </a>
                  ) : (
                    message.text
                  )}
                </span>
              </div>
            ))}
          </div>
          <form
            className="mt-4 flex items-center space-x-2"
            onSubmit={(e) => {
              e.preventDefault()
              if (newMessage.trim()) {
                setMessages([...messages, { text: newMessage, type: "sent" }])
                handleSent(newMessage)
                setNewMessage("")
              }
            }}
          >
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <Button
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Upload />
            </Button>

            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-grow rounded-full border border-gray-300 px-4 py-2"
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
