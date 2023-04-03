var M = Object.defineProperty, Z = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? M(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      o.call(a, l) && m(t, l, a[l]);
  return t;
}, c = (t, a) => Z(t, p(a));
import e, { forwardRef as E } from "react";
import d from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z" }))
  ]
]), L = E((t, a) => /* @__PURE__ */ e.createElement(d, c(r({ ref: a }, t), { weights: h })));
L.displayName = "PencilSimple";
const g = L;
export {
  g as default
};
