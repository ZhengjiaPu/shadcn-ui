"use client"

import * as React from "react"

import { Button } from "@/registry/sydney/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/sydney/ui/dropdown-menu"

export function DropdownMenuwithDividers() {
  const [selectedCar, setSelectedCar] = React.useState("Select a car")

  const handleCarSelect = (car: string) => {
    setSelectedCar(car)
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
          {selectedCar}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Chinese Cars
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={selectedCar === "BYD"}
          onCheckedChange={() => handleCarSelect("BYD")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          BYD
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCar === "GWM"}
          onCheckedChange={() => handleCarSelect("GWM")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          GWM
        </DropdownMenuCheckboxItem>
        <DropdownMenuLabel
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          German Cars
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={selectedCar === "Mercedes"}
          onCheckedChange={() => handleCarSelect("Mercedes")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Mercedes
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCar === "Audi"}
          onCheckedChange={() => handleCarSelect("Audi")}
          style={{
            fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
            fontWeight: 300,
          }}
        >
          Audi
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuwithDividers
