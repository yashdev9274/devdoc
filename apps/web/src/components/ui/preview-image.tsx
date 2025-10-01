import { cva } from "class-variance-authority";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import previewImg from "/public/previewImg.png";

const previewButtonVariants = cva(
   'w-22 h-9 text-sm font-medium transition-colors rounded-full',
   {
     variants: {
       active: {
         true: 'text-fd-primary-foreground',
         false: 'text-fd-muted-foreground',
       },
     },
   },
 );

export function PreviewImages() {
   const [active, setActive] = useState(0);
   const previews = [
     {
       image: previewImg,
       name: 'Docs',
     },
     {
       image: previewImg,
       name: 'Notebook',
     },
     {
       image: previewImg,
       name: 'OpenAPI',
     },
   ];
 
   return (
     <div className="mt-12 min-w-[800px] overflow-hidden xl:-mx-12 dark:[mask-image:linear-gradient(to_top,transparent,white_40px)]">
       <div className="absolute flex flex-row left-1/2 -translate-1/2 bottom-4 z-2 p-1 rounded-full bg-fd-card border shadow-xl dark:shadow-fd-background">
         <div
           role="none"
           className="absolute bg-fd-primary rounded-full w-22 h-9 transition-transform z-[-1]"
           style={{
             transform: `translateX(calc(var(--spacing) * 22 * ${active}))`,
           }}
         />
         {previews.map((item, i) => (
           <button
             key={i}
             className={cn(previewButtonVariants({ active: active === i }))}
             onClick={() => setActive(i)}
           >
             {item.name}
           </button>
         ))}
       </div>
       {previews.map((item, i) => (
         <Image
           key={i}
           src={item.image}
           alt="preview"
           priority
           className={cn(
             'w-full select-none duration-1000 animate-in fade-in -mb-60 slide-in-from-bottom-12 lg:-mb-40',
             active !== i && 'hidden',
           )}
         />
       ))}
     </div>
   );
 }
 