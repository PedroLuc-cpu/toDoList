var E = Object.defineProperty, p = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? E(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    h.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      f.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => p(a, d(t));
import e, { forwardRef as g } from "react";
import u from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M160,48V208L80,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z" }))
  ]
]), o = g((a, t) => /* @__PURE__ */ e.createElement(u, c(m({ ref: t }, a), { weights: M })));
o.displayName = "CaretLeft";
const s = o;
export {
  s as default
};
