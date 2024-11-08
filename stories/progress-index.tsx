// progress-index.tsx
import * as React from "react"
import { Progress } from "@/registry/default/ui/progress"

interface ProgressDemoProps {
  progressValue: number
  progressColor?: string
}

export default function ProgressDemo({
  progressValue = 35,
  progressColor = "#2563eb", 
}: ProgressDemoProps) {
  const [progress, setProgress] = React.useState(progressValue)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressValue), 500)
    return () => clearTimeout(timer)
  }, [progressValue])

  return (
    <div className="w-full max-w-[800px] h-4 bg-gray-200 rounded-full overflow-hidden">
      <Progress
        value={progress}
        className="h-full w-full transition-all duration-300 ease-in-out"
        style={{
          transform: `translateX(${progress - 100}%)`, 
          backgroundColor: progressColor, 
        }}
      />
      <div className="text-right text-sm text-gray-700 mt-1">
        {progress}%
      </div>
    </div>
  )
}
