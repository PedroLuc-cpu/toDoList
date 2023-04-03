var Z = Object.defineProperty, h = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (t, e, H) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, l = (t, e) => {
  for (var H in e || (e = {}))
    o.call(e, H) && m(t, H, e[H]);
  if (V)
    for (var H of V(e))
      A.call(e, H) && m(t, H, e[H]);
  return t;
}, n = (t, e) => h(t, c(e));
import a, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM168,128v76H140V128Zm-52,76H88V128h28Zm88,0H192V116a12,12,0,0,0-12-12H76a12,12,0,0,0-12,12v88H52V52H204ZM100,76a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,76Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,104V216H72V104Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,56h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16Zm8,152H64V96h56Zm72,0H136V96h56Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-30,76V210H134V110ZM122,210H78V110h44Zm88-2a2,2,0,0,1-2,2H190V104a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6V210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM150,72a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,72Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm-28,72V212H132V108ZM124,212H76V108h48Zm88-4a4,4,0,0,1-4,4H188V104a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4V212H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM148,72a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,72Z" }))
  ]
]), r = E((t, e) => /* @__PURE__ */ a.createElement(M, n(l({ ref: e }, t), { weights: p })));
r.displayName = "Elevator";
const i = r;
export {
  i as default
};
