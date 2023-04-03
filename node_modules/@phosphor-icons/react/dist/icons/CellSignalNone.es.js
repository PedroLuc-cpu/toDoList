var E = Object.defineProperty, g = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? E(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    p.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      i.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => g(a, d(t));
import e, { forwardRef as h } from "react";
import u from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H32L192,40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z" }))
  ]
]), o = h((a, t) => /* @__PURE__ */ e.createElement(u, c(m({ ref: t }, a), { weights: M })));
o.displayName = "CellSignalNone";
const f = o;
export {
  f as default
};
