import React from "react"
import { CogIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline"

import { Button } from "@/registry/new-york/ui/button"
import { Step, Stepper } from "@/registry/new-york/ui/stepper"

export function StepsWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <HomeIcon className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <UserIcon className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <CogIcon className="h-5 w-5" />
        </Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  )
}
export default StepsWithIcon
