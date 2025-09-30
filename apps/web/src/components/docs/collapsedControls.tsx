'use client'

import { cn } from "@/lib/utils"
import { Menu, Search } from "lucide-react"

type Props={
   onOpen: ()=> void
   onSearch?: ()=> void
   className?: string
}

export function CollapsedControls({onOpen, onSearch, className}: Props){
   return(
      <div
         className={cn(
            "fixed left-4 top-4 z-50",
            "rounded-full border border-border/60 bg-card/80 text-foreground shadow-sm backdrop-blur",
            "ring-1 ring-ring/10",
            className,
         )}
         role="region"
         aria-label="Collapsed sidebar controls"
      >
         <div className="flex items-center gap-1 p-1.5">
            <button
               type="button"
               onClick={onOpen}
               className={cn(
                  "inline-flex size-8 items-center justify-center rounded-full",
                  "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
               )}
               aria-label="Open sidebar"
            >
               <Menu className="size-4"/>
            </button>

            <button
               type="button"
               onClick={onSearch}
               className={cn(
                  "inline-flex size-8 items-center justify-center rounded-full",
                  "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
               )}
               aria-label="Open search"
            >
               <Search className="size-4" />
            </button>
         </div>
      </div>
   )
}