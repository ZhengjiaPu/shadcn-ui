import React from "react"

interface StepProps {
  isActive?: boolean
  isCompleted?: boolean
  onClick: () => void
  className?: string
  children?: React.ReactNode
  title?: string
  subtitle?: string
}

const Step: React.FC<StepProps> = ({
  isActive,
  isCompleted,
  onClick,
  className,
  children,
  title,
  subtitle,
}) => {
  const activeStyle = "bg-black text-white"
  const completedStyle = "bg-gray-900 text-white"
  const defaultStyle = "bg-white border-gray-400"

  const defaultDotSize = "h-4 w-4"
  const defaultIconSize = "w-10 h-10"

  const activeTitleStyle = "text-gray-900"
  const completedTitleStyle = "text-gray-600"
  const defaultTitleStyle = "text-gray-300"
  const activeSubtitleStyle = "text-gray-500"
  const completedSubtitleStyle = "text-gray-400"
  const defaultSubtitleStyle = "text-gray-300"

  const titleStyle = isActive
    ? activeTitleStyle
    : isCompleted
    ? completedTitleStyle
    : defaultTitleStyle
  const subtitleStyle = isActive
    ? activeSubtitleStyle
    : isCompleted
    ? completedSubtitleStyle
    : defaultSubtitleStyle

  const stepStyle = `flex items-center justify-center rounded-full cursor-pointer border-2 ${
    isActive ? activeStyle : isCompleted ? completedStyle : defaultStyle
  }`

  return (
    <div
      className="flex flex-col items-center justify-center mt-2 mb-2"
      onClick={onClick}
    >
      <div
        className={`${stepStyle} ${
          children ? className || defaultIconSize : defaultDotSize
        }`}
      >
        {children}
      </div>
      {title && (
        <div className={`text-sm font-bold mt-2 ${titleStyle}`}>{title}</div>
      )}
      {subtitle && (
        <div
          className={`text-xs mt-1 ${subtitleStyle} whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {subtitle}
        </div>
      )}
    </div>
  )
}

interface StepperProps {
  activeStep: number
  children: React.ReactElement[]
  isLastStep: (isLast: boolean) => void
  isFirstStep: (isFirst: boolean) => void
  spacing?: string
}

const Stepper: React.FC<StepperProps> = ({
  activeStep,
  children,
  isLastStep,
  isFirstStep,
}) => {
  const steps = React.Children.toArray(children)
  const totalSteps = steps.length

  React.useEffect(() => {
    isLastStep(activeStep === totalSteps - 1)
    isFirstStep(activeStep === 0)
  }, [activeStep, totalSteps, isLastStep, isFirstStep])

  return (
    <div className="flex items-center justify-between py-4 w-full">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(step as React.ReactElement, {
            isActive: index === activeStep,
            isCompleted: index < activeStep,
          })}
          {index < totalSteps - 1 && (
            <div
              className={`flex-grow border-t-2 transition duration-500 ease-in-out ${
                index < activeStep ? "border-black" : "border-gray-300"
              } mx-1`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export { Stepper, Step }
