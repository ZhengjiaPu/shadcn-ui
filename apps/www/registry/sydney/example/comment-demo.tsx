import React, { useState } from "react"
import { Forward, Heart, MessageCircleMore } from "lucide-react"

import { Avatar, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card"
import { Label } from "@/registry/default/ui/label"
import { Textarea } from "@/registry/default/ui/textarea"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

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
        title: "Comment posted successfully:",
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
      <Card className="mb-4" style={{ borderColor: "#EAEAEA" }}>
        <CardHeader
          className="flex flex-col p-4"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="flex items-center mb-2">
            <Avatar style={{ marginRight: "10px" }}>
              <AvatarImage src={message.avatarUrl} alt={message.user} />
            </Avatar>
            <div className="flex flex-col">
              <Label
                style={{
                  fontFamily: "Apercu Pro",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  color: "#333333",
                }}
              >
                {message.user}
              </Label>
            </div>
          </div>
          <div className="flex flex-col" style={{ marginLeft: "50px" }}>
            <Label
              style={{
                fontFamily: "Apercu Pro",
                fontSize: "0.85rem",
                color: "gray",
              }}
            >
              {message.description}
            </Label>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="text-left"
            style={{
              fontFamily: "Lyon Display",
              fontSize: "0.95rem",
              color: "#333333",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            {message.content}
          </div>
          <div
            className="flex mt-2 justify-left text-sm space-x-2"
            style={{ color: "#666666", marginTop: "20px" }}
          >
            <Button
              variant="link"
              onClick={() => incrementStat("likes")}
              style={{ color: "#666666" }}
            >
              <Heart size={20} style={{ marginRight: "5px" }} />
              {message.likes}
            </Button>
            <span className="text-gray-300 mx-1" style={{ color: "#EAEAEA" }}>
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("comments")}
              style={{ color: "#666666" }}
            >
              <MessageCircleMore size={20} style={{ marginRight: "5px" }} />
              {message.comments}
            </Button>
            <span className="text-gray-300 mx-1" style={{ color: "#EAEAEA" }}>
              |
            </span>
            <Button
              variant="link"
              onClick={() => incrementStat("shares")}
              style={{ color: "#666666" }}
            >
              <Forward size={20} style={{ marginRight: "5px" }} />
              {message.shares}
            </Button>
          </div>
          {isTextareaActive && (
            <div className="grid w-full gap-2 mt-2">
              <Textarea
                value={commentText}
                placeholder="Inspire others with your thoughts."
                onChange={(e) => setCommentText(e.target.value)}
                style={{ fontFamily: "Apercu Pro", color: "#333333" }}
              />
              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => setIsTextareaActive(false)}
                  variant="secondary"
                  style={{ fontFamily: "Apercu Pro" }}
                >
                  Close
                </Button>
                <Button
                  onClick={postComment}
                  variant="default"
                  disabled={!commentText.trim()}
                  style={{
                    fontFamily: "Apercu Pro",
                    backgroundColor: "#FF6F00",
                    color: "#FFFFFF",
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
