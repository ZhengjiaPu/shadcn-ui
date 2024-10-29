import React, { useState, useEffect } from "react";
import { Forward, Heart, MessageCircleMore } from "lucide-react";
import { Avatar, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { Toaster } from "@/registry/default/ui/toaster";
import { useToast } from "@/registry/default/ui/use-toast";

interface Message {
  user: string;
  avatarUrl: string;
  description: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

interface CommentDemoProps {
  initialMessages: Message[];
  fontSize?: number;
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export function CommentDemo({
  initialMessages,
  fontSize = 16,
  backgroundColor = "#f9f9f9",
  padding = 10,
  margin = 10,
  textAlign = 'left',
}: CommentDemoProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [activeTextarea, setActiveTextarea] = useState<number | null>(null);
  const [commentText, setCommentText] = useState<string[]>(Array(initialMessages.length).fill(""));
  const { toast } = useToast();

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  const incrementStat = (index: number, stat: keyof Message) => {
    const newMessages = [...messages];
    if (stat === "comments") {
      setActiveTextarea(activeTextarea === index ? null : index);
    } else {
      newMessages[index][stat]++;
      setMessages(newMessages);
    }
  };

  const handleCommentChange = (text: string, index: number) => {
    const newCommentText = [...commentText];
    newCommentText[index] = text;
    setCommentText(newCommentText);
  };

  const postComment = (index: number) => {
    if (commentText[index].trim()) {
      toast({
        title: "You have successfully posted your comment:",
        description: `${commentText[index]}`,
      });

      const newMessages = [...messages];
      newMessages[index].comments++;
      setMessages(newMessages);

      setActiveTextarea(null);
      const newCommentText = [...commentText];
      newCommentText[index] = "";
      setCommentText(newCommentText);
    }
  };

  const handleClose = () => {
    setActiveTextarea(null);
    setCommentText(Array(initialMessages.length).fill(""));
  };

  return (
    <>
      <Toaster />
      <div style={{ backgroundColor, padding: `${margin}px` }}>
        {messages.map((message, index) => (
          <Card
            key={index}
            className="mb-4"
            style={{ backgroundColor, padding: `${padding}px` }}
          >
            <CardHeader className="flex flex-col p-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
              <div className="flex items-center mb-2">
                <Avatar style={{ marginRight: "10px", width: "40px", height: "40px" }}>
                  <AvatarImage src={message.avatarUrl} alt={message.user} />
                </Avatar>
                <div className="flex flex-col">
                  <Label style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
                    {message.user}
                  </Label>
                </div>
              </div>
              <div className="flex flex-col" style={{ marginLeft: "50px", textAlign: "left" }}>
                <Label style={{ fontSize: "0.75rem", color: "gray" }}>{message.description}</Label>
              </div>
            </CardHeader>
            <CardContent style={{ fontSize }}>
              <div style={{ textAlign, marginTop: "20px", marginBottom: "10px" }}>
                {message.content}
              </div>
              <div className="flex mt-2 justify-left text-sm text-gray-400 space-x-1" style={{ marginTop: "20px" }}>
                <Button variant="link" onClick={() => incrementStat(index, "likes")} style={{ color: "gray" }}>
                  <Heart size={20} style={{ marginRight: "5px" }} />
                  {message.likes}
                </Button>
                <span className="text-gray-100 mx-1" style={{ marginTop: "10px", color: "gray" }}>|</span>
                <Button variant="link" onClick={() => incrementStat(index, "comments")} style={{ color: "gray" }}>
                  <MessageCircleMore size={20} style={{ marginRight: "5px" }} />
                  {message.comments}
                </Button>
                <span className="text-gray-400 mx-1" style={{ marginTop: "10px", color: "gray" }}>|</span>
                <Button variant="link" onClick={() => incrementStat(index, "shares")} style={{ color: "gray" }}>
                  <Forward size={20} style={{ marginRight: "5px" }} />
                  {message.shares}
                </Button>
              </div>
              {activeTextarea === index && (
                <div className="grid w-full gap-2 mt-2">
                  <Textarea
                    value={commentText[index]}
                    placeholder="Type your comment here."
                    onChange={(e) => handleCommentChange(e.target.value, index)}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                    <Button onClick={() => postComment(index)} variant="default" disabled={!commentText[index].trim()}>Post Comment</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CommentDemo;