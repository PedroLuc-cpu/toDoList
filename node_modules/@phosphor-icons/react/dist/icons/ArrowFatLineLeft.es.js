var c = Object.defineProperty, Z = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && n(t, l, e[l]);
  if (m)
    for (var l of m(e))
      v.call(e, l) && n(t, l, e[l]);
  return t;
}, V = (t, e) => Z(t, o(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M176,68H132V32a12,12,0,0,0-20.49-8.49l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h44a12,12,0,0,0,12-12V80A12,12,0,0,0,176,68Zm-12,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h44Zm64-84v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,80v96H120v48L24,128l96-96V80Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M192,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56A8,8,0,0,1,192,80Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,74H126V32a6,6,0,0,0-10.24-4.24l-96,96a6,6,0,0,0,0,8.48l96,96A6,6,0,0,0,126,224V182h58a6,6,0,0,0,6-6V80A6,6,0,0,0,184,74Zm-6,96H120a6,6,0,0,0-6,6v33.51L32.49,128,114,46.49V80a6,6,0,0,0,6,6h58Zm44-90v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h60a4,4,0,0,0,4-4V80A4,4,0,0,0,184,76Zm-4,96H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h60Zm40-92v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" }))
  ]
]), h = E((t, e) => /* @__PURE__ */ a.createElement(p, V(r({ ref: e }, t), { weights: d })));
h.displayName = "ArrowFatLineLeft";
const f = h;
export {
  f as default
};
