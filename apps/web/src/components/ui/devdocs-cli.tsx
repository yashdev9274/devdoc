import { Terminal } from "lucide-react";

export function DevdocsCli() {
  return (
    <div className="flex flex-col border-r border-gray-200/50">
      <div className="relative mt-11">
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-0">
          {/* Top row */}
          <div className="h-32 border-b border-r border-dotted border-black"></div>
          <div className="h-32 border-b border-r border-dotted border-black"></div>
          <div className="h-32 border-b border-dotted border-black"></div>

          {/* Middle row with code */}
          <div className="h-32 border-r border-dotted border-black"></div>
          <div className="h-32 flex items-center justify-center border-r border-dotted border-black">
            <code className="font-mono text-sm text-gray-900 lg:text-base">
              <span className="text-gray-500">pnpm</span>{" "}
              <span className="text-gray-700">@yashdev9274/devdocs-cli</span>{" "}
              <span className="text-gray-900">add</span>
            </code>
          </div>
          <div className="h-32"></div>

          {/* Bottom row */}
          <div className="h-32 border-r border-t border-dotted border-black"></div>
          <div className="h-32 border-r border-t border-dotted border-black"></div>
          <div className="h-32 border-t border-dotted border-black"></div>
        </div>
      </div>
    </div>
  );
}
