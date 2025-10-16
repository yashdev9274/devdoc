"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "./utils";
import { TerminalSquare, Files, Copy, ChevronDown } from "lucide-react";
import { Button } from "./components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Callout } from "./callout";


const CodeBlock = ({
  code,
  lang,
}: {
  code: string;
  lang?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <Highlight
      theme={themes.nightOwl}
      code={code.trim()}
      language={lang || ""}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} relative p-4 rounded-lg my-4 overflow-x-auto`} style={style}>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm transition-colors"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

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

function CodeBlocktwo() {
  const configJs = `import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);`

  const mdxUsage = `import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    // HTML \`ref\` attribute conflicts with \`forwardRef\`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ...components,
  };
}`

  const keepBg = `import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

<CodeBlock keepBackground {...props}>
  <Pre>{props.children}</Pre>
</CodeBlock>;`

  const iconJs = `console.log('js');`

  const npm = `npm create fumadocs-app`
  const pnpm = `pnpm dlx create-fumadocs-app`
  const yarn = `yarn create fumadocs-app`
  const bun = `bun create fumadocs-app`

  return (
    <main className="mx-auto max-w-4xl px-6 py-10 text-foreground">
      {/* Page header */}
      

      {/* Hero code block */}
      <section className="mt-6">
        <CodePanel code={configJs} fileLabel="config.js" lang="js" />
      </section>

      {/* Install to your codebase */}
      <section className="mt-8">
        <div className="rounded-xl border border-gray-700/60 bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-200">Install to your codebase</h3>
            <div className="text-sm text-blue-400">
              <a href="#" className="hover:underline">
                Fumadocs CLI
              </a>{" "}
              ·{" "}
              <a href="#" className="hover:underline">
                Shadcn CLI
              </a>
            </div>
          </div>

          <div className="mt-4">
            <Tabs defaultValue="npm" className="w-full">
              <TabsList className="flex items-center gap-4 border-b border-gray-700/60">
                <TabsTrigger value="npm" className="pb-2 text-gray-400 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white">npm</TabsTrigger>
                <TabsTrigger value="pnpm" className="pb-2 text-gray-400 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white">pnpm</TabsTrigger>
                <TabsTrigger value="yarn" className="pb-2 text-gray-400 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white">yarn</TabsTrigger>
                <TabsTrigger value="bun" className="pb-2 text-gray-400 transition-colors data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white">bun</TabsTrigger>
              </TabsList>
              <TabsContent value="npm" className="mt-3">
                <CodePanel code={npm} lang="bash" />
              </TabsContent>
              <TabsContent value="pnpm" className="mt-3">
                <CodePanel code={pnpm} lang="bash" />
              </TabsContent>
              <TabsContent value="yarn" className="mt-3">
                <CodePanel code={yarn} lang="bash" />
              </TabsContent>
              <TabsContent value="bun" className="mt-3">
                <CodePanel code={bun} lang="bash" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Intro text and callout */}
      <section className="mt-10 space-y-4">
        {/* <p className="text-gray-300">
          This is an MDX component meant to be used with{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Rehype Code
          </a>{" "}
          to display highlighted code blocks.
        </p>
        <p className="text-gray-300">Supported features:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Copy button</li>
          <li>Custom titles and icons</li>
        </ul> */}

        <Callout>
          If you&apos;re looking for an equivalent with runtime syntax highlighting, see{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Dynamic Code Block
          </a>
          .
        </Callout>
      </section>

      {/* Usage */}
      {/* <section className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">Usage</h2>
        <p className="mb-4 text-gray-300">
          Wrap the pre element in{" "}
          <code className="rounded bg-gray-800 px-1.5 py-0.5 text-gray-200">{"<CodeBlock />"}</code>, which acts as the
          wrapper of code block.
        </p>
        <CodePanel code={mdxUsage} fileLabel="mdx-components.tsx" lang="tsx" />
        <p className="mt-3 text-sm text-gray-400">
          See{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Markdown
          </a>{" "}
          for usages.
        </p>
      </section> */}

      {/* Keep Background */}
      {/* <section className="mt-10">
        <h3 className="mb-2 text-xl font-semibold tracking-tight">Keep Background</h3>
        <p className="mb-4 text-gray-300">Use the background color generated by Shiki.</p>
        <CodePanel code={keepBg} fileLabel="example.tsx" lang="tsx" />
      </section> */}

      {/* Icons */}
      {/* <section className="mt-10">
        <h3 className="mb-2 text-xl font-semibold tracking-tight">Icons</h3>
        <p className="mb-4 text-gray-300">
          Specify a custom icon by passing an <code className="rounded bg-gray-800 px-1.5 py-0.5">icon</code> prop to{" "}
          <code className="rounded bg-gray-800 px-1.5 py-0.5">CodeBlock</code> component.
        </p>
        <CodePanel code={iconJs} fileLabel="config.js" lang="js" />
      </section> */}

      {/* Feedback and footer-ish */}
      <section className="mt-10 border-t border-gray-700/60 pt-6">
        <div>
          <p className="text-sm text-gray-300">How is this guide?</p>
          <div className="mt-2 flex gap-2">
            <Button variant="outline" className="border-gray-700/60 bg-black/40 text-gray-200 hover:bg-gray-800/70">
              Good
            </Button>
            <Button variant="outline" className="border-gray-700/60 bg-black/40 text-gray-200 hover:bg-gray-800/70">
              Bad
            </Button>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">Last updated on 9/20/2025</p>
      </section>
    </main>
  )
}


export { CodeBlock, CodePanel, CodeBlocktwo };