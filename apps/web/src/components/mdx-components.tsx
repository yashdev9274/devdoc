import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component />
    </div>
  )
}
