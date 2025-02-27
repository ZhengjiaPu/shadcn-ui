import React from "react"

import { Button } from "@/registry/default/ui/button"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ibm/ui/accordion"

export default function AccordionButton() {
  const { toast } = useToast()
  const buttonText = "Normal Show Toast"
  const handleClick = (url: any) => () => {
    window.open(url, "_blank")
  }
  const windowClick = (message: any) => () => {
    alert(message)
  }

  return (
    <div className="flex w-[600px] items-center justify-center bg-white">
      <div className="w-[500px] bg-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I enrol?</AccordionTrigger>
            <AccordionContent>
              Once you're ready, enrol online by logging in to Sydney Student.
              Go to "My studies" then "Enrolment" and you're set to go. There
              are several sections to complete as part of your enrolment. You
              can log out and return later if you need to.
              <br />
              <br />
              <Toaster />
              <Button
                className="cursor-pointer rounded-none border-2 bg-slate-100 px-4 py-2 text-black focus:border-blue-600"
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({
                    description: "Button click.",
                  })
                }}
              >
                Enrol now
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Your responsibilities and privacy
            </AccordionTrigger>
            <AccordionContent>
              Your enrolment comes with certain conditions so it's important to
              understand them. You should also familiarise yourself with our
              privacy policy regarding the personal information you supply
              during enrolment.
              <br />
              <br />
              <Toaster />
              <Button
                className="cursor-pointer rounded-none border-2 bg-slate-100 px-4 py-2 text-black focus:border-blue-600"
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked")
                  toast({
                    description: "Button click.",
                  })
                }}
              >
                Learn more
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
