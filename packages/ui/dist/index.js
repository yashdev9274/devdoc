"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Card: () => Card,
  Cards: () => Cards
});
module.exports = __toCommonJS(index_exports);

// src/cards.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Card({ icon, title, description }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col items-start gap-2 rounded-lg border p-4 text-left text-sm transition-all hover:bg-accent", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 dark:bg-gray-800", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "mt-2 text-lg font-semibold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-muted-foreground", children: description })
  ] });
}
function Cards({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2", children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card,
  Cards
});
