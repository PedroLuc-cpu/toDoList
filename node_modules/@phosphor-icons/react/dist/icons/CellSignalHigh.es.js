var c = Object.defineProperty, M = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && m(t, l, e[l]);
  if (n)
    for (var l of n(e))
      g.call(e, l) && m(t, l, e[l]);
  return t;
}, V = (t, e) => M(t, v(e));
import a, { forwardRef as i } from "react";
import o from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,60.7V208H32a8,8,0,0,1-5.66-13.66Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM152,80V200H32Zm40,120H168V64l24-24Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H168V64l24-24Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M166,72V200a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm-46,34a6,6,0,0,0-6,6v88a6,6,0,0,0,12,0V112A6,6,0,0,0,120,106ZM80,146a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V152A6,6,0,0,0,80,146ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M168,72V200a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm-48,32a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V112A8,8,0,0,0,120,104ZM80,144a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V152A8,8,0,0,0,80,144ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M164,72V200a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm-44,36a4,4,0,0,0-4,4v88a4,4,0,0,0,8,0V112A4,4,0,0,0,120,108ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z" }))
  ]
]), Z = i((t, e) => /* @__PURE__ */ a.createElement(o, V(r({ ref: e }, t), { weights: E })));
Z.displayName = "CellSignalHigh";
const u = Z;
export {
  u as default
};
