var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/ppu-paddle-ocr/model-catalogue.js
var MODEL_BASE_URL, DICT_BASE_URL, V6_SMALL_MODEL, V6_MEDIUM_MODEL, V6_TINY_MODEL, V5_EN_MOBILE_MODEL, V5_EN_MOBILE_INT8_MODEL, V5_EN_SERVER_MODEL, V5_MOBILE_MODEL, V5_SERVER_MODEL, V4_EN_MOBILE_MODEL, V4_MOBILE_MODEL, V4_SERVER_MODEL, V4_SERVER_DOC_MODEL, V3_MOBILE_MODEL, V3_JAPANESE_MOBILE_MODEL, V5_ARABIC_MOBILE_MODEL, V5_CYRILLIC_MOBILE_MODEL, V5_DEVANAGARI_MOBILE_MODEL, V5_GREEK_MOBILE_MODEL, V5_ESLAV_MOBILE_MODEL, V5_KOREAN_MOBILE_MODEL, V5_LATIN_MOBILE_MODEL, V5_TAMIL_MOBILE_MODEL, V5_TELUGU_MOBILE_MODEL, V5_THAI_MOBILE_MODEL, DEFAULT_MODEL, DEFAULT_MODEL_URLS;
var init_model_catalogue = __esm({
  "node_modules/ppu-paddle-ocr/model-catalogue.js"() {
    MODEL_BASE_URL = "https://media.githubusercontent.com/media/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models/main";
    DICT_BASE_URL = "https://raw.githubusercontent.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models/main";
    V6_SMALL_MODEL = { detection: `${MODEL_BASE_URL}/detection/ort/PP-OCRv6_small_det.ort`, recognition: `${MODEL_BASE_URL}/recognition/ort/PP-OCRv6_small_rec.ort`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv6_dict.txt` };
    V6_MEDIUM_MODEL = { detection: `${MODEL_BASE_URL}/detection/ort/PP-OCRv6_medium_det.ort`, recognition: `${MODEL_BASE_URL}/recognition/ort/PP-OCRv6_medium_rec.ort`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv6_dict.txt` };
    V6_TINY_MODEL = { detection: `${MODEL_BASE_URL}/detection/ort/PP-OCRv6_tiny_det.ort`, recognition: `${MODEL_BASE_URL}/recognition/ort/PP-OCRv6_tiny_rec.ort`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv6_tiny_dict.txt` };
    V5_EN_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.ort`, recognition: `${MODEL_BASE_URL}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer.ort`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/en/v5/ppocrv5_en_dict.txt` };
    V5_EN_MOBILE_INT8_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.ort`, recognition: `${MODEL_BASE_URL}/recognition/multi/en/v5/en_PP-OCRv5_mobile_rec_infer_int8.ort`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/en/v5/ppocrv5_en_dict.txt` };
    V5_EN_SERVER_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_server_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv5_server_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv5_dict.txt` };
    V5_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv5_dict.txt` };
    V5_SERVER_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_server_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv5_server_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv5_dict.txt` };
    V4_EN_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv4_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/en/v4/en_PP-OCRv4_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/en/v4/en_dict.txt` };
    V4_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv4_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv4_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv4_dict.txt` };
    V4_SERVER_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv4_server_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv4_server_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv4_dict.txt` };
    V4_SERVER_DOC_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv4_server_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv4_server_rec_doc_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv4_doc_dict.txt` };
    V3_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/PP-OCRv3_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/ppocrv3_dict.txt` };
    V3_JAPANESE_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/japan/v3/japan_PP-OCRv3_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/japan/v3/japan_dict.txt` };
    V5_ARABIC_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/arabic/v5/arabic_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/arabic/v5/ppocrv5_arabic_dict.txt` };
    V5_CYRILLIC_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/cyrillic/v5/cyrillic_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/cyrillic/v5/ppocrv5_cyrillic_dict.txt` };
    V5_DEVANAGARI_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/devanagari/v5/devanagari_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/devanagari/v5/ppocrv5_devanagari_dict.txt` };
    V5_GREEK_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/el/v5/el_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/el/v5/ppocrv5_el_dict.txt` };
    V5_ESLAV_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/eslav/v5/eslav_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/eslav/v5/ppocrv5_eslav_dict.txt` };
    V5_KOREAN_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/korean/v5/korean_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/korean/v5/ppocrv5_korean_dict.txt` };
    V5_LATIN_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/latin/v5/latin_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/latin/v5/ppocrv5_latin_dict.txt` };
    V5_TAMIL_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/ta/v5/ta_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/ta/v5/ppocrv5_ta_dict.txt` };
    V5_TELUGU_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/te/v5/te_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/te/v5/ppocrv5_te_dict.txt` };
    V5_THAI_MOBILE_MODEL = { detection: `${MODEL_BASE_URL}/detection/PP-OCRv5_mobile_det_infer.onnx`, recognition: `${MODEL_BASE_URL}/recognition/multi/th/v5/th_PP-OCRv5_mobile_rec_infer.onnx`, charactersDictionary: `${DICT_BASE_URL}/recognition/multi/th/v5/ppocrv5_th_dict.txt` };
    DEFAULT_MODEL = V6_TINY_MODEL;
    DEFAULT_MODEL_URLS = DEFAULT_MODEL;
  }
});

// node_modules/onnxruntime-web/dist/ort.wasm.min.mjs
var ort_wasm_min_exports = {};
__export(ort_wasm_min_exports, {
  InferenceSession: () => Un,
  TRACE: () => Nt,
  TRACE_EVENT_BEGIN: () => K,
  TRACE_EVENT_END: () => Q,
  TRACE_FUNC_BEGIN: () => Z,
  TRACE_FUNC_END: () => X,
  Tensor: () => G,
  default: () => Ro,
  env: () => B,
  registerBackend: () => pe
});
var Ve, On, Ln, Pn, Je, E, qe, _n, wt, Se, q, pe, Dn, ht, Ye, bt, yt, gt, Et, _, Ze, B, St, Tt, It, At, Xe, Bt, Ot, Lt, Pt, _t, Dt, Y, me, Ut, xt, vt, Ct, Mt, Rt, x, Te, G, Ke, Nt, Ft, Z, X, K, Q, Qe, Ie, kt, Un, Wt, Gt, $t, zt, Ht, et, J, Ae, qt, Vt, Jt, xn, Yt, Kt, vn, Cn, R, Ce, nt, Mn, Rn, Qt, Nn, Zt, en, Xt, tn, Be, rt, ot, Me, nn, Fn, kn, Wn, Oe, I, ee, N, he, S, Re, rn, on, Gn, $n, zn, se, Hn, sn, an, ie, Ne, ae, un, fn, Fe, ke, cn, st, be, it, jn, Le, Pe, ue, Vn, dn, we, _e, De, ln, Ue, xe, ve, tt, ne, k, ye, Ge, $e, We, at, ut, fe, ce, qn, pn, mn, wn, hn, bn, yn, gn, ft, En, Yn, ze, Sn, In, Tn, He, Zn, An, jt, Ro;
var init_ort_wasm_min = __esm({
  "node_modules/onnxruntime-web/dist/ort.wasm.min.mjs"() {
    Ve = Object.defineProperty;
    On = Object.getOwnPropertyDescriptor;
    Ln = Object.getOwnPropertyNames;
    Pn = Object.prototype.hasOwnProperty;
    Je = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof __require < "u" ? __require : t)[n] }) : e)(function(e) {
      if (typeof __require < "u") return __require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    E = (e, t) => () => (e && (t = e(e = 0)), t);
    qe = (e, t) => {
      for (var n in t) Ve(e, n, { get: t[n], enumerable: true });
    };
    _n = (e, t, n, o) => {
      if (t && typeof t == "object" || typeof t == "function") for (let r of Ln(t)) !Pn.call(e, r) && r !== n && Ve(e, r, { get: () => t[r], enumerable: !(o = On(t, r)) || o.enumerable });
      return e;
    };
    wt = (e) => _n(Ve({}, "__esModule", { value: true }), e);
    Ye = E(() => {
      "use strict";
      Se = /* @__PURE__ */ new Map(), q = [], pe = (e, t, n) => {
        if (t && typeof t.init == "function" && typeof t.createInferenceSessionHandler == "function") {
          let o = Se.get(e);
          if (o === void 0) Se.set(e, { backend: t, priority: n });
          else {
            if (o.priority > n) return;
            if (o.priority === n && o.backend !== t) throw new Error(`cannot register backend "${e}" using priority ${n}`);
          }
          if (n >= 0) {
            let r = q.indexOf(e);
            r !== -1 && q.splice(r, 1);
            for (let i = 0; i < q.length; i++) if (Se.get(q[i]).priority <= n) {
              q.splice(i, 0, e);
              return;
            }
            q.push(e);
          }
          return;
        }
        throw new TypeError("not a valid backend");
      }, Dn = async (e) => {
        let t = Se.get(e);
        if (!t) return "backend not found.";
        if (t.initialized) return t.backend;
        if (t.aborted) return t.error;
        {
          let n = !!t.initPromise;
          try {
            return n || (t.initPromise = t.backend.init(e)), await t.initPromise, t.initialized = true, t.backend;
          } catch (o) {
            return n || (t.error = `${o}`, t.aborted = true), t.error;
          } finally {
            delete t.initPromise;
          }
        }
      }, ht = async (e) => {
        let t = e.executionProviders || [], n = t.map((u) => typeof u == "string" ? u : u.name), o = n.length === 0 ? q : n, r, i = [], s = /* @__PURE__ */ new Set();
        for (let u of o) {
          let f = await Dn(u);
          typeof f == "string" ? i.push({ name: u, err: f }) : (r || (r = f), r === f && s.add(u));
        }
        if (!r) throw new Error(`no available backend found. ERR: ${i.map((u) => `[${u.name}] ${u.err}`).join(", ")}`);
        for (let { name: u, err: f } of i) n.includes(u) && console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${f}`);
        let a = t.filter((u) => s.has(typeof u == "string" ? u : u.name));
        return [r, new Proxy(e, { get: (u, f) => f === "executionProviders" ? a : Reflect.get(u, f) })];
      };
    });
    bt = E(() => {
      "use strict";
      Ye();
    });
    gt = E(() => {
      "use strict";
      yt = "1.27.0";
    });
    Ze = E(() => {
      "use strict";
      gt();
      Et = "warning", _ = { wasm: {}, webgl: {}, webgpu: {}, versions: { common: yt }, set logLevel(e) {
        if (e !== void 0) {
          if (typeof e != "string" || ["verbose", "info", "warning", "error", "fatal"].indexOf(e) === -1) throw new Error(`Unsupported logging level: ${e}`);
          Et = e;
        }
      }, get logLevel() {
        return Et;
      } };
      Object.defineProperty(_, "logLevel", { enumerable: true });
    });
    St = E(() => {
      "use strict";
      Ze();
      B = _;
    });
    At = E(() => {
      "use strict";
      Tt = (e, t) => {
        let n = typeof document < "u" ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
        n.width = e.dims[3], n.height = e.dims[2];
        let o = n.getContext("2d");
        if (o != null) {
          let r, i;
          t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (r = e.dims[2], i = e.dims[3]) : (r = e.dims[3], i = e.dims[2]);
          let s = t?.format !== void 0 ? t.format : "RGB", a = t?.norm, u, f;
          a === void 0 || a.mean === void 0 ? u = [255, 255, 255, 255] : typeof a.mean == "number" ? u = [a.mean, a.mean, a.mean, a.mean] : (u = [a.mean[0], a.mean[1], a.mean[2], 0], a.mean[3] !== void 0 && (u[3] = a.mean[3])), a === void 0 || a.bias === void 0 ? f = [0, 0, 0, 0] : typeof a.bias == "number" ? f = [a.bias, a.bias, a.bias, a.bias] : (f = [a.bias[0], a.bias[1], a.bias[2], 0], a.bias[3] !== void 0 && (f[3] = a.bias[3]));
          let l = i * r, c = 0, d = l, p = l * 2, h = -1;
          s === "RGBA" ? (c = 0, d = l, p = l * 2, h = l * 3) : s === "RGB" ? (c = 0, d = l, p = l * 2) : s === "RBG" && (c = 0, p = l, d = l * 2);
          for (let y = 0; y < i; y++) for (let A = 0; A < r; A++) {
            let m = (e.data[c++] - f[0]) * u[0], w = (e.data[d++] - f[1]) * u[1], O = (e.data[p++] - f[2]) * u[2], g = h === -1 ? 255 : (e.data[h++] - f[3]) * u[3];
            o.fillStyle = "rgba(" + m + "," + w + "," + O + "," + g + ")", o.fillRect(A, y, 1, 1);
          }
          if ("toDataURL" in n) return n.toDataURL();
          throw new Error("toDataURL is not supported");
        } else throw new Error("Can not access image data");
      }, It = (e, t) => {
        let n = typeof document < "u" ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d"), o;
        if (n != null) {
          let r, i, s;
          t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (r = e.dims[2], i = e.dims[1], s = e.dims[3]) : (r = e.dims[3], i = e.dims[2], s = e.dims[1]);
          let a = t !== void 0 && t.format !== void 0 ? t.format : "RGB", u = t?.norm, f, l;
          u === void 0 || u.mean === void 0 ? f = [255, 255, 255, 255] : typeof u.mean == "number" ? f = [u.mean, u.mean, u.mean, u.mean] : (f = [u.mean[0], u.mean[1], u.mean[2], 255], u.mean[3] !== void 0 && (f[3] = u.mean[3])), u === void 0 || u.bias === void 0 ? l = [0, 0, 0, 0] : typeof u.bias == "number" ? l = [u.bias, u.bias, u.bias, u.bias] : (l = [u.bias[0], u.bias[1], u.bias[2], 0], u.bias[3] !== void 0 && (l[3] = u.bias[3]));
          let c = i * r;
          if (t !== void 0 && (t.format !== void 0 && s === 4 && t.format !== "RGBA" || s === 3 && t.format !== "RGB" && t.format !== "BGR")) throw new Error("Tensor format doesn't match input tensor dims");
          let d = 4, p = 0, h = 1, y = 2, A = 3, m = 0, w = c, O = c * 2, g = -1;
          a === "RGBA" ? (m = 0, w = c, O = c * 2, g = c * 3) : a === "RGB" ? (m = 0, w = c, O = c * 2) : a === "RBG" && (m = 0, O = c, w = c * 2), o = n.createImageData(r, i);
          for (let T = 0; T < i * r; p += d, h += d, y += d, A += d, T++) o.data[p] = (e.data[m++] - l[0]) * f[0], o.data[h] = (e.data[w++] - l[1]) * f[1], o.data[y] = (e.data[O++] - l[2]) * f[2], o.data[A] = g === -1 ? 255 : (e.data[g++] - l[3]) * f[3];
        } else throw new Error("Can not access image data");
        return o;
      };
    });
    Dt = E(() => {
      "use strict";
      Te();
      Xe = (e, t) => {
        if (e === void 0) throw new Error("Image buffer must be defined");
        if (t.height === void 0 || t.width === void 0) throw new Error("Image height and width must be defined");
        if (t.tensorLayout === "NHWC") throw new Error("NHWC Tensor layout is not supported yet");
        let { height: n, width: o } = t, r = t.norm ?? { mean: 255, bias: 0 }, i, s;
        typeof r.mean == "number" ? i = [r.mean, r.mean, r.mean, r.mean] : i = [r.mean[0], r.mean[1], r.mean[2], r.mean[3] ?? 255], typeof r.bias == "number" ? s = [r.bias, r.bias, r.bias, r.bias] : s = [r.bias[0], r.bias[1], r.bias[2], r.bias[3] ?? 0];
        let a = t.format !== void 0 ? t.format : "RGBA", u = t.tensorFormat !== void 0 && t.tensorFormat !== void 0 ? t.tensorFormat : "RGB", f = n * o, l = u === "RGBA" ? new Float32Array(f * 4) : new Float32Array(f * 3), c = 4, d = 0, p = 1, h = 2, y = 3, A = 0, m = f, w = f * 2, O = -1;
        a === "RGB" && (c = 3, d = 0, p = 1, h = 2, y = -1), u === "RGBA" ? O = f * 3 : u === "RBG" ? (A = 0, w = f, m = f * 2) : u === "BGR" && (w = 0, m = f, A = f * 2);
        for (let T = 0; T < f; T++, d += c, h += c, p += c, y += c) l[A++] = (e[d] + s[0]) / i[0], l[m++] = (e[p] + s[1]) / i[1], l[w++] = (e[h] + s[2]) / i[2], O !== -1 && y !== -1 && (l[O++] = (e[y] + s[3]) / i[3]);
        return u === "RGBA" ? new x("float32", l, [1, 4, n, o]) : new x("float32", l, [1, 3, n, o]);
      }, Bt = async (e, t) => {
        let n = typeof HTMLImageElement < "u" && e instanceof HTMLImageElement, o = typeof ImageData < "u" && e instanceof ImageData, r = typeof ImageBitmap < "u" && e instanceof ImageBitmap, i = typeof e == "string", s, a = t ?? {}, u = () => {
          if (typeof document < "u") return document.createElement("canvas");
          if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(1, 1);
          throw new Error("Canvas is not supported");
        }, f = (l) => typeof HTMLCanvasElement < "u" && l instanceof HTMLCanvasElement || l instanceof OffscreenCanvas ? l.getContext("2d") : null;
        if (n) {
          let l = u();
          l.width = e.width, l.height = e.height;
          let c = f(l);
          if (c != null) {
            let d = e.height, p = e.width;
            if (t !== void 0 && t.resizedHeight !== void 0 && t.resizedWidth !== void 0 && (d = t.resizedHeight, p = t.resizedWidth), t !== void 0) {
              if (a = t, t.tensorFormat !== void 0) throw new Error("Image input config format must be RGBA for HTMLImageElement");
              a.tensorFormat = "RGBA", a.height = d, a.width = p;
            } else a.tensorFormat = "RGBA", a.height = d, a.width = p;
            c.drawImage(e, 0, 0), s = c.getImageData(0, 0, p, d).data;
          } else throw new Error("Can not access image data");
        } else if (o) {
          let l, c;
          if (t !== void 0 && t.resizedWidth !== void 0 && t.resizedHeight !== void 0 ? (l = t.resizedHeight, c = t.resizedWidth) : (l = e.height, c = e.width), t !== void 0 && (a = t), a.format = "RGBA", a.height = l, a.width = c, t !== void 0) {
            let d = u();
            d.width = c, d.height = l;
            let p = f(d);
            if (p != null) p.putImageData(e, 0, 0), s = p.getImageData(0, 0, c, l).data;
            else throw new Error("Can not access image data");
          } else s = e.data;
        } else if (r) {
          if (t === void 0) throw new Error("Please provide image config with format for Imagebitmap");
          let l = u();
          l.width = e.width, l.height = e.height;
          let c = f(l);
          if (c != null) {
            let d = e.height, p = e.width;
            return c.drawImage(e, 0, 0, p, d), s = c.getImageData(0, 0, p, d).data, a.height = d, a.width = p, Xe(s, a);
          } else throw new Error("Can not access image data");
        } else {
          if (i) return new Promise((l, c) => {
            let d = u(), p = f(d);
            if (!e || !p) return c();
            let h = new Image();
            h.crossOrigin = "Anonymous", h.src = e, h.onload = () => {
              d.width = h.width, d.height = h.height, p.drawImage(h, 0, 0, d.width, d.height);
              let y = p.getImageData(0, 0, d.width, d.height);
              a.height = d.height, a.width = d.width, l(Xe(y.data, a));
            };
          });
          throw new Error("Input data provided is not supported - aborted tensor creation");
        }
        if (s !== void 0) return Xe(s, a);
        throw new Error("Input data provided is not supported - aborted tensor creation");
      }, Ot = (e, t) => {
        let { width: n, height: o, download: r, dispose: i } = t, s = [1, o, n, 4];
        return new x({ location: "texture", type: "float32", texture: e, dims: s, download: r, dispose: i });
      }, Lt = (e, t) => {
        let { dataType: n, dims: o, download: r, dispose: i } = t;
        return new x({ location: "gpu-buffer", type: n ?? "float32", gpuBuffer: e, dims: o, download: r, dispose: i });
      }, Pt = (e, t) => {
        let { dataType: n, dims: o, download: r, dispose: i } = t;
        return new x({ location: "ml-tensor", type: n ?? "float32", mlTensor: e, dims: o, download: r, dispose: i });
      }, _t = (e, t, n) => new x({ location: "cpu-pinned", type: e, data: t, dims: n ?? [t.length] });
    });
    vt = E(() => {
      "use strict";
      Y = /* @__PURE__ */ new Map([["float32", Float32Array], ["uint8", Uint8Array], ["int8", Int8Array], ["uint16", Uint16Array], ["int16", Int16Array], ["int32", Int32Array], ["bool", Uint8Array], ["float64", Float64Array], ["uint32", Uint32Array], ["int4", Uint8Array], ["uint4", Uint8Array]]), me = /* @__PURE__ */ new Map([[Float32Array, "float32"], [Uint8Array, "uint8"], [Int8Array, "int8"], [Uint16Array, "uint16"], [Int16Array, "int16"], [Int32Array, "int32"], [Float64Array, "float64"], [Uint32Array, "uint32"]]), Ut = false, xt = () => {
        if (!Ut) {
          Ut = true;
          let e = typeof BigInt64Array < "u" && BigInt64Array.from, t = typeof BigUint64Array < "u" && BigUint64Array.from, n = globalThis.Float16Array, o = typeof n < "u" && n.from;
          e && (Y.set("int64", BigInt64Array), me.set(BigInt64Array, "int64")), t && (Y.set("uint64", BigUint64Array), me.set(BigUint64Array, "uint64")), o ? (Y.set("float16", n), me.set(n, "float16")) : Y.set("float16", Uint16Array);
        }
      };
    });
    Rt = E(() => {
      "use strict";
      Te();
      Ct = (e) => {
        let t = 1;
        for (let n = 0; n < e.length; n++) {
          let o = e[n];
          if (typeof o != "number" || !Number.isSafeInteger(o)) throw new TypeError(`dims[${n}] must be an integer, got: ${o}`);
          if (o < 0) throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${o}`);
          t *= o;
        }
        return t;
      }, Mt = (e, t) => {
        switch (e.location) {
          case "cpu":
            return new x(e.type, e.data, t);
          case "cpu-pinned":
            return new x({ location: "cpu-pinned", data: e.data, type: e.type, dims: t });
          case "texture":
            return new x({ location: "texture", texture: e.texture, type: e.type, dims: t });
          case "gpu-buffer":
            return new x({ location: "gpu-buffer", gpuBuffer: e.gpuBuffer, type: e.type, dims: t });
          case "ml-tensor":
            return new x({ location: "ml-tensor", mlTensor: e.mlTensor, type: e.type, dims: t });
          default:
            throw new Error(`tensorReshape: tensor location ${e.location} is not supported`);
        }
      };
    });
    Te = E(() => {
      "use strict";
      At();
      Dt();
      vt();
      Rt();
      x = class {
        constructor(t, n, o) {
          xt();
          let r, i;
          if (typeof t == "object" && "location" in t) switch (this.dataLocation = t.location, r = t.type, i = t.dims, t.location) {
            case "cpu-pinned": {
              let a = Y.get(r);
              if (!a) throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);
              if (!(t.data instanceof a)) throw new TypeError(`buffer should be of type ${a.name}`);
              this.cpuData = t.data;
              break;
            }
            case "texture": {
              if (r !== "float32") throw new TypeError(`unsupported type "${r}" to create tensor from texture`);
              this.gpuTextureData = t.texture, this.downloader = t.download, this.disposer = t.dispose;
              break;
            }
            case "gpu-buffer": {
              if (r !== "float32" && r !== "float16" && r !== "int32" && r !== "int64" && r !== "uint32" && r !== "uint8" && r !== "bool" && r !== "uint4" && r !== "int4") throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);
              this.gpuBufferData = t.gpuBuffer, this.downloader = t.download, this.disposer = t.dispose;
              break;
            }
            case "ml-tensor": {
              if (r !== "float32" && r !== "float16" && r !== "int32" && r !== "int64" && r !== "uint32" && r !== "uint64" && r !== "int8" && r !== "uint8" && r !== "bool" && r !== "uint4" && r !== "int4") throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);
              this.mlTensorData = t.mlTensor, this.downloader = t.download, this.disposer = t.dispose;
              break;
            }
            default:
              throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
          }
          else {
            let a, u;
            if (typeof t == "string") if (r = t, u = o, t === "string") {
              if (!Array.isArray(n)) throw new TypeError("A string tensor's data must be a string array.");
              a = n;
            } else {
              let f = Y.get(t);
              if (f === void 0) throw new TypeError(`Unsupported tensor type: ${t}.`);
              if (Array.isArray(n)) {
                if (t === "float16" && f === Uint16Array || t === "uint4" || t === "int4") throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${f.name} as data.`);
                t === "uint64" || t === "int64" ? a = f.from(n, BigInt) : a = f.from(n);
              } else if (n instanceof f) a = n;
              else if (n instanceof Uint8ClampedArray) if (t === "uint8") a = Uint8Array.from(n);
              else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");
              else if (t === "float16" && n instanceof Uint16Array && f !== Uint16Array) a = new globalThis.Float16Array(n.buffer, n.byteOffset, n.length);
              else throw new TypeError(`A ${r} tensor's data must be type of ${f}`);
            }
            else if (u = n, Array.isArray(t)) {
              if (t.length === 0) throw new TypeError("Tensor type cannot be inferred from an empty array.");
              let f = typeof t[0];
              if (f === "string") r = "string", a = t;
              else if (f === "boolean") r = "bool", a = Uint8Array.from(t);
              else throw new TypeError(`Invalid element type of data array: ${f}.`);
            } else if (t instanceof Uint8ClampedArray) r = "uint8", a = Uint8Array.from(t);
            else {
              let f = me.get(t.constructor);
              if (f === void 0) throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);
              r = f, a = t;
            }
            if (u === void 0) u = [a.length];
            else if (!Array.isArray(u)) throw new TypeError("A tensor's dims must be a number array");
            i = u, this.cpuData = a, this.dataLocation = "cpu";
          }
          let s = Ct(i);
          if (this.cpuData && s !== this.cpuData.length && !((r === "uint4" || r === "int4") && Math.ceil(s / 2) === this.cpuData.length)) throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);
          this.type = r, this.dims = i, this.size = s;
        }
        static async fromImage(t, n) {
          return Bt(t, n);
        }
        static fromTexture(t, n) {
          return Ot(t, n);
        }
        static fromGpuBuffer(t, n) {
          return Lt(t, n);
        }
        static fromMLTensor(t, n) {
          return Pt(t, n);
        }
        static fromPinnedBuffer(t, n, o) {
          return _t(t, n, o);
        }
        toDataURL(t) {
          return Tt(this, t);
        }
        toImageData(t) {
          return It(this, t);
        }
        get data() {
          if (this.ensureValid(), !this.cpuData) throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
          return this.cpuData;
        }
        get location() {
          return this.dataLocation;
        }
        get texture() {
          if (this.ensureValid(), !this.gpuTextureData) throw new Error("The data is not stored as a WebGL texture.");
          return this.gpuTextureData;
        }
        get gpuBuffer() {
          if (this.ensureValid(), !this.gpuBufferData) throw new Error("The data is not stored as a WebGPU buffer.");
          return this.gpuBufferData;
        }
        get mlTensor() {
          if (this.ensureValid(), !this.mlTensorData) throw new Error("The data is not stored as a WebNN MLTensor.");
          return this.mlTensorData;
        }
        async getData(t) {
          switch (this.ensureValid(), this.dataLocation) {
            case "cpu":
            case "cpu-pinned":
              return this.data;
            case "texture":
            case "gpu-buffer":
            case "ml-tensor": {
              if (!this.downloader) throw new Error("The current tensor is not created with a specified data downloader.");
              if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
              try {
                this.isDownloading = true;
                let n = await this.downloader();
                return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = n, t && this.disposer && (this.disposer(), this.disposer = void 0), n;
              } finally {
                this.isDownloading = false;
              }
            }
            default:
              throw new Error(`cannot get data from location: ${this.dataLocation}`);
          }
        }
        dispose() {
          if (this.isDownloading) throw new Error("The current tensor is being downloaded.");
          this.disposer && (this.disposer(), this.disposer = void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
        }
        ensureValid() {
          if (this.dataLocation === "none") throw new Error("The tensor is disposed.");
        }
        reshape(t) {
          if (this.ensureValid(), this.downloader || this.disposer) throw new Error("Cannot reshape a tensor that owns GPU resource.");
          return Mt(this, t);
        }
      };
    });
    Ke = E(() => {
      "use strict";
      Te();
      G = x;
    });
    Qe = E(() => {
      "use strict";
      Ze();
      Nt = (e, t) => {
        (typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || console.timeStamp(`${e}::ORT::${t}`);
      }, Ft = (e, t) => {
        let n = new Error().stack?.split(/\r\n|\r|\n/g) || [], o = false;
        for (let r = 0; r < n.length; r++) {
          if (o && !n[r].includes("TRACE_FUNC")) {
            let i = `FUNC_${e}::${n[r].trim().split(" ")[1]}`;
            t && (i += `::${t}`), Nt("CPU", i);
            return;
          }
          n[r].includes("TRACE_FUNC") && (o = true);
        }
      }, Z = (e) => {
        (typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || Ft("BEGIN", e);
      }, X = (e) => {
        (typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || Ft("END", e);
      }, K = (e) => {
        (typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || console.time(`ORT::${e}`);
      }, Q = (e) => {
        (typeof _.trace > "u" ? !_.wasm.trace : !_.trace) || console.timeEnd(`ORT::${e}`);
      };
    });
    kt = E(() => {
      "use strict";
      Ye();
      Ke();
      Qe();
      Ie = class e {
        constructor(t) {
          this.handler = t;
        }
        async run(t, n, o) {
          Z(), K("InferenceSession.run");
          let r = {}, i = {};
          if (typeof t != "object" || t === null || t instanceof G || Array.isArray(t)) throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
          let s = true;
          if (typeof n == "object") {
            if (n === null) throw new TypeError("Unexpected argument[1]: cannot be null.");
            if (n instanceof G) throw new TypeError("'fetches' cannot be a Tensor");
            if (Array.isArray(n)) {
              if (n.length === 0) throw new TypeError("'fetches' cannot be an empty array.");
              s = false;
              for (let f of n) {
                if (typeof f != "string") throw new TypeError("'fetches' must be a string array or an object.");
                if (this.outputNames.indexOf(f) === -1) throw new RangeError(`'fetches' contains invalid output name: ${f}.`);
                r[f] = null;
              }
              if (typeof o == "object" && o !== null) i = o;
              else if (typeof o < "u") throw new TypeError("'options' must be an object.");
            } else {
              let f = false, l = Object.getOwnPropertyNames(n);
              for (let c of this.outputNames) if (l.indexOf(c) !== -1) {
                let d = n[c];
                (d === null || d instanceof G) && (f = true, s = false, r[c] = d);
              }
              if (f) {
                if (typeof o == "object" && o !== null) i = o;
                else if (typeof o < "u") throw new TypeError("'options' must be an object.");
              } else i = n;
            }
          } else if (typeof n < "u") throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
          for (let f of this.inputNames) if (typeof t[f] > "u") throw new Error(`input '${f}' is missing in 'feeds'.`);
          if (s) for (let f of this.outputNames) r[f] = null;
          let a = await this.handler.run(t, r, i), u = {};
          for (let f in a) if (Object.hasOwnProperty.call(a, f)) {
            let l = a[f];
            l instanceof G ? u[f] = l : u[f] = new G(l.type, l.data, l.dims);
          }
          return Q("InferenceSession.run"), X(), u;
        }
        async release() {
          return this.handler.dispose();
        }
        static async create(t, n, o, r) {
          Z(), K("InferenceSession.create");
          let i, s = {};
          if (typeof t == "string") {
            if (i = t, typeof n == "object" && n !== null) s = n;
            else if (typeof n < "u") throw new TypeError("'options' must be an object.");
          } else if (t instanceof Uint8Array) {
            if (i = t, typeof n == "object" && n !== null) s = n;
            else if (typeof n < "u") throw new TypeError("'options' must be an object.");
          } else if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) {
            let l = t, c = 0, d = t.byteLength;
            if (typeof n == "object" && n !== null) s = n;
            else if (typeof n == "number") {
              if (c = n, !Number.isSafeInteger(c)) throw new RangeError("'byteOffset' must be an integer.");
              if (c < 0 || c >= l.byteLength) throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);
              if (d = t.byteLength - c, typeof o == "number") {
                if (d = o, !Number.isSafeInteger(d)) throw new RangeError("'byteLength' must be an integer.");
                if (d <= 0 || c + d > l.byteLength) throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength - c}].`);
                if (typeof r == "object" && r !== null) s = r;
                else if (typeof r < "u") throw new TypeError("'options' must be an object.");
              } else if (typeof o < "u") throw new TypeError("'byteLength' must be a number.");
            } else if (typeof n < "u") throw new TypeError("'options' must be an object.");
            i = new Uint8Array(l, c, d);
          } else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
          let [a, u] = await ht(s), f = await a.createInferenceSessionHandler(i, u);
          return Q("InferenceSession.create"), X(), new e(f);
        }
        startProfiling() {
          this.handler.startProfiling();
        }
        endProfiling() {
          this.handler.endProfiling();
        }
        get inputNames() {
          return this.handler.inputNames;
        }
        get outputNames() {
          return this.handler.outputNames;
        }
        get inputMetadata() {
          return this.handler.inputMetadata;
        }
        get outputMetadata() {
          return this.handler.outputMetadata;
        }
      };
    });
    Wt = E(() => {
      "use strict";
      kt();
      Un = Ie;
    });
    Gt = E(() => {
      "use strict";
    });
    $t = E(() => {
      "use strict";
    });
    zt = E(() => {
      "use strict";
    });
    Ht = E(() => {
      "use strict";
    });
    et = {};
    qe(et, { InferenceSession: () => Un, TRACE: () => Nt, TRACE_EVENT_BEGIN: () => K, TRACE_EVENT_END: () => Q, TRACE_FUNC_BEGIN: () => Z, TRACE_FUNC_END: () => X, Tensor: () => G, env: () => B, registerBackend: () => pe });
    J = E(() => {
      "use strict";
      bt();
      St();
      Wt();
      Ke();
      Gt();
      $t();
      Qe();
      zt();
      Ht();
    });
    Ae = E(() => {
      "use strict";
    });
    qt = {};
    qe(qt, { default: () => xn });
    Yt = E(() => {
      "use strict";
      tt();
      ee();
      Be();
      Vt = "ort-wasm-proxy-worker", Jt = globalThis.self?.name === Vt;
      Jt && (self.onmessage = (e) => {
        let { type: t, in: n } = e.data;
        try {
          switch (t) {
            case "init-wasm":
              Oe(n.wasm).then(() => {
                Le(n).then(() => {
                  postMessage({ type: t });
                }, (o) => {
                  postMessage({ type: t, err: o });
                });
              }, (o) => {
                postMessage({ type: t, err: o });
              });
              break;
            case "init-ep": {
              let { epName: o, env: r } = n;
              Pe(r, o).then(() => {
                postMessage({ type: t });
              }, (i) => {
                postMessage({ type: t, err: i });
              });
              break;
            }
            case "copy-from": {
              let { buffer: o } = n, r = we(o);
              postMessage({ type: t, out: r });
              break;
            }
            case "create": {
              let { model: o, options: r } = n;
              _e(o, r).then((i) => {
                postMessage({ type: t, out: i });
              }, (i) => {
                postMessage({ type: t, err: i });
              });
              break;
            }
            case "release":
              De(n), postMessage({ type: t });
              break;
            case "run": {
              let { sessionId: o, inputIndices: r, inputs: i, outputIndices: s, options: a } = n;
              Ue(o, r, i, s, new Array(s.length).fill(null), a).then((u) => {
                u.some((f) => f[3] !== "cpu") ? postMessage({ type: t, err: "Proxy does not support non-cpu tensor location." }) : postMessage({ type: t, out: u }, ve([...i, ...u]));
              }, (u) => {
                postMessage({ type: t, err: u });
              });
              break;
            }
            case "end-profiling":
              xe(n), postMessage({ type: t });
              break;
            default:
          }
        } catch (o) {
          postMessage({ type: t, err: o });
        }
      });
      xn = Jt ? null : (e) => new Worker(e ?? R, { type: "module", name: Vt });
    });
    Be = E(() => {
      "use strict";
      Ae();
      Kt = typeof location > "u" ? void 0 : location.origin, vn = import.meta.url > "file:" && import.meta.url < "file;", Cn = () => {
        if (true) {
          if (vn) {
            let e = URL;
            return new URL(new e("ort.wasm.min.mjs", import.meta.url).href, Kt).href;
          }
          return import.meta.url;
        }
      }, R = Cn(), Ce = () => {
        if (R && !R.startsWith("blob:")) return R.substring(0, R.lastIndexOf("/") + 1);
      }, nt = (e, t) => {
        try {
          let n = t ?? R;
          return (n ? new URL(e, n) : new URL(e)).origin === Kt;
        } catch {
          return false;
        }
      }, Mn = (e, t) => {
        let n = t ?? R;
        try {
          return (n ? new URL(e, n) : new URL(e)).href;
        } catch {
          return;
        }
      }, Rn = (e, t) => `${t ?? "./"}${e}`, Qt = async (e) => {
        let n = await (await fetch(e, { credentials: "same-origin" })).blob();
        return URL.createObjectURL(n);
      }, Nn = async (e) => (await import(
        /*webpackIgnore:true*/
        /*@vite-ignore*/
        e
      )).default, Zt = (Yt(), wt(qt)).default, en = async () => {
        if (!R) throw new Error("Failed to load proxy worker: cannot determine the script source URL.");
        if (nt(R)) return [void 0, Zt()];
        let e = await Qt(R);
        return [e, Zt(e)];
      }, Xt = void 0, tn = async (e, t, n, o) => {
        let r = Xt && !(e || t);
        if (r) if (R) r = nt(R) || o && !n;
        else if (o && !n) r = true;
        else throw new Error("cannot determine the script source URL.");
        if (r) return [void 0, Xt];
        {
          let i = "ort-wasm-simd-threaded.mjs", s = e ?? Mn(i, t), a = n && s && !nt(s, t), u = a ? await Qt(s) : s ?? Rn(i, t);
          return [a ? u : void 0, await Nn(u)];
        }
      };
    });
    ee = E(() => {
      "use strict";
      Be();
      ot = false, Me = false, nn = false, Fn = () => {
        if (typeof SharedArrayBuffer > "u") return false;
        try {
          return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));
        } catch {
          return false;
        }
      }, kn = () => {
        try {
          return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 30, 1, 28, 0, 65, 0, 253, 15, 253, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 253, 186, 1, 26, 11]));
        } catch {
          return false;
        }
      }, Wn = () => {
        try {
          return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 19, 1, 17, 0, 65, 1, 253, 15, 65, 2, 253, 15, 65, 3, 253, 15, 253, 147, 2, 11]));
        } catch {
          return false;
        }
      }, Oe = async (e) => {
        if (ot) return Promise.resolve();
        if (Me) throw new Error("multiple calls to 'initializeWebAssembly()' detected.");
        if (nn) throw new Error("previous call to 'initializeWebAssembly()' failed.");
        Me = true;
        let t = e.initTimeout, n = e.numThreads;
        if (e.simd !== false) {
          if (e.simd === "relaxed") {
            if (!Wn()) throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.");
          } else if (!kn()) throw new Error("WebAssembly SIMD is not supported in the current environment.");
        }
        let o = Fn();
        n > 1 && !o && (typeof self < "u" && !self.crossOriginIsolated && console.warn("env.wasm.numThreads is set to " + n + ", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."), console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."), e.numThreads = n = 1);
        let r = e.wasmPaths, i = typeof r == "string" ? r : void 0, s = r?.mjs, a = s?.href ?? s, u = r?.wasm, f = u?.href ?? u, l = e.wasmBinary, [c, d] = await tn(a, i, n > 1, !!l || !!f), p = false, h = [];
        if (t > 0 && h.push(new Promise((y) => {
          setTimeout(() => {
            p = true, y();
          }, t);
        })), h.push(new Promise((y, A) => {
          let m = { numThreads: n };
          if (l) m.wasmBinary = l, m.locateFile = (w) => w;
          else if (f || i) m.locateFile = (w) => f ?? i + w;
          else if (a && a.indexOf("blob:") !== 0) m.locateFile = (w) => new URL(w, a).href;
          else if (c) {
            let w = Ce();
            w && (m.locateFile = (O) => w + O);
          }
          d(m).then((w) => {
            Me = false, ot = true, rt = w, y(), c && URL.revokeObjectURL(c);
          }, (w) => {
            Me = false, nn = true, A(w);
          });
        })), await Promise.race(h), p) throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`);
      }, I = () => {
        if (ot && rt) return rt;
        throw new Error("WebAssembly is not initialized yet.");
      };
    });
    Re = E(() => {
      "use strict";
      ee();
      N = (e, t) => {
        let n = I(), o = n.lengthBytesUTF8(e) + 1, r = n._malloc(o);
        return n.stringToUTF8(e, r, o), t.push(r), r;
      }, he = (e, t, n, o) => {
        if (typeof e == "object" && e !== null) {
          if (n.has(e)) throw new Error("Circular reference in options");
          n.add(e);
        }
        Object.entries(e).forEach(([r, i]) => {
          let s = t ? t + r : r;
          if (typeof i == "object") he(i, s + ".", n, o);
          else if (typeof i == "string" || typeof i == "number") o(s, i.toString());
          else if (typeof i == "boolean") o(s, i ? "1" : "0");
          else throw new Error(`Can't handle extra config type: ${typeof i}`);
        });
      }, S = (e) => {
        let t = I(), n = t.stackSave();
        try {
          let o = t.PTR_SIZE, r = t.stackAlloc(2 * o);
          t._OrtGetLastError(r, r + o);
          let i = Number(t.getValue(r, o === 4 ? "i32" : "i64")), s = t.getValue(r + o, "*"), a = s ? t.UTF8ToString(s) : "";
          throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${a}`);
        } finally {
          t.stackRestore(n);
        }
      };
    });
    on = E(() => {
      "use strict";
      ee();
      Re();
      rn = (e) => {
        let t = I(), n = 0, o = [], r = e || {};
        try {
          if (e?.logSeverityLevel === void 0) r.logSeverityLevel = 2;
          else if (typeof e.logSeverityLevel != "number" || !Number.isInteger(e.logSeverityLevel) || e.logSeverityLevel < 0 || e.logSeverityLevel > 4) throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);
          if (e?.logVerbosityLevel === void 0) r.logVerbosityLevel = 0;
          else if (typeof e.logVerbosityLevel != "number" || !Number.isInteger(e.logVerbosityLevel)) throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);
          e?.terminate === void 0 && (r.terminate = false);
          let i = 0;
          return e?.tag !== void 0 && (i = N(e.tag, o)), n = t._OrtCreateRunOptions(r.logSeverityLevel, r.logVerbosityLevel, !!r.terminate, i), n === 0 && S("Can't create run options."), e?.extra !== void 0 && he(e.extra, "", /* @__PURE__ */ new WeakSet(), (s, a) => {
            let u = N(s, o), f = N(a, o);
            t._OrtAddRunConfigEntry(n, u, f) !== 0 && S(`Can't set a run config entry: ${s} - ${a}.`);
          }), [n, o];
        } catch (i) {
          throw n !== 0 && t._OrtReleaseRunOptions(n), o.forEach((s) => t._free(s)), i;
        }
      };
    });
    an = E(() => {
      "use strict";
      ee();
      Re();
      Gn = (e) => {
        switch (e) {
          case "disabled":
            return 0;
          case "basic":
            return 1;
          case "extended":
            return 2;
          case "layout":
            return 3;
          case "all":
            return 99;
          default:
            throw new Error(`unsupported graph optimization level: ${e}`);
        }
      }, $n = (e) => {
        switch (e) {
          case "sequential":
            return 0;
          case "parallel":
            return 1;
          default:
            throw new Error(`unsupported execution mode: ${e}`);
        }
      }, zn = (e) => {
        e.extra || (e.extra = {}), e.extra.session || (e.extra.session = {});
        let t = e.extra.session;
        t.use_ort_model_bytes_directly || (t.use_ort_model_bytes_directly = "1"), e.executionProviders && e.executionProviders.some((n) => (typeof n == "string" ? n : n.name) === "webgpu") && (e.enableMemPattern = false);
      }, se = (e, t, n, o) => {
        let r = N(t, o), i = N(n, o);
        I()._OrtAddSessionConfigEntry(e, r, i) !== 0 && S(`Can't set a session config entry: ${t} - ${n}.`);
      }, Hn = async (e, t, n) => {
        let o = t.executionProviders;
        for (let r of o) {
          let i = typeof r == "string" ? r : r.name, s = [];
          switch (i) {
            case "webnn":
              if (i = "WEBNN", se(e, "session.disable_quant_qdq", "1", n), se(e, "session.disable_qdq_constant_folding", "1", n), typeof r != "string") {
                let d = r?.deviceType;
                d && se(e, "deviceType", d, n);
              }
              break;
            case "webgpu":
              if (i = "JS", typeof r != "string") {
                let c = r;
                if (c?.preferredLayout) {
                  if (c.preferredLayout !== "NCHW" && c.preferredLayout !== "NHWC") throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);
                  se(e, "preferredLayout", c.preferredLayout, n);
                }
              }
              break;
            case "wasm":
            case "cpu":
              continue;
            default:
              throw new Error(`not supported execution provider: ${i}`);
          }
          let a = N(i, n), u = s.length, f = 0, l = 0;
          if (u > 0) {
            f = I()._malloc(u * I().PTR_SIZE), n.push(f), l = I()._malloc(u * I().PTR_SIZE), n.push(l);
            for (let c = 0; c < u; c++) I().setValue(f + c * I().PTR_SIZE, s[c][0], "*"), I().setValue(l + c * I().PTR_SIZE, s[c][1], "*");
          }
          await I()._OrtAppendExecutionProvider(e, a, f, l, u) !== 0 && S(`Can't append execution provider: ${i}.`);
        }
      }, sn = async (e) => {
        let t = I(), n = 0, o = [], r = e || {};
        zn(r);
        try {
          let i = Gn(r.graphOptimizationLevel ?? "all"), s = $n(r.executionMode ?? "sequential"), a = typeof r.logId == "string" ? N(r.logId, o) : 0, u = r.logSeverityLevel ?? 2;
          if (!Number.isInteger(u) || u < 0 || u > 4) throw new Error(`log severity level is not valid: ${u}`);
          let f = r.logVerbosityLevel ?? 0;
          if (!Number.isInteger(f) || f < 0 || f > 4) throw new Error(`log verbosity level is not valid: ${f}`);
          let l = typeof r.optimizedModelFilePath == "string" ? N(r.optimizedModelFilePath, o) : 0;
          if (n = t._OrtCreateSessionOptions(i, !!r.enableCpuMemArena, !!r.enableMemPattern, s, !!r.enableProfiling, 0, a, u, f, l), n === 0 && S("Can't create session options."), r.executionProviders && await Hn(n, r, o), r.enableGraphCapture !== void 0) {
            if (typeof r.enableGraphCapture != "boolean") throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);
            se(n, "enableGraphCapture", r.enableGraphCapture.toString(), o);
          }
          if (r.freeDimensionOverrides) for (let [c, d] of Object.entries(r.freeDimensionOverrides)) {
            if (typeof c != "string") throw new Error(`free dimension override name must be a string: ${c}`);
            if (typeof d != "number" || !Number.isInteger(d) || d < 0) throw new Error(`free dimension override value must be a non-negative integer: ${d}`);
            let p = N(c, o);
            t._OrtAddFreeDimensionOverride(n, p, d) !== 0 && S(`Can't set a free dimension override: ${c} - ${d}.`);
          }
          return r.extra !== void 0 && he(r.extra, "", /* @__PURE__ */ new WeakSet(), (c, d) => {
            se(n, c, d, o);
          }), [n, o];
        } catch (i) {
          throw n !== 0 && t._OrtReleaseSessionOptions(n) !== 0 && S("Can't release session options."), o.forEach((s) => t._free(s)), i;
        }
      };
    });
    st = E(() => {
      "use strict";
      ie = (e) => {
        switch (e) {
          case "int8":
            return 3;
          case "uint8":
            return 2;
          case "bool":
            return 9;
          case "int16":
            return 5;
          case "uint16":
            return 4;
          case "int32":
            return 6;
          case "uint32":
            return 12;
          case "float16":
            return 10;
          case "float32":
            return 1;
          case "float64":
            return 11;
          case "string":
            return 8;
          case "int64":
            return 7;
          case "uint64":
            return 13;
          case "int4":
            return 22;
          case "uint4":
            return 21;
          default:
            throw new Error(`unsupported data type: ${e}`);
        }
      }, Ne = (e) => {
        switch (e) {
          case 3:
            return "int8";
          case 2:
            return "uint8";
          case 9:
            return "bool";
          case 5:
            return "int16";
          case 4:
            return "uint16";
          case 6:
            return "int32";
          case 12:
            return "uint32";
          case 10:
            return "float16";
          case 1:
            return "float32";
          case 11:
            return "float64";
          case 8:
            return "string";
          case 7:
            return "int64";
          case 13:
            return "uint64";
          case 22:
            return "int4";
          case 21:
            return "uint4";
          default:
            throw new Error(`unsupported data type: ${e}`);
        }
      }, ae = (e, t) => {
        let n = [-1, 4, 1, 1, 2, 2, 4, 8, -1, 1, 2, 8, 4, 8, -1, -1, -1, -1, -1, -1, -1, 0.5, 0.5][e], o = typeof t == "number" ? t : t.reduce((r, i) => r * i, 1);
        return n > 0 ? Math.ceil(o * n) : void 0;
      }, un = (e) => {
        switch (e) {
          case "float16":
            return typeof Float16Array < "u" ? Float16Array : Uint16Array;
          case "float32":
            return Float32Array;
          case "uint8":
            return Uint8Array;
          case "int8":
            return Int8Array;
          case "uint16":
            return Uint16Array;
          case "int16":
            return Int16Array;
          case "int32":
            return Int32Array;
          case "bool":
            return Uint8Array;
          case "float64":
            return Float64Array;
          case "uint32":
            return Uint32Array;
          case "int64":
            return BigInt64Array;
          case "uint64":
            return BigUint64Array;
          default:
            throw new Error(`unsupported type: ${e}`);
        }
      }, fn = (e) => {
        switch (e) {
          case "verbose":
            return 0;
          case "info":
            return 1;
          case "warning":
            return 2;
          case "error":
            return 3;
          case "fatal":
            return 4;
          default:
            throw new Error(`unsupported logging level: ${e}`);
        }
      }, Fe = (e) => e === "float32" || e === "float16" || e === "int32" || e === "int64" || e === "uint32" || e === "uint8" || e === "bool" || e === "uint4" || e === "int4", ke = (e) => e === "float32" || e === "float16" || e === "int32" || e === "int64" || e === "uint32" || e === "uint64" || e === "int8" || e === "uint8" || e === "bool" || e === "uint4" || e === "int4", cn = (e) => {
        switch (e) {
          case "none":
            return 0;
          case "cpu":
            return 1;
          case "cpu-pinned":
            return 2;
          case "texture":
            return 3;
          case "gpu-buffer":
            return 4;
          case "ml-tensor":
            return 5;
          default:
            throw new Error(`unsupported data location: ${e}`);
        }
      };
    });
    it = E(() => {
      "use strict";
      Ae();
      be = async (e) => {
        if (typeof e == "string") if (false) try {
          let { readFile: t } = Je("node:fs/promises");
          return new Uint8Array(await t(e));
        } catch (t) {
          if (t.code === "ERR_FS_FILE_TOO_LARGE") {
            let { createReadStream: n } = Je("node:fs"), o = n(e), r = [];
            for await (let i of o) r.push(i);
            return new Uint8Array(Buffer.concat(r));
          }
          throw t;
        }
        else {
          let t = await fetch(e);
          if (!t.ok) throw new Error(`failed to load external data file: ${e}`);
          let n = t.headers.get("Content-Length"), o = n ? parseInt(n, 10) : 0;
          if (o < 1073741824) return new Uint8Array(await t.arrayBuffer());
          {
            if (!t.body) throw new Error(`failed to load external data file: ${e}, no response body.`);
            let r = t.body.getReader(), i;
            try {
              i = new ArrayBuffer(o);
            } catch (a) {
              if (a instanceof RangeError) {
                let u = Math.ceil(o / 65536);
                i = new WebAssembly.Memory({ initial: u, maximum: u }).buffer;
              } else throw a;
            }
            let s = 0;
            for (; ; ) {
              let { done: a, value: u } = await r.read();
              if (a) break;
              let f = u.byteLength;
              new Uint8Array(i, s, f).set(u), s += f;
            }
            return new Uint8Array(i, 0, o);
          }
        }
        else return e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : e instanceof Uint8Array ? e : new Uint8Array(e);
      };
    });
    tt = E(() => {
      "use strict";
      J();
      on();
      an();
      st();
      ee();
      Re();
      it();
      jn = (e, t) => {
        I()._OrtInit(e, t) !== 0 && S("Can't initialize onnxruntime.");
      }, Le = async (e) => {
        jn(e.wasm.numThreads, fn(e.logLevel));
      }, Pe = async (e, t) => {
        I().asyncInit?.();
        let n = e.webgpu.adapter;
        if (t === "webgpu") {
          if (typeof navigator > "u" || !navigator.gpu) throw new Error("WebGPU is not supported in current environment");
          if (n) {
            if (typeof n.limits != "object" || typeof n.features != "object" || typeof n.requestDevice != "function") throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.");
          } else {
            let o = e.webgpu.powerPreference;
            if (o !== void 0 && o !== "low-power" && o !== "high-performance") throw new Error(`Invalid powerPreference setting: "${o}"`);
            let r = e.webgpu.forceFallbackAdapter;
            if (r !== void 0 && typeof r != "boolean") throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);
            if (n = await navigator.gpu.requestAdapter({ powerPreference: o, forceFallbackAdapter: r }), !n) throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.');
          }
        }
        if (t === "webnn" && (typeof navigator > "u" || !navigator.ml)) throw new Error("WebNN is not supported in current environment");
      }, ue = /* @__PURE__ */ new Map(), Vn = (e) => {
        let t = I(), n = t.stackSave();
        try {
          let o = t.PTR_SIZE, r = t.stackAlloc(2 * o);
          t._OrtGetInputOutputCount(e, r, r + o) !== 0 && S("Can't get session input/output count.");
          let s = o === 4 ? "i32" : "i64";
          return [Number(t.getValue(r, s)), Number(t.getValue(r + o, s))];
        } finally {
          t.stackRestore(n);
        }
      }, dn = (e, t) => {
        let n = I(), o = n.stackSave(), r = 0;
        try {
          let i = n.PTR_SIZE, s = n.stackAlloc(2 * i);
          n._OrtGetInputOutputMetadata(e, t, s, s + i) !== 0 && S("Can't get session input/output metadata.");
          let u = Number(n.getValue(s, "*"));
          r = Number(n.getValue(s + i, "*"));
          let f = n.HEAP32[r / 4];
          if (f === 0) return [u, 0];
          let l = n.HEAPU32[r / 4 + 1], c = [];
          for (let d = 0; d < l; d++) {
            let p = Number(n.getValue(r + 8 + d * i, "*"));
            c.push(p !== 0 ? n.UTF8ToString(p) : Number(n.getValue(r + 8 + (d + l) * i, "*")));
          }
          return [u, f, c];
        } finally {
          n.stackRestore(o), r !== 0 && n._OrtFree(r);
        }
      }, we = (e) => {
        let t = I(), n = t._malloc(e.byteLength);
        if (n === 0) throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);
        return t.HEAPU8.set(e, n), [n, e.byteLength];
      }, _e = async (e, t) => {
        let n, o, r = I();
        Array.isArray(e) ? [n, o] = e : e.buffer === r.HEAPU8.buffer ? [n, o] = [e.byteOffset, e.byteLength] : [n, o] = we(e);
        let i = 0, s = 0, a = 0, u = [], f = [], l = [];
        try {
          if ([s, u] = await sn(t), t?.externalData && r.mountExternalData) {
            let g = [];
            for (let T of t.externalData) {
              let U = typeof T == "string" ? T : T.path;
              g.push(be(typeof T == "string" ? T : T.data).then((M) => {
                r.mountExternalData(U, M);
              }));
            }
            await Promise.all(g);
          }
          for (let g of t?.executionProviders ?? []) if ((typeof g == "string" ? g : g.name) === "webnn") {
            if (r.shouldTransferToMLTensor = false, typeof g != "string") {
              let U = g, M = U?.context, v = U?.gpuDevice, de = U?.deviceType, re = U?.powerPreference;
              M ? r.currentContext = M : v ? r.currentContext = await r.webnnCreateMLContext(v) : r.currentContext = await r.webnnCreateMLContext({ deviceType: de, powerPreference: re });
            } else r.currentContext = await r.webnnCreateMLContext();
            break;
          }
          i = await r._OrtCreateSession(n, o, s), r.webgpuOnCreateSession?.(i), i === 0 && S("Can't create a session."), r.jsepOnCreateSession?.(), r.currentContext && (r.webnnRegisterMLContext(i, r.currentContext), r.currentContext = void 0, r.shouldTransferToMLTensor = true);
          let [c, d] = Vn(i), p = !!t?.enableGraphCapture, h = [], y = [], A = [], m = [], w = [];
          for (let g = 0; g < c; g++) {
            let [T, U, M] = dn(i, g);
            T === 0 && S("Can't get an input name."), f.push(T);
            let v = r.UTF8ToString(T);
            h.push(v), A.push(U === 0 ? { name: v, isTensor: false } : { name: v, isTensor: true, type: Ne(U), shape: M });
          }
          for (let g = 0; g < d; g++) {
            let [T, U, M] = dn(i, g + c);
            T === 0 && S("Can't get an output name."), l.push(T);
            let v = r.UTF8ToString(T);
            y.push(v), m.push(U === 0 ? { name: v, isTensor: false } : { name: v, isTensor: true, type: Ne(U), shape: M });
          }
          return ue.set(i, [i, f, l, null, p, false]), [i, h, y, A, m];
        } catch (c) {
          throw f.forEach((d) => r._OrtFree(d)), l.forEach((d) => r._OrtFree(d)), a !== 0 && r._OrtReleaseBinding(a) !== 0 && S("Can't release IO binding."), i !== 0 && r._OrtReleaseSession(i) !== 0 && S("Can't release session."), c;
        } finally {
          r._free(n), s !== 0 && r._OrtReleaseSessionOptions(s) !== 0 && S("Can't release session options."), u.forEach((c) => r._free(c)), r.unmountExternalData?.();
        }
      }, De = (e) => {
        let t = I(), n = ue.get(e);
        if (!n) throw new Error(`cannot release session. invalid session id: ${e}`);
        let [o, r, i, s, a] = n;
        s && (a && t._OrtClearBoundOutputs(s.handle) !== 0 && S("Can't clear bound outputs."), t._OrtReleaseBinding(s.handle) !== 0 && S("Can't release IO binding.")), t.jsepOnReleaseSession?.(e), t.webnnOnReleaseSession?.(e), t.webgpuOnReleaseSession?.(e), r.forEach((u) => t._OrtFree(u)), i.forEach((u) => t._OrtFree(u)), t._OrtReleaseSession(o) !== 0 && S("Can't release session."), ue.delete(e);
      }, ln = async (e, t, n, o, r, i, s = false) => {
        if (!e) {
          t.push(0);
          return;
        }
        let a = I(), u = a.PTR_SIZE, f = e[0], l = e[1], c = e[3], d = c, p, h;
        if (f === "string" && (c === "gpu-buffer" || c === "ml-tensor")) throw new Error("String tensor is not supported on GPU.");
        if (s && c !== "gpu-buffer") throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);
        if (c === "gpu-buffer") {
          let m = e[2].gpuBuffer;
          h = ae(ie(f), l);
          {
            let w = a.jsepRegisterBuffer;
            if (!w) throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');
            p = w(o, i, m, h);
          }
        } else if (c === "ml-tensor") {
          let m = e[2].mlTensor;
          h = ae(ie(f), l);
          let w = a.webnnRegisterMLTensor;
          if (!w) throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');
          p = w(o, m, ie(f), l);
        } else {
          let m = e[2];
          if (Array.isArray(m)) {
            h = u * m.length, p = a._malloc(h), n.push(p);
            for (let w = 0; w < m.length; w++) {
              if (typeof m[w] != "string") throw new TypeError(`tensor data at index ${w} is not a string`);
              a.setValue(p + w * u, N(m[w], n), "*");
            }
          } else {
            let w = a.webnnIsGraphInput, O = a.webnnIsGraphOutput;
            if (f !== "string" && w && O) {
              let g = a.UTF8ToString(r);
              if (w(o, g) || O(o, g)) {
                let T = ie(f);
                h = ae(T, l), d = "ml-tensor";
                let U = a.webnnCreateTemporaryTensor, M = a.webnnUploadTensor;
                if (!U || !M) throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');
                let v = await U(o, T, l);
                M(v, new Uint8Array(m.buffer, m.byteOffset, m.byteLength)), p = v;
              } else h = m.byteLength, p = a._malloc(h), n.push(p), a.HEAPU8.set(new Uint8Array(m.buffer, m.byteOffset, h), p);
            } else h = m.byteLength, p = a._malloc(h), n.push(p), a.HEAPU8.set(new Uint8Array(m.buffer, m.byteOffset, h), p);
          }
        }
        let y = a.stackSave(), A = a.stackAlloc(4 * l.length);
        try {
          l.forEach((w, O) => a.setValue(A + O * u, w, u === 4 ? "i32" : "i64"));
          let m = a._OrtCreateTensor(ie(f), p, h, A, l.length, cn(d));
          m === 0 && S(`Can't create tensor for input/output. session=${o}, index=${i}.`), t.push(m);
        } finally {
          a.stackRestore(y);
        }
      }, Ue = async (e, t, n, o, r, i) => {
        let s = I(), a = s.PTR_SIZE, u = ue.get(e);
        if (!u) throw new Error(`cannot run inference. invalid session id: ${e}`);
        let f = u[0], l = u[1], c = u[2], d = u[3], p = u[4], h = u[5], y = t.length, A = o.length, m = 0, w = [], O = [], g = [], T = [], U = [], M = s.stackSave(), v = s.stackAlloc(y * a), de = s.stackAlloc(y * a), re = s.stackAlloc(A * a), ct = s.stackAlloc(A * a);
        try {
          [m, w] = rn(i), K("wasm prepareInputOutputTensor");
          for (let b = 0; b < y; b++) await ln(n[b], O, T, e, l[t[b]], t[b], p);
          for (let b = 0; b < A; b++) await ln(r[b], g, T, e, c[o[b]], y + o[b], p);
          Q("wasm prepareInputOutputTensor");
          for (let b = 0; b < y; b++) s.setValue(v + b * a, O[b], "*"), s.setValue(de + b * a, l[t[b]], "*");
          for (let b = 0; b < A; b++) s.setValue(re + b * a, g[b], "*"), s.setValue(ct + b * a, c[o[b]], "*");
          s.jsepOnRunStart?.(f), s.webnnOnRunStart?.(f);
          let F;
          F = await s._OrtRun(f, de, v, y, ct, A, re, m), F !== 0 && S("failed to call OrtRun().");
          let z = [], dt = [];
          K("wasm ProcessOutputTensor");
          for (let b = 0; b < A; b++) {
            let W = Number(s.getValue(re + b * a, "*"));
            if (W === g[b] || U.includes(g[b])) {
              z.push(r[b]), W !== g[b] && s._OrtReleaseTensor(W) !== 0 && S("Can't release tensor.");
              continue;
            }
            let lt = s.stackSave(), $ = s.stackAlloc(4 * a), oe = false, P, C = 0;
            try {
              s._OrtGetTensorData(W, $, $ + a, $ + 2 * a, $ + 3 * a) !== 0 && S(`Can't access output tensor data on index ${b}.`);
              let je = a === 4 ? "i32" : "i64", ge = Number(s.getValue($, je));
              C = s.getValue($ + a, "*");
              let pt = s.getValue($ + a * 2, "*"), Bn = Number(s.getValue($ + a * 3, je)), H = [];
              for (let D = 0; D < Bn; D++) H.push(Number(s.getValue(pt + D * a, je)));
              s._OrtFree(pt) !== 0 && S("Can't free memory for tensor dims.");
              let j = H.reduce((D, L) => D * L, 1);
              P = Ne(ge);
              let le = d?.outputPreferredLocations[o[b]];
              if (P === "string") {
                if (le === "gpu-buffer" || le === "ml-tensor") throw new Error("String tensor is not supported on GPU.");
                let D = [];
                for (let L = 0; L < j; L++) {
                  let V = s.getValue(C + L * a, "*"), Ee = s.getValue(C + (L + 1) * a, "*"), mt = L === j - 1 ? void 0 : Ee - V;
                  D.push(s.UTF8ToString(V, mt));
                }
                z.push([P, H, D, "cpu"]);
              } else if (le === "gpu-buffer" && j > 0) {
                let D = s.jsepGetBuffer;
                if (!D) throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');
                let L = D(C), V = ae(ge, j);
                if (V === void 0 || !Fe(P)) throw new Error(`Unsupported data type: ${P}`);
                oe = true, z.push([P, H, { gpuBuffer: L, download: s.jsepCreateDownloader(L, V, P), dispose: () => {
                  s._OrtReleaseTensor(W) !== 0 && S("Can't release tensor.");
                } }, "gpu-buffer"]);
              } else if (le === "ml-tensor" && j > 0) {
                let D = s.webnnEnsureTensor, L = s.webnnIsGraphInputOutputTypeSupported;
                if (!D || !L) throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');
                if (ae(ge, j) === void 0 || !ke(P)) throw new Error(`Unsupported data type: ${P}`);
                if (!L(e, P, false)) throw new Error(`preferredLocation "ml-tensor" for ${P} output is not supported by current WebNN Context.`);
                let Ee = await D(e, C, ge, H, false);
                oe = true, z.push([P, H, { mlTensor: Ee, download: s.webnnCreateMLTensorDownloader(C, P), dispose: () => {
                  s.webnnReleaseTensorId(C), s._OrtReleaseTensor(W);
                } }, "ml-tensor"]);
              } else if (le === "ml-tensor-cpu-output" && j > 0) {
                let D = s.webnnCreateMLTensorDownloader(C, P)(), L = z.length;
                oe = true, dt.push((async () => {
                  let V = [L, await D];
                  return s.webnnReleaseTensorId(C), s._OrtReleaseTensor(W), V;
                })()), z.push([P, H, [], "cpu"]);
              } else {
                let D = un(P), L = new D(j);
                new Uint8Array(L.buffer, L.byteOffset, L.byteLength).set(s.HEAPU8.subarray(C, C + L.byteLength)), z.push([P, H, L, "cpu"]);
              }
            } finally {
              s.stackRestore(lt), P === "string" && C && s._free(C), oe || s._OrtReleaseTensor(W);
            }
          }
          d && !p && (s._OrtClearBoundOutputs(d.handle) !== 0 && S("Can't clear bound outputs."), ue.set(e, [f, l, c, d, p, false]));
          for (let [b, W] of await Promise.all(dt)) z[b][2] = W;
          return Q("wasm ProcessOutputTensor"), z;
        } finally {
          s.webnnOnRunEnd?.(f), s.stackRestore(M), O.forEach((F) => s._OrtReleaseTensor(F)), g.forEach((F) => s._OrtReleaseTensor(F)), T.forEach((F) => s._free(F)), m !== 0 && s._OrtReleaseRunOptions(m), w.forEach((F) => s._free(F));
        }
      }, xe = (e) => {
        let t = I(), n = ue.get(e);
        if (!n) throw new Error("invalid session id");
        let o = n[0], r = t._OrtEndProfiling(o);
        r === 0 && S("Can't get an profile file name."), t._OrtFree(r);
      }, ve = (e) => {
        let t = [];
        for (let n of e) {
          let o = n[2];
          !Array.isArray(o) && "buffer" in o && t.push(o.buffer);
        }
        return t;
      };
    });
    ft = E(() => {
      "use strict";
      J();
      tt();
      ee();
      Be();
      ne = () => !!B.wasm.proxy && typeof document < "u", ye = false, Ge = false, $e = false, ut = /* @__PURE__ */ new Map(), fe = (e, t) => {
        let n = ut.get(e);
        n ? n.push(t) : ut.set(e, [t]);
      }, ce = () => {
        if (ye || !Ge || $e || !k) throw new Error("worker not ready");
      }, qn = (e) => {
        switch (e.data.type) {
          case "init-wasm":
            ye = false, e.data.err ? ($e = true, at[1](e.data.err)) : (Ge = true, at[0]()), We && (URL.revokeObjectURL(We), We = void 0);
            break;
          case "init-ep":
          case "copy-from":
          case "create":
          case "release":
          case "run":
          case "end-profiling": {
            let t = ut.get(e.data.type);
            e.data.err ? t.shift()[1](e.data.err) : t.shift()[0](e.data.out);
            break;
          }
          default:
        }
      }, pn = async () => {
        if (!Ge) {
          if (ye) throw new Error("multiple calls to 'initWasm()' detected.");
          if ($e) throw new Error("previous call to 'initWasm()' failed.");
          if (ye = true, ne()) return new Promise((e, t) => {
            k?.terminate(), en().then(([n, o]) => {
              try {
                k = o, k.onerror = (i) => t(i), k.onmessage = qn, at = [e, t];
                let r = { type: "init-wasm", in: B };
                if (!r.in.wasm.wasmPaths && n) {
                  let i = Ce();
                  i && (r.in.wasm.wasmPaths = i);
                }
                k.postMessage(r), We = n;
              } catch (r) {
                t(r);
              }
            }, t);
          });
          try {
            await Oe(B.wasm), await Le(B), Ge = true;
          } catch (e) {
            throw $e = true, e;
          } finally {
            ye = false;
          }
        }
      }, mn = async (e) => {
        if (ne()) return ce(), new Promise((t, n) => {
          fe("init-ep", [t, n]);
          let o = { type: "init-ep", in: { epName: e, env: B } };
          k.postMessage(o);
        });
        await Pe(B, e);
      }, wn = async (e) => ne() ? (ce(), new Promise((t, n) => {
        fe("copy-from", [t, n]);
        let o = { type: "copy-from", in: { buffer: e } };
        k.postMessage(o, [e.buffer]);
      })) : we(e), hn = async (e, t) => {
        if (ne()) {
          if (t?.preferredOutputLocation) throw new Error('session option "preferredOutputLocation" is not supported for proxy.');
          return ce(), new Promise((n, o) => {
            fe("create", [n, o]);
            let r = { type: "create", in: { model: e, options: { ...t } } }, i = [];
            e instanceof Uint8Array && i.push(e.buffer), k.postMessage(r, i);
          });
        } else return _e(e, t);
      }, bn = async (e) => {
        if (ne()) return ce(), new Promise((t, n) => {
          fe("release", [t, n]);
          let o = { type: "release", in: e };
          k.postMessage(o);
        });
        De(e);
      }, yn = async (e, t, n, o, r, i) => {
        if (ne()) {
          if (n.some((s) => s[3] !== "cpu")) throw new Error("input tensor on GPU is not supported for proxy.");
          if (r.some((s) => s)) throw new Error("pre-allocated output tensor is not supported for proxy.");
          return ce(), new Promise((s, a) => {
            fe("run", [s, a]);
            let u = n, f = { type: "run", in: { sessionId: e, inputIndices: t, inputs: u, outputIndices: o, options: i } };
            k.postMessage(f, ve(u));
          });
        } else return Ue(e, t, n, o, r, i);
      }, gn = async (e) => {
        if (ne()) return ce(), new Promise((t, n) => {
          fe("end-profiling", [t, n]);
          let o = { type: "end-profiling", in: e };
          k.postMessage(o);
        });
        xe(e);
      };
    });
    Sn = E(() => {
      "use strict";
      J();
      ft();
      st();
      Ae();
      it();
      En = (e, t) => {
        switch (e.location) {
          case "cpu":
            return [e.type, e.dims, e.data, "cpu"];
          case "gpu-buffer":
            return [e.type, e.dims, { gpuBuffer: e.gpuBuffer }, "gpu-buffer"];
          case "ml-tensor":
            return [e.type, e.dims, { mlTensor: e.mlTensor }, "ml-tensor"];
          default:
            throw new Error(`invalid data location: ${e.location} for ${t()}`);
        }
      }, Yn = (e) => {
        switch (e[3]) {
          case "cpu":
            return new G(e[0], e[2], e[1]);
          case "gpu-buffer": {
            let t = e[0];
            if (!Fe(t)) throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);
            let { gpuBuffer: n, download: o, dispose: r } = e[2];
            return G.fromGpuBuffer(n, { dataType: t, dims: e[1], download: o, dispose: r });
          }
          case "ml-tensor": {
            let t = e[0];
            if (!ke(t)) throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);
            let { mlTensor: n, download: o, dispose: r } = e[2];
            return G.fromMLTensor(n, { dataType: t, dims: e[1], download: o, dispose: r });
          }
          default:
            throw new Error(`invalid data location: ${e[3]}`);
        }
      }, ze = class {
        async fetchModelAndCopyToWasmMemory(t) {
          return wn(await be(t));
        }
        async loadModel(t, n) {
          Z();
          let o;
          typeof t == "string" ? o = await this.fetchModelAndCopyToWasmMemory(t) : o = t, [this.sessionId, this.inputNames, this.outputNames, this.inputMetadata, this.outputMetadata] = await hn(o, n), X();
        }
        async dispose() {
          return bn(this.sessionId);
        }
        async run(t, n, o) {
          Z();
          let r = [], i = [];
          Object.entries(t).forEach((d) => {
            let p = d[0], h = d[1], y = this.inputNames.indexOf(p);
            if (y === -1) throw new Error(`invalid input '${p}'`);
            r.push(h), i.push(y);
          });
          let s = [], a = [];
          Object.entries(n).forEach((d) => {
            let p = d[0], h = d[1], y = this.outputNames.indexOf(p);
            if (y === -1) throw new Error(`invalid output '${p}'`);
            s.push(h), a.push(y);
          });
          let u = r.map((d, p) => En(d, () => `input "${this.inputNames[i[p]]}"`)), f = s.map((d, p) => d ? En(d, () => `output "${this.outputNames[a[p]]}"`) : null), l = await yn(this.sessionId, i, u, a, f, o), c = {};
          for (let d = 0; d < l.length; d++) c[this.outputNames[a[d]]] = s[d] ?? Yn(l[d]);
          return X(), c;
        }
        startProfiling() {
        }
        endProfiling() {
          gn(this.sessionId);
        }
      };
    });
    In = {};
    qe(In, { OnnxruntimeWebAssemblyBackend: () => He, initializeFlags: () => Tn, wasmBackend: () => Zn });
    An = E(() => {
      "use strict";
      J();
      ft();
      Sn();
      Tn = () => {
        (typeof B.wasm.initTimeout != "number" || B.wasm.initTimeout < 0) && (B.wasm.initTimeout = 0);
        let e = B.wasm.simd;
        if (typeof e != "boolean" && e !== void 0 && e !== "fixed" && e !== "relaxed" && (console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`), B.wasm.simd = false), typeof B.wasm.proxy != "boolean" && (B.wasm.proxy = false), typeof B.wasm.trace != "boolean" && (B.wasm.trace = false), typeof B.wasm.numThreads != "number" || !Number.isInteger(B.wasm.numThreads) || B.wasm.numThreads <= 0) if (typeof self < "u" && !self.crossOriginIsolated) B.wasm.numThreads = 1;
        else {
          let t = typeof navigator > "u" ? Je("node:os").cpus().length : navigator.hardwareConcurrency;
          B.wasm.numThreads = Math.min(4, Math.ceil((t || 1) / 2));
        }
      }, He = class {
        async init(t) {
          Tn(), await pn(), await mn(t);
        }
        async createInferenceSessionHandler(t, n) {
          let o = new ze();
          return await o.loadModel(t, n), o;
        }
      }, Zn = new He();
    });
    J();
    J();
    J();
    jt = "1.27.0";
    Ro = et;
    {
      let e = (An(), wt(In)).wasmBackend;
      pe("cpu", e, 10), pe("wasm", e, 10);
    }
    Object.defineProperty(B.versions, "web", { value: jt, enumerable: true });
  }
});

// node_modules/ppu-paddle-ocr/constants.js
var DEFAULT_DEBUGGING_OPTIONS, DEFAULT_DETECTION_OPTIONS, DEFAULT_RECOGNITION_OPTIONS, DEFAULT_SESSION_OPTIONS, DEFAULT_PROCESSING_ENGINE, DEFAULT_PROCESSING_OPTIONS, DEFAULT_PADDLE_OPTIONS;
var init_constants = __esm({
  "node_modules/ppu-paddle-ocr/constants.js"() {
    DEFAULT_DEBUGGING_OPTIONS = { verbose: false, debug: false, debugFolder: "out" };
    DEFAULT_DETECTION_OPTIONS = { mean: [0.485, 0.456, 0.406], stdDeviation: [0.229, 0.224, 0.225], maxSideLength: "auto", minimumAreaThreshold: 20, paddingVertical: 0.4, paddingHorizontal: 0.6 };
    DEFAULT_RECOGNITION_OPTIONS = { imageHeight: 48, strategy: "per-line", crossLineWidthFactor: 1, minimumConfidence: 0.5, charactersDictionary: [] };
    DEFAULT_SESSION_OPTIONS = { executionProviders: ["cpu"], graphOptimizationLevel: "all", enableCpuMemArena: true, enableMemPattern: true, executionMode: "sequential", interOpNumThreads: 0, intraOpNumThreads: 0 };
    DEFAULT_PROCESSING_ENGINE = "opencv";
    DEFAULT_PROCESSING_OPTIONS = { engine: DEFAULT_PROCESSING_ENGINE };
    DEFAULT_PADDLE_OPTIONS = { model: {}, detection: DEFAULT_DETECTION_OPTIONS, recognition: DEFAULT_RECOGNITION_OPTIONS, debugging: DEFAULT_DEBUGGING_OPTIONS, session: DEFAULT_SESSION_OPTIONS, processing: DEFAULT_PROCESSING_OPTIONS };
  }
});

// node_modules/ppu-paddle-ocr/utils.js
function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  let source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          continue;
        }
        let sourceValue = source[key];
        let targetValue = target[key];
        if (isObject(sourceValue)) {
          if (!targetValue || !isObject(targetValue)) {
            target[key] = {};
          }
          deepMerge(target[key], sourceValue);
        } else if (sourceValue !== void 0) {
          target[key] = sourceValue;
        }
      }
    }
  }
  return deepMerge(target, ...sources);
}
async function fetchArrayBufferWithRetry(url, options = {}) {
  const { timeoutMs = 3e5, retries = 2 } = options;
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      let response = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      return await response.arrayBuffer();
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
      }
    }
  }
  throw new Error(`Failed to fetch ${url} after ${retries + 1} attempt(s): ${String(lastError)}`);
}
function parseDictionary(source) {
  let content = typeof source === "string" ? source : new TextDecoder("utf-8").decode(source);
  return content.split(/\r?\n/);
}
function isObject(item) {
  return item !== null && typeof item === "object" && !Array.isArray(item) && !(item instanceof Date) && !(item instanceof RegExp) && !(item instanceof ArrayBuffer) && !ArrayBuffer.isView(item);
}
var init_utils = __esm({
  "node_modules/ppu-paddle-ocr/utils.js"() {
  }
});

// node_modules/ppu-paddle-ocr/core/detection/box-geometry.js
function resolveMaxSideLength(maxSideLength, longestSide) {
  if (maxSideLength !== "auto") return maxSideLength;
  return Math.min(1920, Math.max(960, Math.round(longestSide * 0.75 / 32) * 32));
}
function calculateResizeDimensions(originalWidth, originalHeight, maxSideLength) {
  let resizeW = originalWidth;
  let resizeH = originalHeight;
  let ratio = 1;
  if (Math.max(resizeH, resizeW) > maxSideLength) {
    ratio = maxSideLength / (resizeH > resizeW ? resizeH : resizeW);
    resizeW = Math.round(resizeW * ratio);
    resizeH = Math.round(resizeH * ratio);
  }
  return { width: resizeW, height: resizeH, ratio };
}
function applyPaddingToRect(rect, maxWidth, maxHeight, paddingVertical, paddingHorizontal) {
  let verticalPadding = Math.round(rect.height * paddingVertical);
  let horizontalPadding = Math.round(rect.height * paddingHorizontal);
  let x2 = rect.x - horizontalPadding;
  let y = rect.y - verticalPadding;
  x2 = Math.max(0, x2);
  y = Math.max(0, y);
  let rightEdge = Math.min(maxWidth, rect.x + rect.width + horizontalPadding);
  let bottomEdge = Math.min(maxHeight, rect.y + rect.height + verticalPadding);
  let width = rightEdge - x2;
  let height = bottomEdge - y;
  return { x: x2, y, width, height };
}
function convertToOriginalCoordinates(rect, resizeRatio, originalWidth, originalHeight) {
  let scaledX = rect.x / resizeRatio;
  let scaledY = rect.y / resizeRatio;
  let scaledWidth = rect.width / resizeRatio;
  let scaledHeight = rect.height / resizeRatio;
  let x2 = Math.max(0, Math.round(scaledX));
  let y = Math.max(0, Math.round(scaledY));
  let width = Math.min(originalWidth - x2, Math.round(scaledWidth));
  let height = Math.min(originalHeight - y, Math.round(scaledHeight));
  return { x: x2, y, width, height };
}
function extractBoxesFromContours(contours, width, height, resizeRatio, originalWidth, originalHeight, minBoxArea, paddingVertical, paddingHorizontal) {
  let boxes = [];
  contours.iterate((contour) => {
    let rect = contours.getRect(contour);
    if (rect.width * rect.height <= minBoxArea) {
      return;
    }
    let paddedRect = applyPaddingToRect(rect, width, height, paddingVertical, paddingHorizontal);
    let finalBox = convertToOriginalCoordinates(paddedRect, resizeRatio, originalWidth, originalHeight);
    if (finalBox.width > 5 && finalBox.height > 5) {
      boxes.push(finalBox);
    }
  });
  return boxes;
}
function extractBoxesFromRegions(regions, originalWidth, originalHeight) {
  let boxes = [];
  for (let region of regions) {
    const { bbox } = region;
    let box = { x: Math.max(0, bbox.x0), y: Math.max(0, bbox.y0), width: bbox.x1 - bbox.x0, height: bbox.y1 - bbox.y0 };
    if (box.x + box.width > originalWidth) {
      box.width = originalWidth - box.x;
    }
    if (box.y + box.height > originalHeight) {
      box.height = originalHeight - box.y;
    }
    if (box.width > 5 && box.height > 5) {
      boxes.push(box);
    }
  }
  return boxes;
}
var init_box_geometry = __esm({
  "node_modules/ppu-paddle-ocr/core/detection/box-geometry.js"() {
  }
});

// node_modules/ppu-paddle-ocr/core/detection/image-tensor.js
function imageToTensor(canvas, width, height, mean, stdDeviation) {
  let ctx = canvas.getContext("2d");
  let imageData = ctx.getImageData(0, 0, width, height);
  let rgbaData = imageData.data;
  let channelSize = height * width;
  let tensor = new Float32Array(NUM_CHANNELS * channelSize);
  let meanR = mean[0] ?? 0.485;
  let meanG = mean[1] ?? 0.456;
  let meanB = mean[2] ?? 0.406;
  let stdR = stdDeviation[0] ?? 0.229;
  let stdG = stdDeviation[1] ?? 0.224;
  let stdB = stdDeviation[2] ?? 0.225;
  let scaleR = 1 / (255 * stdR);
  let scaleG = 1 / (255 * stdG);
  let scaleB = 1 / (255 * stdB);
  let shiftR = meanR / stdR;
  let shiftG = meanG / stdG;
  let shiftB = meanB / stdB;
  let gOffset = channelSize;
  let bOffset = channelSize * 2;
  for (let i = 0, rgbaIdx = 0; i < channelSize; i++, rgbaIdx += 4) {
    let r = rgbaData[rgbaIdx];
    let g = rgbaData[rgbaIdx + 1];
    let b = rgbaData[rgbaIdx + 2];
    tensor[i] = r * scaleR - shiftR;
    tensor[gOffset + i] = g * scaleG - shiftG;
    tensor[bOffset + i] = b * scaleB - shiftB;
  }
  return tensor;
}
function tensorToCanvas(tensor, width, height, createCanvas) {
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext("2d");
  let imageData = ctx.createImageData(width, height);
  let data = imageData.data;
  let totalPixels = width * height;
  for (let i = 0; i < totalPixels; i++) {
    let probability = tensor[i] || 0;
    let grayValue = Math.round(probability * 255);
    let pixelIdx = i * 4;
    data[pixelIdx] = grayValue;
    data[pixelIdx + 1] = grayValue;
    data[pixelIdx + 2] = grayValue;
    data[pixelIdx + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}
var NUM_CHANNELS;
var init_image_tensor = __esm({
  "node_modules/ppu-paddle-ocr/core/detection/image-tensor.js"() {
    NUM_CHANNELS = 3;
  }
});

// node_modules/ppu-paddle-ocr/core/base-detection.service.js
var BaseDetectionService;
var init_base_detection_service = __esm({
  "node_modules/ppu-paddle-ocr/core/base-detection.service.js"() {
    init_constants();
    init_box_geometry();
    init_image_tensor();
    BaseDetectionService = class {
      options;
      debugging;
      session;
      platform;
      engine;
      lastDetectionCanvas = null;
      constructor(platform, session, options = {}, debugging = {}, engine = "opencv") {
        this.platform = platform;
        this.session = session;
        this.options = { ...DEFAULT_DETECTION_OPTIONS, ...options };
        this.debugging = { ...DEFAULT_DEBUGGING_OPTIONS, ...debugging };
        if (engine === "opencv" && !this.platform.imageProcessor) {
          this.engine = "canvas-native";
        } else {
          this.engine = engine;
        }
      }
      log(message) {
        if (this.debugging.verbose) {
          console.log(`[DetectionService] ${message}`);
        }
      }
      async run(image) {
        this.log("Starting text detection process");
        try {
          let canvasToProcess;
          if (this.platform.isCanvas(image)) {
            canvasToProcess = image;
          } else if (this.engine === "opencv" && this.platform.imageProcessor) {
            canvasToProcess = await this.platform.imageProcessor.prepareCanvas(image);
          } else {
            canvasToProcess = await this.platform.canvas.prepareCanvas(image);
          }
          let input = await this.preprocessDetection(canvasToProcess);
          let detection = await this.runInference(input.tensor, input.width, input.height);
          if (!detection) {
            console.error("Text detection failed (output tensor is null)");
            return [];
          }
          let detectedBoxes = this.postprocessDetection(detection, input);
          if (this.debugging.debug && this.debugging.debugFolder && this.lastDetectionCanvas) {
            await this.debugDetectionCanvas(this.lastDetectionCanvas, input.width, input.height);
            await this.debugDetectedBoxes(canvasToProcess, detectedBoxes);
          }
          this.log(`Detected ${detectedBoxes.length} text boxes in image`);
          return detectedBoxes;
        } catch (error) {
          console.error("Error during text detection:", error instanceof Error ? error.message : String(error));
          return [];
        }
      }
      async preprocessDetection(canvas) {
        const { width: originalWidth, height: originalHeight } = canvas;
        let maxSideLength = resolveMaxSideLength(this.options.maxSideLength ?? "auto", Math.max(originalWidth, originalHeight));
        const { width: resizeW, height: resizeH, ratio: resizeRatio } = calculateResizeDimensions(originalWidth, originalHeight, maxSideLength);
        let width = Math.ceil(resizeW / 32) * 32;
        let height = Math.ceil(resizeH / 32) * 32;
        let paddedCanvas = this.platform.createCanvas(width, height);
        let paddedCtx = paddedCanvas.getContext("2d");
        paddedCtx.drawImage(canvas, 0, 0, originalWidth, originalHeight, 0, 0, resizeW, resizeH);
        let mean = this.options.mean ?? [0.485, 0.456, 0.406];
        let stdDeviation = this.options.stdDeviation ?? [0.229, 0.224, 0.225];
        let tensor = imageToTensor(paddedCanvas, width, height, mean, stdDeviation);
        this.log(`Detection preprocessed: original(${originalWidth}x${originalHeight}), model_input(${width}x${height}), resize_ratio: ${resizeRatio.toFixed(4)}, engine: ${this.engine}`);
        return { tensor, width, height, resizeRatio, originalWidth, originalHeight };
      }
      async runInference(tensor, width, height) {
        let inputTensor;
        try {
          this.log("Running detection inference...");
          inputTensor = new this.platform.ort.Tensor("float32", tensor, [1, 3, height, width]);
          let feeds = { x: inputTensor };
          let results = await this.session.run(feeds);
          let outputTensor = results[this.session.outputNames[0] || "sigmoid_0.tmp_0"];
          this.log("Detection inference complete!");
          if (!outputTensor) {
            console.error(`Output tensor ${this.session.outputNames[0]} not found in detection results`);
            return null;
          }
          return outputTensor.data;
        } catch (error) {
          console.error("Error during model inference:", error instanceof Error ? error.message : String(error));
          throw error;
        } finally {
          inputTensor?.dispose();
        }
      }
      postprocessDetection(detection, input, minBoxAreaOnPadded = this.options.minimumAreaThreshold ?? 50, paddingVertical = this.options.paddingVertical || 0.4, paddingHorizontal = this.options.paddingHorizontal || 0.6) {
        this.log("Post-processing detection results...");
        const { width, height, resizeRatio, originalWidth, originalHeight } = input;
        let canvas = tensorToCanvas(detection, width, height, this.platform.createCanvas.bind(this.platform));
        this.lastDetectionCanvas = canvas;
        if (this.engine === "opencv" && this.platform.imageProcessor) {
          return this.postprocessWithOpenCV(canvas, width, height, resizeRatio, originalWidth, originalHeight, minBoxAreaOnPadded, paddingVertical, paddingHorizontal);
        }
        return this.postprocessWithCanvasNative(canvas, resizeRatio, originalWidth, originalHeight, minBoxAreaOnPadded, paddingVertical, paddingHorizontal);
      }
      postprocessWithOpenCV(canvas, width, height, resizeRatio, originalWidth, originalHeight, minBoxAreaOnPadded, paddingVertical, paddingHorizontal) {
        let ip = this.platform.imageProcessor;
        let processor = new ip.ImageProcessor(canvas);
        try {
          processor.grayscale().convert({ rtype: ip.cv.CV_8UC1 });
          let contours = new ip.Contours(processor.toMat(), { mode: ip.cv.RETR_LIST, method: ip.cv.CHAIN_APPROX_SIMPLE });
          let boxes = extractBoxesFromContours(contours, width, height, resizeRatio, originalWidth, originalHeight, minBoxAreaOnPadded, paddingVertical, paddingHorizontal);
          contours.destroy();
          this.log(`Found ${boxes.length} potential text boxes (opencv)`);
          return boxes;
        } finally {
          processor.destroy();
        }
      }
      postprocessWithCanvasNative(canvas, resizeRatio, originalWidth, originalHeight, minBoxAreaOnPadded, paddingVertical, paddingHorizontal) {
        let processor = this.platform.canvas.createProcessor(canvas).grayscale().threshold({ thresh: 0 });
        let regions = processor.findRegions({ foreground: "light", minArea: minBoxAreaOnPadded, thresh: 0, padding: { vertical: paddingVertical, horizontal: paddingHorizontal }, scale: 1 / resizeRatio });
        let boxes = extractBoxesFromRegions(regions, originalWidth, originalHeight);
        this.log(`Found ${boxes.length} potential text boxes (canvas-native)`);
        return boxes;
      }
      async debugDetectionCanvas(canvas, _width, _height) {
        let dir = this.debugging.debugFolder ?? "";
        await this.platform.saveDebugImage(canvas, "detection-debug", dir);
        this.log(`Probability map visualized and saved to: ${dir}`);
      }
      async debugDetectedBoxes(image, boxes) {
        let canvas = this.platform.isCanvas(image) ? image : await this.platform.canvas.prepareCanvas(image);
        let ctx = canvas.getContext("2d");
        for (let box of boxes) {
          const { x: x2, y, width, height } = box;
          this.platform.canvas.getToolkit().drawLine({ ctx, x: x2, y, width, height });
        }
        let dir = this.debugging.debugFolder ?? "";
        await this.platform.saveDebugImage(canvas, "boxes-debug", dir);
        this.log(`Boxes visualized and saved to: ${dir}`);
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/core/batch.js
function toAbortError(signal) {
  return signal.reason instanceof Error ? signal.reason : new DOMException("The batch operation was aborted.", "AbortError");
}
function toAsyncIterator(inputs) {
  if (Symbol.asyncIterator in inputs) {
    return inputs[Symbol.asyncIterator]();
  }
  let sync = inputs[Symbol.iterator]();
  return { next: () => Promise.resolve(sync.next()), return: (value) => Promise.resolve(sync.return?.(value) ?? { done: true, value: void 0 }) };
}
async function runPool(inputs, options, task, onSettle) {
  const { settle, signal } = options;
  let concurrency = Math.max(1, Math.floor(options.concurrency));
  if (signal?.aborted) throw toAbortError(signal);
  let nextIndex = 0;
  let done = 0;
  let stopped = false;
  let failed = false;
  let failure;
  let array = Array.isArray(inputs) ? inputs : null;
  let iterator = array ? null : toAsyncIterator(inputs);
  let lock = Promise.resolve();
  let nextItem = async () => {
    let previous = lock;
    let release;
    lock = new Promise((resolve) => {
      release = resolve;
    });
    await previous;
    try {
      return await iterator.next();
    } finally {
      release();
    }
  };
  let onAbort = () => {
    stopped = true;
  };
  signal?.addEventListener("abort", onAbort, { once: true });
  let worker = async () => {
    while (!stopped) {
      let item;
      let index;
      if (array) {
        if (nextIndex >= array.length) return;
        index = nextIndex++;
        item = array[index];
      } else {
        let next = await nextItem();
        if (next.done || stopped) return;
        index = nextIndex++;
        item = next.value;
      }
      try {
        let value = await task(item, index);
        if (stopped) return;
        onSettle({ index, status: "fulfilled", value });
      } catch (reason) {
        if (settle) {
          onSettle({ index, status: "rejected", reason });
        } else {
          stopped = true;
          failed = true;
          failure = reason;
          return;
        }
      } finally {
        done++;
        options.onProgress?.(done, options.total);
      }
    }
  };
  try {
    await Promise.all(Array.from({ length: concurrency }, () => worker()));
  } finally {
    signal?.removeEventListener("abort", onAbort);
    await iterator?.return?.();
  }
  if (signal?.aborted) throw toAbortError(signal);
  if (failed) throw failure;
}
function createAsyncQueue() {
  let items = [];
  let wake = null;
  let closed = false;
  let failure = null;
  let notify = () => {
    let w = wake;
    wake = null;
    w?.();
  };
  return { push(item) {
    items.push(item);
    notify();
  }, close() {
    closed = true;
    notify();
  }, fail(error) {
    failure = { error };
    closed = true;
    notify();
  }, async *drain() {
    while (true) {
      while (items.length > 0) {
        yield items.shift();
      }
      if (failure) throw failure.error;
      if (closed) return;
      await new Promise((resolve) => {
        wake = resolve;
      });
    }
  } };
}
var init_batch = __esm({
  "node_modules/ppu-paddle-ocr/core/batch.js"() {
  }
});

// node_modules/ppu-paddle-ocr/core/detection/crop-boxes.js
async function cropDetectedBoxes(platform, canvas, boxes, options) {
  let toolkit = platform.canvas.getToolkit();
  let crops = [];
  for (const [index, box] of boxes.entries()) {
    let cropCanvas = toolkit.crop({ bbox: { x0: box.x, y0: box.y, x1: box.x + box.width, y1: box.y + box.height }, canvas });
    if (options.saveCropsTo && platform.saveImage) {
      let filename = `crop_${String(index).padStart(3, "0")}.png`;
      await platform.saveImage(cropCanvas, [options.saveCropsTo, filename].join(platform.pathSeparator));
    }
    if (options.crop) {
      crops.push(await canvasToPngBuffer(cropCanvas));
    }
  }
  return crops;
}
async function canvasToPngBuffer(canvas) {
  let c = canvas;
  if (typeof c.toBuffer === "function") {
    let buffer = c.toBuffer("image/png");
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  }
  if (typeof c.convertToBlob === "function") {
    let blob = await c.convertToBlob({ type: "image/png" });
    return blob.arrayBuffer();
  }
  if (typeof c.toBlob === "function") {
    let toBlob = c.toBlob.bind(c);
    let blob = await new Promise((resolve, reject) => toBlob((b) => b ? resolve(b) : reject(new Error("Canvas toBlob() returned null")), "image/png"));
    return blob.arrayBuffer();
  }
  throw new Error("Canvas cannot be encoded to a PNG buffer on this platform");
}
var init_crop_boxes = __esm({
  "node_modules/ppu-paddle-ocr/core/detection/crop-boxes.js"() {
  }
});

// node_modules/ppu-paddle-ocr/core/recognition/line-grouping.js
function flattenResults(results) {
  if (results.length === 0) {
    return { text: "", results: [], confidence: 0 };
  }
  let text = results.map((r) => r.text).join(" ");
  let avgConfidence = results.reduce((sum, r) => sum + r.confidence, 0) / results.length;
  return { text, results, confidence: avgConfidence };
}
function groupResultsByLine(results) {
  if (results.length === 0) {
    return { text: "", lines: [], confidence: 0 };
  }
  let lines = [];
  let currentLine = [];
  let firstResult = results[0];
  if (!firstResult) return { text: "", lines: [], confidence: 0 };
  let currentY = firstResult.box.y;
  let avgHeight = firstResult.box.height;
  for (let result of results) {
    const { box } = result;
    if (Math.abs(box.y - currentY) < avgHeight / 2) {
      currentLine.push(result);
      avgHeight = (avgHeight * (currentLine.length - 1) + box.height) / currentLine.length;
    } else {
      currentLine.sort((a, b) => a.box.x - b.box.x);
      lines.push(currentLine);
      currentLine = [result];
      currentY = box.y;
      avgHeight = box.height;
    }
  }
  if (currentLine.length > 0) {
    currentLine.sort((a, b) => a.box.x - b.box.x);
    lines.push(currentLine);
  }
  let fullText = lines.map((line) => line.map((r) => r.text).join(" ")).join(`
`);
  let totalConfidence = lines.reduce((sum, line) => sum + line.reduce((s, r) => s + r.confidence, 0), 0);
  let totalItems = lines.reduce((sum, line) => sum + line.length, 0);
  return { text: fullText, lines, confidence: totalItems > 0 ? totalConfidence / totalItems : 0 };
}
function groupBoxesIntoLines(boxes) {
  if (boxes.length === 0) return [];
  let sorted = [...boxes].sort((a, b) => a.box.y - b.box.y || a.box.x - b.box.x);
  let lines = [];
  let firstSorted = sorted[0];
  if (!firstSorted) return [];
  let currentLine = [firstSorted];
  let currentLineHeightSum = firstSorted.box.height;
  let avgHeight = firstSorted.box.height;
  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    let previous = sorted[i - 1];
    if (!current || !previous) continue;
    let verticalGap = Math.abs(current.box.y - previous.box.y);
    let threshold = avgHeight * 0.5;
    if (verticalGap <= threshold) {
      currentLine.push(current);
      currentLineHeightSum += current.box.height;
      avgHeight = currentLineHeightSum / currentLine.length;
    } else {
      currentLine.sort((a, b) => a.box.x - b.box.x);
      lines.push(currentLine);
      currentLine = [current];
      currentLineHeightSum = current.box.height;
      avgHeight = current.box.height;
    }
  }
  if (currentLine.length > 0) {
    currentLine.sort((a, b) => a.box.x - b.box.x);
    lines.push(currentLine);
  }
  return lines;
}
function mergeLineCrop(sourceCanvas, lineBoxes, createCanvas, canvasOps) {
  let minX = Math.min(...lineBoxes.map((b) => b.box.x));
  let minY = Math.min(...lineBoxes.map((b) => b.box.y));
  let maxRight = Math.max(...lineBoxes.map((b) => b.box.x + b.box.width));
  let maxBottom = Math.max(...lineBoxes.map((b) => b.box.y + b.box.height));
  let mergedBox = { x: minX, y: minY, width: maxRight - minX, height: maxBottom - minY };
  let commonHeight = maxBottom - minY;
  let gap = Math.max(1, Math.round(commonHeight * 0.4));
  let widths = lineBoxes.map(({ box }) => Math.max(1, Math.round(box.width * Math.min(commonHeight / box.height, MAX_BOX_STRETCH))));
  let totalWidth = widths.reduce((sum, w) => sum + w, 0) + gap * (lineBoxes.length - 1);
  if (totalWidth > MAX_MERGED_WIDTH) {
    let shrink = MAX_MERGED_WIDTH / totalWidth;
    widths = widths.map((w) => Math.max(1, Math.round(w * shrink)));
    gap = Math.max(1, Math.floor(gap * shrink));
  }
  let commonWidth = widths.reduce((sum, w) => sum + w, 0) + gap * (lineBoxes.length - 1);
  let mergedCanvas = createCanvas(commonWidth, commonHeight);
  let ctx = mergedCanvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, commonWidth, commonHeight);
  let offsetX = 0;
  let cropWidths = [];
  for (let i = 0; i < lineBoxes.length; i++) {
    let entry = lineBoxes[i];
    let stretchedWidth = widths[i];
    if (!entry || stretchedWidth === void 0) continue;
    const { box } = entry;
    let cropped = canvasOps.getToolkit().crop({ bbox: { x0: box.x, y0: box.y, x1: box.x + box.width, y1: box.y + box.height }, canvas: sourceCanvas });
    ctx.drawImage(cropped, 0, 0, box.width, box.height, offsetX, 0, stretchedWidth, commonHeight);
    let trailingGap = i < lineBoxes.length - 1 ? gap : 0;
    cropWidths.push(stretchedWidth + trailingGap);
    offsetX += stretchedWidth + trailingGap;
  }
  return { mergedCanvas, mergedBox, cropWidths };
}
function splitTextByPositions(text, positions, segmentWidths) {
  let chars = [...text];
  if (positions.length !== chars.length || segmentWidths.length === 0) {
    return splitBatchTextByWidths(text, segmentWidths);
  }
  let totalWidth = segmentWidths.reduce((a, b) => a + b, 0);
  let result = segmentWidths.map(() => "");
  let seg = 0;
  let segEnd = (segmentWidths[0] ?? 0) / totalWidth;
  for (let i = 0; i < chars.length; i++) {
    let pos = positions[i] ?? 0;
    while (pos >= segEnd && seg < segmentWidths.length - 1) {
      seg++;
      segEnd += (segmentWidths[seg] ?? 0) / totalWidth;
    }
    result[seg] += chars[i] ?? "";
  }
  return result;
}
function splitBatchTextByWidths(text, cropWidths) {
  if (cropWidths.length === 1) {
    return [text];
  }
  let totalWidth = cropWidths.reduce((a, b) => a + b, 0);
  let chars = [...text];
  let charWidth = chars.length > 0 ? totalWidth / chars.length : 0;
  let result = [];
  let charIdx = 0;
  for (let i = 0; i < cropWidths.length; i++) {
    if (i === cropWidths.length - 1) {
      result.push(chars.slice(charIdx).join(""));
      break;
    }
    let ideal = Math.min(charIdx + Math.round((cropWidths[i] ?? 0) / charWidth), chars.length);
    let cut = ideal;
    let skipSpace = false;
    for (let d = 0; d <= CUT_SNAP_RANGE && !skipSpace; d++) {
      for (let cand of [ideal - d, ideal + d]) {
        let ch = chars[cand];
        if (cand > charIdx && cand < chars.length && ch !== void 0 && /\s/.test(ch)) {
          cut = cand;
          skipSpace = true;
          break;
        }
      }
    }
    result.push(chars.slice(charIdx, cut).join(""));
    charIdx = skipSpace ? cut + 1 : cut;
  }
  return result;
}
function packIntoBatches(items, widthOf, targetWidth, separatorGap) {
  let sorted = [...items].sort((a, b) => widthOf(b) - widthOf(a));
  let batches = [];
  let widths = [];
  for (let item of sorted) {
    let placed = false;
    for (let b = 0; b < batches.length; b++) {
      let batch = batches[b];
      let width = widths[b];
      if (batch === void 0 || width === void 0) continue;
      let gap = separatorGap * batch.length;
      if (width + gap + widthOf(item) <= targetWidth) {
        batch.push(item);
        widths[b] = width + widthOf(item);
        placed = true;
        break;
      }
    }
    if (!placed) {
      batches.push([item]);
      widths.push(widthOf(item));
    }
  }
  return batches;
}
var MAX_BOX_STRETCH, MAX_MERGED_WIDTH, CUT_SNAP_RANGE;
var init_line_grouping = __esm({
  "node_modules/ppu-paddle-ocr/core/recognition/line-grouping.js"() {
    MAX_BOX_STRETCH = 4;
    MAX_MERGED_WIDTH = 16384;
    CUT_SNAP_RANGE = 4;
  }
});

// node_modules/ppu-paddle-ocr/core/image-cache.js
var ImageCache, globalImageCache;
var init_image_cache = __esm({
  "node_modules/ppu-paddle-ocr/core/image-cache.js"() {
    ImageCache = class {
      cache = /* @__PURE__ */ new Map();
      maxSize;
      constructor(maxSize = 10) {
        this.maxSize = maxSize;
      }
      get(key) {
        let value = this.cache.get(key);
        if (value !== void 0) {
          this.cache.delete(key);
          this.cache.set(key, value);
          return value;
        }
        return;
      }
      set(key, value) {
        if (this.cache.has(key)) {
          this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
          let firstKey = this.cache.keys().next().value;
          if (firstKey !== void 0) {
            this.cache.delete(firstKey);
          }
        }
        this.cache.set(key, value);
      }
      clear() {
        this.cache.clear();
      }
      static generateKey(imageBuffer) {
        let view = new Uint8Array(imageBuffer);
        let len = Math.min(view.length, 1024);
        let hash = 0;
        for (let i = 0; i < len; i++) {
          hash = (hash << 5) - hash + view[i];
          hash = hash & hash;
        }
        return `${hash}_${view.length}`;
      }
    };
    globalImageCache = new ImageCache();
  }
});

// node_modules/ppu-paddle-ocr/core/base-paddle-ocr.service.js
var BasePaddleOcrService;
var init_base_paddle_ocr_service = __esm({
  "node_modules/ppu-paddle-ocr/core/base-paddle-ocr.service.js"() {
    init_constants();
    init_utils();
    init_base_detection_service();
    init_batch();
    init_crop_boxes();
    init_line_grouping();
    init_image_cache();
    BasePaddleOcrService = class {
      options = DEFAULT_PADDLE_OPTIONS;
      detectionSession = null;
      recognitionSession = null;
      detector = null;
      recognitor = null;
      platform;
      constructor(platform, options) {
        this.platform = platform;
        this.options = deepMerge({}, DEFAULT_PADDLE_OPTIONS, options);
        this.options.session = this.options.session || DEFAULT_PADDLE_OPTIONS.session;
      }
      log(message) {
        if (this.options.debugging?.verbose) {
          console.log(`[PaddleOcrService:Base] ${message}`);
        }
      }
      async recognize(image, options) {
        if (!this.detector || !this.recognitor) {
          await this.initSessions();
        }
        try {
          let imageBuffer;
          if (typeof image === "string") {
            if (!image.startsWith("http") && !image.startsWith("/")) {
              throw new Error("Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas");
            }
            imageBuffer = await this.platform.loadResource(image, image);
          } else if (image instanceof ArrayBuffer) {
            imageBuffer = image;
          } else {
            if (typeof image.toBuffer === "function") {
              let canvasWithBuffer = image;
              let buffer = canvasWithBuffer.toBuffer("image/png");
              imageBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
            } else {
              let canvasWithCtx = image;
              let ctx = canvasWithCtx.getContext("2d", { willReadFrequently: true });
              let imageData = ctx.getImageData(0, 0, canvasWithCtx.width, canvasWithCtx.height);
              let data = imageData.data;
              imageBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
            }
          }
          let cacheKey = ImageCache.generateKey(imageBuffer);
          if (!options?.noCache && !options?.dictionary) {
            let cacheResult = globalImageCache.get(cacheKey);
            if (cacheResult) {
              this.log("Using cached OCR result");
              if (options?.flatten) {
                return { text: cacheResult.text, results: cacheResult.lines ? cacheResult.lines.flat() : cacheResult.results ?? [], confidence: cacheResult.confidence };
              }
              return cacheResult;
            }
          }
          let boxes = [];
          let canvas = typeof image === "string" || image instanceof ArrayBuffer ? await this.platform.canvas.prepareCanvas(imageBuffer) : image;
          boxes = await this.detector.run(canvas);
          if (boxes.length === 0) {
            return options?.flatten ? { text: "", results: [], confidence: 0 } : { text: "", lines: [], confidence: 0 };
          }
          let dict = this.options.recognition?.charactersDictionary;
          if (options?.dictionary) {
            let dictionaryContent = "";
            if (typeof options.dictionary === "string") {
              let dictBuffer = await this.platform.loadResource(options.dictionary, options.dictionary);
              dictionaryContent = new TextDecoder("utf-8").decode(dictBuffer);
            } else {
              dictionaryContent = new TextDecoder("utf-8").decode(options.dictionary);
            }
            dict = parseDictionary(dictionaryContent);
          }
          let strategy = options?.strategy ?? this.options.recognition?.strategy ?? "per-line";
          let results = await this.recognitor.run(canvas, boxes, dict, strategy);
          let groupedResult = groupResultsByLine(results);
          let finalResult = options?.flatten ? flattenResults(results) : groupedResult;
          if (!options?.noCache && !options?.dictionary) {
            globalImageCache.set(cacheKey, finalResult);
          }
          return finalResult;
        } catch (e) {
          let err = e instanceof Error ? e : new Error(String(e));
          console.error("recognize: error", err.message, err.stack);
          throw e;
        }
      }
      async detect(image, options) {
        if (!this.detector) {
          await this.initSessions();
        }
        const { crop, saveCropsTo, ...tuning } = options ?? {};
        let detector = Object.keys(tuning).length > 0 ? new BaseDetectionService(this.platform, this.detectionSession, { ...this.options.detection, ...tuning }, this.options.debugging, this.options.processing?.engine ?? DEFAULT_PROCESSING_ENGINE) : this.detector;
        let canvas;
        if (typeof image === "string") {
          if (!image.startsWith("http") && !image.startsWith("/")) {
            throw new Error("Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas");
          }
          canvas = await this.platform.canvas.prepareCanvas(await this.platform.loadResource(image, image));
        } else if (image instanceof ArrayBuffer) {
          canvas = await this.platform.canvas.prepareCanvas(image);
        } else {
          canvas = image;
        }
        let boxes = (await detector.run(canvas)).filter((box) => box.width > 0 && box.height > 0);
        if (!crop && !saveCropsTo) {
          return { boxes };
        }
        let crops = await cropDetectedBoxes(this.platform, canvas, boxes, { crop, saveCropsTo });
        return crop ? { boxes, crops } : { boxes };
      }
      async batchRecognize(images, options) {
        let settle = options?.settle ?? false;
        let collected = [];
        await runPool(images, { concurrency: this.resolveConcurrency(options?.concurrency), settle, signal: options?.signal, onProgress: options?.onProgress, total: Array.isArray(images) ? images.length : void 0 }, (image) => this.recognize(image, options), (result) => {
          collected[result.index] = result;
        });
        if (settle) return collected;
        return collected.map((item) => item.status === "fulfilled" ? item.value : void 0);
      }
      async *batchRecognizeStream(images, options) {
        let queue = createAsyncQueue();
        let pump = (async () => {
          try {
            await runPool(images, { concurrency: this.resolveConcurrency(options?.concurrency), settle: options?.settle ?? false, signal: options?.signal, onProgress: options?.onProgress, total: Array.isArray(images) ? images.length : void 0 }, (image) => this.recognize(image, options), (result) => queue.push(result));
            queue.close();
          } catch (error) {
            queue.fail(error);
          }
        })();
        yield* queue.drain();
        await pump;
      }
      resolveConcurrency(value) {
        if (typeof value === "number" && value > 0) return Math.floor(value);
        let providers = this.options.session?.executionProviders ?? [];
        let usesAccelerator = providers.some((provider) => {
          let name = (typeof provider === "string" ? provider : provider.name).toLowerCase();
          return name !== "cpu" && name !== "wasm";
        });
        return usesAccelerator ? 1 : 4;
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/core/session-factory.js
function providerName(provider) {
  return typeof provider === "string" ? provider : provider.name;
}
async function createSessionWithFallback(ort, modelData, sessionOpts, logger, onFallback) {
  let opts = sessionOpts ?? {};
  try {
    return await ort.InferenceSession.create(modelData, opts);
  } catch (err) {
    let providers = opts.executionProviders ?? [];
    let names = providers.map(providerName);
    let alreadySafe = names.every((n) => ALWAYS_AVAILABLE_FALLBACKS.has(n));
    if (alreadySafe || names.length === 0) {
      throw err;
    }
    let fallback = names.find((n) => ALWAYS_AVAILABLE_FALLBACKS.has(n));
    let fallbackName = fallback ?? (names.includes("wasm") ? "wasm" : "cpu");
    let msg = err instanceof Error ? err.message : String(err);
    logger(`executionProviders=${JSON.stringify(names)} failed (${msg}); falling back to ["${fallbackName}"].`);
    let fallbackOpts = { ...opts, executionProviders: [fallbackName] };
    onFallback?.(fallbackOpts);
    return ort.InferenceSession.create(modelData, fallbackOpts);
  }
}
var ALWAYS_AVAILABLE_FALLBACKS;
var init_session_factory = __esm({
  "node_modules/ppu-paddle-ocr/core/session-factory.js"() {
    ALWAYS_AVAILABLE_FALLBACKS = /* @__PURE__ */ new Set(["cpu", "wasm"]);
  }
});

// node_modules/ppu-ocv/canvas-factory.js
function setPlatform(platform) {
  _platform = platform;
}
function getPlatform() {
  if (!_platform) {
    throw new Error('No canvas platform registered. Import "ppu-ocv" (Node), "ppu-ocv/web" (browser), "ppu-ocv/canvas" (Node canvas-only), "ppu-ocv/canvas-web" (browser canvas-only), or "ppu-ocv/canvas-mobile" (React Native / Skia) to auto-register.');
  }
  return _platform;
}
function isCanvasLike(value) {
  return typeof value === "object" && value !== null && typeof value.getContext === "function" && typeof value.width === "number" && typeof value.height === "number";
}
var _platform;
var init_canvas_factory = __esm({
  "node_modules/ppu-ocv/canvas-factory.js"() {
    _platform = null;
  }
});

// node_modules/ppu-ocv/platform/web.js
var webPlatform;
var init_web = __esm({
  "node_modules/ppu-ocv/platform/web.js"() {
    webPlatform = { createCanvas(width, height) {
      if (typeof OffscreenCanvas !== "undefined") {
        return new OffscreenCanvas(width, height);
      }
      if (typeof document !== "undefined") {
        let c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        return c;
      }
      throw new Error("No canvas implementation available in this environment.");
    }, async loadImage(source) {
      let blob;
      if (source instanceof ArrayBuffer) {
        blob = new Blob([source]);
      } else if (typeof source === "string") {
        let res = await fetch(source);
        blob = await res.blob();
      } else {
        throw new Error("loadImage: unsupported source type");
      }
      let bitmap = await createImageBitmap(blob);
      let canvas = webPlatform.createCanvas(bitmap.width, bitmap.height);
      let ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0);
      bitmap.close();
      return canvas;
    }, isCanvas(value) {
      if (typeof HTMLCanvasElement !== "undefined" && value instanceof HTMLCanvasElement) {
        return true;
      }
      if (typeof OffscreenCanvas !== "undefined" && value instanceof OffscreenCanvas) {
        return true;
      }
      return false;
    } };
  }
});

// node_modules/ppu-ocv/canvas-toolkit.base.js
var CanvasToolkitBase;
var init_canvas_toolkit_base = __esm({
  "node_modules/ppu-ocv/canvas-toolkit.base.js"() {
    init_canvas_factory();
    CanvasToolkitBase = class _CanvasToolkitBase {
      static _baseInstance = null;
      step = 0;
      constructor() {
      }
      static getInstance() {
        if (!_CanvasToolkitBase._baseInstance) {
          _CanvasToolkitBase._baseInstance = new _CanvasToolkitBase();
        }
        return _CanvasToolkitBase._baseInstance;
      }
      crop(options) {
        const { bbox, canvas } = options;
        let croppedCanvas = getPlatform().createCanvas(bbox.x1 - bbox.x0, bbox.y1 - bbox.y0);
        let croppedCtx = croppedCanvas.getContext("2d");
        croppedCtx.drawImage(canvas, bbox.x0, bbox.y0, bbox.x1 - bbox.x0, bbox.y1 - bbox.y0, 0, 0, croppedCanvas.width, croppedCanvas.height);
        return croppedCanvas;
      }
      isDirty(options) {
        const { canvas, threshold = 127.5, majorColorThreshold = 0.97 } = options;
        let whiteCount = 0;
        let blackCount = 0;
        let borderlessCanvas = this.crop({ bbox: { x0: canvas.width * 0.1, y0: canvas.height * 0.1, x1: canvas.width * 0.9, y1: canvas.height * 0.9 }, canvas });
        let ctx = borderlessCanvas.getContext("2d");
        let colorData = ctx.getImageData(0, 0, borderlessCanvas.width, borderlessCanvas.height).data;
        for (let i = 0; i < colorData.length; i += 4) {
          let red = colorData[i];
          let green = colorData[i + 1];
          let blue = colorData[i + 2];
          if (red >= threshold && green >= threshold && blue >= threshold) {
            whiteCount++;
          } else {
            blackCount++;
          }
        }
        let majorColorRatio = Math.max(whiteCount, blackCount) / (blackCount + whiteCount);
        return majorColorRatio < majorColorThreshold;
      }
      drawLine(options) {
        const { ctx, x: x2, y, width, height, lineWidth = 2, color = "blue" } = options;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(x2, y, width, height);
        ctx.closePath();
      }
      drawContour(options) {
        const { ctx, contour, strokeStyle = "red", lineWidth = 2 } = options;
        let pts = contour.data32S;
        if (pts.length < 4) return;
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(pts[0] ?? 0, pts[1] ?? 0);
        for (let i = 2; i < pts.length; i += 2) {
          ctx.lineTo(pts[i] ?? 0, pts[i + 1] ?? 0);
        }
        ctx.closePath();
        ctx.stroke();
      }
    };
  }
});

// node_modules/ppu-ocv/canvas-io.js
async function bufferToCanvas(file) {
  if (isCanvasLike(file)) return file;
  return getPlatform().loadImage(file);
}
async function canvasToBuffer(canvas) {
  if (canvas instanceof ArrayBuffer) return canvas;
  if (typeof canvas.toBuffer === "function") {
    let buffer = canvas.toBuffer("image/png");
    let arrayBuffer = new ArrayBuffer(buffer.byteLength);
    new Uint8Array(arrayBuffer).set(new Uint8Array(buffer));
    return arrayBuffer;
  }
  let toBlob = canvas.toBlob;
  if (typeof toBlob === "function") {
    let blob = await new Promise((resolve, reject) => {
      toBlob.call(canvas, (b) => b ? resolve(b) : reject(new Error("toBlob returned null")), "image/png");
    });
    return blob.arrayBuffer();
  }
  if (typeof canvas.convertToBlob === "function") {
    let blob = await canvas.convertToBlob({ type: "image/png" });
    return blob.arrayBuffer();
  }
  if (typeof canvas.toDataURL === "function") {
    let dataURL = canvas.toDataURL("image/png");
    let base64Data = dataURL.replace(/^data:image\/png;base64,/, "");
    let binaryString = atob(base64Data);
    let arrayBuffer = new ArrayBuffer(binaryString.length);
    let bytes = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return arrayBuffer;
  }
  let ctx = canvas.getContext("2d");
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let canvasBuffer = new ArrayBuffer(imageData.data.byteLength);
  new Uint8Array(canvasBuffer).set(new Uint8Array(imageData.data.buffer, imageData.data.byteOffset, imageData.data.byteLength));
  return canvasBuffer;
}
var init_canvas_io = __esm({
  "node_modules/ppu-ocv/canvas-io.js"() {
    init_canvas_factory();
  }
});

// node_modules/ppu-ocv/canvas-regions.js
function detectRegions(data, width, height, options = {}) {
  const { foreground = "light", thresh = 127, minArea = 1, maxArea = 1 / 0, padding, scale = 1 } = options;
  let visited = new Uint8Array(width * height);
  let regions = [];
  let neighbours = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
  let isForeground = (pixelIdx) => {
    let r = data[pixelIdx] ?? 0;
    return foreground === "light" ? r > thresh : r <= thresh;
  };
  for (let startY = 0; startY < height; startY++) {
    for (let startX = 0; startX < width; startX++) {
      let startFlat = startY * width + startX;
      if (visited[startFlat]) continue;
      visited[startFlat] = 1;
      if (!isForeground(startFlat * 4)) continue;
      let stack = [startFlat];
      let minX = startX, maxX = startX;
      let minY = startY, maxY = startY;
      let area = 0;
      while (stack.length > 0) {
        let flat = stack.pop();
        if (flat === void 0) break;
        area++;
        let x2 = flat % width;
        let y = (flat - x2) / width;
        if (x2 < minX) minX = x2;
        else if (x2 > maxX) maxX = x2;
        if (y < minY) minY = y;
        else if (y > maxY) maxY = y;
        for (const [dx, dy] of neighbours) {
          let nx = x2 + dx;
          let ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          let nFlat = ny * width + nx;
          if (visited[nFlat]) continue;
          visited[nFlat] = 1;
          if (isForeground(nFlat * 4)) stack.push(nFlat);
        }
      }
      if (area >= minArea && area <= maxArea) {
        let x0 = minX;
        let y0 = minY;
        let x1 = maxX + 1;
        let y1 = maxY + 1;
        if (padding) {
          let bboxH = y1 - y0;
          let vPad = Math.round(bboxH * (padding.vertical ?? 0));
          let hPad = Math.round(bboxH * (padding.horizontal ?? 0));
          x0 = Math.max(0, x0 - hPad);
          y0 = Math.max(0, y0 - vPad);
          x1 = Math.min(width, x1 + hPad);
          y1 = Math.min(height, y1 + vPad);
        }
        if (scale !== 1) {
          x0 = Math.max(0, Math.round(x0 * scale));
          y0 = Math.max(0, Math.round(y0 * scale));
          x1 = Math.round(x1 * scale);
          y1 = Math.round(y1 * scale);
        }
        regions.push({ bbox: { x0, y0, x1, y1 }, area });
      }
    }
  }
  return regions;
}
var init_canvas_regions = __esm({
  "node_modules/ppu-ocv/canvas-regions.js"() {
  }
});

// node_modules/ppu-ocv/canvas-processor.js
var CanvasProcessor;
var init_canvas_processor = __esm({
  "node_modules/ppu-ocv/canvas-processor.js"() {
    init_canvas_factory();
    init_canvas_io();
    init_canvas_regions();
    CanvasProcessor = class {
      _canvas;
      constructor(source) {
        this._canvas = source;
      }
      get width() {
        return this._canvas.width;
      }
      get height() {
        return this._canvas.height;
      }
      resize(options) {
        const { width, height } = options;
        let dst = getPlatform().createCanvas(width, height);
        dst.getContext("2d").drawImage(this._canvas, 0, 0, width, height);
        this._canvas = dst;
        return this;
      }
      grayscale() {
        const { width, height } = this._canvas;
        let imageData = this._canvas.getContext("2d").getImageData(0, 0, width, height);
        let d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          let luma = Math.round(0.299 * (d[i] ?? 0) + 0.587 * (d[i + 1] ?? 0) + 0.114 * (d[i + 2] ?? 0));
          d[i] = luma;
          d[i + 1] = luma;
          d[i + 2] = luma;
        }
        let dst = getPlatform().createCanvas(width, height);
        dst.getContext("2d").putImageData(imageData, 0, 0);
        this._canvas = dst;
        return this;
      }
      convert(options = {}) {
        const { alpha = 1, beta = 0 } = options;
        if (alpha === 1 && beta === 0) return this;
        const { width, height } = this._canvas;
        let imageData = this._canvas.getContext("2d").getImageData(0, 0, width, height);
        let d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          d[i] = Math.round((d[i] ?? 0) * alpha + beta);
          d[i + 1] = Math.round((d[i + 1] ?? 0) * alpha + beta);
          d[i + 2] = Math.round((d[i + 2] ?? 0) * alpha + beta);
        }
        let dst = getPlatform().createCanvas(width, height);
        dst.getContext("2d").putImageData(imageData, 0, 0);
        this._canvas = dst;
        return this;
      }
      invert() {
        const { width, height } = this._canvas;
        let imageData = this._canvas.getContext("2d").getImageData(0, 0, width, height);
        let d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          d[i] = 255 - (d[i] ?? 0);
          d[i + 1] = 255 - (d[i + 1] ?? 0);
          d[i + 2] = 255 - (d[i + 2] ?? 0);
        }
        let dst = getPlatform().createCanvas(width, height);
        dst.getContext("2d").putImageData(imageData, 0, 0);
        this._canvas = dst;
        return this;
      }
      threshold(options = {}) {
        const { thresh = 127, maxValue = 255 } = options;
        const { width, height } = this._canvas;
        let imageData = this._canvas.getContext("2d").getImageData(0, 0, width, height);
        let d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          let luma = d[i] === d[i + 1] && d[i + 1] === d[i + 2] ? d[i] ?? 0 : Math.round(0.299 * (d[i] ?? 0) + 0.587 * (d[i + 1] ?? 0) + 0.114 * (d[i + 2] ?? 0));
          let val = luma > thresh ? maxValue : 0;
          d[i] = val;
          d[i + 1] = val;
          d[i + 2] = val;
        }
        let dst = getPlatform().createCanvas(width, height);
        dst.getContext("2d").putImageData(imageData, 0, 0);
        this._canvas = dst;
        return this;
      }
      border(options = {}) {
        const { size = 10, color = "white" } = options;
        const { width, height } = this._canvas;
        let dst = getPlatform().createCanvas(width + size * 2, height + size * 2);
        let ctx = dst.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, dst.width, dst.height);
        ctx.drawImage(this._canvas, size, size);
        this._canvas = dst;
        return this;
      }
      rotate(options) {
        const { angle, cx = this._canvas.width / 2, cy = this._canvas.height / 2 } = options;
        if (angle === 0) return this;
        const { width, height } = this._canvas;
        let dst = getPlatform().createCanvas(width, height);
        let ctx = dst.getContext("2d");
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-angle * Math.PI / 180);
        ctx.drawImage(this._canvas, -cx, -cy);
        ctx.restore();
        this._canvas = dst;
        return this;
      }
      findRegions(options = {}) {
        const { width, height } = this._canvas;
        let data = this._canvas.getContext("2d").getImageData(0, 0, width, height).data;
        return detectRegions(data, width, height, options);
      }
      toCanvas() {
        return this._canvas;
      }
      static async prepareCanvas(file) {
        return bufferToCanvas(file);
      }
      static async prepareBuffer(canvas) {
        return canvasToBuffer(canvas);
      }
    };
  }
});

// node_modules/ppu-ocv/index.canvas-web.js
var init_index_canvas_web = __esm({
  "node_modules/ppu-ocv/index.canvas-web.js"() {
    init_canvas_factory();
    init_web();
    init_canvas_factory();
    init_web();
    init_canvas_toolkit_base();
    init_canvas_processor();
    setPlatform(webPlatform);
  }
});

// node_modules/ppu-paddle-ocr/web/platform.web.js
async function isWebGpuAvailable() {
  if (typeof navigator === "undefined") return false;
  let nav = navigator;
  if (!nav.gpu || typeof nav.gpu.requestAdapter !== "function") return false;
  try {
    let adapter = await nav.gpu.requestAdapter();
    return adapter !== null && adapter !== void 0;
  } catch {
    return false;
  }
}
async function getDefaultWebExecutionProviders() {
  if (await isWebGpuAvailable()) {
    return ["webgpu", "wasm"];
  }
  return ["wasm"];
}
var WebPlatformProvider;
var init_platform_web = __esm({
  "node_modules/ppu-paddle-ocr/web/platform.web.js"() {
    init_ort_wasm_min();
    init_index_canvas_web();
    WebPlatformProvider = class {
      pathSeparator = "/";
      ort = ort_wasm_min_exports;
      createCanvas(_width, _height) {
        let canvas = document.createElement("canvas");
        canvas.width = _width;
        canvas.height = _height;
        canvas.getContext("2d", { willReadFrequently: true });
        return canvas;
      }
      isCanvas(image) {
        return !!(image instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && image instanceof OffscreenCanvas || image && typeof image.getContext === "function");
      }
      async loadResource(source, defaultUrl) {
        if (source instanceof ArrayBuffer) {
          return source;
        }
        let sourceToLoad = typeof source === "string" ? source : defaultUrl;
        let response = await fetch(sourceToLoad);
        if (!response.ok) {
          throw new Error(`Failed to fetch resource from ${sourceToLoad}`);
        }
        return response.arrayBuffer();
      }
      async saveDebugImage(_canvas, _filename, _outputDir) {
        return Promise.resolve();
      }
      canvas = { prepareCanvas: (image) => CanvasProcessor.prepareCanvas(image), createProcessor: (canvas) => new CanvasProcessor(canvas), getToolkit: () => CanvasToolkitBase.getInstance() };
    };
    if (typeof window !== "undefined" && !B.wasm.wasmPaths) {
      B.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.26.0/dist/";
    }
  }
});

// node_modules/ppu-paddle-ocr/web/detection.service.web.js
var DetectionService;
var init_detection_service_web = __esm({
  "node_modules/ppu-paddle-ocr/web/detection.service.web.js"() {
    init_base_detection_service();
    init_platform_web();
    DetectionService = class extends BaseDetectionService {
      constructor(session, options = {}, debugging = {}) {
        super(new WebPlatformProvider(), session, options, debugging, "canvas-native");
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/core/recognition/ctc.js
var ctc_exports = {};
__export(ctc_exports, {
  BLANK_INDEX: () => BLANK_INDEX,
  MIN_CROP_WIDTH: () => MIN_CROP_WIDTH,
  UNK_TOKEN: () => UNK_TOKEN,
  ctcGreedyDecode: () => ctcGreedyDecode,
  decodeResults: () => decodeResults,
  injectGapSpaces: () => injectGapSpaces,
  refineDecodedChars: () => refineDecodedChars
});
function charClass(char) {
  if (new RegExp("\\p{L}", "u").test(char)) return 0;
  if (new RegExp("\\p{N}", "u").test(char)) return 1;
  return 2;
}
function injectGapSpaces(chars, positions) {
  if (chars.length < 4) return;
  let deltas = [];
  for (let i = 1; i < positions.length; i++) {
    deltas.push((positions[i] ?? 0) - (positions[i - 1] ?? 0));
  }
  let sorted = [...deltas].sort((a, b) => a - b);
  let median = sorted[Math.floor(sorted.length / 2)] ?? 0;
  if (median <= 0) return;
  let quantum = sorted.find((d) => d > 0) ?? 0;
  if (quantum <= 0) return;
  for (let i = chars.length - 1; i >= 1; i--) {
    let prev = positions[i - 1] ?? 0;
    let curr = positions[i] ?? 0;
    let k2 = charClass(chars[i] ?? "") === charClass(chars[i - 1] ?? "") ? GAP_QUANTA_SAME_CLASS : GAP_QUANTA_CROSS_CLASS;
    if (curr - prev > median + k2 * quantum && chars[i] !== " " && chars[i - 1] !== " " && chars[i] !== chars[i - 1]) {
      chars.splice(i, 0, " ");
      positions.splice(i, 0, (prev + curr) / 2);
    }
  }
}
function refineDecodedChars(chars, positions) {
  for (let i = chars.length - 1; i >= 1; i--) {
    if (chars[i] === " " && chars[i - 1] === " ") {
      chars.splice(i, 1);
      positions.splice(i, 1);
    }
  }
  if (CJK_PATTERN.test(chars.join(""))) return;
  for (let i = 0; i < chars.length; i++) {
    let code = chars[i]?.codePointAt(0) ?? 0;
    if (code >= 65281 && code <= 65374) {
      chars[i] = String.fromCodePoint(code - FULLWIDTH_OFFSET);
    } else if (code === 12288) {
      chars[i] = " ";
    }
  }
}
function ctcGreedyDecode(logits, sequenceLength, numClasses, charDict) {
  let dictLen = charDict.length;
  let lastDictIndex = dictLen - 1;
  let emitted = [];
  let lastCharIndex = -1;
  let confidenceSum = 0;
  let confidenceCount = 0;
  let positions = [];
  for (let t = 0; t < sequenceLength; t++) {
    let base = t * numClasses;
    let maxProb = logits[base] ?? -1 / 0;
    let maxIndex = 0;
    for (let c = 1; c < numClasses; c++) {
      let prob = logits[base + c] ?? -1 / 0;
      if (prob > maxProb) {
        maxProb = prob;
        maxIndex = c;
      }
    }
    if (maxIndex === BLANK_INDEX || maxIndex === lastCharIndex) {
      lastCharIndex = maxIndex;
      continue;
    }
    if (maxIndex >= 0 && maxIndex < dictLen) {
      let char = charDict[maxIndex] ?? "";
      if (maxIndex === lastDictIndex) {
        if (char !== UNK_TOKEN) {
          emitted.push(" ");
          confidenceSum += maxProb;
          confidenceCount++;
          positions.push((t + 0.5) / sequenceLength);
        }
      } else {
        emitted.push(char);
        confidenceSum += maxProb;
        confidenceCount++;
        positions.push((t + 0.5) / sequenceLength);
      }
    }
    lastCharIndex = maxIndex;
  }
  injectGapSpaces(emitted, positions);
  refineDecodedChars(emitted, positions);
  let confidence = confidenceCount > 0 ? confidenceSum / confidenceCount : 0;
  return { text: emitted.join(""), confidence, positions };
}
function decodeResults(outputTensor, charactersDictionary, numClassesFromShape, verbose = false) {
  let outputData = outputTensor.data;
  let outputShape = outputTensor.dims;
  let sequenceLength = outputShape[1];
  let numClasses = outputShape[2] ?? numClassesFromShape;
  if (!charactersDictionary) {
    return { text: "", confidence: 0, positions: [] };
  }
  let dict = charactersDictionary;
  if (charactersDictionary.length === numClasses - 1) {
    dict = ["", ...charactersDictionary];
  } else if (numClasses !== charactersDictionary.length && verbose) {
    console.warn(`Warning: Model output classes (${numClasses}) does not match dictionary length (${charactersDictionary.length}).
 Consider using our model & dictionary catalogue at https://github.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models.`);
  }
  return ctcGreedyDecode(outputData, sequenceLength, numClasses, dict);
}
var BLANK_INDEX, UNK_TOKEN, MIN_CROP_WIDTH, GAP_QUANTA_CROSS_CLASS, GAP_QUANTA_SAME_CLASS, FULLWIDTH_OFFSET, CJK_PATTERN;
var init_ctc = __esm({
  "node_modules/ppu-paddle-ocr/core/recognition/ctc.js"() {
    BLANK_INDEX = 0;
    UNK_TOKEN = "<unk>";
    MIN_CROP_WIDTH = 8;
    GAP_QUANTA_CROSS_CLASS = 1.5;
    GAP_QUANTA_SAME_CLASS = 2.5;
    FULLWIDTH_OFFSET = 65248;
    CJK_PATTERN = /[\u2E80-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/;
  }
});

// node_modules/ppu-paddle-ocr/core/recognition/image-tensor.js
var image_tensor_exports = {};
__export(image_tensor_exports, {
  createImageTensor: () => createImageTensor,
  createImageTensorFromCanvas: () => createImageTensorFromCanvas,
  preprocessImage: () => preprocessImage
});
async function preprocessImage(cropCanvas, targetHeight, imageProcessor, createCanvasProcessor) {
  let originalWidth = cropCanvas.width;
  let originalHeight = cropCanvas.height;
  if (originalHeight === 0 || originalWidth === 0) {
    throw new Error(`Crop dimensions are zero: ${originalWidth}x${originalHeight}`);
  }
  let aspectRatio = originalWidth / originalHeight;
  let resizedWidth = Math.max(MIN_CROP_WIDTH, Math.round(targetHeight * aspectRatio));
  if (imageProcessor) {
    let imgProcessor = new imageProcessor.ImageProcessor(cropCanvas);
    try {
      imgProcessor.resize({ width: resizedWidth, height: targetHeight });
      let imageTensor2 = createImageTensorFromCanvas(imgProcessor.toCanvas(), resizedWidth, targetHeight);
      return { imageTensor: imageTensor2, tensorWidth: resizedWidth, tensorHeight: targetHeight };
    } finally {
      imgProcessor.destroy();
    }
  }
  let processor = createCanvasProcessor(cropCanvas).resize({ width: resizedWidth, height: targetHeight });
  let imageTensor = createImageTensor(processor, resizedWidth, targetHeight);
  return { imageTensor, tensorWidth: resizedWidth, tensorHeight: targetHeight };
}
function createImageTensor(processor, width, height) {
  let canvas = processor.toCanvas();
  return createImageTensorFromCanvas(canvas, width, height);
}
function createImageTensorFromCanvas(canvas, width, height) {
  let ctx = canvas.getContext("2d");
  let imageData = ctx.getImageData(0, 0, width, height);
  let pixelData = imageData.data;
  let channelSize = height * width;
  let imageTensor = new Float32Array(3 * channelSize);
  let INV_127_5 = 1 / 127.5;
  for (let i = 0, p = 0; i < channelSize; i++, p += 4) {
    imageTensor[i] = (pixelData[p] ?? 0) * INV_127_5 - 1;
  }
  imageTensor.copyWithin(channelSize, 0, channelSize);
  imageTensor.copyWithin(channelSize * 2, 0, channelSize);
  return imageTensor;
}
var init_image_tensor2 = __esm({
  "node_modules/ppu-paddle-ocr/core/recognition/image-tensor.js"() {
    init_ctc();
  }
});

// node_modules/ppu-paddle-ocr/core/recognition/strategies.js
function cropRegion(sourceCanvas, box, canvasOps) {
  return canvasOps.getToolkit().crop({ bbox: { x0: box.x, y0: box.y, x1: box.x + box.width, y1: box.y + box.height }, canvas: sourceCanvas });
}
async function recognizeText(cropCanvas, ctx, charactersDictionary) {
  let targetHeight = ctx.options.imageHeight ?? 48;
  let imageProcessor = ctx.engine === "opencv" ? ctx.platform.imageProcessor : void 0;
  const { imageTensor, tensorWidth, tensorHeight } = await preprocessImage(cropCanvas, targetHeight, imageProcessor, ctx.platform.canvas.createProcessor.bind(ctx.platform.canvas));
  let inputTensor;
  try {
    inputTensor = new ctx.platform.ort.Tensor("float32", imageTensor, [1, 3, tensorHeight, tensorWidth]);
    let result = await ctx.runInference(inputTensor);
    let dict = charactersDictionary ?? ctx.options.charactersDictionary ?? [];
    return decodeResults(result, dict, tensorWidth, ctx.debugging.verbose);
  } finally {
    inputTensor?.dispose();
  }
}
function sortByReadingOrder(results) {
  return [...results].sort((a, b) => {
    if (Math.abs(a.box.y - b.box.y) < (a.box.height + b.box.height) / 4) {
      return a.box.x - b.box.x;
    }
    return a.box.y - b.box.y;
  });
}
async function runPerBoxStrategy(sourceCanvas, validBoxes, ctx, processBox, charactersDictionary) {
  let cropsDebugPath = ctx.debugging.debugFolder ? `${ctx.debugging.debugFolder}${ctx.platform.pathSeparator}crops` : "";
  if (ctx.debugging.debug && cropsDebugPath) {
    let toolkit = ctx.platform.canvas.getToolkit();
    if ("clearOutput" in toolkit && typeof toolkit.clearOutput === "function") {
      toolkit.clearOutput(cropsDebugPath);
    }
  }
  let results = [];
  for (const { box, index } of validBoxes) {
    let result = await processBox(sourceCanvas, box, index, validBoxes.length, cropsDebugPath, charactersDictionary);
    if (result !== null) {
      results.push(result);
    }
  }
  return sortByReadingOrder(results);
}
async function runLineStrategy(sourceCanvas, validBoxes, ctx, charactersDictionary) {
  let lines = groupBoxesIntoLines(validBoxes);
  let results = [];
  for (let lineBoxes of lines) {
    if (lineBoxes.length === 1) {
      let lineBox = lineBoxes[0];
      if (!lineBox) continue;
      const { box } = lineBox;
      let cropCanvas = cropRegion(sourceCanvas, box, ctx.platform.canvas);
      const { text, confidence } = await recognizeText(cropCanvas, ctx, charactersDictionary);
      results.push({ text, box, confidence });
    } else {
      const { mergedCanvas, cropWidths } = mergeLineCrop(sourceCanvas, lineBoxes, ctx.platform.createCanvas.bind(ctx.platform), ctx.platform.canvas);
      const { text: lineText, confidence: lineConf, positions } = await recognizeText(mergedCanvas, ctx, charactersDictionary);
      let pieces = splitTextByPositions(lineText, positions, cropWidths);
      for (let i = 0; i < lineBoxes.length; i++) {
        let lb = lineBoxes[i];
        if (!lb) continue;
        results.push({ text: (pieces[i] ?? "").trim(), box: lb.box, confidence: lineConf });
      }
    }
  }
  return sortByReadingOrder(results);
}
async function runCrossLineStrategy(sourceCanvas, validBoxes, ctx, charactersDictionary) {
  let lines = groupBoxesIntoLines(validBoxes);
  let targetHeight = ctx.options.imageHeight ?? 48;
  let SEPARATOR_GAP = 20;
  let lineCrops = [];
  for (let lineBoxes of lines) {
    if (lineBoxes.length === 1) {
      let first = lineBoxes[0];
      if (!first) continue;
      let canvas = cropRegion(sourceCanvas, first.box, ctx.platform.canvas);
      lineCrops.push({ canvas, boxes: lineBoxes, cropWidths: [canvas.width] });
    } else {
      const { mergedCanvas, cropWidths } = mergeLineCrop(sourceCanvas, lineBoxes, ctx.platform.createCanvas.bind(ctx.platform), ctx.platform.canvas);
      lineCrops.push({ canvas: mergedCanvas, boxes: lineBoxes, cropWidths });
    }
  }
  let resized = lineCrops.map(({ canvas, boxes, cropWidths }, i) => {
    let ar = canvas.width / canvas.height;
    let resizedWidth = Math.max(MIN_CROP_WIDTH, Math.round(targetHeight * ar));
    return { canvas, boxes, cropWidths, resizedWidth, originalHeight: canvas.height, index: i };
  });
  let maxWidth = Math.max(...resized.map((r) => r.resizedWidth));
  let widthFactor = ctx.options.crossLineWidthFactor ?? 1.5;
  let batchTargetWidth = Math.round(maxWidth * widthFactor);
  let batches = packIntoBatches(resized, (item) => item.resizedWidth, batchTargetWidth, SEPARATOR_GAP);
  let results = [];
  for (let batch of batches) {
    let batchSorted = [...batch].sort((a, b) => a.index - b.index);
    let maxOriginalHeight = Math.max(...batchSorted.map((item) => item.originalHeight));
    let stretchedWidths = batchSorted.map((item) => {
      if (item.originalHeight >= maxOriginalHeight) return item.resizedWidth;
      let heightScale = maxOriginalHeight / item.originalHeight;
      return Math.max(MIN_CROP_WIDTH, Math.round(item.resizedWidth * heightScale));
    });
    let totalCropWidth = stretchedWidths.reduce((sum, w) => sum + w, 0);
    let totalWidth = totalCropWidth + SEPARATOR_GAP * (batchSorted.length - 1);
    let batchCanvas = ctx.platform.createCanvas(totalWidth, targetHeight);
    let bctx = batchCanvas.getContext("2d");
    bctx.fillStyle = "white";
    bctx.fillRect(0, 0, totalWidth, targetHeight);
    let offsetX = 0;
    for (let i = 0; i < batchSorted.length; i++) {
      let item = batchSorted[i];
      let drawWidth = stretchedWidths[i];
      if (item === void 0 || drawWidth === void 0) continue;
      bctx.drawImage(item.canvas, 0, 0, item.canvas.width, item.canvas.height, offsetX, 0, drawWidth, targetHeight);
      offsetX += drawWidth;
      if (i < batchSorted.length - 1) offsetX += SEPARATOR_GAP;
    }
    const { text: batchText, confidence: batchConf, positions } = await recognizeText(batchCanvas, ctx, charactersDictionary);
    let flatSegments = [];
    let flatBoxes = [];
    for (let i = 0; i < batchSorted.length; i++) {
      let item = batchSorted[i];
      let drawWidth = stretchedWidths[i];
      if (!item || drawWidth === void 0) continue;
      let scale = drawWidth / item.canvas.width;
      for (let j = 0; j < item.boxes.length; j++) {
        let lb = item.boxes[j];
        if (!lb) continue;
        let w = (item.cropWidths[j] ?? 0) * scale;
        if (j === item.boxes.length - 1 && i < batchSorted.length - 1) w += SEPARATOR_GAP;
        flatSegments.push(w);
        flatBoxes.push(lb);
      }
    }
    let pieces = splitTextByPositions(batchText, positions, flatSegments);
    for (let k2 = 0; k2 < flatBoxes.length; k2++) {
      let lb = flatBoxes[k2];
      if (!lb) continue;
      results.push({ text: (pieces[k2] ?? "").trim(), box: lb.box, confidence: batchConf });
    }
  }
  return sortByReadingOrder(results);
}
var init_strategies = __esm({
  "node_modules/ppu-paddle-ocr/core/recognition/strategies.js"() {
    init_ctc();
    init_ctc();
    init_image_tensor2();
    init_line_grouping();
  }
});

// node_modules/ppu-paddle-ocr/core/base-recognition.service.js
var BaseRecognitionService;
var init_base_recognition_service = __esm({
  "node_modules/ppu-paddle-ocr/core/base-recognition.service.js"() {
    init_constants();
    init_strategies();
    BaseRecognitionService = class {
      options;
      debugging;
      session;
      platform;
      engine;
      constructor(platform, session, options = {}, debugging = {}, engine = "opencv") {
        this.platform = platform;
        this.session = session;
        this.options = { ...DEFAULT_RECOGNITION_OPTIONS, ...options };
        this.debugging = { ...DEFAULT_DEBUGGING_OPTIONS, ...debugging };
        if (engine === "opencv" && !this.platform.imageProcessor) {
          this.engine = "canvas-native";
        } else {
          this.engine = engine;
        }
      }
      log(message) {
        if (this.debugging.verbose) {
          console.log(`[RecognitionService] ${message}`);
        }
      }
      async run(image, detection, charactersDictionary, strategy = "per-line") {
        this.log("Starting text recognition process");
        try {
          let sourceCanvasForCrop;
          if (this.platform.isCanvas(image)) {
            sourceCanvasForCrop = image;
          } else if (this.engine === "opencv" && this.platform.imageProcessor) {
            sourceCanvasForCrop = await this.platform.imageProcessor.prepareCanvas(image);
          } else {
            sourceCanvasForCrop = await this.platform.canvas.prepareCanvas(image);
          }
          let validBoxes = this.filterValidBoxes(detection);
          if (validBoxes.length === 0) {
            return [];
          }
          let ctx = this.buildContext();
          let results;
          switch (strategy) {
            case "cross-line":
              results = await runCrossLineStrategy(sourceCanvasForCrop, validBoxes, ctx, charactersDictionary);
              break;
            case "per-line":
              results = await runLineStrategy(sourceCanvasForCrop, validBoxes, ctx, charactersDictionary);
              break;
            case "per-box":
            default:
              results = await runPerBoxStrategy(sourceCanvasForCrop, validBoxes, ctx, (canvas, box, index, total, debugPath, dict) => this.processBox(canvas, box, index, total, debugPath, dict), charactersDictionary);
          }
          let minimumConfidence = this.options.minimumConfidence ?? 0.5;
          return minimumConfidence > 0 ? results.filter((r) => {
            let bar = /[\p{L}\p{N}]/u.test(r.text) ? minimumConfidence : Math.min(1, minimumConfidence + 0.3);
            return r.confidence >= bar;
          }) : results;
        } catch (error) {
          console.error("Error during text recognition:", error instanceof Error ? error.message : String(error));
          return [];
        }
      }
      buildContext() {
        return { platform: this.platform, options: this.options, debugging: this.debugging, engine: this.engine, runInference: (t) => this.runInference(t) };
      }
      filterValidBoxes(boxes) {
        return boxes.map((box, index) => ({ box, index })).filter(({ box, index }) => this.isValidBox(box, index));
      }
      async processBox(sourceCanvas, box, index, totalBoxes, debugPath, charactersDictionary) {
        let start = Date.now();
        try {
          let cropCanvas = this.platform.canvas.getToolkit().crop({ bbox: { x0: box.x, y0: box.y, x1: box.x + box.width, y1: box.y + box.height }, canvas: sourceCanvas });
          let ctx = this.buildContext();
          const { text: recognizedText, confidence } = await this.recognizeTextViaContext(cropCanvas, ctx, charactersDictionary);
          if (this.debugging.debug && debugPath) {
            await this.platform.saveDebugImage(cropCanvas, `crop_${String(index).padStart(3, "0")}.png`, debugPath);
            let processingTime = Date.now() - start;
            this.log(`Box ${index + 1}/${totalBoxes}: [x:${box.x}, y:${box.y}, w:${box.width}, h:${box.height}]
	 \u2192 "${recognizedText}" (processed in ${processingTime}ms)
`);
          }
          return { text: recognizedText, box, confidence };
        } catch (e) {
          let err = e instanceof Error ? e : new Error(String(e));
          console.error(`Error processing box ${index + 1}: ${err.message}`, err.stack);
          return null;
        }
      }
      async recognizeTextViaContext(cropCanvas, ctx, charactersDictionary) {
        const { preprocessImage: preprocessImage2 } = await Promise.resolve().then(() => (init_image_tensor2(), image_tensor_exports));
        const { decodeResults: decodeResults2 } = await Promise.resolve().then(() => (init_ctc(), ctc_exports));
        let targetHeight = ctx.options.imageHeight ?? 48;
        let imageProcessor = ctx.engine === "opencv" ? ctx.platform.imageProcessor : void 0;
        const { imageTensor, tensorWidth, tensorHeight } = await preprocessImage2(cropCanvas, targetHeight, imageProcessor, ctx.platform.canvas.createProcessor.bind(ctx.platform.canvas));
        let inputTensor;
        try {
          inputTensor = new ctx.platform.ort.Tensor("float32", imageTensor, [1, 3, tensorHeight, tensorWidth]);
          let result = await ctx.runInference(inputTensor);
          let dict = charactersDictionary ?? ctx.options.charactersDictionary ?? [];
          return decodeResults2(result, dict, tensorWidth, this.debugging.verbose);
        } finally {
          inputTensor?.dispose();
        }
      }
      isValidBox(box, index) {
        if (box.width <= 0 || box.height <= 0) {
          console.warn(`Skipping invalid box ${index + 1}: w=${box.width}, h=${box.height}`);
          return false;
        }
        return true;
      }
      async runInference(inputTensor) {
        let feeds = { x: inputTensor };
        let results = await this.session.run(feeds);
        let outputNodeName = Object.keys(results)[0];
        let outputTensor = outputNodeName ? results[outputNodeName] : void 0;
        if (!outputTensor) {
          throw new Error(`Recognition output tensor '${outputNodeName}' not found. Available keys: ${Object.keys(results)}`);
        }
        return outputTensor;
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/web/recognition.service.web.js
var RecognitionService;
var init_recognition_service_web = __esm({
  "node_modules/ppu-paddle-ocr/web/recognition.service.web.js"() {
    init_base_recognition_service();
    init_platform_web();
    RecognitionService = class extends BaseRecognitionService {
      constructor(session, options = {}, debugging = {}) {
        super(new WebPlatformProvider(), session, options, debugging, "canvas-native");
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/web/paddle-ocr.service.web.js
var DEFAULT_WEB_SESSION_OPTIONS, PaddleOcrService;
var init_paddle_ocr_service_web = __esm({
  "node_modules/ppu-paddle-ocr/web/paddle-ocr.service.web.js"() {
    init_ort_wasm_min();
    init_base_paddle_ocr_service();
    init_session_factory();
    init_model_catalogue();
    init_utils();
    init_detection_service_web();
    init_platform_web();
    init_recognition_service_web();
    DEFAULT_WEB_SESSION_OPTIONS = { graphOptimizationLevel: "all" };
    PaddleOcrService = class extends BasePaddleOcrService {
      constructor(options) {
        super(new WebPlatformProvider(), options);
        if (this.options.session === void 0 || Object.keys(this.options.session).length === 0) {
          this.options.session = DEFAULT_WEB_SESSION_OPTIONS;
        }
      }
      async initSessions() {
        throw new Error("Initialization is handled proactively in PaddleOcrService. Call initialize() instead.");
      }
      async _loadResource(source, defaultUrl) {
        if (source instanceof ArrayBuffer) {
          this.log("Loading resource from ArrayBuffer");
          return source;
        }
        let sourceUrl = typeof source === "string" ? source : defaultUrl;
        this.log(`Fetching resource from URL: ${sourceUrl}`);
        return fetchArrayBufferWithRetry(sourceUrl);
      }
      async _resolveSessionExecutionProviders() {
        let current = this.options.session ?? {};
        if (current.executionProviders && current.executionProviders.length > 0) {
          this.log(`Using user-provided executionProviders: ${JSON.stringify(current.executionProviders)}`);
          return;
        }
        let providers = await getDefaultWebExecutionProviders();
        this.options.session = { ...current, executionProviders: providers };
        this.log(`Resolved executionProviders: ${JSON.stringify(providers)}`);
      }
      async _createSession(modelData) {
        return createSessionWithFallback(ort_wasm_min_exports, modelData, this.options.session, (msg) => console.warn(`[PaddleOcrService] ${msg}`), (next) => this.options.session = next);
      }
      async initialize() {
        try {
          this.log("Initializing PaddleOcrService (Web)...");
          await this._resolveSessionExecutionProviders();
          const [detModelBuffer, recModelBuffer, dictBuffer] = await Promise.all([this._loadResource(this.options.model?.detection, DEFAULT_MODEL_URLS.detection), this._loadResource(this.options.model?.recognition, DEFAULT_MODEL_URLS.recognition), this._loadResource(this.options.model?.charactersDictionary, DEFAULT_MODEL_URLS.charactersDictionary)]);
          const [detectionSession, recognitionSession] = await Promise.all([this._createSession(new Uint8Array(detModelBuffer)), this._createSession(new Uint8Array(recModelBuffer))]);
          this.detectionSession = detectionSession;
          this.recognitionSession = recognitionSession;
          if (this.options.model) this.options.model.detection = detModelBuffer;
          if (this.options.model) this.options.model.recognition = recModelBuffer;
          this.log(`Detection ONNX model loaded successfully
	input: ${detectionSession.inputNames}
	output: ${detectionSession.outputNames}`);
          this.log(`Recognition ONNX model loaded successfully
	input: ${recognitionSession.inputNames}
	output: ${recognitionSession.outputNames}`);
          let charactersDictionary = parseDictionary(dictBuffer);
          if (charactersDictionary.length === 0) {
            throw new Error("Character dictionary is empty or could not be loaded.");
          }
          if (this.options.model) this.options.model.charactersDictionary = dictBuffer;
          if (this.options.recognition) this.options.recognition.charactersDictionary = charactersDictionary;
          this.log(`Character dictionary loaded with ${charactersDictionary.length} entries.`);
          this.detector = new DetectionService(detectionSession, this.options.detection, this.options.debugging);
          this.recognitor = new RecognitionService(recognitionSession, this.options.recognition, this.options.debugging);
          if (this.options.model) this.options.model.detection = void 0;
          if (this.options.model) this.options.model.recognition = void 0;
        } catch (error) {
          console.error("Failed to initialize PaddleOcrService Web:", error);
          throw error;
        }
      }
      isInitialized() {
        return this.detectionSession !== null && this.recognitionSession !== null;
      }
      async changeDetectionModel(model) {
        this.log("Changing detection model...");
        let modelBuffer = await this._loadResource(model, DEFAULT_MODEL_URLS.detection);
        await this.detectionSession?.release();
        this.detectionSession = await this._createSession(new Uint8Array(modelBuffer));
        this.detector = new DetectionService(this.detectionSession, this.options.detection, this.options.debugging);
        if (this.options.model) this.options.model.detection = modelBuffer;
        this.log("Detection model changed successfully.");
      }
      async changeRecognitionModel(model) {
        this.log("Changing recognition model...");
        let modelBuffer = await this._loadResource(model, DEFAULT_MODEL_URLS.recognition);
        await this.recognitionSession?.release();
        this.recognitionSession = await this._createSession(new Uint8Array(modelBuffer));
        this.recognitor = new RecognitionService(this.recognitionSession, this.options.recognition, this.options.debugging);
        if (this.options.model) this.options.model.recognition = modelBuffer;
        this.log("Recognition model changed successfully.");
      }
      async changeTextDictionary(dictionary) {
        this.log("Changing text dictionary...");
        let dictBuffer = await this._loadResource(dictionary, DEFAULT_MODEL_URLS.charactersDictionary);
        let charactersDictionary = parseDictionary(dictBuffer);
        if (charactersDictionary.length === 0) {
          throw new Error("Character dictionary is empty or could not be loaded.");
        }
        if (this.options.model) this.options.model.charactersDictionary = dictBuffer;
        if (this.options.recognition) this.options.recognition.charactersDictionary = charactersDictionary;
        this.log(`Character dictionary changed successfully with ${charactersDictionary.length} entries.`);
      }
      async recognize(image, options) {
        return super.recognize(image, options);
      }
      async destroy() {
        await this.detectionSession?.release();
        await this.recognitionSession?.release();
        this.detectionSession = null;
        this.recognitionSession = null;
        this.detector = null;
        this.recognitor = null;
      }
    };
  }
});

// node_modules/ppu-paddle-ocr/web/index.js
var init_web2 = __esm({
  "node_modules/ppu-paddle-ocr/web/index.js"() {
    init_model_catalogue();
    init_paddle_ocr_service_web();
    init_detection_service_web();
    init_recognition_service_web();
    init_platform_web();
    init_constants();
  }
});

// src/offscreen.js
var require_offscreen = __commonJS({
  "src/offscreen.js"() {
    init_web2();
    init_ort_wasm_min();
    B.wasm.numThreads = 1;
    B.wasm.proxy = false;
    B.wasm.wasmPaths = chrome.runtime.getURL("/");
    var ocrService = null;
    var initStatus = "initializing";
    var initError = null;
    async function initOCR() {
      console.log("[OCR Offscreen] Starting initialization...");
      try {
        ocrService = new PaddleOcrService({
          model: {
            detection: chrome.runtime.getURL("models/det.ort"),
            recognition: chrome.runtime.getURL("models/rec.ort"),
            charactersDictionary: chrome.runtime.getURL("models/dict.txt")
          },
          session: {
            executionProviders: ["wasm"]
          }
        });
        console.log("[OCR Offscreen] Calling initialize()...");
        await ocrService.initialize();
        console.log("[OCR Offscreen] Initialized. Running warmup...");
        const warmupCanvas = new OffscreenCanvas(64, 64);
        const wctx = warmupCanvas.getContext("2d");
        wctx.fillStyle = "white";
        wctx.fillRect(0, 0, 64, 64);
        wctx.fillStyle = "black";
        wctx.font = "20px serif";
        wctx.fillText("A", 25, 40);
        await ocrService.recognize(warmupCanvas, { flatten: true }).catch(() => {
        });
        initStatus = "ready";
        console.log("[OCR Offscreen] \u2705 Ready!");
      } catch (err) {
        initStatus = "error";
        initError = err.message;
        console.error("[OCR Offscreen] \u274C Init failed:", err);
      }
    }
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === "GET_STATUS_OFFSCREEN") {
        sendResponse({ status: initStatus, error: initError });
        return false;
      }
      if (message.type === "RUN_OCR") {
        if (initStatus !== "ready") {
          sendResponse({ error: `OCR not ready (${initStatus})` });
          return false;
        }
        runOCR(message.dataUrl).then(sendResponse).catch((err) => {
          sendResponse({ error: err.message });
        });
        return true;
      }
    });
    async function runOCR(dataUrl) {
      console.log("[OCR Offscreen] Running OCR...");
      const t0 = performance.now();
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const bitmap = await createImageBitmap(blob);
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0);
      bitmap.close();
      const result = await ocrService.recognize(canvas, { flatten: true, noCache: true });
      const elapsed = (performance.now() - t0).toFixed(1);
      console.log(`[OCR Offscreen] Done in ${elapsed}ms \u2014 ${result.results?.length || 0} regions`);
      return {
        result,
        elapsed,
        width: canvas.width,
        height: canvas.height
      };
    }
    initOCR();
  }
});
export default require_offscreen();
/*! Bundled license information:

onnxruntime-web/dist/ort.wasm.min.mjs:
  (*!
   * ONNX Runtime Web v1.27.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)
*/
