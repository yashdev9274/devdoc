"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

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

export { CodeBlock };