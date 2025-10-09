'use client'
import {
   ChevronDownIcon,
   CopyPlusIcon,
   FilesIcon,
   Layers2Icon,
   Pencil,
 } from "lucide-react"
 
 import { Button } from "@/components/ui/button"
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 
 export default function FrameworkDropdown() {
   return (
     <DropdownMenu>
       <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="flex items-center justify-between w-full p-2 rounded-lg bg-zinc-800 text-white font-semibold hover:bg-zinc-900 ">
           Document
           <ChevronDownIcon
             className="-me-1 opacity-60"
             size={16}
             aria-hidden="true"
           />
         </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent>
         <DropdownMenuItem onClick={() => console.log("Copy")}>
           <CopyPlusIcon size={16} className="opacity-60" aria-hidden="true" />
           Copy
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => console.log("Edit")}>
           <Pencil size={16} className="opacity-60" aria-hidden="true" />
           Edit
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => console.log("Group")}>
           <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
           Group
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => console.log("Clone")}>
           <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
           Clone
         </DropdownMenuItem>
       </DropdownMenuContent>
     </DropdownMenu>
   )
 }
 