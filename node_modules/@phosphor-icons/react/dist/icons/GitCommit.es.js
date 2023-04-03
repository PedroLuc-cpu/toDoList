var o = Object.defineProperty, i = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      M.call(a, l) && m(t, l, a[l]);
  return t;
}, H = (t, a) => i(t, E(a));
import e, { forwardRef as d } from "react";
import Z from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M244,116H186.79a60,60,0,0,0-117.58,0H12a12,12,0,0,0,0,24H69.21a60,60,0,0,0,117.58,0H244a12,12,0,0,0,0-24ZM128,164a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M256,128a8,8,0,0,1-8,8H183.42a56,56,0,0,1-110.84,0H8a8,8,0,0,1,0-16H72.58a56,56,0,0,1,110.84,0H248A8,8,0,0,1,256,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M248,122H181.66a54,54,0,0,0-107.32,0H8a6,6,0,0,0,0,12H74.34a54,54,0,0,0,107.32,0H248a6,6,0,0,0,0-12ZM128,170a42,42,0,1,1,42-42A42,42,0,0,1,128,170Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M248,124H179.83a52,52,0,0,0-103.66,0H8a4,4,0,0,0,0,8H76.17a52,52,0,0,0,103.66,0H248a4,4,0,0,0,0-8ZM128,172a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,172Z" }))
  ]
]), c = d((t, a) => /* @__PURE__ */ e.createElement(Z, H(r({ ref: a }, t), { weights: h })));
c.displayName = "GitCommit";
const A = c;
export {
  A as default
};
