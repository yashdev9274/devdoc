// src/cards.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Card({ icon, title, description }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2 rounded-lg border p-4 text-left text-sm transition-all hover:bg-accent", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 dark:bg-gray-800", children: icon }),
    /* @__PURE__ */ jsx("h3", { className: "mt-2 text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: description })
  ] });
}
function Cards({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2", children });
}
export {
  Card,
  Cards
};
