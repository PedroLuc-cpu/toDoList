var h = Object.defineProperty, o = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var H = (t, a, l) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && H(t, l, a[l]);
  if (n)
    for (var l of n(a))
      d.call(a, l) && H(t, l, a[l]);
  return t;
}, m = (t, a) => o(t, E(a));
import e, { forwardRef as i } from "react";
import g from "../lib/IconBase.es.js";
const u = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M204,56a12,12,0,0,1-12,12H160.65l-40,120H144a12,12,0,0,1,0,24H64a12,12,0,0,1,0-24H95.35l40-120H112a12,12,0,0,1,0-24h80A12,12,0,0,1,204,56Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M192,56,144,200H64L112,56Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M200,56a8,8,0,0,1-8,8H157.77L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.23L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,80H153.64l-34.29,96H136a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h22.36l34.29-96H120a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M198,56a6,6,0,0,1-6,6H156.32l-44,132H144a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H99.68l44-132H112a6,6,0,0,1,0-12h80A6,6,0,0,1,198,56Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,56a8,8,0,0,1-8,8H157.77L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.23L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M196,56a4,4,0,0,1-4,4H154.88L109.55,196H144a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8h37.12L146.45,60H112a4,4,0,0,1,0-8h80A4,4,0,0,1,196,56Z" }))
  ]
]), c = i((t, a) => /* @__PURE__ */ e.createElement(g, m(r({ ref: a }, t), { weights: u })));
c.displayName = "TextItalic";
const A = c;
export {
  A as default
};
