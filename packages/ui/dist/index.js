"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  Cards: () => Cards,
  CodeBlock: () => CodeBlock,
  buttonVariants: () => buttonVariants
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

// src/components/ui/button.tsx
var React3 = __toESM(require("react"));

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.26_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require("react"), 1);

// ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@18.3.26_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require("react"), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.26_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime2 = require("react/jsx-runtime");
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// src/components/ui/button.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Comp,
      __spreadValues({
        className: buttonVariants({ variant, size, className }),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// src/code-block.tsx
var import_react = require("react");
var import_prism_react_renderer = require("prism-react-renderer");
var import_jsx_runtime4 = require("react/jsx-runtime");
var CodeBlock = ({
  code,
  lang
}) => {
  const [isCopied, setIsCopied] = (0, import_react.useState)(false);
  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_prism_react_renderer.Highlight,
    {
      theme: import_prism_react_renderer.themes.nightOwl,
      code: code.trim(),
      language: lang || "",
      children: ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("pre", { className: `${className} relative p-4 rounded-lg my-4 overflow-x-auto`, style, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            onClick: handleCopy,
            className: "absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm transition-colors",
            children: isCopied ? "Copied!" : "Copy"
          }
        ),
        tokens.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", __spreadProps(__spreadValues({}, getLineProps({ line, key: i })), { children: line.map((token, key) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", __spreadValues({}, getTokenProps({ token, key })))) })))
      ] })
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  Cards,
  CodeBlock,
  buttonVariants
});
