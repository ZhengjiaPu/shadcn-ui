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

interface DropdownMenuWithDividersProps {
  chineseCarsLabel: string
  germanCarsLabel: string
  option1: string
  option2: string
  option3: string
  option4: string
}

export function DropdownMenuwithDividers({
  chineseCarsLabel = "Chinese Cars",
  germanCarsLabel = "German Cars",
  option1 = "BYD",
  option2 = "GWM",
  option3 = "Mercedes",
  option4 = "Audi",
}: DropdownMenuWithDividersProps) {
  const [selectedCar, setSelectedCar] = React.useState("Select a car")

  const handleCarSelect = (car) => {
    setSelectedCar(car)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedCar}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{chineseCarsLabel}</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={selectedCar === option1}
          onCheckedChange={() => handleCarSelect(option1)}
        >
          {option1}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCar === option2}
          onCheckedChange={() => handleCarSelect(option2)}
        >
          {option2}
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{germanCarsLabel}</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={selectedCar === option3}
          onCheckedChange={() => handleCarSelect(option3)}
        >
          {option3}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCar === option4}
          onCheckedChange={() => handleCarSelect(option4)}
        >
          {option4}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuwithDividers
