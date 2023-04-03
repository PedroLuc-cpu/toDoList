var E = Object.defineProperty, p = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? E(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    h.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      g.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => p(a, d(t));
import e, { forwardRef as u } from "react";
import i from "../lib/IconBase.es.js";
const A = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" }))
  ]
]), o = u((a, t) => /* @__PURE__ */ e.createElement(i, c(m({ ref: t }, a), { weights: A })));
o.displayName = "Dot";
const f = o;
export {
  f as default
};
