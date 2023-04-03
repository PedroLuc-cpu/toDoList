var E = Object.defineProperty, V = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? E(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      d.call(a, l) && r(t, l, a[l]);
  return t;
}, o = (t, a) => V(t, h(a));
import e, { forwardRef as g } from "react";
import w from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216.49,184.49l-48,48a12,12,0,0,1-17-17L179,188H64a12,12,0,0,1-12-12V32a12,12,0,0,1,24,0V164H179l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,184.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,176l-48,48V128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M213.66,170.34l-48-48A8,8,0,0,0,152,128v40H72V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,170.34ZM168,204.69V147.31L196.69,176Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,181.66l-48,48A8,8,0,0,1,152,224V184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,181.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212.24,180.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,182H64a6,6,0,0,1-6-6V32a6,6,0,0,1,12,0V170H193.51l-37.75-37.76a6,6,0,1,1,8.48-8.48l48,48A6,6,0,0,1,212.24,180.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H188.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,181.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.83,178.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,180H64a4,4,0,0,1-4-4V32a4,4,0,0,1,8,0V172H198.34l-41.17-41.17a4,4,0,1,1,5.66-5.66l48,48A4,4,0,0,1,210.83,178.83Z" }))
  ]
]), c = g((t, a) => /* @__PURE__ */ e.createElement(w, o(m({ ref: a }, t), { weights: i })));
c.displayName = "ArrowElbowDownRight";
const M = c;
export {
  M as default
};
