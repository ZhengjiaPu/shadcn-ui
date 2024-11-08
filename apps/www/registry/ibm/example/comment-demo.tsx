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
      setIsTextareaActive(!isTextareaActive)
      setCommentText("")
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
      <Card
        className="mb-4"
        style={{
          backgroundColor: "#f4f4f4", // Light gray background
          borderRadius: "0px", // Square corners
          border: "1px solid #d1d1d1", // Light border
        }}
      >
        <CardHeader
          className="flex flex-col p-4"
          style={{
            backgroundColor: "#161616", // Black header
            color: "#ffffff", // White text for header
            borderBottom: "1px solid #d1d1d1",
            fontFamily: "IBM Plex Sans, sans-serif",
          }}
        >
          <div className="flex items-center mb-2">
            <Avatar style={{ marginRight: "10px" }}>
              <AvatarImage src={message.avatarUrl} alt={message.user} />
            </Avatar>
            <div className="flex flex-col">
              <Label
                style={{
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  color: "#ffffff",
                }}
              >
                {message.user}
              </Label>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              marginLeft: "50px",
              color: "#c6c6c6", // Light gray for description text
            }}
          >
            <Label style={{ fontSize: "0.75rem" }}>{message.description}</Label>
          </div>
        </CardHeader>
        <CardContent style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
          <div
            className="text-left"
            style={{
              fontSize: "0.95rem",
              color: "#161616",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            {message.content}
          </div>
          <div
            className="flex mt-2 justify-left text-sm space-x-1"
            style={{
              borderTop: "1px solid #d1d1d1",
              paddingTop: "1rem",
              color: "#6f6f6f",
            }}
          >
            <Button
              variant="link"
              onClick={() => incrementStat("likes")}
              style={{
                color: "#6f6f6f",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Heart size={20} style={{ marginRight: "5px" }} />
              {message.likes}
            </Button>
            <span
              className="mx-1"
              style={{ marginTop: "10px", color: "#6f6f6f" }}
            >
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("comments")}
              style={{
                color: "#6f6f6f",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MessageCircleMore size={20} style={{ marginRight: "5px" }} />
              {message.comments}
            </Button>
            <span
              className="mx-1"
              style={{ marginTop: "10px", color: "#6f6f6f" }}
            >
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("shares")}
              style={{
                color: "#6f6f6f",
                display: "flex",
                alignItems: "center",
              }}
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
                onFocus={(e) => {
                  e.target.style.borderColor = "#0f62fe"
                  e.target.style.boxShadow = "0 0 0 2px rgba(15, 98, 254, 0.3)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d1d1"
                  e.target.style.boxShadow = "none"
                }}
                style={{
                  border: "1px solid #d1d1d1",
                  padding: "0.5rem",
                  color: "#161616",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  borderRadius: "0px",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                }}
              />
              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => setIsTextareaActive(false)}
                  variant="secondary"
                  style={{
                    backgroundColor: "#d1d1d1",
                    color: "#161616",
                    borderRadius: "0px", // Square button
                    fontFamily: "IBM Plex Sans, sans-serif",
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={postComment}
                  variant="default"
                  disabled={!commentText.trim()}
                  style={{
                    backgroundColor: "#0062ff", // Blue button color
                    color: "#ffffff",
                    borderRadius: "0px", // Square button
                    fontFamily: "IBM Plex Sans, sans-serif",
                  }}
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
