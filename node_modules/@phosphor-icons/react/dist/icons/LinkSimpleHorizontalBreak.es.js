var c = Object.defineProperty, o = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var h = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && h(t, l, e[l]);
  if (n)
    for (var l of n(e))
      A.call(e, l) && h(t, l, e[l]);
  return t;
}, H = (t, e) => o(t, i(e));
import a, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const Z = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M28,128a36,36,0,0,0,36,36h40a12,12,0,0,1,0,24H64A60,60,0,0,1,64,68h40a12,12,0,0,1,0,24H64A36,36,0,0,0,28,128ZM192,68H152a12,12,0,0,0,0,24h40a36,36,0,0,1,0,72H152a12,12,0,0,0,0,24h40a60,60,0,0,0,0-120Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,128h0a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48h0A48,48,0,0,1,64,80H192A48,48,0,0,1,240,128Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M24,128a40,40,0,0,0,40,40h40a8,8,0,0,1,0,16H64A56,56,0,0,1,64,72h40a8,8,0,0,1,0,16H64A40,40,0,0,0,24,128ZM192,72H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM112,168H80a40,40,0,0,1,0-80h32a8,8,0,0,1,0,16H80a24,24,0,0,0,0,48h32a8,8,0,0,1,0,16Zm64,0H144a8,8,0,0,1,0-16h32a24,24,0,0,0,0-48H144a8,8,0,0,1,0-16h32a40,40,0,0,1,0,80Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M22,128a42,42,0,0,0,42,42h40a6,6,0,0,1,0,12H64A54,54,0,0,1,64,74h40a6,6,0,0,1,0,12H64A42,42,0,0,0,22,128ZM192,74H152a6,6,0,0,0,0,12h40a42,42,0,0,1,0,84H152a6,6,0,0,0,0,12h40a54,54,0,0,0,0-108Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M24,128a40,40,0,0,0,40,40h40a8,8,0,0,1,0,16H64A56,56,0,0,1,64,72h40a8,8,0,0,1,0,16H64A40,40,0,0,0,24,128ZM192,72H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M20,128a44.05,44.05,0,0,0,44,44h40a4,4,0,0,1,0,8H64A52,52,0,0,1,64,76h40a4,4,0,0,1,0,8H64A44.05,44.05,0,0,0,20,128ZM192,76H152a4,4,0,0,0,0,8h40a44,44,0,0,1,0,88H152a4,4,0,0,0,0,8h40a52,52,0,0,0,0-104Z" }))
  ]
]), m = E((t, e) => /* @__PURE__ */ a.createElement(M, H(r({ ref: e }, t), { weights: Z })));
m.displayName = "LinkSimpleHorizontalBreak";
const s = m;
export {
  s as default
};
