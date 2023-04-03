var H = Object.defineProperty, h = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? H(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    E.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      Z.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => h(t, M(a));
import e, { forwardRef as p } from "react";
import L from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM167.51,79.51,76,171V104a12,12,0,0,0-24,0v96a12,12,0,0,0,12,12h96a12,12,0,0,0,0-24H93l91.52-91.51a12,12,0,0,0-17-17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M160,200H64V104Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM181.66,82.34a8,8,0,0,1,0,11.32L123.31,152l42.35,42.34A8,8,0,0,1,160,208H64a8,8,0,0,1-8-8V104a8,8,0,0,1,13.66-5.66L112,140.69l58.34-58.35A8,8,0,0,1,181.66,82.34ZM140.69,192l-34.34-34.34h0L72,123.31V192Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M181.66,82.34a8,8,0,0,1,0,11.32L123.31,152l42.35,42.34A8,8,0,0,1,160,208H64a8,8,0,0,1-8-8V104a8,8,0,0,1,13.66-5.66L112,140.69l58.34-58.35A8,8,0,0,1,181.66,82.34ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM171.76,83.76,70,185.52V104a6,6,0,0,0-12,0v96a6,6,0,0,0,6,6h96a6,6,0,0,0,0-12H78.48L180.24,92.24a6,6,0,0,0-8.48-8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM170.34,82.34,72,180.69V104a8,8,0,0,0-16,0v96a8,8,0,0,0,8,8h96a8,8,0,0,0,0-16H83.31l98.35-98.34a8,8,0,0,0-11.32-11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40ZM173.17,85.17,68,190.34V104a4,4,0,0,0-8,0v96a4,4,0,0,0,4,4h96a4,4,0,0,0,0-8H73.66L178.83,90.83a4,4,0,1,0-5.66-5.66Z" }))
  ]
]), o = p((t, a) => /* @__PURE__ */ e.createElement(L, c(m({ ref: a }, t), { weights: d })));
o.displayName = "ArrowLineDownLeft";
const g = o;
export {
  g as default
};
