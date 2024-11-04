// hover-card-demo.tsx
import * as React from "react";
import { CalendarDays } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/default/ui/hover-card";

export interface HoverCardDemoProps {
  buttonText?: string;
  avatarSrc?: string;
  avatarFallback?: string;
  username?: string;
  description?: string;
  joinDate?: string;
}

export default function HoverCardDemo({
  buttonText = "@nextjs",
  avatarSrc = "https://github.com/vercel.png",
  avatarFallback = "VC",
  username = "@nextjs",
  description = "The React Framework – created and maintained by @vercel.",
  joinDate = "December 2021",
}: HoverCardDemoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{buttonText}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{username}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">Joined {joinDate}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
