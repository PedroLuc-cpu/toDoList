var V = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (t, e, l) => e in t ? V(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    v.call(e, l) && h(t, l, e[l]);
  if (n)
    for (var l of n(e))
      o.call(e, l) && h(t, l, e[l]);
  return t;
}, H = (t, e) => c(t, p(e));
import a, { forwardRef as E } from "react";
import d from "../lib/IconBase.es.js";
const s = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M252,56a12,12,0,0,1-12,12H196v36a12,12,0,0,1-12,12H140v36a12,12,0,0,1-12,12H84v36a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H60V152a12,12,0,0,1,12-12h44V104a12,12,0,0,1,12-12h44V56a12,12,0,0,1,12-12h56A12,12,0,0,1,252,56Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,56V192a8,8,0,0,1-8,8H72V152h56V104h56V56Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M246,56a6,6,0,0,1-6,6H190v42a6,6,0,0,1-6,6H134v42a6,6,0,0,1-6,6H78v42a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H66V152a6,6,0,0,1,6-6h50V104a6,6,0,0,1,6-6h50V56a6,6,0,0,1,6-6h56A6,6,0,0,1,246,56Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M244,56a4,4,0,0,1-4,4H188v44a4,4,0,0,1-4,4H132v44a4,4,0,0,1-4,4H76v44a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H68V152a4,4,0,0,1,4-4h52V104a4,4,0,0,1,4-4h52V56a4,4,0,0,1,4-4h56A4,4,0,0,1,244,56Z" }))
  ]
]), m = E((t, e) => /* @__PURE__ */ a.createElement(d, H(r({ ref: e }, t), { weights: s })));
m.displayName = "Steps";
const M = m;
export {
  M as default
};
