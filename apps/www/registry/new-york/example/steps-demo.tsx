import React from "react"

import { Button } from "@/registry/new-york/ui/button"
import { Step, Stepper } from "@/registry/new-york/ui/stepper"

export function StepsBasic() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value: boolean) => setIsLastStep(value)}
        isFirstStep={(value: boolean) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
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
export default StepsBasic
