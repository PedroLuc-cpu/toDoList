var M = Object.defineProperty, E = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? M(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    Z.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      p.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => E(t, H(a));
import e, { forwardRef as d } from "react";
import h from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,112l-72,72L56,112Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M122.34,189.66a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,200,104H136V32a8,8,0,0,0-16,0v72H56a8,8,0,0,0-5.66,13.66ZM180.69,120,128,172.69,75.31,120ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M50.34,117.66A8,8,0,0,1,56,104h64V32a8,8,0,0,1,16,0v72h64a8,8,0,0,1,5.66,13.66l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M51.76,116.24a6,6,0,0,1,8.48-8.48L122,169.51V32a6,6,0,0,1,12,0V169.51l61.76-61.75a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,0,1-8.48,0ZM216,210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M50.34,117.66a8,8,0,0,1,11.32-11.32L120,164.69V32a8,8,0,0,1,16,0V164.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M53.17,114.83a4,4,0,0,1,5.66-5.66L124,174.34V32a4,4,0,0,1,8,0V174.34l65.17-65.17a4,4,0,1,1,5.66,5.66l-72,72a4,4,0,0,1-5.66,0ZM216,212H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }))
  ]
]), o = d((t, a) => /* @__PURE__ */ e.createElement(h, c(m({ ref: a }, t), { weights: i })));
o.displayName = "ArrowLineDown";
const w = o;
export {
  w as default
};
