var A = Object.defineProperty, c = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (t, e, n) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, H = (t, e) => {
  for (var n in e || (e = {}))
    L.call(e, n) && r(t, n, e[n]);
  if (l)
    for (var n of l(e))
      Z.call(e, n) && r(t, n, e[n]);
  return t;
}, m = (t, e) => c(t, V(e));
import a, { forwardRef as d } from "react";
import v from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M237.88,202.46a12,12,0,0,1-16.34-4.58L153,76H140v4a12,12,0,0,1-24,0V76H103L34.46,197.88a12,12,0,1,1-20.92-11.76L75.48,76H24a12,12,0,0,1,0-24H232a12,12,0,0,1,0,24H180.52l61.94,110.12A12,12,0,0,1,237.88,202.46ZM128,108a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,128,108Zm0,56a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V176A12,12,0,0,0,128,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,192H24L96,64h64Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M239,188.08,173.68,72h58A8.17,8.17,0,0,0,240,64.53,8,8,0,0,0,232,56H24.27A8.17,8.17,0,0,0,16,63.47,8,8,0,0,0,24,72H82.32L17,188.08a8,8,0,0,0,1.17,9.43,8.24,8.24,0,0,0,6,2.49H116a4,4,0,0,0,4-4V176.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v20a4,4,0,0,0,4,4h91.77a8.24,8.24,0,0,0,6-2.49A8,8,0,0,0,239,188.08ZM136,140a8,8,0,0,1-16,0V124a8,8,0,0,1,16,0Zm0-52a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M234.94,197.23a6,6,0,0,1-8.17-2.29L156.49,70H134V80a6,6,0,0,1-12,0V70H99.51L29.23,194.94a6,6,0,1,1-10.46-5.88L85.74,70H24a6,6,0,0,1,0-12H232a6,6,0,0,1,0,12H170.26l67,119.06A6,6,0,0,1,234.94,197.23ZM128,114a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V120A6,6,0,0,0,128,114Zm0,56a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V176A6,6,0,0,0,128,170Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M235.49,190a4,4,0,0,1-1.53,5.45,4.07,4.07,0,0,1-2,.51,4,4,0,0,1-3.49-2L157.66,68H132V80a4,4,0,0,1-8,0V68H98.34L27.49,194A4,4,0,0,1,24,196a4.07,4.07,0,0,1-2-.51A4,4,0,0,1,20.51,190L89.16,68H24a4,4,0,0,1,0-8H232a4,4,0,0,1,0,8H166.84ZM128,116a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V120A4,4,0,0,0,128,116Zm0,56a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V176A4,4,0,0,0,128,172Z" }))
  ]
]), o = d((t, e) => /* @__PURE__ */ a.createElement(v, m(H({ ref: e }, t), { weights: E })));
o.displayName = "RoadHorizon";
const i = o;
export {
  i as default
};
