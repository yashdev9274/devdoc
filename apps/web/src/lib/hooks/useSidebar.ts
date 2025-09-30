'use client'

import { useCallback, useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "sidebar:open"

export function useSidebar(defaultOpen?: boolean){

   //  ssr safe initial
   const initial = useMemo(()=>{
      if(typeof window === "undefined")
         return !!defaultOpen

      const saved = window.localStorage.getItem(STORAGE_KEY)
      if(saved !== null) return saved === "true"

      // default: open on desktop, closed on small screens

      return window.innerWidth >= 1024
   },[defaultOpen])


   const [open,setOpen] = useState(initial)

   useEffect(()=>{
      try {
         window.localStorage.setItem(STORAGE_KEY, String(open))
      } catch{}
   },[open])


   // toggle button
   const toggle = useCallback(()=>setOpen((v) => !v),[])
   const openSidebar = useCallback(()=>setOpen(true), [])

   const closeSidebar = useCallback(()=> setOpen(false), [])

   const [peeking, setPeeking] = useState(false)



   // keyboard shortcut- ctrl+B to trigger sidebar, ctrl+k for search

   useEffect(()=>{

      const onKey = (e: KeyboardEvent)=>{
         const isMeta = e.metaKey || e.ctrlKey

         if(!isMeta) return

         if(e.key.toLowerCase() === "b"){
            e.preventDefault()
            toggle()
         }

         // for searchbar

         if(e.key.toLowerCase() === "k"){
            e.preventDefault()
            console.log("open search modal placeholder")
         }

      }
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
   }, [toggle])


   const onMouseEnter = useCallback(() => {
      if (!open) setPeeking(true)
    }, [open])
  
    const onMouseLeave = useCallback(() => {
      if (!open) setPeeking(false)
    }, [open])

   return{open, toggle, openSidebar, closeSidebar, peeking, onMouseEnter, onMouseLeave}
}