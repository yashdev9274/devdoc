"use client"

import type React from "react"

import { useState } from "react"
import { Copy, TerminalSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Files } from "lucide-react"

// Simple, dependency-free code panel with copy button
function CodePanel({
  code,
  fileLabel,
  lang = "txt",
  className,
}: {
  code: string
  fileLabel?: string
  lang?: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {}
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-gray-700/60 bg-black/40 text-sm",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        className,
      )}
      role="region"
      aria-label={fileLabel ? `Code: ${fileLabel}` : "Code"}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/60">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-gray-800 text-gray-200">
            {lang === "bash" || lang === "sh" ? (
              <TerminalSquare className="h-3.5 w-3.5" />
            ) : (
              <Files className="h-3.5 w-3.5" />
            )}
          </span>
          <span className="font-medium">{fileLabel ?? (lang ? `${lang}` : "code")}</span>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className={cn(
            "inline-flex items-center gap-1 rounded-md border border-gray-700/60 px-2 py-1 text-xs",
            "text-gray-300 hover:bg-gray-800/70 transition-colors",
          )}
          aria-label="Copy code"
        >
          <Copy className="h-3.5 w-3.5" />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className={cn("overflow-x-auto px-4 py-3 leading-6", "text-gray-200")}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodePanel;