var H = Object.defineProperty, Z = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (t, e, m) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, n = (t, e) => {
  for (var m in e || (e = {}))
    A.call(e, m) && l(t, m, e[m]);
  if (V)
    for (var m of V(e))
      o.call(e, m) && l(t, m, e[m]);
  return t;
}, h = (t, e) => Z(t, c(e));
import a, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M100,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20h36a20,20,0,0,0,20-20V48A20,20,0,0,0,100,28ZM96,204H68V52H96ZM192,28H156a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h36a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Zm-4,176H160V52h28Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M112,48V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,112,48Zm80-8H152a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V48A8,8,0,0,0,192,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,34H64A14,14,0,0,0,50,48V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34Zm2,174a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM192,34H152a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,192,34Zm2,174a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,36H64A12,12,0,0,0,52,48V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,104,36Zm4,172a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM192,36H152a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,192,36Zm4,172a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z" }))
  ]
]), r = E((t, e) => /* @__PURE__ */ a.createElement(M, h(n({ ref: e }, t), { weights: p })));
r.displayName = "Columns";
const g = r;
export {
  g as default
};
