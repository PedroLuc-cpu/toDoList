var Z = Object.defineProperty, H = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? Z(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      o.call(a, l) && m(t, l, a[l]);
  return t;
}, c = (t, a) => H(t, d(a));
import e, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM128,84a20,20,0,1,0-20-20A20,20,0,0,0,128,84Zm0,88a20,20,0,1,0,20,20A20,20,0,0,0,128,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16,16,0,0,0,128,176Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,64a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm0,128a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm56-56H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM128,78a14,14,0,1,0-14-14A14,14,0,0,0,128,78Zm0,100a14,14,0,1,0,14,14A14,14,0,0,0,128,178Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16,16,0,0,0,128,176Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z" }))
  ]
]), A = E((t, a) => /* @__PURE__ */ e.createElement(M, c(r({ ref: a }, t), { weights: p })));
A.displayName = "Divide";
const s = A;
export {
  s as default
};
