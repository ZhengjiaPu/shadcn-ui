import React, { useState } from "react"
import { Forward, Heart, MessageCircleMore } from "lucide-react"

import { Avatar, AvatarImage } from "@/registry/ibm/ui/avatar"
import { Button } from "@/registry/ibm/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/ibm/ui/card"
import { Label } from "@/registry/ibm/ui/label"
import { Textarea } from "@/registry/ibm/ui/textarea"
import { Toaster } from "@/registry/ibm/ui/toaster"
import { useToast } from "@/registry/ibm/ui/use-toast"

export function BasicComment() {
  const initialMessage = {
    user: "USYD Student",
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    description:
      "I am a student of USYD and majoring in Master of Computer Science.",
    content:
      "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
    likes: 156,
    comments: 156,
    shares: 2,
  }

  const [message, setMessage] = useState(initialMessage)
  const [isTextareaActive, setIsTextareaActive] = useState(false)
  const [commentText, setCommentText] = useState("")
  const { toast } = useToast()

  const incrementStat = (stat: "likes" | "comments" | "shares") => {
    if (stat === "comments") {
      setIsTextareaActive(!isTextareaActive) // Toggle textarea visibility
      setCommentText("") // Reset the comment text
    } else {
      setMessage((prev) => ({ ...prev, [stat]: prev[stat] + 1 }))
    }
  }

  const postComment = () => {
    if (commentText.trim()) {
      toast({
        title: "You have successfully posted your comment:",
        description: commentText,
      })

      setMessage((prev) => ({ ...prev, comments: prev.comments + 1 }))
      setIsTextareaActive(false)
      setCommentText("")
    }
  }

  return (
    <>
      <Toaster />
      <Card className="mb-4">
        <CardHeader
          className="flex flex-col p-4"
          style={{ borderBottom: "1px solid #e8e8e8" }}
        >
          <div className="flex items-center mb-2">
            <Avatar style={{ marginRight: "10px" }}>
              <AvatarImage src={message.avatarUrl} alt={message.user} />
            </Avatar>
            <div className="flex flex-col">
              <Label style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
                {message.user}
              </Label>
            </div>
          </div>
          <div className="flex flex-col" style={{ marginLeft: "50px" }}>
            <Label style={{ fontSize: "0.75rem", color: "gray" }}>
              {message.description}
            </Label>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="text-left"
            style={{
              fontSize: "0.95rem",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            {message.content}
          </div>
          <div
            className="flex mt-2 justify-left text-sm text-gray-400 space-x-1"
            style={{ marginTop: "20px" }}
          >
            <Button
              variant="link"
              onClick={() => incrementStat("likes")}
              style={{ color: "gray" }}
            >
              <Heart size={20} style={{ marginRight: "5px" }} />
              {message.likes}
            </Button>
            <span
              className="text-gray-100 mx-1"
              style={{ marginTop: "10px", color: "gray" }}
            >
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("comments")}
              style={{ color: "gray" }}
            >
              <MessageCircleMore size={20} style={{ marginRight: "5px" }} />
              {message.comments}
            </Button>
            <span
              className="text-gray-400 mx-1"
              style={{ marginTop: "10px", color: "gray" }}
            >
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("shares")}
              style={{ color: "gray" }}
            >
              <Forward size={20} style={{ marginRight: "5px" }} />
              {message.shares}
            </Button>
          </div>
          {isTextareaActive && (
            <div className="grid w-full gap-2 mt-2">
              <Textarea
                value={commentText}
                placeholder="Type your comment here."
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => setIsTextareaActive(false)}
                  variant="secondary"
                >
                  Close
                </Button>
                <Button
                  onClick={postComment}
                  variant="default"
                  disabled={!commentText.trim()}
                >
                  Post Comment
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default BasicComment
