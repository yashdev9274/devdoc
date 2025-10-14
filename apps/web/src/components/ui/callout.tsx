"use client"

import type React from "react"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

// Minimal callout used in screenshots
function Callout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-start gap-3 rounded-lg border border-gray-700/60 bg-black/30 px-4 py-3", className)}>
      <div className="mt-0.5 text-blue-400">
        <Info className="h-4 w-4" />
      </div>
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  )
}

export default Callout;