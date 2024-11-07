import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/sydney/ui/accordion"

export default function AccordionDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-[600px]">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I get information that I am interested in?
            </AccordionTrigger>
            <AccordionContent>
              For information about a particular course or area of study, search
              for a course using keywords such as ‘Accounting’ or ‘Engineering’.
              Our course information pages include information about course
              entry requirements, structure, career outcomes, tuition fees, and
              more.
              <br />
              <br />
              <a href="#" className="text-red-600 underline">
                Search for a course
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What are the academic and English entry requirements?
            </AccordionTrigger>
            <AccordionContent>
              Entry requirements vary depending on the program. Please check the
              course details for specific academic and English language
              requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What is the process to apply for a course?
            </AccordionTrigger>
            <AccordionContent>
              The application process can be completed online. Start by
              selecting your course, review the requirements, prepare your
              documents, and follow the online application steps.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
