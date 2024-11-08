"use client"

import * as React from "react"

import { Progress } from "@/registry/default/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[60%] h-4 bg-gray-200 rounded-none overflow-hidden">
      {" "}
      {/* 灰色背景设置在外层容器 */}
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`, // 控制蓝色部分的宽度
        }}
      />
    </div>
  )
}
