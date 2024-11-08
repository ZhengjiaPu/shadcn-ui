"use client"

import * as React from "react"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[60%] h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-orange-600 transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}
