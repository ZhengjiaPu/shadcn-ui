"use client"

import * as React from "react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

export function DropdownMenuwithIcon() {
  const openGitHub = () => {
    window.open(
      "https://github.com/Programming-is-like-breathing-air",
      "_blank"
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-blue-600 hover:text-white"
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              style={{
                fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  style={{
                    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  style={{
                    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  style={{
                    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            style={{
              fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={openGitHub}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuwithIcon
