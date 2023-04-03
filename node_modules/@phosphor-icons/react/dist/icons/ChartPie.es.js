var c = Object.defineProperty, M = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, l) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, r = (a, t) => {
  for (var l in t || (t = {}))
    h.call(t, l) && m(a, l, t[l]);
  if (n)
    for (var l of n(t))
      o.call(t, l) && m(a, l, t[l]);
  return a;
}, Z = (a, t) => M(a, L(t));
import e, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,24.87A84,84,0,0,1,194,76.07L140,107.22ZM50,159.17a83.94,83.94,0,0,1,66-114.3v76.2ZM128,212a83.88,83.88,0,0,1-65.95-32.07L206,96.83A84,84,0,0,1,128,212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,32v96L44.86,176h0A96,96,0,0,1,128,32Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm74.74,51.92L134,117.61V38.2A90,90,0,0,1,202.74,77.92ZM122,38.2v86.34L47.24,167.7A90,90,0,0,1,122,38.2ZM128,218a90,90,0,0,1-74.74-39.92L208.76,88.3A90,90,0,0,1,128,218Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm77.58,50.59L132,121.07v-85A92.07,92.07,0,0,1,205.58,78.59ZM124,36.09v89.6L46.42,170.48A92,92,0,0,1,124,36.09ZM128,220a92,92,0,0,1-77.58-42.59L209.58,85.52A92,92,0,0,1,128,220Z" }))
  ]
]), A = E((a, t) => /* @__PURE__ */ e.createElement(p, Z(r({ ref: t }, a), { weights: d })));
A.displayName = "ChartPie";
const s = A;
export {
  s as default
};
