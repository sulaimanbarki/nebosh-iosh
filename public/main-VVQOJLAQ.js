import {$ as g, $a as Z, $b as sl, A as At, Aa as at, Ab as ee, B as ni, Ba as Ae, Bb as xe, Bc as Ie, C as Er, Ca as wn, Cb as se, Cc as Xe, D as la, Da as Ar, Db as U, Dc as _a, E as fe, Ea as Ai, Eb as H, Ec as lt, F as Nd, Fa as Si, Fb as Ge, Fc as ba, G as vn, Ga as $d, Gb as _, Gc as va, H as St, Ha as Yd, Hb as me, I as kt, Ia as qd, Ib as yt, J as ca, Ja as Wd, Jb as Or, K as Pd, Ka as Gd, Kb as Nr, L as Vd, La as Xd, Lb as Pr, M as Ld, Ma as Zd, Mb as de, N as ua, Na as Be, Nb as L, O as Ir, Oa as Cn, Ob as pa, P as Ce, Pa as f, Pb as En, Q as Ve, Qa as l, Qb as nl, R as ge, Ra as ai, Rb as rl, S as ue, Sa as Ue, Sb as ki, T as re, Ta as Kd, Tb as Vr, U as Me, Ua as Sr, Ub as Lr, V as y, Va as kr, Vb as jr, W as j, Wa as Rr, Wb as di, X as jd, Xa as Tr, Xb as ol, Y as x, Ya as T, Yb as fa, Z as ha, Za as st, Zb as al, _ as p, _a as ma, _b as le, a as v, aa as ri, ab as be, ac as dl, b as ie, ba as Ii, bb as Qd, bc as X, c as Td, ca as yn, cb as Jd, cc as In, d as ce, da as w, db as Fr, dc as ll, e as Fd, ea as P, eb as $, ec as Ri, f as bt, fa as z, fb as Y, fc as cl, g as ra, ga as I, gb as C, gc as ul, h as oa, ha as Rt, hb as Dn, hc as O, i as A, ia as zd, ib as B, ic as hl, j as ze, ja as Mi, jb as We, jc as ml, k as rt, ka as vt, kb as el, kc as Vt, l as Pe, la as he, lb as J, lc as zr, m as E, ma as oe, mb as Ot, mc as pl, n as ti, na as ae, nb as Nt, nc as fl, o as aa, oa as xn, ob as Pt, oc as Mn, p as Od, pa as Bd, pb as h, pc as gl, q as N, qa as De, qb as u, qc as li, r as bn, ra as Tt, rb as D, rc as _l, s as qe, sa as Le, sb as si, sc as bl, t as Cr, ta as oi, tb as Se, tc as An, u as ii, ua as F, ub as Ee, uc as Br, v as Dr, va as M, vb as tl, w as sa, wa as Ft, wb as V, x as ot, xa as Ud, xb as il, xc as Lt, y as pe, ya as Mr, yb as S, yc as dt, z as da, za as Hd, zb as ve, zc as ga} from "./chunk-O2QDAK4C.js";
var kn = class {
}
  , $r = class {
}
  , zt = class i {
    constructor(n) {
        this.normalizedNames = new Map,
        this.lazyUpdate = null,
        n ? typeof n == "string" ? this.lazyInit = () => {
            this.headers = new Map,
            n.split(`
`).forEach(e => {
                let t = e.indexOf(":");
                if (t > 0) {
                    let r = e.slice(0, t)
                      , o = r.toLowerCase()
                      , a = e.slice(t + 1).trim();
                    this.maybeSetNormalizedName(r, o),
                    this.headers.has(o) ? this.headers.get(o).push(a) : this.headers.set(o, [a])
                }
            }
            )
        }
        : typeof Headers < "u" && n instanceof Headers ? (this.headers = new Map,
        n.forEach( (e, t) => {
            this.setHeaderEntries(t, e)
        }
        )) : this.lazyInit = () => {
            this.headers = new Map,
            Object.entries(n).forEach( ([e,t]) => {
                this.setHeaderEntries(e, t)
            }
            )
        }
        : this.headers = new Map
    }
    has(n) {
        return this.init(),
        this.headers.has(n.toLowerCase())
    }
    get(n) {
        this.init();
        let e = this.headers.get(n.toLowerCase());
        return e && e.length > 0 ? e[0] : null
    }
    keys() {
        return this.init(),
        Array.from(this.normalizedNames.values())
    }
    getAll(n) {
        return this.init(),
        this.headers.get(n.toLowerCase()) || null
    }
    append(n, e) {
        return this.clone({
            name: n,
            value: e,
            op: "a"
        })
    }
    set(n, e) {
        return this.clone({
            name: n,
            value: e,
            op: "s"
        })
    }
    delete(n, e) {
        return this.clone({
            name: n,
            value: e,
            op: "d"
        })
    }
    maybeSetNormalizedName(n, e) {
        this.normalizedNames.has(e) || this.normalizedNames.set(e, n)
    }
    init() {
        this.lazyInit && (this.lazyInit instanceof i ? this.copyFrom(this.lazyInit) : this.lazyInit(),
        this.lazyInit = null,
        this.lazyUpdate && (this.lazyUpdate.forEach(n => this.applyUpdate(n)),
        this.lazyUpdate = null))
    }
    copyFrom(n) {
        n.init(),
        Array.from(n.headers.keys()).forEach(e => {
            this.headers.set(e, n.headers.get(e)),
            this.normalizedNames.set(e, n.normalizedNames.get(e))
        }
        )
    }
    clone(n) {
        let e = new i;
        return e.lazyInit = this.lazyInit && this.lazyInit instanceof i ? this.lazyInit : this,
        e.lazyUpdate = (this.lazyUpdate || []).concat([n]),
        e
    }
    applyUpdate(n) {
        let e = n.name.toLowerCase();
        switch (n.op) {
        case "a":
        case "s":
            let t = n.value;
            if (typeof t == "string" && (t = [t]),
            t.length === 0)
                return;
            this.maybeSetNormalizedName(n.name, e);
            let r = (n.op === "a" ? this.headers.get(e) : void 0) || [];
            r.push(...t),
            this.headers.set(e, r);
            break;
        case "d":
            let o = n.value;
            if (!o)
                this.headers.delete(e),
                this.normalizedNames.delete(e);
            else {
                let a = this.headers.get(e);
                if (!a)
                    return;
                a = a.filter(s => o.indexOf(s) === -1),
                a.length === 0 ? (this.headers.delete(e),
                this.normalizedNames.delete(e)) : this.headers.set(e, a)
            }
            break
        }
    }
    setHeaderEntries(n, e) {
        let t = (Array.isArray(e) ? e : [e]).map(o => o.toString())
          , r = n.toLowerCase();
        this.headers.set(r, t),
        this.maybeSetNormalizedName(n, r)
    }
    forEach(n) {
        this.init(),
        Array.from(this.normalizedNames.keys()).forEach(e => n(this.normalizedNames.get(e), this.headers.get(e)))
    }
}
;
var xa = class {
    encodeKey(n) {
        return vl(n)
    }
    encodeValue(n) {
        return vl(n)
    }
    decodeKey(n) {
        return decodeURIComponent(n)
    }
    decodeValue(n) {
        return decodeURIComponent(n)
    }
}
;
function tm(i, n) {
    let e = new Map;
    return i.length > 0 && i.replace(/^\?/, "").split("&").forEach(r => {
        let o = r.indexOf("=")
          , [a,s] = o == -1 ? [n.decodeKey(r), ""] : [n.decodeKey(r.slice(0, o)), n.decodeValue(r.slice(o + 1))]
          , d = e.get(a) || [];
        d.push(s),
        e.set(a, d)
    }
    ),
    e
}
var im = /%(\d[a-f0-9])/gi
  , nm = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/"
};
function vl(i) {
    return encodeURIComponent(i).replace(im, (n, e) => nm[e] ?? n)
}
function Ur(i) {
    return `${i}`
}
var jt = class i {
    constructor(n={}) {
        if (this.updates = null,
        this.cloneFrom = null,
        this.encoder = n.encoder || new xa,
        n.fromString) {
            if (n.fromObject)
                throw new Error("Cannot specify both fromString and fromObject.");
            this.map = tm(n.fromString, this.encoder)
        } else
            n.fromObject ? (this.map = new Map,
            Object.keys(n.fromObject).forEach(e => {
                let t = n.fromObject[e]
                  , r = Array.isArray(t) ? t.map(Ur) : [Ur(t)];
                this.map.set(e, r)
            }
            )) : this.map = null
    }
    has(n) {
        return this.init(),
        this.map.has(n)
    }
    get(n) {
        this.init();
        let e = this.map.get(n);
        return e ? e[0] : null
    }
    getAll(n) {
        return this.init(),
        this.map.get(n) || null
    }
    keys() {
        return this.init(),
        Array.from(this.map.keys())
    }
    append(n, e) {
        return this.clone({
            param: n,
            value: e,
            op: "a"
        })
    }
    appendAll(n) {
        let e = [];
        return Object.keys(n).forEach(t => {
            let r = n[t];
            Array.isArray(r) ? r.forEach(o => {
                e.push({
                    param: t,
                    value: o,
                    op: "a"
                })
            }
            ) : e.push({
                param: t,
                value: r,
                op: "a"
            })
        }
        ),
        this.clone(e)
    }
    set(n, e) {
        return this.clone({
            param: n,
            value: e,
            op: "s"
        })
    }
    delete(n, e) {
        return this.clone({
            param: n,
            value: e,
            op: "d"
        })
    }
    toString() {
        return this.init(),
        this.keys().map(n => {
            let e = this.encoder.encodeKey(n);
            return this.map.get(n).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
        }
        ).filter(n => n !== "").join("&")
    }
    clone(n) {
        let e = new i({
            encoder: this.encoder
        });
        return e.cloneFrom = this.cloneFrom || this,
        e.updates = (this.updates || []).concat(n),
        e
    }
    init() {
        this.map === null && (this.map = new Map),
        this.cloneFrom !== null && (this.cloneFrom.init(),
        this.cloneFrom.keys().forEach(n => this.map.set(n, this.cloneFrom.map.get(n))),
        this.updates.forEach(n => {
            switch (n.op) {
            case "a":
            case "s":
                let e = (n.op === "a" ? this.map.get(n.param) : void 0) || [];
                e.push(Ur(n.value)),
                this.map.set(n.param, e);
                break;
            case "d":
                if (n.value !== void 0) {
                    let t = this.map.get(n.param) || []
                      , r = t.indexOf(Ur(n.value));
                    r !== -1 && t.splice(r, 1),
                    t.length > 0 ? this.map.set(n.param, t) : this.map.delete(n.param)
                } else {
                    this.map.delete(n.param);
                    break
                }
            }
        }
        ),
        this.cloneFrom = this.updates = null)
    }
}
;
var wa = class {
    constructor() {
        this.map = new Map
    }
    set(n, e) {
        return this.map.set(n, e),
        this
    }
    get(n) {
        return this.map.has(n) || this.map.set(n, n.defaultValue()),
        this.map.get(n)
    }
    delete(n) {
        return this.map.delete(n),
        this
    }
    has(n) {
        return this.map.has(n)
    }
    keys() {
        return this.map.keys()
    }
}
;
function rm(i) {
    switch (i) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
        return !1;
    default:
        return !0
    }
}
function yl(i) {
    return typeof ArrayBuffer < "u" && i instanceof ArrayBuffer
}
function xl(i) {
    return typeof Blob < "u" && i instanceof Blob
}
function wl(i) {
    return typeof FormData < "u" && i instanceof FormData
}
function om(i) {
    return typeof URLSearchParams < "u" && i instanceof URLSearchParams
}
var Sn = class i {
    constructor(n, e, t, r) {
        this.url = e,
        this.body = null,
        this.reportProgress = !1,
        this.withCredentials = !1,
        this.responseType = "json",
        this.method = n.toUpperCase();
        let o;
        if (rm(this.method) || r ? (this.body = t !== void 0 ? t : null,
        o = r) : o = t,
        o && (this.reportProgress = !!o.reportProgress,
        this.withCredentials = !!o.withCredentials,
        o.responseType && (this.responseType = o.responseType),
        o.headers && (this.headers = o.headers),
        o.context && (this.context = o.context),
        o.params && (this.params = o.params),
        this.transferCache = o.transferCache),
        this.headers ??= new zt,
        this.context ??= new wa,
        !this.params)
            this.params = new jt,
            this.urlWithParams = e;
        else {
            let a = this.params.toString();
            if (a.length === 0)
                this.urlWithParams = e;
            else {
                let s = e.indexOf("?")
                  , d = s === -1 ? "?" : s < e.length - 1 ? "&" : "";
                this.urlWithParams = e + d + a
            }
        }
    }
    serializeBody() {
        return this.body === null ? null : typeof this.body == "string" || yl(this.body) || xl(this.body) || wl(this.body) || om(this.body) ? this.body : this.body instanceof jt ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
    }
    detectContentTypeHeader() {
        return this.body === null || wl(this.body) ? null : xl(this.body) ? this.body.type || null : yl(this.body) ? null : typeof this.body == "string" ? "text/plain" : this.body instanceof jt ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? "application/json" : null
    }
    clone(n={}) {
        let e = n.method || this.method
          , t = n.url || this.url
          , r = n.responseType || this.responseType
          , o = n.transferCache ?? this.transferCache
          , a = n.body !== void 0 ? n.body : this.body
          , s = n.withCredentials ?? this.withCredentials
          , d = n.reportProgress ?? this.reportProgress
          , c = n.headers || this.headers
          , m = n.params || this.params
          , b = n.context ?? this.context;
        return n.setHeaders !== void 0 && (c = Object.keys(n.setHeaders).reduce( (R, W) => R.set(W, n.setHeaders[W]), c)),
        n.setParams && (m = Object.keys(n.setParams).reduce( (R, W) => R.set(W, n.setParams[W]), m)),
        new i(e,t,a,{
            params: m,
            headers: c,
            context: b,
            reportProgress: d,
            responseType: r,
            withCredentials: s,
            transferCache: o
        })
    }
}
  , Ti = function(i) {
    return i[i.Sent = 0] = "Sent",
    i[i.UploadProgress = 1] = "UploadProgress",
    i[i.ResponseHeader = 2] = "ResponseHeader",
    i[i.DownloadProgress = 3] = "DownloadProgress",
    i[i.Response = 4] = "Response",
    i[i.User = 5] = "User",
    i
}(Ti || {})
  , Rn = class {
    constructor(n, e=qr.Ok, t="OK") {
        this.headers = n.headers || new zt,
        this.status = n.status !== void 0 ? n.status : e,
        this.statusText = n.statusText || t,
        this.url = n.url || null,
        this.ok = this.status >= 200 && this.status < 300
    }
}
  , Ca = class i extends Rn {
    constructor(n={}) {
        super(n),
        this.type = Ti.ResponseHeader
    }
    clone(n={}) {
        return new i({
            headers: n.headers || this.headers,
            status: n.status !== void 0 ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0
        })
    }
}
  , Fi = class i extends Rn {
    constructor(n={}) {
        super(n),
        this.type = Ti.Response,
        this.body = n.body !== void 0 ? n.body : null
    }
    clone(n={}) {
        return new i({
            body: n.body !== void 0 ? n.body : this.body,
            headers: n.headers || this.headers,
            status: n.status !== void 0 ? n.status : this.status,
            statusText: n.statusText || this.statusText,
            url: n.url || this.url || void 0
        })
    }
}
  , Yr = class extends Rn {
    constructor(n) {
        super(n, 0, "Unknown Error"),
        this.name = "HttpErrorResponse",
        this.ok = !1,
        this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${n.url || "(unknown url)"}` : this.message = `Http failure response for ${n.url || "(unknown url)"}: ${n.status} ${n.statusText}`,
        this.error = n.error || null
    }
}
  , qr = function(i) {
    return i[i.Continue = 100] = "Continue",
    i[i.SwitchingProtocols = 101] = "SwitchingProtocols",
    i[i.Processing = 102] = "Processing",
    i[i.EarlyHints = 103] = "EarlyHints",
    i[i.Ok = 200] = "Ok",
    i[i.Created = 201] = "Created",
    i[i.Accepted = 202] = "Accepted",
    i[i.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation",
    i[i.NoContent = 204] = "NoContent",
    i[i.ResetContent = 205] = "ResetContent",
    i[i.PartialContent = 206] = "PartialContent",
    i[i.MultiStatus = 207] = "MultiStatus",
    i[i.AlreadyReported = 208] = "AlreadyReported",
    i[i.ImUsed = 226] = "ImUsed",
    i[i.MultipleChoices = 300] = "MultipleChoices",
    i[i.MovedPermanently = 301] = "MovedPermanently",
    i[i.Found = 302] = "Found",
    i[i.SeeOther = 303] = "SeeOther",
    i[i.NotModified = 304] = "NotModified",
    i[i.UseProxy = 305] = "UseProxy",
    i[i.Unused = 306] = "Unused",
    i[i.TemporaryRedirect = 307] = "TemporaryRedirect",
    i[i.PermanentRedirect = 308] = "PermanentRedirect",
    i[i.BadRequest = 400] = "BadRequest",
    i[i.Unauthorized = 401] = "Unauthorized",
    i[i.PaymentRequired = 402] = "PaymentRequired",
    i[i.Forbidden = 403] = "Forbidden",
    i[i.NotFound = 404] = "NotFound",
    i[i.MethodNotAllowed = 405] = "MethodNotAllowed",
    i[i.NotAcceptable = 406] = "NotAcceptable",
    i[i.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired",
    i[i.RequestTimeout = 408] = "RequestTimeout",
    i[i.Conflict = 409] = "Conflict",
    i[i.Gone = 410] = "Gone",
    i[i.LengthRequired = 411] = "LengthRequired",
    i[i.PreconditionFailed = 412] = "PreconditionFailed",
    i[i.PayloadTooLarge = 413] = "PayloadTooLarge",
    i[i.UriTooLong = 414] = "UriTooLong",
    i[i.UnsupportedMediaType = 415] = "UnsupportedMediaType",
    i[i.RangeNotSatisfiable = 416] = "RangeNotSatisfiable",
    i[i.ExpectationFailed = 417] = "ExpectationFailed",
    i[i.ImATeapot = 418] = "ImATeapot",
    i[i.MisdirectedRequest = 421] = "MisdirectedRequest",
    i[i.UnprocessableEntity = 422] = "UnprocessableEntity",
    i[i.Locked = 423] = "Locked",
    i[i.FailedDependency = 424] = "FailedDependency",
    i[i.TooEarly = 425] = "TooEarly",
    i[i.UpgradeRequired = 426] = "UpgradeRequired",
    i[i.PreconditionRequired = 428] = "PreconditionRequired",
    i[i.TooManyRequests = 429] = "TooManyRequests",
    i[i.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge",
    i[i.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons",
    i[i.InternalServerError = 500] = "InternalServerError",
    i[i.NotImplemented = 501] = "NotImplemented",
    i[i.BadGateway = 502] = "BadGateway",
    i[i.ServiceUnavailable = 503] = "ServiceUnavailable",
    i[i.GatewayTimeout = 504] = "GatewayTimeout",
    i[i.HttpVersionNotSupported = 505] = "HttpVersionNotSupported",
    i[i.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates",
    i[i.InsufficientStorage = 507] = "InsufficientStorage",
    i[i.LoopDetected = 508] = "LoopDetected",
    i[i.NotExtended = 510] = "NotExtended",
    i[i.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired",
    i
}(qr || {});
function ya(i, n) {
    return {
        body: n,
        headers: i.headers,
        context: i.context,
        observe: i.observe,
        params: i.params,
        reportProgress: i.reportProgress,
        responseType: i.responseType,
        withCredentials: i.withCredentials,
        transferCache: i.transferCache
    }
}
var ci = ( () => {
    class i {
        constructor(e) {
            this.handler = e
        }
        request(e, t, r={}) {
            let o;
            if (e instanceof Sn)
                o = e;
            else {
                let d;
                r.headers instanceof zt ? d = r.headers : d = new zt(r.headers);
                let c;
                r.params && (r.params instanceof jt ? c = r.params : c = new jt({
                    fromObject: r.params
                })),
                o = new Sn(e,t,r.body !== void 0 ? r.body : null,{
                    headers: d,
                    context: r.context,
                    params: c,
                    reportProgress: r.reportProgress,
                    responseType: r.responseType || "json",
                    withCredentials: r.withCredentials,
                    transferCache: r.transferCache
                })
            }
            let a = E(o).pipe(ni(d => this.handler.handle(d)));
            if (e instanceof Sn || r.observe === "events")
                return a;
            let s = a.pipe(pe(d => d instanceof Fi));
            switch (r.observe || "body") {
            case "body":
                switch (o.responseType) {
                case "arraybuffer":
                    return s.pipe(N(d => {
                        if (d.body !== null && !(d.body instanceof ArrayBuffer))
                            throw new Error("Response is not an ArrayBuffer.");
                        return d.body
                    }
                    ));
                case "blob":
                    return s.pipe(N(d => {
                        if (d.body !== null && !(d.body instanceof Blob))
                            throw new Error("Response is not a Blob.");
                        return d.body
                    }
                    ));
                case "text":
                    return s.pipe(N(d => {
                        if (d.body !== null && typeof d.body != "string")
                            throw new Error("Response is not a string.");
                        return d.body
                    }
                    ));
                case "json":
                default:
                    return s.pipe(N(d => d.body))
                }
            case "response":
                return s;
            default:
                throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)
            }
        }
        delete(e, t={}) {
            return this.request("DELETE", e, t)
        }
        get(e, t={}) {
            return this.request("GET", e, t)
        }
        head(e, t={}) {
            return this.request("HEAD", e, t)
        }
        jsonp(e, t) {
            return this.request("JSONP", e, {
                params: new jt().append(t, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            })
        }
        options(e, t={}) {
            return this.request("OPTIONS", e, t)
        }
        patch(e, t, r={}) {
            return this.request("PATCH", e, ya(r, t))
        }
        post(e, t, r={}) {
            return this.request("POST", e, ya(r, t))
        }
        put(e, t, r={}) {
            return this.request("PUT", e, ya(r, t))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(kn))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)();
function am(i, n) {
    return n(i)
}
function sm(i, n, e) {
    return (t, r) => vt(e, () => n(t, o => i(o, r)))
}
var Fl = new x("")
  , Ol = new x("")
  , dm = new x("");
var Cl = ( () => {
    class i extends kn {
        constructor(e, t) {
            super(),
            this.backend = e,
            this.injector = t,
            this.chain = null,
            this.pendingTasks = g(Fr);
            let r = g(dm, {
                optional: !0
            });
            this.backend = r ?? e
        }
        handle(e) {
            if (this.chain === null) {
                let r = Array.from(new Set([...this.injector.get(Fl), ...this.injector.get(Ol, [])]));
                this.chain = r.reduceRight( (o, a) => sm(o, a, this.injector), am)
            }
            let t = this.pendingTasks.add();
            return this.chain(e, r => this.backend.handle(r)).pipe(St( () => this.pendingTasks.remove(t)))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p($r),p(Mi))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)();
var lm = /^\)\]\}',?\n/;
function cm(i) {
    return "responseURL"in i && i.responseURL ? i.responseURL : /^X-Request-URL:/m.test(i.getAllResponseHeaders()) ? i.getResponseHeader("X-Request-URL") : null
}
var Dl = ( () => {
    class i {
        constructor(e) {
            this.xhrFactory = e
        }
        handle(e) {
            if (e.method === "JSONP")
                throw new re(-2800,!1);
            let t = this.xhrFactory;
            return (t.\u0275loadImpl ? Pe(t.\u0275loadImpl()) : E(null)).pipe(Ve( () => new bt(o => {
                let a = t.build();
                if (a.open(e.method, e.urlWithParams),
                e.withCredentials && (a.withCredentials = !0),
                e.headers.forEach( (k, Q) => a.setRequestHeader(k, Q.join(","))),
                e.headers.has("Accept") || a.setRequestHeader("Accept", "application/json, text/plain, */*"),
                !e.headers.has("Content-Type")) {
                    let k = e.detectContentTypeHeader();
                    k !== null && a.setRequestHeader("Content-Type", k)
                }
                if (e.responseType) {
                    let k = e.responseType.toLowerCase();
                    a.responseType = k !== "json" ? k : "text"
                }
                let s = e.serializeBody()
                  , d = null
                  , c = () => {
                    if (d !== null)
                        return d;
                    let k = a.statusText || "OK"
                      , Q = new zt(a.getAllResponseHeaders())
                      , we = cm(a) || e.url;
                    return d = new Ca({
                        headers: Q,
                        status: a.status,
                        statusText: k,
                        url: we
                    }),
                    d
                }
                  , m = () => {
                    let {headers: k, status: Q, statusText: we, url: _t} = c()
                      , Fe = null;
                    Q !== qr.NoContent && (Fe = typeof a.response > "u" ? a.responseText : a.response),
                    Q === 0 && (Q = Fe ? qr.Ok : 0);
                    let na = Q >= 200 && Q < 300;
                    if (e.responseType === "json" && typeof Fe == "string") {
                        let Zh = Fe;
                        Fe = Fe.replace(lm, "");
                        try {
                            Fe = Fe !== "" ? JSON.parse(Fe) : null
                        } catch (Kh) {
                            Fe = Zh,
                            na && (na = !1,
                            Fe = {
                                error: Kh,
                                text: Fe
                            })
                        }
                    }
                    na ? (o.next(new Fi({
                        body: Fe,
                        headers: k,
                        status: Q,
                        statusText: we,
                        url: _t || void 0
                    })),
                    o.complete()) : o.error(new Yr({
                        error: Fe,
                        headers: k,
                        status: Q,
                        statusText: we,
                        url: _t || void 0
                    }))
                }
                  , b = k => {
                    let {url: Q} = c()
                      , we = new Yr({
                        error: k,
                        status: a.status || 0,
                        statusText: a.statusText || "Unknown Error",
                        url: Q || void 0
                    });
                    o.error(we)
                }
                  , R = !1
                  , W = k => {
                    R || (o.next(c()),
                    R = !0);
                    let Q = {
                        type: Ti.DownloadProgress,
                        loaded: k.loaded
                    };
                    k.lengthComputable && (Q.total = k.total),
                    e.responseType === "text" && a.responseText && (Q.partialText = a.responseText),
                    o.next(Q)
                }
                  , K = k => {
                    let Q = {
                        type: Ti.UploadProgress,
                        loaded: k.loaded
                    };
                    k.lengthComputable && (Q.total = k.total),
                    o.next(Q)
                }
                ;
                return a.addEventListener("load", m),
                a.addEventListener("error", b),
                a.addEventListener("timeout", b),
                a.addEventListener("abort", b),
                e.reportProgress && (a.addEventListener("progress", W),
                s !== null && a.upload && a.upload.addEventListener("progress", K)),
                a.send(s),
                o.next({
                    type: Ti.Sent
                }),
                () => {
                    a.removeEventListener("error", b),
                    a.removeEventListener("abort", b),
                    a.removeEventListener("load", m),
                    a.removeEventListener("timeout", b),
                    e.reportProgress && (a.removeEventListener("progress", W),
                    s !== null && a.upload && a.upload.removeEventListener("progress", K)),
                    a.readyState !== a.DONE && a.abort()
                }
            }
            )))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Br))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , Nl = new x("")
  , um = "XSRF-TOKEN"
  , hm = new x("",{
    providedIn: "root",
    factory: () => um
})
  , mm = "X-XSRF-TOKEN"
  , pm = new x("",{
    providedIn: "root",
    factory: () => mm
})
  , Wr = class {
}
  , fm = ( () => {
    class i {
        constructor(e, t, r) {
            this.doc = e,
            this.platform = t,
            this.cookieName = r,
            this.lastCookieString = "",
            this.lastToken = null,
            this.parseCount = 0
        }
        getToken() {
            if (this.platform === "server")
                return null;
            let e = this.doc.cookie || "";
            return e !== this.lastCookieString && (this.parseCount++,
            this.lastToken = zr(e, this.cookieName),
            this.lastCookieString = e),
            this.lastToken
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O),p(at),p(hm))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)();
function gm(i, n) {
    let e = i.url.toLowerCase();
    if (!g(Nl) || i.method === "GET" || i.method === "HEAD" || e.startsWith("http://") || e.startsWith("https://"))
        return n(i);
    let t = g(Wr).getToken()
      , r = g(pm);
    return t != null && !i.headers.has(r) && (i = i.clone({
        headers: i.headers.set(r, t)
    })),
    n(i)
}
function Pl(...i) {
    let n = [ci, Dl, Cl, {
        provide: kn,
        useExisting: Cl
    }, {
        provide: $r,
        useExisting: Dl
    }, {
        provide: Fl,
        useValue: gm,
        multi: !0
    }, {
        provide: Nl,
        useValue: !0
    }, {
        provide: Wr,
        useClass: fm
    }];
    for (let e of i)
        n.push(...e.\u0275providers);
    return Rt(n)
}
var El = "b"
  , Il = "h"
  , Ml = "s"
  , Al = "st"
  , Sl = "u"
  , kl = "rt"
  , Hr = new x("")
  , _m = ["GET", "HEAD"];
function bm(i, n) {
    let b = g(Hr)
      , {isCacheActive: e} = b
      , t = Td(b, ["isCacheActive"])
      , {transferCache: r, method: o} = i;
    if (!e || o === "POST" && !t.includePostRequests && !r || o !== "POST" && !_m.includes(o) || r === !1 || t.filter?.(i) === !1)
        return n(i);
    let a = g(Ar)
      , s = ym(i)
      , d = a.get(s, null)
      , c = t.includeHeaders;
    if (typeof r == "object" && r.includeHeaders && (c = r.includeHeaders),
    d) {
        let {[El]: R, [kl]: W, [Il]: K, [Ml]: k, [Al]: Q, [Sl]: we} = d
          , _t = R;
        switch (W) {
        case "arraybuffer":
            _t = new TextEncoder().encode(R).buffer;
            break;
        case "blob":
            _t = new Blob([R]);
            break
        }
        let Fe = new zt(K);
        return E(new Fi({
            body: _t,
            headers: Fe,
            status: k,
            statusText: Q,
            url: we
        }))
    }
    let m = An(g(at));
    return n(i).pipe(ue(R => {
        R instanceof Fi && m && a.set(s, {
            [El]: R.body,
            [Il]: vm(R.headers, c),
            [Ml]: R.status,
            [Al]: R.statusText,
            [Sl]: R.url || "",
            [kl]: i.responseType
        })
    }
    ))
}
function vm(i, n) {
    if (!n)
        return {};
    let e = {};
    for (let t of n) {
        let r = i.getAll(t);
        r !== null && (e[t] = r)
    }
    return e
}
function Rl(i) {
    return [...i.keys()].sort().map(n => `${n}=${i.getAll(n)}`).join("&")
}
function ym(i) {
    let {params: n, method: e, responseType: t, url: r} = i
      , o = Rl(n)
      , a = i.serializeBody();
    a instanceof URLSearchParams ? a = Rl(a) : typeof a != "string" && (a = "");
    let s = [e, t, r, a, o].join("|")
      , d = xm(s);
    return d
}
function xm(i) {
    let n = 0;
    for (let e of i)
        n = Math.imul(31, n) + e.charCodeAt(0) << 0;
    return n += 2147483648,
    n.toString()
}
function Vl(i) {
    return [{
        provide: Hr,
        useFactory: () => (Tr("NgHttpTransferCache"),
        v({
            isCacheActive: !0
        }, i))
    }, {
        provide: Ol,
        useValue: bm,
        multi: !0,
        deps: [Ar, Hr]
    }, {
        provide: jr,
        multi: !0,
        useFactory: () => {
            let n = g(di)
              , e = g(Hr);
            return () => {
                ol(n).then( () => {
                    e.isCacheActive = !1
                }
                )
            }
        }
    }]
}
var Ma = class extends ul {
    constructor() {
        super(...arguments),
        this.supportsDOMEvents = !0
    }
}
  , Aa = class i extends Ma {
    static makeCurrent() {
        cl(new i)
    }
    onAndCancel(n, e, t) {
        return n.addEventListener(e, t),
        () => {
            n.removeEventListener(e, t)
        }
    }
    dispatchEvent(n, e) {
        n.dispatchEvent(e)
    }
    remove(n) {
        n.parentNode && n.parentNode.removeChild(n)
    }
    createElement(n, e) {
        return e = e || this.getDefaultDocument(),
        e.createElement(n)
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
    }
    getDefaultDocument() {
        return document
    }
    isElementNode(n) {
        return n.nodeType === Node.ELEMENT_NODE
    }
    isShadowRoot(n) {
        return n instanceof DocumentFragment
    }
    getGlobalEventTarget(n, e) {
        return e === "window" ? window : e === "document" ? n : e === "body" ? n.body : null
    }
    getBaseHref(n) {
        let e = Cm();
        return e == null ? null : Dm(e)
    }
    resetBaseElement() {
        Tn = null
    }
    getUserAgent() {
        return window.navigator.userAgent
    }
    getCookie(n) {
        return zr(document.cookie, n)
    }
}
  , Tn = null;
function Cm() {
    return Tn = Tn || document.querySelector("base"),
    Tn ? Tn.getAttribute("href") : null
}
function Dm(i) {
    return new URL(i,document.baseURI).pathname
}
var Em = ( () => {
    class i {
        build() {
            return new XMLHttpRequest
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , Sa = new x("")
  , zl = ( () => {
    class i {
        constructor(e, t) {
            this._zone = t,
            this._eventNameToPlugin = new Map,
            e.forEach(r => {
                r.manager = this
            }
            ),
            this._plugins = e.slice().reverse()
        }
        addEventListener(e, t, r) {
            return this._findPluginFor(t).addEventListener(e, t, r)
        }
        getZone() {
            return this._zone
        }
        _findPluginFor(e) {
            let t = this._eventNameToPlugin.get(e);
            if (t)
                return t;
            if (t = this._plugins.find(o => o.supports(e)),
            !t)
                throw new re(5101,!1);
            return this._eventNameToPlugin.set(e, t),
            t
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Sa),p(T))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , Gr = class {
    constructor(n) {
        this._doc = n
    }
}
  , Ea = "ng-app-id"
  , Bl = ( () => {
    class i {
        constructor(e, t, r, o={}) {
            this.doc = e,
            this.appId = t,
            this.nonce = r,
            this.platformId = o,
            this.styleRef = new Map,
            this.hostNodes = new Set,
            this.styleNodesInDOM = this.collectServerRenderedStyles(),
            this.platformIsServer = An(o),
            this.resetHostNodes()
        }
        addStyles(e) {
            for (let t of e)
                this.changeUsageCount(t, 1) === 1 && this.onStyleAdded(t)
        }
        removeStyles(e) {
            for (let t of e)
                this.changeUsageCount(t, -1) <= 0 && this.onStyleRemoved(t)
        }
        ngOnDestroy() {
            let e = this.styleNodesInDOM;
            e && (e.forEach(t => t.remove()),
            e.clear());
            for (let t of this.getAllStyles())
                this.onStyleRemoved(t);
            this.resetHostNodes()
        }
        addHost(e) {
            this.hostNodes.add(e);
            for (let t of this.getAllStyles())
                this.addStyleToHost(e, t)
        }
        removeHost(e) {
            this.hostNodes.delete(e)
        }
        getAllStyles() {
            return this.styleRef.keys()
        }
        onStyleAdded(e) {
            for (let t of this.hostNodes)
                this.addStyleToHost(t, e)
        }
        onStyleRemoved(e) {
            let t = this.styleRef;
            t.get(e)?.elements?.forEach(r => r.remove()),
            t.delete(e)
        }
        collectServerRenderedStyles() {
            let e = this.doc.head?.querySelectorAll(`style[${Ea}="${this.appId}"]`);
            if (e?.length) {
                let t = new Map;
                return e.forEach(r => {
                    r.textContent != null && t.set(r.textContent, r)
                }
                ),
                t
            }
            return null
        }
        changeUsageCount(e, t) {
            let r = this.styleRef;
            if (r.has(e)) {
                let o = r.get(e);
                return o.usage += t,
                o.usage
            }
            return r.set(e, {
                usage: t,
                elements: []
            }),
            t
        }
        getStyleElement(e, t) {
            let r = this.styleNodesInDOM
              , o = r?.get(t);
            if (o?.parentNode === e)
                return r.delete(t),
                o.removeAttribute(Ea),
                o;
            {
                let a = this.doc.createElement("style");
                return this.nonce && a.setAttribute("nonce", this.nonce),
                a.textContent = t,
                this.platformIsServer && a.setAttribute(Ea, this.appId),
                e.appendChild(a),
                a
            }
        }
        addStyleToHost(e, t) {
            let r = this.getStyleElement(e, t)
              , o = this.styleRef
              , a = o.get(t)?.elements;
            a ? a.push(r) : o.set(t, {
                elements: [r],
                usage: 1
            })
        }
        resetHostNodes() {
            let e = this.hostNodes;
            e.clear(),
            e.add(this.doc.head)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O),p(Mr),p(wn, 8),p(at))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , Ia = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/"
}
  , Fa = /%COMP%/g
  , Ul = "%COMP%"
  , Im = `_nghost-${Ul}`
  , Mm = `_ngcontent-${Ul}`
  , Am = !0
  , Sm = new x("",{
    providedIn: "root",
    factory: () => Am
});
function km(i) {
    return Mm.replace(Fa, i)
}
function Rm(i) {
    return Im.replace(Fa, i)
}
function Hl(i, n) {
    return n.map(e => e.replace(Fa, i))
}
var Xr = ( () => {
    class i {
        constructor(e, t, r, o, a, s, d, c=null) {
            this.eventManager = e,
            this.sharedStylesHost = t,
            this.appId = r,
            this.removeStylesOnCompDestroy = o,
            this.doc = a,
            this.platformId = s,
            this.ngZone = d,
            this.nonce = c,
            this.rendererByCompId = new Map,
            this.platformIsServer = An(s),
            this.defaultRenderer = new Fn(e,a,d,this.platformIsServer)
        }
        createRenderer(e, t) {
            if (!e || !t)
                return this.defaultRenderer;
            this.platformIsServer && t.encapsulation === yn.ShadowDom && (t = ie(v({}, t), {
                encapsulation: yn.Emulated
            }));
            let r = this.getOrCreateRenderer(e, t);
            return r instanceof Zr ? r.applyToHost(e) : r instanceof On && r.applyStyles(),
            r
        }
        getOrCreateRenderer(e, t) {
            let r = this.rendererByCompId
              , o = r.get(t.id);
            if (!o) {
                let a = this.doc
                  , s = this.ngZone
                  , d = this.eventManager
                  , c = this.sharedStylesHost
                  , m = this.removeStylesOnCompDestroy
                  , b = this.platformIsServer;
                switch (t.encapsulation) {
                case yn.Emulated:
                    o = new Zr(d,c,t,this.appId,m,a,s,b);
                    break;
                case yn.ShadowDom:
                    return new ka(d,c,e,t,a,s,this.nonce,b);
                default:
                    o = new On(d,c,t,m,a,s,b);
                    break
                }
                r.set(t.id, o)
            }
            return o
        }
        ngOnDestroy() {
            this.rendererByCompId.clear()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(zl),p(Bl),p(Mr),p(Sm),p(O),p(at),p(T),p(wn))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , Fn = class {
    constructor(n, e, t, r) {
        this.eventManager = n,
        this.doc = e,
        this.ngZone = t,
        this.platformIsServer = r,
        this.data = Object.create(null),
        this.throwOnSyntheticProps = !0,
        this.destroyNode = null
    }
    destroy() {}
    createElement(n, e) {
        return e ? this.doc.createElementNS(Ia[e] || e, n) : this.doc.createElement(n)
    }
    createComment(n) {
        return this.doc.createComment(n)
    }
    createText(n) {
        return this.doc.createTextNode(n)
    }
    appendChild(n, e) {
        (Ll(n) ? n.content : n).appendChild(e)
    }
    insertBefore(n, e, t) {
        n && (Ll(n) ? n.content : n).insertBefore(e, t)
    }
    removeChild(n, e) {
        n && n.removeChild(e)
    }
    selectRootElement(n, e) {
        let t = typeof n == "string" ? this.doc.querySelector(n) : n;
        if (!t)
            throw new re(-5104,!1);
        return e || (t.textContent = ""),
        t
    }
    parentNode(n) {
        return n.parentNode
    }
    nextSibling(n) {
        return n.nextSibling
    }
    setAttribute(n, e, t, r) {
        if (r) {
            e = r + ":" + e;
            let o = Ia[r];
            o ? n.setAttributeNS(o, e, t) : n.setAttribute(e, t)
        } else
            n.setAttribute(e, t)
    }
    removeAttribute(n, e, t) {
        if (t) {
            let r = Ia[t];
            r ? n.removeAttributeNS(r, e) : n.removeAttribute(`${t}:${e}`)
        } else
            n.removeAttribute(e)
    }
    addClass(n, e) {
        n.classList.add(e)
    }
    removeClass(n, e) {
        n.classList.remove(e)
    }
    setStyle(n, e, t, r) {
        r & (Cn.DashCase | Cn.Important) ? n.style.setProperty(e, t, r & Cn.Important ? "important" : "") : n.style[e] = t
    }
    removeStyle(n, e, t) {
        t & Cn.DashCase ? n.style.removeProperty(e) : n.style[e] = ""
    }
    setProperty(n, e, t) {
        n != null && (n[e] = t)
    }
    setValue(n, e) {
        n.nodeValue = e
    }
    listen(n, e, t) {
        if (typeof n == "string" && (n = Ri().getGlobalEventTarget(this.doc, n),
        !n))
            throw new Error(`Unsupported event target ${n} for event ${e}`);
        return this.eventManager.addEventListener(n, e, this.decoratePreventDefault(t))
    }
    decoratePreventDefault(n) {
        return e => {
            if (e === "__ngUnwrap__")
                return n;
            (this.platformIsServer ? this.ngZone.runGuarded( () => n(e)) : n(e)) === !1 && e.preventDefault()
        }
    }
}
;
function Ll(i) {
    return i.tagName === "TEMPLATE" && i.content !== void 0
}
var ka = class extends Fn {
    constructor(n, e, t, r, o, a, s, d) {
        super(n, o, a, d),
        this.sharedStylesHost = e,
        this.hostEl = t,
        this.shadowRoot = t.attachShadow({
            mode: "open"
        }),
        this.sharedStylesHost.addHost(this.shadowRoot);
        let c = Hl(r.id, r.styles);
        for (let m of c) {
            let b = document.createElement("style");
            s && b.setAttribute("nonce", s),
            b.textContent = m,
            this.shadowRoot.appendChild(b)
        }
    }
    nodeOrShadowRoot(n) {
        return n === this.hostEl ? this.shadowRoot : n
    }
    appendChild(n, e) {
        return super.appendChild(this.nodeOrShadowRoot(n), e)
    }
    insertBefore(n, e, t) {
        return super.insertBefore(this.nodeOrShadowRoot(n), e, t)
    }
    removeChild(n, e) {
        return super.removeChild(this.nodeOrShadowRoot(n), e)
    }
    parentNode(n) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))
    }
    destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot)
    }
}
  , On = class extends Fn {
    constructor(n, e, t, r, o, a, s, d) {
        super(n, o, a, s),
        this.sharedStylesHost = e,
        this.removeStylesOnCompDestroy = r,
        this.styles = d ? Hl(d, t.styles) : t.styles
    }
    applyStyles() {
        this.sharedStylesHost.addStyles(this.styles)
    }
    destroy() {
        this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles)
    }
}
  , Zr = class extends On {
    constructor(n, e, t, r, o, a, s, d) {
        let c = r + "-" + t.id;
        super(n, e, t, o, a, s, d, c),
        this.contentAttr = km(c),
        this.hostAttr = Rm(c)
    }
    applyToHost(n) {
        this.applyStyles(),
        this.setAttribute(n, this.hostAttr, "")
    }
    createElement(n, e) {
        let t = super.createElement(n, e);
        return super.setAttribute(t, this.contentAttr, ""),
        t
    }
}
  , Tm = ( () => {
    class i extends Gr {
        constructor(e) {
            super(e)
        }
        supports(e) {
            return !0
        }
        addEventListener(e, t, r) {
            return e.addEventListener(t, r, !1),
            () => this.removeEventListener(e, t, r)
        }
        removeEventListener(e, t, r) {
            return e.removeEventListener(t, r)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , jl = ["alt", "control", "meta", "shift"]
  , Fm = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS"
}
  , Om = {
    alt: i => i.altKey,
    control: i => i.ctrlKey,
    meta: i => i.metaKey,
    shift: i => i.shiftKey
}
  , Nm = ( () => {
    class i extends Gr {
        constructor(e) {
            super(e)
        }
        supports(e) {
            return i.parseEventName(e) != null
        }
        addEventListener(e, t, r) {
            let o = i.parseEventName(t)
              , a = i.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular( () => Ri().onAndCancel(e, o.domEventName, a))
        }
        static parseEventName(e) {
            let t = e.toLowerCase().split(".")
              , r = t.shift();
            if (t.length === 0 || !(r === "keydown" || r === "keyup"))
                return null;
            let o = i._normalizeKey(t.pop())
              , a = ""
              , s = t.indexOf("code");
            if (s > -1 && (t.splice(s, 1),
            a = "code."),
            jl.forEach(c => {
                let m = t.indexOf(c);
                m > -1 && (t.splice(m, 1),
                a += c + ".")
            }
            ),
            a += o,
            t.length != 0 || o.length === 0)
                return null;
            let d = {};
            return d.domEventName = r,
            d.fullKey = a,
            d
        }
        static matchEventFullKeyCode(e, t) {
            let r = Fm[e.key] || e.key
              , o = "";
            return t.indexOf("code.") > -1 && (r = e.code,
            o = "code."),
            r == null || !r ? !1 : (r = r.toLowerCase(),
            r === " " ? r = "space" : r === "." && (r = "dot"),
            jl.forEach(a => {
                if (a !== r) {
                    let s = Om[a];
                    s(e) && (o += a + ".")
                }
            }
            ),
            o += r,
            o === t)
        }
        static eventCallback(e, t, r) {
            return o => {
                i.matchEventFullKeyCode(o, e) && r.runGuarded( () => t(o))
            }
        }
        static _normalizeKey(e) {
            return e === "esc" ? "escape" : e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)();
function $l(i, n) {
    return sl(v({
        rootComponent: i
    }, Pm(n)))
}
function Pm(i) {
    return {
        appProviders: [...Bm, ...i?.providers ?? []],
        platformProviders: zm
    }
}
function Vm() {
    Aa.makeCurrent()
}
function Lm() {
    return new oi
}
function jm() {
    return Ud(document),
    document
}
var zm = [{
    provide: at,
    useValue: _l
}, {
    provide: Hd,
    useValue: Vm,
    multi: !0
}, {
    provide: O,
    useFactory: jm,
    deps: []
}];
var Bm = [{
    provide: zd,
    useValue: "root"
}, {
    provide: oi,
    useFactory: Lm,
    deps: []
}, {
    provide: Sa,
    useClass: Tm,
    multi: !0,
    deps: [O, T, at]
}, {
    provide: Sa,
    useClass: Nm,
    multi: !0,
    deps: [O]
}, Xr, Bl, zl, {
    provide: kr,
    useExisting: Xr
}, {
    provide: Br,
    useClass: Em,
    deps: []
}, []];
var Oi = ( () => {
    class i {
        constructor(e) {
            this._doc = e
        }
        getTitle() {
            return this._doc.title
        }
        setTitle(e) {
            this._doc.title = e || ""
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Oa = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: function(t) {
                let r = null;
                return t ? r = new (t || i) : r = p(Um),
                r
            },
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Um = ( () => {
    class i extends Oa {
        constructor(e) {
            super(),
            this._doc = e
        }
        sanitize(e, t) {
            if (t == null)
                return null;
            switch (e) {
            case Be.NONE:
                return t;
            case Be.HTML:
                return Si(t, "HTML") ? Ai(t) : Zd(this._doc, String(t)).toString();
            case Be.STYLE:
                return Si(t, "Style") ? Ai(t) : t;
            case Be.SCRIPT:
                if (Si(t, "Script"))
                    return Ai(t);
                throw new re(5200,!1);
            case Be.URL:
                return Si(t, "URL") ? Ai(t) : Xd(String(t));
            case Be.RESOURCE_URL:
                if (Si(t, "ResourceURL"))
                    return Ai(t);
                throw new re(5201,!1);
            default:
                throw new re(5202,!1)
            }
        }
        bypassSecurityTrustHtml(e) {
            return $d(e)
        }
        bypassSecurityTrustStyle(e) {
            return Yd(e)
        }
        bypassSecurityTrustScript(e) {
            return qd(e)
        }
        bypassSecurityTrustUrl(e) {
            return Wd(e)
        }
        bypassSecurityTrustResourceUrl(e) {
            return Gd(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Ra = function(i) {
    return i[i.NoHttpTransferCache = 0] = "NoHttpTransferCache",
    i[i.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions",
    i
}(Ra || {});
function Yl(...i) {
    let n = []
      , e = new Set
      , t = e.has(Ra.HttpTransferCacheOptions);
    for (let {\u0275providers: r, \u0275kind: o} of i)
        e.add(o),
        r.length && n.push(r);
    return Rt([[], dl(), e.has(Ra.NoHttpTransferCache) || t ? [] : Vl({}), n])
}
var q = "primary"
  , Xn = Symbol("RouteTitle")
  , ja = class {
    constructor(n) {
        this.params = n || {}
    }
    has(n) {
        return Object.prototype.hasOwnProperty.call(this.params, n)
    }
    get(n) {
        if (this.has(n)) {
            let e = this.params[n];
            return Array.isArray(e) ? e[0] : e
        }
        return null
    }
    getAll(n) {
        if (this.has(n)) {
            let e = this.params[n];
            return Array.isArray(e) ? e : [e]
        }
        return []
    }
    get keys() {
        return Object.keys(this.params)
    }
}
;
function ji(i) {
    return new ja(i)
}
function Hm(i, n, e) {
    let t = e.path.split("/");
    if (t.length > i.length || e.pathMatch === "full" && (n.hasChildren() || t.length < i.length))
        return null;
    let r = {};
    for (let o = 0; o < t.length; o++) {
        let a = t[o]
          , s = i[o];
        if (a.startsWith(":"))
            r[a.substring(1)] = s;
        else if (a !== s.path)
            return null
    }
    return {
        consumed: i.slice(0, t.length),
        posParams: r
    }
}
function $m(i, n) {
    if (i.length !== n.length)
        return !1;
    for (let e = 0; e < i.length; ++e)
        if (!ct(i[e], n[e]))
            return !1;
    return !0
}
function ct(i, n) {
    let e = i ? za(i) : void 0
      , t = n ? za(n) : void 0;
    if (!e || !t || e.length != t.length)
        return !1;
    let r;
    for (let o = 0; o < e.length; o++)
        if (r = e[o],
        !Kl(i[r], n[r]))
            return !1;
    return !0
}
function za(i) {
    return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)]
}
function Kl(i, n) {
    if (Array.isArray(i) && Array.isArray(n)) {
        if (i.length !== n.length)
            return !1;
        let e = [...i].sort()
          , t = [...n].sort();
        return e.every( (r, o) => t[o] === r)
    } else
        return i === n
}
function Ql(i) {
    return i.length > 0 ? i[i.length - 1] : null
}
function Ht(i) {
    return aa(i) ? i : Lr(i) ? Pe(Promise.resolve(i)) : E(i)
}
var Ym = {
    exact: ec,
    subset: tc
}
  , Jl = {
    exact: qm,
    subset: Wm,
    ignored: () => !0
};
function ql(i, n, e) {
    return Ym[e.paths](i.root, n.root, e.matrixParams) && Jl[e.queryParams](i.queryParams, n.queryParams) && !(e.fragment === "exact" && i.fragment !== n.fragment)
}
function qm(i, n) {
    return ct(i, n)
}
function ec(i, n, e) {
    if (!hi(i.segments, n.segments) || !eo(i.segments, n.segments, e) || i.numberOfChildren !== n.numberOfChildren)
        return !1;
    for (let t in n.children)
        if (!i.children[t] || !ec(i.children[t], n.children[t], e))
            return !1;
    return !0
}
function Wm(i, n) {
    return Object.keys(n).length <= Object.keys(i).length && Object.keys(n).every(e => Kl(i[e], n[e]))
}
function tc(i, n, e) {
    return ic(i, n, n.segments, e)
}
function ic(i, n, e, t) {
    if (i.segments.length > e.length) {
        let r = i.segments.slice(0, e.length);
        return !(!hi(r, e) || n.hasChildren() || !eo(r, e, t))
    } else if (i.segments.length === e.length) {
        if (!hi(i.segments, e) || !eo(i.segments, e, t))
            return !1;
        for (let r in n.children)
            if (!i.children[r] || !tc(i.children[r], n.children[r], t))
                return !1;
        return !0
    } else {
        let r = e.slice(0, i.segments.length)
          , o = e.slice(i.segments.length);
        return !hi(i.segments, r) || !eo(i.segments, r, t) || !i.children[q] ? !1 : ic(i.children[q], n, o, t)
    }
}
function eo(i, n, e) {
    return n.every( (t, r) => Jl[e](i[r].parameters, t.parameters))
}
var Bt = class {
    constructor(n=new ne([],{}), e={}, t=null) {
        this.root = n,
        this.queryParams = e,
        this.fragment = t
    }
    get queryParamMap() {
        return this._queryParamMap ??= ji(this.queryParams),
        this._queryParamMap
    }
    toString() {
        return Zm.serialize(this)
    }
}
  , ne = class {
    constructor(n, e) {
        this.segments = n,
        this.children = e,
        this.parent = null,
        Object.values(e).forEach(t => t.parent = this)
    }
    hasChildren() {
        return this.numberOfChildren > 0
    }
    get numberOfChildren() {
        return Object.keys(this.children).length
    }
    toString() {
        return to(this)
    }
}
  , ui = class {
    constructor(n, e) {
        this.path = n,
        this.parameters = e
    }
    get parameterMap() {
        return this._parameterMap ??= ji(this.parameters),
        this._parameterMap
    }
    toString() {
        return rc(this)
    }
}
;
function Gm(i, n) {
    return hi(i, n) && i.every( (e, t) => ct(e.parameters, n[t].parameters))
}
function hi(i, n) {
    return i.length !== n.length ? !1 : i.every( (e, t) => e.path === n[t].path)
}
function Xm(i, n) {
    let e = [];
    return Object.entries(i.children).forEach( ([t,r]) => {
        t === q && (e = e.concat(n(r, t)))
    }
    ),
    Object.entries(i.children).forEach( ([t,r]) => {
        t !== q && (e = e.concat(n(r, t)))
    }
    ),
    e
}
var hs = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: () => new no,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , no = class {
    parse(n) {
        let e = new Ua(n);
        return new Bt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())
    }
    serialize(n) {
        let e = `/${Nn(n.root, !0)}`
          , t = Jm(n.queryParams)
          , r = typeof n.fragment == "string" ? `#${Km(n.fragment)}` : "";
        return `${e}${t}${r}`
    }
}
  , Zm = new no;
function to(i) {
    return i.segments.map(n => rc(n)).join("/")
}
function Nn(i, n) {
    if (!i.hasChildren())
        return to(i);
    if (n) {
        let e = i.children[q] ? Nn(i.children[q], !1) : ""
          , t = [];
        return Object.entries(i.children).forEach( ([r,o]) => {
            r !== q && t.push(`${r}:${Nn(o, !1)}`)
        }
        ),
        t.length > 0 ? `${e}(${t.join("//")})` : e
    } else {
        let e = Xm(i, (t, r) => r === q ? [Nn(i.children[q], !1)] : [`${r}:${Nn(t, !1)}`]);
        return Object.keys(i.children).length === 1 && i.children[q] != null ? `${to(i)}/${e[0]}` : `${to(i)}/(${e.join("//")})`
    }
}
function nc(i) {
    return encodeURIComponent(i).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}
function Qr(i) {
    return nc(i).replace(/%3B/gi, ";")
}
function Km(i) {
    return encodeURI(i)
}
function Ba(i) {
    return nc(i).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}
function io(i) {
    return decodeURIComponent(i)
}
function Wl(i) {
    return io(i.replace(/\+/g, "%20"))
}
function rc(i) {
    return `${Ba(i.path)}${Qm(i.parameters)}`
}
function Qm(i) {
    return Object.entries(i).map( ([n,e]) => `;${Ba(n)}=${Ba(e)}`).join("")
}
function Jm(i) {
    let n = Object.entries(i).map( ([e,t]) => Array.isArray(t) ? t.map(r => `${Qr(e)}=${Qr(r)}`).join("&") : `${Qr(e)}=${Qr(t)}`).filter(e => e);
    return n.length ? `?${n.join("&")}` : ""
}
var ep = /^[^\/()?;#]+/;
function Na(i) {
    let n = i.match(ep);
    return n ? n[0] : ""
}
var tp = /^[^\/()?;=#]+/;
function ip(i) {
    let n = i.match(tp);
    return n ? n[0] : ""
}
var np = /^[^=?&#]+/;
function rp(i) {
    let n = i.match(np);
    return n ? n[0] : ""
}
var op = /^[^&#]+/;
function ap(i) {
    let n = i.match(op);
    return n ? n[0] : ""
}
var Ua = class {
    constructor(n) {
        this.url = n,
        this.remaining = n
    }
    parseRootSegment() {
        return this.consumeOptional("/"),
        this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new ne([],{}) : new ne([],this.parseChildren())
    }
    parseQueryParams() {
        let n = {};
        if (this.consumeOptional("?"))
            do
                this.parseQueryParam(n);
            while (this.consumeOptional("&"));
        return n
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "")
            return {};
        this.consumeOptional("/");
        let n = [];
        for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
            this.capture("/"),
            n.push(this.parseSegment());
        let e = {};
        this.peekStartsWith("/(") && (this.capture("/"),
        e = this.parseParens(!0));
        let t = {};
        return this.peekStartsWith("(") && (t = this.parseParens(!1)),
        (n.length > 0 || Object.keys(e).length > 0) && (t[q] = new ne(n,e)),
        t
    }
    parseSegment() {
        let n = Na(this.remaining);
        if (n === "" && this.peekStartsWith(";"))
            throw new re(4009,!1);
        return this.capture(n),
        new ui(io(n),this.parseMatrixParams())
    }
    parseMatrixParams() {
        let n = {};
        for (; this.consumeOptional(";"); )
            this.parseParam(n);
        return n
    }
    parseParam(n) {
        let e = ip(this.remaining);
        if (!e)
            return;
        this.capture(e);
        let t = "";
        if (this.consumeOptional("=")) {
            let r = Na(this.remaining);
            r && (t = r,
            this.capture(t))
        }
        n[io(e)] = io(t)
    }
    parseQueryParam(n) {
        let e = rp(this.remaining);
        if (!e)
            return;
        this.capture(e);
        let t = "";
        if (this.consumeOptional("=")) {
            let a = ap(this.remaining);
            a && (t = a,
            this.capture(t))
        }
        let r = Wl(e)
          , o = Wl(t);
        if (n.hasOwnProperty(r)) {
            let a = n[r];
            Array.isArray(a) || (a = [a],
            n[r] = a),
            a.push(o)
        } else
            n[r] = o
    }
    parseParens(n) {
        let e = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
            let t = Na(this.remaining)
              , r = this.remaining[t.length];
            if (r !== "/" && r !== ")" && r !== ";")
                throw new re(4010,!1);
            let o;
            t.indexOf(":") > -1 ? (o = t.slice(0, t.indexOf(":")),
            this.capture(o),
            this.capture(":")) : n && (o = q);
            let a = this.parseChildren();
            e[o] = Object.keys(a).length === 1 ? a[q] : new ne([],a),
            this.consumeOptional("//")
        }
        return e
    }
    peekStartsWith(n) {
        return this.remaining.startsWith(n)
    }
    consumeOptional(n) {
        return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length),
        !0) : !1
    }
    capture(n) {
        if (!this.consumeOptional(n))
            throw new re(4011,!1)
    }
}
;
function oc(i) {
    return i.segments.length > 0 ? new ne([],{
        [q]: i
    }) : i
}
function ac(i) {
    let n = {};
    for (let[t,r] of Object.entries(i.children)) {
        let o = ac(r);
        if (t === q && o.segments.length === 0 && o.hasChildren())
            for (let[a,s] of Object.entries(o.children))
                n[a] = s;
        else
            (o.segments.length > 0 || o.hasChildren()) && (n[t] = o)
    }
    let e = new ne(i.segments,n);
    return sp(e)
}
function sp(i) {
    if (i.numberOfChildren === 1 && i.children[q]) {
        let n = i.children[q];
        return new ne(i.segments.concat(n.segments),n.children)
    }
    return i
}
function zi(i) {
    return i instanceof Bt
}
function dp(i, n, e=null, t=null) {
    let r = sc(i);
    return dc(r, n, e, t)
}
function sc(i) {
    let n;
    function e(o) {
        let a = {};
        for (let d of o.children) {
            let c = e(d);
            a[d.outlet] = c
        }
        let s = new ne(o.url,a);
        return o === i && (n = s),
        s
    }
    let t = e(i.root)
      , r = oc(t);
    return n ?? r
}
function dc(i, n, e, t) {
    let r = i;
    for (; r.parent; )
        r = r.parent;
    if (n.length === 0)
        return Pa(r, r, r, e, t);
    let o = lp(n);
    if (o.toRoot())
        return Pa(r, r, new ne([],{}), e, t);
    let a = cp(o, r, i)
      , s = a.processChildren ? Ln(a.segmentGroup, a.index, o.commands) : cc(a.segmentGroup, a.index, o.commands);
    return Pa(r, a.segmentGroup, s, e, t)
}
function ro(i) {
    return typeof i == "object" && i != null && !i.outlets && !i.segmentPath
}
function Bn(i) {
    return typeof i == "object" && i != null && i.outlets
}
function Pa(i, n, e, t, r) {
    let o = {};
    t && Object.entries(t).forEach( ([d,c]) => {
        o[d] = Array.isArray(c) ? c.map(m => `${m}`) : `${c}`
    }
    );
    let a;
    i === n ? a = e : a = lc(i, n, e);
    let s = oc(ac(a));
    return new Bt(s,o,r)
}
function lc(i, n, e) {
    let t = {};
    return Object.entries(i.children).forEach( ([r,o]) => {
        o === n ? t[r] = e : t[r] = lc(o, n, e)
    }
    ),
    new ne(i.segments,t)
}
var oo = class {
    constructor(n, e, t) {
        if (this.isAbsolute = n,
        this.numberOfDoubleDots = e,
        this.commands = t,
        n && t.length > 0 && ro(t[0]))
            throw new re(4003,!1);
        let r = t.find(Bn);
        if (r && r !== Ql(t))
            throw new re(4004,!1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
}
;
function lp(i) {
    if (typeof i[0] == "string" && i.length === 1 && i[0] === "/")
        return new oo(!0,0,i);
    let n = 0
      , e = !1
      , t = i.reduce( (r, o, a) => {
        if (typeof o == "object" && o != null) {
            if (o.outlets) {
                let s = {};
                return Object.entries(o.outlets).forEach( ([d,c]) => {
                    s[d] = typeof c == "string" ? c.split("/") : c
                }
                ),
                [...r, {
                    outlets: s
                }]
            }
            if (o.segmentPath)
                return [...r, o.segmentPath]
        }
        return typeof o != "string" ? [...r, o] : a === 0 ? (o.split("/").forEach( (s, d) => {
            d == 0 && s === "." || (d == 0 && s === "" ? e = !0 : s === ".." ? n++ : s != "" && r.push(s))
        }
        ),
        r) : [...r, o]
    }
    , []);
    return new oo(e,n,t)
}
var Vi = class {
    constructor(n, e, t) {
        this.segmentGroup = n,
        this.processChildren = e,
        this.index = t
    }
}
;
function cp(i, n, e) {
    if (i.isAbsolute)
        return new Vi(n,!0,0);
    if (!e)
        return new Vi(n,!1,NaN);
    if (e.parent === null)
        return new Vi(e,!0,0);
    let t = ro(i.commands[0]) ? 0 : 1
      , r = e.segments.length - 1 + t;
    return up(e, r, i.numberOfDoubleDots)
}
function up(i, n, e) {
    let t = i
      , r = n
      , o = e;
    for (; o > r; ) {
        if (o -= r,
        t = t.parent,
        !t)
            throw new re(4005,!1);
        r = t.segments.length
    }
    return new Vi(t,!1,r - o)
}
function hp(i) {
    return Bn(i[0]) ? i[0].outlets : {
        [q]: i
    }
}
function cc(i, n, e) {
    if (i ??= new ne([],{}),
    i.segments.length === 0 && i.hasChildren())
        return Ln(i, n, e);
    let t = mp(i, n, e)
      , r = e.slice(t.commandIndex);
    if (t.match && t.pathIndex < i.segments.length) {
        let o = new ne(i.segments.slice(0, t.pathIndex),{});
        return o.children[q] = new ne(i.segments.slice(t.pathIndex),i.children),
        Ln(o, 0, r)
    } else
        return t.match && r.length === 0 ? new ne(i.segments,{}) : t.match && !i.hasChildren() ? Ha(i, n, e) : t.match ? Ln(i, 0, r) : Ha(i, n, e)
}
function Ln(i, n, e) {
    if (e.length === 0)
        return new ne(i.segments,{});
    {
        let t = hp(e)
          , r = {};
        if (Object.keys(t).some(o => o !== q) && i.children[q] && i.numberOfChildren === 1 && i.children[q].segments.length === 0) {
            let o = Ln(i.children[q], n, e);
            return new ne(i.segments,o.children)
        }
        return Object.entries(t).forEach( ([o,a]) => {
            typeof a == "string" && (a = [a]),
            a !== null && (r[o] = cc(i.children[o], n, a))
        }
        ),
        Object.entries(i.children).forEach( ([o,a]) => {
            t[o] === void 0 && (r[o] = a)
        }
        ),
        new ne(i.segments,r)
    }
}
function mp(i, n, e) {
    let t = 0
      , r = n
      , o = {
        match: !1,
        pathIndex: 0,
        commandIndex: 0
    };
    for (; r < i.segments.length; ) {
        if (t >= e.length)
            return o;
        let a = i.segments[r]
          , s = e[t];
        if (Bn(s))
            break;
        let d = `${s}`
          , c = t < e.length - 1 ? e[t + 1] : null;
        if (r > 0 && d === void 0)
            break;
        if (d && c && typeof c == "object" && c.outlets === void 0) {
            if (!Xl(d, c, a))
                return o;
            t += 2
        } else {
            if (!Xl(d, {}, a))
                return o;
            t++
        }
        r++
    }
    return {
        match: !0,
        pathIndex: r,
        commandIndex: t
    }
}
function Ha(i, n, e) {
    let t = i.segments.slice(0, n)
      , r = 0;
    for (; r < e.length; ) {
        let o = e[r];
        if (Bn(o)) {
            let d = pp(o.outlets);
            return new ne(t,d)
        }
        if (r === 0 && ro(e[0])) {
            let d = i.segments[n];
            t.push(new ui(d.path,Gl(e[0]))),
            r++;
            continue
        }
        let a = Bn(o) ? o.outlets[q] : `${o}`
          , s = r < e.length - 1 ? e[r + 1] : null;
        a && s && ro(s) ? (t.push(new ui(a,Gl(s))),
        r += 2) : (t.push(new ui(a,{})),
        r++)
    }
    return new ne(t,{})
}
function pp(i) {
    let n = {};
    return Object.entries(i).forEach( ([e,t]) => {
        typeof t == "string" && (t = [t]),
        t !== null && (n[e] = Ha(new ne([],{}), 0, t))
    }
    ),
    n
}
function Gl(i) {
    let n = {};
    return Object.entries(i).forEach( ([e,t]) => n[e] = `${t}`),
    n
}
function Xl(i, n, e) {
    return i == e.path && ct(n, e.parameters)
}
var jn = "imperative"
  , ke = function(i) {
    return i[i.NavigationStart = 0] = "NavigationStart",
    i[i.NavigationEnd = 1] = "NavigationEnd",
    i[i.NavigationCancel = 2] = "NavigationCancel",
    i[i.NavigationError = 3] = "NavigationError",
    i[i.RoutesRecognized = 4] = "RoutesRecognized",
    i[i.ResolveStart = 5] = "ResolveStart",
    i[i.ResolveEnd = 6] = "ResolveEnd",
    i[i.GuardsCheckStart = 7] = "GuardsCheckStart",
    i[i.GuardsCheckEnd = 8] = "GuardsCheckEnd",
    i[i.RouteConfigLoadStart = 9] = "RouteConfigLoadStart",
    i[i.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd",
    i[i.ChildActivationStart = 11] = "ChildActivationStart",
    i[i.ChildActivationEnd = 12] = "ChildActivationEnd",
    i[i.ActivationStart = 13] = "ActivationStart",
    i[i.ActivationEnd = 14] = "ActivationEnd",
    i[i.Scroll = 15] = "Scroll",
    i[i.NavigationSkipped = 16] = "NavigationSkipped",
    i
}(ke || {})
  , Ze = class {
    constructor(n, e) {
        this.id = n,
        this.url = e
    }
}
  , Un = class extends Ze {
    constructor(n, e, t="imperative", r=null) {
        super(n, e),
        this.type = ke.NavigationStart,
        this.navigationTrigger = t,
        this.restoredState = r
    }
    toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
    }
}
  , mi = class extends Ze {
    constructor(n, e, t) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.type = ke.NavigationEnd
    }
    toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
    }
}
  , $e = function(i) {
    return i[i.Redirect = 0] = "Redirect",
    i[i.SupersededByNewNavigation = 1] = "SupersededByNewNavigation",
    i[i.NoDataFromResolver = 2] = "NoDataFromResolver",
    i[i.GuardRejected = 3] = "GuardRejected",
    i
}($e || {})
  , $a = function(i) {
    return i[i.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation",
    i[i.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy",
    i
}($a || {})
  , Ut = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.reason = t,
        this.code = r,
        this.type = ke.NavigationCancel
    }
    toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
    }
}
  , pi = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.reason = t,
        this.code = r,
        this.type = ke.NavigationSkipped
    }
}
  , Hn = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.error = t,
        this.target = r,
        this.type = ke.NavigationError
    }
    toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
    }
}
  , ao = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.type = ke.RoutesRecognized
    }
    toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Ya = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.type = ke.GuardsCheckStart
    }
    toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , qa = class extends Ze {
    constructor(n, e, t, r, o) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.shouldActivate = o,
        this.type = ke.GuardsCheckEnd
    }
    toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
    }
}
  , Wa = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.type = ke.ResolveStart
    }
    toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Ga = class extends Ze {
    constructor(n, e, t, r) {
        super(n, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.type = ke.ResolveEnd
    }
    toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Xa = class {
    constructor(n) {
        this.route = n,
        this.type = ke.RouteConfigLoadStart
    }
    toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`
    }
}
  , Za = class {
    constructor(n) {
        this.route = n,
        this.type = ke.RouteConfigLoadEnd
    }
    toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`
    }
}
  , Ka = class {
    constructor(n) {
        this.snapshot = n,
        this.type = ke.ChildActivationStart
    }
    toString() {
        return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , Qa = class {
    constructor(n) {
        this.snapshot = n,
        this.type = ke.ChildActivationEnd
    }
    toString() {
        return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , Ja = class {
    constructor(n) {
        this.snapshot = n,
        this.type = ke.ActivationStart
    }
    toString() {
        return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , es = class {
    constructor(n) {
        this.snapshot = n,
        this.type = ke.ActivationEnd
    }
    toString() {
        return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
;
var $n = class {
}
  , Yn = class {
    constructor(n) {
        this.url = n
    }
}
;
var ts = class {
    constructor() {
        this.outlet = null,
        this.route = null,
        this.injector = null,
        this.children = new mo,
        this.attachRef = null
    }
}
  , mo = ( () => {
    class i {
        constructor() {
            this.contexts = new Map
        }
        onChildOutletCreated(e, t) {
            let r = this.getOrCreateContext(e);
            r.outlet = t,
            this.contexts.set(e, r)
        }
        onChildOutletDestroyed(e) {
            let t = this.getContext(e);
            t && (t.outlet = null,
            t.attachRef = null)
        }
        onOutletDeactivated() {
            let e = this.contexts;
            return this.contexts = new Map,
            e
        }
        onOutletReAttached(e) {
            this.contexts = e
        }
        getOrCreateContext(e) {
            let t = this.getContext(e);
            return t || (t = new ts,
            this.contexts.set(e, t)),
            t
        }
        getContext(e) {
            return this.contexts.get(e) || null
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , so = class {
    constructor(n) {
        this._root = n
    }
    get root() {
        return this._root.value
    }
    parent(n) {
        let e = this.pathFromRoot(n);
        return e.length > 1 ? e[e.length - 2] : null
    }
    children(n) {
        let e = is(n, this._root);
        return e ? e.children.map(t => t.value) : []
    }
    firstChild(n) {
        let e = is(n, this._root);
        return e && e.children.length > 0 ? e.children[0].value : null
    }
    siblings(n) {
        let e = ns(n, this._root);
        return e.length < 2 ? [] : e[e.length - 2].children.map(r => r.value).filter(r => r !== n)
    }
    pathFromRoot(n) {
        return ns(n, this._root).map(e => e.value)
    }
}
;
function is(i, n) {
    if (i === n.value)
        return n;
    for (let e of n.children) {
        let t = is(i, e);
        if (t)
            return t
    }
    return null
}
function ns(i, n) {
    if (i === n.value)
        return [n];
    for (let e of n.children) {
        let t = ns(i, e);
        if (t.length)
            return t.unshift(n),
            t
    }
    return []
}
var He = class {
    constructor(n, e) {
        this.value = n,
        this.children = e
    }
    toString() {
        return `TreeNode(${this.value})`
    }
}
;
function Pi(i) {
    let n = {};
    return i && i.children.forEach(e => n[e.value.outlet] = e),
    n
}
var lo = class extends so {
    constructor(n, e) {
        super(n),
        this.snapshot = e,
        ps(this, n)
    }
    toString() {
        return this.snapshot.toString()
    }
}
;
function uc(i) {
    let n = fp(i)
      , e = new ze([new ui("",{})])
      , t = new ze({})
      , r = new ze({})
      , o = new ze({})
      , a = new ze("")
      , s = new ut(e,t,o,a,r,q,i,n.root);
    return s.snapshot = n.root,
    new lo(new He(s,[]),n)
}
function fp(i) {
    let n = {}
      , e = {}
      , t = {}
      , r = ""
      , o = new qn([],n,t,r,e,q,i,null,{});
    return new co("",new He(o,[]))
}
var ut = class {
    constructor(n, e, t, r, o, a, s, d) {
        this.urlSubject = n,
        this.paramsSubject = e,
        this.queryParamsSubject = t,
        this.fragmentSubject = r,
        this.dataSubject = o,
        this.outlet = a,
        this.component = s,
        this._futureSnapshot = d,
        this.title = this.dataSubject?.pipe(N(c => c[Xn])) ?? E(void 0),
        this.url = n,
        this.params = e,
        this.queryParams = t,
        this.fragment = r,
        this.data = o
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= this.params.pipe(N(n => ji(n))),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(N(n => ji(n))),
        this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
}
;
function ms(i, n, e="emptyOnly") {
    let t, {routeConfig: r} = i;
    return n !== null && (e === "always" || r?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? t = {
        params: v(v({}, n.params), i.params),
        data: v(v({}, n.data), i.data),
        resolve: v(v(v(v({}, i.data), n.data), r?.data), i._resolvedData)
    } : t = {
        params: v({}, i.params),
        data: v({}, i.data),
        resolve: v(v({}, i.data), i._resolvedData ?? {})
    },
    r && mc(r) && (t.resolve[Xn] = r.title),
    t
}
var qn = class {
    get title() {
        return this.data?.[Xn]
    }
    constructor(n, e, t, r, o, a, s, d, c) {
        this.url = n,
        this.params = e,
        this.queryParams = t,
        this.fragment = r,
        this.data = o,
        this.outlet = a,
        this.component = s,
        this.routeConfig = d,
        this._resolve = c
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= ji(this.params),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= ji(this.queryParams),
        this._queryParamMap
    }
    toString() {
        let n = this.url.map(t => t.toString()).join("/")
          , e = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${n}', path:'${e}')`
    }
}
  , co = class extends so {
    constructor(n, e) {
        super(e),
        this.url = n,
        ps(this, e)
    }
    toString() {
        return hc(this._root)
    }
}
;
function ps(i, n) {
    n.value._routerState = i,
    n.children.forEach(e => ps(i, e))
}
function hc(i) {
    let n = i.children.length > 0 ? ` { ${i.children.map(hc).join(", ")} } ` : "";
    return `${i.value}${n}`
}
function Va(i) {
    if (i.snapshot) {
        let n = i.snapshot
          , e = i._futureSnapshot;
        i.snapshot = e,
        ct(n.queryParams, e.queryParams) || i.queryParamsSubject.next(e.queryParams),
        n.fragment !== e.fragment && i.fragmentSubject.next(e.fragment),
        ct(n.params, e.params) || i.paramsSubject.next(e.params),
        $m(n.url, e.url) || i.urlSubject.next(e.url),
        ct(n.data, e.data) || i.dataSubject.next(e.data)
    } else
        i.snapshot = i._futureSnapshot,
        i.dataSubject.next(i._futureSnapshot.data)
}
function rs(i, n) {
    let e = ct(i.params, n.params) && Gm(i.url, n.url)
      , t = !i.parent != !n.parent;
    return e && !t && (!i.parent || rs(i.parent, n.parent))
}
function mc(i) {
    return typeof i.title == "string" || i.title === null
}
var fs = ( () => {
    class i {
        constructor() {
            this.activated = null,
            this._activatedRoute = null,
            this.name = q,
            this.activateEvents = new M,
            this.deactivateEvents = new M,
            this.attachEvents = new M,
            this.detachEvents = new M,
            this.parentContexts = g(mo),
            this.location = g(st),
            this.changeDetector = g(le),
            this.environmentInjector = g(Mi),
            this.inputBinder = g(gs, {
                optional: !0
            }),
            this.supportsBindingToComponentInputs = !0
        }
        get activatedComponentRef() {
            return this.activated
        }
        ngOnChanges(e) {
            if (e.name) {
                let {firstChange: t, previousValue: r} = e.name;
                if (t)
                    return;
                this.isTrackedInParentContexts(r) && (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(r)),
                this.initializeOutletWithName()
            }
        }
        ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name),
            this.inputBinder?.unsubscribeFromRouteData(this)
        }
        isTrackedInParentContexts(e) {
            return this.parentContexts.getContext(e)?.outlet === this
        }
        ngOnInit() {
            this.initializeOutletWithName()
        }
        initializeOutletWithName() {
            if (this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated)
                return;
            let e = this.parentContexts.getContext(this.name);
            e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector))
        }
        get isActivated() {
            return !!this.activated
        }
        get component() {
            if (!this.activated)
                throw new re(4012,!1);
            return this.activated.instance
        }
        get activatedRoute() {
            if (!this.activated)
                throw new re(4012,!1);
            return this._activatedRoute
        }
        get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }
        detach() {
            if (!this.activated)
                throw new re(4012,!1);
            this.location.detach();
            let e = this.activated;
            return this.activated = null,
            this._activatedRoute = null,
            this.detachEvents.emit(e.instance),
            e
        }
        attach(e, t) {
            this.activated = e,
            this._activatedRoute = t,
            this.location.insert(e.hostView),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.attachEvents.emit(e.instance)
        }
        deactivate() {
            if (this.activated) {
                let e = this.component;
                this.activated.destroy(),
                this.activated = null,
                this._activatedRoute = null,
                this.deactivateEvents.emit(e)
            }
        }
        activateWith(e, t) {
            if (this.isActivated)
                throw new re(4013,!1);
            this._activatedRoute = e;
            let r = this.location
              , a = e.snapshot.component
              , s = this.parentContexts.getOrCreateContext(this.name).children
              , d = new os(e,s,r.injector);
            this.activated = r.createComponent(a, {
                index: r.length,
                injector: d,
                environmentInjector: t ?? this.environmentInjector
            }),
            this.changeDetector.markForCheck(),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.activateEvents.emit(this.activated.instance)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["router-outlet"]],
            inputs: {
                name: "name"
            },
            outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
                attachEvents: "attach",
                detachEvents: "detach"
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [he]
        })
        }
    }
    return i
}
)()
  , os = class i {
    __ngOutletInjector(n) {
        return new i(this.route,this.childContexts,n)
    }
    constructor(n, e, t) {
        this.route = n,
        this.childContexts = e,
        this.parent = t
    }
    get(n, e) {
        return n === ut ? this.route : n === mo ? this.childContexts : this.parent.get(n, e)
    }
}
  , gs = new x("");
function gp(i, n, e) {
    let t = Wn(i, n._root, e ? e._root : void 0);
    return new lo(t,n)
}
function Wn(i, n, e) {
    if (e && i.shouldReuseRoute(n.value, e.value.snapshot)) {
        let t = e.value;
        t._futureSnapshot = n.value;
        let r = _p(i, n, e);
        return new He(t,r)
    } else {
        if (i.shouldAttach(n.value)) {
            let o = i.retrieve(n.value);
            if (o !== null) {
                let a = o.route;
                return a.value._futureSnapshot = n.value,
                a.children = n.children.map(s => Wn(i, s)),
                a
            }
        }
        let t = bp(n.value)
          , r = n.children.map(o => Wn(i, o));
        return new He(t,r)
    }
}
function _p(i, n, e) {
    return n.children.map(t => {
        for (let r of e.children)
            if (i.shouldReuseRoute(t.value, r.value.snapshot))
                return Wn(i, t, r);
        return Wn(i, t)
    }
    )
}
function bp(i) {
    return new ut(new ze(i.url),new ze(i.params),new ze(i.queryParams),new ze(i.fragment),new ze(i.data),i.outlet,i.component,i)
}
var pc = "ngNavigationCancelingError";
function fc(i, n) {
    let {redirectTo: e, navigationBehaviorOptions: t} = zi(n) ? {
        redirectTo: n,
        navigationBehaviorOptions: void 0
    } : n
      , r = gc(!1, $e.Redirect);
    return r.url = e,
    r.navigationBehaviorOptions = t,
    r
}
function gc(i, n) {
    let e = new Error(`NavigationCancelingError: ${i || ""}`);
    return e[pc] = !0,
    e.cancellationCode = n,
    e
}
function vp(i) {
    return _c(i) && zi(i.url)
}
function _c(i) {
    return !!i && i[pc]
}
var yp = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [L],
            decls: 1,
            vars: 0,
            template: function(t, r) {
                t & 1 && D(0, "router-outlet")
            },
            dependencies: [fs],
            encapsulation: 2
        })
        }
    }
    return i
}
)();
function xp(i, n) {
    return i.providers && !i._injector && (i._injector = Jd(i.providers, n, `Route: ${i.path}`)),
    i._injector ?? n
}
function _s(i) {
    let n = i.children && i.children.map(_s)
      , e = n ? ie(v({}, i), {
        children: n
    }) : v({}, i);
    return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== q && (e.component = yp),
    e
}
function ht(i) {
    return i.outlet || q
}
function wp(i, n) {
    let e = i.filter(t => ht(t) === n);
    return e.push(...i.filter(t => ht(t) !== n)),
    e
}
function Zn(i) {
    if (!i)
        return null;
    if (i.routeConfig?._injector)
        return i.routeConfig._injector;
    for (let n = i.parent; n; n = n.parent) {
        let e = n.routeConfig;
        if (e?._loadedInjector)
            return e._loadedInjector;
        if (e?._injector)
            return e._injector
    }
    return null
}
var Cp = (i, n, e, t) => N(r => (new as(n,r.targetRouterState,r.currentRouterState,e,t).activate(i),
r))
  , as = class {
    constructor(n, e, t, r, o) {
        this.routeReuseStrategy = n,
        this.futureState = e,
        this.currState = t,
        this.forwardEvent = r,
        this.inputBindingEnabled = o
    }
    activate(n) {
        let e = this.futureState._root
          , t = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(e, t, n),
        Va(this.futureState.root),
        this.activateChildRoutes(e, t, n)
    }
    deactivateChildRoutes(n, e, t) {
        let r = Pi(e);
        n.children.forEach(o => {
            let a = o.value.outlet;
            this.deactivateRoutes(o, r[a], t),
            delete r[a]
        }
        ),
        Object.values(r).forEach(o => {
            this.deactivateRouteAndItsChildren(o, t)
        }
        )
    }
    deactivateRoutes(n, e, t) {
        let r = n.value
          , o = e ? e.value : null;
        if (r === o)
            if (r.component) {
                let a = t.getContext(r.outlet);
                a && this.deactivateChildRoutes(n, e, a.children)
            } else
                this.deactivateChildRoutes(n, e, t);
        else
            o && this.deactivateRouteAndItsChildren(e, t)
    }
    deactivateRouteAndItsChildren(n, e) {
        n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e)
    }
    detachAndStoreRouteSubtree(n, e) {
        let t = e.getContext(n.value.outlet)
          , r = t && n.value.component ? t.children : e
          , o = Pi(n);
        for (let a of Object.values(o))
            this.deactivateRouteAndItsChildren(a, r);
        if (t && t.outlet) {
            let a = t.outlet.detach()
              , s = t.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
                componentRef: a,
                route: n,
                contexts: s
            })
        }
    }
    deactivateRouteAndOutlet(n, e) {
        let t = e.getContext(n.value.outlet)
          , r = t && n.value.component ? t.children : e
          , o = Pi(n);
        for (let a of Object.values(o))
            this.deactivateRouteAndItsChildren(a, r);
        t && (t.outlet && (t.outlet.deactivate(),
        t.children.onOutletDeactivated()),
        t.attachRef = null,
        t.route = null)
    }
    activateChildRoutes(n, e, t) {
        let r = Pi(e);
        n.children.forEach(o => {
            this.activateRoutes(o, r[o.value.outlet], t),
            this.forwardEvent(new es(o.value.snapshot))
        }
        ),
        n.children.length && this.forwardEvent(new Qa(n.value.snapshot))
    }
    activateRoutes(n, e, t) {
        let r = n.value
          , o = e ? e.value : null;
        if (Va(r),
        r === o)
            if (r.component) {
                let a = t.getOrCreateContext(r.outlet);
                this.activateChildRoutes(n, e, a.children)
            } else
                this.activateChildRoutes(n, e, t);
        else if (r.component) {
            let a = t.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                let s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null),
                a.children.onOutletReAttached(s.contexts),
                a.attachRef = s.componentRef,
                a.route = s.route.value,
                a.outlet && a.outlet.attach(s.componentRef, s.route.value),
                Va(s.route.value),
                this.activateChildRoutes(n, null, a.children)
            } else {
                let s = Zn(r.snapshot);
                a.attachRef = null,
                a.route = r,
                a.injector = s,
                a.outlet && a.outlet.activateWith(r, a.injector),
                this.activateChildRoutes(n, null, a.children)
            }
        } else
            this.activateChildRoutes(n, null, t)
    }
}
  , uo = class {
    constructor(n) {
        this.path = n,
        this.route = this.path[this.path.length - 1]
    }
}
  , Li = class {
    constructor(n, e) {
        this.component = n,
        this.route = e
    }
}
;
function Dp(i, n, e) {
    let t = i._root
      , r = n ? n._root : null;
    return Pn(t, r, e, [t.value])
}
function Ep(i) {
    let n = i.routeConfig ? i.routeConfig.canActivateChild : null;
    return !n || n.length === 0 ? null : {
        node: i,
        guards: n
    }
}
function Ui(i, n) {
    let e = Symbol()
      , t = n.get(i, e);
    return t === e ? typeof i == "function" && !jd(i) ? i : n.get(i) : t
}
function Pn(i, n, e, t, r={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = Pi(n);
    return i.children.forEach(a => {
        Ip(a, o[a.value.outlet], e, t.concat([a.value]), r),
        delete o[a.value.outlet]
    }
    ),
    Object.entries(o).forEach( ([a,s]) => zn(s, e.getContext(a), r)),
    r
}
function Ip(i, n, e, t, r={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = i.value
      , a = n ? n.value : null
      , s = e ? e.getContext(i.value.outlet) : null;
    if (a && o.routeConfig === a.routeConfig) {
        let d = Mp(a, o, o.routeConfig.runGuardsAndResolvers);
        d ? r.canActivateChecks.push(new uo(t)) : (o.data = a.data,
        o._resolvedData = a._resolvedData),
        o.component ? Pn(i, n, s ? s.children : null, t, r) : Pn(i, n, e, t, r),
        d && s && s.outlet && s.outlet.isActivated && r.canDeactivateChecks.push(new Li(s.outlet.component,a))
    } else
        a && zn(n, s, r),
        r.canActivateChecks.push(new uo(t)),
        o.component ? Pn(i, null, s ? s.children : null, t, r) : Pn(i, null, e, t, r);
    return r
}
function Mp(i, n, e) {
    if (typeof e == "function")
        return e(i, n);
    switch (e) {
    case "pathParamsChange":
        return !hi(i.url, n.url);
    case "pathParamsOrQueryParamsChange":
        return !hi(i.url, n.url) || !ct(i.queryParams, n.queryParams);
    case "always":
        return !0;
    case "paramsOrQueryParamsChange":
        return !rs(i, n) || !ct(i.queryParams, n.queryParams);
    case "paramsChange":
    default:
        return !rs(i, n)
    }
}
function zn(i, n, e) {
    let t = Pi(i)
      , r = i.value;
    Object.entries(t).forEach( ([o,a]) => {
        r.component ? n ? zn(a, n.children.getContext(o), e) : zn(a, null, e) : zn(a, n, e)
    }
    ),
    r.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new Li(n.outlet.component,r)) : e.canDeactivateChecks.push(new Li(null,r)) : e.canDeactivateChecks.push(new Li(null,r))
}
function Kn(i) {
    return typeof i == "function"
}
function Ap(i) {
    return typeof i == "boolean"
}
function Sp(i) {
    return i && Kn(i.canLoad)
}
function kp(i) {
    return i && Kn(i.canActivate)
}
function Rp(i) {
    return i && Kn(i.canActivateChild)
}
function Tp(i) {
    return i && Kn(i.canDeactivate)
}
function Fp(i) {
    return i && Kn(i.canMatch)
}
function bc(i) {
    return i instanceof Od || i?.name === "EmptyError"
}
var Jr = Symbol("INITIAL_VALUE");
function Bi() {
    return Ve(i => bn(i.map(n => n.pipe(fe(1), Ce(Jr)))).pipe(N(n => {
        for (let e of n)
            if (e !== !0) {
                if (e === Jr)
                    return Jr;
                if (e === !1 || e instanceof Bt)
                    return e
            }
        return !0
    }
    ), pe(n => n !== Jr), fe(1)))
}
function Op(i, n) {
    return qe(e => {
        let {targetSnapshot: t, currentSnapshot: r, guards: {canActivateChecks: o, canDeactivateChecks: a}} = e;
        return a.length === 0 && o.length === 0 ? E(ie(v({}, e), {
            guardsResult: !0
        })) : Np(a, t, r, i).pipe(qe(s => s && Ap(s) ? Pp(t, o, i, n) : E(s)), N(s => ie(v({}, e), {
            guardsResult: s
        })))
    }
    )
}
function Np(i, n, e, t) {
    return Pe(i).pipe(qe(r => Bp(r.component, r.route, e, n, t)), kt(r => r !== !0, !0))
}
function Pp(i, n, e, t) {
    return Pe(n).pipe(ni(r => Cr(Lp(r.route.parent, t), Vp(r.route, t), zp(i, r.path, e), jp(i, r.route, e))), kt(r => r !== !0, !0))
}
function Vp(i, n) {
    return i !== null && n && n(new Ja(i)),
    E(!0)
}
function Lp(i, n) {
    return i !== null && n && n(new Ka(i)),
    E(!0)
}
function jp(i, n, e) {
    let t = n.routeConfig ? n.routeConfig.canActivate : null;
    if (!t || t.length === 0)
        return E(!0);
    let r = t.map(o => ii( () => {
        let a = Zn(n) ?? e
          , s = Ui(o, a)
          , d = kp(s) ? s.canActivate(n, i) : vt(a, () => s(n, i));
        return Ht(d).pipe(kt())
    }
    ));
    return E(r).pipe(Bi())
}
function zp(i, n, e) {
    let t = n[n.length - 1]
      , o = n.slice(0, n.length - 1).reverse().map(a => Ep(a)).filter(a => a !== null).map(a => ii( () => {
        let s = a.guards.map(d => {
            let c = Zn(a.node) ?? e
              , m = Ui(d, c)
              , b = Rp(m) ? m.canActivateChild(t, i) : vt(c, () => m(t, i));
            return Ht(b).pipe(kt())
        }
        );
        return E(s).pipe(Bi())
    }
    ));
    return E(o).pipe(Bi())
}
function Bp(i, n, e, t, r) {
    let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
    if (!o || o.length === 0)
        return E(!0);
    let a = o.map(s => {
        let d = Zn(n) ?? r
          , c = Ui(s, d)
          , m = Tp(c) ? c.canDeactivate(i, n, e, t) : vt(d, () => c(i, n, e, t));
        return Ht(m).pipe(kt())
    }
    );
    return E(a).pipe(Bi())
}
function Up(i, n, e, t) {
    let r = n.canLoad;
    if (r === void 0 || r.length === 0)
        return E(!0);
    let o = r.map(a => {
        let s = Ui(a, i)
          , d = Sp(s) ? s.canLoad(n, e) : vt(i, () => s(n, e));
        return Ht(d)
    }
    );
    return E(o).pipe(Bi(), vc(t))
}
function vc(i) {
    return Fd(ue(n => {
        if (zi(n))
            throw fc(i, n)
    }
    ), N(n => n === !0))
}
function Hp(i, n, e, t) {
    let r = n.canMatch;
    if (!r || r.length === 0)
        return E(!0);
    let o = r.map(a => {
        let s = Ui(a, i)
          , d = Fp(s) ? s.canMatch(n, e) : vt(i, () => s(n, e));
        return Ht(d)
    }
    );
    return E(o).pipe(Bi(), vc(t))
}
var Gn = class {
    constructor(n) {
        this.segmentGroup = n || null
    }
}
  , ho = class extends Error {
    constructor(n) {
        super(),
        this.urlTree = n
    }
}
;
function Ni(i) {
    return ti(new Gn(i))
}
function $p(i) {
    return ti(new re(4e3,!1))
}
function Yp(i) {
    return ti(gc(!1, $e.GuardRejected))
}
var ss = class {
    constructor(n, e) {
        this.urlSerializer = n,
        this.urlTree = e
    }
    lineralizeSegments(n, e) {
        let t = []
          , r = e.root;
        for (; ; ) {
            if (t = t.concat(r.segments),
            r.numberOfChildren === 0)
                return E(t);
            if (r.numberOfChildren > 1 || !r.children[q])
                return $p(n.redirectTo);
            r = r.children[q]
        }
    }
    applyRedirectCommands(n, e, t) {
        let r = this.applyRedirectCreateUrlTree(e, this.urlSerializer.parse(e), n, t);
        if (e.startsWith("/"))
            throw new ho(r);
        return r
    }
    applyRedirectCreateUrlTree(n, e, t, r) {
        let o = this.createSegmentGroup(n, e.root, t, r);
        return new Bt(o,this.createQueryParams(e.queryParams, this.urlTree.queryParams),e.fragment)
    }
    createQueryParams(n, e) {
        let t = {};
        return Object.entries(n).forEach( ([r,o]) => {
            if (typeof o == "string" && o.startsWith(":")) {
                let s = o.substring(1);
                t[r] = e[s]
            } else
                t[r] = o
        }
        ),
        t
    }
    createSegmentGroup(n, e, t, r) {
        let o = this.createSegments(n, e.segments, t, r)
          , a = {};
        return Object.entries(e.children).forEach( ([s,d]) => {
            a[s] = this.createSegmentGroup(n, d, t, r)
        }
        ),
        new ne(o,a)
    }
    createSegments(n, e, t, r) {
        return e.map(o => o.path.startsWith(":") ? this.findPosParam(n, o, r) : this.findOrReturn(o, t))
    }
    findPosParam(n, e, t) {
        let r = t[e.path.substring(1)];
        if (!r)
            throw new re(4001,!1);
        return r
    }
    findOrReturn(n, e) {
        let t = 0;
        for (let r of e) {
            if (r.path === n.path)
                return e.splice(t),
                r;
            t++
        }
        return n
    }
}
  , ds = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {}
};
function qp(i, n, e, t, r) {
    let o = bs(i, n, e);
    return o.matched ? (t = xp(n, t),
    Hp(t, n, e, r).pipe(N(a => a === !0 ? o : v({}, ds)))) : E(o)
}
function bs(i, n, e) {
    if (n.path === "**")
        return Wp(e);
    if (n.path === "")
        return n.pathMatch === "full" && (i.hasChildren() || e.length > 0) ? v({}, ds) : {
            matched: !0,
            consumedSegments: [],
            remainingSegments: e,
            parameters: {},
            positionalParamSegments: {}
        };
    let r = (n.matcher || Hm)(e, i, n);
    if (!r)
        return v({}, ds);
    let o = {};
    Object.entries(r.posParams ?? {}).forEach( ([s,d]) => {
        o[s] = d.path
    }
    );
    let a = r.consumed.length > 0 ? v(v({}, o), r.consumed[r.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: r.consumed,
        remainingSegments: e.slice(r.consumed.length),
        parameters: a,
        positionalParamSegments: r.posParams ?? {}
    }
}
function Wp(i) {
    return {
        matched: !0,
        parameters: i.length > 0 ? Ql(i).parameters : {},
        consumedSegments: i,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}
function Zl(i, n, e, t) {
    return e.length > 0 && Zp(i, e, t) ? {
        segmentGroup: new ne(n,Xp(t, new ne(e,i.children))),
        slicedSegments: []
    } : e.length === 0 && Kp(i, e, t) ? {
        segmentGroup: new ne(i.segments,Gp(i, e, t, i.children)),
        slicedSegments: e
    } : {
        segmentGroup: new ne(i.segments,i.children),
        slicedSegments: e
    }
}
function Gp(i, n, e, t) {
    let r = {};
    for (let o of e)
        if (po(i, n, o) && !t[ht(o)]) {
            let a = new ne([],{});
            r[ht(o)] = a
        }
    return v(v({}, t), r)
}
function Xp(i, n) {
    let e = {};
    e[q] = n;
    for (let t of i)
        if (t.path === "" && ht(t) !== q) {
            let r = new ne([],{});
            e[ht(t)] = r
        }
    return e
}
function Zp(i, n, e) {
    return e.some(t => po(i, n, t) && ht(t) !== q)
}
function Kp(i, n, e) {
    return e.some(t => po(i, n, t))
}
function po(i, n, e) {
    return (i.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""
}
function Qp(i, n, e, t) {
    return ht(i) !== t && (t === q || !po(n, e, i)) ? !1 : bs(n, i, e).matched
}
function Jp(i, n, e) {
    return n.length === 0 && !i.children[e]
}
var ls = class {
}
;
function ef(i, n, e, t, r, o, a="emptyOnly") {
    return new cs(i,n,e,t,r,a,o).recognize()
}
var tf = 31
  , cs = class {
    constructor(n, e, t, r, o, a, s) {
        this.injector = n,
        this.configLoader = e,
        this.rootComponentType = t,
        this.config = r,
        this.urlTree = o,
        this.paramsInheritanceStrategy = a,
        this.urlSerializer = s,
        this.applyRedirects = new ss(this.urlSerializer,this.urlTree),
        this.absoluteRedirectCount = 0,
        this.allowRedirects = !0
    }
    noMatchError(n) {
        return new re(4002,`'${n.segmentGroup}'`)
    }
    recognize() {
        let n = Zl(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(n).pipe(N(e => {
            let t = new qn([],Object.freeze({}),Object.freeze(v({}, this.urlTree.queryParams)),this.urlTree.fragment,{},q,this.rootComponentType,null,{})
              , r = new He(t,e)
              , o = new co("",r)
              , a = dp(t, [], this.urlTree.queryParams, this.urlTree.fragment);
            return a.queryParams = this.urlTree.queryParams,
            o.url = this.urlSerializer.serialize(a),
            this.inheritParamsAndData(o._root, null),
            {
                state: o,
                tree: a
            }
        }
        ))
    }
    match(n) {
        return this.processSegmentGroup(this.injector, this.config, n, q).pipe(At(t => {
            if (t instanceof ho)
                return this.urlTree = t.urlTree,
                this.match(t.urlTree.root);
            throw t instanceof Gn ? this.noMatchError(t) : t
        }
        ))
    }
    inheritParamsAndData(n, e) {
        let t = n.value
          , r = ms(t, e, this.paramsInheritanceStrategy);
        t.params = Object.freeze(r.params),
        t.data = Object.freeze(r.data),
        n.children.forEach(o => this.inheritParamsAndData(o, t))
    }
    processSegmentGroup(n, e, t, r) {
        return t.segments.length === 0 && t.hasChildren() ? this.processChildren(n, e, t) : this.processSegment(n, e, t, t.segments, r, !0).pipe(N(o => o instanceof He ? [o] : []))
    }
    processChildren(n, e, t) {
        let r = [];
        for (let o of Object.keys(t.children))
            o === "primary" ? r.unshift(o) : r.push(o);
        return Pe(r).pipe(ni(o => {
            let a = t.children[o]
              , s = wp(e, o);
            return this.processSegmentGroup(n, s, a, o)
        }
        ), Vd( (o, a) => (o.push(...a),
        o)), la(null), Pd(), qe(o => {
            if (o === null)
                return Ni(t);
            let a = yc(o);
            return nf(a),
            E(a)
        }
        ))
    }
    processSegment(n, e, t, r, o, a) {
        return Pe(e).pipe(ni(s => this.processSegmentAgainstRoute(s._injector ?? n, e, s, t, r, o, a).pipe(At(d => {
            if (d instanceof Gn)
                return E(null);
            throw d
        }
        ))), kt(s => !!s), At(s => {
            if (bc(s))
                return Jp(t, r, o) ? E(new ls) : Ni(t);
            throw s
        }
        ))
    }
    processSegmentAgainstRoute(n, e, t, r, o, a, s) {
        return Qp(t, r, o, a) ? t.redirectTo === void 0 ? this.matchSegmentAgainstRoute(n, r, t, o, a) : this.allowRedirects && s ? this.expandSegmentAgainstRouteUsingRedirect(n, r, e, t, o, a) : Ni(r) : Ni(r)
    }
    expandSegmentAgainstRouteUsingRedirect(n, e, t, r, o, a) {
        let {matched: s, consumedSegments: d, positionalParamSegments: c, remainingSegments: m} = bs(e, r, o);
        if (!s)
            return Ni(e);
        r.redirectTo.startsWith("/") && (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > tf && (this.allowRedirects = !1));
        let b = this.applyRedirects.applyRedirectCommands(d, r.redirectTo, c);
        return this.applyRedirects.lineralizeSegments(r, b).pipe(qe(R => this.processSegment(n, t, e, R.concat(m), a, !1)))
    }
    matchSegmentAgainstRoute(n, e, t, r, o) {
        let a = qp(e, t, r, n, this.urlSerializer);
        return t.path === "**" && (e.children = {}),
        a.pipe(Ve(s => s.matched ? (n = t._injector ?? n,
        this.getChildConfig(n, t, r).pipe(Ve( ({routes: d}) => {
            let c = t._loadedInjector ?? n
              , {consumedSegments: m, remainingSegments: b, parameters: R} = s
              , W = new qn(m,R,Object.freeze(v({}, this.urlTree.queryParams)),this.urlTree.fragment,of(t),ht(t),t.component ?? t._loadedComponent ?? null,t,af(t))
              , {segmentGroup: K, slicedSegments: k} = Zl(e, m, b, d);
            if (k.length === 0 && K.hasChildren())
                return this.processChildren(c, d, K).pipe(N(we => we === null ? null : new He(W,we)));
            if (d.length === 0 && k.length === 0)
                return E(new He(W,[]));
            let Q = ht(t) === o;
            return this.processSegment(c, d, K, k, Q ? q : o, !0).pipe(N(we => new He(W,we instanceof He ? [we] : [])))
        }
        ))) : Ni(e)))
    }
    getChildConfig(n, e, t) {
        return e.children ? E({
            routes: e.children,
            injector: n
        }) : e.loadChildren ? e._loadedRoutes !== void 0 ? E({
            routes: e._loadedRoutes,
            injector: e._loadedInjector
        }) : Up(n, e, t, this.urlSerializer).pipe(qe(r => r ? this.configLoader.loadChildren(n, e).pipe(ue(o => {
            e._loadedRoutes = o.routes,
            e._loadedInjector = o.injector
        }
        )) : Yp(e))) : E({
            routes: [],
            injector: n
        })
    }
}
;
function nf(i) {
    i.sort( (n, e) => n.value.outlet === q ? -1 : e.value.outlet === q ? 1 : n.value.outlet.localeCompare(e.value.outlet))
}
function rf(i) {
    let n = i.value.routeConfig;
    return n && n.path === ""
}
function yc(i) {
    let n = []
      , e = new Set;
    for (let t of i) {
        if (!rf(t)) {
            n.push(t);
            continue
        }
        let r = n.find(o => t.value.routeConfig === o.value.routeConfig);
        r !== void 0 ? (r.children.push(...t.children),
        e.add(r)) : n.push(t)
    }
    for (let t of e) {
        let r = yc(t.children);
        n.push(new He(t.value,r))
    }
    return n.filter(t => !e.has(t))
}
function of(i) {
    return i.data || {}
}
function af(i) {
    return i.resolve || {}
}
function sf(i, n, e, t, r, o) {
    return qe(a => ef(i, n, e, t, a.extractedUrl, r, o).pipe(N( ({state: s, tree: d}) => ie(v({}, a), {
        targetSnapshot: s,
        urlAfterRedirects: d
    }))))
}
function df(i, n) {
    return qe(e => {
        let {targetSnapshot: t, guards: {canActivateChecks: r}} = e;
        if (!r.length)
            return E(e);
        let o = new Set(r.map(d => d.route))
          , a = new Set;
        for (let d of o)
            if (!a.has(d))
                for (let c of xc(d))
                    a.add(c);
        let s = 0;
        return Pe(a).pipe(ni(d => o.has(d) ? lf(d, t, i, n) : (d.data = ms(d, d.parent, i).resolve,
        E(void 0))), ue( () => s++), ca(1), qe(d => s === a.size ? E(e) : rt))
    }
    )
}
function xc(i) {
    let n = i.children.map(e => xc(e)).flat();
    return [i, ...n]
}
function lf(i, n, e, t) {
    let r = i.routeConfig
      , o = i._resolve;
    return r?.title !== void 0 && !mc(r) && (o[Xn] = r.title),
    cf(o, i, n, t).pipe(N(a => (i._resolvedData = a,
    i.data = ms(i, i.parent, e).resolve,
    null)))
}
function cf(i, n, e, t) {
    let r = za(i);
    if (r.length === 0)
        return E({});
    let o = {};
    return Pe(r).pipe(qe(a => uf(i[a], n, e, t).pipe(kt(), ue(s => {
        o[a] = s
    }
    ))), ca(1), Nd(o), At(a => bc(a) ? rt : ti(a)))
}
function uf(i, n, e, t) {
    let r = Zn(n) ?? t
      , o = Ui(i, r)
      , a = o.resolve ? o.resolve(n, e) : vt(r, () => o(n, e));
    return Ht(a)
}
function La(i) {
    return Ve(n => {
        let e = i(n);
        return e ? Pe(e).pipe(N( () => n)) : E(n)
    }
    )
}
var wc = ( () => {
    class i {
        buildTitle(e) {
            let t, r = e.root;
            for (; r !== void 0; )
                t = this.getResolvedTitleForRoute(r) ?? t,
                r = r.children.find(o => o.outlet === q);
            return t
        }
        getResolvedTitleForRoute(e) {
            return e.data[Xn]
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: () => g(hf),
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , hf = ( () => {
    class i extends wc {
        constructor(e) {
            super(),
            this.title = e
        }
        updateTitle(e) {
            let t = this.buildTitle(e);
            t !== void 0 && this.title.setTitle(t)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Oi))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , vs = new x("",{
    providedIn: "root",
    factory: () => ({})
})
  , ys = new x("")
  , mf = ( () => {
    class i {
        constructor() {
            this.componentLoaders = new WeakMap,
            this.childrenLoaders = new WeakMap,
            this.compiler = g(fa)
        }
        loadComponent(e) {
            if (this.componentLoaders.get(e))
                return this.componentLoaders.get(e);
            if (e._loadedComponent)
                return E(e._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(e);
            let t = Ht(e.loadComponent()).pipe(N(Cc), ue(o => {
                this.onLoadEndListener && this.onLoadEndListener(e),
                e._loadedComponent = o
            }
            ), St( () => {
                this.componentLoaders.delete(e)
            }
            ))
              , r = new oa(t, () => new A).pipe(ra());
            return this.componentLoaders.set(e, r),
            r
        }
        loadChildren(e, t) {
            if (this.childrenLoaders.get(t))
                return this.childrenLoaders.get(t);
            if (t._loadedRoutes)
                return E({
                    routes: t._loadedRoutes,
                    injector: t._loadedInjector
                });
            this.onLoadStartListener && this.onLoadStartListener(t);
            let o = pf(t, this.compiler, e, this.onLoadEndListener).pipe(St( () => {
                this.childrenLoaders.delete(t)
            }
            ))
              , a = new oa(o, () => new A).pipe(ra());
            return this.childrenLoaders.set(t, a),
            a
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function pf(i, n, e, t) {
    return Ht(i.loadChildren()).pipe(N(Cc), qe(r => r instanceof Qd || Array.isArray(r) ? E(r) : Pe(n.compileModuleAsync(r))), N(r => {
        t && t(i);
        let o, a, s = !1;
        return Array.isArray(r) ? (a = r,
        s = !0) : (o = r.create(e).injector,
        a = o.get(ys, [], {
            optional: !0,
            self: !0
        }).flat()),
        {
            routes: a.map(_s),
            injector: o
        }
    }
    ))
}
function ff(i) {
    return i && typeof i == "object" && "default"in i
}
function Cc(i) {
    return ff(i) ? i.default : i
}
var xs = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: () => g(gf),
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , gf = ( () => {
    class i {
        shouldProcessUrl(e) {
            return !0
        }
        extract(e) {
            return e
        }
        merge(e, t) {
            return e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , _f = new x("");
var bf = ( () => {
    class i {
        get hasRequestedNavigation() {
            return this.navigationId !== 0
        }
        constructor() {
            this.currentNavigation = null,
            this.currentTransition = null,
            this.lastSuccessfulNavigation = null,
            this.events = new A,
            this.transitionAbortSubject = new A,
            this.configLoader = g(mf),
            this.environmentInjector = g(Mi),
            this.urlSerializer = g(hs),
            this.rootContexts = g(mo),
            this.location = g(Vt),
            this.inputBindingEnabled = g(gs, {
                optional: !0
            }) !== null,
            this.titleStrategy = g(wc),
            this.options = g(vs, {
                optional: !0
            }) || {},
            this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly",
            this.urlHandlingStrategy = g(xs),
            this.createViewTransition = g(_f, {
                optional: !0
            }),
            this.navigationId = 0,
            this.afterPreactivation = () => E(void 0),
            this.rootComponentType = null;
            let e = r => this.events.next(new Xa(r))
              , t = r => this.events.next(new Za(r));
            this.configLoader.onLoadEndListener = t,
            this.configLoader.onLoadStartListener = e
        }
        complete() {
            this.transitions?.complete()
        }
        handleNavigationRequest(e) {
            let t = ++this.navigationId;
            this.transitions?.next(ie(v(v({}, this.transitions.value), e), {
                id: t
            }))
        }
        setupNavigations(e, t, r) {
            return this.transitions = new ze({
                id: 0,
                currentUrlTree: t,
                currentRawUrl: t,
                extractedUrl: this.urlHandlingStrategy.extract(t),
                urlAfterRedirects: this.urlHandlingStrategy.extract(t),
                rawUrl: t,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: jn,
                restoredState: null,
                currentSnapshot: r.snapshot,
                targetSnapshot: null,
                currentRouterState: r,
                targetRouterState: null,
                guards: {
                    canActivateChecks: [],
                    canDeactivateChecks: []
                },
                guardsResult: null
            }),
            this.transitions.pipe(pe(o => o.id !== 0), N(o => ie(v({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl)
            })), Ve(o => {
                let a = !1
                  , s = !1;
                return E(o).pipe(Ve(d => {
                    if (this.navigationId > o.id)
                        return this.cancelNavigationTransition(o, "", $e.SupersededByNewNavigation),
                        rt;
                    this.currentTransition = o,
                    this.currentNavigation = {
                        id: d.id,
                        initialUrl: d.rawUrl,
                        extractedUrl: d.extractedUrl,
                        trigger: d.source,
                        extras: d.extras,
                        previousNavigation: this.lastSuccessfulNavigation ? ie(v({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null
                        }) : null
                    };
                    let c = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl()
                      , m = d.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                    if (!c && m !== "reload") {
                        let b = "";
                        return this.events.next(new pi(d.id,this.urlSerializer.serialize(d.rawUrl),b,$a.IgnoredSameUrlNavigation)),
                        d.resolve(null),
                        rt
                    }
                    if (this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))
                        return E(d).pipe(Ve(b => {
                            let R = this.transitions?.getValue();
                            return this.events.next(new Un(b.id,this.urlSerializer.serialize(b.extractedUrl),b.source,b.restoredState)),
                            R !== this.transitions?.getValue() ? rt : Promise.resolve(b)
                        }
                        ), sf(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), ue(b => {
                            o.targetSnapshot = b.targetSnapshot,
                            o.urlAfterRedirects = b.urlAfterRedirects,
                            this.currentNavigation = ie(v({}, this.currentNavigation), {
                                finalUrl: b.urlAfterRedirects
                            });
                            let R = new ao(b.id,this.urlSerializer.serialize(b.extractedUrl),this.urlSerializer.serialize(b.urlAfterRedirects),b.targetSnapshot);
                            this.events.next(R)
                        }
                        ));
                    if (c && this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)) {
                        let {id: b, extractedUrl: R, source: W, restoredState: K, extras: k} = d
                          , Q = new Un(b,this.urlSerializer.serialize(R),W,K);
                        this.events.next(Q);
                        let we = uc(this.rootComponentType).snapshot;
                        return this.currentTransition = o = ie(v({}, d), {
                            targetSnapshot: we,
                            urlAfterRedirects: R,
                            extras: ie(v({}, k), {
                                skipLocationChange: !1,
                                replaceUrl: !1
                            })
                        }),
                        this.currentNavigation.finalUrl = R,
                        E(o)
                    } else {
                        let b = "";
                        return this.events.next(new pi(d.id,this.urlSerializer.serialize(d.extractedUrl),b,$a.IgnoredByUrlHandlingStrategy)),
                        d.resolve(null),
                        rt
                    }
                }
                ), ue(d => {
                    let c = new Ya(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);
                    this.events.next(c)
                }
                ), N(d => (this.currentTransition = o = ie(v({}, d), {
                    guards: Dp(d.targetSnapshot, d.currentSnapshot, this.rootContexts)
                }),
                o)), Op(this.environmentInjector, d => this.events.next(d)), ue(d => {
                    if (o.guardsResult = d.guardsResult,
                    zi(d.guardsResult))
                        throw fc(this.urlSerializer, d.guardsResult);
                    let c = new qa(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);
                    this.events.next(c)
                }
                ), pe(d => d.guardsResult ? !0 : (this.cancelNavigationTransition(d, "", $e.GuardRejected),
                !1)), La(d => {
                    if (d.guards.canActivateChecks.length)
                        return E(d).pipe(ue(c => {
                            let m = new Wa(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);
                            this.events.next(m)
                        }
                        ), Ve(c => {
                            let m = !1;
                            return E(c).pipe(df(this.paramsInheritanceStrategy, this.environmentInjector), ue({
                                next: () => m = !0,
                                complete: () => {
                                    m || this.cancelNavigationTransition(c, "", $e.NoDataFromResolver)
                                }
                            }))
                        }
                        ), ue(c => {
                            let m = new Ga(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);
                            this.events.next(m)
                        }
                        ))
                }
                ), La(d => {
                    let c = m => {
                        let b = [];
                        m.routeConfig?.loadComponent && !m.routeConfig._loadedComponent && b.push(this.configLoader.loadComponent(m.routeConfig).pipe(ue(R => {
                            m.component = R
                        }
                        ), N( () => {}
                        )));
                        for (let R of m.children)
                            b.push(...c(R));
                        return b
                    }
                    ;
                    return bn(c(d.targetSnapshot.root)).pipe(la(null), fe(1))
                }
                ), La( () => this.afterPreactivation()), Ve( () => {
                    let {currentSnapshot: d, targetSnapshot: c} = o
                      , m = this.createViewTransition?.(this.environmentInjector, d.root, c.root);
                    return m ? Pe(m).pipe(N( () => o)) : E(o)
                }
                ), N(d => {
                    let c = gp(e.routeReuseStrategy, d.targetSnapshot, d.currentRouterState);
                    return this.currentTransition = o = ie(v({}, d), {
                        targetRouterState: c
                    }),
                    this.currentNavigation.targetRouterState = c,
                    o
                }
                ), ue( () => {
                    this.events.next(new $n)
                }
                ), Cp(this.rootContexts, e.routeReuseStrategy, d => this.events.next(d), this.inputBindingEnabled), fe(1), ue({
                    next: d => {
                        a = !0,
                        this.lastSuccessfulNavigation = this.currentNavigation,
                        this.events.next(new mi(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),
                        this.titleStrategy?.updateTitle(d.targetRouterState.snapshot),
                        d.resolve(!0)
                    }
                    ,
                    complete: () => {
                        a = !0
                    }
                }), ge(this.transitionAbortSubject.pipe(ue(d => {
                    throw d
                }
                ))), St( () => {
                    !a && !s && this.cancelNavigationTransition(o, "", $e.SupersededByNewNavigation),
                    this.currentTransition?.id === o.id && (this.currentNavigation = null,
                    this.currentTransition = null)
                }
                ), At(d => {
                    if (s = !0,
                    _c(d))
                        this.events.next(new Ut(o.id,this.urlSerializer.serialize(o.extractedUrl),d.message,d.cancellationCode)),
                        vp(d) ? this.events.next(new Yn(d.url)) : o.resolve(!1);
                    else {
                        this.events.next(new Hn(o.id,this.urlSerializer.serialize(o.extractedUrl),d,o.targetSnapshot ?? void 0));
                        try {
                            o.resolve(e.errorHandler(d))
                        } catch (c) {
                            this.options.resolveNavigationPromiseOnError ? o.resolve(!1) : o.reject(c)
                        }
                    }
                    return rt
                }
                ))
            }
            ))
        }
        cancelNavigationTransition(e, t, r) {
            let o = new Ut(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);
            this.events.next(o),
            e.resolve(!1)
        }
        isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
        }
        isUpdatedBrowserUrl() {
            return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function vf(i) {
    return i !== jn
}
var yf = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: () => g(xf),
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , us = class {
    shouldDetach(n) {
        return !1
    }
    store(n, e) {}
    shouldAttach(n) {
        return !1
    }
    retrieve(n) {
        return null
    }
    shouldReuseRoute(n, e) {
        return n.routeConfig === e.routeConfig
    }
}
  , xf = ( () => {
    class i extends us {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Dc = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: () => g(wf),
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , wf = ( () => {
    class i extends Dc {
        constructor() {
            super(...arguments),
            this.location = g(Vt),
            this.urlSerializer = g(hs),
            this.options = g(vs, {
                optional: !0
            }) || {},
            this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace",
            this.urlHandlingStrategy = g(xs),
            this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred",
            this.currentUrlTree = new Bt,
            this.rawUrlTree = this.currentUrlTree,
            this.currentPageId = 0,
            this.lastSuccessfulId = -1,
            this.routerState = uc(null),
            this.stateMemento = this.createStateMemento()
        }
        getCurrentUrlTree() {
            return this.currentUrlTree
        }
        getRawUrlTree() {
            return this.rawUrlTree
        }
        restoredState() {
            return this.location.getState()
        }
        get browserPageId() {
            return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
        }
        getRouterState() {
            return this.routerState
        }
        createStateMemento() {
            return {
                rawUrlTree: this.rawUrlTree,
                currentUrlTree: this.currentUrlTree,
                routerState: this.routerState
            }
        }
        registerNonRouterCurrentEntryChangeListener(e) {
            return this.location.subscribe(t => {
                t.type === "popstate" && e(t.url, t.state)
            }
            )
        }
        handleRouterEvent(e, t) {
            if (e instanceof Un)
                this.stateMemento = this.createStateMemento();
            else if (e instanceof pi)
                this.rawUrlTree = t.initialUrl;
            else if (e instanceof ao) {
                if (this.urlUpdateStrategy === "eager" && !t.extras.skipLocationChange) {
                    let r = this.urlHandlingStrategy.merge(t.finalUrl, t.initialUrl);
                    this.setBrowserUrl(r, t)
                }
            } else
                e instanceof $n ? (this.currentUrlTree = t.finalUrl,
                this.rawUrlTree = this.urlHandlingStrategy.merge(t.finalUrl, t.initialUrl),
                this.routerState = t.targetRouterState,
                this.urlUpdateStrategy === "deferred" && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, t))) : e instanceof Ut && (e.code === $e.GuardRejected || e.code === $e.NoDataFromResolver) ? this.restoreHistory(t) : e instanceof Hn ? this.restoreHistory(t, !0) : e instanceof mi && (this.lastSuccessfulId = e.id,
                this.currentPageId = this.browserPageId)
        }
        setBrowserUrl(e, t) {
            let r = this.urlSerializer.serialize(e);
            if (this.location.isCurrentPathEqualTo(r) || t.extras.replaceUrl) {
                let o = this.browserPageId
                  , a = v(v({}, t.extras.state), this.generateNgRouterState(t.id, o));
                this.location.replaceState(r, "", a)
            } else {
                let o = v(v({}, t.extras.state), this.generateNgRouterState(t.id, this.browserPageId + 1));
                this.location.go(r, "", o)
            }
        }
        restoreHistory(e, t=!1) {
            if (this.canceledNavigationResolution === "computed") {
                let r = this.browserPageId
                  , o = this.currentPageId - r;
                o !== 0 ? this.location.historyGo(o) : this.currentUrlTree === e.finalUrl && o === 0 && (this.resetState(e),
                this.resetUrlToCurrentUrlTree())
            } else
                this.canceledNavigationResolution === "replace" && (t && this.resetState(e),
                this.resetUrlToCurrentUrlTree())
        }
        resetState(e) {
            this.routerState = this.stateMemento.routerState,
            this.currentUrlTree = this.stateMemento.currentUrlTree,
            this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e.finalUrl ?? this.rawUrlTree)
        }
        resetUrlToCurrentUrlTree() {
            this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
        }
        generateNgRouterState(e, t) {
            return this.canceledNavigationResolution === "computed" ? {
                navigationId: e,
                \u0275routerPageId: t
            } : {
                navigationId: e
            }
        }
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Vn = function(i) {
    return i[i.COMPLETE = 0] = "COMPLETE",
    i[i.FAILED = 1] = "FAILED",
    i[i.REDIRECTING = 2] = "REDIRECTING",
    i
}(Vn || {});
function Cf(i, n) {
    i.events.pipe(pe(e => e instanceof mi || e instanceof Ut || e instanceof Hn || e instanceof pi), N(e => e instanceof mi || e instanceof pi ? Vn.COMPLETE : (e instanceof Ut ? e.code === $e.Redirect || e.code === $e.SupersededByNewNavigation : !1) ? Vn.REDIRECTING : Vn.FAILED), pe(e => e !== Vn.REDIRECTING), fe(1)).subscribe( () => {
        n()
    }
    )
}
function Df(i) {
    throw i
}
var Ef = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact"
}
  , If = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset"
}
  , Ec = ( () => {
    class i {
        get currentUrlTree() {
            return this.stateManager.getCurrentUrlTree()
        }
        get rawUrlTree() {
            return this.stateManager.getRawUrlTree()
        }
        get events() {
            return this._events
        }
        get routerState() {
            return this.stateManager.getRouterState()
        }
        constructor() {
            this.disposed = !1,
            this.isNgZoneEnabled = !1,
            this.console = g(Vr),
            this.stateManager = g(Dc),
            this.options = g(vs, {
                optional: !0
            }) || {},
            this.pendingTasks = g(Fr),
            this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred",
            this.navigationTransitions = g(bf),
            this.urlSerializer = g(hs),
            this.location = g(Vt),
            this.urlHandlingStrategy = g(xs),
            this._events = new A,
            this.errorHandler = this.options.errorHandler || Df,
            this.navigated = !1,
            this.routeReuseStrategy = g(yf),
            this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore",
            this.config = g(ys, {
                optional: !0
            })?.flat() ?? [],
            this.componentInputBindingEnabled = !!g(gs, {
                optional: !0
            }),
            this.eventsSubscription = new ce,
            this.isNgZoneEnabled = g(T)instanceof T && T.isInAngularZone(),
            this.resetConfig(this.config),
            this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
                error: e => {
                    this.console.warn(e)
                }
            }),
            this.subscribeToNavigationEvents()
        }
        subscribeToNavigationEvents() {
            let e = this.navigationTransitions.events.subscribe(t => {
                try {
                    let r = this.navigationTransitions.currentTransition
                      , o = this.navigationTransitions.currentNavigation;
                    if (r !== null && o !== null) {
                        if (this.stateManager.handleRouterEvent(t, o),
                        t instanceof Ut && t.code !== $e.Redirect && t.code !== $e.SupersededByNewNavigation)
                            this.navigated = !0;
                        else if (t instanceof mi)
                            this.navigated = !0;
                        else if (t instanceof Yn) {
                            let a = this.urlHandlingStrategy.merge(t.url, r.currentRawUrl)
                              , s = {
                                info: r.extras.info,
                                skipLocationChange: r.extras.skipLocationChange,
                                replaceUrl: this.urlUpdateStrategy === "eager" || vf(r.source)
                            };
                            this.scheduleNavigation(a, jn, null, s, {
                                resolve: r.resolve,
                                reject: r.reject,
                                promise: r.promise
                            })
                        }
                    }
                    Af(t) && this._events.next(t)
                } catch (r) {
                    this.navigationTransitions.transitionAbortSubject.next(r)
                }
            }
            );
            this.eventsSubscription.add(e)
        }
        resetRootComponentType(e) {
            this.routerState.root.component = e,
            this.navigationTransitions.rootComponentType = e
        }
        initialNavigation() {
            this.setUpLocationChangeListener(),
            this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), jn, this.stateManager.restoredState())
        }
        setUpLocationChangeListener() {
            this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener( (e, t) => {
                setTimeout( () => {
                    this.navigateToSyncWithBrowser(e, "popstate", t)
                }
                , 0)
            }
            )
        }
        navigateToSyncWithBrowser(e, t, r) {
            let o = {
                replaceUrl: !0
            }
              , a = r?.navigationId ? r : null;
            if (r) {
                let d = v({}, r);
                delete d.navigationId,
                delete d.\u0275routerPageId,
                Object.keys(d).length !== 0 && (o.state = d)
            }
            let s = this.parseUrl(e);
            this.scheduleNavigation(s, t, a, o)
        }
        get url() {
            return this.serializeUrl(this.currentUrlTree)
        }
        getCurrentNavigation() {
            return this.navigationTransitions.currentNavigation
        }
        get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation
        }
        resetConfig(e) {
            this.config = e.map(_s),
            this.navigated = !1
        }
        ngOnDestroy() {
            this.dispose()
        }
        dispose() {
            this.navigationTransitions.complete(),
            this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            this.nonRouterCurrentEntryChangeSubscription = void 0),
            this.disposed = !0,
            this.eventsSubscription.unsubscribe()
        }
        createUrlTree(e, t={}) {
            let {relativeTo: r, queryParams: o, fragment: a, queryParamsHandling: s, preserveFragment: d} = t
              , c = d ? this.currentUrlTree.fragment : a
              , m = null;
            switch (s) {
            case "merge":
                m = v(v({}, this.currentUrlTree.queryParams), o);
                break;
            case "preserve":
                m = this.currentUrlTree.queryParams;
                break;
            default:
                m = o || null
            }
            m !== null && (m = this.removeEmptyProps(m));
            let b;
            try {
                let R = r ? r.snapshot : this.routerState.snapshot.root;
                b = sc(R)
            } catch {
                (typeof e[0] != "string" || !e[0].startsWith("/")) && (e = []),
                b = this.currentUrlTree.root
            }
            return dc(b, e, m, c ?? null)
        }
        navigateByUrl(e, t={
            skipLocationChange: !1
        }) {
            let r = zi(e) ? e : this.parseUrl(e)
              , o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
            return this.scheduleNavigation(o, jn, null, t)
        }
        navigate(e, t={
            skipLocationChange: !1
        }) {
            return Mf(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
        }
        serializeUrl(e) {
            return this.urlSerializer.serialize(e)
        }
        parseUrl(e) {
            try {
                return this.urlSerializer.parse(e)
            } catch {
                return this.urlSerializer.parse("/")
            }
        }
        isActive(e, t) {
            let r;
            if (t === !0 ? r = v({}, Ef) : t === !1 ? r = v({}, If) : r = t,
            zi(e))
                return ql(this.currentUrlTree, e, r);
            let o = this.parseUrl(e);
            return ql(this.currentUrlTree, o, r)
        }
        removeEmptyProps(e) {
            return Object.entries(e).reduce( (t, [r,o]) => (o != null && (t[r] = o),
            t), {})
        }
        scheduleNavigation(e, t, r, o, a) {
            if (this.disposed)
                return Promise.resolve(!1);
            let s, d, c;
            a ? (s = a.resolve,
            d = a.reject,
            c = a.promise) : c = new Promise( (b, R) => {
                s = b,
                d = R
            }
            );
            let m = this.pendingTasks.add();
            return Cf(this, () => {
                queueMicrotask( () => this.pendingTasks.remove(m))
            }
            ),
            this.navigationTransitions.handleNavigationRequest({
                source: t,
                restoredState: r,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                rawUrl: e,
                extras: o,
                resolve: s,
                reject: d,
                promise: c,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
            }),
            c.catch(b => Promise.reject(b))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function Mf(i) {
    for (let n = 0; n < i.length; n++)
        if (i[n] == null)
            throw new re(4008,!1)
}
function Af(i) {
    return !(i instanceof $n) && !(i instanceof Yn)
}
var Sf = new x("");
function Ic(i, ...n) {
    return Rt([{
        provide: ys,
        multi: !0,
        useValue: i
    }, [], {
        provide: ut,
        useFactory: kf,
        deps: [Ec]
    }, {
        provide: jr,
        multi: !0,
        useFactory: Tf
    }, n.map(e => e.\u0275providers)])
}
function kf(i) {
    return i.routerState.root
}
function Rf(i, n) {
    return {
        \u0275kind: i,
        \u0275providers: n
    }
}
function Tf() {
    let i = g(Le);
    return n => {
        let e = i.get(di);
        if (n !== e.components[0])
            return;
        let t = i.get(Ec)
          , r = i.get(Ff);
        i.get(Of) === 1 && t.initialNavigation(),
        i.get(Nf, null, ha.Optional)?.setUpPreloading(),
        i.get(Sf, null, ha.Optional)?.init(),
        t.resetRootComponentType(e.componentTypes[0]),
        r.closed || (r.next(),
        r.complete(),
        r.unsubscribe())
    }
}
var Ff = new x("",{
    factory: () => new A
})
  , Of = new x("",{
    providedIn: "root",
    factory: () => 1
});
var Nf = new x("");
function Mc() {
    return Rf(6, [{
        provide: hl,
        useClass: ml
    }])
}
var Pf = "@"
  , Vf = ( () => {
    class i {
        constructor(e, t, r, o, a) {
            this.doc = e,
            this.delegate = t,
            this.zone = r,
            this.animationType = o,
            this.moduleImpl = a,
            this._rendererFactoryPromise = null,
            this.scheduler = g(Kd, {
                optional: !0
            })
        }
        ngOnDestroy() {
            this._engine?.flush()
        }
        loadImpl() {
            return (this.moduleImpl ?? import("./chunk-6PW4AVAK.js")).catch(t => {
                throw new re(5300,!1)
            }
            ).then( ({\u0275createEngine: t, \u0275AnimationRendererFactory: r}) => {
                this._engine = t(this.animationType, this.doc, this.scheduler);
                let o = new r(this.delegate,this._engine,this.zone);
                return this.delegate = o,
                o
            }
            )
        }
        createRenderer(e, t) {
            let r = this.delegate.createRenderer(e, t);
            if (r.\u0275type === 0)
                return r;
            typeof r.throwOnSyntheticProps == "boolean" && (r.throwOnSyntheticProps = !1);
            let o = new ws(r);
            return t?.data?.animation && !this._rendererFactoryPromise && (this._rendererFactoryPromise = this.loadImpl()),
            this._rendererFactoryPromise?.then(a => {
                let s = a.createRenderer(e, t);
                o.use(s)
            }
            ).catch(a => {
                o.use(r)
            }
            ),
            o
        }
        begin() {
            this.delegate.begin?.()
        }
        end() {
            this.delegate.end?.()
        }
        whenRenderingDone() {
            return this.delegate.whenRenderingDone?.() ?? Promise.resolve()
        }
        static{this.\u0275fac = function(t) {
            ai()
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , ws = class {
    constructor(n) {
        this.delegate = n,
        this.replay = [],
        this.\u0275type = 1
    }
    use(n) {
        if (this.delegate = n,
        this.replay !== null) {
            for (let e of this.replay)
                e(n);
            this.replay = null
        }
    }
    get data() {
        return this.delegate.data
    }
    destroy() {
        this.replay = null,
        this.delegate.destroy()
    }
    createElement(n, e) {
        return this.delegate.createElement(n, e)
    }
    createComment(n) {
        return this.delegate.createComment(n)
    }
    createText(n) {
        return this.delegate.createText(n)
    }
    get destroyNode() {
        return this.delegate.destroyNode
    }
    appendChild(n, e) {
        this.delegate.appendChild(n, e)
    }
    insertBefore(n, e, t, r) {
        this.delegate.insertBefore(n, e, t, r)
    }
    removeChild(n, e, t) {
        this.delegate.removeChild(n, e, t)
    }
    selectRootElement(n, e) {
        return this.delegate.selectRootElement(n, e)
    }
    parentNode(n) {
        return this.delegate.parentNode(n)
    }
    nextSibling(n) {
        return this.delegate.nextSibling(n)
    }
    setAttribute(n, e, t, r) {
        this.delegate.setAttribute(n, e, t, r)
    }
    removeAttribute(n, e, t) {
        this.delegate.removeAttribute(n, e, t)
    }
    addClass(n, e) {
        this.delegate.addClass(n, e)
    }
    removeClass(n, e) {
        this.delegate.removeClass(n, e)
    }
    setStyle(n, e, t, r) {
        this.delegate.setStyle(n, e, t, r)
    }
    removeStyle(n, e, t) {
        this.delegate.removeStyle(n, e, t)
    }
    setProperty(n, e, t) {
        this.shouldReplay(e) && this.replay.push(r => r.setProperty(n, e, t)),
        this.delegate.setProperty(n, e, t)
    }
    setValue(n, e) {
        this.delegate.setValue(n, e)
    }
    listen(n, e, t) {
        return this.shouldReplay(e) && this.replay.push(r => r.listen(n, e, t)),
        this.delegate.listen(n, e, t)
    }
    shouldReplay(n) {
        return this.replay !== null && n.startsWith(Pf)
    }
}
;
function Sc(i="animations") {
    return Tr("NgAsyncAnimations"),
    Rt([{
        provide: kr,
        useFactory: (n, e, t) => new Vf(n,e,t,i),
        deps: [O, Xr, T]
    }, {
        provide: Ae,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations"
    }])
}
var Vc = ( () => {
    class i {
        constructor(e, t) {
            this._renderer = e,
            this._elementRef = t,
            this.onChange = r => {}
            ,
            this.onTouched = () => {}
        }
        setProperty(e, t) {
            this._renderer.setProperty(this._elementRef.nativeElement, e, t)
        }
        registerOnTouched(e) {
            this.onTouched = e
        }
        registerOnChange(e) {
            this.onChange = e
        }
        setDisabledState(e) {
            this.setProperty("disabled", e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Rr),l(F))
        }
        }static{this.\u0275dir = I({
            type: i
        })
        }
    }
    return i
}
)()
  , Lf = ( () => {
    class i extends Vc {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            features: [Z]
        })
        }
    }
    return i
}
)()
  , qi = new x("");
var jf = {
    provide: qi,
    useExisting: Me( () => Wi),
    multi: !0
};
function zf() {
    let i = Ri() ? Ri().getUserAgent() : "";
    return /android (\d+)/.test(i.toLowerCase())
}
var Bf = new x("")
  , Wi = ( () => {
    class i extends Vc {
        constructor(e, t, r) {
            super(e, t),
            this._compositionMode = r,
            this._composing = !1,
            this._compositionMode == null && (this._compositionMode = !zf())
        }
        writeValue(e) {
            let t = e ?? "";
            this.setProperty("value", t)
        }
        _handleInput(e) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
        }
        _compositionStart() {
            this._composing = !0
        }
        _compositionEnd(e) {
            this._composing = !1,
            this._compositionMode && this.onChange(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Rr),l(F),l(Bf, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
            hostBindings: function(t, r) {
                t & 1 && V("input", function(a) {
                    return r._handleInput(a.target.value)
                })("blur", function() {
                    return r.onTouched()
                })("compositionstart", function() {
                    return r._compositionStart()
                })("compositionend", function(a) {
                    return r._compositionEnd(a.target.value)
                })
            },
            features: [de([jf]), Z]
        })
        }
    }
    return i
}
)();
function $t(i) {
    return i == null || (typeof i == "string" || Array.isArray(i)) && i.length === 0
}
function Lc(i) {
    return i != null && typeof i.length == "number"
}
var xt = new x("")
  , Ms = new x("")
  , Uf = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  , Re = class {
    static min(n) {
        return Hf(n)
    }
    static max(n) {
        return $f(n)
    }
    static required(n) {
        return jc(n)
    }
    static requiredTrue(n) {
        return Yf(n)
    }
    static email(n) {
        return qf(n)
    }
    static minLength(n) {
        return zc(n)
    }
    static maxLength(n) {
        return Wf(n)
    }
    static pattern(n) {
        return Gf(n)
    }
    static nullValidator(n) {
        return _o(n)
    }
    static compose(n) {
        return qc(n)
    }
    static composeAsync(n) {
        return Wc(n)
    }
}
;
function Hf(i) {
    return n => {
        if ($t(n.value) || $t(i))
            return null;
        let e = parseFloat(n.value);
        return !isNaN(e) && e < i ? {
            min: {
                min: i,
                actual: n.value
            }
        } : null
    }
}
function $f(i) {
    return n => {
        if ($t(n.value) || $t(i))
            return null;
        let e = parseFloat(n.value);
        return !isNaN(e) && e > i ? {
            max: {
                max: i,
                actual: n.value
            }
        } : null
    }
}
function jc(i) {
    return $t(i.value) ? {
        required: !0
    } : null
}
function Yf(i) {
    return i.value === !0 ? null : {
        required: !0
    }
}
function qf(i) {
    return $t(i.value) || Uf.test(i.value) ? null : {
        email: !0
    }
}
function zc(i) {
    return n => $t(n.value) || !Lc(n.value) ? null : n.value.length < i ? {
        minlength: {
            requiredLength: i,
            actualLength: n.value.length
        }
    } : null
}
function Wf(i) {
    return n => Lc(n.value) && n.value.length > i ? {
        maxlength: {
            requiredLength: i,
            actualLength: n.value.length
        }
    } : null
}
function Gf(i) {
    if (!i)
        return _o;
    let n, e;
    return typeof i == "string" ? (e = "",
    i.charAt(0) !== "^" && (e += "^"),
    e += i,
    i.charAt(i.length - 1) !== "$" && (e += "$"),
    n = new RegExp(e)) : (e = i.toString(),
    n = i),
    t => {
        if ($t(t.value))
            return null;
        let r = t.value;
        return n.test(r) ? null : {
            pattern: {
                requiredPattern: e,
                actualValue: r
            }
        }
    }
}
function _o(i) {
    return null
}
function Bc(i) {
    return i != null
}
function Uc(i) {
    return Lr(i) ? Pe(i) : i
}
function Hc(i) {
    let n = {};
    return i.forEach(e => {
        n = e != null ? v(v({}, n), e) : n
    }
    ),
    Object.keys(n).length === 0 ? null : n
}
function $c(i, n) {
    return n.map(e => e(i))
}
function Xf(i) {
    return !i.validate
}
function Yc(i) {
    return i.map(n => Xf(n) ? n : e => n.validate(e))
}
function qc(i) {
    if (!i)
        return null;
    let n = i.filter(Bc);
    return n.length == 0 ? null : function(e) {
        return Hc($c(e, n))
    }
}
function As(i) {
    return i != null ? qc(Yc(i)) : null
}
function Wc(i) {
    if (!i)
        return null;
    let n = i.filter(Bc);
    return n.length == 0 ? null : function(e) {
        let t = $c(e, n).map(Uc);
        return Dr(t).pipe(N(Hc))
    }
}
function Ss(i) {
    return i != null ? Wc(Yc(i)) : null
}
function kc(i, n) {
    return i === null ? [n] : Array.isArray(i) ? [...i, n] : [i, n]
}
function Gc(i) {
    return i._rawValidators
}
function Xc(i) {
    return i._rawAsyncValidators
}
function Cs(i) {
    return i ? Array.isArray(i) ? i : [i] : []
}
function bo(i, n) {
    return Array.isArray(i) ? i.includes(n) : i === n
}
function Rc(i, n) {
    let e = Cs(n);
    return Cs(i).forEach(r => {
        bo(e, r) || e.push(r)
    }
    ),
    e
}
function Tc(i, n) {
    return Cs(n).filter(e => !bo(i, e))
}
var vo = class {
    constructor() {
        this._rawValidators = [],
        this._rawAsyncValidators = [],
        this._onDestroyCallbacks = []
    }
    get value() {
        return this.control ? this.control.value : null
    }
    get valid() {
        return this.control ? this.control.valid : null
    }
    get invalid() {
        return this.control ? this.control.invalid : null
    }
    get pending() {
        return this.control ? this.control.pending : null
    }
    get disabled() {
        return this.control ? this.control.disabled : null
    }
    get enabled() {
        return this.control ? this.control.enabled : null
    }
    get errors() {
        return this.control ? this.control.errors : null
    }
    get pristine() {
        return this.control ? this.control.pristine : null
    }
    get dirty() {
        return this.control ? this.control.dirty : null
    }
    get touched() {
        return this.control ? this.control.touched : null
    }
    get status() {
        return this.control ? this.control.status : null
    }
    get untouched() {
        return this.control ? this.control.untouched : null
    }
    get statusChanges() {
        return this.control ? this.control.statusChanges : null
    }
    get valueChanges() {
        return this.control ? this.control.valueChanges : null
    }
    get path() {
        return null
    }
    _setValidators(n) {
        this._rawValidators = n || [],
        this._composedValidatorFn = As(this._rawValidators)
    }
    _setAsyncValidators(n) {
        this._rawAsyncValidators = n || [],
        this._composedAsyncValidatorFn = Ss(this._rawAsyncValidators)
    }
    get validator() {
        return this._composedValidatorFn || null
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn || null
    }
    _registerOnDestroy(n) {
        this._onDestroyCallbacks.push(n)
    }
    _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach(n => n()),
        this._onDestroyCallbacks = []
    }
    reset(n=void 0) {
        this.control && this.control.reset(n)
    }
    hasError(n, e) {
        return this.control ? this.control.hasError(n, e) : !1
    }
    getError(n, e) {
        return this.control ? this.control.getError(n, e) : null
    }
}
  , Yt = class extends vo {
    get formDirective() {
        return null
    }
    get path() {
        return null
    }
}
  , qt = class extends vo {
    constructor() {
        super(...arguments),
        this._parent = null,
        this.name = null,
        this.valueAccessor = null
    }
}
  , yo = class {
    constructor(n) {
        this._cd = n
    }
    get isTouched() {
        return !!this._cd?.control?.touched
    }
    get isUntouched() {
        return !!this._cd?.control?.untouched
    }
    get isPristine() {
        return !!this._cd?.control?.pristine
    }
    get isDirty() {
        return !!this._cd?.control?.dirty
    }
    get isValid() {
        return !!this._cd?.control?.valid
    }
    get isInvalid() {
        return !!this._cd?.control?.invalid
    }
    get isPending() {
        return !!this._cd?.control?.pending
    }
    get isSubmitted() {
        return !!this._cd?.submitted
    }
}
  , Zf = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending"
}
  , vy = ie(v({}, Zf), {
    "[class.ng-submitted]": "isSubmitted"
})
  , Co = ( () => {
    class i extends yo {
        constructor(e) {
            super(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(qt, 2))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
            hostVars: 14,
            hostBindings: function(t, r) {
                t & 2 && B("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)("ng-valid", r.isValid)("ng-invalid", r.isInvalid)("ng-pending", r.isPending)
            },
            features: [Z]
        })
        }
    }
    return i
}
)()
  , Gi = ( () => {
    class i extends yo {
        constructor(e) {
            super(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Yt, 10))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
            hostVars: 16,
            hostBindings: function(t, r) {
                t & 2 && B("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)("ng-valid", r.isValid)("ng-invalid", r.isInvalid)("ng-pending", r.isPending)("ng-submitted", r.isSubmitted)
            },
            features: [Z]
        })
        }
    }
    return i
}
)();
var Qn = "VALID"
  , fo = "INVALID"
  , Hi = "PENDING"
  , Jn = "DISABLED";
function ks(i) {
    return (Do(i) ? i.validators : i) || null
}
function Kf(i) {
    return Array.isArray(i) ? As(i) : i || null
}
function Rs(i, n) {
    return (Do(n) ? n.asyncValidators : i) || null
}
function Qf(i) {
    return Array.isArray(i) ? Ss(i) : i || null
}
function Do(i) {
    return i != null && !Array.isArray(i) && typeof i == "object"
}
function Zc(i, n, e) {
    let t = i.controls;
    if (!(n ? Object.keys(t) : t).length)
        throw new re(1e3,"");
    if (!t[e])
        throw new re(1001,"")
}
function Kc(i, n, e) {
    i._forEachChild( (t, r) => {
        if (e[r] === void 0)
            throw new re(1002,"")
    }
    )
}
var $i = class {
    constructor(n, e) {
        this._pendingDirty = !1,
        this._hasOwnPendingAsyncValidator = !1,
        this._pendingTouched = !1,
        this._onCollectionChange = () => {}
        ,
        this._parent = null,
        this.pristine = !0,
        this.touched = !1,
        this._onDisabledChange = [],
        this._assignValidators(n),
        this._assignAsyncValidators(e)
    }
    get validator() {
        return this._composedValidatorFn
    }
    set validator(n) {
        this._rawValidators = this._composedValidatorFn = n
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn
    }
    set asyncValidator(n) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = n
    }
    get parent() {
        return this._parent
    }
    get valid() {
        return this.status === Qn
    }
    get invalid() {
        return this.status === fo
    }
    get pending() {
        return this.status == Hi
    }
    get disabled() {
        return this.status === Jn
    }
    get enabled() {
        return this.status !== Jn
    }
    get dirty() {
        return !this.pristine
    }
    get untouched() {
        return !this.touched
    }
    get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(n) {
        this._assignValidators(n)
    }
    setAsyncValidators(n) {
        this._assignAsyncValidators(n)
    }
    addValidators(n) {
        this.setValidators(Rc(n, this._rawValidators))
    }
    addAsyncValidators(n) {
        this.setAsyncValidators(Rc(n, this._rawAsyncValidators))
    }
    removeValidators(n) {
        this.setValidators(Tc(n, this._rawValidators))
    }
    removeAsyncValidators(n) {
        this.setAsyncValidators(Tc(n, this._rawAsyncValidators))
    }
    hasValidator(n) {
        return bo(this._rawValidators, n)
    }
    hasAsyncValidator(n) {
        return bo(this._rawAsyncValidators, n)
    }
    clearValidators() {
        this.validator = null
    }
    clearAsyncValidators() {
        this.asyncValidator = null
    }
    markAsTouched(n={}) {
        this.touched = !0,
        this._parent && !n.onlySelf && this._parent.markAsTouched(n)
    }
    markAllAsTouched() {
        this.markAsTouched({
            onlySelf: !0
        }),
        this._forEachChild(n => n.markAllAsTouched())
    }
    markAsUntouched(n={}) {
        this.touched = !1,
        this._pendingTouched = !1,
        this._forEachChild(e => {
            e.markAsUntouched({
                onlySelf: !0
            })
        }
        ),
        this._parent && !n.onlySelf && this._parent._updateTouched(n)
    }
    markAsDirty(n={}) {
        this.pristine = !1,
        this._parent && !n.onlySelf && this._parent.markAsDirty(n)
    }
    markAsPristine(n={}) {
        this.pristine = !0,
        this._pendingDirty = !1,
        this._forEachChild(e => {
            e.markAsPristine({
                onlySelf: !0
            })
        }
        ),
        this._parent && !n.onlySelf && this._parent._updatePristine(n)
    }
    markAsPending(n={}) {
        this.status = Hi,
        n.emitEvent !== !1 && this.statusChanges.emit(this.status),
        this._parent && !n.onlySelf && this._parent.markAsPending(n)
    }
    disable(n={}) {
        let e = this._parentMarkedDirty(n.onlySelf);
        this.status = Jn,
        this.errors = null,
        this._forEachChild(t => {
            t.disable(ie(v({}, n), {
                onlySelf: !0
            }))
        }
        ),
        this._updateValue(),
        n.emitEvent !== !1 && (this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(ie(v({}, n), {
            skipPristineCheck: e
        })),
        this._onDisabledChange.forEach(t => t(!0))
    }
    enable(n={}) {
        let e = this._parentMarkedDirty(n.onlySelf);
        this.status = Qn,
        this._forEachChild(t => {
            t.enable(ie(v({}, n), {
                onlySelf: !0
            }))
        }
        ),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: n.emitEvent
        }),
        this._updateAncestors(ie(v({}, n), {
            skipPristineCheck: e
        })),
        this._onDisabledChange.forEach(t => t(!1))
    }
    _updateAncestors(n) {
        this._parent && !n.onlySelf && (this._parent.updateValueAndValidity(n),
        n.skipPristineCheck || this._parent._updatePristine(),
        this._parent._updateTouched())
    }
    setParent(n) {
        this._parent = n
    }
    getRawValue() {
        return this.value
    }
    updateValueAndValidity(n={}) {
        this._setInitialStatus(),
        this._updateValue(),
        this.enabled && (this._cancelExistingSubscription(),
        this.errors = this._runValidator(),
        this.status = this._calculateStatus(),
        (this.status === Qn || this.status === Hi) && this._runAsyncValidator(n.emitEvent)),
        n.emitEvent !== !1 && (this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent && !n.onlySelf && this._parent.updateValueAndValidity(n)
    }
    _updateTreeValidity(n={
        emitEvent: !0
    }) {
        this._forEachChild(e => e._updateTreeValidity(n)),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: n.emitEvent
        })
    }
    _setInitialStatus() {
        this.status = this._allControlsDisabled() ? Jn : Qn
    }
    _runValidator() {
        return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(n) {
        if (this.asyncValidator) {
            this.status = Hi,
            this._hasOwnPendingAsyncValidator = !0;
            let e = Uc(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(t => {
                this._hasOwnPendingAsyncValidator = !1,
                this.setErrors(t, {
                    emitEvent: n
                })
            }
            )
        }
    }
    _cancelExistingSubscription() {
        this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(),
        this._hasOwnPendingAsyncValidator = !1)
    }
    setErrors(n, e={}) {
        this.errors = n,
        this._updateControlsErrors(e.emitEvent !== !1)
    }
    get(n) {
        let e = n;
        return e == null || (Array.isArray(e) || (e = e.split(".")),
        e.length === 0) ? null : e.reduce( (t, r) => t && t._find(r), this)
    }
    getError(n, e) {
        let t = e ? this.get(e) : this;
        return t && t.errors ? t.errors[n] : null
    }
    hasError(n, e) {
        return !!this.getError(n, e)
    }
    get root() {
        let n = this;
        for (; n._parent; )
            n = n._parent;
        return n
    }
    _updateControlsErrors(n) {
        this.status = this._calculateStatus(),
        n && this.statusChanges.emit(this.status),
        this._parent && this._parent._updateControlsErrors(n)
    }
    _initObservables() {
        this.valueChanges = new M,
        this.statusChanges = new M
    }
    _calculateStatus() {
        return this._allControlsDisabled() ? Jn : this.errors ? fo : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Hi) ? Hi : this._anyControlsHaveStatus(fo) ? fo : Qn
    }
    _anyControlsHaveStatus(n) {
        return this._anyControls(e => e.status === n)
    }
    _anyControlsDirty() {
        return this._anyControls(n => n.dirty)
    }
    _anyControlsTouched() {
        return this._anyControls(n => n.touched)
    }
    _updatePristine(n={}) {
        this.pristine = !this._anyControlsDirty(),
        this._parent && !n.onlySelf && this._parent._updatePristine(n)
    }
    _updateTouched(n={}) {
        this.touched = this._anyControlsTouched(),
        this._parent && !n.onlySelf && this._parent._updateTouched(n)
    }
    _registerOnCollectionChange(n) {
        this._onCollectionChange = n
    }
    _setUpdateStrategy(n) {
        Do(n) && n.updateOn != null && (this._updateOn = n.updateOn)
    }
    _parentMarkedDirty(n) {
        let e = this._parent && this._parent.dirty;
        return !n && !!e && !this._parent._anyControlsDirty()
    }
    _find(n) {
        return null
    }
    _assignValidators(n) {
        this._rawValidators = Array.isArray(n) ? n.slice() : n,
        this._composedValidatorFn = Kf(this._rawValidators)
    }
    _assignAsyncValidators(n) {
        this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n,
        this._composedAsyncValidatorFn = Qf(this._rawAsyncValidators)
    }
}
  , Yi = class extends $i {
    constructor(n, e, t) {
        super(ks(e), Rs(t, e)),
        this.controls = n,
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        })
    }
    registerControl(n, e) {
        return this.controls[n] ? this.controls[n] : (this.controls[n] = e,
        e.setParent(this),
        e._registerOnCollectionChange(this._onCollectionChange),
        e)
    }
    addControl(n, e, t={}) {
        this.registerControl(n, e),
        this.updateValueAndValidity({
            emitEvent: t.emitEvent
        }),
        this._onCollectionChange()
    }
    removeControl(n, e={}) {
        this.controls[n] && this.controls[n]._registerOnCollectionChange( () => {}
        ),
        delete this.controls[n],
        this.updateValueAndValidity({
            emitEvent: e.emitEvent
        }),
        this._onCollectionChange()
    }
    setControl(n, e, t={}) {
        this.controls[n] && this.controls[n]._registerOnCollectionChange( () => {}
        ),
        delete this.controls[n],
        e && this.registerControl(n, e),
        this.updateValueAndValidity({
            emitEvent: t.emitEvent
        }),
        this._onCollectionChange()
    }
    contains(n) {
        return this.controls.hasOwnProperty(n) && this.controls[n].enabled
    }
    setValue(n, e={}) {
        Kc(this, !0, n),
        Object.keys(n).forEach(t => {
            Zc(this, !0, t),
            this.controls[t].setValue(n[t], {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(e)
    }
    patchValue(n, e={}) {
        n != null && (Object.keys(n).forEach(t => {
            let r = this.controls[t];
            r && r.patchValue(n[t], {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(e))
    }
    reset(n={}, e={}) {
        this._forEachChild( (t, r) => {
            t.reset(n ? n[r] : null, {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this._updatePristine(e),
        this._updateTouched(e),
        this.updateValueAndValidity(e)
    }
    getRawValue() {
        return this._reduceChildren({}, (n, e, t) => (n[t] = e.getRawValue(),
        n))
    }
    _syncPendingControls() {
        let n = this._reduceChildren(!1, (e, t) => t._syncPendingControls() ? !0 : e);
        return n && this.updateValueAndValidity({
            onlySelf: !0
        }),
        n
    }
    _forEachChild(n) {
        Object.keys(this.controls).forEach(e => {
            let t = this.controls[e];
            t && n(t, e)
        }
        )
    }
    _setUpControls() {
        this._forEachChild(n => {
            n.setParent(this),
            n._registerOnCollectionChange(this._onCollectionChange)
        }
        )
    }
    _updateValue() {
        this.value = this._reduceValue()
    }
    _anyControls(n) {
        for (let[e,t] of Object.entries(this.controls))
            if (this.contains(e) && n(t))
                return !0;
        return !1
    }
    _reduceValue() {
        let n = {};
        return this._reduceChildren(n, (e, t, r) => ((t.enabled || this.disabled) && (e[r] = t.value),
        e))
    }
    _reduceChildren(n, e) {
        let t = n;
        return this._forEachChild( (r, o) => {
            t = e(t, r, o)
        }
        ),
        t
    }
    _allControlsDisabled() {
        for (let n of Object.keys(this.controls))
            if (this.controls[n].enabled)
                return !1;
        return Object.keys(this.controls).length > 0 || this.disabled
    }
    _find(n) {
        return this.controls.hasOwnProperty(n) ? this.controls[n] : null
    }
}
;
var Ds = class extends Yi {
}
;
var Eo = new x("CallSetDisabledState",{
    providedIn: "root",
    factory: () => Io
})
  , Io = "always";
function Jf(i, n) {
    return [...n.path, i]
}
function Es(i, n, e=Io) {
    Ts(i, n),
    n.valueAccessor.writeValue(i.value),
    (i.disabled || e === "always") && n.valueAccessor.setDisabledState?.(i.disabled),
    tg(i, n),
    ng(i, n),
    ig(i, n),
    eg(i, n)
}
function Fc(i, n, e=!0) {
    let t = () => {}
    ;
    n.valueAccessor && (n.valueAccessor.registerOnChange(t),
    n.valueAccessor.registerOnTouched(t)),
    wo(i, n),
    i && (n._invokeOnDestroyCallbacks(),
    i._registerOnCollectionChange( () => {}
    ))
}
function xo(i, n) {
    i.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(n)
    }
    )
}
function eg(i, n) {
    if (n.valueAccessor.setDisabledState) {
        let e = t => {
            n.valueAccessor.setDisabledState(t)
        }
        ;
        i.registerOnDisabledChange(e),
        n._registerOnDestroy( () => {
            i._unregisterOnDisabledChange(e)
        }
        )
    }
}
function Ts(i, n) {
    let e = Gc(i);
    n.validator !== null ? i.setValidators(kc(e, n.validator)) : typeof e == "function" && i.setValidators([e]);
    let t = Xc(i);
    n.asyncValidator !== null ? i.setAsyncValidators(kc(t, n.asyncValidator)) : typeof t == "function" && i.setAsyncValidators([t]);
    let r = () => i.updateValueAndValidity();
    xo(n._rawValidators, r),
    xo(n._rawAsyncValidators, r)
}
function wo(i, n) {
    let e = !1;
    if (i !== null) {
        if (n.validator !== null) {
            let r = Gc(i);
            if (Array.isArray(r) && r.length > 0) {
                let o = r.filter(a => a !== n.validator);
                o.length !== r.length && (e = !0,
                i.setValidators(o))
            }
        }
        if (n.asyncValidator !== null) {
            let r = Xc(i);
            if (Array.isArray(r) && r.length > 0) {
                let o = r.filter(a => a !== n.asyncValidator);
                o.length !== r.length && (e = !0,
                i.setAsyncValidators(o))
            }
        }
    }
    let t = () => {}
    ;
    return xo(n._rawValidators, t),
    xo(n._rawAsyncValidators, t),
    e
}
function tg(i, n) {
    n.valueAccessor.registerOnChange(e => {
        i._pendingValue = e,
        i._pendingChange = !0,
        i._pendingDirty = !0,
        i.updateOn === "change" && Qc(i, n)
    }
    )
}
function ig(i, n) {
    n.valueAccessor.registerOnTouched( () => {
        i._pendingTouched = !0,
        i.updateOn === "blur" && i._pendingChange && Qc(i, n),
        i.updateOn !== "submit" && i.markAsTouched()
    }
    )
}
function Qc(i, n) {
    i._pendingDirty && i.markAsDirty(),
    i.setValue(i._pendingValue, {
        emitModelToViewChange: !1
    }),
    n.viewToModelUpdate(i._pendingValue),
    i._pendingChange = !1
}
function ng(i, n) {
    let e = (t, r) => {
        n.valueAccessor.writeValue(t),
        r && n.viewToModelUpdate(t)
    }
    ;
    i.registerOnChange(e),
    n._registerOnDestroy( () => {
        i._unregisterOnChange(e)
    }
    )
}
function Jc(i, n) {
    i == null,
    Ts(i, n)
}
function rg(i, n) {
    return wo(i, n)
}
function og(i, n) {
    if (!i.hasOwnProperty("model"))
        return !1;
    let e = i.model;
    return e.isFirstChange() ? !0 : !Object.is(n, e.currentValue)
}
function ag(i) {
    return Object.getPrototypeOf(i.constructor) === Lf
}
function eu(i, n) {
    i._syncPendingControls(),
    n.forEach(e => {
        let t = e.control;
        t.updateOn === "submit" && t._pendingChange && (e.viewToModelUpdate(t._pendingValue),
        t._pendingChange = !1)
    }
    )
}
function sg(i, n) {
    if (!n)
        return null;
    Array.isArray(n);
    let e, t, r;
    return n.forEach(o => {
        o.constructor === Wi ? e = o : ag(o) ? t = o : r = o
    }
    ),
    r || t || e || null
}
function dg(i, n) {
    let e = i.indexOf(n);
    e > -1 && i.splice(e, 1)
}
var lg = {
    provide: Yt,
    useExisting: Me( () => tr)
}
  , er = Promise.resolve()
  , tr = ( () => {
    class i extends Yt {
        constructor(e, t, r) {
            super(),
            this.callSetDisabledState = r,
            this.submitted = !1,
            this._directives = new Set,
            this.ngSubmit = new M,
            this.form = new Yi({},As(e),Ss(t))
        }
        ngAfterViewInit() {
            this._setUpdateStrategy()
        }
        get formDirective() {
            return this
        }
        get control() {
            return this.form
        }
        get path() {
            return []
        }
        get controls() {
            return this.form.controls
        }
        addControl(e) {
            er.then( () => {
                let t = this._findContainer(e.path);
                e.control = t.registerControl(e.name, e.control),
                Es(e.control, e, this.callSetDisabledState),
                e.control.updateValueAndValidity({
                    emitEvent: !1
                }),
                this._directives.add(e)
            }
            )
        }
        getControl(e) {
            return this.form.get(e.path)
        }
        removeControl(e) {
            er.then( () => {
                let t = this._findContainer(e.path);
                t && t.removeControl(e.name),
                this._directives.delete(e)
            }
            )
        }
        addFormGroup(e) {
            er.then( () => {
                let t = this._findContainer(e.path)
                  , r = new Yi({});
                Jc(r, e),
                t.registerControl(e.name, r),
                r.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            )
        }
        removeFormGroup(e) {
            er.then( () => {
                let t = this._findContainer(e.path);
                t && t.removeControl(e.name)
            }
            )
        }
        getFormGroup(e) {
            return this.form.get(e.path)
        }
        updateModel(e, t) {
            er.then( () => {
                this.form.get(e.path).setValue(t)
            }
            )
        }
        setValue(e) {
            this.control.setValue(e)
        }
        onSubmit(e) {
            return this.submitted = !0,
            eu(this.form, this._directives),
            this.ngSubmit.emit(e),
            e?.target?.method === "dialog"
        }
        onReset() {
            this.resetForm()
        }
        resetForm(e=void 0) {
            this.form.reset(e),
            this.submitted = !1
        }
        _setUpdateStrategy() {
            this.options && this.options.updateOn != null && (this.form._updateOn = this.options.updateOn)
        }
        _findContainer(e) {
            return e.pop(),
            e.length ? this.form.get(e) : this.form
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(xt, 10),l(Ms, 10),l(Eo, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
            hostBindings: function(t, r) {
                t & 1 && V("submit", function(a) {
                    return r.onSubmit(a)
                })("reset", function() {
                    return r.onReset()
                })
            },
            inputs: {
                options: [w.None, "ngFormOptions", "options"]
            },
            outputs: {
                ngSubmit: "ngSubmit"
            },
            exportAs: ["ngForm"],
            features: [de([lg]), Z]
        })
        }
    }
    return i
}
)();
function Oc(i, n) {
    let e = i.indexOf(n);
    e > -1 && i.splice(e, 1)
}
function Nc(i) {
    return typeof i == "object" && i !== null && Object.keys(i).length === 2 && "value"in i && "disabled"in i
}
var go = class extends $i {
    constructor(n=null, e, t) {
        super(ks(e), Rs(t, e)),
        this.defaultValue = null,
        this._onChange = [],
        this._pendingChange = !1,
        this._applyFormState(n),
        this._setUpdateStrategy(e),
        this._initObservables(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        }),
        Do(e) && (e.nonNullable || e.initialValueIsDefault) && (Nc(n) ? this.defaultValue = n.value : this.defaultValue = n)
    }
    setValue(n, e={}) {
        this.value = this._pendingValue = n,
        this._onChange.length && e.emitModelToViewChange !== !1 && this._onChange.forEach(t => t(this.value, e.emitViewToModelChange !== !1)),
        this.updateValueAndValidity(e)
    }
    patchValue(n, e={}) {
        this.setValue(n, e)
    }
    reset(n=this.defaultValue, e={}) {
        this._applyFormState(n),
        this.markAsPristine(e),
        this.markAsUntouched(e),
        this.setValue(this.value, e),
        this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(n) {
        return !1
    }
    _allControlsDisabled() {
        return this.disabled
    }
    registerOnChange(n) {
        this._onChange.push(n)
    }
    _unregisterOnChange(n) {
        Oc(this._onChange, n)
    }
    registerOnDisabledChange(n) {
        this._onDisabledChange.push(n)
    }
    _unregisterOnDisabledChange(n) {
        Oc(this._onDisabledChange, n)
    }
    _forEachChild(n) {}
    _syncPendingControls() {
        return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(),
        this._pendingTouched && this.markAsTouched(),
        this._pendingChange) ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
        }),
        !0) : !1
    }
    _applyFormState(n) {
        Nc(n) ? (this.value = this._pendingValue = n.value,
        n.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
        }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
        })) : this.value = this._pendingValue = n
    }
}
;
var cg = i => i instanceof go;
var Xi = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
            hostAttrs: ["novalidate", ""]
        })
        }
    }
    return i
}
)();
var tu = new x("");
var ug = {
    provide: Yt,
    useExisting: Me( () => fi)
}
  , fi = ( () => {
    class i extends Yt {
        constructor(e, t, r) {
            super(),
            this.callSetDisabledState = r,
            this.submitted = !1,
            this._onCollectionChange = () => this._updateDomValue(),
            this.directives = [],
            this.form = null,
            this.ngSubmit = new M,
            this._setValidators(e),
            this._setAsyncValidators(t)
        }
        ngOnChanges(e) {
            this._checkFormPresent(),
            e.hasOwnProperty("form") && (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            this._oldForm = this.form)
        }
        ngOnDestroy() {
            this.form && (wo(this.form, this),
            this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange( () => {}
            ))
        }
        get formDirective() {
            return this
        }
        get control() {
            return this.form
        }
        get path() {
            return []
        }
        addControl(e) {
            let t = this.form.get(e.path);
            return Es(t, e, this.callSetDisabledState),
            t.updateValueAndValidity({
                emitEvent: !1
            }),
            this.directives.push(e),
            t
        }
        getControl(e) {
            return this.form.get(e.path)
        }
        removeControl(e) {
            Fc(e.control || null, e, !1),
            dg(this.directives, e)
        }
        addFormGroup(e) {
            this._setUpFormContainer(e)
        }
        removeFormGroup(e) {
            this._cleanUpFormContainer(e)
        }
        getFormGroup(e) {
            return this.form.get(e.path)
        }
        addFormArray(e) {
            this._setUpFormContainer(e)
        }
        removeFormArray(e) {
            this._cleanUpFormContainer(e)
        }
        getFormArray(e) {
            return this.form.get(e.path)
        }
        updateModel(e, t) {
            this.form.get(e.path).setValue(t)
        }
        onSubmit(e) {
            return this.submitted = !0,
            eu(this.form, this.directives),
            this.ngSubmit.emit(e),
            e?.target?.method === "dialog"
        }
        onReset() {
            this.resetForm()
        }
        resetForm(e=void 0) {
            this.form.reset(e),
            this.submitted = !1
        }
        _updateDomValue() {
            this.directives.forEach(e => {
                let t = e.control
                  , r = this.form.get(e.path);
                t !== r && (Fc(t || null, e),
                cg(r) && (Es(r, e, this.callSetDisabledState),
                e.control = r))
            }
            ),
            this.form._updateTreeValidity({
                emitEvent: !1
            })
        }
        _setUpFormContainer(e) {
            let t = this.form.get(e.path);
            Jc(t, e),
            t.updateValueAndValidity({
                emitEvent: !1
            })
        }
        _cleanUpFormContainer(e) {
            if (this.form) {
                let t = this.form.get(e.path);
                t && rg(t, e) && t.updateValueAndValidity({
                    emitEvent: !1
                })
            }
        }
        _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
            this._oldForm && this._oldForm._registerOnCollectionChange( () => {}
            )
        }
        _updateValidators() {
            Ts(this.form, this),
            this._oldForm && wo(this._oldForm, this)
        }
        _checkFormPresent() {
            this.form
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(xt, 10),l(Ms, 10),l(Eo, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "formGroup", ""]],
            hostBindings: function(t, r) {
                t & 1 && V("submit", function(a) {
                    return r.onSubmit(a)
                })("reset", function() {
                    return r.onReset()
                })
            },
            inputs: {
                form: [w.None, "formGroup", "form"]
            },
            outputs: {
                ngSubmit: "ngSubmit"
            },
            exportAs: ["ngForm"],
            features: [de([ug]), Z, he]
        })
        }
    }
    return i
}
)();
var hg = {
    provide: qt,
    useExisting: Me( () => ir)
}
  , ir = ( () => {
    class i extends qt {
        set isDisabled(e) {}
        static{this._ngModelWarningSentOnce = !1
        }constructor(e, t, r, o, a) {
            super(),
            this._ngModelWarningConfig = a,
            this._added = !1,
            this.name = null,
            this.update = new M,
            this._ngModelWarningSent = !1,
            this._parent = e,
            this._setValidators(t),
            this._setAsyncValidators(r),
            this.valueAccessor = sg(this, o)
        }
        ngOnChanges(e) {
            this._added || this._setUpControl(),
            og(e, this.viewModel) && (this.viewModel = this.model,
            this.formDirective.updateModel(this, this.model))
        }
        ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this)
        }
        viewToModelUpdate(e) {
            this.viewModel = e,
            this.update.emit(e)
        }
        get path() {
            return Jf(this.name == null ? this.name : this.name.toString(), this._parent)
        }
        get formDirective() {
            return this._parent ? this._parent.formDirective : null
        }
        _checkParentType() {}
        _setUpControl() {
            this._checkParentType(),
            this.control = this.formDirective.addControl(this),
            this._added = !0
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Yt, 13),l(xt, 10),l(Ms, 10),l(qi, 10),l(tu, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "formControlName", ""]],
            inputs: {
                name: [w.None, "formControlName", "name"],
                isDisabled: [w.None, "disabled", "isDisabled"],
                model: [w.None, "ngModel", "model"]
            },
            outputs: {
                update: "ngModelChange"
            },
            features: [de([hg]), Z, he]
        })
        }
    }
    return i
}
)();
function mg(i) {
    return typeof i == "number" ? i : parseInt(i, 10)
}
var iu = ( () => {
    class i {
        constructor() {
            this._validator = _o
        }
        ngOnChanges(e) {
            if (this.inputName in e) {
                let t = this.normalizeInput(e[this.inputName].currentValue);
                this._enabled = this.enabled(t),
                this._validator = this._enabled ? this.createValidator(t) : _o,
                this._onChange && this._onChange()
            }
        }
        validate(e) {
            return this._validator(e)
        }
        registerOnValidatorChange(e) {
            this._onChange = e
        }
        enabled(e) {
            return e != null
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            features: [he]
        })
        }
    }
    return i
}
)();
var pg = {
    provide: xt,
    useExisting: Me( () => Fs),
    multi: !0
};
var Fs = ( () => {
    class i extends iu {
        constructor() {
            super(...arguments),
            this.inputName = "required",
            this.normalizeInput = X,
            this.createValidator = e => jc
        }
        enabled(e) {
            return e
        }
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 2 && Y("required", r._enabled ? "" : null)
            },
            inputs: {
                required: "required"
            },
            features: [de([pg]), Z]
        })
        }
    }
    return i
}
)();
var fg = {
    provide: xt,
    useExisting: Me( () => Os),
    multi: !0
}
  , Os = ( () => {
    class i extends iu {
        constructor() {
            super(...arguments),
            this.inputName = "minlength",
            this.normalizeInput = e => mg(e),
            this.createValidator = e => zc(e)
        }
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 2 && Y("minlength", r._enabled ? r.minlength : null)
            },
            inputs: {
                minlength: "minlength"
            },
            features: [de([fg]), Z]
        })
        }
    }
    return i
}
)();
var nu = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({})
        }
    }
    return i
}
)()
  , Is = class extends $i {
    constructor(n, e, t) {
        super(ks(e), Rs(t, e)),
        this.controls = n,
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        })
    }
    at(n) {
        return this.controls[this._adjustIndex(n)]
    }
    push(n, e={}) {
        this.controls.push(n),
        this._registerControl(n),
        this.updateValueAndValidity({
            emitEvent: e.emitEvent
        }),
        this._onCollectionChange()
    }
    insert(n, e, t={}) {
        this.controls.splice(n, 0, e),
        this._registerControl(e),
        this.updateValueAndValidity({
            emitEvent: t.emitEvent
        })
    }
    removeAt(n, e={}) {
        let t = this._adjustIndex(n);
        t < 0 && (t = 0),
        this.controls[t] && this.controls[t]._registerOnCollectionChange( () => {}
        ),
        this.controls.splice(t, 1),
        this.updateValueAndValidity({
            emitEvent: e.emitEvent
        })
    }
    setControl(n, e, t={}) {
        let r = this._adjustIndex(n);
        r < 0 && (r = 0),
        this.controls[r] && this.controls[r]._registerOnCollectionChange( () => {}
        ),
        this.controls.splice(r, 1),
        e && (this.controls.splice(r, 0, e),
        this._registerControl(e)),
        this.updateValueAndValidity({
            emitEvent: t.emitEvent
        }),
        this._onCollectionChange()
    }
    get length() {
        return this.controls.length
    }
    setValue(n, e={}) {
        Kc(this, !1, n),
        n.forEach( (t, r) => {
            Zc(this, !1, r),
            this.at(r).setValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(e)
    }
    patchValue(n, e={}) {
        n != null && (n.forEach( (t, r) => {
            this.at(r) && this.at(r).patchValue(t, {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(e))
    }
    reset(n=[], e={}) {
        this._forEachChild( (t, r) => {
            t.reset(n[r], {
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        ),
        this._updatePristine(e),
        this._updateTouched(e),
        this.updateValueAndValidity(e)
    }
    getRawValue() {
        return this.controls.map(n => n.getRawValue())
    }
    clear(n={}) {
        this.controls.length < 1 || (this._forEachChild(e => e._registerOnCollectionChange( () => {}
        )),
        this.controls.splice(0),
        this.updateValueAndValidity({
            emitEvent: n.emitEvent
        }))
    }
    _adjustIndex(n) {
        return n < 0 ? n + this.length : n
    }
    _syncPendingControls() {
        let n = this.controls.reduce( (e, t) => t._syncPendingControls() ? !0 : e, !1);
        return n && this.updateValueAndValidity({
            onlySelf: !0
        }),
        n
    }
    _forEachChild(n) {
        this.controls.forEach( (e, t) => {
            n(e, t)
        }
        )
    }
    _updateValue() {
        this.value = this.controls.filter(n => n.enabled || this.disabled).map(n => n.value)
    }
    _anyControls(n) {
        return this.controls.some(e => e.enabled && n(e))
    }
    _setUpControls() {
        this._forEachChild(n => this._registerControl(n))
    }
    _allControlsDisabled() {
        for (let n of this.controls)
            if (n.enabled)
                return !1;
        return this.controls.length > 0 || this.disabled
    }
    _registerControl(n) {
        n.setParent(this),
        n._registerOnCollectionChange(this._onCollectionChange)
    }
    _find(n) {
        return this.at(n) ?? null
    }
}
;
function Pc(i) {
    return !!i && (i.asyncValidators !== void 0 || i.validators !== void 0 || i.updateOn !== void 0)
}
var Mo = ( () => {
    class i {
        constructor() {
            this.useNonNullable = !1
        }
        get nonNullable() {
            let e = new i;
            return e.useNonNullable = !0,
            e
        }
        group(e, t=null) {
            let r = this._reduceControls(e)
              , o = {};
            return Pc(t) ? o = t : t !== null && (o.validators = t.validator,
            o.asyncValidators = t.asyncValidator),
            new Yi(r,o)
        }
        record(e, t=null) {
            let r = this._reduceControls(e);
            return new Ds(r,t)
        }
        control(e, t, r) {
            let o = {};
            return this.useNonNullable ? (Pc(t) ? o = t : (o.validators = t,
            o.asyncValidators = r),
            new go(e,ie(v({}, o), {
                nonNullable: !0
            }))) : new go(e,t,r)
        }
        array(e, t, r) {
            let o = e.map(a => this._createControl(a));
            return new Is(o,t,r)
        }
        _reduceControls(e) {
            let t = {};
            return Object.keys(e).forEach(r => {
                t[r] = this._createControl(e[r])
            }
            ),
            t
        }
        _createControl(e) {
            if (e instanceof go)
                return e;
            if (e instanceof $i)
                return e;
            if (Array.isArray(e)) {
                let t = e[0]
                  , r = e.length > 1 ? e[1] : null
                  , o = e.length > 2 ? e[2] : null;
                return this.control(t, r, o)
            } else
                return this.control(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Zi = ( () => {
    class i {
        static withConfig(e) {
            return {
                ngModule: i,
                providers: [{
                    provide: Eo,
                    useValue: e.callSetDisabledState ?? Io
                }]
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [nu]
        })
        }
    }
    return i
}
)()
  , Ki = ( () => {
    class i {
        static withConfig(e) {
            return {
                ngModule: i,
                providers: [{
                    provide: tu,
                    useValue: e.warnOnNgModelWithFormControl ?? "always"
                }, {
                    provide: Eo,
                    useValue: e.callSetDisabledState ?? Io
                }]
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [nu]
        })
        }
    }
    return i
}
)();
var Ps;
try {
    Ps = typeof Intl < "u" && Intl.v8BreakIterator
} catch {
    Ps = !1
}
var G = ( () => {
    class i {
        constructor(e) {
            this._platformId = e,
            this.isBrowser = this._platformId ? bl(this._platformId) : typeof document == "object" && !!document,
            this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent),
            this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent),
            this.BLINK = this.isBrowser && !!(window.chrome || Ps) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT,
            this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT,
            this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream"in window),
            this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent),
            this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT,
            this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(at))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Qi, ru = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function Vs() {
    if (Qi)
        return Qi;
    if (typeof document != "object" || !document)
        return Qi = new Set(ru),
        Qi;
    let i = document.createElement("input");
    return Qi = new Set(ru.filter(n => (i.setAttribute("type", n),
    i.type === n))),
    Qi
}
var nr;
function gg() {
    if (nr == null && typeof window < "u")
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: () => nr = !0
            }))
        } finally {
            nr = nr || !1
        }
    return nr
}
function Ke(i) {
    return gg() ? i : !!i.capture
}
var gi;
function ou() {
    if (gi == null) {
        if (typeof document != "object" || !document || typeof Element != "function" || !Element)
            return gi = !1,
            gi;
        if ("scrollBehavior"in document.documentElement.style)
            gi = !0;
        else {
            let i = Element.prototype.scrollTo;
            i ? gi = !/\{\s*\[native code\]\s*\}/.test(i.toString()) : gi = !1
        }
    }
    return gi
}
var Ns;
function _g() {
    if (Ns == null) {
        let i = typeof document < "u" ? document.head : null;
        Ns = !!(i && (i.createShadowRoot || i.attachShadow))
    }
    return Ns
}
function au(i) {
    if (_g()) {
        let n = i.getRootNode ? i.getRootNode() : null;
        if (typeof ShadowRoot < "u" && ShadowRoot && n instanceof ShadowRoot)
            return n
    }
    return null
}
function mt() {
    let i = typeof document < "u" && document ? document.activeElement : null;
    for (; i && i.shadowRoot; ) {
        let n = i.shadowRoot.activeElement;
        if (n === i)
            break;
        i = n
    }
    return i
}
function tt(i) {
    return i.composedPath ? i.composedPath()[0] : i.target
}
function rr() {
    return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
}
function je(i, ...n) {
    return n.length ? n.some(e => i[e]) : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey
}
function _i(i) {
    return i != null && `${i}` != "false"
}
function Ji(i, n=0) {
    return bg(i) ? Number(i) : n
}
function bg(i) {
    return !isNaN(parseFloat(i)) && !isNaN(Number(i))
}
function en(i) {
    return Array.isArray(i) ? i : [i]
}
function ye(i) {
    return i == null ? "" : typeof i == "string" ? i : `${i}px`
}
function Qe(i) {
    return i instanceof F ? i.nativeElement : i
}
function su(i, n=/\s+/) {
    let e = [];
    if (i != null) {
        let t = Array.isArray(i) ? i : `${i}`.split(n);
        for (let r of t) {
            let o = `${r}`.trim();
            o && e.push(o)
        }
    }
    return e
}
var vg = ( () => {
    class i {
        create(e) {
            return typeof MutationObserver > "u" ? null : new MutationObserver(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var So = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            providers: [vg]
        })
        }
    }
    return i
}
)();
var du = new Set, bi, yg = ( () => {
    class i {
        constructor(e, t) {
            this._platform = e,
            this._nonce = t,
            this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : wg
        }
        matchMedia(e) {
            return (this._platform.WEBKIT || this._platform.BLINK) && xg(e, this._nonce),
            this._matchMedia(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G),p(wn, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function xg(i, n) {
    if (!du.has(i))
        try {
            bi || (bi = document.createElement("style"),
            n && bi.setAttribute("nonce", n),
            bi.setAttribute("type", "text/css"),
            document.head.appendChild(bi)),
            bi.sheet && (bi.sheet.insertRule(`@media ${i} {body{ }}`, 0),
            du.add(i))
        } catch (e) {
            console.error(e)
        }
}
function wg(i) {
    return {
        matches: i === "all" || i === "",
        media: i,
        addListener: () => {}
        ,
        removeListener: () => {}
    }
}
var ko = ( () => {
    class i {
        constructor(e, t) {
            this._mediaMatcher = e,
            this._zone = t,
            this._queries = new Map,
            this._destroySubject = new A
        }
        ngOnDestroy() {
            this._destroySubject.next(),
            this._destroySubject.complete()
        }
        isMatched(e) {
            return lu(en(e)).some(r => this._registerQuery(r).mql.matches)
        }
        observe(e) {
            let r = lu(en(e)).map(a => this._registerQuery(a).observable)
              , o = bn(r);
            return o = Cr(o.pipe(fe(1)), o.pipe(Ir(1), Er(0))),
            o.pipe(N(a => {
                let s = {
                    matches: !1,
                    breakpoints: {}
                };
                return a.forEach( ({matches: d, query: c}) => {
                    s.matches = s.matches || d,
                    s.breakpoints[c] = d
                }
                ),
                s
            }
            ))
        }
        _registerQuery(e) {
            if (this._queries.has(e))
                return this._queries.get(e);
            let t = this._mediaMatcher.matchMedia(e)
              , o = {
                observable: new bt(a => {
                    let s = d => this._zone.run( () => a.next(d));
                    return t.addListener(s),
                    () => {
                        t.removeListener(s)
                    }
                }
                ).pipe(Ce(t), N( ({matches: a}) => ({
                    query: e,
                    matches: a
                })), ge(this._destroySubject)),
                mql: t
            };
            return this._queries.set(e, o),
            o
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(yg),p(T))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function lu(i) {
    return i.map(n => n.split(",")).reduce( (n, e) => n.concat(e)).map(n => n.trim())
}
var js = class {
    constructor(n, e) {
        this._items = n,
        this._activeItemIndex = -1,
        this._activeItem = null,
        this._wrap = !1,
        this._letterKeyStream = new A,
        this._typeaheadSubscription = ce.EMPTY,
        this._vertical = !0,
        this._allowedModifierKeys = [],
        this._homeAndEnd = !1,
        this._pageUpAndDown = {
            enabled: !1,
            delta: 10
        },
        this._skipPredicateFn = t => t.disabled,
        this._pressedLetters = [],
        this.tabOut = new A,
        this.change = new A,
        n instanceof Ft ? this._itemChangesSubscription = n.changes.subscribe(t => this._itemsChanged(t.toArray())) : ma(n) && (this._effectRef = ll( () => this._itemsChanged(n()), {
            injector: e
        }))
    }
    skipPredicate(n) {
        return this._skipPredicateFn = n,
        this
    }
    withWrap(n=!0) {
        return this._wrap = n,
        this
    }
    withVerticalOrientation(n=!0) {
        return this._vertical = n,
        this
    }
    withHorizontalOrientation(n) {
        return this._horizontal = n,
        this
    }
    withAllowedModifierKeys(n) {
        return this._allowedModifierKeys = n,
        this
    }
    withTypeAhead(n=200) {
        return this._typeaheadSubscription.unsubscribe(),
        this._typeaheadSubscription = this._letterKeyStream.pipe(ue(e => this._pressedLetters.push(e)), Er(n), pe( () => this._pressedLetters.length > 0), N( () => this._pressedLetters.join(""))).subscribe(e => {
            let t = this._getItemsArray();
            for (let r = 1; r < t.length + 1; r++) {
                let o = (this._activeItemIndex + r) % t.length
                  , a = t[o];
                if (!this._skipPredicateFn(a) && a.getLabel().toUpperCase().trim().indexOf(e) === 0) {
                    this.setActiveItem(o);
                    break
                }
            }
            this._pressedLetters = []
        }
        ),
        this
    }
    cancelTypeahead() {
        return this._pressedLetters = [],
        this
    }
    withHomeAndEnd(n=!0) {
        return this._homeAndEnd = n,
        this
    }
    withPageUpDown(n=!0, e=10) {
        return this._pageUpAndDown = {
            enabled: n,
            delta: e
        },
        this
    }
    setActiveItem(n) {
        let e = this._activeItem;
        this.updateActiveItem(n),
        this._activeItem !== e && this.change.next(this._activeItemIndex)
    }
    onKeydown(n) {
        let e = n.keyCode
          , r = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(o => !n[o] || this._allowedModifierKeys.indexOf(o) > -1);
        switch (e) {
        case 9:
            this.tabOut.next();
            return;
        case 40:
            if (this._vertical && r) {
                this.setNextItemActive();
                break
            } else
                return;
        case 38:
            if (this._vertical && r) {
                this.setPreviousItemActive();
                break
            } else
                return;
        case 39:
            if (this._horizontal && r) {
                this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
                break
            } else
                return;
        case 37:
            if (this._horizontal && r) {
                this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
                break
            } else
                return;
        case 36:
            if (this._homeAndEnd && r) {
                this.setFirstItemActive();
                break
            } else
                return;
        case 35:
            if (this._homeAndEnd && r) {
                this.setLastItemActive();
                break
            } else
                return;
        case 33:
            if (this._pageUpAndDown.enabled && r) {
                let o = this._activeItemIndex - this._pageUpAndDown.delta;
                this._setActiveItemByIndex(o > 0 ? o : 0, 1);
                break
            } else
                return;
        case 34:
            if (this._pageUpAndDown.enabled && r) {
                let o = this._activeItemIndex + this._pageUpAndDown.delta
                  , a = this._getItemsArray().length;
                this._setActiveItemByIndex(o < a ? o : a - 1, -1);
                break
            } else
                return;
        default:
            (r || je(n, "shiftKey")) && (n.key && n.key.length === 1 ? this._letterKeyStream.next(n.key.toLocaleUpperCase()) : (e >= 65 && e <= 90 || e >= 48 && e <= 57) && this._letterKeyStream.next(String.fromCharCode(e)));
            return
        }
        this._pressedLetters = [],
        n.preventDefault()
    }
    get activeItemIndex() {
        return this._activeItemIndex
    }
    get activeItem() {
        return this._activeItem
    }
    isTyping() {
        return this._pressedLetters.length > 0
    }
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1)
    }
    setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1)
    }
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
    }
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
    }
    updateActiveItem(n) {
        let e = this._getItemsArray()
          , t = typeof n == "number" ? n : e.indexOf(n)
          , r = e[t];
        this._activeItem = r ?? null,
        this._activeItemIndex = t
    }
    destroy() {
        this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._letterKeyStream.complete(),
        this.tabOut.complete(),
        this.change.complete(),
        this._pressedLetters = []
    }
    _setActiveItemByDelta(n) {
        this._wrap ? this._setActiveInWrapMode(n) : this._setActiveInDefaultMode(n)
    }
    _setActiveInWrapMode(n) {
        let e = this._getItemsArray();
        for (let t = 1; t <= e.length; t++) {
            let r = (this._activeItemIndex + n * t + e.length) % e.length
              , o = e[r];
            if (!this._skipPredicateFn(o)) {
                this.setActiveItem(r);
                return
            }
        }
    }
    _setActiveInDefaultMode(n) {
        this._setActiveItemByIndex(this._activeItemIndex + n, n)
    }
    _setActiveItemByIndex(n, e) {
        let t = this._getItemsArray();
        if (t[n]) {
            for (; this._skipPredicateFn(t[n]); )
                if (n += e,
                !t[n])
                    return;
            this.setActiveItem(n)
        }
    }
    _getItemsArray() {
        return ma(this._items) ? this._items() : this._items instanceof Ft ? this._items.toArray() : this._items
    }
    _itemsChanged(n) {
        if (this._activeItem) {
            let e = n.indexOf(this._activeItem);
            e > -1 && e !== this._activeItemIndex && (this._activeItemIndex = e)
        }
    }
}
;
var Fo = class extends js {
    constructor() {
        super(...arguments),
        this._origin = "program"
    }
    setFocusOrigin(n) {
        return this._origin = n,
        this
    }
    setActiveItem(n) {
        super.setActiveItem(n),
        this.activeItem && this.activeItem.focus(this._origin)
    }
}
;
var sr = ( () => {
    class i {
        constructor(e) {
            this._platform = e
        }
        isDisabled(e) {
            return e.hasAttribute("disabled")
        }
        isVisible(e) {
            return Og(e) && getComputedStyle(e).visibility === "visible"
        }
        isTabbable(e) {
            if (!this._platform.isBrowser)
                return !1;
            let t = Fg(Ug(e));
            if (t && (cu(t) === -1 || !this.isVisible(t)))
                return !1;
            let r = e.nodeName.toLowerCase()
              , o = cu(e);
            return e.hasAttribute("contenteditable") ? o !== -1 : r === "iframe" || r === "object" || this._platform.WEBKIT && this._platform.IOS && !zg(e) ? !1 : r === "audio" ? e.hasAttribute("controls") ? o !== -1 : !1 : r === "video" ? o === -1 ? !1 : o !== null ? !0 : this._platform.FIREFOX || e.hasAttribute("controls") : e.tabIndex >= 0
        }
        isFocusable(e, t) {
            return Bg(e) && !this.isDisabled(e) && (t?.ignoreVisibility || this.isVisible(e))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function Fg(i) {
    try {
        return i.frameElement
    } catch {
        return null
    }
}
function Og(i) {
    return !!(i.offsetWidth || i.offsetHeight || typeof i.getClientRects == "function" && i.getClientRects().length)
}
function Ng(i) {
    let n = i.nodeName.toLowerCase();
    return n === "input" || n === "select" || n === "button" || n === "textarea"
}
function Pg(i) {
    return Lg(i) && i.type == "hidden"
}
function Vg(i) {
    return jg(i) && i.hasAttribute("href")
}
function Lg(i) {
    return i.nodeName.toLowerCase() == "input"
}
function jg(i) {
    return i.nodeName.toLowerCase() == "a"
}
function mu(i) {
    if (!i.hasAttribute("tabindex") || i.tabIndex === void 0)
        return !1;
    let n = i.getAttribute("tabindex");
    return !!(n && !isNaN(parseInt(n, 10)))
}
function cu(i) {
    if (!mu(i))
        return null;
    let n = parseInt(i.getAttribute("tabindex") || "", 10);
    return isNaN(n) ? -1 : n
}
function zg(i) {
    let n = i.nodeName.toLowerCase()
      , e = n === "input" && i.type;
    return e === "text" || e === "password" || n === "select" || n === "textarea"
}
function Bg(i) {
    return Pg(i) ? !1 : Ng(i) || Vg(i) || i.hasAttribute("contenteditable") || mu(i)
}
function Ug(i) {
    return i.ownerDocument && i.ownerDocument.defaultView || window
}
var zs = class {
    get enabled() {
        return this._enabled
    }
    set enabled(n) {
        this._enabled = n,
        this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(n, this._startAnchor),
        this._toggleAnchorTabIndex(n, this._endAnchor))
    }
    constructor(n, e, t, r, o=!1) {
        this._element = n,
        this._checker = e,
        this._ngZone = t,
        this._document = r,
        this._hasAttached = !1,
        this.startAnchorListener = () => this.focusLastTabbableElement(),
        this.endAnchorListener = () => this.focusFirstTabbableElement(),
        this._enabled = !0,
        o || this.attachAnchors()
    }
    destroy() {
        let n = this._startAnchor
          , e = this._endAnchor;
        n && (n.removeEventListener("focus", this.startAnchorListener),
        n.remove()),
        e && (e.removeEventListener("focus", this.endAnchorListener),
        e.remove()),
        this._startAnchor = this._endAnchor = null,
        this._hasAttached = !1
    }
    attachAnchors() {
        return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular( () => {
            this._startAnchor || (this._startAnchor = this._createAnchor(),
            this._startAnchor.addEventListener("focus", this.startAnchorListener)),
            this._endAnchor || (this._endAnchor = this._createAnchor(),
            this._endAnchor.addEventListener("focus", this.endAnchorListener))
        }
        ),
        this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element),
        this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling),
        this._hasAttached = !0),
        this._hasAttached)
    }
    focusInitialElementWhenReady(n) {
        return new Promise(e => {
            this._executeOnStable( () => e(this.focusInitialElement(n)))
        }
        )
    }
    focusFirstTabbableElementWhenReady(n) {
        return new Promise(e => {
            this._executeOnStable( () => e(this.focusFirstTabbableElement(n)))
        }
        )
    }
    focusLastTabbableElementWhenReady(n) {
        return new Promise(e => {
            this._executeOnStable( () => e(this.focusLastTabbableElement(n)))
        }
        )
    }
    _getRegionBoundary(n) {
        let e = this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);
        return n == "start" ? e.length ? e[0] : this._getFirstTabbableElement(this._element) : e.length ? e[e.length - 1] : this._getLastTabbableElement(this._element)
    }
    focusInitialElement(n) {
        let e = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
        if (e) {
            if (!this._checker.isFocusable(e)) {
                let t = this._getFirstTabbableElement(e);
                return t?.focus(n),
                !!t
            }
            return e.focus(n),
            !0
        }
        return this.focusFirstTabbableElement(n)
    }
    focusFirstTabbableElement(n) {
        let e = this._getRegionBoundary("start");
        return e && e.focus(n),
        !!e
    }
    focusLastTabbableElement(n) {
        let e = this._getRegionBoundary("end");
        return e && e.focus(n),
        !!e
    }
    hasAttached() {
        return this._hasAttached
    }
    _getFirstTabbableElement(n) {
        if (this._checker.isFocusable(n) && this._checker.isTabbable(n))
            return n;
        let e = n.children;
        for (let t = 0; t < e.length; t++) {
            let r = e[t].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(e[t]) : null;
            if (r)
                return r
        }
        return null
    }
    _getLastTabbableElement(n) {
        if (this._checker.isFocusable(n) && this._checker.isTabbable(n))
            return n;
        let e = n.children;
        for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[t]) : null;
            if (r)
                return r
        }
        return null
    }
    _createAnchor() {
        let n = this._document.createElement("div");
        return this._toggleAnchorTabIndex(this._enabled, n),
        n.classList.add("cdk-visually-hidden"),
        n.classList.add("cdk-focus-trap-anchor"),
        n.setAttribute("aria-hidden", "true"),
        n
    }
    _toggleAnchorTabIndex(n, e) {
        n ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex")
    }
    toggleAnchors(n) {
        this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(n, this._startAnchor),
        this._toggleAnchorTabIndex(n, this._endAnchor))
    }
    _executeOnStable(n) {
        this._ngZone.isStable ? n() : this._ngZone.onStable.pipe(fe(1)).subscribe(n)
    }
}
  , dr = ( () => {
    class i {
        constructor(e, t, r) {
            this._checker = e,
            this._ngZone = t,
            this._document = r
        }
        create(e, t=!1) {
            return new zs(e,this._checker,this._ngZone,this._document,t)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(sr),p(T),p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , pu = ( () => {
    class i {
        get enabled() {
            return this.focusTrap?.enabled || !1
        }
        set enabled(e) {
            this.focusTrap && (this.focusTrap.enabled = e)
        }
        constructor(e, t, r) {
            this._elementRef = e,
            this._focusTrapFactory = t,
            this._previouslyFocusedElement = null,
            g(G).isBrowser && (this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, !0))
        }
        ngOnDestroy() {
            this.focusTrap?.destroy(),
            this._previouslyFocusedElement && (this._previouslyFocusedElement.focus(),
            this._previouslyFocusedElement = null)
        }
        ngAfterContentInit() {
            this.focusTrap?.attachAnchors(),
            this.autoCapture && this._captureFocus()
        }
        ngDoCheck() {
            this.focusTrap && !this.focusTrap.hasAttached() && this.focusTrap.attachAnchors()
        }
        ngOnChanges(e) {
            let t = e.autoCapture;
            t && !t.firstChange && this.autoCapture && this.focusTrap?.hasAttached() && this._captureFocus()
        }
        _captureFocus() {
            this._previouslyFocusedElement = mt(),
            this.focusTrap?.focusInitialElementWhenReady()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(dr),l(O))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkTrapFocus", ""]],
            inputs: {
                enabled: [w.HasDecoratorInputTransform, "cdkTrapFocus", "enabled", X],
                autoCapture: [w.HasDecoratorInputTransform, "cdkTrapFocusAutoCapture", "autoCapture", X]
            },
            exportAs: ["cdkTrapFocus"],
            standalone: !0,
            features: [be, he]
        })
        }
    }
    return i
}
)();
function Bs(i) {
    return i.buttons === 0 || i.detail === 0
}
function Us(i) {
    let n = i.touches && i.touches[0] || i.changedTouches && i.changedTouches[0];
    return !!n && n.identifier === -1 && (n.radiusX == null || n.radiusX === 1) && (n.radiusY == null || n.radiusY === 1)
}
var Hg = new x("cdk-input-modality-detector-options")
  , $g = {
    ignoreKeys: [18, 17, 224, 91, 16]
}
  , fu = 650
  , tn = Ke({
    passive: !0,
    capture: !0
})
  , Yg = ( () => {
    class i {
        get mostRecentModality() {
            return this._modality.value
        }
        constructor(e, t, r, o) {
            this._platform = e,
            this._mostRecentTarget = null,
            this._modality = new ze(null),
            this._lastTouchMs = 0,
            this._onKeydown = a => {
                this._options?.ignoreKeys?.some(s => s === a.keyCode) || (this._modality.next("keyboard"),
                this._mostRecentTarget = tt(a))
            }
            ,
            this._onMousedown = a => {
                Date.now() - this._lastTouchMs < fu || (this._modality.next(Bs(a) ? "keyboard" : "mouse"),
                this._mostRecentTarget = tt(a))
            }
            ,
            this._onTouchstart = a => {
                if (Us(a)) {
                    this._modality.next("keyboard");
                    return
                }
                this._lastTouchMs = Date.now(),
                this._modality.next("touch"),
                this._mostRecentTarget = tt(a)
            }
            ,
            this._options = v(v({}, $g), o),
            this.modalityDetected = this._modality.pipe(Ir(1)),
            this.modalityChanged = this.modalityDetected.pipe(vn()),
            e.isBrowser && t.runOutsideAngular( () => {
                r.addEventListener("keydown", this._onKeydown, tn),
                r.addEventListener("mousedown", this._onMousedown, tn),
                r.addEventListener("touchstart", this._onTouchstart, tn)
            }
            )
        }
        ngOnDestroy() {
            this._modality.complete(),
            this._platform.isBrowser && (document.removeEventListener("keydown", this._onKeydown, tn),
            document.removeEventListener("mousedown", this._onMousedown, tn),
            document.removeEventListener("touchstart", this._onTouchstart, tn))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G),p(T),p(O),p(Hg, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var To = function(i) {
    return i[i.IMMEDIATE = 0] = "IMMEDIATE",
    i[i.EVENTUAL = 1] = "EVENTUAL",
    i
}(To || {})
  , qg = new x("cdk-focus-monitor-default-options")
  , Ro = Ke({
    passive: !0,
    capture: !0
})
  , it = ( () => {
    class i {
        constructor(e, t, r, o, a) {
            this._ngZone = e,
            this._platform = t,
            this._inputModalityDetector = r,
            this._origin = null,
            this._windowFocused = !1,
            this._originFromTouchInteraction = !1,
            this._elementInfo = new Map,
            this._monitoredElementCount = 0,
            this._rootNodeFocusListenerCount = new Map,
            this._windowFocusListener = () => {
                this._windowFocused = !0,
                this._windowFocusTimeoutId = window.setTimeout( () => this._windowFocused = !1)
            }
            ,
            this._stopInputModalityDetector = new A,
            this._rootNodeFocusAndBlurListener = s => {
                let d = tt(s);
                for (let c = d; c; c = c.parentElement)
                    s.type === "focus" ? this._onFocus(s, c) : this._onBlur(s, c)
            }
            ,
            this._document = o,
            this._detectionMode = a?.detectionMode || To.IMMEDIATE
        }
        monitor(e, t=!1) {
            let r = Qe(e);
            if (!this._platform.isBrowser || r.nodeType !== 1)
                return E();
            let o = au(r) || this._getDocument()
              , a = this._elementInfo.get(r);
            if (a)
                return t && (a.checkChildren = !0),
                a.subject;
            let s = {
                checkChildren: t,
                subject: new A,
                rootNode: o
            };
            return this._elementInfo.set(r, s),
            this._registerGlobalListeners(s),
            s.subject
        }
        stopMonitoring(e) {
            let t = Qe(e)
              , r = this._elementInfo.get(t);
            r && (r.subject.complete(),
            this._setClasses(t),
            this._elementInfo.delete(t),
            this._removeGlobalListeners(r))
        }
        focusVia(e, t, r) {
            let o = Qe(e)
              , a = this._getDocument().activeElement;
            o === a ? this._getClosestElementsInfo(o).forEach( ([s,d]) => this._originChanged(s, t, d)) : (this._setOrigin(t),
            typeof o.focus == "function" && o.focus(r))
        }
        ngOnDestroy() {
            this._elementInfo.forEach( (e, t) => this.stopMonitoring(t))
        }
        _getDocument() {
            return this._document || document
        }
        _getWindow() {
            return this._getDocument().defaultView || window
        }
        _getFocusOrigin(e) {
            return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(e) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : e && this._isLastInteractionFromInputLabel(e) ? "mouse" : "program"
        }
        _shouldBeAttributedToTouch(e) {
            return this._detectionMode === To.EVENTUAL || !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        }
        _setClasses(e, t) {
            e.classList.toggle("cdk-focused", !!t),
            e.classList.toggle("cdk-touch-focused", t === "touch"),
            e.classList.toggle("cdk-keyboard-focused", t === "keyboard"),
            e.classList.toggle("cdk-mouse-focused", t === "mouse"),
            e.classList.toggle("cdk-program-focused", t === "program")
        }
        _setOrigin(e, t=!1) {
            this._ngZone.runOutsideAngular( () => {
                if (this._origin = e,
                this._originFromTouchInteraction = e === "touch" && t,
                this._detectionMode === To.IMMEDIATE) {
                    clearTimeout(this._originTimeoutId);
                    let r = this._originFromTouchInteraction ? fu : 1;
                    this._originTimeoutId = setTimeout( () => this._origin = null, r)
                }
            }
            )
        }
        _onFocus(e, t) {
            let r = this._elementInfo.get(t)
              , o = tt(e);
            !r || !r.checkChildren && t !== o || this._originChanged(t, this._getFocusOrigin(o), r)
        }
        _onBlur(e, t) {
            let r = this._elementInfo.get(t);
            !r || r.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t),
            this._emitOrigin(r, null))
        }
        _emitOrigin(e, t) {
            e.subject.observers.length && this._ngZone.run( () => e.subject.next(t))
        }
        _registerGlobalListeners(e) {
            if (!this._platform.isBrowser)
                return;
            let t = e.rootNode
              , r = this._rootNodeFocusListenerCount.get(t) || 0;
            r || this._ngZone.runOutsideAngular( () => {
                t.addEventListener("focus", this._rootNodeFocusAndBlurListener, Ro),
                t.addEventListener("blur", this._rootNodeFocusAndBlurListener, Ro)
            }
            ),
            this._rootNodeFocusListenerCount.set(t, r + 1),
            ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular( () => {
                this._getWindow().addEventListener("focus", this._windowFocusListener)
            }
            ),
            this._inputModalityDetector.modalityDetected.pipe(ge(this._stopInputModalityDetector)).subscribe(o => {
                this._setOrigin(o, !0)
            }
            ))
        }
        _removeGlobalListeners(e) {
            let t = e.rootNode;
            if (this._rootNodeFocusListenerCount.has(t)) {
                let r = this._rootNodeFocusListenerCount.get(t);
                r > 1 ? this._rootNodeFocusListenerCount.set(t, r - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Ro),
                t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Ro),
                this._rootNodeFocusListenerCount.delete(t))
            }
            --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener),
            this._stopInputModalityDetector.next(),
            clearTimeout(this._windowFocusTimeoutId),
            clearTimeout(this._originTimeoutId))
        }
        _originChanged(e, t, r) {
            this._setClasses(e, t),
            this._emitOrigin(r, t),
            this._lastFocusOrigin = t
        }
        _getClosestElementsInfo(e) {
            let t = [];
            return this._elementInfo.forEach( (r, o) => {
                (o === e || r.checkChildren && o.contains(e)) && t.push([o, r])
            }
            ),
            t
        }
        _isLastInteractionFromInputLabel(e) {
            let {_mostRecentTarget: t, mostRecentModality: r} = this._inputModalityDetector;
            if (r !== "mouse" || !t || t === e || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled)
                return !1;
            let o = e.labels;
            if (o) {
                for (let a = 0; a < o.length; a++)
                    if (o[a].contains(t))
                        return !0
            }
            return !1
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(T),p(G),p(Yg),p(O, 8),p(qg, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , gu = ( () => {
    class i {
        constructor(e, t) {
            this._elementRef = e,
            this._focusMonitor = t,
            this._focusOrigin = null,
            this.cdkFocusChange = new M
        }
        get focusOrigin() {
            return this._focusOrigin
        }
        ngAfterViewInit() {
            let e = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(e, e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t => {
                this._focusOrigin = t,
                this.cdkFocusChange.emit(t)
            }
            )
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef),
            this._monitorSubscription && this._monitorSubscription.unsubscribe()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(it))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
            outputs: {
                cdkFocusChange: "cdkFocusChange"
            },
            exportAs: ["cdkMonitorFocus"],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , vi = function(i) {
    return i[i.NONE = 0] = "NONE",
    i[i.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE",
    i[i.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK",
    i
}(vi || {})
  , uu = "cdk-high-contrast-black-on-white"
  , hu = "cdk-high-contrast-white-on-black"
  , Ls = "cdk-high-contrast-active"
  , Hs = ( () => {
    class i {
        constructor(e, t) {
            this._platform = e,
            this._document = t,
            this._breakpointSubscription = g(ko).observe("(forced-colors: active)").subscribe( () => {
                this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1,
                this._applyBodyHighContrastModeCssClasses())
            }
            )
        }
        getHighContrastMode() {
            if (!this._platform.isBrowser)
                return vi.NONE;
            let e = this._document.createElement("div");
            e.style.backgroundColor = "rgb(1,2,3)",
            e.style.position = "absolute",
            this._document.body.appendChild(e);
            let t = this._document.defaultView || window
              , r = t && t.getComputedStyle ? t.getComputedStyle(e) : null
              , o = (r && r.backgroundColor || "").replace(/ /g, "");
            switch (e.remove(),
            o) {
            case "rgb(0,0,0)":
            case "rgb(45,50,54)":
            case "rgb(32,32,32)":
                return vi.WHITE_ON_BLACK;
            case "rgb(255,255,255)":
            case "rgb(255,250,239)":
                return vi.BLACK_ON_WHITE
            }
            return vi.NONE
        }
        ngOnDestroy() {
            this._breakpointSubscription.unsubscribe()
        }
        _applyBodyHighContrastModeCssClasses() {
            if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                let e = this._document.body.classList;
                e.remove(Ls, uu, hu),
                this._hasCheckedHighContrastMode = !0;
                let t = this.getHighContrastMode();
                t === vi.BLACK_ON_WHITE ? e.add(Ls, uu) : t === vi.WHITE_ON_BLACK && e.add(Ls, hu)
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G),p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , _u = ( () => {
    class i {
        constructor(e) {
            e._applyBodyHighContrastModeCssClasses()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Hs))
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [So]
        })
        }
    }
    return i
}
)();
var Wg = new x("cdk-dir-doc",{
    providedIn: "root",
    factory: Gg
});
function Gg() {
    return g(O)
}
var Xg = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Zg(i) {
    let n = i?.toLowerCase() || "";
    return n === "auto" && typeof navigator < "u" && navigator?.language ? Xg.test(navigator.language) ? "rtl" : "ltr" : n === "rtl" ? "rtl" : "ltr"
}
var Oe = ( () => {
    class i {
        constructor(e) {
            if (this.value = "ltr",
            this.change = new M,
            e) {
                let t = e.body ? e.body.dir : null
                  , r = e.documentElement ? e.documentElement.dir : null;
                this.value = Zg(t || r || "ltr")
            }
        }
        ngOnDestroy() {
            this.change.complete()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Wg, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var pt = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({})
        }
    }
    return i
}
)();
var Kg = ["mat-internal-form-field", ""]
  , Qg = ["*"];
function Jg() {
    return !0
}
var e_ = new x("mat-sanity-checks",{
    providedIn: "root",
    factory: Jg
})
  , _e = ( () => {
    class i {
        constructor(e, t, r) {
            this._sanityChecks = t,
            this._document = r,
            this._hasDoneGlobalChecks = !1,
            e._applyBodyHighContrastModeCssClasses(),
            this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0)
        }
        _checkIsEnabled(e) {
            return rr() ? !1 : typeof this._sanityChecks == "boolean" ? this._sanityChecks : !!this._sanityChecks[e]
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Hs),p(e_, 8),p(O))
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [pt, pt]
        })
        }
    }
    return i
}
)();
var ur = class {
    constructor(n, e, t, r, o) {
        this._defaultMatcher = n,
        this.ngControl = e,
        this._parentFormGroup = t,
        this._parentForm = r,
        this._stateChanges = o,
        this.errorState = !1
    }
    updateErrorState() {
        let n = this.errorState
          , e = this._parentFormGroup || this._parentForm
          , t = this.matcher || this._defaultMatcher
          , r = this.ngControl ? this.ngControl.control : null
          , o = t?.isErrorState(r, e) ?? !1;
        o !== n && (this.errorState = o,
        this._stateChanges.next())
    }
}
;
var No = new x("MAT_DATE_LOCALE",{
    providedIn: "root",
    factory: t_
});
function t_() {
    return g(al)
}
var Te = class {
    constructor() {
        this._localeChanges = new A,
        this.localeChanges = this._localeChanges
    }
    getValidDateOrNull(n) {
        return this.isDateInstance(n) && this.isValid(n) ? n : null
    }
    deserialize(n) {
        return n == null || this.isDateInstance(n) && this.isValid(n) ? n : this.invalid()
    }
    setLocale(n) {
        this.locale = n,
        this._localeChanges.next()
    }
    compareDate(n, e) {
        return this.getYear(n) - this.getYear(e) || this.getMonth(n) - this.getMonth(e) || this.getDate(n) - this.getDate(e)
    }
    sameDate(n, e) {
        if (n && e) {
            let t = this.isValid(n)
              , r = this.isValid(e);
            return t && r ? !this.compareDate(n, e) : t == r
        }
        return n == e
    }
    clampDate(n, e, t) {
        return e && this.compareDate(n, e) < 0 ? e : t && this.compareDate(n, t) > 0 ? t : n
    }
}
  , Wt = new x("mat-date-formats")
  , i_ = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function $s(i, n) {
    let e = Array(i);
    for (let t = 0; t < i; t++)
        e[t] = n(t);
    return e
}
var n_ = ( () => {
    class i extends Te {
        constructor(e) {
            super(),
            this.useUtcForDisplay = !1,
            this._matDateLocale = g(No, {
                optional: !0
            }),
            e !== void 0 && (this._matDateLocale = e),
            super.setLocale(this._matDateLocale)
        }
        getYear(e) {
            return e.getFullYear()
        }
        getMonth(e) {
            return e.getMonth()
        }
        getDate(e) {
            return e.getDate()
        }
        getDayOfWeek(e) {
            return e.getDay()
        }
        getMonthNames(e) {
            let t = new Intl.DateTimeFormat(this.locale,{
                month: e,
                timeZone: "utc"
            });
            return $s(12, r => this._format(t, new Date(2017,r,1)))
        }
        getDateNames() {
            let e = new Intl.DateTimeFormat(this.locale,{
                day: "numeric",
                timeZone: "utc"
            });
            return $s(31, t => this._format(e, new Date(2017,0,t + 1)))
        }
        getDayOfWeekNames(e) {
            let t = new Intl.DateTimeFormat(this.locale,{
                weekday: e,
                timeZone: "utc"
            });
            return $s(7, r => this._format(t, new Date(2017,0,r + 1)))
        }
        getYearName(e) {
            let t = new Intl.DateTimeFormat(this.locale,{
                year: "numeric",
                timeZone: "utc"
            });
            return this._format(t, e)
        }
        getFirstDayOfWeek() {
            return 0
        }
        getNumDaysInMonth(e) {
            return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0))
        }
        clone(e) {
            return new Date(e.getTime())
        }
        createDate(e, t, r) {
            let o = this._createDateWithOverflow(e, t, r);
            return o.getMonth() != t,
            o
        }
        today() {
            return new Date
        }
        parse(e, t) {
            return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null
        }
        format(e, t) {
            if (!this.isValid(e))
                throw Error("NativeDateAdapter: Cannot format invalid date.");
            let r = new Intl.DateTimeFormat(this.locale,ie(v({}, t), {
                timeZone: "utc"
            }));
            return this._format(r, e)
        }
        addCalendarYears(e, t) {
            return this.addCalendarMonths(e, t * 12)
        }
        addCalendarMonths(e, t) {
            let r = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e));
            return this.getMonth(r) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (r = this._createDateWithOverflow(this.getYear(r), this.getMonth(r), 0)),
            r
        }
        addCalendarDays(e, t) {
            return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t)
        }
        toIso8601(e) {
            return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-")
        }
        deserialize(e) {
            if (typeof e == "string") {
                if (!e)
                    return null;
                if (i_.test(e)) {
                    let t = new Date(e);
                    if (this.isValid(t))
                        return t
                }
            }
            return super.deserialize(e)
        }
        isDateInstance(e) {
            return e instanceof Date
        }
        isValid(e) {
            return !isNaN(e.getTime())
        }
        invalid() {
            return new Date(NaN)
        }
        _createDateWithOverflow(e, t, r) {
            let o = new Date;
            return o.setFullYear(e, t, r),
            o.setHours(0, 0, 0, 0),
            o
        }
        _2digit(e) {
            return ("00" + e).slice(-2)
        }
        _format(e, t) {
            let r = new Date;
            return r.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
            r.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()),
            e.format(r)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(No, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , r_ = {
    parse: {
        dateInput: null
    },
    display: {
        dateInput: {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        },
        monthYearLabel: {
            year: "numeric",
            month: "short"
        },
        dateA11yLabel: {
            year: "numeric",
            month: "long",
            day: "numeric"
        },
        monthYearA11yLabel: {
            year: "numeric",
            month: "long"
        }
    }
};
function Iu(i=r_) {
    return [{
        provide: Te,
        useClass: n_
    }, {
        provide: Wt,
        useValue: i
    }]
}
var Gt = ( () => {
    class i {
        isErrorState(e, t) {
            return !!(e && e.invalid && (e.touched || t && t.submitted))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Je = function(i) {
    return i[i.FADING_IN = 0] = "FADING_IN",
    i[i.VISIBLE = 1] = "VISIBLE",
    i[i.FADING_OUT = 2] = "FADING_OUT",
    i[i.HIDDEN = 3] = "HIDDEN",
    i
}(Je || {})
  , Ws = class {
    constructor(n, e, t, r=!1) {
        this._renderer = n,
        this.element = e,
        this.config = t,
        this._animationForciblyDisabledThroughCss = r,
        this.state = Je.HIDDEN
    }
    fadeOut() {
        this._renderer.fadeOutRipple(this)
    }
}
  , bu = Ke({
    passive: !0,
    capture: !0
})
  , Gs = class {
    constructor() {
        this._events = new Map,
        this._delegateEventHandler = n => {
            let e = tt(n);
            e && this._events.get(n.type)?.forEach( (t, r) => {
                (r === e || r.contains(e)) && t.forEach(o => o.handleEvent(n))
            }
            )
        }
    }
    addHandler(n, e, t, r) {
        let o = this._events.get(e);
        if (o) {
            let a = o.get(t);
            a ? a.add(r) : o.set(t, new Set([r]))
        } else
            this._events.set(e, new Map([[t, new Set([r])]])),
            n.runOutsideAngular( () => {
                document.addEventListener(e, this._delegateEventHandler, bu)
            }
            )
    }
    removeHandler(n, e, t) {
        let r = this._events.get(n);
        if (!r)
            return;
        let o = r.get(e);
        o && (o.delete(t),
        o.size === 0 && r.delete(e),
        r.size === 0 && (this._events.delete(n),
        document.removeEventListener(n, this._delegateEventHandler, bu)))
    }
}
  , vu = {
    enterDuration: 225,
    exitDuration: 150
}
  , o_ = 800
  , yu = Ke({
    passive: !0,
    capture: !0
})
  , xu = ["mousedown", "touchstart"]
  , wu = ["mouseup", "mouseleave", "touchend", "touchcancel"]
  , Xs = class i {
    static{this._eventManager = new Gs
    }constructor(n, e, t, r) {
        this._target = n,
        this._ngZone = e,
        this._platform = r,
        this._isPointerDown = !1,
        this._activeRipples = new Map,
        this._pointerUpEventsRegistered = !1,
        r.isBrowser && (this._containerElement = Qe(t))
    }
    fadeInRipple(n, e, t={}) {
        let r = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect()
          , o = v(v({}, vu), t.animation);
        t.centered && (n = r.left + r.width / 2,
        e = r.top + r.height / 2);
        let a = t.radius || a_(n, e, r)
          , s = n - r.left
          , d = e - r.top
          , c = o.enterDuration
          , m = document.createElement("div");
        m.classList.add("mat-ripple-element"),
        m.style.left = `${s - a}px`,
        m.style.top = `${d - a}px`,
        m.style.height = `${a * 2}px`,
        m.style.width = `${a * 2}px`,
        t.color != null && (m.style.backgroundColor = t.color),
        m.style.transitionDuration = `${c}ms`,
        this._containerElement.appendChild(m);
        let b = window.getComputedStyle(m)
          , R = b.transitionProperty
          , W = b.transitionDuration
          , K = R === "none" || W === "0s" || W === "0s, 0s" || r.width === 0 && r.height === 0
          , k = new Ws(this,m,t,K);
        m.style.transform = "scale3d(1, 1, 1)",
        k.state = Je.FADING_IN,
        t.persistent || (this._mostRecentTransientRipple = k);
        let Q = null;
        return !K && (c || o.exitDuration) && this._ngZone.runOutsideAngular( () => {
            let we = () => this._finishRippleTransition(k)
              , _t = () => this._destroyRipple(k);
            m.addEventListener("transitionend", we),
            m.addEventListener("transitioncancel", _t),
            Q = {
                onTransitionEnd: we,
                onTransitionCancel: _t
            }
        }
        ),
        this._activeRipples.set(k, Q),
        (K || !c) && this._finishRippleTransition(k),
        k
    }
    fadeOutRipple(n) {
        if (n.state === Je.FADING_OUT || n.state === Je.HIDDEN)
            return;
        let e = n.element
          , t = v(v({}, vu), n.config.animation);
        e.style.transitionDuration = `${t.exitDuration}ms`,
        e.style.opacity = "0",
        n.state = Je.FADING_OUT,
        (n._animationForciblyDisabledThroughCss || !t.exitDuration) && this._finishRippleTransition(n)
    }
    fadeOutAll() {
        this._getActiveRipples().forEach(n => n.fadeOut())
    }
    fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach(n => {
            n.config.persistent || n.fadeOut()
        }
        )
    }
    setupTriggerEvents(n) {
        let e = Qe(n);
        !this._platform.isBrowser || !e || e === this._triggerElement || (this._removeTriggerEvents(),
        this._triggerElement = e,
        xu.forEach(t => {
            i._eventManager.addHandler(this._ngZone, t, e, this)
        }
        ))
    }
    handleEvent(n) {
        n.type === "mousedown" ? this._onMousedown(n) : n.type === "touchstart" ? this._onTouchStart(n) : this._onPointerUp(),
        this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular( () => {
            wu.forEach(e => {
                this._triggerElement.addEventListener(e, this, yu)
            }
            )
        }
        ),
        this._pointerUpEventsRegistered = !0)
    }
    _finishRippleTransition(n) {
        n.state === Je.FADING_IN ? this._startFadeOutTransition(n) : n.state === Je.FADING_OUT && this._destroyRipple(n)
    }
    _startFadeOutTransition(n) {
        let e = n === this._mostRecentTransientRipple
          , {persistent: t} = n.config;
        n.state = Je.VISIBLE,
        !t && (!e || !this._isPointerDown) && n.fadeOut()
    }
    _destroyRipple(n) {
        let e = this._activeRipples.get(n) ?? null;
        this._activeRipples.delete(n),
        this._activeRipples.size || (this._containerRect = null),
        n === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null),
        n.state = Je.HIDDEN,
        e !== null && (n.element.removeEventListener("transitionend", e.onTransitionEnd),
        n.element.removeEventListener("transitioncancel", e.onTransitionCancel)),
        n.element.remove()
    }
    _onMousedown(n) {
        let e = Bs(n)
          , t = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + o_;
        !this._target.rippleDisabled && !e && !t && (this._isPointerDown = !0,
        this.fadeInRipple(n.clientX, n.clientY, this._target.rippleConfig))
    }
    _onTouchStart(n) {
        if (!this._target.rippleDisabled && !Us(n)) {
            this._lastTouchStartEvent = Date.now(),
            this._isPointerDown = !0;
            let e = n.changedTouches;
            if (e)
                for (let t = 0; t < e.length; t++)
                    this.fadeInRipple(e[t].clientX, e[t].clientY, this._target.rippleConfig)
        }
    }
    _onPointerUp() {
        this._isPointerDown && (this._isPointerDown = !1,
        this._getActiveRipples().forEach(n => {
            let e = n.state === Je.VISIBLE || n.config.terminateOnPointerUp && n.state === Je.FADING_IN;
            !n.config.persistent && e && n.fadeOut()
        }
        ))
    }
    _getActiveRipples() {
        return Array.from(this._activeRipples.keys())
    }
    _removeTriggerEvents() {
        let n = this._triggerElement;
        n && (xu.forEach(e => i._eventManager.removeHandler(e, n, this)),
        this._pointerUpEventsRegistered && (wu.forEach(e => n.removeEventListener(e, this, yu)),
        this._pointerUpEventsRegistered = !1))
    }
}
;
function a_(i, n, e) {
    let t = Math.max(Math.abs(i - e.left), Math.abs(i - e.right))
      , r = Math.max(Math.abs(n - e.top), Math.abs(n - e.bottom));
    return Math.sqrt(t * t + r * r)
}
var Mu = new x("mat-ripple-global-options")
  , hr = ( () => {
    class i {
        get disabled() {
            return this._disabled
        }
        set disabled(e) {
            e && this.fadeOutAllNonPersistent(),
            this._disabled = e,
            this._setupTriggerEventsIfEnabled()
        }
        get trigger() {
            return this._trigger || this._elementRef.nativeElement
        }
        set trigger(e) {
            this._trigger = e,
            this._setupTriggerEventsIfEnabled()
        }
        constructor(e, t, r, o, a) {
            this._elementRef = e,
            this._animationMode = a,
            this.radius = 0,
            this._disabled = !1,
            this._isInitialized = !1,
            this._globalOptions = o || {},
            this._rippleRenderer = new Xs(this,t,e,r)
        }
        ngOnInit() {
            this._isInitialized = !0,
            this._setupTriggerEventsIfEnabled()
        }
        ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents()
        }
        fadeOutAll() {
            this._rippleRenderer.fadeOutAll()
        }
        fadeOutAllNonPersistent() {
            this._rippleRenderer.fadeOutAllNonPersistent()
        }
        get rippleConfig() {
            return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: v(v(v({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
                    enterDuration: 0,
                    exitDuration: 0
                } : {}), this.animation),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            }
        }
        get rippleDisabled() {
            return this.disabled || !!this._globalOptions.disabled
        }
        _setupTriggerEventsIfEnabled() {
            !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
        }
        launch(e, t=0, r) {
            return typeof e == "number" ? this._rippleRenderer.fadeInRipple(e, t, v(v({}, this.rippleConfig), r)) : this._rippleRenderer.fadeInRipple(0, 0, v(v({}, this.rippleConfig), e))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(T),l(G),l(Mu, 8),l(Ae, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
            hostAttrs: [1, "mat-ripple"],
            hostVars: 2,
            hostBindings: function(t, r) {
                t & 2 && B("mat-ripple-unbounded", r.unbounded)
            },
            inputs: {
                color: [w.None, "matRippleColor", "color"],
                unbounded: [w.None, "matRippleUnbounded", "unbounded"],
                centered: [w.None, "matRippleCentered", "centered"],
                radius: [w.None, "matRippleRadius", "radius"],
                animation: [w.None, "matRippleAnimation", "animation"],
                disabled: [w.None, "matRippleDisabled", "disabled"],
                trigger: [w.None, "matRippleTrigger", "trigger"]
            },
            exportAs: ["matRipple"],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Po = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [_e, _e]
        })
        }
    }
    return i
}
)();
var Cu = {
    capture: !0
}
  , Du = ["focus", "click", "mouseenter", "touchstart"]
  , Ys = "mat-ripple-loader-uninitialized"
  , qs = "mat-ripple-loader-class-name"
  , Eu = "mat-ripple-loader-centered"
  , Oo = "mat-ripple-loader-disabled"
  , Au = ( () => {
    class i {
        constructor() {
            this._document = g(O, {
                optional: !0
            }),
            this._animationMode = g(Ae, {
                optional: !0
            }),
            this._globalRippleOptions = g(Mu, {
                optional: !0
            }),
            this._platform = g(G),
            this._ngZone = g(T),
            this._hosts = new Map,
            this._onInteraction = e => {
                if (!(e.target instanceof HTMLElement))
                    return;
                let r = e.target.closest(`[${Ys}]`);
                r && this._createRipple(r)
            }
            ,
            this._ngZone.runOutsideAngular( () => {
                for (let e of Du)
                    this._document?.addEventListener(e, this._onInteraction, Cu)
            }
            )
        }
        ngOnDestroy() {
            let e = this._hosts.keys();
            for (let t of e)
                this.destroyRipple(t);
            for (let t of Du)
                this._document?.removeEventListener(t, this._onInteraction, Cu)
        }
        configureRipple(e, t) {
            e.setAttribute(Ys, ""),
            (t.className || !e.hasAttribute(qs)) && e.setAttribute(qs, t.className || ""),
            t.centered && e.setAttribute(Eu, ""),
            t.disabled && e.setAttribute(Oo, "")
        }
        getRipple(e) {
            return this._hosts.get(e) || this._createRipple(e)
        }
        setDisabled(e, t) {
            let r = this._hosts.get(e);
            if (r) {
                r.disabled = t;
                return
            }
            t ? e.setAttribute(Oo, "") : e.removeAttribute(Oo)
        }
        _createRipple(e) {
            if (!this._document)
                return;
            let t = this._hosts.get(e);
            if (t)
                return t;
            e.querySelector(".mat-ripple")?.remove();
            let r = this._document.createElement("span");
            r.classList.add("mat-ripple", e.getAttribute(qs)),
            e.append(r);
            let o = new hr(new F(r),this._ngZone,this._platform,this._globalRippleOptions ? this._globalRippleOptions : void 0,this._animationMode ? this._animationMode : void 0);
            return o._isInitialized = !0,
            o.trigger = e,
            o.centered = e.hasAttribute(Eu),
            o.disabled = e.hasAttribute(Oo),
            this.attachRipple(e, o),
            o
        }
        attachRipple(e, t) {
            e.removeAttribute(Ys),
            this._hosts.set(e, t)
        }
        destroyRipple(e) {
            let t = this._hosts.get(e);
            t && (t.ngOnDestroy(),
            this._hosts.delete(e))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Su = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["div", "mat-internal-form-field", ""]],
            hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
            hostVars: 2,
            hostBindings: function(t, r) {
                t & 2 && B("mdc-form-field--align-end", r.labelPosition === "before")
            },
            inputs: {
                labelPosition: "labelPosition"
            },
            standalone: !0,
            features: [L],
            attrs: Kg,
            ngContentSelectors: Qg,
            decls: 1,
            vars: 0,
            template: function(t, r) {
                t & 1 && (ve(),
                ee(0))
            },
            styles: [".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
var s_ = ["mat-button", ""]
  , d_ = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]]
  , l_ = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];
var c_ = ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var u_ = ["mat-icon-button", ""]
  , h_ = ["*"];
var m_ = new x("MAT_BUTTON_CONFIG");
var p_ = [{
    attribute: "mat-button",
    mdcClasses: ["mdc-button", "mat-mdc-button"]
}, {
    attribute: "mat-flat-button",
    mdcClasses: ["mdc-button", "mdc-button--unelevated", "mat-mdc-unelevated-button"]
}, {
    attribute: "mat-raised-button",
    mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"]
}, {
    attribute: "mat-stroked-button",
    mdcClasses: ["mdc-button", "mdc-button--outlined", "mat-mdc-outlined-button"]
}, {
    attribute: "mat-fab",
    mdcClasses: ["mdc-fab", "mat-mdc-fab"]
}, {
    attribute: "mat-mini-fab",
    mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"]
}, {
    attribute: "mat-icon-button",
    mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"]
}]
  , ku = ( () => {
    class i {
        get ripple() {
            return this._rippleLoader?.getRipple(this._elementRef.nativeElement)
        }
        set ripple(e) {
            this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e)
        }
        get disableRipple() {
            return this._disableRipple
        }
        set disableRipple(e) {
            this._disableRipple = e,
            this._updateRippleDisabled()
        }
        get disabled() {
            return this._disabled
        }
        set disabled(e) {
            this._disabled = e,
            this._updateRippleDisabled()
        }
        constructor(e, t, r, o) {
            this._elementRef = e,
            this._platform = t,
            this._ngZone = r,
            this._animationMode = o,
            this._focusMonitor = g(it),
            this._rippleLoader = g(Au),
            this._isFab = !1,
            this._disableRipple = !1,
            this._disabled = !1;
            let a = g(m_, {
                optional: !0
            })
              , s = e.nativeElement
              , d = s.classList;
            this.disabledInteractive = a?.disabledInteractive ?? !1,
            this._rippleLoader?.configureRipple(s, {
                className: "mat-mdc-button-ripple"
            });
            for (let {attribute: c, mdcClasses: m} of p_)
                s.hasAttribute(c) && d.add(...m)
        }
        ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, !0)
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef),
            this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)
        }
        focus(e="program", t) {
            e ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, t) : this._elementRef.nativeElement.focus(t)
        }
        _getAriaDisabled() {
            return this.ariaDisabled != null ? this.ariaDisabled : this.disabled && this.disabledInteractive ? !0 : null
        }
        _getDisabledAttribute() {
            return this.disabledInteractive || !this.disabled ? null : !0
        }
        _updateRippleDisabled() {
            this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled)
        }
        static{this.\u0275fac = function(t) {
            ai()
        }
        }static{this.\u0275dir = I({
            type: i,
            inputs: {
                color: "color",
                disableRipple: [w.HasDecoratorInputTransform, "disableRipple", "disableRipple", X],
                disabled: [w.HasDecoratorInputTransform, "disabled", "disabled", X],
                ariaDisabled: [w.HasDecoratorInputTransform, "aria-disabled", "ariaDisabled", X],
                disabledInteractive: [w.HasDecoratorInputTransform, "disabledInteractive", "disabledInteractive", X]
            },
            features: [be]
        })
        }
    }
    return i
}
)();
var nt = ( () => {
    class i extends ku {
        constructor(e, t, r, o) {
            super(e, t, r, o)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(G),l(T),l(Ae, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-flat-button", ""], ["button", "mat-stroked-button", ""]],
            hostVars: 14,
            hostBindings: function(t, r) {
                t & 2 && (Y("disabled", r._getDisabledAttribute())("aria-disabled", r._getAriaDisabled()),
                We(r.color ? "mat-" + r.color : ""),
                B("mat-mdc-button-disabled", r.disabled)("mat-mdc-button-disabled-interactive", r.disabledInteractive)("_mat-animation-noopable", r._animationMode === "NoopAnimations")("mat-unthemed", !r.color)("mat-mdc-button-base", !0))
            },
            exportAs: ["matButton"],
            standalone: !0,
            features: [Z, L],
            attrs: s_,
            ngContentSelectors: l_,
            decls: 7,
            vars: 4,
            consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
            template: function(t, r) {
                t & 1 && (ve(d_),
                D(0, "span", 0),
                ee(1),
                h(2, "span", 1),
                ee(3, 1),
                u(),
                ee(4, 2),
                D(5, "span", 2)(6, "span", 3)),
                t & 2 && B("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab)
            },
            styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
var Ks = ( () => {
    class i extends ku {
        constructor(e, t, r, o) {
            super(e, t, r, o),
            this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
                centered: !0
            })
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(G),l(T),l(Ae, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["button", "mat-icon-button", ""]],
            hostVars: 14,
            hostBindings: function(t, r) {
                t & 2 && (Y("disabled", r._getDisabledAttribute())("aria-disabled", r._getAriaDisabled()),
                We(r.color ? "mat-" + r.color : ""),
                B("mat-mdc-button-disabled", r.disabled)("mat-mdc-button-disabled-interactive", r.disabledInteractive)("_mat-animation-noopable", r._animationMode === "NoopAnimations")("mat-unthemed", !r.color)("mat-mdc-button-base", !0))
            },
            exportAs: ["matButton"],
            standalone: !0,
            features: [Z, L],
            attrs: u_,
            ngContentSelectors: h_,
            decls: 4,
            vars: 0,
            consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
            template: function(t, r) {
                t & 1 && (ve(),
                D(0, "span", 0),
                ee(1),
                D(2, "span", 1)(3, "span", 2))
            },
            styles: ['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{color:var(--mdc-icon-button-icon-color)}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}', c_],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
var ft = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [_e, Po, _e]
        })
        }
    }
    return i
}
)();
var Ru = Ke({
    passive: !0
})
  , Tu = ( () => {
    class i {
        constructor(e, t) {
            this._platform = e,
            this._ngZone = t,
            this._monitoredElements = new Map
        }
        monitor(e) {
            if (!this._platform.isBrowser)
                return rt;
            let t = Qe(e)
              , r = this._monitoredElements.get(t);
            if (r)
                return r.subject;
            let o = new A
              , a = "cdk-text-field-autofilled"
              , s = d => {
                d.animationName === "cdk-text-field-autofill-start" && !t.classList.contains(a) ? (t.classList.add(a),
                this._ngZone.run( () => o.next({
                    target: d.target,
                    isAutofilled: !0
                }))) : d.animationName === "cdk-text-field-autofill-end" && t.classList.contains(a) && (t.classList.remove(a),
                this._ngZone.run( () => o.next({
                    target: d.target,
                    isAutofilled: !1
                })))
            }
            ;
            return this._ngZone.runOutsideAngular( () => {
                t.addEventListener("animationstart", s, Ru),
                t.classList.add("cdk-text-field-autofill-monitored")
            }
            ),
            this._monitoredElements.set(t, {
                subject: o,
                unlisten: () => {
                    t.removeEventListener("animationstart", s, Ru)
                }
            }),
            o
        }
        stopMonitoring(e) {
            let t = Qe(e)
              , r = this._monitoredElements.get(t);
            r && (r.unlisten(),
            r.subject.complete(),
            t.classList.remove("cdk-text-field-autofill-monitored"),
            t.classList.remove("cdk-text-field-autofilled"),
            this._monitoredElements.delete(t))
        }
        ngOnDestroy() {
            this._monitoredElements.forEach( (e, t) => this.stopMonitoring(t))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G),p(T))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Fu = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({})
        }
    }
    return i
}
)();
var Qs = class {
    constructor(n) {
        this._box = n,
        this._destroyed = new A,
        this._resizeSubject = new A,
        this._elementObservables = new Map,
        typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver(e => this._resizeSubject.next(e)))
    }
    observe(n) {
        return this._elementObservables.has(n) || this._elementObservables.set(n, new bt(e => {
            let t = this._resizeSubject.subscribe(e);
            return this._resizeObserver?.observe(n, {
                box: this._box
            }),
            () => {
                this._resizeObserver?.unobserve(n),
                t.unsubscribe(),
                this._elementObservables.delete(n)
            }
        }
        ).pipe(pe(e => e.some(t => t.target === n)), ua({
            bufferSize: 1,
            refCount: !0
        }), ge(this._destroyed))),
        this._elementObservables.get(n)
    }
    destroy() {
        this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear()
    }
}
  , Ou = ( () => {
    class i {
        constructor() {
            this._observers = new Map,
            this._ngZone = g(T),
            typeof ResizeObserver < "u"
        }
        ngOnDestroy() {
            for (let[,e] of this._observers)
                e.destroy();
            this._observers.clear(),
            typeof ResizeObserver < "u"
        }
        observe(e, t) {
            let r = t?.box || "content-box";
            return this._observers.has(r) || this._observers.set(r, new Qs(r)),
            this._observers.get(r).observe(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var g_ = ["notch"]
  , __ = ["matFormFieldNotchedOutline", ""]
  , b_ = ["*"]
  , v_ = ["textField"]
  , y_ = ["iconPrefixContainer"]
  , x_ = ["textPrefixContainer"]
  , w_ = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]]
  , C_ = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function D_(i, n) {
    i & 1 && D(0, "span", 17)
}
function E_(i, n) {
    if (i & 1 && (h(0, "label", 16),
    ee(1, 1),
    $(2, D_, 1, 0, "span", 17),
    u()),
    i & 2) {
        let e = S(2);
        C("floating", e._shouldLabelFloat())("monitorResize", e._hasOutline())("id", e._labelId),
        Y("for", e._control.disableAutomaticLabeling ? null : e._control.id),
        f(2),
        J(2, !e.hideRequiredMarker && e._control.required ? 2 : -1)
    }
}
function I_(i, n) {
    if (i & 1 && $(0, E_, 3, 5, "label", 16),
    i & 2) {
        let e = S();
        J(0, e._hasFloatingLabel() ? 0 : -1)
    }
}
function M_(i, n) {
    i & 1 && D(0, "div", 5)
}
function A_(i, n) {}
function S_(i, n) {
    if (i & 1 && $(0, A_, 0, 0, "ng-template", 11),
    i & 2) {
        S(2);
        let e = Ge(1);
        C("ngTemplateOutlet", e)
    }
}
function k_(i, n) {
    if (i & 1 && (h(0, "div", 7),
    $(1, S_, 1, 1, null, 11),
    u()),
    i & 2) {
        let e = S();
        C("matFormFieldNotchedOutlineOpen", e._shouldLabelFloat()),
        f(),
        J(1, e._forceDisplayInfixLabel() ? -1 : 1)
    }
}
function R_(i, n) {
    i & 1 && (h(0, "div", 8, 2),
    ee(2, 2),
    u())
}
function T_(i, n) {
    i & 1 && (h(0, "div", 9, 3),
    ee(2, 3),
    u())
}
function F_(i, n) {}
function O_(i, n) {
    if (i & 1 && $(0, F_, 0, 0, "ng-template", 11),
    i & 2) {
        S();
        let e = Ge(1);
        C("ngTemplateOutlet", e)
    }
}
function N_(i, n) {
    i & 1 && (h(0, "div", 12),
    ee(1, 4),
    u())
}
function P_(i, n) {
    i & 1 && (h(0, "div", 13),
    ee(1, 5),
    u())
}
function V_(i, n) {
    i & 1 && D(0, "div", 14)
}
function L_(i, n) {
    if (i & 1 && (h(0, "div", 18),
    ee(1, 6),
    u()),
    i & 2) {
        let e = S();
        C("@transitionMessages", e._subscriptAnimationState)
    }
}
function j_(i, n) {
    if (i & 1 && (h(0, "mat-hint", 20),
    _(1),
    u()),
    i & 2) {
        let e = S(2);
        C("id", e._hintLabelId),
        f(),
        me(e.hintLabel)
    }
}
function z_(i, n) {
    if (i & 1 && (h(0, "div", 19),
    $(1, j_, 2, 2, "mat-hint", 20),
    ee(2, 7),
    D(3, "div", 21),
    ee(4, 8),
    u()),
    i & 2) {
        let e = S();
        C("@transitionMessages", e._subscriptAnimationState),
        f(),
        J(1, e.hintLabel ? 1 : -1)
    }
}
var Xt = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["mat-label"]],
            standalone: !0
        })
        }
    }
    return i
}
)();
var B_ = new x("MatError");
var U_ = 0
  , jo = ( () => {
    class i {
        constructor() {
            this.align = "start",
            this.id = `mat-mdc-hint-${U_++}`
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["mat-hint"]],
            hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
            hostVars: 4,
            hostBindings: function(t, r) {
                t & 2 && (Ee("id", r.id),
                Y("align", null),
                B("mat-mdc-form-field-hint-end", r.align === "end"))
            },
            inputs: {
                align: "align",
                id: "id"
            },
            standalone: !0
        })
        }
    }
    return i
}
)()
  , H_ = new x("MatPrefix");
var Uu = new x("MatSuffix")
  , Hu = ( () => {
    class i {
        constructor() {
            this._isText = !1
        }
        set _isTextSelector(e) {
            this._isText = !0
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
            inputs: {
                _isTextSelector: [w.None, "matTextSuffix", "_isTextSelector"]
            },
            standalone: !0,
            features: [de([{
                provide: Uu,
                useExisting: i
            }])]
        })
        }
    }
    return i
}
)()
  , $u = new x("FloatingLabelParent")
  , Nu = ( () => {
    class i {
        get floating() {
            return this._floating
        }
        set floating(e) {
            this._floating = e,
            this.monitorResize && this._handleResize()
        }
        get monitorResize() {
            return this._monitorResize
        }
        set monitorResize(e) {
            this._monitorResize = e,
            this._monitorResize ? this._subscribeToResize() : this._resizeSubscription.unsubscribe()
        }
        constructor(e) {
            this._elementRef = e,
            this._floating = !1,
            this._monitorResize = !1,
            this._resizeObserver = g(Ou),
            this._ngZone = g(T),
            this._parent = g($u),
            this._resizeSubscription = new ce
        }
        ngOnDestroy() {
            this._resizeSubscription.unsubscribe()
        }
        getWidth() {
            return $_(this._elementRef.nativeElement)
        }
        get element() {
            return this._elementRef.nativeElement
        }
        _handleResize() {
            setTimeout( () => this._parent._handleLabelResized())
        }
        _subscribeToResize() {
            this._resizeSubscription.unsubscribe(),
            this._ngZone.runOutsideAngular( () => {
                this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
                    box: "border-box"
                }).subscribe( () => this._handleResize())
            }
            )
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["label", "matFormFieldFloatingLabel", ""]],
            hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
            hostVars: 2,
            hostBindings: function(t, r) {
                t & 2 && B("mdc-floating-label--float-above", r.floating)
            },
            inputs: {
                floating: "floating",
                monitorResize: "monitorResize"
            },
            standalone: !0
        })
        }
    }
    return i
}
)();
function $_(i) {
    let n = i;
    if (n.offsetParent !== null)
        return n.scrollWidth;
    let e = n.cloneNode(!0);
    e.style.setProperty("position", "absolute"),
    e.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(e);
    let t = e.scrollWidth;
    return e.remove(),
    t
}
var Pu = "mdc-line-ripple--active"
  , Lo = "mdc-line-ripple--deactivating"
  , Vu = ( () => {
    class i {
        constructor(e, t) {
            this._elementRef = e,
            this._handleTransitionEnd = r => {
                let o = this._elementRef.nativeElement.classList
                  , a = o.contains(Lo);
                r.propertyName === "opacity" && a && o.remove(Pu, Lo)
            }
            ,
            t.runOutsideAngular( () => {
                e.nativeElement.addEventListener("transitionend", this._handleTransitionEnd)
            }
            )
        }
        activate() {
            let e = this._elementRef.nativeElement.classList;
            e.remove(Lo),
            e.add(Pu)
        }
        deactivate() {
            this._elementRef.nativeElement.classList.add(Lo)
        }
        ngOnDestroy() {
            this._elementRef.nativeElement.removeEventListener("transitionend", this._handleTransitionEnd)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(T))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["div", "matFormFieldLineRipple", ""]],
            hostAttrs: [1, "mdc-line-ripple"],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Lu = ( () => {
    class i {
        constructor(e, t) {
            this._elementRef = e,
            this._ngZone = t,
            this.open = !1
        }
        ngAfterViewInit() {
            let e = this._elementRef.nativeElement.querySelector(".mdc-floating-label");
            e ? (this._elementRef.nativeElement.classList.add("mdc-notched-outline--upgraded"),
            typeof requestAnimationFrame == "function" && (e.style.transitionDuration = "0s",
            this._ngZone.runOutsideAngular( () => {
                requestAnimationFrame( () => e.style.transitionDuration = "")
            }
            ))) : this._elementRef.nativeElement.classList.add("mdc-notched-outline--no-label")
        }
        _setNotchWidth(e) {
            !this.open || !e ? this._notch.nativeElement.style.width = "" : this._notch.nativeElement.style.width = `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(T))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["div", "matFormFieldNotchedOutline", ""]],
            viewQuery: function(t, r) {
                if (t & 1 && se(g_, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._notch = o.first)
                }
            },
            hostAttrs: [1, "mdc-notched-outline"],
            hostVars: 2,
            hostBindings: function(t, r) {
                t & 2 && B("mdc-notched-outline--notched", r.open)
            },
            inputs: {
                open: [w.None, "matFormFieldNotchedOutlineOpen", "open"]
            },
            standalone: !0,
            features: [L],
            attrs: __,
            ngContentSelectors: b_,
            decls: 5,
            vars: 0,
            consts: [["notch", ""], [1, "mdc-notched-outline__leading"], [1, "mdc-notched-outline__notch"], [1, "mdc-notched-outline__trailing"]],
            template: function(t, r) {
                t & 1 && (ve(),
                D(0, "div", 1),
                h(1, "div", 2, 0),
                ee(3),
                u(),
                D(4, "div", 3))
            },
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , Y_ = {
    transitionMessages: Lt("transitionMessages", [Xe("enter", Ie({
        opacity: 1,
        transform: "translateY(0%)"
    })), lt("void => enter", [Ie({
        opacity: 0,
        transform: "translateY(-5px)"
    }), dt("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])
}
  , zo = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i
        })
        }
    }
    return i
}
)();
var mr = new x("MatFormField")
  , q_ = new x("MAT_FORM_FIELD_DEFAULT_OPTIONS")
  , ju = 0
  , zu = "fill"
  , W_ = "auto"
  , Bu = "fixed"
  , G_ = "translateY(-50%)"
  , sn = ( () => {
    class i {
        get hideRequiredMarker() {
            return this._hideRequiredMarker
        }
        set hideRequiredMarker(e) {
            this._hideRequiredMarker = _i(e)
        }
        get floatLabel() {
            return this._floatLabel || this._defaults?.floatLabel || W_
        }
        set floatLabel(e) {
            e !== this._floatLabel && (this._floatLabel = e,
            this._changeDetectorRef.markForCheck())
        }
        get appearance() {
            return this._appearance
        }
        set appearance(e) {
            let t = this._appearance
              , r = e || this._defaults?.appearance || zu;
            this._appearance = r,
            this._appearance === "outline" && this._appearance !== t && (this._needsOutlineLabelOffsetUpdateOnStable = !0)
        }
        get subscriptSizing() {
            return this._subscriptSizing || this._defaults?.subscriptSizing || Bu
        }
        set subscriptSizing(e) {
            this._subscriptSizing = e || this._defaults?.subscriptSizing || Bu
        }
        get hintLabel() {
            return this._hintLabel
        }
        set hintLabel(e) {
            this._hintLabel = e,
            this._processHints()
        }
        get _control() {
            return this._explicitFormFieldControl || this._formFieldControl
        }
        set _control(e) {
            this._explicitFormFieldControl = e
        }
        constructor(e, t, r, o, a, s, d, c) {
            this._elementRef = e,
            this._changeDetectorRef = t,
            this._ngZone = r,
            this._dir = o,
            this._platform = a,
            this._defaults = s,
            this._animationMode = d,
            this._hideRequiredMarker = !1,
            this.color = "primary",
            this._appearance = zu,
            this._subscriptSizing = null,
            this._hintLabel = "",
            this._hasIconPrefix = !1,
            this._hasTextPrefix = !1,
            this._hasIconSuffix = !1,
            this._hasTextSuffix = !1,
            this._labelId = `mat-mdc-form-field-label-${ju++}`,
            this._hintLabelId = `mat-mdc-hint-${ju++}`,
            this._subscriptAnimationState = "",
            this._destroyed = new A,
            this._isFocused = null,
            this._needsOutlineLabelOffsetUpdateOnStable = !1,
            s && (s.appearance && (this.appearance = s.appearance),
            this._hideRequiredMarker = !!s?.hideRequiredMarker,
            s.color && (this.color = s.color))
        }
        ngAfterViewInit() {
            this._updateFocusState(),
            this._subscriptAnimationState = "enter",
            this._changeDetectorRef.detectChanges()
        }
        ngAfterContentInit() {
            this._assertFormFieldControl(),
            this._initializeControl(),
            this._initializeSubscript(),
            this._initializePrefixAndSuffix(),
            this._initializeOutlineLabelOffsetSubscriptions()
        }
        ngAfterContentChecked() {
            this._assertFormFieldControl()
        }
        ngOnDestroy() {
            this._destroyed.next(),
            this._destroyed.complete()
        }
        getLabelId() {
            return this._hasFloatingLabel() ? this._labelId : null
        }
        getConnectedOverlayOrigin() {
            return this._textField || this._elementRef
        }
        _animateAndLockLabel() {
            this._hasFloatingLabel() && (this.floatLabel = "always")
        }
        _initializeControl() {
            let e = this._control;
            e.controlType && this._elementRef.nativeElement.classList.add(`mat-mdc-form-field-type-${e.controlType}`),
            e.stateChanges.subscribe( () => {
                this._updateFocusState(),
                this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck()
            }
            ),
            e.ngControl && e.ngControl.valueChanges && e.ngControl.valueChanges.pipe(ge(this._destroyed)).subscribe( () => this._changeDetectorRef.markForCheck())
        }
        _checkPrefixAndSuffixTypes() {
            this._hasIconPrefix = !!this._prefixChildren.find(e => !e._isText),
            this._hasTextPrefix = !!this._prefixChildren.find(e => e._isText),
            this._hasIconSuffix = !!this._suffixChildren.find(e => !e._isText),
            this._hasTextSuffix = !!this._suffixChildren.find(e => e._isText)
        }
        _initializePrefixAndSuffix() {
            this._checkPrefixAndSuffixTypes(),
            ot(this._prefixChildren.changes, this._suffixChildren.changes).subscribe( () => {
                this._checkPrefixAndSuffixTypes(),
                this._changeDetectorRef.markForCheck()
            }
            )
        }
        _initializeSubscript() {
            this._hintChildren.changes.subscribe( () => {
                this._processHints(),
                this._changeDetectorRef.markForCheck()
            }
            ),
            this._errorChildren.changes.subscribe( () => {
                this._syncDescribedByIds(),
                this._changeDetectorRef.markForCheck()
            }
            ),
            this._validateHints(),
            this._syncDescribedByIds()
        }
        _assertFormFieldControl() {
            this._control
        }
        _updateFocusState() {
            this._control.focused && !this._isFocused ? (this._isFocused = !0,
            this._lineRipple?.activate()) : !this._control.focused && (this._isFocused || this._isFocused === null) && (this._isFocused = !1,
            this._lineRipple?.deactivate()),
            this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", this._control.focused)
        }
        _initializeOutlineLabelOffsetSubscriptions() {
            this._prefixChildren.changes.subscribe( () => this._needsOutlineLabelOffsetUpdateOnStable = !0),
            this._ngZone.runOutsideAngular( () => {
                this._ngZone.onStable.pipe(ge(this._destroyed)).subscribe( () => {
                    this._needsOutlineLabelOffsetUpdateOnStable && (this._needsOutlineLabelOffsetUpdateOnStable = !1,
                    this._updateOutlineLabelOffset())
                }
                )
            }
            ),
            this._dir.change.pipe(ge(this._destroyed)).subscribe( () => this._needsOutlineLabelOffsetUpdateOnStable = !0)
        }
        _shouldAlwaysFloat() {
            return this.floatLabel === "always"
        }
        _hasOutline() {
            return this.appearance === "outline"
        }
        _forceDisplayInfixLabel() {
            return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat()
        }
        _hasFloatingLabel() {
            return !!this._labelChildNonStatic || !!this._labelChildStatic
        }
        _shouldLabelFloat() {
            return this._control.shouldLabelFloat || this._shouldAlwaysFloat()
        }
        _shouldForward(e) {
            let t = this._control ? this._control.ngControl : null;
            return t && t[e]
        }
        _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint"
        }
        _handleLabelResized() {
            this._refreshOutlineNotchWidth()
        }
        _refreshOutlineNotchWidth() {
            !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat() ? this._notchedOutline?._setNotchWidth(0) : this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())
        }
        _processHints() {
            this._validateHints(),
            this._syncDescribedByIds()
        }
        _validateHints() {
            this._hintChildren
        }
        _syncDescribedByIds() {
            if (this._control) {
                let e = [];
                if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy == "string" && e.push(...this._control.userAriaDescribedBy.split(" ")),
                this._getDisplayedMessages() === "hint") {
                    let t = this._hintChildren ? this._hintChildren.find(o => o.align === "start") : null
                      , r = this._hintChildren ? this._hintChildren.find(o => o.align === "end") : null;
                    t ? e.push(t.id) : this._hintLabel && e.push(this._hintLabelId),
                    r && e.push(r.id)
                } else
                    this._errorChildren && e.push(...this._errorChildren.map(t => t.id));
                this._control.setDescribedByIds(e)
            }
        }
        _updateOutlineLabelOffset() {
            if (!this._platform.isBrowser || !this._hasOutline() || !this._floatingLabel)
                return;
            let e = this._floatingLabel.element;
            if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
                e.style.transform = "";
                return
            }
            if (!this._isAttachedToDom()) {
                this._needsOutlineLabelOffsetUpdateOnStable = !0;
                return
            }
            let t = this._iconPrefixContainer?.nativeElement
              , r = this._textPrefixContainer?.nativeElement
              , o = t?.getBoundingClientRect().width ?? 0
              , a = r?.getBoundingClientRect().width ?? 0
              , s = this._dir.value === "rtl" ? "-1" : "1"
              , d = `${o + a}px`
              , m = `calc(${s} * (${d} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
            e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${G_} translateX(${m})
    )`
        }
        _isAttachedToDom() {
            let e = this._elementRef.nativeElement;
            if (e.getRootNode) {
                let t = e.getRootNode();
                return t && t !== e
            }
            return document.documentElement.contains(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(le),l(T),l(Oe),l(G),l(q_, 8),l(Ae, 8),l(O))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-form-field"]],
            contentQueries: function(t, r, o) {
                if (t & 1 && (xe(o, Xt, 5),
                xe(o, Xt, 7),
                xe(o, zo, 5),
                xe(o, H_, 5),
                xe(o, Uu, 5),
                xe(o, B_, 5),
                xe(o, jo, 5)),
                t & 2) {
                    let a;
                    U(a = H()) && (r._labelChildNonStatic = a.first),
                    U(a = H()) && (r._labelChildStatic = a.first),
                    U(a = H()) && (r._formFieldControl = a.first),
                    U(a = H()) && (r._prefixChildren = a),
                    U(a = H()) && (r._suffixChildren = a),
                    U(a = H()) && (r._errorChildren = a),
                    U(a = H()) && (r._hintChildren = a)
                }
            },
            viewQuery: function(t, r) {
                if (t & 1 && (se(v_, 5),
                se(y_, 5),
                se(x_, 5),
                se(Nu, 5),
                se(Lu, 5),
                se(Vu, 5)),
                t & 2) {
                    let o;
                    U(o = H()) && (r._textField = o.first),
                    U(o = H()) && (r._iconPrefixContainer = o.first),
                    U(o = H()) && (r._textPrefixContainer = o.first),
                    U(o = H()) && (r._floatingLabel = o.first),
                    U(o = H()) && (r._notchedOutline = o.first),
                    U(o = H()) && (r._lineRipple = o.first)
                }
            },
            hostAttrs: [1, "mat-mdc-form-field"],
            hostVars: 42,
            hostBindings: function(t, r) {
                t & 2 && B("mat-mdc-form-field-label-always-float", r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", r._hasIconSuffix)("mat-form-field-invalid", r._control.errorState)("mat-form-field-disabled", r._control.disabled)("mat-form-field-autofilled", r._control.autofilled)("mat-form-field-no-animations", r._animationMode === "NoopAnimations")("mat-form-field-appearance-fill", r.appearance == "fill")("mat-form-field-appearance-outline", r.appearance == "outline")("mat-form-field-hide-placeholder", r._hasFloatingLabel() && !r._shouldLabelFloat())("mat-focused", r._control.focused)("mat-primary", r.color !== "accent" && r.color !== "warn")("mat-accent", r.color === "accent")("mat-warn", r.color === "warn")("ng-untouched", r._shouldForward("untouched"))("ng-touched", r._shouldForward("touched"))("ng-pristine", r._shouldForward("pristine"))("ng-dirty", r._shouldForward("dirty"))("ng-valid", r._shouldForward("valid"))("ng-invalid", r._shouldForward("invalid"))("ng-pending", r._shouldForward("pending"))
            },
            inputs: {
                hideRequiredMarker: "hideRequiredMarker",
                color: "color",
                floatLabel: "floatLabel",
                appearance: "appearance",
                subscriptSizing: "subscriptSizing",
                hintLabel: "hintLabel"
            },
            exportAs: ["matFormField"],
            standalone: !0,
            features: [de([{
                provide: mr,
                useExisting: i
            }, {
                provide: $u,
                useExisting: i
            }]), L],
            ngContentSelectors: C_,
            decls: 18,
            vars: 21,
            consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], [1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
            template: function(t, r) {
                if (t & 1) {
                    let o = Se();
                    ve(w_),
                    $(0, I_, 1, 1, "ng-template", null, 0, ki),
                    h(2, "div", 4, 1),
                    V("click", function(s) {
                        return oe(o),
                        ae(r._control.onContainerClick(s))
                    }),
                    $(4, M_, 1, 0, "div", 5),
                    h(5, "div", 6),
                    $(6, k_, 2, 2, "div", 7)(7, R_, 3, 0, "div", 8)(8, T_, 3, 0, "div", 9),
                    h(9, "div", 10),
                    $(10, O_, 1, 1, null, 11),
                    ee(11),
                    u(),
                    $(12, N_, 2, 0, "div", 12)(13, P_, 2, 0, "div", 13),
                    u(),
                    $(14, V_, 1, 0, "div", 14),
                    u(),
                    h(15, "div", 15),
                    $(16, L_, 2, 1)(17, z_, 5, 2),
                    u()
                }
                if (t & 2) {
                    let o;
                    f(2),
                    B("mdc-text-field--filled", !r._hasOutline())("mdc-text-field--outlined", r._hasOutline())("mdc-text-field--no-label", !r._hasFloatingLabel())("mdc-text-field--disabled", r._control.disabled)("mdc-text-field--invalid", r._control.errorState),
                    f(2),
                    J(4, !r._hasOutline() && !r._control.disabled ? 4 : -1),
                    f(2),
                    J(6, r._hasOutline() ? 6 : -1),
                    f(),
                    J(7, r._hasIconPrefix ? 7 : -1),
                    f(),
                    J(8, r._hasTextPrefix ? 8 : -1),
                    f(2),
                    J(10, !r._hasOutline() || r._forceDisplayInfixLabel() ? 10 : -1),
                    f(2),
                    J(12, r._hasTextSuffix ? 12 : -1),
                    f(),
                    J(13, r._hasIconSuffix ? 13 : -1),
                    f(),
                    J(14, r._hasOutline() ? -1 : 14),
                    f(),
                    B("mat-mdc-form-field-subscript-dynamic-size", r.subscriptSizing === "dynamic"),
                    f(),
                    J(16, (o = r._getDisplayedMessages()) === "error" ? 16 : o === "hint" ? 17 : -1)
                }
            },
            dependencies: [Nu, Lu, Mn, Vu, jo],
            styles: ['.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}'],
            encapsulation: 2,
            data: {
                animation: [Y_.transitionMessages]
            },
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , wi = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [_e, li, So, _e]
        })
        }
    }
    return i
}
)();
var ed = new x("MAT_INPUT_VALUE_ACCESSOR")
  , X_ = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"]
  , Z_ = 0
  , dn = ( () => {
    class i {
        get disabled() {
            return this._disabled
        }
        set disabled(e) {
            this._disabled = _i(e),
            this.focused && (this.focused = !1,
            this.stateChanges.next())
        }
        get id() {
            return this._id
        }
        set id(e) {
            this._id = e || this._uid
        }
        get required() {
            return this._required ?? this.ngControl?.control?.hasValidator(Re.required) ?? !1
        }
        set required(e) {
            this._required = _i(e)
        }
        get type() {
            return this._type
        }
        set type(e) {
            this._type = e || "text",
            this._validateType(),
            !this._isTextarea && Vs().has(this._type) && (this._elementRef.nativeElement.type = this._type)
        }
        get errorStateMatcher() {
            return this._errorStateTracker.matcher
        }
        set errorStateMatcher(e) {
            this._errorStateTracker.matcher = e
        }
        get value() {
            return this._inputValueAccessor.value
        }
        set value(e) {
            e !== this.value && (this._inputValueAccessor.value = e,
            this.stateChanges.next())
        }
        get readonly() {
            return this._readonly
        }
        set readonly(e) {
            this._readonly = _i(e)
        }
        get errorState() {
            return this._errorStateTracker.errorState
        }
        set errorState(e) {
            this._errorStateTracker.errorState = e
        }
        constructor(e, t, r, o, a, s, d, c, m, b) {
            this._elementRef = e,
            this._platform = t,
            this.ngControl = r,
            this._autofillMonitor = c,
            this._formField = b,
            this._uid = `mat-input-${Z_++}`,
            this.focused = !1,
            this.stateChanges = new A,
            this.controlType = "mat-input",
            this.autofilled = !1,
            this._disabled = !1,
            this._type = "text",
            this._readonly = !1,
            this._neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(K => Vs().has(K)),
            this._iOSKeyupListener = K => {
                let k = K.target;
                !k.value && k.selectionStart === 0 && k.selectionEnd === 0 && (k.setSelectionRange(1, 1),
                k.setSelectionRange(0, 0))
            }
            ;
            let R = this._elementRef.nativeElement
              , W = R.nodeName.toLowerCase();
            this._inputValueAccessor = d || R,
            this._previousNativeValue = this.value,
            this.id = this.id,
            t.IOS && m.runOutsideAngular( () => {
                e.nativeElement.addEventListener("keyup", this._iOSKeyupListener)
            }
            ),
            this._errorStateTracker = new ur(s,r,a,o,this.stateChanges),
            this._isServer = !this._platform.isBrowser,
            this._isNativeSelect = W === "select",
            this._isTextarea = W === "textarea",
            this._isInFormField = !!b,
            this._isNativeSelect && (this.controlType = R.multiple ? "mat-native-select-multiple" : "mat-native-select")
        }
        ngAfterViewInit() {
            this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e => {
                this.autofilled = e.isAutofilled,
                this.stateChanges.next()
            }
            )
        }
        ngOnChanges() {
            this.stateChanges.next()
        }
        ngOnDestroy() {
            this.stateChanges.complete(),
            this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),
            this._platform.IOS && this._elementRef.nativeElement.removeEventListener("keyup", this._iOSKeyupListener)
        }
        ngDoCheck() {
            this.ngControl && (this.updateErrorState(),
            this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled && (this.disabled = this.ngControl.disabled,
            this.stateChanges.next())),
            this._dirtyCheckNativeValue(),
            this._dirtyCheckPlaceholder()
        }
        focus(e) {
            this._elementRef.nativeElement.focus(e)
        }
        updateErrorState() {
            this._errorStateTracker.updateErrorState()
        }
        _focusChanged(e) {
            e !== this.focused && (this.focused = e,
            this.stateChanges.next())
        }
        _onInput() {}
        _dirtyCheckNativeValue() {
            let e = this._elementRef.nativeElement.value;
            this._previousNativeValue !== e && (this._previousNativeValue = e,
            this.stateChanges.next())
        }
        _dirtyCheckPlaceholder() {
            let e = this._getPlaceholder();
            if (e !== this._previousPlaceholder) {
                let t = this._elementRef.nativeElement;
                this._previousPlaceholder = e,
                e ? t.setAttribute("placeholder", e) : t.removeAttribute("placeholder")
            }
        }
        _getPlaceholder() {
            return this.placeholder || null
        }
        _validateType() {
            X_.indexOf(this._type) > -1
        }
        _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1
        }
        _isBadInput() {
            let e = this._elementRef.nativeElement.validity;
            return e && e.badInput
        }
        get empty() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled
        }
        get shouldLabelFloat() {
            if (this._isNativeSelect) {
                let e = this._elementRef.nativeElement
                  , t = e.options[0];
                return this.focused || e.multiple || !this.empty || !!(e.selectedIndex > -1 && t && t.label)
            } else
                return this.focused || !this.empty
        }
        setDescribedByIds(e) {
            e.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", e.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby")
        }
        onContainerClick() {
            this.focused || this.focus()
        }
        _isInlineSelect() {
            let e = this._elementRef.nativeElement;
            return this._isNativeSelect && (e.multiple || e.size > 1)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(G),l(qt, 10),l(tr, 8),l(fi, 8),l(Gt),l(ed, 10),l(Tu),l(T),l(mr, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
            hostAttrs: [1, "mat-mdc-input-element"],
            hostVars: 18,
            hostBindings: function(t, r) {
                t & 1 && V("focus", function() {
                    return r._focusChanged(!0)
                })("blur", function() {
                    return r._focusChanged(!1)
                })("input", function() {
                    return r._onInput()
                }),
                t & 2 && (Ee("id", r.id)("disabled", r.disabled)("required", r.required),
                Y("name", r.name || null)("readonly", r.readonly && !r._isNativeSelect || null)("aria-invalid", r.empty && r.required ? null : r.errorState)("aria-required", r.required)("id", r.id),
                B("mat-input-server", r._isServer)("mat-mdc-form-field-textarea-control", r._isInFormField && r._isTextarea)("mat-mdc-form-field-input-control", r._isInFormField)("mdc-text-field__input", r._isInFormField)("mat-mdc-native-select-inline", r._isInlineSelect()))
            },
            inputs: {
                disabled: "disabled",
                id: "id",
                placeholder: "placeholder",
                name: "name",
                required: "required",
                type: "type",
                errorStateMatcher: "errorStateMatcher",
                userAriaDescribedBy: [w.None, "aria-describedby", "userAriaDescribedBy"],
                value: "value",
                readonly: "readonly"
            },
            exportAs: ["matInput"],
            standalone: !0,
            features: [de([{
                provide: zo,
                useExisting: i
            }]), he]
        })
        }
    }
    return i
}
)()
  , ln = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [_e, wi, wi, Fu, _e]
        })
        }
    }
    return i
}
)();
var pr = class {
    attach(n) {
        return this._attachedHost = n,
        n.attach(this)
    }
    detach() {
        let n = this._attachedHost;
        n != null && (this._attachedHost = null,
        n.detach())
    }
    get isAttached() {
        return this._attachedHost != null
    }
    setAttachedHost(n) {
        this._attachedHost = n
    }
}
  , Ct = class extends pr {
    constructor(n, e, t, r, o) {
        super(),
        this.component = n,
        this.viewContainerRef = e,
        this.injector = t,
        this.componentFactoryResolver = r,
        this.projectableNodes = o
    }
}
  , Dt = class extends pr {
    constructor(n, e, t, r) {
        super(),
        this.templateRef = n,
        this.viewContainerRef = e,
        this.context = t,
        this.injector = r
    }
    get origin() {
        return this.templateRef.elementRef
    }
    attach(n, e=this.context) {
        return this.context = e,
        super.attach(n)
    }
    detach() {
        return this.context = void 0,
        super.detach()
    }
}
  , id = class extends pr {
    constructor(n) {
        super(),
        this.element = n instanceof F ? n.nativeElement : n
    }
}
  , cn = class {
    constructor() {
        this._isDisposed = !1,
        this.attachDomPortal = null
    }
    hasAttached() {
        return !!this._attachedPortal
    }
    attach(n) {
        if (n instanceof Ct)
            return this._attachedPortal = n,
            this.attachComponentPortal(n);
        if (n instanceof Dt)
            return this._attachedPortal = n,
            this.attachTemplatePortal(n);
        if (this.attachDomPortal && n instanceof id)
            return this._attachedPortal = n,
            this.attachDomPortal(n)
    }
    detach() {
        this._attachedPortal && (this._attachedPortal.setAttachedHost(null),
        this._attachedPortal = null),
        this._invokeDisposeFn()
    }
    dispose() {
        this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        this._isDisposed = !0
    }
    setDisposeFn(n) {
        this._disposeFn = n
    }
    _invokeDisposeFn() {
        this._disposeFn && (this._disposeFn(),
        this._disposeFn = null)
    }
}
;
var Bo = class extends cn {
    constructor(n, e, t, r, o) {
        super(),
        this.outletElement = n,
        this._componentFactoryResolver = e,
        this._appRef = t,
        this._defaultInjector = r,
        this.attachDomPortal = a => {
            this._document;
            let s = a.element;
            s.parentNode;
            let d = this._document.createComment("dom-portal");
            s.parentNode.insertBefore(d, s),
            this.outletElement.appendChild(s),
            this._attachedPortal = a,
            super.setDisposeFn( () => {
                d.parentNode && d.parentNode.replaceChild(s, d)
            }
            )
        }
        ,
        this._document = o
    }
    attachComponentPortal(n) {
        let t = (n.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(n.component), r;
        return n.viewContainerRef ? (r = n.viewContainerRef.createComponent(t, n.viewContainerRef.length, n.injector || n.viewContainerRef.injector, n.projectableNodes || void 0),
        this.setDisposeFn( () => r.destroy())) : (r = t.create(n.injector || this._defaultInjector || Le.NULL),
        this._appRef.attachView(r.hostView),
        this.setDisposeFn( () => {
            this._appRef.viewCount > 0 && this._appRef.detachView(r.hostView),
            r.destroy()
        }
        )),
        this.outletElement.appendChild(this._getComponentRootNode(r)),
        this._attachedPortal = n,
        r
    }
    attachTemplatePortal(n) {
        let e = n.viewContainerRef
          , t = e.createEmbeddedView(n.templateRef, n.context, {
            injector: n.injector
        });
        return t.rootNodes.forEach(r => this.outletElement.appendChild(r)),
        t.detectChanges(),
        this.setDisposeFn( () => {
            let r = e.indexOf(t);
            r !== -1 && e.remove(r)
        }
        ),
        this._attachedPortal = n,
        t
    }
    dispose() {
        super.dispose(),
        this.outletElement.remove()
    }
    _getComponentRootNode(n) {
        return n.hostView.rootNodes[0]
    }
}
;
var gt = ( () => {
    class i extends cn {
        constructor(e, t, r) {
            super(),
            this._componentFactoryResolver = e,
            this._viewContainerRef = t,
            this._isInitialized = !1,
            this.attached = new M,
            this.attachDomPortal = o => {
                this._document;
                let a = o.element;
                a.parentNode;
                let s = this._document.createComment("dom-portal");
                o.setAttachedHost(this),
                a.parentNode.insertBefore(s, a),
                this._getRootNode().appendChild(a),
                this._attachedPortal = o,
                super.setDisposeFn( () => {
                    s.parentNode && s.parentNode.replaceChild(a, s)
                }
                )
            }
            ,
            this._document = r
        }
        get portal() {
            return this._attachedPortal
        }
        set portal(e) {
            this.hasAttached() && !e && !this._isInitialized || (this.hasAttached() && super.detach(),
            e && super.attach(e),
            this._attachedPortal = e || null)
        }
        get attachedRef() {
            return this._attachedRef
        }
        ngOnInit() {
            this._isInitialized = !0
        }
        ngOnDestroy() {
            super.dispose(),
            this._attachedRef = this._attachedPortal = null
        }
        attachComponentPortal(e) {
            e.setAttachedHost(this);
            let t = e.viewContainerRef != null ? e.viewContainerRef : this._viewContainerRef
              , o = (e.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(e.component)
              , a = t.createComponent(o, t.length, e.injector || t.injector, e.projectableNodes || void 0);
            return t !== this._viewContainerRef && this._getRootNode().appendChild(a.hostView.rootNodes[0]),
            super.setDisposeFn( () => a.destroy()),
            this._attachedPortal = e,
            this._attachedRef = a,
            this.attached.emit(a),
            a
        }
        attachTemplatePortal(e) {
            e.setAttachedHost(this);
            let t = this._viewContainerRef.createEmbeddedView(e.templateRef, e.context, {
                injector: e.injector
            });
            return super.setDisposeFn( () => this._viewContainerRef.clear()),
            this._attachedPortal = e,
            this._attachedRef = t,
            this.attached.emit(t),
            t
        }
        _getRootNode() {
            let e = this._viewContainerRef.element.nativeElement;
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Sr),l(st),l(O))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkPortalOutlet", ""]],
            inputs: {
                portal: [w.None, "cdkPortalOutlet", "portal"]
            },
            outputs: {
                attached: "attached"
            },
            exportAs: ["cdkPortalOutlet"],
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)();
var Zt = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({})
        }
    }
    return i
}
)();
var K_ = ["*"];
function Q_(i, n) {
    i & 1 && ee(0)
}
var nd = ( () => {
    class i {
        constructor(e) {
            this._elementRef = e
        }
        focus() {
            this._elementRef.nativeElement.focus()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkStepHeader", ""]],
            hostAttrs: ["role", "tab"],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , rd = ( () => {
    class i {
        constructor(e) {
            this.template = e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Ue))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkStepLabel", ""]],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , J_ = 0;
var Et = {
    NUMBER: "number",
    EDIT: "edit",
    DONE: "done",
    ERROR: "error"
}
  , od = new x("STEPPER_GLOBAL_OPTIONS")
  , Uo = ( () => {
    class i {
        get completed() {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride
        }
        set completed(e) {
            this._completedOverride = e
        }
        _getDefaultCompleted() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted
        }
        get hasError() {
            return this._customError == null ? this._getDefaultError() : this._customError
        }
        set hasError(e) {
            this._customError = e
        }
        _getDefaultError() {
            return this.stepControl && this.stepControl.invalid && this.interacted
        }
        constructor(e, t) {
            this._stepper = e,
            this.interacted = !1,
            this.interactedStream = new M,
            this.editable = !0,
            this.optional = !1,
            this._completedOverride = null,
            this._customError = null,
            this._stepperOptions = t || {},
            this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== !1
        }
        select() {
            this._stepper.selected = this
        }
        reset() {
            this.interacted = !1,
            this._completedOverride != null && (this._completedOverride = !1),
            this._customError != null && (this._customError = !1),
            this.stepControl && this.stepControl.reset()
        }
        ngOnChanges() {
            this._stepper._stateChanged()
        }
        _markAsInteracted() {
            this.interacted || (this.interacted = !0,
            this.interactedStream.emit(this))
        }
        _showError() {
            return this._stepperOptions.showError ?? this._customError != null
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Me( () => un)),l(od, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["cdk-step"]],
            contentQueries: function(t, r, o) {
                if (t & 1 && xe(o, rd, 5),
                t & 2) {
                    let a;
                    U(a = H()) && (r.stepLabel = a.first)
                }
            },
            viewQuery: function(t, r) {
                if (t & 1 && se(Ue, 7),
                t & 2) {
                    let o;
                    U(o = H()) && (r.content = o.first)
                }
            },
            inputs: {
                stepControl: "stepControl",
                label: "label",
                errorMessage: "errorMessage",
                ariaLabel: [w.None, "aria-label", "ariaLabel"],
                ariaLabelledby: [w.None, "aria-labelledby", "ariaLabelledby"],
                state: "state",
                editable: [w.HasDecoratorInputTransform, "editable", "editable", X],
                optional: [w.HasDecoratorInputTransform, "optional", "optional", X],
                completed: [w.HasDecoratorInputTransform, "completed", "completed", X],
                hasError: [w.HasDecoratorInputTransform, "hasError", "hasError", X]
            },
            outputs: {
                interactedStream: "interacted"
            },
            exportAs: ["cdkStep"],
            standalone: !0,
            features: [be, he, L],
            ngContentSelectors: K_,
            decls: 1,
            vars: 0,
            template: function(t, r) {
                t & 1 && (ve(),
                $(0, Q_, 1, 0, "ng-template"))
            },
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , un = ( () => {
    class i {
        get selectedIndex() {
            return this._selectedIndex
        }
        set selectedIndex(e) {
            this.steps && this._steps ? (this._isValidIndex(e),
            this.selected?._markAsInteracted(),
            this._selectedIndex !== e && !this._anyControlsInvalidOrPending(e) && (e >= this._selectedIndex || this.steps.toArray()[e].editable) && this._updateSelectedItemIndex(e)) : this._selectedIndex = e
        }
        get selected() {
            return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0
        }
        set selected(e) {
            this.selectedIndex = e && this.steps ? this.steps.toArray().indexOf(e) : -1
        }
        get orientation() {
            return this._orientation
        }
        set orientation(e) {
            this._orientation = e,
            this._keyManager && this._keyManager.withVerticalOrientation(e === "vertical")
        }
        constructor(e, t, r) {
            this._dir = e,
            this._changeDetectorRef = t,
            this._elementRef = r,
            this._destroyed = new A,
            this.steps = new Ft,
            this._sortedHeaders = new Ft,
            this.linear = !1,
            this._selectedIndex = 0,
            this.selectionChange = new M,
            this.selectedIndexChange = new M,
            this._orientation = "horizontal",
            this._groupId = J_++
        }
        ngAfterContentInit() {
            this._steps.changes.pipe(Ce(this._steps), ge(this._destroyed)).subscribe(e => {
                this.steps.reset(e.filter(t => t._stepper === this)),
                this.steps.notifyOnChanges()
            }
            )
        }
        ngAfterViewInit() {
            this._stepHeader.changes.pipe(Ce(this._stepHeader), ge(this._destroyed)).subscribe(e => {
                this._sortedHeaders.reset(e.toArray().sort( (t, r) => t._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)),
                this._sortedHeaders.notifyOnChanges()
            }
            ),
            this._keyManager = new Fo(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical"),
            (this._dir ? this._dir.change : E()).pipe(Ce(this._layoutDirection()), ge(this._destroyed)).subscribe(e => this._keyManager.withHorizontalOrientation(e)),
            this._keyManager.updateActiveItem(this._selectedIndex),
            this.steps.changes.subscribe( () => {
                this.selected || (this._selectedIndex = Math.max(this._selectedIndex - 1, 0))
            }
            ),
            this._isValidIndex(this._selectedIndex) || (this._selectedIndex = 0)
        }
        ngOnDestroy() {
            this._keyManager?.destroy(),
            this.steps.destroy(),
            this._sortedHeaders.destroy(),
            this._destroyed.next(),
            this._destroyed.complete()
        }
        next() {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1)
        }
        previous() {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0)
        }
        reset() {
            this._updateSelectedItemIndex(0),
            this.steps.forEach(e => e.reset()),
            this._stateChanged()
        }
        _getStepLabelId(e) {
            return `cdk-step-label-${this._groupId}-${e}`
        }
        _getStepContentId(e) {
            return `cdk-step-content-${this._groupId}-${e}`
        }
        _stateChanged() {
            this._changeDetectorRef.markForCheck()
        }
        _getAnimationDirection(e) {
            let t = e - this._selectedIndex;
            return t < 0 ? this._layoutDirection() === "rtl" ? "next" : "previous" : t > 0 ? this._layoutDirection() === "rtl" ? "previous" : "next" : "current"
        }
        _getIndicatorType(e, t=Et.NUMBER) {
            let r = this.steps.toArray()[e]
              , o = this._isCurrentStep(e);
            return r._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(r, o) : this._getGuidelineLogic(r, o, t)
        }
        _getDefaultIndicatorLogic(e, t) {
            return e._showError() && e.hasError && !t ? Et.ERROR : !e.completed || t ? Et.NUMBER : e.editable ? Et.EDIT : Et.DONE
        }
        _getGuidelineLogic(e, t, r=Et.NUMBER) {
            return e._showError() && e.hasError && !t ? Et.ERROR : e.completed && !t ? Et.DONE : e.completed && t ? r : e.editable && t ? Et.EDIT : r
        }
        _isCurrentStep(e) {
            return this._selectedIndex === e
        }
        _getFocusIndex() {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex
        }
        _updateSelectedItemIndex(e) {
            let t = this.steps.toArray();
            this.selectionChange.emit({
                selectedIndex: e,
                previouslySelectedIndex: this._selectedIndex,
                selectedStep: t[e],
                previouslySelectedStep: t[this._selectedIndex]
            }),
            this._containsFocus() ? this._keyManager.setActiveItem(e) : this._keyManager.updateActiveItem(e),
            this._selectedIndex = e,
            this.selectedIndexChange.emit(this._selectedIndex),
            this._stateChanged()
        }
        _onKeydown(e) {
            let t = je(e)
              , r = e.keyCode
              , o = this._keyManager;
            o.activeItemIndex != null && !t && (r === 32 || r === 13) ? (this.selectedIndex = o.activeItemIndex,
            e.preventDefault()) : o.setFocusOrigin("keyboard").onKeydown(e)
        }
        _anyControlsInvalidOrPending(e) {
            return this.linear && e >= 0 ? this.steps.toArray().slice(0, e).some(t => {
                let r = t.stepControl;
                return (r ? r.invalid || r.pending || !t.interacted : !t.completed) && !t.optional && !t._completedOverride
            }
            ) : !1
        }
        _layoutDirection() {
            return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"
        }
        _containsFocus() {
            let e = this._elementRef.nativeElement
              , t = mt();
            return e === t || e.contains(t)
        }
        _isValidIndex(e) {
            return e > -1 && (!this.steps || e < this.steps.length)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Oe, 8),l(le),l(F))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "cdkStepper", ""]],
            contentQueries: function(t, r, o) {
                if (t & 1 && (xe(o, Uo, 5),
                xe(o, nd, 5)),
                t & 2) {
                    let a;
                    U(a = H()) && (r._steps = a),
                    U(a = H()) && (r._stepHeader = a)
                }
            },
            inputs: {
                linear: [w.HasDecoratorInputTransform, "linear", "linear", X],
                selectedIndex: [w.HasDecoratorInputTransform, "selectedIndex", "selectedIndex", In],
                selected: "selected",
                orientation: "orientation"
            },
            outputs: {
                selectionChange: "selectionChange",
                selectedIndexChange: "selectedIndexChange"
            },
            exportAs: ["cdkStepper"],
            standalone: !0,
            features: [be]
        })
        }
    }
    return i
}
)()
  , Yu = ( () => {
    class i {
        constructor(e) {
            this._stepper = e,
            this.type = "submit"
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(un))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["button", "cdkStepperNext", ""]],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 1 && V("click", function() {
                    return r._stepper.next()
                }),
                t & 2 && Ee("type", r.type)
            },
            inputs: {
                type: "type"
            },
            standalone: !0
        })
        }
    }
    return i
}
)()
  , qu = ( () => {
    class i {
        constructor(e) {
            this._stepper = e,
            this.type = "button"
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(un))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["button", "cdkStepperPrevious", ""]],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 1 && V("click", function() {
                    return r._stepper.previous()
                }),
                t & 2 && Ee("type", r.type)
            },
            inputs: {
                type: "type"
            },
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Wu = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [pt]
        })
        }
    }
    return i
}
)();
var eb = ["*"], Ho;
function tb() {
    if (Ho === void 0 && (Ho = null,
    typeof window < "u")) {
        let i = window;
        i.trustedTypes !== void 0 && (Ho = i.trustedTypes.createPolicy("angular#components", {
            createHTML: n => n
        }))
    }
    return Ho
}
function fr(i) {
    return tb()?.createHTML(i) || i
}
function Gu(i) {
    return Error(`Unable to find icon with the name "${i}"`)
}
function ib() {
    return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")
}
function Xu(i) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)
}
function Zu(i) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)
}
var It = class {
    constructor(n, e, t) {
        this.url = n,
        this.svgText = e,
        this.options = t
    }
}
  , nb = ( () => {
    class i {
        constructor(e, t, r, o) {
            this._httpClient = e,
            this._sanitizer = t,
            this._errorHandler = o,
            this._svgIconConfigs = new Map,
            this._iconSetConfigs = new Map,
            this._cachedIconsByUrl = new Map,
            this._inProgressUrlFetches = new Map,
            this._fontCssClassesByAlias = new Map,
            this._resolvers = [],
            this._defaultFontSetClass = ["material-icons", "mat-ligature-font"],
            this._document = r
        }
        addSvgIcon(e, t, r) {
            return this.addSvgIconInNamespace("", e, t, r)
        }
        addSvgIconLiteral(e, t, r) {
            return this.addSvgIconLiteralInNamespace("", e, t, r)
        }
        addSvgIconInNamespace(e, t, r, o) {
            return this._addSvgIconConfig(e, t, new It(r,null,o))
        }
        addSvgIconResolver(e) {
            return this._resolvers.push(e),
            this
        }
        addSvgIconLiteralInNamespace(e, t, r, o) {
            let a = this._sanitizer.sanitize(Be.HTML, r);
            if (!a)
                throw Zu(r);
            let s = fr(a);
            return this._addSvgIconConfig(e, t, new It("",s,o))
        }
        addSvgIconSet(e, t) {
            return this.addSvgIconSetInNamespace("", e, t)
        }
        addSvgIconSetLiteral(e, t) {
            return this.addSvgIconSetLiteralInNamespace("", e, t)
        }
        addSvgIconSetInNamespace(e, t, r) {
            return this._addSvgIconSetConfig(e, new It(t,null,r))
        }
        addSvgIconSetLiteralInNamespace(e, t, r) {
            let o = this._sanitizer.sanitize(Be.HTML, t);
            if (!o)
                throw Zu(t);
            let a = fr(o);
            return this._addSvgIconSetConfig(e, new It("",a,r))
        }
        registerFontClassAlias(e, t=e) {
            return this._fontCssClassesByAlias.set(e, t),
            this
        }
        classNameForFontAlias(e) {
            return this._fontCssClassesByAlias.get(e) || e
        }
        setDefaultFontSetClass(...e) {
            return this._defaultFontSetClass = e,
            this
        }
        getDefaultFontSetClass() {
            return this._defaultFontSetClass
        }
        getSvgIconFromUrl(e) {
            let t = this._sanitizer.sanitize(Be.RESOURCE_URL, e);
            if (!t)
                throw Xu(e);
            let r = this._cachedIconsByUrl.get(t);
            return r ? E($o(r)) : this._loadSvgIconFromConfig(new It(e,null)).pipe(ue(o => this._cachedIconsByUrl.set(t, o)), N(o => $o(o)))
        }
        getNamedSvgIcon(e, t="") {
            let r = Ku(t, e)
              , o = this._svgIconConfigs.get(r);
            if (o)
                return this._getSvgFromConfig(o);
            if (o = this._getIconConfigFromResolvers(t, e),
            o)
                return this._svgIconConfigs.set(r, o),
                this._getSvgFromConfig(o);
            let a = this._iconSetConfigs.get(t);
            return a ? this._getSvgFromIconSetConfigs(e, a) : ti(Gu(r))
        }
        ngOnDestroy() {
            this._resolvers = [],
            this._svgIconConfigs.clear(),
            this._iconSetConfigs.clear(),
            this._cachedIconsByUrl.clear()
        }
        _getSvgFromConfig(e) {
            return e.svgText ? E($o(this._svgElementFromConfig(e))) : this._loadSvgIconFromConfig(e).pipe(N(t => $o(t)))
        }
        _getSvgFromIconSetConfigs(e, t) {
            let r = this._extractIconWithNameFromAnySet(e, t);
            if (r)
                return E(r);
            let o = t.filter(a => !a.svgText).map(a => this._loadSvgIconSetFromConfig(a).pipe(At(s => {
                let c = `Loading icon set URL: ${this._sanitizer.sanitize(Be.RESOURCE_URL, a.url)} failed: ${s.message}`;
                return this._errorHandler.handleError(new Error(c)),
                E(null)
            }
            )));
            return Dr(o).pipe(N( () => {
                let a = this._extractIconWithNameFromAnySet(e, t);
                if (!a)
                    throw Gu(e);
                return a
            }
            ))
        }
        _extractIconWithNameFromAnySet(e, t) {
            for (let r = t.length - 1; r >= 0; r--) {
                let o = t[r];
                if (o.svgText && o.svgText.toString().indexOf(e) > -1) {
                    let a = this._svgElementFromConfig(o)
                      , s = this._extractSvgIconFromSet(a, e, o.options);
                    if (s)
                        return s
                }
            }
            return null
        }
        _loadSvgIconFromConfig(e) {
            return this._fetchIcon(e).pipe(ue(t => e.svgText = t), N( () => this._svgElementFromConfig(e)))
        }
        _loadSvgIconSetFromConfig(e) {
            return e.svgText ? E(null) : this._fetchIcon(e).pipe(ue(t => e.svgText = t))
        }
        _extractSvgIconFromSet(e, t, r) {
            let o = e.querySelector(`[id="${t}"]`);
            if (!o)
                return null;
            let a = o.cloneNode(!0);
            if (a.removeAttribute("id"),
            a.nodeName.toLowerCase() === "svg")
                return this._setSvgAttributes(a, r);
            if (a.nodeName.toLowerCase() === "symbol")
                return this._setSvgAttributes(this._toSvgElement(a), r);
            let s = this._svgElementFromString(fr("<svg></svg>"));
            return s.appendChild(a),
            this._setSvgAttributes(s, r)
        }
        _svgElementFromString(e) {
            let t = this._document.createElement("DIV");
            t.innerHTML = e;
            let r = t.querySelector("svg");
            if (!r)
                throw Error("<svg> tag not found");
            return r
        }
        _toSvgElement(e) {
            let t = this._svgElementFromString(fr("<svg></svg>"))
              , r = e.attributes;
            for (let o = 0; o < r.length; o++) {
                let {name: a, value: s} = r[o];
                a !== "id" && t.setAttribute(a, s)
            }
            for (let o = 0; o < e.childNodes.length; o++)
                e.childNodes[o].nodeType === this._document.ELEMENT_NODE && t.appendChild(e.childNodes[o].cloneNode(!0));
            return t
        }
        _setSvgAttributes(e, t) {
            return e.setAttribute("fit", ""),
            e.setAttribute("height", "100%"),
            e.setAttribute("width", "100%"),
            e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
            e.setAttribute("focusable", "false"),
            t && t.viewBox && e.setAttribute("viewBox", t.viewBox),
            e
        }
        _fetchIcon(e) {
            let {url: t, options: r} = e
              , o = r?.withCredentials ?? !1;
            if (!this._httpClient)
                throw ib();
            if (t == null)
                throw Error(`Cannot fetch icon from URL "${t}".`);
            let a = this._sanitizer.sanitize(Be.RESOURCE_URL, t);
            if (!a)
                throw Xu(t);
            let s = this._inProgressUrlFetches.get(a);
            if (s)
                return s;
            let d = this._httpClient.get(a, {
                responseType: "text",
                withCredentials: o
            }).pipe(N(c => fr(c)), St( () => this._inProgressUrlFetches.delete(a)), Ld());
            return this._inProgressUrlFetches.set(a, d),
            d
        }
        _addSvgIconConfig(e, t, r) {
            return this._svgIconConfigs.set(Ku(e, t), r),
            this
        }
        _addSvgIconSetConfig(e, t) {
            let r = this._iconSetConfigs.get(e);
            return r ? r.push(t) : this._iconSetConfigs.set(e, [t]),
            this
        }
        _svgElementFromConfig(e) {
            if (!e.svgElement) {
                let t = this._svgElementFromString(e.svgText);
                this._setSvgAttributes(t, e.options),
                e.svgElement = t
            }
            return e.svgElement
        }
        _getIconConfigFromResolvers(e, t) {
            for (let r = 0; r < this._resolvers.length; r++) {
                let o = this._resolvers[r](t, e);
                if (o)
                    return rb(o) ? new It(o.url,null,o.options) : new It(o,null)
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(ci, 8),p(Oa),p(O, 8),p(oi))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function $o(i) {
    return i.cloneNode(!0)
}
function Ku(i, n) {
    return i + ":" + n
}
function rb(i) {
    return !!(i.url && i.options)
}
var ob = new x("MAT_ICON_DEFAULT_OPTIONS")
  , ab = new x("mat-icon-location",{
    providedIn: "root",
    factory: sb
});
function sb() {
    let i = g(O)
      , n = i ? i.location : null;
    return {
        getPathname: () => n ? n.pathname + n.search : ""
    }
}
var Qu = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"]
  , db = Qu.map(i => `[${i}]`).join(", ")
  , lb = /^url\(['"]?#(.*?)['"]?\)$/
  , hn = ( () => {
    class i {
        get color() {
            return this._color || this._defaultColor
        }
        set color(e) {
            this._color = e
        }
        get svgIcon() {
            return this._svgIcon
        }
        set svgIcon(e) {
            e !== this._svgIcon && (e ? this._updateSvgIcon(e) : this._svgIcon && this._clearSvgElement(),
            this._svgIcon = e)
        }
        get fontSet() {
            return this._fontSet
        }
        set fontSet(e) {
            let t = this._cleanupFontValue(e);
            t !== this._fontSet && (this._fontSet = t,
            this._updateFontIconClasses())
        }
        get fontIcon() {
            return this._fontIcon
        }
        set fontIcon(e) {
            let t = this._cleanupFontValue(e);
            t !== this._fontIcon && (this._fontIcon = t,
            this._updateFontIconClasses())
        }
        constructor(e, t, r, o, a, s) {
            this._elementRef = e,
            this._iconRegistry = t,
            this._location = o,
            this._errorHandler = a,
            this.inline = !1,
            this._previousFontSetClass = [],
            this._currentIconFetch = ce.EMPTY,
            s && (s.color && (this.color = this._defaultColor = s.color),
            s.fontSet && (this.fontSet = s.fontSet)),
            r || e.nativeElement.setAttribute("aria-hidden", "true")
        }
        _splitIconName(e) {
            if (!e)
                return ["", ""];
            let t = e.split(":");
            switch (t.length) {
            case 1:
                return ["", t[0]];
            case 2:
                return t;
            default:
                throw Error(`Invalid icon name: "${e}"`)
            }
        }
        ngOnInit() {
            this._updateFontIconClasses()
        }
        ngAfterViewChecked() {
            let e = this._elementsWithExternalReferences;
            if (e && e.size) {
                let t = this._location.getPathname();
                t !== this._previousPath && (this._previousPath = t,
                this._prependPathToReferences(t))
            }
        }
        ngOnDestroy() {
            this._currentIconFetch.unsubscribe(),
            this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear()
        }
        _usingFontIcon() {
            return !this.svgIcon
        }
        _setSvgElement(e) {
            this._clearSvgElement();
            let t = this._location.getPathname();
            this._previousPath = t,
            this._cacheChildrenWithExternalReferences(e),
            this._prependPathToReferences(t),
            this._elementRef.nativeElement.appendChild(e)
        }
        _clearSvgElement() {
            let e = this._elementRef.nativeElement
              , t = e.childNodes.length;
            for (this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear(); t--; ) {
                let r = e.childNodes[t];
                (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") && r.remove()
            }
        }
        _updateFontIconClasses() {
            if (!this._usingFontIcon())
                return;
            let e = this._elementRef.nativeElement
              , t = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(r => r.length > 0);
            this._previousFontSetClass.forEach(r => e.classList.remove(r)),
            t.forEach(r => e.classList.add(r)),
            this._previousFontSetClass = t,
            this.fontIcon !== this._previousFontIconClass && !t.includes("mat-ligature-font") && (this._previousFontIconClass && e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            this._previousFontIconClass = this.fontIcon)
        }
        _cleanupFontValue(e) {
            return typeof e == "string" ? e.trim().split(" ")[0] : e
        }
        _prependPathToReferences(e) {
            let t = this._elementsWithExternalReferences;
            t && t.forEach( (r, o) => {
                r.forEach(a => {
                    o.setAttribute(a.name, `url('${e}#${a.value}')`)
                }
                )
            }
            )
        }
        _cacheChildrenWithExternalReferences(e) {
            let t = e.querySelectorAll(db)
              , r = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map;
            for (let o = 0; o < t.length; o++)
                Qu.forEach(a => {
                    let s = t[o]
                      , d = s.getAttribute(a)
                      , c = d ? d.match(lb) : null;
                    if (c) {
                        let m = r.get(s);
                        m || (m = [],
                        r.set(s, m)),
                        m.push({
                            name: a,
                            value: c[1]
                        })
                    }
                }
                )
        }
        _updateSvgIcon(e) {
            if (this._svgNamespace = null,
            this._svgName = null,
            this._currentIconFetch.unsubscribe(),
            e) {
                let[t,r] = this._splitIconName(e);
                t && (this._svgNamespace = t),
                r && (this._svgName = r),
                this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(r, t).pipe(fe(1)).subscribe(o => this._setSvgElement(o), o => {
                    let a = `Error retrieving icon ${t}:${r}! ${o.message}`;
                    this._errorHandler.handleError(new Error(a))
                }
                )
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(nb),Tt("aria-hidden"),l(ab),l(oi),l(ob, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-icon"]],
            hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
            hostVars: 10,
            hostBindings: function(t, r) {
                t & 2 && (Y("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", r._svgName || r.fontIcon)("data-mat-icon-namespace", r._svgNamespace || r.fontSet)("fontIcon", r._usingFontIcon() ? r.fontIcon : null),
                We(r.color ? "mat-" + r.color : ""),
                B("mat-icon-inline", r.inline)("mat-icon-no-color", r.color !== "primary" && r.color !== "accent" && r.color !== "warn"))
            },
            inputs: {
                color: "color",
                inline: [w.HasDecoratorInputTransform, "inline", "inline", X],
                svgIcon: "svgIcon",
                fontSet: "fontSet",
                fontIcon: "fontIcon"
            },
            exportAs: ["matIcon"],
            standalone: !0,
            features: [be, L],
            ngContentSelectors: eb,
            decls: 1,
            vars: 0,
            template: function(t, r) {
                t & 1 && (ve(),
                ee(0))
            },
            styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , mn = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [_e, _e]
        })
        }
    }
    return i
}
)();
function cb(i, n) {
    if (i & 1 && si(0, 2),
    i & 2) {
        let e = S();
        C("ngTemplateOutlet", e.iconOverrides[e.state])("ngTemplateOutletContext", e._getIconContext())
    }
}
function ub(i, n) {
    if (i & 1 && (h(0, "span", 7),
    _(1),
    u()),
    i & 2) {
        let e = S(2);
        f(),
        me(e._getDefaultTextForState(e.state))
    }
}
function hb(i, n) {
    if (i & 1 && (h(0, "span", 8),
    _(1),
    u()),
    i & 2) {
        let e = S(3);
        f(),
        me(e._intl.completedLabel)
    }
}
function mb(i, n) {
    if (i & 1 && (h(0, "span", 8),
    _(1),
    u()),
    i & 2) {
        let e = S(3);
        f(),
        me(e._intl.editableLabel)
    }
}
function pb(i, n) {
    if (i & 1 && ($(0, hb, 2, 1, "span", 8)(1, mb, 2, 1),
    h(2, "mat-icon", 7),
    _(3),
    u()),
    i & 2) {
        let e = S(2);
        J(0, e.state === "done" ? 0 : e.state === "edit" ? 1 : -1),
        f(3),
        me(e._getDefaultTextForState(e.state))
    }
}
function fb(i, n) {
    if (i & 1 && $(0, ub, 2, 1)(1, pb, 4, 2),
    i & 2) {
        let e, t = S();
        J(0, (e = t.state) === "number" ? 0 : 1)
    }
}
function gb(i, n) {
    i & 1 && (h(0, "div", 4),
    si(1, 9),
    u()),
    i & 2 && (f(),
    C("ngTemplateOutlet", n.template))
}
function _b(i, n) {
    if (i & 1 && (h(0, "div", 4),
    _(1),
    u()),
    i & 2) {
        let e = S();
        f(),
        me(e.label)
    }
}
function bb(i, n) {
    if (i & 1 && (h(0, "div", 5),
    _(1),
    u()),
    i & 2) {
        let e = S();
        f(),
        me(e._intl.optionalLabel)
    }
}
function vb(i, n) {
    if (i & 1 && (h(0, "div", 6),
    _(1),
    u()),
    i & 2) {
        let e = S();
        f(),
        me(e.errorMessage)
    }
}
var th = ["*"];
function yb(i, n) {}
function xb(i, n) {
    if (i & 1 && (ee(0),
    $(1, yb, 0, 0, "ng-template", 0)),
    i & 2) {
        let e = S();
        f(),
        C("cdkPortalOutlet", e._portal)
    }
}
var ih = (i, n) => ({
    step: i,
    i: n
})
  , nh = i => ({
    animationDuration: i
})
  , rh = (i, n) => ({
    value: i,
    params: n
});
function wb(i, n) {
    i & 1 && ee(0)
}
function Cb(i, n) {
    i & 1 && D(0, "div", 6)
}
function Db(i, n) {
    if (i & 1 && (si(0, 5),
    $(1, Cb, 1, 0, "div", 6)),
    i & 2) {
        let e = n.$implicit
          , t = n.$index
          , r = n.$index
          , o = n.$count;
        S(2);
        let a = Ge(4);
        C("ngTemplateOutlet", a)("ngTemplateOutletContext", En(3, ih, e, t)),
        f(),
        J(1, r !== o - 1 ? 1 : -1)
    }
}
function Eb(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "div", 7),
        V("@horizontalStepTransition.done", function(r) {
            oe(e);
            let o = S(2);
            return ae(o._animationDone.next(r))
        }),
        si(1, 8),
        u()
    }
    if (i & 2) {
        let e = n.$implicit
          , t = n.$index
          , r = S(2);
        B("mat-horizontal-stepper-content-inactive", r.selectedIndex !== t),
        C("@horizontalStepTransition", En(8, rh, r._getAnimationDirection(t), pa(6, nh, r._getAnimationDuration())))("id", r._getStepContentId(t)),
        Y("aria-labelledby", r._getStepLabelId(t)),
        f(),
        C("ngTemplateOutlet", e.content)
    }
}
function Ib(i, n) {
    if (i & 1 && (h(0, "div", 1)(1, "div", 2),
    Nt(2, Db, 2, 6, null, null, Ot),
    u(),
    h(4, "div", 3),
    Nt(5, Eb, 2, 11, "div", 4, Ot),
    u()()),
    i & 2) {
        let e = S();
        f(2),
        Pt(e.steps),
        f(3),
        Pt(e.steps)
    }
}
function Mb(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "div", 9),
        si(1, 5),
        h(2, "div", 10)(3, "div", 11),
        V("@verticalStepTransition.done", function(r) {
            oe(e);
            let o = S(2);
            return ae(o._animationDone.next(r))
        }),
        h(4, "div", 12),
        si(5, 8),
        u()()()()
    }
    if (i & 2) {
        let e = n.$implicit
          , t = n.$index
          , r = n.$index
          , o = n.$count
          , a = S(2)
          , s = Ge(4);
        f(),
        C("ngTemplateOutlet", s)("ngTemplateOutletContext", En(10, ih, e, t)),
        f(),
        B("mat-stepper-vertical-line", r !== o - 1),
        f(),
        B("mat-vertical-stepper-content-inactive", a.selectedIndex !== t),
        C("@verticalStepTransition", En(15, rh, a._getAnimationDirection(t), pa(13, nh, a._getAnimationDuration())))("id", a._getStepContentId(t)),
        Y("aria-labelledby", a._getStepLabelId(t)),
        f(2),
        C("ngTemplateOutlet", e.content)
    }
}
function Ab(i, n) {
    if (i & 1 && Nt(0, Mb, 6, 18, "div", 9, Ot),
    i & 2) {
        let e = S();
        Pt(e.steps)
    }
}
function Sb(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "mat-step-header", 13),
        V("click", function() {
            let r = oe(e).step;
            return ae(r.select())
        })("keydown", function(r) {
            oe(e);
            let o = S();
            return ae(o._onKeydown(r))
        }),
        u()
    }
    if (i & 2) {
        let e = n.step
          , t = n.i
          , r = S();
        B("mat-horizontal-stepper-header", r.orientation === "horizontal")("mat-vertical-stepper-header", r.orientation === "vertical"),
        C("tabIndex", r._getFocusIndex() === t ? 0 : -1)("id", r._getStepLabelId(t))("index", t)("state", r._getIndicatorType(t, e.state))("label", e.stepLabel || e.label)("selected", r.selectedIndex === t)("active", r._stepIsNavigable(t, e))("optional", e.optional)("errorMessage", e.errorMessage)("iconOverrides", r._iconOverrides)("disableRipple", r.disableRipple || !r._stepIsNavigable(t, e))("color", e.color || r.color),
        Y("aria-posinset", t + 1)("aria-setsize", r.steps.length)("aria-controls", r._getStepContentId(t))("aria-selected", r.selectedIndex == t)("aria-label", e.ariaLabel || null)("aria-labelledby", !e.ariaLabel && e.ariaLabelledby ? e.ariaLabelledby : null)("aria-disabled", r._stepIsNavigable(t, e) ? null : !0)
    }
}
var ad = ( () => {
    class i extends rd {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "matStepLabel", ""]],
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)()
  , Yo = ( () => {
    class i {
        constructor() {
            this.changes = new A,
            this.optionalLabel = "Optional",
            this.completedLabel = "Completed",
            this.editableLabel = "Editable"
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function kb(i) {
    return i || new Yo
}
var Rb = {
    provide: Yo,
    deps: [[new ri, new Ii, Yo]],
    useFactory: kb
}
  , sd = ( () => {
    class i extends nd {
        constructor(e, t, r, o) {
            super(r),
            this._intl = e,
            this._focusMonitor = t,
            this._intlSubscription = e.changes.subscribe( () => o.markForCheck())
        }
        ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, !0)
        }
        ngOnDestroy() {
            this._intlSubscription.unsubscribe(),
            this._focusMonitor.stopMonitoring(this._elementRef)
        }
        focus(e, t) {
            e ? this._focusMonitor.focusVia(this._elementRef, e, t) : this._elementRef.nativeElement.focus(t)
        }
        _stringLabel() {
            return this.label instanceof ad ? null : this.label
        }
        _templateLabel() {
            return this.label instanceof ad ? this.label : null
        }
        _getHostElement() {
            return this._elementRef.nativeElement
        }
        _getIconContext() {
            return {
                index: this.index,
                active: this.active,
                optional: this.optional
            }
        }
        _getDefaultTextForState(e) {
            return e == "number" ? `${this.index + 1}` : e == "edit" ? "create" : e == "error" ? "warning" : e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Yo),l(it),l(F),l(le))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-step-header"]],
            hostAttrs: ["role", "tab", 1, "mat-step-header"],
            hostVars: 2,
            hostBindings: function(t, r) {
                t & 2 && We("mat-" + (r.color || "primary"))
            },
            inputs: {
                state: "state",
                label: "label",
                errorMessage: "errorMessage",
                iconOverrides: "iconOverrides",
                index: "index",
                selected: "selected",
                active: "active",
                optional: "optional",
                disableRipple: "disableRipple",
                color: "color"
            },
            standalone: !0,
            features: [Z, L],
            decls: 10,
            vars: 17,
            consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
            template: function(t, r) {
                if (t & 1 && (D(0, "div", 0),
                h(1, "div")(2, "div", 1),
                $(3, cb, 1, 2, "ng-container", 2)(4, fb, 2, 1),
                u()(),
                h(5, "div", 3),
                $(6, gb, 2, 1, "div", 4)(7, _b, 2, 1)(8, bb, 2, 1, "div", 5)(9, vb, 2, 1, "div", 6),
                u()),
                t & 2) {
                    let o;
                    C("matRippleTrigger", r._getHostElement())("matRippleDisabled", r.disableRipple),
                    f(),
                    el("mat-step-icon-state-", r.state, " mat-step-icon"),
                    B("mat-step-icon-selected", r.selected),
                    f(2),
                    J(3, r.iconOverrides && r.iconOverrides[r.state] ? 3 : 4),
                    f(2),
                    B("mat-step-label-active", r.active)("mat-step-label-selected", r.selected)("mat-step-label-error", r.state == "error"),
                    f(),
                    J(6, (o = r._templateLabel()) ? 6 : r._stringLabel() ? 7 : -1, o),
                    f(2),
                    J(8, r.optional && r.state != "error" ? 8 : -1),
                    f(),
                    J(9, r.state === "error" ? 9 : -1)
                }
            },
            dependencies: [hr, Mn, hn],
            styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}'],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , oh = "500ms"
  , ah = "225ms"
  , eh = {
    horizontalStepTransition: Lt("horizontalStepTransition", [Xe("previous", Ie({
        transform: "translate3d(-100%, 0, 0)",
        visibility: "hidden"
    })), Xe("current", Ie({
        transform: "none",
        visibility: "inherit"
    })), Xe("next", Ie({
        transform: "translate3d(100%, 0, 0)",
        visibility: "hidden"
    })), lt("* => *", ga([dt("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"), va("@*", ba(), {
        optional: !0
    })]), {
        params: {
            animationDuration: oh
        }
    })]),
    verticalStepTransition: Lt("verticalStepTransition", [Xe("previous", Ie({
        height: "0px",
        visibility: "hidden"
    })), Xe("next", Ie({
        height: "0px",
        visibility: "hidden"
    })), Xe("current", Ie({
        height: "*",
        visibility: "inherit"
    })), lt("* <=> current", ga([dt("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"), va("@*", ba(), {
        optional: !0
    })]), {
        params: {
            animationDuration: ah
        }
    })])
}
  , Tb = ( () => {
    class i {
        constructor(e) {
            this.templateRef = e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Ue))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["ng-template", "matStepperIcon", ""]],
            inputs: {
                name: [w.None, "matStepperIcon", "name"]
            },
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Fb = ( () => {
    class i {
        constructor(e) {
            this._template = e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Ue))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["ng-template", "matStepContent", ""]],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , dd = ( () => {
    class i extends Uo {
        constructor(e, t, r, o) {
            super(e, o),
            this._errorStateMatcher = t,
            this._viewContainerRef = r,
            this._isSelected = ce.EMPTY,
            this.stepLabel = void 0
        }
        ngAfterContentInit() {
            this._isSelected = this._stepper.steps.changes.pipe(Ve( () => this._stepper.selectionChange.pipe(N(e => e.selectedStep === this), Ce(this._stepper.selected === this)))).subscribe(e => {
                e && this._lazyContent && !this._portal && (this._portal = new Dt(this._lazyContent._template,this._viewContainerRef))
            }
            )
        }
        ngOnDestroy() {
            this._isSelected.unsubscribe()
        }
        isErrorState(e, t) {
            let r = this._errorStateMatcher.isErrorState(e, t)
              , o = !!(e && e.invalid && this.interacted);
            return r || o
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Me( () => qo)),l(Gt, 4),l(st),l(od, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-step"]],
            contentQueries: function(t, r, o) {
                if (t & 1 && (xe(o, ad, 5),
                xe(o, Fb, 5)),
                t & 2) {
                    let a;
                    U(a = H()) && (r.stepLabel = a.first),
                    U(a = H()) && (r._lazyContent = a.first)
                }
            },
            hostAttrs: ["hidden", ""],
            inputs: {
                color: "color"
            },
            exportAs: ["matStep"],
            standalone: !0,
            features: [de([{
                provide: Gt,
                useExisting: i
            }, {
                provide: Uo,
                useExisting: i
            }]), Z, L],
            ngContentSelectors: th,
            decls: 1,
            vars: 0,
            consts: [[3, "cdkPortalOutlet"]],
            template: function(t, r) {
                t & 1 && (ve(),
                $(0, xb, 2, 1, "ng-template"))
            },
            dependencies: [gt],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , qo = ( () => {
    class i extends un {
        get animationDuration() {
            return this._animationDuration
        }
        set animationDuration(e) {
            this._animationDuration = /^\d+$/.test(e) ? e + "ms" : e
        }
        constructor(e, t, r) {
            super(e, t, r),
            this._stepHeader = void 0,
            this._steps = void 0,
            this.steps = new Ft,
            this.animationDone = new M,
            this.labelPosition = "end",
            this.headerPosition = "top",
            this._iconOverrides = {},
            this._animationDone = new A,
            this._animationDuration = "",
            this._isServer = !g(G).isBrowser;
            let o = r.nativeElement.nodeName.toLowerCase();
            this.orientation = o === "mat-vertical-stepper" ? "vertical" : "horizontal"
        }
        ngAfterContentInit() {
            super.ngAfterContentInit(),
            this._icons.forEach( ({name: e, templateRef: t}) => this._iconOverrides[e] = t),
            this.steps.changes.pipe(ge(this._destroyed)).subscribe( () => {
                this._stateChanged()
            }
            ),
            this._animationDone.pipe(vn( (e, t) => e.fromState === t.fromState && e.toState === t.toState), ge(this._destroyed)).subscribe(e => {
                e.toState === "current" && this.animationDone.emit()
            }
            )
        }
        _stepIsNavigable(e, t) {
            return t.completed || this.selectedIndex === e || !this.linear
        }
        _getAnimationDuration() {
            return this.animationDuration ? this.animationDuration : this.orientation === "horizontal" ? oh : ah
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Oe, 8),l(le),l(F))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
            contentQueries: function(t, r, o) {
                if (t & 1 && (xe(o, dd, 5),
                xe(o, Tb, 5)),
                t & 2) {
                    let a;
                    U(a = H()) && (r._steps = a),
                    U(a = H()) && (r._icons = a)
                }
            },
            viewQuery: function(t, r) {
                if (t & 1 && se(sd, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._stepHeader = o)
                }
            },
            hostAttrs: ["role", "tablist"],
            hostVars: 11,
            hostBindings: function(t, r) {
                t & 2 && (Y("aria-orientation", r.orientation),
                B("mat-stepper-horizontal", r.orientation === "horizontal")("mat-stepper-vertical", r.orientation === "vertical")("mat-stepper-label-position-end", r.orientation === "horizontal" && r.labelPosition == "end")("mat-stepper-label-position-bottom", r.orientation === "horizontal" && r.labelPosition == "bottom")("mat-stepper-header-position-bottom", r.headerPosition === "bottom"))
            },
            inputs: {
                disableRipple: "disableRipple",
                color: "color",
                labelPosition: "labelPosition",
                headerPosition: "headerPosition",
                animationDuration: "animationDuration"
            },
            outputs: {
                animationDone: "animationDone"
            },
            exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
            standalone: !0,
            features: [de([{
                provide: un,
                useExisting: i
            }]), Z, L],
            ngContentSelectors: th,
            decls: 5,
            vars: 2,
            consts: [["stepTemplate", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "mat-horizontal-stepper-content-inactive"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
            template: function(t, r) {
                if (t & 1 && (ve(),
                $(0, wb, 1, 0)(1, Ib, 7, 0)(2, Ab, 2, 0)(3, Sb, 1, 23, "ng-template", null, 0, ki)),
                t & 2) {
                    let o;
                    J(0, r._isServer ? 0 : -1),
                    f(),
                    J(1, (o = r.orientation) === "horizontal" ? 1 : o === "vertical" ? 2 : -1)
                }
            },
            dependencies: [Mn, sd],
            styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],
            encapsulation: 2,
            data: {
                animation: [eh.horizontalStepTransition, eh.verticalStepTransition]
            },
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , sh = ( () => {
    class i extends Yu {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["button", "matStepperNext", ""]],
            hostAttrs: [1, "mat-stepper-next"],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 2 && Ee("type", r.type)
            },
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)()
  , dh = ( () => {
    class i extends qu {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["button", "matStepperPrevious", ""]],
            hostAttrs: [1, "mat-stepper-previous"],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 2 && Ee("type", r.type)
            },
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)()
  , lh = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            providers: [Rb, Gt],
            imports: [_e, li, Zt, Wu, mn, Po, qo, sd, _e]
        })
        }
    }
    return i
}
)();
var Nb = ["switch"]
  , Pb = ["*"];
function Vb(i, n) {
    i & 1 && (h(0, "div", 10),
    xn(),
    h(1, "svg", 12),
    D(2, "path", 13),
    u(),
    h(3, "svg", 14),
    D(4, "path", 15),
    u()())
}
var Lb = new x("mat-slide-toggle-default-options",{
    providedIn: "root",
    factory: () => ({
        disableToggleValue: !1,
        hideIcon: !1
    })
})
  , jb = {
    provide: qi,
    useExisting: Me( () => Go),
    multi: !0
}
  , Wo = class {
    constructor(n, e) {
        this.source = n,
        this.checked = e
    }
}
  , zb = 0
  , Go = ( () => {
    class i {
        _createChangeEvent(e) {
            return new Wo(this,e)
        }
        get buttonId() {
            return `${this.id || this._uniqueId}-button`
        }
        focus() {
            this._switchElement.nativeElement.focus()
        }
        get checked() {
            return this._checked
        }
        set checked(e) {
            this._checked = e,
            this._changeDetectorRef.markForCheck()
        }
        get inputId() {
            return `${this.id || this._uniqueId}-input`
        }
        constructor(e, t, r, o, a, s) {
            this._elementRef = e,
            this._focusMonitor = t,
            this._changeDetectorRef = r,
            this.defaults = a,
            this._onChange = d => {}
            ,
            this._onTouched = () => {}
            ,
            this._validatorOnChange = () => {}
            ,
            this._checked = !1,
            this.name = null,
            this.labelPosition = "after",
            this.ariaLabel = null,
            this.ariaLabelledby = null,
            this.disabled = !1,
            this.disableRipple = !1,
            this.tabIndex = 0,
            this.change = new M,
            this.toggleChange = new M,
            this.tabIndex = parseInt(o) || 0,
            this.color = a.color || "accent",
            this._noopAnimations = s === "NoopAnimations",
            this.id = this._uniqueId = `mat-mdc-slide-toggle-${++zb}`,
            this.hideIcon = a.hideIcon ?? !1,
            this._labelId = this._uniqueId + "-label"
        }
        ngAfterContentInit() {
            this._focusMonitor.monitor(this._elementRef, !0).subscribe(e => {
                e === "keyboard" || e === "program" ? (this._focused = !0,
                this._changeDetectorRef.markForCheck()) : e || Promise.resolve().then( () => {
                    this._focused = !1,
                    this._onTouched(),
                    this._changeDetectorRef.markForCheck()
                }
                )
            }
            )
        }
        ngOnChanges(e) {
            e.required && this._validatorOnChange()
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef)
        }
        writeValue(e) {
            this.checked = !!e
        }
        registerOnChange(e) {
            this._onChange = e
        }
        registerOnTouched(e) {
            this._onTouched = e
        }
        validate(e) {
            return this.required && e.value !== !0 ? {
                required: !0
            } : null
        }
        registerOnValidatorChange(e) {
            this._validatorOnChange = e
        }
        setDisabledState(e) {
            this.disabled = e,
            this._changeDetectorRef.markForCheck()
        }
        toggle() {
            this.checked = !this.checked,
            this._onChange(this.checked)
        }
        _emitChangeEvent() {
            this._onChange(this.checked),
            this.change.emit(this._createChangeEvent(this.checked))
        }
        _handleClick() {
            this.toggleChange.emit(),
            this.defaults.disableToggleValue || (this.checked = !this.checked,
            this._onChange(this.checked),
            this.change.emit(new Wo(this,this.checked)))
        }
        _getAriaLabelledBy() {
            return this.ariaLabelledby ? this.ariaLabelledby : this.ariaLabel ? null : this._labelId
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(it),l(le),Tt("tabindex"),l(Lb),l(Ae, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-slide-toggle"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(Nb, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._switchElement = o.first)
                }
            },
            hostAttrs: [1, "mat-mdc-slide-toggle"],
            hostVars: 13,
            hostBindings: function(t, r) {
                t & 2 && (Ee("id", r.id),
                Y("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null),
                We(r.color ? "mat-" + r.color : ""),
                B("mat-mdc-slide-toggle-focused", r._focused)("mat-mdc-slide-toggle-checked", r.checked)("_mat-animation-noopable", r._noopAnimations))
            },
            inputs: {
                name: "name",
                id: "id",
                labelPosition: "labelPosition",
                ariaLabel: [w.None, "aria-label", "ariaLabel"],
                ariaLabelledby: [w.None, "aria-labelledby", "ariaLabelledby"],
                ariaDescribedby: [w.None, "aria-describedby", "ariaDescribedby"],
                required: [w.HasDecoratorInputTransform, "required", "required", X],
                color: "color",
                disabled: [w.HasDecoratorInputTransform, "disabled", "disabled", X],
                disableRipple: [w.HasDecoratorInputTransform, "disableRipple", "disableRipple", X],
                tabIndex: [w.HasDecoratorInputTransform, "tabIndex", "tabIndex", e => e == null ? 0 : In(e)],
                checked: [w.HasDecoratorInputTransform, "checked", "checked", X],
                hideIcon: [w.HasDecoratorInputTransform, "hideIcon", "hideIcon", X]
            },
            outputs: {
                change: "change",
                toggleChange: "toggleChange"
            },
            exportAs: ["matSlideToggle"],
            standalone: !0,
            features: [de([jb, {
                provide: xt,
                useExisting: i,
                multi: !0
            }]), be, he, L],
            ngContentSelectors: Pb,
            decls: 13,
            vars: 24,
            consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
            template: function(t, r) {
                if (t & 1) {
                    let o = Se();
                    ve(),
                    h(0, "div", 1)(1, "button", 2, 0),
                    V("click", function() {
                        return oe(o),
                        ae(r._handleClick())
                    }),
                    D(3, "div", 3),
                    h(4, "div", 4)(5, "div", 5)(6, "div", 6),
                    D(7, "div", 7),
                    u(),
                    h(8, "div", 8),
                    D(9, "div", 9),
                    u(),
                    $(10, Vb, 5, 0, "div", 10),
                    u()()(),
                    h(11, "label", 11),
                    V("click", function(s) {
                        return oe(o),
                        ae(s.stopPropagation())
                    }),
                    ee(12),
                    u()()
                }
                if (t & 2) {
                    let o = Ge(2);
                    C("labelPosition", r.labelPosition),
                    f(),
                    B("mdc-switch--selected", r.checked)("mdc-switch--unselected", !r.checked)("mdc-switch--checked", r.checked)("mdc-switch--disabled", r.disabled),
                    C("tabIndex", r.disabled ? -1 : r.tabIndex)("disabled", r.disabled),
                    Y("id", r.buttonId)("name", r.name)("aria-label", r.ariaLabel)("aria-labelledby", r._getAriaLabelledBy())("aria-describedby", r.ariaDescribedby)("aria-required", r.required || null)("aria-checked", r.checked),
                    f(8),
                    C("matRippleTrigger", o)("matRippleDisabled", r.disableRipple || r.disabled)("matRippleCentered", !0),
                    f(),
                    J(10, r.hideIcon ? -1 : 10),
                    f(),
                    C("for", r.buttonId),
                    Y("id", r._labelId)
                }
            },
            dependencies: [hr, Su],
            styles: ['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}.mdc-switch{width:var(--mdc-switch-track-width)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color)}.mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation)}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height)}.mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape)}.mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size);height:var(--mdc-switch-selected-icon-size)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size);height:var(--mdc-switch-unselected-icon-size)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity)}.mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size);width:var(--mdc-switch-state-layer-size)}.mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height)}.mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity)}.mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color)}.mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color)}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color)}.mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color)}.mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape)}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mdc-switch__handle{transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity);transition:var(--mat-switch-visible-track-transition)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity);transition:var(--mat-switch-hidden-track-transition)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size);height:var(--mat-switch-unselected-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size);height:var(--mat-switch-selected-handle-size)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size);height:var(--mat-switch-with-icon-handle-size)}.mat-mdc-slide-toggle:active .mdc-switch:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size);height:var(--mat-switch-pressed-handle-size)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{margin:var(--mat-switch-selected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{margin:var(--mat-switch-unselected-handle-horizontal-margin)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--selected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin)}.mat-mdc-slide-toggle:active .mdc-switch--unselected:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin)}.mdc-switch__track::after,.mdc-switch__track::before{border-width:var(--mat-switch-track-outline-width);border-color:var(--mat-switch-track-outline-color)}.mdc-switch--selected .mdc-switch__track::after,.mdc-switch--selected .mdc-switch__track::before{border-width:var(--mat-switch-selected-track-outline-width)}.mdc-switch--disabled .mdc-switch__track::after,.mdc-switch--disabled .mdc-switch__track::before{border-width:var(--mat-switch-disabled-unselected-track-outline-width);border-color:var(--mat-switch-disabled-unselected-track-outline-color)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity)}'],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
var ch = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [Go, _e, _e]
        })
        }
    }
    return i
}
)();
var Ub = 20
  , uh = ( () => {
    class i {
        constructor(e, t, r) {
            this._ngZone = e,
            this._platform = t,
            this._scrolled = new A,
            this._globalSubscription = null,
            this._scrolledCount = 0,
            this.scrollContainers = new Map,
            this._document = r
        }
        register(e) {
            this.scrollContainers.has(e) || this.scrollContainers.set(e, e.elementScrolled().subscribe( () => this._scrolled.next(e)))
        }
        deregister(e) {
            let t = this.scrollContainers.get(e);
            t && (t.unsubscribe(),
            this.scrollContainers.delete(e))
        }
        scrolled(e=Ub) {
            return this._platform.isBrowser ? new bt(t => {
                this._globalSubscription || this._addGlobalListener();
                let r = e > 0 ? this._scrolled.pipe(da(e)).subscribe(t) : this._scrolled.subscribe(t);
                return this._scrolledCount++,
                () => {
                    r.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener()
                }
            }
            ) : E()
        }
        ngOnDestroy() {
            this._removeGlobalListener(),
            this.scrollContainers.forEach( (e, t) => this.deregister(t)),
            this._scrolled.complete()
        }
        ancestorScrolled(e, t) {
            let r = this.getAncestorScrollContainers(e);
            return this.scrolled(t).pipe(pe(o => !o || r.indexOf(o) > -1))
        }
        getAncestorScrollContainers(e) {
            let t = [];
            return this.scrollContainers.forEach( (r, o) => {
                this._scrollableContainsElement(o, e) && t.push(o)
            }
            ),
            t
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _scrollableContainsElement(e, t) {
            let r = Qe(t)
              , o = e.getElementRef().nativeElement;
            do
                if (r == o)
                    return !0;
            while (r = r.parentElement);
            return !1
        }
        _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular( () => {
                let e = this._getWindow();
                return sa(e.document, "scroll").subscribe( () => this._scrolled.next())
            }
            )
        }
        _removeGlobalListener() {
            this._globalSubscription && (this._globalSubscription.unsubscribe(),
            this._globalSubscription = null)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(T),p(G),p(O, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Hb = 20
  , ld = ( () => {
    class i {
        constructor(e, t, r) {
            this._platform = e,
            this._change = new A,
            this._changeListener = o => {
                this._change.next(o)
            }
            ,
            this._document = r,
            t.runOutsideAngular( () => {
                if (e.isBrowser) {
                    let o = this._getWindow();
                    o.addEventListener("resize", this._changeListener),
                    o.addEventListener("orientationchange", this._changeListener)
                }
                this.change().subscribe( () => this._viewportSize = null)
            }
            )
        }
        ngOnDestroy() {
            if (this._platform.isBrowser) {
                let e = this._getWindow();
                e.removeEventListener("resize", this._changeListener),
                e.removeEventListener("orientationchange", this._changeListener)
            }
            this._change.complete()
        }
        getViewportSize() {
            this._viewportSize || this._updateViewportSize();
            let e = {
                width: this._viewportSize.width,
                height: this._viewportSize.height
            };
            return this._platform.isBrowser || (this._viewportSize = null),
            e
        }
        getViewportRect() {
            let e = this.getViewportScrollPosition()
              , {width: t, height: r} = this.getViewportSize();
            return {
                top: e.top,
                left: e.left,
                bottom: e.top + r,
                right: e.left + t,
                height: r,
                width: t
            }
        }
        getViewportScrollPosition() {
            if (!this._platform.isBrowser)
                return {
                    top: 0,
                    left: 0
                };
            let e = this._document
              , t = this._getWindow()
              , r = e.documentElement
              , o = r.getBoundingClientRect()
              , a = -o.top || e.body.scrollTop || t.scrollY || r.scrollTop || 0
              , s = -o.left || e.body.scrollLeft || t.scrollX || r.scrollLeft || 0;
            return {
                top: a,
                left: s
            }
        }
        change(e=Hb) {
            return e > 0 ? this._change.pipe(da(e)) : this._change
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _updateViewportSize() {
            let e = this._getWindow();
            this._viewportSize = this._platform.isBrowser ? {
                width: e.innerWidth,
                height: e.innerHeight
            } : {
                width: 0,
                height: 0
            }
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(G),p(T),p(O, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Xo = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({})
        }
    }
    return i
}
)()
  , cd = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            imports: [pt, Xo, pt, Xo]
        })
        }
    }
    return i
}
)();
var hh = ou()
  , ud = class {
    constructor(n, e) {
        this._viewportRuler = n,
        this._previousHTMLStyles = {
            top: "",
            left: ""
        },
        this._isEnabled = !1,
        this._document = e
    }
    attach() {}
    enable() {
        if (this._canBeEnabled()) {
            let n = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(),
            this._previousHTMLStyles.left = n.style.left || "",
            this._previousHTMLStyles.top = n.style.top || "",
            n.style.left = ye(-this._previousScrollPosition.left),
            n.style.top = ye(-this._previousScrollPosition.top),
            n.classList.add("cdk-global-scrollblock"),
            this._isEnabled = !0
        }
    }
    disable() {
        if (this._isEnabled) {
            let n = this._document.documentElement
              , e = this._document.body
              , t = n.style
              , r = e.style
              , o = t.scrollBehavior || ""
              , a = r.scrollBehavior || "";
            this._isEnabled = !1,
            t.left = this._previousHTMLStyles.left,
            t.top = this._previousHTMLStyles.top,
            n.classList.remove("cdk-global-scrollblock"),
            hh && (t.scrollBehavior = r.scrollBehavior = "auto"),
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top),
            hh && (t.scrollBehavior = o,
            r.scrollBehavior = a)
        }
    }
    _canBeEnabled() {
        if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled)
            return !1;
        let e = this._document.body
          , t = this._viewportRuler.getViewportSize();
        return e.scrollHeight > t.height || e.scrollWidth > t.width
    }
}
;
var hd = class {
    constructor(n, e, t, r) {
        this._scrollDispatcher = n,
        this._ngZone = e,
        this._viewportRuler = t,
        this._config = r,
        this._scrollSubscription = null,
        this._detach = () => {
            this.disable(),
            this._overlayRef.hasAttached() && this._ngZone.run( () => this._overlayRef.detach())
        }
    }
    attach(n) {
        this._overlayRef,
        this._overlayRef = n
    }
    enable() {
        if (this._scrollSubscription)
            return;
        let n = this._scrollDispatcher.scrolled(0).pipe(pe(e => !e || !this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));
        this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top,
        this._scrollSubscription = n.subscribe( () => {
            let e = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(e - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
        }
        )) : this._scrollSubscription = n.subscribe(this._detach)
    }
    disable() {
        this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
        this._scrollSubscription = null)
    }
    detach() {
        this.disable(),
        this._overlayRef = null
    }
}
  , Zo = class {
    enable() {}
    disable() {}
    attach() {}
}
;
function md(i, n) {
    return n.some(e => {
        let t = i.bottom < e.top
          , r = i.top > e.bottom
          , o = i.right < e.left
          , a = i.left > e.right;
        return t || r || o || a
    }
    )
}
function mh(i, n) {
    return n.some(e => {
        let t = i.top < e.top
          , r = i.bottom > e.bottom
          , o = i.left < e.left
          , a = i.right > e.right;
        return t || r || o || a
    }
    )
}
var pd = class {
    constructor(n, e, t, r) {
        this._scrollDispatcher = n,
        this._viewportRuler = e,
        this._ngZone = t,
        this._config = r,
        this._scrollSubscription = null
    }
    attach(n) {
        this._overlayRef,
        this._overlayRef = n
    }
    enable() {
        if (!this._scrollSubscription) {
            let n = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(n).subscribe( () => {
                if (this._overlayRef.updatePosition(),
                this._config && this._config.autoClose) {
                    let e = this._overlayRef.overlayElement.getBoundingClientRect()
                      , {width: t, height: r} = this._viewportRuler.getViewportSize();
                    md(e, [{
                        width: t,
                        height: r,
                        bottom: r,
                        right: t,
                        top: 0,
                        left: 0
                    }]) && (this.disable(),
                    this._ngZone.run( () => this._overlayRef.detach()))
                }
            }
            )
        }
    }
    disable() {
        this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
        this._scrollSubscription = null)
    }
    detach() {
        this.disable(),
        this._overlayRef = null
    }
}
  , Yb = ( () => {
    class i {
        constructor(e, t, r, o) {
            this._scrollDispatcher = e,
            this._viewportRuler = t,
            this._ngZone = r,
            this.noop = () => new Zo,
            this.close = a => new hd(this._scrollDispatcher,this._ngZone,this._viewportRuler,a),
            this.block = () => new ud(this._viewportRuler,this._document),
            this.reposition = a => new pd(this._scrollDispatcher,this._viewportRuler,this._ngZone,a),
            this._document = o
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(uh),p(ld),p(T),p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Di = class {
    constructor(n) {
        if (this.scrollStrategy = new Zo,
        this.panelClass = "",
        this.hasBackdrop = !1,
        this.backdropClass = "cdk-overlay-dark-backdrop",
        this.disposeOnNavigation = !1,
        n) {
            let e = Object.keys(n);
            for (let t of e)
                n[t] !== void 0 && (this[t] = n[t])
        }
    }
}
;
var fd = class {
    constructor(n, e) {
        this.connectionPair = n,
        this.scrollableViewProperties = e
    }
}
;
var bh = ( () => {
    class i {
        constructor(e) {
            this._attachedOverlays = [],
            this._document = e
        }
        ngOnDestroy() {
            this.detach()
        }
        add(e) {
            this.remove(e),
            this._attachedOverlays.push(e)
        }
        remove(e) {
            let t = this._attachedOverlays.indexOf(e);
            t > -1 && this._attachedOverlays.splice(t, 1),
            this._attachedOverlays.length === 0 && this.detach()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , qb = ( () => {
    class i extends bh {
        constructor(e, t) {
            super(e),
            this._ngZone = t,
            this._keydownListener = r => {
                let o = this._attachedOverlays;
                for (let a = o.length - 1; a > -1; a--)
                    if (o[a]._keydownEvents.observers.length > 0) {
                        let s = o[a]._keydownEvents;
                        this._ngZone ? this._ngZone.run( () => s.next(r)) : s.next(r);
                        break
                    }
            }
        }
        add(e) {
            super.add(e),
            this._isAttached || (this._ngZone ? this._ngZone.runOutsideAngular( () => this._document.body.addEventListener("keydown", this._keydownListener)) : this._document.body.addEventListener("keydown", this._keydownListener),
            this._isAttached = !0)
        }
        detach() {
            this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener),
            this._isAttached = !1)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O),p(T, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Wb = ( () => {
    class i extends bh {
        constructor(e, t, r) {
            super(e),
            this._platform = t,
            this._ngZone = r,
            this._cursorStyleIsSet = !1,
            this._pointerDownListener = o => {
                this._pointerDownEventTarget = tt(o)
            }
            ,
            this._clickListener = o => {
                let a = tt(o)
                  , s = o.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : a;
                this._pointerDownEventTarget = null;
                let d = this._attachedOverlays.slice();
                for (let c = d.length - 1; c > -1; c--) {
                    let m = d[c];
                    if (m._outsidePointerEvents.observers.length < 1 || !m.hasAttached())
                        continue;
                    if (m.overlayElement.contains(a) || m.overlayElement.contains(s))
                        break;
                    let b = m._outsidePointerEvents;
                    this._ngZone ? this._ngZone.run( () => b.next(o)) : b.next(o)
                }
            }
        }
        add(e) {
            if (super.add(e),
            !this._isAttached) {
                let t = this._document.body;
                this._ngZone ? this._ngZone.runOutsideAngular( () => this._addEventListeners(t)) : this._addEventListeners(t),
                this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = t.style.cursor,
                t.style.cursor = "pointer",
                this._cursorStyleIsSet = !0),
                this._isAttached = !0
            }
        }
        detach() {
            if (this._isAttached) {
                let e = this._document.body;
                e.removeEventListener("pointerdown", this._pointerDownListener, !0),
                e.removeEventListener("click", this._clickListener, !0),
                e.removeEventListener("auxclick", this._clickListener, !0),
                e.removeEventListener("contextmenu", this._clickListener, !0),
                this._platform.IOS && this._cursorStyleIsSet && (e.style.cursor = this._cursorOriginalValue,
                this._cursorStyleIsSet = !1),
                this._isAttached = !1
            }
        }
        _addEventListeners(e) {
            e.addEventListener("pointerdown", this._pointerDownListener, !0),
            e.addEventListener("click", this._clickListener, !0),
            e.addEventListener("auxclick", this._clickListener, !0),
            e.addEventListener("contextmenu", this._clickListener, !0)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O),p(G),p(T, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , pn = ( () => {
    class i {
        constructor(e, t) {
            this._platform = t,
            this._document = e
        }
        ngOnDestroy() {
            this._containerElement?.remove()
        }
        getContainerElement() {
            return this._containerElement || this._createContainer(),
            this._containerElement
        }
        _createContainer() {
            let e = "cdk-overlay-container";
            if (this._platform.isBrowser || rr()) {
                let r = this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);
                for (let o = 0; o < r.length; o++)
                    r[o].remove()
            }
            let t = this._document.createElement("div");
            t.classList.add(e),
            rr() ? t.setAttribute("platform", "test") : this._platform.isBrowser || t.setAttribute("platform", "server"),
            this._document.body.appendChild(t),
            this._containerElement = t
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(O),p(G))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Mt = class {
    constructor(n, e, t, r, o, a, s, d, c, m=!1) {
        this._portalOutlet = n,
        this._host = e,
        this._pane = t,
        this._config = r,
        this._ngZone = o,
        this._keyboardDispatcher = a,
        this._document = s,
        this._location = d,
        this._outsideClickDispatcher = c,
        this._animationsDisabled = m,
        this._backdropElement = null,
        this._backdropClick = new A,
        this._attachments = new A,
        this._detachments = new A,
        this._locationChanges = ce.EMPTY,
        this._backdropClickHandler = b => this._backdropClick.next(b),
        this._backdropTransitionendHandler = b => {
            this._disposeBackdrop(b.target)
        }
        ,
        this._keydownEvents = new A,
        this._outsidePointerEvents = new A,
        r.scrollStrategy && (this._scrollStrategy = r.scrollStrategy,
        this._scrollStrategy.attach(this)),
        this._positionStrategy = r.positionStrategy
    }
    get overlayElement() {
        return this._pane
    }
    get backdropElement() {
        return this._backdropElement
    }
    get hostElement() {
        return this._host
    }
    attach(n) {
        !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
        let e = this._portalOutlet.attach(n);
        return this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._ngZone.onStable.pipe(fe(1)).subscribe( () => {
            this.hasAttached() && this.updatePosition()
        }
        ),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe( () => this.dispose())),
        this._outsideClickDispatcher.add(this),
        typeof e?.onDestroy == "function" && e.onDestroy( () => {
            this.hasAttached() && this._ngZone.runOutsideAngular( () => Promise.resolve().then( () => this.detach()))
        }
        ),
        e
    }
    detach() {
        if (!this.hasAttached())
            return;
        this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
        let n = this._portalOutlet.detach();
        return this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenStable(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        n
    }
    dispose() {
        let n = this.hasAttached();
        this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._previousHostParent = this._pane = this._host = null,
        n && this._detachments.next(),
        this._detachments.complete()
    }
    hasAttached() {
        return this._portalOutlet.hasAttached()
    }
    backdropClick() {
        return this._backdropClick
    }
    attachments() {
        return this._attachments
    }
    detachments() {
        return this._detachments
    }
    keydownEvents() {
        return this._keydownEvents
    }
    outsidePointerEvents() {
        return this._outsidePointerEvents
    }
    getConfig() {
        return this._config
    }
    updatePosition() {
        this._positionStrategy && this._positionStrategy.apply()
    }
    updatePositionStrategy(n) {
        n !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(),
        this._positionStrategy = n,
        this.hasAttached() && (n.attach(this),
        this.updatePosition()))
    }
    updateSize(n) {
        this._config = v(v({}, this._config), n),
        this._updateElementSize()
    }
    setDirection(n) {
        this._config = ie(v({}, this._config), {
            direction: n
        }),
        this._updateElementDirection()
    }
    addPanelClass(n) {
        this._pane && this._toggleClasses(this._pane, n, !0)
    }
    removePanelClass(n) {
        this._pane && this._toggleClasses(this._pane, n, !1)
    }
    getDirection() {
        let n = this._config.direction;
        return n ? typeof n == "string" ? n : n.value : "ltr"
    }
    updateScrollStrategy(n) {
        n !== this._scrollStrategy && (this._disposeScrollStrategy(),
        this._scrollStrategy = n,
        this.hasAttached() && (n.attach(this),
        n.enable()))
    }
    _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection())
    }
    _updateElementSize() {
        if (!this._pane)
            return;
        let n = this._pane.style;
        n.width = ye(this._config.width),
        n.height = ye(this._config.height),
        n.minWidth = ye(this._config.minWidth),
        n.minHeight = ye(this._config.minHeight),
        n.maxWidth = ye(this._config.maxWidth),
        n.maxHeight = ye(this._config.maxHeight)
    }
    _togglePointerEvents(n) {
        this._pane.style.pointerEvents = n ? "" : "none"
    }
    _attachBackdrop() {
        let n = "cdk-overlay-backdrop-showing";
        this._backdropElement = this._document.createElement("div"),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled && this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),
        this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0),
        this._host.parentElement.insertBefore(this._backdropElement, this._host),
        this._backdropElement.addEventListener("click", this._backdropClickHandler),
        !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular( () => {
            requestAnimationFrame( () => {
                this._backdropElement && this._backdropElement.classList.add(n)
            }
            )
        }
        ) : this._backdropElement.classList.add(n)
    }
    _updateStackingOrder() {
        this._host.nextSibling && this._host.parentNode.appendChild(this._host)
    }
    detachBackdrop() {
        let n = this._backdropElement;
        if (n) {
            if (this._animationsDisabled) {
                this._disposeBackdrop(n);
                return
            }
            n.classList.remove("cdk-overlay-backdrop-showing"),
            this._ngZone.runOutsideAngular( () => {
                n.addEventListener("transitionend", this._backdropTransitionendHandler)
            }
            ),
            n.style.pointerEvents = "none",
            this._backdropTimeout = this._ngZone.runOutsideAngular( () => setTimeout( () => {
                this._disposeBackdrop(n)
            }
            , 500))
        }
    }
    _toggleClasses(n, e, t) {
        let r = en(e || []).filter(o => !!o);
        r.length && (t ? n.classList.add(...r) : n.classList.remove(...r))
    }
    _detachContentWhenStable() {
        this._ngZone.runOutsideAngular( () => {
            let n = this._ngZone.onStable.pipe(ge(ot(this._attachments, this._detachments))).subscribe( () => {
                (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1),
                this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement,
                this._host.remove()),
                n.unsubscribe())
            }
            )
        }
        )
    }
    _disposeScrollStrategy() {
        let n = this._scrollStrategy;
        n && (n.disable(),
        n.detach && n.detach())
    }
    _disposeBackdrop(n) {
        n && (n.removeEventListener("click", this._backdropClickHandler),
        n.removeEventListener("transitionend", this._backdropTransitionendHandler),
        n.remove(),
        this._backdropElement === n && (this._backdropElement = null)),
        this._backdropTimeout && (clearTimeout(this._backdropTimeout),
        this._backdropTimeout = void 0)
    }
}
  , ph = "cdk-overlay-connected-position-bounding-box"
  , Gb = /([A-Za-z%]+)$/
  , gr = class {
    get positions() {
        return this._preferredPositions
    }
    constructor(n, e, t, r, o) {
        this._viewportRuler = e,
        this._document = t,
        this._platform = r,
        this._overlayContainer = o,
        this._lastBoundingBoxSize = {
            width: 0,
            height: 0
        },
        this._isPushed = !1,
        this._canPush = !0,
        this._growAfterOpen = !1,
        this._hasFlexibleDimensions = !0,
        this._positionLocked = !1,
        this._viewportMargin = 0,
        this._scrollables = [],
        this._preferredPositions = [],
        this._positionChanges = new A,
        this._resizeSubscription = ce.EMPTY,
        this._offsetX = 0,
        this._offsetY = 0,
        this._appliedPanelClasses = [],
        this.positionChanges = this._positionChanges,
        this.setOrigin(n)
    }
    attach(n) {
        this._overlayRef && this._overlayRef,
        this._validatePositions(),
        n.hostElement.classList.add(ph),
        this._overlayRef = n,
        this._boundingBox = n.hostElement,
        this._pane = n.overlayElement,
        this._isDisposed = !1,
        this._isInitialRender = !0,
        this._lastPosition = null,
        this._resizeSubscription.unsubscribe(),
        this._resizeSubscription = this._viewportRuler.change().subscribe( () => {
            this._isInitialRender = !0,
            this.apply()
        }
        )
    }
    apply() {
        if (this._isDisposed || !this._platform.isBrowser)
            return;
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return
        }
        this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        this._viewportRect = this._getNarrowedViewportRect(),
        this._originRect = this._getOriginRect(),
        this._overlayRect = this._pane.getBoundingClientRect(),
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        let n = this._originRect, e = this._overlayRect, t = this._viewportRect, r = this._containerRect, o = [], a;
        for (let s of this._preferredPositions) {
            let d = this._getOriginPoint(n, r, s)
              , c = this._getOverlayPoint(d, e, s)
              , m = this._getOverlayFit(c, e, t, s);
            if (m.isCompletelyWithinViewport) {
                this._isPushed = !1,
                this._applyPosition(s, d);
                return
            }
            if (this._canFitWithFlexibleDimensions(m, c, t)) {
                o.push({
                    position: s,
                    origin: d,
                    overlayRect: e,
                    boundingBoxRect: this._calculateBoundingBoxRect(d, s)
                });
                continue
            }
            (!a || a.overlayFit.visibleArea < m.visibleArea) && (a = {
                overlayFit: m,
                overlayPoint: c,
                originPoint: d,
                position: s,
                overlayRect: e
            })
        }
        if (o.length) {
            let s = null
              , d = -1;
            for (let c of o) {
                let m = c.boundingBoxRect.width * c.boundingBoxRect.height * (c.position.weight || 1);
                m > d && (d = m,
                s = c)
            }
            this._isPushed = !1,
            this._applyPosition(s.position, s.origin);
            return
        }
        if (this._canPush) {
            this._isPushed = !0,
            this._applyPosition(a.position, a.originPoint);
            return
        }
        this._applyPosition(a.position, a.originPoint)
    }
    detach() {
        this._clearPanelClasses(),
        this._lastPosition = null,
        this._previousPushAmount = null,
        this._resizeSubscription.unsubscribe()
    }
    dispose() {
        this._isDisposed || (this._boundingBox && Ci(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
        }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(ph),
        this.detach(),
        this._positionChanges.complete(),
        this._overlayRef = this._boundingBox = null,
        this._isDisposed = !0)
    }
    reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser)
            return;
        let n = this._lastPosition;
        if (n) {
            this._originRect = this._getOriginRect(),
            this._overlayRect = this._pane.getBoundingClientRect(),
            this._viewportRect = this._getNarrowedViewportRect(),
            this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
            let e = this._getOriginPoint(this._originRect, this._containerRect, n);
            this._applyPosition(n, e)
        } else
            this.apply()
    }
    withScrollableContainers(n) {
        return this._scrollables = n,
        this
    }
    withPositions(n) {
        return this._preferredPositions = n,
        n.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
    }
    withViewportMargin(n) {
        return this._viewportMargin = n,
        this
    }
    withFlexibleDimensions(n=!0) {
        return this._hasFlexibleDimensions = n,
        this
    }
    withGrowAfterOpen(n=!0) {
        return this._growAfterOpen = n,
        this
    }
    withPush(n=!0) {
        return this._canPush = n,
        this
    }
    withLockedPosition(n=!0) {
        return this._positionLocked = n,
        this
    }
    setOrigin(n) {
        return this._origin = n,
        this
    }
    withDefaultOffsetX(n) {
        return this._offsetX = n,
        this
    }
    withDefaultOffsetY(n) {
        return this._offsetY = n,
        this
    }
    withTransformOriginOn(n) {
        return this._transformOriginSelector = n,
        this
    }
    _getOriginPoint(n, e, t) {
        let r;
        if (t.originX == "center")
            r = n.left + n.width / 2;
        else {
            let a = this._isRtl() ? n.right : n.left
              , s = this._isRtl() ? n.left : n.right;
            r = t.originX == "start" ? a : s
        }
        e.left < 0 && (r -= e.left);
        let o;
        return t.originY == "center" ? o = n.top + n.height / 2 : o = t.originY == "top" ? n.top : n.bottom,
        e.top < 0 && (o -= e.top),
        {
            x: r,
            y: o
        }
    }
    _getOverlayPoint(n, e, t) {
        let r;
        t.overlayX == "center" ? r = -e.width / 2 : t.overlayX === "start" ? r = this._isRtl() ? -e.width : 0 : r = this._isRtl() ? 0 : -e.width;
        let o;
        return t.overlayY == "center" ? o = -e.height / 2 : o = t.overlayY == "top" ? 0 : -e.height,
        {
            x: n.x + r,
            y: n.y + o
        }
    }
    _getOverlayFit(n, e, t, r) {
        let o = gh(e)
          , {x: a, y: s} = n
          , d = this._getOffset(r, "x")
          , c = this._getOffset(r, "y");
        d && (a += d),
        c && (s += c);
        let m = 0 - a
          , b = a + o.width - t.width
          , R = 0 - s
          , W = s + o.height - t.height
          , K = this._subtractOverflows(o.width, m, b)
          , k = this._subtractOverflows(o.height, R, W)
          , Q = K * k;
        return {
            visibleArea: Q,
            isCompletelyWithinViewport: o.width * o.height === Q,
            fitsInViewportVertically: k === o.height,
            fitsInViewportHorizontally: K == o.width
        }
    }
    _canFitWithFlexibleDimensions(n, e, t) {
        if (this._hasFlexibleDimensions) {
            let r = t.bottom - e.y
              , o = t.right - e.x
              , a = fh(this._overlayRef.getConfig().minHeight)
              , s = fh(this._overlayRef.getConfig().minWidth)
              , d = n.fitsInViewportVertically || a != null && a <= r
              , c = n.fitsInViewportHorizontally || s != null && s <= o;
            return d && c
        }
        return !1
    }
    _pushOverlayOnScreen(n, e, t) {
        if (this._previousPushAmount && this._positionLocked)
            return {
                x: n.x + this._previousPushAmount.x,
                y: n.y + this._previousPushAmount.y
            };
        let r = gh(e)
          , o = this._viewportRect
          , a = Math.max(n.x + r.width - o.width, 0)
          , s = Math.max(n.y + r.height - o.height, 0)
          , d = Math.max(o.top - t.top - n.y, 0)
          , c = Math.max(o.left - t.left - n.x, 0)
          , m = 0
          , b = 0;
        return r.width <= o.width ? m = c || -a : m = n.x < this._viewportMargin ? o.left - t.left - n.x : 0,
        r.height <= o.height ? b = d || -s : b = n.y < this._viewportMargin ? o.top - t.top - n.y : 0,
        this._previousPushAmount = {
            x: m,
            y: b
        },
        {
            x: n.x + m,
            y: n.y + b
        }
    }
    _applyPosition(n, e) {
        if (this._setTransformOrigin(n),
        this._setOverlayElementStyles(e, n),
        this._setBoundingBoxStyles(e, n),
        n.panelClass && this._addPanelClasses(n.panelClass),
        this._positionChanges.observers.length) {
            let t = this._getScrollVisibility();
            if (n !== this._lastPosition || !this._lastScrollVisibility || !Xb(this._lastScrollVisibility, t)) {
                let r = new fd(n,t);
                this._positionChanges.next(r)
            }
            this._lastScrollVisibility = t
        }
        this._lastPosition = n,
        this._isInitialRender = !1
    }
    _setTransformOrigin(n) {
        if (!this._transformOriginSelector)
            return;
        let e = this._boundingBox.querySelectorAll(this._transformOriginSelector), t, r = n.overlayY;
        n.overlayX === "center" ? t = "center" : this._isRtl() ? t = n.overlayX === "start" ? "right" : "left" : t = n.overlayX === "start" ? "left" : "right";
        for (let o = 0; o < e.length; o++)
            e[o].style.transformOrigin = `${t} ${r}`
    }
    _calculateBoundingBoxRect(n, e) {
        let t = this._viewportRect, r = this._isRtl(), o, a, s;
        if (e.overlayY === "top")
            a = n.y,
            o = t.height - a + this._viewportMargin;
        else if (e.overlayY === "bottom")
            s = t.height - n.y + this._viewportMargin * 2,
            o = t.height - s + this._viewportMargin;
        else {
            let W = Math.min(t.bottom - n.y + t.top, n.y)
              , K = this._lastBoundingBoxSize.height;
            o = W * 2,
            a = n.y - W,
            o > K && !this._isInitialRender && !this._growAfterOpen && (a = n.y - K / 2)
        }
        let d = e.overlayX === "start" && !r || e.overlayX === "end" && r, c = e.overlayX === "end" && !r || e.overlayX === "start" && r, m, b, R;
        if (c)
            R = t.width - n.x + this._viewportMargin * 2,
            m = n.x - this._viewportMargin;
        else if (d)
            b = n.x,
            m = t.right - n.x;
        else {
            let W = Math.min(t.right - n.x + t.left, n.x)
              , K = this._lastBoundingBoxSize.width;
            m = W * 2,
            b = n.x - W,
            m > K && !this._isInitialRender && !this._growAfterOpen && (b = n.x - K / 2)
        }
        return {
            top: a,
            left: b,
            bottom: s,
            right: R,
            width: m,
            height: o
        }
    }
    _setBoundingBoxStyles(n, e) {
        let t = this._calculateBoundingBoxRect(n, e);
        !this._isInitialRender && !this._growAfterOpen && (t.height = Math.min(t.height, this._lastBoundingBoxSize.height),
        t.width = Math.min(t.width, this._lastBoundingBoxSize.width));
        let r = {};
        if (this._hasExactPosition())
            r.top = r.left = "0",
            r.bottom = r.right = r.maxHeight = r.maxWidth = "",
            r.width = r.height = "100%";
        else {
            let o = this._overlayRef.getConfig().maxHeight
              , a = this._overlayRef.getConfig().maxWidth;
            r.height = ye(t.height),
            r.top = ye(t.top),
            r.bottom = ye(t.bottom),
            r.width = ye(t.width),
            r.left = ye(t.left),
            r.right = ye(t.right),
            e.overlayX === "center" ? r.alignItems = "center" : r.alignItems = e.overlayX === "end" ? "flex-end" : "flex-start",
            e.overlayY === "center" ? r.justifyContent = "center" : r.justifyContent = e.overlayY === "bottom" ? "flex-end" : "flex-start",
            o && (r.maxHeight = ye(o)),
            a && (r.maxWidth = ye(a))
        }
        this._lastBoundingBoxSize = t,
        Ci(this._boundingBox.style, r)
    }
    _resetBoundingBoxStyles() {
        Ci(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
        })
    }
    _resetOverlayElementStyles() {
        Ci(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: ""
        })
    }
    _setOverlayElementStyles(n, e) {
        let t = {}
          , r = this._hasExactPosition()
          , o = this._hasFlexibleDimensions
          , a = this._overlayRef.getConfig();
        if (r) {
            let m = this._viewportRuler.getViewportScrollPosition();
            Ci(t, this._getExactOverlayY(e, n, m)),
            Ci(t, this._getExactOverlayX(e, n, m))
        } else
            t.position = "static";
        let s = ""
          , d = this._getOffset(e, "x")
          , c = this._getOffset(e, "y");
        d && (s += `translateX(${d}px) `),
        c && (s += `translateY(${c}px)`),
        t.transform = s.trim(),
        a.maxHeight && (r ? t.maxHeight = ye(a.maxHeight) : o && (t.maxHeight = "")),
        a.maxWidth && (r ? t.maxWidth = ye(a.maxWidth) : o && (t.maxWidth = "")),
        Ci(this._pane.style, t)
    }
    _getExactOverlayY(n, e, t) {
        let r = {
            top: "",
            bottom: ""
        }
          , o = this._getOverlayPoint(e, this._overlayRect, n);
        if (this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, t)),
        n.overlayY === "bottom") {
            let a = this._document.documentElement.clientHeight;
            r.bottom = `${a - (o.y + this._overlayRect.height)}px`
        } else
            r.top = ye(o.y);
        return r
    }
    _getExactOverlayX(n, e, t) {
        let r = {
            left: "",
            right: ""
        }
          , o = this._getOverlayPoint(e, this._overlayRect, n);
        this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, t));
        let a;
        if (this._isRtl() ? a = n.overlayX === "end" ? "left" : "right" : a = n.overlayX === "end" ? "right" : "left",
        a === "right") {
            let s = this._document.documentElement.clientWidth;
            r.right = `${s - (o.x + this._overlayRect.width)}px`
        } else
            r.left = ye(o.x);
        return r
    }
    _getScrollVisibility() {
        let n = this._getOriginRect()
          , e = this._pane.getBoundingClientRect()
          , t = this._scrollables.map(r => r.getElementRef().nativeElement.getBoundingClientRect());
        return {
            isOriginClipped: mh(n, t),
            isOriginOutsideView: md(n, t),
            isOverlayClipped: mh(e, t),
            isOverlayOutsideView: md(e, t)
        }
    }
    _subtractOverflows(n, ...e) {
        return e.reduce( (t, r) => t - Math.max(r, 0), n)
    }
    _getNarrowedViewportRect() {
        let n = this._document.documentElement.clientWidth
          , e = this._document.documentElement.clientHeight
          , t = this._viewportRuler.getViewportScrollPosition();
        return {
            top: t.top + this._viewportMargin,
            left: t.left + this._viewportMargin,
            right: t.left + n - this._viewportMargin,
            bottom: t.top + e - this._viewportMargin,
            width: n - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin
        }
    }
    _isRtl() {
        return this._overlayRef.getDirection() === "rtl"
    }
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed
    }
    _getOffset(n, e) {
        return e === "x" ? n.offsetX == null ? this._offsetX : n.offsetX : n.offsetY == null ? this._offsetY : n.offsetY
    }
    _validatePositions() {}
    _addPanelClasses(n) {
        this._pane && en(n).forEach(e => {
            e !== "" && this._appliedPanelClasses.indexOf(e) === -1 && (this._appliedPanelClasses.push(e),
            this._pane.classList.add(e))
        }
        )
    }
    _clearPanelClasses() {
        this._pane && (this._appliedPanelClasses.forEach(n => {
            this._pane.classList.remove(n)
        }
        ),
        this._appliedPanelClasses = [])
    }
    _getOriginRect() {
        let n = this._origin;
        if (n instanceof F)
            return n.nativeElement.getBoundingClientRect();
        if (n instanceof Element)
            return n.getBoundingClientRect();
        let e = n.width || 0
          , t = n.height || 0;
        return {
            top: n.y,
            bottom: n.y + t,
            left: n.x,
            right: n.x + e,
            height: t,
            width: e
        }
    }
}
;
function Ci(i, n) {
    for (let e in n)
        n.hasOwnProperty(e) && (i[e] = n[e]);
    return i
}
function fh(i) {
    if (typeof i != "number" && i != null) {
        let[n,e] = i.split(Gb);
        return !e || e === "px" ? parseFloat(n) : null
    }
    return i || null
}
function gh(i) {
    return {
        top: Math.floor(i.top),
        right: Math.floor(i.right),
        bottom: Math.floor(i.bottom),
        left: Math.floor(i.left),
        width: Math.floor(i.width),
        height: Math.floor(i.height)
    }
}
function Xb(i, n) {
    return i === n ? !0 : i.isOriginClipped === n.isOriginClipped && i.isOriginOutsideView === n.isOriginOutsideView && i.isOverlayClipped === n.isOverlayClipped && i.isOverlayOutsideView === n.isOverlayOutsideView
}
var _h = "cdk-global-overlay-wrapper"
  , gd = class {
    constructor() {
        this._cssPosition = "static",
        this._topOffset = "",
        this._bottomOffset = "",
        this._alignItems = "",
        this._xPosition = "",
        this._xOffset = "",
        this._width = "",
        this._height = "",
        this._isDisposed = !1
    }
    attach(n) {
        let e = n.getConfig();
        this._overlayRef = n,
        this._width && !e.width && n.updateSize({
            width: this._width
        }),
        this._height && !e.height && n.updateSize({
            height: this._height
        }),
        n.hostElement.classList.add(_h),
        this._isDisposed = !1
    }
    top(n="") {
        return this._bottomOffset = "",
        this._topOffset = n,
        this._alignItems = "flex-start",
        this
    }
    left(n="") {
        return this._xOffset = n,
        this._xPosition = "left",
        this
    }
    bottom(n="") {
        return this._topOffset = "",
        this._bottomOffset = n,
        this._alignItems = "flex-end",
        this
    }
    right(n="") {
        return this._xOffset = n,
        this._xPosition = "right",
        this
    }
    start(n="") {
        return this._xOffset = n,
        this._xPosition = "start",
        this
    }
    end(n="") {
        return this._xOffset = n,
        this._xPosition = "end",
        this
    }
    width(n="") {
        return this._overlayRef ? this._overlayRef.updateSize({
            width: n
        }) : this._width = n,
        this
    }
    height(n="") {
        return this._overlayRef ? this._overlayRef.updateSize({
            height: n
        }) : this._height = n,
        this
    }
    centerHorizontally(n="") {
        return this.left(n),
        this._xPosition = "center",
        this
    }
    centerVertically(n="") {
        return this.top(n),
        this._alignItems = "center",
        this
    }
    apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached())
            return;
        let n = this._overlayRef.overlayElement.style
          , e = this._overlayRef.hostElement.style
          , t = this._overlayRef.getConfig()
          , {width: r, height: o, maxWidth: a, maxHeight: s} = t
          , d = (r === "100%" || r === "100vw") && (!a || a === "100%" || a === "100vw")
          , c = (o === "100%" || o === "100vh") && (!s || s === "100%" || s === "100vh")
          , m = this._xPosition
          , b = this._xOffset
          , R = this._overlayRef.getConfig().direction === "rtl"
          , W = ""
          , K = ""
          , k = "";
        d ? k = "flex-start" : m === "center" ? (k = "center",
        R ? K = b : W = b) : R ? m === "left" || m === "end" ? (k = "flex-end",
        W = b) : (m === "right" || m === "start") && (k = "flex-start",
        K = b) : m === "left" || m === "start" ? (k = "flex-start",
        W = b) : (m === "right" || m === "end") && (k = "flex-end",
        K = b),
        n.position = this._cssPosition,
        n.marginLeft = d ? "0" : W,
        n.marginTop = c ? "0" : this._topOffset,
        n.marginBottom = this._bottomOffset,
        n.marginRight = d ? "0" : K,
        e.justifyContent = k,
        e.alignItems = c ? "flex-start" : this._alignItems
    }
    dispose() {
        if (this._isDisposed || !this._overlayRef)
            return;
        let n = this._overlayRef.overlayElement.style
          , e = this._overlayRef.hostElement
          , t = e.style;
        e.classList.remove(_h),
        t.justifyContent = t.alignItems = n.marginTop = n.marginBottom = n.marginLeft = n.marginRight = n.position = "",
        this._overlayRef = null,
        this._isDisposed = !0
    }
}
  , Zb = ( () => {
    class i {
        constructor(e, t, r, o) {
            this._viewportRuler = e,
            this._document = t,
            this._platform = r,
            this._overlayContainer = o
        }
        global() {
            return new gd
        }
        flexibleConnectedTo(e) {
            return new gr(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(ld),p(O),p(G),p(pn))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Kb = 0
  , Ne = ( () => {
    class i {
        constructor(e, t, r, o, a, s, d, c, m, b, R, W) {
            this.scrollStrategies = e,
            this._overlayContainer = t,
            this._componentFactoryResolver = r,
            this._positionBuilder = o,
            this._keyboardDispatcher = a,
            this._injector = s,
            this._ngZone = d,
            this._document = c,
            this._directionality = m,
            this._location = b,
            this._outsideClickDispatcher = R,
            this._animationsModuleType = W
        }
        create(e) {
            let t = this._createHostElement()
              , r = this._createPaneElement(t)
              , o = this._createPortalOutlet(r)
              , a = new Di(e);
            return a.direction = a.direction || this._directionality.value,
            new Mt(o,t,r,a,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType === "NoopAnimations")
        }
        position() {
            return this._positionBuilder
        }
        _createPaneElement(e) {
            let t = this._document.createElement("div");
            return t.id = `cdk-overlay-${Kb++}`,
            t.classList.add("cdk-overlay-pane"),
            e.appendChild(t),
            t
        }
        _createHostElement() {
            let e = this._document.createElement("div");
            return this._overlayContainer.getContainerElement().appendChild(e),
            e
        }
        _createPortalOutlet(e) {
            return this._appRef || (this._appRef = this._injector.get(di)),
            new Bo(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Yb),p(pn),p(Sr),p(Zb),p(qb),p(Le),p(T),p(O),p(Oe),p(Vt),p(Wb),p(Ae, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
var Qb = new x("cdk-connected-overlay-scroll-strategy",{
    providedIn: "root",
    factory: () => {
        let i = g(Ne);
        return () => i.scrollStrategies.reposition()
    }
});
function Jb(i) {
    return () => i.scrollStrategies.reposition()
}
var ev = {
    provide: Qb,
    deps: [Ne],
    useFactory: Jb
}
  , Ko = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            providers: [Ne, ev],
            imports: [pt, Zt, cd, cd]
        })
        }
    }
    return i
}
)();
var tv = ["mat-calendar-body", ""];
function iv(i, n) {
    if (i & 1 && (h(0, "tr", 0)(1, "td", 3),
    _(2),
    u()()),
    i & 2) {
        let e = S();
        f(),
        Dn("padding-top", e._cellPadding)("padding-bottom", e._cellPadding),
        Y("colspan", e.numCols),
        f(),
        yt(" ", e.label, " ")
    }
}
function nv(i, n) {
    if (i & 1 && (h(0, "td", 3),
    _(1),
    u()),
    i & 2) {
        let e = S(2);
        Dn("padding-top", e._cellPadding)("padding-bottom", e._cellPadding),
        Y("colspan", e._firstRowOffset),
        f(),
        yt(" ", e._firstRowOffset >= e.labelMinRequiredCells ? e.label : "", " ")
    }
}
function rv(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "td", 6)(1, "button", 7),
        V("click", function(r) {
            let o = oe(e).$implicit
              , a = S(2);
            return ae(a._cellClicked(o, r))
        })("focus", function(r) {
            let o = oe(e).$implicit
              , a = S(2);
            return ae(a._emitActiveDateChange(o, r))
        }),
        h(2, "span", 8),
        _(3),
        u(),
        D(4, "span", 9),
        u()()
    }
    if (i & 2) {
        let e = n.$implicit
          , t = n.$index
          , r = S().$index
          , o = S();
        Dn("width", o._cellWidth)("padding-top", o._cellPadding)("padding-bottom", o._cellPadding),
        Y("data-mat-row", r)("data-mat-col", t),
        f(),
        B("mat-calendar-body-disabled", !e.enabled)("mat-calendar-body-active", o._isActiveCell(r, t))("mat-calendar-body-range-start", o._isRangeStart(e.compareValue))("mat-calendar-body-range-end", o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range", o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start", o._isComparisonBridgeStart(e.compareValue, r, t))("mat-calendar-body-comparison-bridge-end", o._isComparisonBridgeEnd(e.compareValue, r, t))("mat-calendar-body-comparison-start", o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end", o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range", o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start", o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end", o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview", o._isInPreview(e.compareValue)),
        C("ngClass", e.cssClasses)("tabindex", o._isActiveCell(r, t) ? 0 : -1),
        Y("aria-label", e.ariaLabel)("aria-disabled", !e.enabled || null)("aria-pressed", o._isSelected(e.compareValue))("aria-current", o.todayValue === e.compareValue ? "date" : null)("aria-describedby", o._getDescribedby(e.compareValue)),
        f(),
        B("mat-calendar-body-selected", o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical", o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today", o.todayValue === e.compareValue),
        f(),
        yt(" ", e.displayValue, " ")
    }
}
function ov(i, n) {
    if (i & 1 && (h(0, "tr", 1),
    $(1, nv, 2, 6, "td", 4),
    Nt(2, rv, 5, 48, "td", 5, Ot),
    u()),
    i & 2) {
        let e = n.$implicit
          , t = n.$index
          , r = S();
        f(),
        J(1, t === 0 && r._firstRowOffset ? 1 : -1),
        f(),
        Pt(e)
    }
}
function av(i, n) {
    if (i & 1 && (h(0, "th", 2)(1, "span", 6),
    _(2),
    u(),
    h(3, "span", 3),
    _(4),
    u()()),
    i & 2) {
        let e = n.$implicit;
        f(2),
        me(e.long),
        f(2),
        me(e.narrow)
    }
}
var sv = ["*"];
function dv(i, n) {}
function lv(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "mat-month-view", 2),
        Pr("activeDateChange", function(r) {
            oe(e);
            let o = S();
            return Nr(o.activeDate, r) || (o.activeDate = r),
            ae(r)
        }),
        V("_userSelection", function(r) {
            oe(e);
            let o = S();
            return ae(o._dateSelected(r))
        })("dragStarted", function(r) {
            oe(e);
            let o = S();
            return ae(o._dragStarted(r))
        })("dragEnded", function(r) {
            oe(e);
            let o = S();
            return ae(o._dragEnded(r))
        }),
        u()
    }
    if (i & 2) {
        let e = S();
        Or("activeDate", e.activeDate),
        C("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass)("comparisonStart", e.comparisonStart)("comparisonEnd", e.comparisonEnd)("startDateAccessibleName", e.startDateAccessibleName)("endDateAccessibleName", e.endDateAccessibleName)("activeDrag", e._activeDrag)
    }
}
function cv(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "mat-year-view", 3),
        Pr("activeDateChange", function(r) {
            oe(e);
            let o = S();
            return Nr(o.activeDate, r) || (o.activeDate = r),
            ae(r)
        }),
        V("monthSelected", function(r) {
            oe(e);
            let o = S();
            return ae(o._monthSelectedInYearView(r))
        })("selectedChange", function(r) {
            oe(e);
            let o = S();
            return ae(o._goToDateInView(r, "month"))
        }),
        u()
    }
    if (i & 2) {
        let e = S();
        Or("activeDate", e.activeDate),
        C("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass)
    }
}
function uv(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "mat-multi-year-view", 4),
        Pr("activeDateChange", function(r) {
            oe(e);
            let o = S();
            return Nr(o.activeDate, r) || (o.activeDate = r),
            ae(r)
        }),
        V("yearSelected", function(r) {
            oe(e);
            let o = S();
            return ae(o._yearSelectedInMultiYearView(r))
        })("selectedChange", function(r) {
            oe(e);
            let o = S();
            return ae(o._goToDateInView(r, "year"))
        }),
        u()
    }
    if (i & 2) {
        let e = S();
        Or("activeDate", e.activeDate),
        C("selected", e.selected)("dateFilter", e.dateFilter)("maxDate", e.maxDate)("minDate", e.minDate)("dateClass", e.dateClass)
    }
}
function hv(i, n) {}
var mv = ["button"]
  , pv = [[["", "matDatepickerToggleIcon", ""]]]
  , fv = ["[matDatepickerToggleIcon]"];
function gv(i, n) {
    i & 1 && (xn(),
    h(0, "svg", 2),
    D(1, "path", 3),
    u())
}
var yr = ( () => {
    class i {
        constructor() {
            this.changes = new A,
            this.calendarLabel = "Calendar",
            this.openCalendarLabel = "Open calendar",
            this.closeCalendarLabel = "Close calendar",
            this.prevMonthLabel = "Previous month",
            this.nextMonthLabel = "Next month",
            this.prevYearLabel = "Previous year",
            this.nextYearLabel = "Next year",
            this.prevMultiYearLabel = "Previous 24 years",
            this.nextMultiYearLabel = "Next 24 years",
            this.switchToMonthViewLabel = "Choose date",
            this.switchToMultiYearViewLabel = "Choose month and year",
            this.startDateLabel = "Start date",
            this.endDateLabel = "End date"
        }
        formatYearRange(e, t) {
            return `${e} \u2013 ${t}`
        }
        formatYearRangeLabel(e, t) {
            return `${e} to ${t}`
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , br = class {
    constructor(n, e, t, r, o={}, a=n, s) {
        this.value = n,
        this.displayValue = e,
        this.ariaLabel = t,
        this.enabled = r,
        this.cssClasses = o,
        this.compareValue = a,
        this.rawValue = s
    }
}
  , _v = 1
  , vh = Ke({
    passive: !1,
    capture: !0
})
  , Jt = Ke({
    passive: !0,
    capture: !0
})
  , Qo = Ke({
    passive: !0
})
  , gn = ( () => {
    class i {
        ngAfterViewChecked() {
            this._focusActiveCellAfterViewChecked && (this._focusActiveCell(),
            this._focusActiveCellAfterViewChecked = !1)
        }
        constructor(e, t) {
            this._elementRef = e,
            this._ngZone = t,
            this._platform = g(G),
            this._focusActiveCellAfterViewChecked = !1,
            this.numCols = 7,
            this.activeCell = 0,
            this.isRange = !1,
            this.cellAspectRatio = 1,
            this.previewStart = null,
            this.previewEnd = null,
            this.selectedValueChange = new M,
            this.previewChange = new M,
            this.activeDateChange = new M,
            this.dragStarted = new M,
            this.dragEnded = new M,
            this._didDragSinceMouseDown = !1,
            this._enterHandler = r => {
                if (this._skipNextFocus && r.type === "focus") {
                    this._skipNextFocus = !1;
                    return
                }
                if (r.target && this.isRange) {
                    let o = this._getCellFromElement(r.target);
                    o && this._ngZone.run( () => this.previewChange.emit({
                        value: o.enabled ? o : null,
                        event: r
                    }))
                }
            }
            ,
            this._touchmoveHandler = r => {
                if (!this.isRange)
                    return;
                let o = yh(r)
                  , a = o ? this._getCellFromElement(o) : null;
                o !== r.target && (this._didDragSinceMouseDown = !0),
                vd(r.target) && r.preventDefault(),
                this._ngZone.run( () => this.previewChange.emit({
                    value: a?.enabled ? a : null,
                    event: r
                }))
            }
            ,
            this._leaveHandler = r => {
                this.previewEnd !== null && this.isRange && (r.type !== "blur" && (this._didDragSinceMouseDown = !0),
                r.target && this._getCellFromElement(r.target) && !(r.relatedTarget && this._getCellFromElement(r.relatedTarget)) && this._ngZone.run( () => this.previewChange.emit({
                    value: null,
                    event: r
                })))
            }
            ,
            this._mousedownHandler = r => {
                if (!this.isRange)
                    return;
                this._didDragSinceMouseDown = !1;
                let o = r.target && this._getCellFromElement(r.target);
                !o || !this._isInRange(o.compareValue) || this._ngZone.run( () => {
                    this.dragStarted.emit({
                        value: o.rawValue,
                        event: r
                    })
                }
                )
            }
            ,
            this._mouseupHandler = r => {
                if (!this.isRange)
                    return;
                let o = vd(r.target);
                if (!o) {
                    this._ngZone.run( () => {
                        this.dragEnded.emit({
                            value: null,
                            event: r
                        })
                    }
                    );
                    return
                }
                o.closest(".mat-calendar-body") === this._elementRef.nativeElement && this._ngZone.run( () => {
                    let a = this._getCellFromElement(o);
                    this.dragEnded.emit({
                        value: a?.rawValue ?? null,
                        event: r
                    })
                }
                )
            }
            ,
            this._touchendHandler = r => {
                let o = yh(r);
                o && this._mouseupHandler({
                    target: o
                })
            }
            ,
            this._id = `mat-calendar-body-${_v++}`,
            this._startDateLabelId = `${this._id}-start-date`,
            this._endDateLabelId = `${this._id}-end-date`,
            t.runOutsideAngular( () => {
                let r = e.nativeElement;
                r.addEventListener("touchmove", this._touchmoveHandler, vh),
                r.addEventListener("mouseenter", this._enterHandler, Jt),
                r.addEventListener("focus", this._enterHandler, Jt),
                r.addEventListener("mouseleave", this._leaveHandler, Jt),
                r.addEventListener("blur", this._leaveHandler, Jt),
                r.addEventListener("mousedown", this._mousedownHandler, Qo),
                r.addEventListener("touchstart", this._mousedownHandler, Qo),
                this._platform.isBrowser && (window.addEventListener("mouseup", this._mouseupHandler),
                window.addEventListener("touchend", this._touchendHandler))
            }
            )
        }
        _cellClicked(e, t) {
            this._didDragSinceMouseDown || e.enabled && this.selectedValueChange.emit({
                value: e.value,
                event: t
            })
        }
        _emitActiveDateChange(e, t) {
            e.enabled && this.activeDateChange.emit({
                value: e.value,
                event: t
            })
        }
        _isSelected(e) {
            return this.startValue === e || this.endValue === e
        }
        ngOnChanges(e) {
            let t = e.numCols
              , {rows: r, numCols: o} = this;
            (e.rows || t) && (this._firstRowOffset = r && r.length && r[0].length ? o - r[0].length : 0),
            (e.cellAspectRatio || t || !this._cellPadding) && (this._cellPadding = `${50 * this.cellAspectRatio / o}%`),
            (t || !this._cellWidth) && (this._cellWidth = `${100 / o}%`)
        }
        ngOnDestroy() {
            let e = this._elementRef.nativeElement;
            e.removeEventListener("touchmove", this._touchmoveHandler, vh),
            e.removeEventListener("mouseenter", this._enterHandler, Jt),
            e.removeEventListener("focus", this._enterHandler, Jt),
            e.removeEventListener("mouseleave", this._leaveHandler, Jt),
            e.removeEventListener("blur", this._leaveHandler, Jt),
            e.removeEventListener("mousedown", this._mousedownHandler, Qo),
            e.removeEventListener("touchstart", this._mousedownHandler, Qo),
            this._platform.isBrowser && (window.removeEventListener("mouseup", this._mouseupHandler),
            window.removeEventListener("touchend", this._touchendHandler))
        }
        _isActiveCell(e, t) {
            let r = e * this.numCols + t;
            return e && (r -= this._firstRowOffset),
            r == this.activeCell
        }
        _focusActiveCell(e=!0) {
            this._ngZone.runOutsideAngular( () => {
                this._ngZone.onStable.pipe(fe(1)).subscribe( () => {
                    setTimeout( () => {
                        let t = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
                        t && (e || (this._skipNextFocus = !0),
                        t.focus())
                    }
                    )
                }
                )
            }
            )
        }
        _scheduleFocusActiveCellAfterViewChecked() {
            this._focusActiveCellAfterViewChecked = !0
        }
        _isRangeStart(e) {
            return yd(e, this.startValue, this.endValue)
        }
        _isRangeEnd(e) {
            return xd(e, this.startValue, this.endValue)
        }
        _isInRange(e) {
            return wd(e, this.startValue, this.endValue, this.isRange)
        }
        _isComparisonStart(e) {
            return yd(e, this.comparisonStart, this.comparisonEnd)
        }
        _isComparisonBridgeStart(e, t, r) {
            if (!this._isComparisonStart(e) || this._isRangeStart(e) || !this._isInRange(e))
                return !1;
            let o = this.rows[t][r - 1];
            if (!o) {
                let a = this.rows[t - 1];
                o = a && a[a.length - 1]
            }
            return o && !this._isRangeEnd(o.compareValue)
        }
        _isComparisonBridgeEnd(e, t, r) {
            if (!this._isComparisonEnd(e) || this._isRangeEnd(e) || !this._isInRange(e))
                return !1;
            let o = this.rows[t][r + 1];
            if (!o) {
                let a = this.rows[t + 1];
                o = a && a[0]
            }
            return o && !this._isRangeStart(o.compareValue)
        }
        _isComparisonEnd(e) {
            return xd(e, this.comparisonStart, this.comparisonEnd)
        }
        _isInComparisonRange(e) {
            return wd(e, this.comparisonStart, this.comparisonEnd, this.isRange)
        }
        _isComparisonIdentical(e) {
            return this.comparisonStart === this.comparisonEnd && e === this.comparisonStart
        }
        _isPreviewStart(e) {
            return yd(e, this.previewStart, this.previewEnd)
        }
        _isPreviewEnd(e) {
            return xd(e, this.previewStart, this.previewEnd)
        }
        _isInPreview(e) {
            return wd(e, this.previewStart, this.previewEnd, this.isRange)
        }
        _getDescribedby(e) {
            return this.isRange ? this.startValue === e && this.endValue === e ? `${this._startDateLabelId} ${this._endDateLabelId}` : this.startValue === e ? this._startDateLabelId : this.endValue === e ? this._endDateLabelId : null : null
        }
        _getCellFromElement(e) {
            let t = vd(e);
            if (t) {
                let r = t.getAttribute("data-mat-row")
                  , o = t.getAttribute("data-mat-col");
                if (r && o)
                    return this.rows[parseInt(r)][parseInt(o)]
            }
            return null
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(T))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["", "mat-calendar-body", ""]],
            hostAttrs: [1, "mat-calendar-body"],
            inputs: {
                label: "label",
                rows: "rows",
                todayValue: "todayValue",
                startValue: "startValue",
                endValue: "endValue",
                labelMinRequiredCells: "labelMinRequiredCells",
                numCols: "numCols",
                activeCell: "activeCell",
                isRange: "isRange",
                cellAspectRatio: "cellAspectRatio",
                comparisonStart: "comparisonStart",
                comparisonEnd: "comparisonEnd",
                previewStart: "previewStart",
                previewEnd: "previewEnd",
                startDateAccessibleName: "startDateAccessibleName",
                endDateAccessibleName: "endDateAccessibleName"
            },
            outputs: {
                selectedValueChange: "selectedValueChange",
                previewChange: "previewChange",
                activeDateChange: "activeDateChange",
                dragStarted: "dragStarted",
                dragEnded: "dragEnded"
            },
            exportAs: ["matCalendarBody"],
            standalone: !0,
            features: [he, L],
            attrs: tv,
            decls: 7,
            vars: 5,
            consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
            template: function(t, r) {
                t & 1 && ($(0, iv, 3, 6, "tr", 0),
                Nt(1, ov, 4, 1, "tr", 1, Ot),
                h(3, "label", 2),
                _(4),
                u(),
                h(5, "label", 2),
                _(6),
                u()),
                t & 2 && (J(0, r._firstRowOffset < r.labelMinRequiredCells ? 0 : -1),
                f(),
                Pt(r.rows),
                f(2),
                C("id", r._startDateLabelId),
                f(),
                yt(" ", r.startDateAccessibleName, `
`),
                f(),
                C("id", r._endDateLabelId),
                f(),
                yt(" ", r.endDateAccessibleName, `
`))
            },
            dependencies: [pl],
            styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}'],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
function bd(i) {
    return i?.nodeName === "TD"
}
function vd(i) {
    let n;
    return bd(i) ? n = i : bd(i.parentNode) ? n = i.parentNode : bd(i.parentNode?.parentNode) && (n = i.parentNode.parentNode),
    n?.getAttribute("data-mat-row") != null ? n : null
}
function yd(i, n, e) {
    return e !== null && n !== e && i < e && i === n
}
function xd(i, n, e) {
    return n !== null && n !== e && i >= n && i === e
}
function wd(i, n, e, t) {
    return t && n !== null && e !== null && n !== e && i >= n && i <= e
}
function yh(i) {
    let n = i.changedTouches[0];
    return document.elementFromPoint(n.clientX, n.clientY)
}
var et = class {
    constructor(n, e) {
        this.start = n,
        this.end = e
    }
}
  , vr = ( () => {
    class i {
        constructor(e, t) {
            this.selection = e,
            this._adapter = t,
            this._selectionChanged = new A,
            this.selectionChanged = this._selectionChanged,
            this.selection = e
        }
        updateSelection(e, t) {
            let r = this.selection;
            this.selection = e,
            this._selectionChanged.next({
                selection: e,
                source: t,
                oldValue: r
            })
        }
        ngOnDestroy() {
            this._selectionChanged.complete()
        }
        _isValidDateInstance(e) {
            return this._adapter.isDateInstance(e) && this._adapter.isValid(e)
        }
        static{this.\u0275fac = function(t) {
            ai()
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)()
  , bv = ( () => {
    class i extends vr {
        constructor(e) {
            super(null, e)
        }
        add(e) {
            super.updateSelection(e, this)
        }
        isValid() {
            return this.selection != null && this._isValidDateInstance(this.selection)
        }
        isComplete() {
            return this.selection != null
        }
        clone() {
            let e = new i(this._adapter);
            return e.updateSelection(this.selection, this),
            e
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Te))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac
        })
        }
    }
    return i
}
)();
function vv(i, n) {
    return i || new bv(n)
}
var Ih = {
    provide: vr,
    deps: [[new ri, new Ii, vr], Te],
    useFactory: vv
};
var Mh = new x("MAT_DATE_RANGE_SELECTION_STRATEGY");
var Cd = 7
  , xh = ( () => {
    class i {
        get activeDate() {
            return this._activeDate
        }
        set activeDate(e) {
            let t = this._activeDate
              , r = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(r, this.minDate, this.maxDate),
            this._hasSameMonthAndYear(t, this._activeDate) || this._init()
        }
        get selected() {
            return this._selected
        }
        set selected(e) {
            e instanceof et ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),
            this._setRanges(this._selected)
        }
        get minDate() {
            return this._minDate
        }
        set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get maxDate() {
            return this._maxDate
        }
        set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        constructor(e, t, r, o, a) {
            this._changeDetectorRef = e,
            this._dateFormats = t,
            this._dateAdapter = r,
            this._dir = o,
            this._rangeStrategy = a,
            this._rerenderSubscription = ce.EMPTY,
            this.activeDrag = null,
            this.selectedChange = new M,
            this._userSelection = new M,
            this.dragStarted = new M,
            this.dragEnded = new M,
            this.activeDateChange = new M,
            this._activeDate = this._dateAdapter.today()
        }
        ngAfterContentInit() {
            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe( () => this._init())
        }
        ngOnChanges(e) {
            let t = e.comparisonStart || e.comparisonEnd;
            t && !t.firstChange && this._setRanges(this.selected),
            e.activeDrag && !this.activeDrag && this._clearPreview()
        }
        ngOnDestroy() {
            this._rerenderSubscription.unsubscribe()
        }
        _dateSelected(e) {
            let t = e.value, r = this._getDateFromDayOfMonth(t), o, a;
            this._selected instanceof et ? (o = this._getDateInCurrentMonth(this._selected.start),
            a = this._getDateInCurrentMonth(this._selected.end)) : o = a = this._getDateInCurrentMonth(this._selected),
            (o !== t || a !== t) && this.selectedChange.emit(r),
            this._userSelection.emit({
                value: r,
                event: e.event
            }),
            this._clearPreview(),
            this._changeDetectorRef.markForCheck()
        }
        _updateActiveDate(e) {
            let t = e.value
              , r = this._activeDate;
            this.activeDate = this._getDateFromDayOfMonth(t),
            this._dateAdapter.compareDate(r, this.activeDate) && this.activeDateChange.emit(this._activeDate)
        }
        _handleCalendarBodyKeydown(e) {
            let t = this._activeDate
              , r = this._isRtl();
            switch (e.keyCode) {
            case 37:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, r ? 1 : -1);
                break;
            case 39:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, r ? -1 : 1);
                break;
            case 38:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case 40:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case 36:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case 35:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
                break;
            case 33:
                this.activeDate = e.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case 34:
                this.activeDate = e.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case 13:
            case 32:
                this._selectionKeyPressed = !0,
                this._canSelect(this._activeDate) && e.preventDefault();
                return;
            case 27:
                this._previewEnd != null && !je(e) && (this._clearPreview(),
                this.activeDrag ? this.dragEnded.emit({
                    value: null,
                    event: e
                }) : (this.selectedChange.emit(null),
                this._userSelection.emit({
                    value: null,
                    event: e
                })),
                e.preventDefault(),
                e.stopPropagation());
                return;
            default:
                return
            }
            this._dateAdapter.compareDate(t, this.activeDate) && (this.activeDateChange.emit(this.activeDate),
            this._focusActiveCellAfterViewChecked()),
            e.preventDefault()
        }
        _handleCalendarBodyKeyup(e) {
            (e.keyCode === 32 || e.keyCode === 13) && (this._selectionKeyPressed && this._canSelect(this._activeDate) && this._dateSelected({
                value: this._dateAdapter.getDate(this._activeDate),
                event: e
            }),
            this._selectionKeyPressed = !1)
        }
        _init() {
            this._setRanges(this.selected),
            this._todayDate = this._getCellCompareValue(this._dateAdapter.today()),
            this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
            let e = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
            this._firstWeekOffset = (Cd + this._dateAdapter.getDayOfWeek(e) - this._dateAdapter.getFirstDayOfWeek()) % Cd,
            this._initWeekdays(),
            this._createWeekCells(),
            this._changeDetectorRef.markForCheck()
        }
        _focusActiveCell(e) {
            this._matCalendarBody._focusActiveCell(e)
        }
        _focusActiveCellAfterViewChecked() {
            this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()
        }
        _previewChanged({event: e, value: t}) {
            if (this._rangeStrategy) {
                let r = t ? t.rawValue : null
                  , o = this._rangeStrategy.createPreview(r, this.selected, e);
                if (this._previewStart = this._getCellCompareValue(o.start),
                this._previewEnd = this._getCellCompareValue(o.end),
                this.activeDrag && r) {
                    let a = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, r, e);
                    a && (this._previewStart = this._getCellCompareValue(a.start),
                    this._previewEnd = this._getCellCompareValue(a.end))
                }
                this._changeDetectorRef.detectChanges()
            }
        }
        _dragEnded(e) {
            if (this.activeDrag)
                if (e.value) {
                    let t = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, e.value, e.event);
                    this.dragEnded.emit({
                        value: t ?? null,
                        event: e.event
                    })
                } else
                    this.dragEnded.emit({
                        value: null,
                        event: e.event
                    })
        }
        _getDateFromDayOfMonth(e) {
            return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), e)
        }
        _initWeekdays() {
            let e = this._dateAdapter.getFirstDayOfWeek()
              , t = this._dateAdapter.getDayOfWeekNames("narrow")
              , o = this._dateAdapter.getDayOfWeekNames("long").map( (a, s) => ({
                long: a,
                narrow: t[s]
            }));
            this._weekdays = o.slice(e).concat(o.slice(0, e))
        }
        _createWeekCells() {
            let e = this._dateAdapter.getNumDaysInMonth(this.activeDate)
              , t = this._dateAdapter.getDateNames();
            this._weeks = [[]];
            for (let r = 0, o = this._firstWeekOffset; r < e; r++,
            o++) {
                o == Cd && (this._weeks.push([]),
                o = 0);
                let a = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), r + 1)
                  , s = this._shouldEnableDate(a)
                  , d = this._dateAdapter.format(a, this._dateFormats.display.dateA11yLabel)
                  , c = this.dateClass ? this.dateClass(a, "month") : void 0;
                this._weeks[this._weeks.length - 1].push(new br(r + 1,t[r],d,s,c,this._getCellCompareValue(a),a))
            }
        }
        _shouldEnableDate(e) {
            return !!e && (!this.minDate || this._dateAdapter.compareDate(e, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(e, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(e))
        }
        _getDateInCurrentMonth(e) {
            return e && this._hasSameMonthAndYear(e, this.activeDate) ? this._dateAdapter.getDate(e) : null
        }
        _hasSameMonthAndYear(e, t) {
            return !!(e && t && this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(t) && this._dateAdapter.getYear(e) == this._dateAdapter.getYear(t))
        }
        _getCellCompareValue(e) {
            if (e) {
                let t = this._dateAdapter.getYear(e)
                  , r = this._dateAdapter.getMonth(e)
                  , o = this._dateAdapter.getDate(e);
                return new Date(t,r,o).getTime()
            }
            return null
        }
        _isRtl() {
            return this._dir && this._dir.value === "rtl"
        }
        _setRanges(e) {
            e instanceof et ? (this._rangeStart = this._getCellCompareValue(e.start),
            this._rangeEnd = this._getCellCompareValue(e.end),
            this._isRange = !0) : (this._rangeStart = this._rangeEnd = this._getCellCompareValue(e),
            this._isRange = !1),
            this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart),
            this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd)
        }
        _canSelect(e) {
            return !this.dateFilter || this.dateFilter(e)
        }
        _clearPreview() {
            this._previewStart = this._previewEnd = null
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(le),l(Wt, 8),l(Te, 8),l(Oe, 8),l(Mh, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-month-view"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(gn, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._matCalendarBody = o.first)
                }
            },
            inputs: {
                activeDate: "activeDate",
                selected: "selected",
                minDate: "minDate",
                maxDate: "maxDate",
                dateFilter: "dateFilter",
                dateClass: "dateClass",
                comparisonStart: "comparisonStart",
                comparisonEnd: "comparisonEnd",
                startDateAccessibleName: "startDateAccessibleName",
                endDateAccessibleName: "endDateAccessibleName",
                activeDrag: "activeDrag"
            },
            outputs: {
                selectedChange: "selectedChange",
                _userSelection: "_userSelection",
                dragStarted: "dragStarted",
                dragEnded: "dragEnded",
                activeDateChange: "activeDateChange"
            },
            exportAs: ["matMonthView"],
            standalone: !0,
            features: [he, L],
            decls: 8,
            vars: 14,
            consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
            template: function(t, r) {
                t & 1 && (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
                Nt(3, av, 5, 2, "th", 2, Ot),
                u(),
                h(5, "tr", 3),
                D(6, "th", 4),
                u()(),
                h(7, "tbody", 5),
                V("selectedValueChange", function(a) {
                    return r._dateSelected(a)
                })("activeDateChange", function(a) {
                    return r._updateActiveDate(a)
                })("previewChange", function(a) {
                    return r._previewChanged(a)
                })("dragStarted", function(a) {
                    return r.dragStarted.emit(a)
                })("dragEnded", function(a) {
                    return r._dragEnded(a)
                })("keyup", function(a) {
                    return r._handleCalendarBodyKeyup(a)
                })("keydown", function(a) {
                    return r._handleCalendarBodyKeydown(a)
                }),
                u()()),
                t & 2 && (f(3),
                Pt(r._weekdays),
                f(4),
                C("label", r._monthLabel)("rows", r._weeks)("todayValue", r._todayDate)("startValue", r._rangeStart)("endValue", r._rangeEnd)("comparisonStart", r._comparisonRangeStart)("comparisonEnd", r._comparisonRangeEnd)("previewStart", r._previewStart)("previewEnd", r._previewEnd)("isRange", r._isRange)("labelMinRequiredCells", 3)("activeCell", r._dateAdapter.getDate(r.activeDate) - 1)("startDateAccessibleName", r.startDateAccessibleName)("endDateAccessibleName", r.endDateAccessibleName))
            },
            dependencies: [gn],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , Ye = 24
  , Dd = 4
  , wh = ( () => {
    class i {
        get activeDate() {
            return this._activeDate
        }
        set activeDate(e) {
            let t = this._activeDate
              , r = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(r, this.minDate, this.maxDate),
            Ah(this._dateAdapter, t, this._activeDate, this.minDate, this.maxDate) || this._init()
        }
        get selected() {
            return this._selected
        }
        set selected(e) {
            e instanceof et ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),
            this._setSelectedYear(e)
        }
        get minDate() {
            return this._minDate
        }
        set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get maxDate() {
            return this._maxDate
        }
        set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        constructor(e, t, r) {
            this._changeDetectorRef = e,
            this._dateAdapter = t,
            this._dir = r,
            this._rerenderSubscription = ce.EMPTY,
            this.selectedChange = new M,
            this.yearSelected = new M,
            this.activeDateChange = new M,
            this._dateAdapter,
            this._activeDate = this._dateAdapter.today()
        }
        ngAfterContentInit() {
            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe( () => this._init())
        }
        ngOnDestroy() {
            this._rerenderSubscription.unsubscribe()
        }
        _init() {
            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
            let t = this._dateAdapter.getYear(this._activeDate) - _r(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];
            for (let r = 0, o = []; r < Ye; r++)
                o.push(t + r),
                o.length == Dd && (this._years.push(o.map(a => this._createCellForYear(a))),
                o = []);
            this._changeDetectorRef.markForCheck()
        }
        _yearSelected(e) {
            let t = e.value
              , r = this._dateAdapter.createDate(t, 0, 1)
              , o = this._getDateFromYear(t);
            this.yearSelected.emit(r),
            this.selectedChange.emit(o)
        }
        _updateActiveDate(e) {
            let t = e.value
              , r = this._activeDate;
            this.activeDate = this._getDateFromYear(t),
            this._dateAdapter.compareDate(r, this.activeDate) && this.activeDateChange.emit(this.activeDate)
        }
        _handleCalendarBodyKeydown(e) {
            let t = this._activeDate
              , r = this._isRtl();
            switch (e.keyCode) {
            case 37:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, r ? 1 : -1);
                break;
            case 39:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, r ? -1 : 1);
                break;
            case 38:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -Dd);
                break;
            case 40:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, Dd);
                break;
            case 36:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -_r(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case 35:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, Ye - _r(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case 33:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? -Ye * 10 : -Ye);
                break;
            case 34:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? Ye * 10 : Ye);
                break;
            case 13:
            case 32:
                this._selectionKeyPressed = !0;
                break;
            default:
                return
            }
            this._dateAdapter.compareDate(t, this.activeDate) && this.activeDateChange.emit(this.activeDate),
            this._focusActiveCellAfterViewChecked(),
            e.preventDefault()
        }
        _handleCalendarBodyKeyup(e) {
            (e.keyCode === 32 || e.keyCode === 13) && (this._selectionKeyPressed && this._yearSelected({
                value: this._dateAdapter.getYear(this._activeDate),
                event: e
            }),
            this._selectionKeyPressed = !1)
        }
        _getActiveCell() {
            return _r(this._dateAdapter, this.activeDate, this.minDate, this.maxDate)
        }
        _focusActiveCell() {
            this._matCalendarBody._focusActiveCell()
        }
        _focusActiveCellAfterViewChecked() {
            this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()
        }
        _getDateFromYear(e) {
            let t = this._dateAdapter.getMonth(this.activeDate)
              , r = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e, t, 1));
            return this._dateAdapter.createDate(e, t, Math.min(this._dateAdapter.getDate(this.activeDate), r))
        }
        _createCellForYear(e) {
            let t = this._dateAdapter.createDate(e, 0, 1)
              , r = this._dateAdapter.getYearName(t)
              , o = this.dateClass ? this.dateClass(t, "multi-year") : void 0;
            return new br(e,r,r,this._shouldEnableYear(e),o)
        }
        _shouldEnableYear(e) {
            if (e == null || this.maxDate && e > this._dateAdapter.getYear(this.maxDate) || this.minDate && e < this._dateAdapter.getYear(this.minDate))
                return !1;
            if (!this.dateFilter)
                return !0;
            let t = this._dateAdapter.createDate(e, 0, 1);
            for (let r = t; this._dateAdapter.getYear(r) == e; r = this._dateAdapter.addCalendarDays(r, 1))
                if (this.dateFilter(r))
                    return !0;
            return !1
        }
        _isRtl() {
            return this._dir && this._dir.value === "rtl"
        }
        _setSelectedYear(e) {
            if (this._selectedYear = null,
            e instanceof et) {
                let t = e.start || e.end;
                t && (this._selectedYear = this._dateAdapter.getYear(t))
            } else
                e && (this._selectedYear = this._dateAdapter.getYear(e))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(le),l(Te, 8),l(Oe, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-multi-year-view"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(gn, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._matCalendarBody = o.first)
                }
            },
            inputs: {
                activeDate: "activeDate",
                selected: "selected",
                minDate: "minDate",
                maxDate: "maxDate",
                dateFilter: "dateFilter",
                dateClass: "dateClass"
            },
            outputs: {
                selectedChange: "selectedChange",
                yearSelected: "yearSelected",
                activeDateChange: "activeDateChange"
            },
            exportAs: ["matMultiYearView"],
            standalone: !0,
            features: [L],
            decls: 5,
            vars: 7,
            consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
            template: function(t, r) {
                t & 1 && (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
                D(3, "th", 2),
                u()(),
                h(4, "tbody", 3),
                V("selectedValueChange", function(a) {
                    return r._yearSelected(a)
                })("activeDateChange", function(a) {
                    return r._updateActiveDate(a)
                })("keyup", function(a) {
                    return r._handleCalendarBodyKeyup(a)
                })("keydown", function(a) {
                    return r._handleCalendarBodyKeydown(a)
                }),
                u()()),
                t & 2 && (f(4),
                C("rows", r._years)("todayValue", r._todayYear)("startValue", r._selectedYear)("endValue", r._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", r._getActiveCell()))
            },
            dependencies: [gn],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
function Ah(i, n, e, t, r) {
    let o = i.getYear(n)
      , a = i.getYear(e)
      , s = Sh(i, t, r);
    return Math.floor((o - s) / Ye) === Math.floor((a - s) / Ye)
}
function _r(i, n, e, t) {
    let r = i.getYear(n);
    return yv(r - Sh(i, e, t), Ye)
}
function Sh(i, n, e) {
    let t = 0;
    return e ? t = i.getYear(e) - Ye + 1 : n && (t = i.getYear(n)),
    t
}
function yv(i, n) {
    return (i % n + n) % n
}
var Ch = ( () => {
    class i {
        get activeDate() {
            return this._activeDate
        }
        set activeDate(e) {
            let t = this._activeDate
              , r = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(r, this.minDate, this.maxDate),
            this._dateAdapter.getYear(t) !== this._dateAdapter.getYear(this._activeDate) && this._init()
        }
        get selected() {
            return this._selected
        }
        set selected(e) {
            e instanceof et ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),
            this._setSelectedMonth(e)
        }
        get minDate() {
            return this._minDate
        }
        set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get maxDate() {
            return this._maxDate
        }
        set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        constructor(e, t, r, o) {
            this._changeDetectorRef = e,
            this._dateFormats = t,
            this._dateAdapter = r,
            this._dir = o,
            this._rerenderSubscription = ce.EMPTY,
            this.selectedChange = new M,
            this.monthSelected = new M,
            this.activeDateChange = new M,
            this._activeDate = this._dateAdapter.today()
        }
        ngAfterContentInit() {
            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Ce(null)).subscribe( () => this._init())
        }
        ngOnDestroy() {
            this._rerenderSubscription.unsubscribe()
        }
        _monthSelected(e) {
            let t = e.value
              , r = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), t, 1);
            this.monthSelected.emit(r);
            let o = this._getDateFromMonth(t);
            this.selectedChange.emit(o)
        }
        _updateActiveDate(e) {
            let t = e.value
              , r = this._activeDate;
            this.activeDate = this._getDateFromMonth(t),
            this._dateAdapter.compareDate(r, this.activeDate) && this.activeDateChange.emit(this.activeDate)
        }
        _handleCalendarBodyKeydown(e) {
            let t = this._activeDate
              , r = this._isRtl();
            switch (e.keyCode) {
            case 37:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, r ? 1 : -1);
                break;
            case 39:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, r ? -1 : 1);
                break;
            case 38:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case 40:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case 36:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case 35:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case 33:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? -10 : -1);
                break;
            case 34:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, e.altKey ? 10 : 1);
                break;
            case 13:
            case 32:
                this._selectionKeyPressed = !0;
                break;
            default:
                return
            }
            this._dateAdapter.compareDate(t, this.activeDate) && (this.activeDateChange.emit(this.activeDate),
            this._focusActiveCellAfterViewChecked()),
            e.preventDefault()
        }
        _handleCalendarBodyKeyup(e) {
            (e.keyCode === 32 || e.keyCode === 13) && (this._selectionKeyPressed && this._monthSelected({
                value: this._dateAdapter.getMonth(this._activeDate),
                event: e
            }),
            this._selectionKeyPressed = !1)
        }
        _init() {
            this._setSelectedMonth(this.selected),
            this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today()),
            this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
            let e = this._dateAdapter.getMonthNames("short");
            this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(t => t.map(r => this._createCellForMonth(r, e[r]))),
            this._changeDetectorRef.markForCheck()
        }
        _focusActiveCell() {
            this._matCalendarBody._focusActiveCell()
        }
        _focusActiveCellAfterViewChecked() {
            this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()
        }
        _getMonthInCurrentYear(e) {
            return e && this._dateAdapter.getYear(e) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(e) : null
        }
        _getDateFromMonth(e) {
            let t = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, 1)
              , r = this._dateAdapter.getNumDaysInMonth(t);
            return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, Math.min(this._dateAdapter.getDate(this.activeDate), r))
        }
        _createCellForMonth(e, t) {
            let r = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), e, 1)
              , o = this._dateAdapter.format(r, this._dateFormats.display.monthYearA11yLabel)
              , a = this.dateClass ? this.dateClass(r, "year") : void 0;
            return new br(e,t.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)
        }
        _shouldEnableMonth(e) {
            let t = this._dateAdapter.getYear(this.activeDate);
            if (e == null || this._isYearAndMonthAfterMaxDate(t, e) || this._isYearAndMonthBeforeMinDate(t, e))
                return !1;
            if (!this.dateFilter)
                return !0;
            let r = this._dateAdapter.createDate(t, e, 1);
            for (let o = r; this._dateAdapter.getMonth(o) == e; o = this._dateAdapter.addCalendarDays(o, 1))
                if (this.dateFilter(o))
                    return !0;
            return !1
        }
        _isYearAndMonthAfterMaxDate(e, t) {
            if (this.maxDate) {
                let r = this._dateAdapter.getYear(this.maxDate)
                  , o = this._dateAdapter.getMonth(this.maxDate);
                return e > r || e === r && t > o
            }
            return !1
        }
        _isYearAndMonthBeforeMinDate(e, t) {
            if (this.minDate) {
                let r = this._dateAdapter.getYear(this.minDate)
                  , o = this._dateAdapter.getMonth(this.minDate);
                return e < r || e === r && t < o
            }
            return !1
        }
        _isRtl() {
            return this._dir && this._dir.value === "rtl"
        }
        _setSelectedMonth(e) {
            e instanceof et ? this._selectedMonth = this._getMonthInCurrentYear(e.start) || this._getMonthInCurrentYear(e.end) : this._selectedMonth = this._getMonthInCurrentYear(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(le),l(Wt, 8),l(Te, 8),l(Oe, 8))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-year-view"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(gn, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._matCalendarBody = o.first)
                }
            },
            inputs: {
                activeDate: "activeDate",
                selected: "selected",
                minDate: "minDate",
                maxDate: "maxDate",
                dateFilter: "dateFilter",
                dateClass: "dateClass"
            },
            outputs: {
                selectedChange: "selectedChange",
                monthSelected: "monthSelected",
                activeDateChange: "activeDateChange"
            },
            exportAs: ["matYearView"],
            standalone: !0,
            features: [L],
            decls: 5,
            vars: 9,
            consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
            template: function(t, r) {
                t & 1 && (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
                D(3, "th", 2),
                u()(),
                h(4, "tbody", 3),
                V("selectedValueChange", function(a) {
                    return r._monthSelected(a)
                })("activeDateChange", function(a) {
                    return r._updateActiveDate(a)
                })("keyup", function(a) {
                    return r._handleCalendarBodyKeyup(a)
                })("keydown", function(a) {
                    return r._handleCalendarBodyKeydown(a)
                }),
                u()()),
                t & 2 && (f(4),
                C("label", r._yearLabel)("rows", r._months)("todayValue", r._todayMonth)("startValue", r._selectedMonth)("endValue", r._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", r._dateAdapter.getMonth(r.activeDate)))
            },
            dependencies: [gn],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , xv = 1
  , kh = ( () => {
    class i {
        constructor(e, t, r, o, a) {
            this._intl = e,
            this.calendar = t,
            this._dateAdapter = r,
            this._dateFormats = o,
            this._id = `mat-calendar-header-${xv++}`,
            this._periodButtonLabelId = `${this._id}-period-label`,
            this.calendar.stateChanges.subscribe( () => a.markForCheck())
        }
        get periodButtonText() {
            return this.calendar.currentView == "month" ? this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase() : this.calendar.currentView == "year" ? this._dateAdapter.getYearName(this.calendar.activeDate) : this._intl.formatYearRange(...this._formatMinAndMaxYearLabels())
        }
        get periodButtonDescription() {
            return this.calendar.currentView == "month" ? this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase() : this.calendar.currentView == "year" ? this._dateAdapter.getYearName(this.calendar.activeDate) : this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels())
        }
        get periodButtonLabel() {
            return this.calendar.currentView == "month" ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel
        }
        get prevButtonLabel() {
            return {
                month: this._intl.prevMonthLabel,
                year: this._intl.prevYearLabel,
                "multi-year": this._intl.prevMultiYearLabel
            }[this.calendar.currentView]
        }
        get nextButtonLabel() {
            return {
                month: this._intl.nextMonthLabel,
                year: this._intl.nextYearLabel,
                "multi-year": this._intl.nextMultiYearLabel
            }[this.calendar.currentView]
        }
        currentPeriodClicked() {
            this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month"
        }
        previousClicked() {
            this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -Ye)
        }
        nextClicked() {
            this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : Ye)
        }
        previousEnabled() {
            return this.calendar.minDate ? !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate) : !0
        }
        nextEnabled() {
            return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate)
        }
        _isSameView(e, t) {
            return this.calendar.currentView == "month" ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(t) && this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(t) : this.calendar.currentView == "year" ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(t) : Ah(this._dateAdapter, e, t, this.calendar.minDate, this.calendar.maxDate)
        }
        _formatMinAndMaxYearLabels() {
            let t = this._dateAdapter.getYear(this.calendar.activeDate) - _r(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate)
              , r = t + Ye - 1
              , o = this._dateAdapter.getYearName(this._dateAdapter.createDate(t, 0, 1))
              , a = this._dateAdapter.getYearName(this._dateAdapter.createDate(r, 0, 1));
            return [o, a]
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(yr),l(Me( () => Ed)),l(Te, 8),l(Wt, 8),l(le))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-calendar-header"]],
            exportAs: ["matCalendarHeader"],
            standalone: !0,
            features: [L],
            ngContentSelectors: sv,
            decls: 13,
            vars: 11,
            consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], [1, "cdk-visually-hidden", 3, "id"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"]],
            template: function(t, r) {
                t & 1 && (ve(),
                h(0, "div", 0)(1, "div", 1)(2, "label", 2),
                _(3),
                u(),
                h(4, "button", 3),
                V("click", function() {
                    return r.currentPeriodClicked()
                }),
                h(5, "span", 4),
                _(6),
                u(),
                xn(),
                h(7, "svg", 5),
                D(8, "polygon", 6),
                u()(),
                Bd(),
                D(9, "div", 7),
                ee(10),
                h(11, "button", 8),
                V("click", function() {
                    return r.previousClicked()
                }),
                u(),
                h(12, "button", 9),
                V("click", function() {
                    return r.nextClicked()
                }),
                u()()()),
                t & 2 && (f(2),
                C("id", r._periodButtonLabelId),
                f(),
                me(r.periodButtonDescription),
                f(),
                Y("aria-label", r.periodButtonLabel)("aria-describedby", r._periodButtonLabelId),
                f(2),
                me(r.periodButtonText),
                f(),
                B("mat-calendar-invert", r.calendar.currentView !== "month"),
                f(4),
                C("disabled", !r.previousEnabled()),
                Y("aria-label", r.prevButtonLabel),
                f(),
                C("disabled", !r.nextEnabled()),
                Y("aria-label", r.nextButtonLabel))
            },
            dependencies: [nt, Ks],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , Ed = ( () => {
    class i {
        get startAt() {
            return this._startAt
        }
        set startAt(e) {
            this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get selected() {
            return this._selected
        }
        set selected(e) {
            e instanceof et ? this._selected = e : this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get minDate() {
            return this._minDate
        }
        set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get maxDate() {
            return this._maxDate
        }
        set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get activeDate() {
            return this._clampedActiveDate
        }
        set activeDate(e) {
            this._clampedActiveDate = this._dateAdapter.clampDate(e, this.minDate, this.maxDate),
            this.stateChanges.next(),
            this._changeDetectorRef.markForCheck()
        }
        get currentView() {
            return this._currentView
        }
        set currentView(e) {
            let t = this._currentView !== e ? e : null;
            this._currentView = e,
            this._moveFocusOnNextTick = !0,
            this._changeDetectorRef.markForCheck(),
            t && this.viewChanged.emit(t)
        }
        constructor(e, t, r, o) {
            this._dateAdapter = t,
            this._dateFormats = r,
            this._changeDetectorRef = o,
            this._moveFocusOnNextTick = !1,
            this.startView = "month",
            this.selectedChange = new M,
            this.yearSelected = new M,
            this.monthSelected = new M,
            this.viewChanged = new M(!0),
            this._userSelection = new M,
            this._userDragDrop = new M,
            this._activeDrag = null,
            this.stateChanges = new A,
            this._intlChanges = e.changes.subscribe( () => {
                o.markForCheck(),
                this.stateChanges.next()
            }
            )
        }
        ngAfterContentInit() {
            this._calendarHeaderPortal = new Ct(this.headerComponent || kh),
            this.activeDate = this.startAt || this._dateAdapter.today(),
            this._currentView = this.startView
        }
        ngAfterViewChecked() {
            this._moveFocusOnNextTick && (this._moveFocusOnNextTick = !1,
            this.focusActiveCell())
        }
        ngOnDestroy() {
            this._intlChanges.unsubscribe(),
            this.stateChanges.complete()
        }
        ngOnChanges(e) {
            let t = e.minDate && !this._dateAdapter.sameDate(e.minDate.previousValue, e.minDate.currentValue) ? e.minDate : void 0
              , r = e.maxDate && !this._dateAdapter.sameDate(e.maxDate.previousValue, e.maxDate.currentValue) ? e.maxDate : void 0
              , o = t || r || e.dateFilter;
            if (o && !o.firstChange) {
                let a = this._getCurrentViewComponent();
                a && (this._changeDetectorRef.detectChanges(),
                a._init())
            }
            this.stateChanges.next()
        }
        focusActiveCell() {
            this._getCurrentViewComponent()._focusActiveCell(!1)
        }
        updateTodaysDate() {
            this._getCurrentViewComponent()._init()
        }
        _dateSelected(e) {
            let t = e.value;
            (this.selected instanceof et || t && !this._dateAdapter.sameDate(t, this.selected)) && this.selectedChange.emit(t),
            this._userSelection.emit(e)
        }
        _yearSelectedInMultiYearView(e) {
            this.yearSelected.emit(e)
        }
        _monthSelectedInYearView(e) {
            this.monthSelected.emit(e)
        }
        _goToDateInView(e, t) {
            this.activeDate = e,
            this.currentView = t
        }
        _dragStarted(e) {
            this._activeDrag = e
        }
        _dragEnded(e) {
            this._activeDrag && (e.value && this._userDragDrop.emit(e),
            this._activeDrag = null)
        }
        _getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(yr),l(Te, 8),l(Wt, 8),l(le))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-calendar"]],
            viewQuery: function(t, r) {
                if (t & 1 && (se(xh, 5),
                se(Ch, 5),
                se(wh, 5)),
                t & 2) {
                    let o;
                    U(o = H()) && (r.monthView = o.first),
                    U(o = H()) && (r.yearView = o.first),
                    U(o = H()) && (r.multiYearView = o.first)
                }
            },
            hostAttrs: [1, "mat-calendar"],
            inputs: {
                headerComponent: "headerComponent",
                startAt: "startAt",
                startView: "startView",
                selected: "selected",
                minDate: "minDate",
                maxDate: "maxDate",
                dateFilter: "dateFilter",
                dateClass: "dateClass",
                comparisonStart: "comparisonStart",
                comparisonEnd: "comparisonEnd",
                startDateAccessibleName: "startDateAccessibleName",
                endDateAccessibleName: "endDateAccessibleName"
            },
            outputs: {
                selectedChange: "selectedChange",
                yearSelected: "yearSelected",
                monthSelected: "monthSelected",
                viewChanged: "viewChanged",
                _userSelection: "_userSelection",
                _userDragDrop: "_userDragDrop"
            },
            exportAs: ["matCalendar"],
            standalone: !0,
            features: [de([Ih]), he, L],
            decls: 5,
            vars: 2,
            consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
            template: function(t, r) {
                if (t & 1 && ($(0, dv, 0, 0, "ng-template", 0),
                h(1, "div", 1),
                $(2, lv, 1, 11)(3, cv, 1, 6)(4, uv, 1, 6),
                u()),
                t & 2) {
                    let o;
                    C("cdkPortalOutlet", r._calendarHeaderPortal),
                    f(2),
                    J(2, (o = r.currentView) === "month" ? 2 : o === "year" ? 3 : o === "multi-year" ? 4 : -1)
                }
            },
            dependencies: [gt, gu, xh, Ch, wh],
            styles: ['.mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}'],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , Dh = {
    transformPanel: Lt("transformPanel", [lt("void => enter-dropdown", dt("120ms cubic-bezier(0, 0, 0.2, 1)", _a([Ie({
        opacity: 0,
        transform: "scale(1, 0.8)"
    }), Ie({
        opacity: 1,
        transform: "scale(1, 1)"
    })]))), lt("void => enter-dialog", dt("150ms cubic-bezier(0, 0, 0.2, 1)", _a([Ie({
        opacity: 0,
        transform: "scale(0.7)"
    }), Ie({
        transform: "none",
        opacity: 1
    })]))), lt("* => void", dt("100ms linear", Ie({
        opacity: 0
    })))]),
    fadeInCalendar: Lt("fadeInCalendar", [Xe("void", Ie({
        opacity: 0
    })), Xe("enter", Ie({
        opacity: 1
    })), lt("void => *", dt("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))])
}
  , wv = 0
  , Rh = new x("mat-datepicker-scroll-strategy",{
    providedIn: "root",
    factory: () => {
        let i = g(Ne);
        return () => i.scrollStrategies.reposition()
    }
});
function Cv(i) {
    return () => i.scrollStrategies.reposition()
}
var Dv = {
    provide: Rh,
    deps: [Ne],
    useFactory: Cv
}
  , Th = ( () => {
    class i {
        constructor(e, t, r, o, a, s) {
            this._elementRef = e,
            this._changeDetectorRef = t,
            this._globalModel = r,
            this._dateAdapter = o,
            this._rangeSelectionStrategy = a,
            this._subscriptions = new ce,
            this._animationDone = new A,
            this._isAnimating = !1,
            this._actionsPortal = null,
            this._closeButtonText = s.closeCalendarLabel
        }
        ngOnInit() {
            this._animationState = this.datepicker.touchUi ? "enter-dialog" : "enter-dropdown"
        }
        ngAfterViewInit() {
            this._subscriptions.add(this.datepicker.stateChanges.subscribe( () => {
                this._changeDetectorRef.markForCheck()
            }
            )),
            this._calendar.focusActiveCell()
        }
        ngOnDestroy() {
            this._subscriptions.unsubscribe(),
            this._animationDone.complete()
        }
        _handleUserSelection(e) {
            let t = this._model.selection
              , r = e.value
              , o = t instanceof et;
            if (o && this._rangeSelectionStrategy) {
                let a = this._rangeSelectionStrategy.selectionFinished(r, t, e.event);
                this._model.updateSelection(a, this)
            } else
                r && (o || !this._dateAdapter.sameDate(r, t)) && this._model.add(r);
            (!this._model || this._model.isComplete()) && !this._actionsPortal && this.datepicker.close()
        }
        _handleUserDragDrop(e) {
            this._model.updateSelection(e.value, this)
        }
        _startExitAnimation() {
            this._animationState = "void",
            this._changeDetectorRef.markForCheck()
        }
        _handleAnimationEvent(e) {
            this._isAnimating = e.phaseName === "start",
            this._isAnimating || this._animationDone.next()
        }
        _getSelected() {
            return this._model.selection
        }
        _applyPendingSelection() {
            this._model !== this._globalModel && this._globalModel.updateSelection(this._model.selection, this)
        }
        _assignActions(e, t) {
            this._model = e ? this._globalModel.clone() : this._globalModel,
            this._actionsPortal = e,
            t && this._changeDetectorRef.detectChanges()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(le),l(vr),l(Te),l(Mh, 8),l(yr))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-datepicker-content"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(Ed, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._calendar = o.first)
                }
            },
            hostAttrs: [1, "mat-datepicker-content"],
            hostVars: 5,
            hostBindings: function(t, r) {
                t & 1 && il("@transformPanel.start", function(a) {
                    return r._handleAnimationEvent(a)
                })("@transformPanel.done", function(a) {
                    return r._handleAnimationEvent(a)
                }),
                t & 2 && (tl("@transformPanel", r._animationState),
                We(r.color ? "mat-" + r.color : ""),
                B("mat-datepicker-content-touch", r.datepicker.touchUi))
            },
            inputs: {
                color: "color"
            },
            exportAs: ["matDatepickerContent"],
            standalone: !0,
            features: [L],
            decls: 5,
            vars: 27,
            consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
            template: function(t, r) {
                if (t & 1 && (h(0, "div", 0)(1, "mat-calendar", 1),
                V("yearSelected", function(a) {
                    return r.datepicker._selectYear(a)
                })("monthSelected", function(a) {
                    return r.datepicker._selectMonth(a)
                })("viewChanged", function(a) {
                    return r.datepicker._viewChanged(a)
                })("_userSelection", function(a) {
                    return r._handleUserSelection(a)
                })("_userDragDrop", function(a) {
                    return r._handleUserDragDrop(a)
                }),
                u(),
                $(2, hv, 0, 0, "ng-template", 2),
                h(3, "button", 3),
                V("focus", function() {
                    return r._closeButtonFocused = !0
                })("blur", function() {
                    return r._closeButtonFocused = !1
                })("click", function() {
                    return r.datepicker.close()
                }),
                _(4),
                u()()),
                t & 2) {
                    let o;
                    B("mat-datepicker-content-container-with-custom-header", r.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", r._actionsPortal),
                    Y("aria-modal", !0)("aria-labelledby", (o = r._dialogLabelId) !== null && o !== void 0 ? o : void 0),
                    f(),
                    We(r.datepicker.panelClass),
                    C("id", r.datepicker.id)("startAt", r.datepicker.startAt)("startView", r.datepicker.startView)("minDate", r.datepicker._getMinDate())("maxDate", r.datepicker._getMaxDate())("dateFilter", r.datepicker._getDateFilter())("headerComponent", r.datepicker.calendarHeaderComponent)("selected", r._getSelected())("dateClass", r.datepicker.dateClass)("comparisonStart", r.comparisonStart)("comparisonEnd", r.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", r.startDateAccessibleName)("endDateAccessibleName", r.endDateAccessibleName),
                    f(),
                    C("cdkPortalOutlet", r._actionsPortal),
                    f(),
                    B("cdk-visually-hidden", !r._closeButtonFocused),
                    C("color", r.color || "primary"),
                    f(),
                    me(r._closeButtonText)
                }
            },
            dependencies: [pu, Ed, gt, nt],
            styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
            encapsulation: 2,
            data: {
                animation: [Dh.transformPanel, Dh.fadeInCalendar]
            },
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , Eh = ( () => {
    class i {
        get startAt() {
            return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null)
        }
        set startAt(e) {
            this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))
        }
        get color() {
            return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0)
        }
        set color(e) {
            this._color = e
        }
        get disabled() {
            return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled
        }
        set disabled(e) {
            e !== this._disabled && (this._disabled = e,
            this.stateChanges.next(void 0))
        }
        get panelClass() {
            return this._panelClass
        }
        set panelClass(e) {
            this._panelClass = su(e)
        }
        get opened() {
            return this._opened
        }
        set opened(e) {
            e ? this.open() : this.close()
        }
        _getMinDate() {
            return this.datepickerInput && this.datepickerInput.min
        }
        _getMaxDate() {
            return this.datepickerInput && this.datepickerInput.max
        }
        _getDateFilter() {
            return this.datepickerInput && this.datepickerInput.dateFilter
        }
        constructor(e, t, r, o, a, s, d) {
            this._overlay = e,
            this._ngZone = t,
            this._viewContainerRef = r,
            this._dateAdapter = a,
            this._dir = s,
            this._model = d,
            this._inputStateChanges = ce.EMPTY,
            this._document = g(O),
            this.startView = "month",
            this.touchUi = !1,
            this.xPosition = "start",
            this.yPosition = "below",
            this.restoreFocus = !0,
            this.yearSelected = new M,
            this.monthSelected = new M,
            this.viewChanged = new M(!0),
            this.openedStream = new M,
            this.closedStream = new M,
            this._opened = !1,
            this.id = `mat-datepicker-${wv++}`,
            this._focusedElementBeforeOpen = null,
            this._backdropHarnessClass = `${this.id}-backdrop`,
            this.stateChanges = new A,
            this._dateAdapter,
            this._scrollStrategy = o
        }
        ngOnChanges(e) {
            let t = e.xPosition || e.yPosition;
            if (t && !t.firstChange && this._overlayRef) {
                let r = this._overlayRef.getConfig().positionStrategy;
                r instanceof gr && (this._setConnectedPositions(r),
                this.opened && this._overlayRef.updatePosition())
            }
            this.stateChanges.next(void 0)
        }
        ngOnDestroy() {
            this._destroyOverlay(),
            this.close(),
            this._inputStateChanges.unsubscribe(),
            this.stateChanges.complete()
        }
        select(e) {
            this._model.add(e)
        }
        _selectYear(e) {
            this.yearSelected.emit(e)
        }
        _selectMonth(e) {
            this.monthSelected.emit(e)
        }
        _viewChanged(e) {
            this.viewChanged.emit(e)
        }
        registerInput(e) {
            return this.datepickerInput,
            this._inputStateChanges.unsubscribe(),
            this.datepickerInput = e,
            this._inputStateChanges = e.stateChanges.subscribe( () => this.stateChanges.next(void 0)),
            this._model
        }
        registerActions(e) {
            this._actionsPortal,
            this._actionsPortal = e,
            this._componentRef?.instance._assignActions(e, !0)
        }
        removeActions(e) {
            e === this._actionsPortal && (this._actionsPortal = null,
            this._componentRef?.instance._assignActions(null, !0))
        }
        open() {
            this._opened || this.disabled || this._componentRef?.instance._isAnimating || (this.datepickerInput,
            this._focusedElementBeforeOpen = mt(),
            this._openOverlay(),
            this._opened = !0,
            this.openedStream.emit())
        }
        close() {
            if (!this._opened || this._componentRef?.instance._isAnimating)
                return;
            let e = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus == "function"
              , t = () => {
                this._opened && (this._opened = !1,
                this.closedStream.emit())
            }
            ;
            if (this._componentRef) {
                let {instance: r, location: o} = this._componentRef;
                r._startExitAnimation(),
                r._animationDone.pipe(fe(1)).subscribe( () => {
                    let a = this._document.activeElement;
                    e && (!a || a === this._document.activeElement || o.nativeElement.contains(a)) && this._focusedElementBeforeOpen.focus(),
                    this._focusedElementBeforeOpen = null,
                    this._destroyOverlay()
                }
                )
            }
            e ? setTimeout(t) : t()
        }
        _applyPendingSelection() {
            this._componentRef?.instance?._applyPendingSelection()
        }
        _forwardContentValues(e) {
            e.datepicker = this,
            e.color = this.color,
            e._dialogLabelId = this.datepickerInput.getOverlayLabelId(),
            e._assignActions(this._actionsPortal, !1)
        }
        _openOverlay() {
            this._destroyOverlay();
            let e = this.touchUi
              , t = new Ct(Th,this._viewContainerRef)
              , r = this._overlayRef = this._overlay.create(new Di({
                positionStrategy: e ? this._getDialogStrategy() : this._getDropdownStrategy(),
                hasBackdrop: !0,
                backdropClass: [e ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
                direction: this._dir,
                scrollStrategy: e ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
                panelClass: `mat-datepicker-${e ? "dialog" : "popup"}`
            }));
            this._getCloseStream(r).subscribe(o => {
                o && o.preventDefault(),
                this.close()
            }
            ),
            r.keydownEvents().subscribe(o => {
                let a = o.keyCode;
                (a === 38 || a === 40 || a === 37 || a === 39 || a === 33 || a === 34) && o.preventDefault()
            }
            ),
            this._componentRef = r.attach(t),
            this._forwardContentValues(this._componentRef.instance),
            e || this._ngZone.onStable.pipe(fe(1)).subscribe( () => r.updatePosition())
        }
        _destroyOverlay() {
            this._overlayRef && (this._overlayRef.dispose(),
            this._overlayRef = this._componentRef = null)
        }
        _getDialogStrategy() {
            return this._overlay.position().global().centerHorizontally().centerVertically()
        }
        _getDropdownStrategy() {
            let e = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();
            return this._setConnectedPositions(e)
        }
        _setConnectedPositions(e) {
            let t = this.xPosition === "end" ? "end" : "start"
              , r = t === "start" ? "end" : "start"
              , o = this.yPosition === "above" ? "bottom" : "top"
              , a = o === "top" ? "bottom" : "top";
            return e.withPositions([{
                originX: t,
                originY: a,
                overlayX: t,
                overlayY: o
            }, {
                originX: t,
                originY: o,
                overlayX: t,
                overlayY: a
            }, {
                originX: r,
                originY: a,
                overlayX: r,
                overlayY: o
            }, {
                originX: r,
                originY: o,
                overlayX: r,
                overlayY: a
            }])
        }
        _getCloseStream(e) {
            let t = ["ctrlKey", "shiftKey", "metaKey"];
            return ot(e.backdropClick(), e.detachments(), e.keydownEvents().pipe(pe(r => r.keyCode === 27 && !je(r) || this.datepickerInput && je(r, "altKey") && r.keyCode === 38 && t.every(o => !je(r, o)))))
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(Ne),l(T),l(st),l(Rh),l(Te, 8),l(Oe, 8),l(vr))
        }
        }static{this.\u0275dir = I({
            type: i,
            inputs: {
                calendarHeaderComponent: "calendarHeaderComponent",
                startAt: "startAt",
                startView: "startView",
                color: "color",
                touchUi: [w.HasDecoratorInputTransform, "touchUi", "touchUi", X],
                disabled: [w.HasDecoratorInputTransform, "disabled", "disabled", X],
                xPosition: "xPosition",
                yPosition: "yPosition",
                restoreFocus: [w.HasDecoratorInputTransform, "restoreFocus", "restoreFocus", X],
                dateClass: "dateClass",
                panelClass: "panelClass",
                opened: [w.HasDecoratorInputTransform, "opened", "opened", X]
            },
            outputs: {
                yearSelected: "yearSelected",
                monthSelected: "monthSelected",
                viewChanged: "viewChanged",
                openedStream: "opened",
                closedStream: "closed"
            },
            features: [be, he]
        })
        }
    }
    return i
}
)()
  , Fh = ( () => {
    class i extends Eh {
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-datepicker"]],
            exportAs: ["matDatepicker"],
            standalone: !0,
            features: [de([Ih, {
                provide: Eh,
                useExisting: i
            }]), Z, L],
            decls: 0,
            vars: 0,
            template: function(t, r) {},
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)()
  , fn = class {
    constructor(n, e) {
        this.target = n,
        this.targetElement = e,
        this.value = this.target.value
    }
}
  , Ev = ( () => {
    class i {
        get value() {
            return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue
        }
        set value(e) {
            this._assignValueProgrammatically(e)
        }
        get disabled() {
            return !!this._disabled || this._parentDisabled()
        }
        set disabled(e) {
            let t = e
              , r = this._elementRef.nativeElement;
            this._disabled !== t && (this._disabled = t,
            this.stateChanges.next(void 0)),
            t && this._isInitialized && r.blur && r.blur()
        }
        _getValidators() {
            return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]
        }
        _registerModel(e) {
            this._model = e,
            this._valueChangesSubscription.unsubscribe(),
            this._pendingValue && this._assignValue(this._pendingValue),
            this._valueChangesSubscription = this._model.selectionChanged.subscribe(t => {
                if (this._shouldHandleChangeEvent(t)) {
                    let r = this._getValueFromModel(t.selection);
                    this._lastValueValid = this._isValidValue(r),
                    this._cvaOnChange(r),
                    this._onTouched(),
                    this._formatValue(r),
                    this.dateInput.emit(new fn(this,this._elementRef.nativeElement)),
                    this.dateChange.emit(new fn(this,this._elementRef.nativeElement))
                }
            }
            )
        }
        constructor(e, t, r) {
            this._elementRef = e,
            this._dateAdapter = t,
            this._dateFormats = r,
            this.dateChange = new M,
            this.dateInput = new M,
            this.stateChanges = new A,
            this._onTouched = () => {}
            ,
            this._validatorOnChange = () => {}
            ,
            this._cvaOnChange = () => {}
            ,
            this._valueChangesSubscription = ce.EMPTY,
            this._localeSubscription = ce.EMPTY,
            this._parseValidator = () => this._lastValueValid ? null : {
                matDatepickerParse: {
                    text: this._elementRef.nativeElement.value
                }
            },
            this._filterValidator = o => {
                let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(o.value));
                return !a || this._matchesFilter(a) ? null : {
                    matDatepickerFilter: !0
                }
            }
            ,
            this._minValidator = o => {
                let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(o.value))
                  , s = this._getMinDate();
                return !s || !a || this._dateAdapter.compareDate(s, a) <= 0 ? null : {
                    matDatepickerMin: {
                        min: s,
                        actual: a
                    }
                }
            }
            ,
            this._maxValidator = o => {
                let a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(o.value))
                  , s = this._getMaxDate();
                return !s || !a || this._dateAdapter.compareDate(s, a) >= 0 ? null : {
                    matDatepickerMax: {
                        max: s,
                        actual: a
                    }
                }
            }
            ,
            this._lastValueValid = !1,
            this._localeSubscription = t.localeChanges.subscribe( () => {
                this._assignValueProgrammatically(this.value)
            }
            )
        }
        ngAfterViewInit() {
            this._isInitialized = !0
        }
        ngOnChanges(e) {
            Iv(e, this._dateAdapter) && this.stateChanges.next(void 0)
        }
        ngOnDestroy() {
            this._valueChangesSubscription.unsubscribe(),
            this._localeSubscription.unsubscribe(),
            this.stateChanges.complete()
        }
        registerOnValidatorChange(e) {
            this._validatorOnChange = e
        }
        validate(e) {
            return this._validator ? this._validator(e) : null
        }
        writeValue(e) {
            this._assignValueProgrammatically(e)
        }
        registerOnChange(e) {
            this._cvaOnChange = e
        }
        registerOnTouched(e) {
            this._onTouched = e
        }
        setDisabledState(e) {
            this.disabled = e
        }
        _onKeydown(e) {
            let t = ["ctrlKey", "shiftKey", "metaKey"];
            je(e, "altKey") && e.keyCode === 40 && t.every(o => !je(e, o)) && !this._elementRef.nativeElement.readOnly && (this._openPopup(),
            e.preventDefault())
        }
        _onInput(e) {
            let t = this._lastValueValid
              , r = this._dateAdapter.parse(e, this._dateFormats.parse.dateInput);
            this._lastValueValid = this._isValidValue(r),
            r = this._dateAdapter.getValidDateOrNull(r);
            let o = !this._dateAdapter.sameDate(r, this.value);
            !r || o ? this._cvaOnChange(r) : (e && !this.value && this._cvaOnChange(r),
            t !== this._lastValueValid && this._validatorOnChange()),
            o && (this._assignValue(r),
            this.dateInput.emit(new fn(this,this._elementRef.nativeElement)))
        }
        _onChange() {
            this.dateChange.emit(new fn(this,this._elementRef.nativeElement))
        }
        _onBlur() {
            this.value && this._formatValue(this.value),
            this._onTouched()
        }
        _formatValue(e) {
            this._elementRef.nativeElement.value = e != null ? this._dateAdapter.format(e, this._dateFormats.display.dateInput) : ""
        }
        _assignValue(e) {
            this._model ? (this._assignValueToModel(e),
            this._pendingValue = null) : this._pendingValue = e
        }
        _isValidValue(e) {
            return !e || this._dateAdapter.isValid(e)
        }
        _parentDisabled() {
            return !1
        }
        _assignValueProgrammatically(e) {
            e = this._dateAdapter.deserialize(e),
            this._lastValueValid = this._isValidValue(e),
            e = this._dateAdapter.getValidDateOrNull(e),
            this._assignValue(e),
            this._formatValue(e)
        }
        _matchesFilter(e) {
            let t = this._getDateFilter();
            return !t || t(e)
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(Te, 8),l(Wt, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            inputs: {
                value: "value",
                disabled: [w.HasDecoratorInputTransform, "disabled", "disabled", X]
            },
            outputs: {
                dateChange: "dateChange",
                dateInput: "dateInput"
            },
            standalone: !0,
            features: [be, he]
        })
        }
    }
    return i
}
)();
function Iv(i, n) {
    let e = Object.keys(i);
    for (let t of e) {
        let {previousValue: r, currentValue: o} = i[t];
        if (n.isDateInstance(r) && n.isDateInstance(o)) {
            if (!n.sameDate(r, o))
                return !0
        } else
            return !0
    }
    return !1
}
var Mv = {
    provide: qi,
    useExisting: Me( () => Jo),
    multi: !0
}
  , Av = {
    provide: xt,
    useExisting: Me( () => Jo),
    multi: !0
}
  , Jo = ( () => {
    class i extends Ev {
        set matDatepicker(e) {
            e && (this._datepicker = e,
            this._closedSubscription = e.closedStream.subscribe( () => this._onTouched()),
            this._registerModel(e.registerInput(this)))
        }
        get min() {
            return this._min
        }
        set min(e) {
            let t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
            this._dateAdapter.sameDate(t, this._min) || (this._min = t,
            this._validatorOnChange())
        }
        get max() {
            return this._max
        }
        set max(e) {
            let t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
            this._dateAdapter.sameDate(t, this._max) || (this._max = t,
            this._validatorOnChange())
        }
        get dateFilter() {
            return this._dateFilter
        }
        set dateFilter(e) {
            let t = this._matchesFilter(this.value);
            this._dateFilter = e,
            this._matchesFilter(this.value) !== t && this._validatorOnChange()
        }
        constructor(e, t, r, o) {
            super(e, t, r),
            this._formField = o,
            this._closedSubscription = ce.EMPTY,
            this._validator = Re.compose(super._getValidators())
        }
        getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef
        }
        getOverlayLabelId() {
            return this._formField ? this._formField.getLabelId() : this._elementRef.nativeElement.getAttribute("aria-labelledby")
        }
        getThemePalette() {
            return this._formField ? this._formField.color : void 0
        }
        getStartValue() {
            return this.value
        }
        ngOnDestroy() {
            super.ngOnDestroy(),
            this._closedSubscription.unsubscribe()
        }
        _openPopup() {
            this._datepicker && this._datepicker.open()
        }
        _getValueFromModel(e) {
            return e
        }
        _assignValueToModel(e) {
            this._model && this._model.updateSelection(e, this)
        }
        _getMinDate() {
            return this._min
        }
        _getMaxDate() {
            return this._max
        }
        _getDateFilter() {
            return this._dateFilter
        }
        _shouldHandleChangeEvent(e) {
            return e.source !== this
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(Te, 8),l(Wt, 8),l(mr, 8))
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["input", "matDatepicker", ""]],
            hostAttrs: [1, "mat-datepicker-input"],
            hostVars: 6,
            hostBindings: function(t, r) {
                t & 1 && V("input", function(a) {
                    return r._onInput(a.target.value)
                })("change", function() {
                    return r._onChange()
                })("blur", function() {
                    return r._onBlur()
                })("keydown", function(a) {
                    return r._onKeydown(a)
                }),
                t & 2 && (Ee("disabled", r.disabled),
                Y("aria-haspopup", r._datepicker ? "dialog" : null)("aria-owns", (r._datepicker == null ? null : r._datepicker.opened) && r._datepicker.id || null)("min", r.min ? r._dateAdapter.toIso8601(r.min) : null)("max", r.max ? r._dateAdapter.toIso8601(r.max) : null)("data-mat-calendar", r._datepicker ? r._datepicker.id : null))
            },
            inputs: {
                matDatepicker: "matDatepicker",
                min: "min",
                max: "max",
                dateFilter: [w.None, "matDatepickerFilter", "dateFilter"]
            },
            exportAs: ["matDatepickerInput"],
            standalone: !0,
            features: [de([Mv, Av, {
                provide: ed,
                useExisting: i
            }]), Z]
        })
        }
    }
    return i
}
)()
  , Sv = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "matDatepickerToggleIcon", ""]],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Id = ( () => {
    class i {
        get disabled() {
            return this._disabled === void 0 && this.datepicker ? this.datepicker.disabled : !!this._disabled
        }
        set disabled(e) {
            this._disabled = e
        }
        constructor(e, t, r) {
            this._intl = e,
            this._changeDetectorRef = t,
            this._stateChanges = ce.EMPTY;
            let o = Number(r);
            this.tabIndex = o || o === 0 ? o : null
        }
        ngOnChanges(e) {
            e.datepicker && this._watchStateChanges()
        }
        ngOnDestroy() {
            this._stateChanges.unsubscribe()
        }
        ngAfterContentInit() {
            this._watchStateChanges()
        }
        _open(e) {
            this.datepicker && !this.disabled && (this.datepicker.open(),
            e.stopPropagation())
        }
        _watchStateChanges() {
            let e = this.datepicker ? this.datepicker.stateChanges : E()
              , t = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : E()
              , r = this.datepicker ? ot(this.datepicker.openedStream, this.datepicker.closedStream) : E();
            this._stateChanges.unsubscribe(),
            this._stateChanges = ot(this._intl.changes, e, t, r).subscribe( () => this._changeDetectorRef.markForCheck())
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(yr),l(le),Tt("tabindex"))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-datepicker-toggle"]],
            contentQueries: function(t, r, o) {
                if (t & 1 && xe(o, Sv, 5),
                t & 2) {
                    let a;
                    U(a = H()) && (r._customIcon = a.first)
                }
            },
            viewQuery: function(t, r) {
                if (t & 1 && se(mv, 5),
                t & 2) {
                    let o;
                    U(o = H()) && (r._button = o.first)
                }
            },
            hostAttrs: [1, "mat-datepicker-toggle"],
            hostVars: 8,
            hostBindings: function(t, r) {
                t & 1 && V("click", function(a) {
                    return r._open(a)
                }),
                t & 2 && (Y("tabindex", null)("data-mat-calendar", r.datepicker ? r.datepicker.id : null),
                B("mat-datepicker-toggle-active", r.datepicker && r.datepicker.opened)("mat-accent", r.datepicker && r.datepicker.color === "accent")("mat-warn", r.datepicker && r.datepicker.color === "warn"))
            },
            inputs: {
                datepicker: [w.None, "for", "datepicker"],
                tabIndex: "tabIndex",
                ariaLabel: [w.None, "aria-label", "ariaLabel"],
                disabled: [w.HasDecoratorInputTransform, "disabled", "disabled", X],
                disableRipple: "disableRipple"
            },
            exportAs: ["matDatepickerToggle"],
            standalone: !0,
            features: [be, he, L],
            ngContentSelectors: fv,
            decls: 4,
            vars: 6,
            consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
            template: function(t, r) {
                t & 1 && (ve(pv),
                h(0, "button", 1, 0),
                $(2, gv, 2, 0, ":svg:svg", 2),
                ee(3),
                u()),
                t & 2 && (C("disabled", r.disabled)("disableRipple", r.disableRipple),
                Y("aria-haspopup", r.datepicker ? "dialog" : null)("aria-label", r.ariaLabel || r._intl.openCalendarLabel)("tabindex", r.disabled ? -1 : r.tabIndex),
                f(2),
                J(2, r._customIcon ? -1 : 2))
            },
            dependencies: [Ks],
            styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
            encapsulation: 2,
            changeDetection: 0
        })
        }
    }
    return i
}
)();
var Oh = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275mod = z({
            type: i
        })
        }static{this.\u0275inj = j({
            providers: [yr, Dv],
            imports: [li, ft, Ko, _u, Zt, _e, Th, Id, kh, Xo]
        })
        }
    }
    return i
}
)();
var Md = ( () => {
    class i {
        constructor(e, t, r) {
            this.activatedRoute = e,
            this.http = t,
            this.titleService = r,
            this.isFormValid = !1,
            this.title = "nebosh-angular",
            this.token = "",
            this._formBuilder = g(Mo),
            this.disclaimerForm = this._formBuilder.group({
                accepted: [!1, Re.required]
            }),
            this.yourDetailsForm = this._formBuilder.group({
                yourName: ["", Re.required],
                yourOrganisation: ["", Re.required],
                yourEmail: ["", Re.required]
            }),
            this.learnerDetailsForm = this._formBuilder.group({
                learnerName: ["", Re.required],
                logNumber: ["", Re.required],
                dateOfAchievement: ["", Re.required]
            });
            let o = g(ko);
            this.stepperOrientation = o.observe("(min-width: 800px)").pipe(N( ({matches: a}) => a ? "horizontal" : "vertical")),
            this.learnerDetailsForm.statusChanges.subscribe(a => {
                this.learnerDetailsForm.enabled && (this.isFormValid = a === "VALID")
            }
            )
        }
        ngOnInit() {
            this.titleService.setTitle("nebosh VALIDATION"),
            setTimeout(() => {
              // alert the current active url using javascript way
              // alert(window.location.href);
              // replace the # in the url with ''
              const currentUrl = window.location.href;

                // Check if the URL contains "#/"
                if (currentUrl.includes("#/")) {
                    // Replace "#/" with ""
                    const updatedUrl = currentUrl.replace("#/", "");

                    // Update the browser's address bar without reloading the page
                    window.history.replaceState(null, "", updatedUrl);
                }
                var url = window.location.href;

              this.activatedRoute.paramMap.subscribe(e => {
                // let t = e.get("id");
                let t = url.split("/").pop();
                t && (this.token = t,
                this.fetchDetails(t))
            }
            )
          }, 1000);
            
        }
        fetchDetails(e) {
            let baseUrl = window.location.origin;
            // this.http.get(`https://nebosh.azureswebsite.net/api/details/${e}`).subscribe(t => {
            this.http.get(`${baseUrl}/api/details/${e}`).subscribe(t => {
                this.learnerDetailsForm.patchValue({
                    learnerName: t.student_name ?? "",
                    logNumber: t.certificate_log_number ?? "",
                    dateOfAchievement: t.date_awarded ?? ""
                }),
                this.learnerDetailsForm.markAllAsTouched(),
                this.isFormValid = this.learnerDetailsForm.valid,
                this.learnerDetailsForm.disable(),
                console.log(this.isFormValid)
            }
            )
        }
        onSubmit() {
            let e = this.yourDetailsForm.value
              , t = this.learnerDetailsForm.value
              , r = this.token
              , o = ie(v(v({}, e), t), {
                token: r
            });
            // var a = "https://nebosh.azureswebsite.net/api/send-request";
            // this.disclaimerForm.valid && this.yourDetailsForm.valid && this.isFormValid && this.http.post(a, o).subscribe({
            // conver the request to get method and pass the data as query string Validation/RequestValidation
            let baseUrl = window.location.origin;
            var a = `${baseUrl}/Validation/RequestValidation?learnerName=${t.learnerName}&logNumber=${t.logNumber}&dateOfAchievement=${t.dateOfAchievement}&requesterName=${e.yourName}&requesterOrganisation=${e.yourOrganisation}&requesterEmail=${e.yourEmail}&certificateKey=${r}`;
            this.disclaimerForm.valid && this.yourDetailsForm.valid && this.isFormValid && this.http.get(a).subscribe({
                next: s => {
                    this.disclaimerForm.reset(),
                    this.yourDetailsForm.reset(),
                    this.learnerDetailsForm.reset()
                }
                ,
                error: s => {}
            })
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(ut),l(ci),l(Oi))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-validation"]],
            standalone: !0,
            features: [de([{
                provide: No,
                useValue: "en-GB"
            }, Iu()]), L],
            decls: 106,
            vars: 14,
            consts: [["stepper", ""], ["picker", ""], ["linear", "", 3, "orientation"], ["label", "Disclaimer", 3, "stepControl"], [3, "formGroup"], [1, "fields-container"], [1, "text-center"], [1, "text-left"], [1, "field-container"], ["formControlName", "accepted", "id", "mat-mdc-slide-toggle-1", "required", ""], [1, "nav-container"], [2, "flex-grow", "1"], ["mat-button", "", "matStepperNext", "", "type", "submit", 3, "disabled"], ["label", "Your Details", 3, "stepControl"], [1, "full-width"], ["matInput", "", "placeholder", "Enter your name...", "formControlName", "yourName", "required", ""], ["matInput", "", "placeholder", "Enter your Organsiation's name...", "formControlName", "yourOrganisation", "required", ""], ["matInput", "", "placeholder", "Enter your email...", "formControlName", "yourEmail", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", "", 3, "disabled"], ["label", "Learner Details", 3, "stepControl"], ["matInput", "", "placeholder", "Enter Learner Name...", "formControlName", "learnerName", "required", ""], ["matInput", "", "placeholder", "Enter Master Log Number...", "formControlName", "logNumber", "required", ""], ["matInput", "", "formControlName", "dateOfAchievement", "placeholder", "Date of achievement...", "required", "", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["mat-button", "", "matStepperNext", "", 3, "click", "disabled"], ["label", "Finished"], [1, "results-container"], [1, "result-text"], [2, "text-decoration", "underline"], ["href", "https://www.nebosh.org.uk/policies-and-procedures/verifications/"], ["href", "https://www.nebosh.org.uk/home/"]],
            template: function(t, r) {
                if (t & 1) {
                    let o = Se();
                    h(0, "mat-stepper", 2, 0),
                    nl(2, "async"),
                    h(3, "mat-step", 3)(4, "form", 4)(5, "div", 5)(6, "h3", 6),
                    _(7, "IMPORTANT, PLEASE READ BEFORE CONTINUING"),
                    u(),
                    h(8, "h5", 7),
                    _(9, " NEBOSH takes the security of personal data and NEBOSH certificates extremely seriously. As part of the verification process, NEBOSH will email the learner that was originally issued this certificate to authenticate your request. "),
                    u(),
                    h(10, "h5", 7),
                    _(11, " To allow the learner to identify who is requesting information relating to them, your name and organisation will be provided to the learner to allow them to authorise your request. "),
                    u(),
                    h(12, "h5", 7),
                    _(13, " Your email address will be used by NEBOSH to confirm the outcome of your request within 2 working days of submission. "),
                    u(),
                    h(14, "h5", 7)(15, "strong"),
                    _(16, "Please note: "),
                    u(),
                    _(17, "The outcome of this request will be recorded and held by NEBOSH for monitoring purposes. This includes your name, organisation and email address. Please tick the box below to confirm your acceptance or contact NEBOSH "),
                    u(),
                    h(18, "div", 8)(19, "mat-slide-toggle", 9),
                    _(20, " I confirm I am happy for NEBOSH to store and use my details, as detailed above "),
                    h(21, "strong"),
                    _(22, "tick box, must be ticked to proceed"),
                    u()()(),
                    h(23, "div", 10),
                    D(24, "div")(25, "div", 11),
                    h(26, "button", 12),
                    _(27, " Next "),
                    u()()()()(),
                    h(28, "mat-step", 13)(29, "form", 4)(30, "div", 5)(31, "h3", 6),
                    _(32, "Your Details"),
                    u(),
                    h(33, "div", 8)(34, "mat-form-field", 14)(35, "mat-label"),
                    _(36, "Your name"),
                    u(),
                    D(37, "input", 15),
                    u()(),
                    h(38, "div", 8)(39, "mat-form-field", 14)(40, "mat-label"),
                    _(41, "Your Organisation"),
                    u(),
                    D(42, "input", 16),
                    u()(),
                    h(43, "div", 8)(44, "mat-form-field", 14)(45, "mat-label"),
                    _(46, "Your Email"),
                    u(),
                    D(47, "input", 17),
                    u()(),
                    h(48, "div", 10)(49, "button", 18),
                    _(50, "Back"),
                    u(),
                    D(51, "div", 11),
                    h(52, "button", 19),
                    _(53, " Next "),
                    u()()()()(),
                    h(54, "mat-step", 20)(55, "form", 4)(56, "div", 5)(57, "h3", 6),
                    _(58, " To verify a certificate or parchment, please enter the following pieces of information exactly as they appear on the document "),
                    u(),
                    h(59, "div", 8)(60, "mat-form-field", 14)(61, "mat-label"),
                    _(62, "Learner Name"),
                    u(),
                    D(63, "input", 21),
                    u()(),
                    h(64, "div", 8)(65, "mat-form-field", 14)(66, "mat-label"),
                    _(67, "Certificate Master Log Number"),
                    u(),
                    D(68, "input", 22),
                    u()(),
                    h(69, "div", 8)(70, "mat-form-field", 14)(71, "mat-label"),
                    _(72, "Date of achievement"),
                    u(),
                    D(73, "input", 23),
                    h(74, "mat-hint"),
                    _(75, "dd/mm/yyyy"),
                    u(),
                    D(76, "mat-datepicker-toggle", 24)(77, "mat-datepicker", null, 1),
                    u()(),
                    h(79, "div", 10)(80, "button", 18),
                    _(81, "Back"),
                    u(),
                    D(82, "div", 11),
                    h(83, "button", 25),
                    V("click", function() {
                        return oe(o),
                        ae(r.onSubmit())
                    }),
                    _(84, " Send Request "),
                    u()()()()(),
                    h(85, "mat-step", 26)(86, "div", 27)(87, "h3", 6),
                    _(88, " Thank you for your request to verify a NEBOSH certificate. Your request has been sent to the learner that was issued this certificate for authentication. "),
                    u(),
                    h(89, "div", 28),
                    _(90, " Verification of this document is "),
                    h(91, "strong", 29),
                    _(92, "not"),
                    u(),
                    _(93, " complete until you have received formal verification by email, "),
                    h(94, "strong"),
                    _(95, "from NEBOSH"),
                    u()(),
                    h(96, "div", 28),
                    _(97, " An email will be sent to you within 2 working days confirming the outcome of your request. "),
                    u(),
                    h(98, "div", 28),
                    _(99, " Full information of our "),
                    h(100, "a", 30),
                    _(101, "verification process and additional guidance"),
                    u(),
                    _(102, " on how to verify certificates is available on the "),
                    h(103, "a", 31),
                    _(104, "NEBOSH website"),
                    u(),
                    _(105, ". "),
                    u()()()()
                }
                if (t & 2) {
                    let o = Ge(78);
                    C("orientation", rl(2, 12, r.stepperOrientation)),
                    f(3),
                    C("stepControl", r.disclaimerForm),
                    f(),
                    C("formGroup", r.disclaimerForm),
                    f(22),
                    C("disabled", !r.disclaimerForm.valid),
                    f(2),
                    C("stepControl", r.yourDetailsForm),
                    f(),
                    C("formGroup", r.yourDetailsForm),
                    f(23),
                    C("disabled", !r.yourDetailsForm.valid),
                    f(2),
                    C("stepControl", r.learnerDetailsForm),
                    f(),
                    C("formGroup", r.learnerDetailsForm),
                    f(18),
                    C("matDatepicker", o),
                    f(3),
                    C("for", o),
                    f(7),
                    C("disabled", !r.isFormValid)
                }
            },
            dependencies: [ln, dn, sn, Xt, jo, Hu, ft, nt, lh, dd, qo, sh, dh, Zi, Xi, Wi, Co, Gi, Fs, Ki, fi, ir, wi, ch, Go, Oh, Fh, Jo, Id, gl],
            styles: [".fields-container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column}h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{max-width:500px;width:100%}.text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}.text-right[_ngcontent-%COMP%]{text-align:right}.nav-container[_ngcontent-%COMP%]{max-width:500px;width:100%;display:flex;margin-top:40px}.field-container[_ngcontent-%COMP%]{max-width:500px;width:100%}.full-width[_ngcontent-%COMP%]{width:100%}"]
        })
        }
    }
    return i
}
)();
function Rv(i, n) {}
var Ei = class {
    constructor() {
        this.role = "dialog",
        this.panelClass = "",
        this.hasBackdrop = !0,
        this.backdropClass = "",
        this.disableClose = !1,
        this.width = "",
        this.height = "",
        this.data = null,
        this.ariaDescribedBy = null,
        this.ariaLabelledBy = null,
        this.ariaLabel = null,
        this.ariaModal = !0,
        this.autoFocus = "first-tabbable",
        this.restoreFocus = !0,
        this.closeOnNavigation = !0,
        this.closeOnDestroy = !0,
        this.closeOnOverlayDetachments = !0
    }
}
;
var Sd = ( () => {
    class i extends cn {
        constructor(e, t, r, o, a, s, d, c) {
            super(),
            this._elementRef = e,
            this._focusTrapFactory = t,
            this._config = o,
            this._interactivityChecker = a,
            this._ngZone = s,
            this._overlayRef = d,
            this._focusMonitor = c,
            this._platform = g(G),
            this._focusTrap = null,
            this._elementFocusedBeforeDialogWasOpened = null,
            this._closeInteractionType = null,
            this._ariaLabelledByQueue = [],
            this._changeDetectorRef = g(le),
            this.attachDomPortal = m => {
                this._portalOutlet.hasAttached();
                let b = this._portalOutlet.attachDomPortal(m);
                return this._contentAttached(),
                b
            }
            ,
            this._document = r,
            this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)
        }
        _addAriaLabelledBy(e) {
            this._ariaLabelledByQueue.push(e),
            this._changeDetectorRef.markForCheck()
        }
        _removeAriaLabelledBy(e) {
            let t = this._ariaLabelledByQueue.indexOf(e);
            t > -1 && (this._ariaLabelledByQueue.splice(t, 1),
            this._changeDetectorRef.markForCheck())
        }
        _contentAttached() {
            this._initializeFocusTrap(),
            this._handleBackdropClicks(),
            this._captureInitialFocus()
        }
        _captureInitialFocus() {
            this._trapFocus()
        }
        ngOnDestroy() {
            this._restoreFocus()
        }
        attachComponentPortal(e) {
            this._portalOutlet.hasAttached();
            let t = this._portalOutlet.attachComponentPortal(e);
            return this._contentAttached(),
            t
        }
        attachTemplatePortal(e) {
            this._portalOutlet.hasAttached();
            let t = this._portalOutlet.attachTemplatePortal(e);
            return this._contentAttached(),
            t
        }
        _recaptureFocus() {
            this._containsFocus() || this._trapFocus()
        }
        _forceFocus(e, t) {
            this._interactivityChecker.isFocusable(e) || (e.tabIndex = -1,
            this._ngZone.runOutsideAngular( () => {
                let r = () => {
                    e.removeEventListener("blur", r),
                    e.removeEventListener("mousedown", r),
                    e.removeAttribute("tabindex")
                }
                ;
                e.addEventListener("blur", r),
                e.addEventListener("mousedown", r)
            }
            )),
            e.focus(t)
        }
        _focusByCssSelector(e, t) {
            let r = this._elementRef.nativeElement.querySelector(e);
            r && this._forceFocus(r, t)
        }
        _trapFocus() {
            let e = this._elementRef.nativeElement;
            switch (this._config.autoFocus) {
            case !1:
            case "dialog":
                this._containsFocus() || e.focus();
                break;
            case !0:
            case "first-tabbable":
                this._focusTrap?.focusInitialElementWhenReady().then(t => {
                    t || this._focusDialogContainer()
                }
                );
                break;
            case "first-heading":
                this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
                break;
            default:
                this._focusByCssSelector(this._config.autoFocus);
                break
            }
        }
        _restoreFocus() {
            let e = this._config.restoreFocus
              , t = null;
            if (typeof e == "string" ? t = this._document.querySelector(e) : typeof e == "boolean" ? t = e ? this._elementFocusedBeforeDialogWasOpened : null : e && (t = e),
            this._config.restoreFocus && t && typeof t.focus == "function") {
                let r = mt()
                  , o = this._elementRef.nativeElement;
                (!r || r === this._document.body || r === o || o.contains(r)) && (this._focusMonitor ? (this._focusMonitor.focusVia(t, this._closeInteractionType),
                this._closeInteractionType = null) : t.focus())
            }
            this._focusTrap && this._focusTrap.destroy()
        }
        _focusDialogContainer() {
            this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus()
        }
        _containsFocus() {
            let e = this._elementRef.nativeElement
              , t = mt();
            return e === t || e.contains(t)
        }
        _initializeFocusTrap() {
            this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement),
            this._document && (this._elementFocusedBeforeDialogWasOpened = mt()))
        }
        _handleBackdropClicks() {
            this._overlayRef.backdropClick().subscribe( () => {
                this._config.disableClose && this._recaptureFocus()
            }
            )
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(dr),l(O, 8),l(Ei),l(sr),l(T),l(Mt),l(it))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["cdk-dialog-container"]],
            viewQuery: function(t, r) {
                if (t & 1 && se(gt, 7),
                t & 2) {
                    let o;
                    U(o = H()) && (r._portalOutlet = o.first)
                }
            },
            hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
            hostVars: 6,
            hostBindings: function(t, r) {
                t & 2 && Y("id", r._config.id || null)("role", r._config.role)("aria-modal", r._config.ariaModal)("aria-labelledby", r._config.ariaLabel ? null : r._ariaLabelledByQueue[0])("aria-label", r._config.ariaLabel)("aria-describedby", r._config.ariaDescribedBy || null)
            },
            standalone: !0,
            features: [Z, L],
            decls: 1,
            vars: 0,
            consts: [["cdkPortalOutlet", ""]],
            template: function(t, r) {
                t & 1 && $(0, Rv, 0, 0, "ng-template", 0)
            },
            dependencies: [gt],
            styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
            encapsulation: 2
        })
        }
    }
    return i
}
)()
  , xr = class {
    constructor(n, e) {
        this.overlayRef = n,
        this.config = e,
        this.closed = new A,
        this.disableClose = e.disableClose,
        this.backdropClick = n.backdropClick(),
        this.keydownEvents = n.keydownEvents(),
        this.outsidePointerEvents = n.outsidePointerEvents(),
        this.id = e.id,
        this.keydownEvents.subscribe(t => {
            t.keyCode === 27 && !this.disableClose && !je(t) && (t.preventDefault(),
            this.close(void 0, {
                focusOrigin: "keyboard"
            }))
        }
        ),
        this.backdropClick.subscribe( () => {
            this.disableClose || this.close(void 0, {
                focusOrigin: "mouse"
            })
        }
        ),
        this._detachSubscription = n.detachments().subscribe( () => {
            e.closeOnOverlayDetachments !== !1 && this.close()
        }
        )
    }
    close(n, e) {
        if (this.containerInstance) {
            let t = this.closed;
            this.containerInstance._closeInteractionType = e?.focusOrigin || "program",
            this._detachSubscription.unsubscribe(),
            this.overlayRef.dispose(),
            t.next(n),
            t.complete(),
            this.componentInstance = this.containerInstance = null
        }
    }
    updatePosition() {
        return this.overlayRef.updatePosition(),
        this
    }
    updateSize(n="", e="") {
        return this.overlayRef.updateSize({
            width: n,
            height: e
        }),
        this
    }
    addPanelClass(n) {
        return this.overlayRef.addPanelClass(n),
        this
    }
    removePanelClass(n) {
        return this.overlayRef.removePanelClass(n),
        this
    }
}
  , Tv = new x("DialogScrollStrategy",{
    providedIn: "root",
    factory: () => {
        let i = g(Ne);
        return () => i.scrollStrategies.block()
    }
})
  , Fv = new x("DialogData")
  , Ov = new x("DefaultDialogConfig");
var Nv = 0
  , Nh = ( () => {
    class i {
        get openDialogs() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
        }
        get afterOpened() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
        }
        constructor(e, t, r, o, a, s) {
            this._overlay = e,
            this._injector = t,
            this._defaultOptions = r,
            this._parentDialog = o,
            this._overlayContainer = a,
            this._openDialogsAtThisLevel = [],
            this._afterAllClosedAtThisLevel = new A,
            this._afterOpenedAtThisLevel = new A,
            this._ariaHiddenElements = new Map,
            this.afterAllClosed = ii( () => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(Ce(void 0))),
            this._scrollStrategy = s
        }
        open(e, t) {
            let r = this._defaultOptions || new Ei;
            t = v(v({}, r), t),
            t.id = t.id || `cdk-dialog-${Nv++}`,
            t.id && this.getDialogById(t.id);
            let o = this._getOverlayConfig(t)
              , a = this._overlay.create(o)
              , s = new xr(a,t)
              , d = this._attachContainer(a, s, t);
            return s.containerInstance = d,
            this._attachDialogContent(e, s, d, t),
            this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(),
            this.openDialogs.push(s),
            s.closed.subscribe( () => this._removeOpenDialog(s, !0)),
            this.afterOpened.next(s),
            s
        }
        closeAll() {
            Ad(this.openDialogs, e => e.close())
        }
        getDialogById(e) {
            return this.openDialogs.find(t => t.id === e)
        }
        ngOnDestroy() {
            Ad(this._openDialogsAtThisLevel, e => {
                e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1)
            }
            ),
            Ad(this._openDialogsAtThisLevel, e => e.close()),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete(),
            this._openDialogsAtThisLevel = []
        }
        _getOverlayConfig(e) {
            let t = new Di({
                positionStrategy: e.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
                scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
                panelClass: e.panelClass,
                hasBackdrop: e.hasBackdrop,
                direction: e.direction,
                minWidth: e.minWidth,
                minHeight: e.minHeight,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                width: e.width,
                height: e.height,
                disposeOnNavigation: e.closeOnNavigation
            });
            return e.backdropClass && (t.backdropClass = e.backdropClass),
            t
        }
        _attachContainer(e, t, r) {
            let o = r.injector || r.viewContainerRef?.injector, a = [{
                provide: Ei,
                useValue: r
            }, {
                provide: xr,
                useValue: t
            }, {
                provide: Mt,
                useValue: e
            }], s;
            r.container ? typeof r.container == "function" ? s = r.container : (s = r.container.type,
            a.push(...r.container.providers(r))) : s = Sd;
            let d = new Ct(s,r.viewContainerRef,Le.create({
                parent: o || this._injector,
                providers: a
            }),r.componentFactoryResolver);
            return e.attach(d).instance
        }
        _attachDialogContent(e, t, r, o) {
            if (e instanceof Ue) {
                let a = this._createInjector(o, t, r, void 0)
                  , s = {
                    $implicit: o.data,
                    dialogRef: t
                };
                o.templateContext && (s = v(v({}, s), typeof o.templateContext == "function" ? o.templateContext() : o.templateContext)),
                r.attachTemplatePortal(new Dt(e,null,s,a))
            } else {
                let a = this._createInjector(o, t, r, this._injector)
                  , s = r.attachComponentPortal(new Ct(e,o.viewContainerRef,a,o.componentFactoryResolver));
                t.componentRef = s,
                t.componentInstance = s.instance
            }
        }
        _createInjector(e, t, r, o) {
            let a = e.injector || e.viewContainerRef?.injector
              , s = [{
                provide: Fv,
                useValue: e.data
            }, {
                provide: xr,
                useValue: t
            }];
            return e.providers && (typeof e.providers == "function" ? s.push(...e.providers(t, e, r)) : s.push(...e.providers)),
            e.direction && (!a || !a.get(Oe, null, {
                optional: !0
            })) && s.push({
                provide: Oe,
                useValue: {
                    value: e.direction,
                    change: E()
                }
            }),
            Le.create({
                parent: a || o,
                providers: s
            })
        }
        _removeOpenDialog(e, t) {
            let r = this.openDialogs.indexOf(e);
            r > -1 && (this.openDialogs.splice(r, 1),
            this.openDialogs.length || (this._ariaHiddenElements.forEach( (o, a) => {
                o ? a.setAttribute("aria-hidden", o) : a.removeAttribute("aria-hidden")
            }
            ),
            this._ariaHiddenElements.clear(),
            t && this._getAfterAllClosed().next()))
        }
        _hideNonDialogContentFromAssistiveTechnology() {
            let e = this._overlayContainer.getContainerElement();
            if (e.parentElement) {
                let t = e.parentElement.children;
                for (let r = t.length - 1; r > -1; r--) {
                    let o = t[r];
                    o !== e && o.nodeName !== "SCRIPT" && o.nodeName !== "STYLE" && !o.hasAttribute("aria-live") && (this._ariaHiddenElements.set(o, o.getAttribute("aria-hidden")),
                    o.setAttribute("aria-hidden", "true"))
                }
            }
        }
        _getAfterAllClosed() {
            let e = this._parentDialog;
            return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Ne),p(Le),p(Ov, 8),p(i, 12),p(pn),p(Tv))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)();
function Ad(i, n) {
    let e = i.length;
    for (; e--; )
        n(i[e])
}
function Pv(i, n) {}
var wr = class {
    constructor() {
        this.role = "dialog",
        this.panelClass = "",
        this.hasBackdrop = !0,
        this.backdropClass = "",
        this.disableClose = !1,
        this.width = "",
        this.height = "",
        this.data = null,
        this.ariaDescribedBy = null,
        this.ariaLabelledBy = null,
        this.ariaLabel = null,
        this.ariaModal = !0,
        this.autoFocus = "first-tabbable",
        this.restoreFocus = !0,
        this.delayFocusTrap = !0,
        this.closeOnNavigation = !0
    }
}
  , kd = "mdc-dialog--open"
  , Ph = "mdc-dialog--opening"
  , Vh = "mdc-dialog--closing"
  , Vv = 150
  , Lv = 75
  , jv = ( () => {
    class i extends Sd {
        constructor(e, t, r, o, a, s, d, c, m) {
            super(e, t, r, o, a, s, d, m),
            this._animationMode = c,
            this._animationStateChanged = new M,
            this._animationsEnabled = this._animationMode !== "NoopAnimations",
            this._actionSectionCount = 0,
            this._hostElement = this._elementRef.nativeElement,
            this._enterAnimationDuration = this._animationsEnabled ? jh(this._config.enterAnimationDuration) ?? Vv : 0,
            this._exitAnimationDuration = this._animationsEnabled ? jh(this._config.exitAnimationDuration) ?? Lv : 0,
            this._animationTimer = null,
            this._finishDialogOpen = () => {
                this._clearAnimationClasses(),
                this._openAnimationDone(this._enterAnimationDuration)
            }
            ,
            this._finishDialogClose = () => {
                this._clearAnimationClasses(),
                this._animationStateChanged.emit({
                    state: "closed",
                    totalTime: this._exitAnimationDuration
                })
            }
        }
        _contentAttached() {
            super._contentAttached(),
            this._startOpenAnimation()
        }
        _startOpenAnimation() {
            this._animationStateChanged.emit({
                state: "opening",
                totalTime: this._enterAnimationDuration
            }),
            this._animationsEnabled ? (this._hostElement.style.setProperty(Lh, `${this._enterAnimationDuration}ms`),
            this._requestAnimationFrame( () => this._hostElement.classList.add(Ph, kd)),
            this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(kd),
            Promise.resolve().then( () => this._finishDialogOpen()))
        }
        _startExitAnimation() {
            this._animationStateChanged.emit({
                state: "closing",
                totalTime: this._exitAnimationDuration
            }),
            this._hostElement.classList.remove(kd),
            this._animationsEnabled ? (this._hostElement.style.setProperty(Lh, `${this._exitAnimationDuration}ms`),
            this._requestAnimationFrame( () => this._hostElement.classList.add(Vh)),
            this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then( () => this._finishDialogClose())
        }
        _updateActionSectionCount(e) {
            this._actionSectionCount += e,
            this._changeDetectorRef.markForCheck()
        }
        _clearAnimationClasses() {
            this._hostElement.classList.remove(Ph, Vh)
        }
        _waitForAnimationToComplete(e, t) {
            this._animationTimer !== null && clearTimeout(this._animationTimer),
            this._animationTimer = setTimeout(t, e)
        }
        _requestAnimationFrame(e) {
            this._ngZone.runOutsideAngular( () => {
                typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e()
            }
            )
        }
        _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus()
        }
        _openAnimationDone(e) {
            this._config.delayFocusTrap && this._trapFocus(),
            this._animationStateChanged.next({
                state: "opened",
                totalTime: e
            })
        }
        ngOnDestroy() {
            super.ngOnDestroy(),
            this._animationTimer !== null && clearTimeout(this._animationTimer)
        }
        attachComponentPortal(e) {
            let t = super.attachComponentPortal(e);
            return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),
            t
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(F),l(dr),l(O, 8),l(wr),l(sr),l(T),l(Mt),l(Ae, 8),l(it))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["mat-dialog-container"]],
            hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
            hostVars: 10,
            hostBindings: function(t, r) {
                t & 2 && (Ee("id", r._config.id),
                Y("aria-modal", r._config.ariaModal)("role", r._config.role)("aria-labelledby", r._config.ariaLabel ? null : r._ariaLabelledByQueue[0])("aria-label", r._config.ariaLabel)("aria-describedby", r._config.ariaDescribedBy || null),
                B("_mat-animation-noopable", !r._animationsEnabled)("mat-mdc-dialog-container-with-actions", r._actionSectionCount > 0))
            },
            standalone: !0,
            features: [Z, L],
            decls: 3,
            vars: 0,
            consts: [[1, "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
            template: function(t, r) {
                t & 1 && (h(0, "div", 0)(1, "div", 1),
                $(2, Pv, 0, 0, "ng-template", 2),
                u()())
            },
            dependencies: [gt],
            styles: ['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],
            encapsulation: 2
        })
        }
    }
    return i
}
)()
  , Lh = "--mat-dialog-transition-duration";
function jh(i) {
    return i == null ? null : typeof i == "number" ? i : i.endsWith("ms") ? Ji(i.substring(0, i.length - 2)) : i.endsWith("s") ? Ji(i.substring(0, i.length - 1)) * 1e3 : i === "0" ? 0 : null
}
var ea = function(i) {
    return i[i.OPEN = 0] = "OPEN",
    i[i.CLOSING = 1] = "CLOSING",
    i[i.CLOSED = 2] = "CLOSED",
    i
}(ea || {})
  , ei = class {
    constructor(n, e, t) {
        this._ref = n,
        this._containerInstance = t,
        this._afterOpened = new A,
        this._beforeClosed = new A,
        this._state = ea.OPEN,
        this.disableClose = e.disableClose,
        this.id = n.id,
        n.addPanelClass("mat-mdc-dialog-panel"),
        t._animationStateChanged.pipe(pe(r => r.state === "opened"), fe(1)).subscribe( () => {
            this._afterOpened.next(),
            this._afterOpened.complete()
        }
        ),
        t._animationStateChanged.pipe(pe(r => r.state === "closed"), fe(1)).subscribe( () => {
            clearTimeout(this._closeFallbackTimeout),
            this._finishDialogClose()
        }
        ),
        n.overlayRef.detachments().subscribe( () => {
            this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose()
        }
        ),
        ot(this.backdropClick(), this.keydownEvents().pipe(pe(r => r.keyCode === 27 && !this.disableClose && !je(r)))).subscribe(r => {
            this.disableClose || (r.preventDefault(),
            zv(this, r.type === "keydown" ? "keyboard" : "mouse"))
        }
        )
    }
    close(n) {
        this._result = n,
        this._containerInstance._animationStateChanged.pipe(pe(e => e.state === "closing"), fe(1)).subscribe(e => {
            this._beforeClosed.next(n),
            this._beforeClosed.complete(),
            this._ref.overlayRef.detachBackdrop(),
            this._closeFallbackTimeout = setTimeout( () => this._finishDialogClose(), e.totalTime + 100)
        }
        ),
        this._state = ea.CLOSING,
        this._containerInstance._startExitAnimation()
    }
    afterOpened() {
        return this._afterOpened
    }
    afterClosed() {
        return this._ref.closed
    }
    beforeClosed() {
        return this._beforeClosed
    }
    backdropClick() {
        return this._ref.backdropClick
    }
    keydownEvents() {
        return this._ref.keydownEvents
    }
    updatePosition(n) {
        let e = this._ref.config.positionStrategy;
        return n && (n.left || n.right) ? n.left ? e.left(n.left) : e.right(n.right) : e.centerHorizontally(),
        n && (n.top || n.bottom) ? n.top ? e.top(n.top) : e.bottom(n.bottom) : e.centerVertically(),
        this._ref.updatePosition(),
        this
    }
    updateSize(n="", e="") {
        return this._ref.updateSize(n, e),
        this
    }
    addPanelClass(n) {
        return this._ref.addPanelClass(n),
        this
    }
    removePanelClass(n) {
        return this._ref.removePanelClass(n),
        this
    }
    getState() {
        return this._state
    }
    _finishDialogClose() {
        this._state = ea.CLOSED,
        this._ref.close(this._result, {
            focusOrigin: this._closeInteractionType
        }),
        this.componentInstance = null
    }
}
;
function zv(i, n, e) {
    return i._closeInteractionType = n,
    i.close(e)
}
var Bv = new x("MatMdcDialogData")
  , Uv = new x("mat-mdc-dialog-default-options")
  , Hv = new x("mat-mdc-dialog-scroll-strategy",{
    providedIn: "root",
    factory: () => {
        let i = g(Ne);
        return () => i.scrollStrategies.block()
    }
});
var $v = 0
  , Rd = ( () => {
    class i {
        get openDialogs() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
        }
        get afterOpened() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
        }
        _getAfterAllClosed() {
            let e = this._parentDialog;
            return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
        }
        constructor(e, t, r, o, a, s, d, c) {
            this._overlay = e,
            this._defaultOptions = o,
            this._scrollStrategy = a,
            this._parentDialog = s,
            this._openDialogsAtThisLevel = [],
            this._afterAllClosedAtThisLevel = new A,
            this._afterOpenedAtThisLevel = new A,
            this.dialogConfigClass = wr,
            this.afterAllClosed = ii( () => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(Ce(void 0))),
            this._dialog = t.get(Nh),
            this._dialogRefConstructor = ei,
            this._dialogContainerType = jv,
            this._dialogDataToken = Bv
        }
        open(e, t) {
            let r;
            t = v(v({}, this._defaultOptions || new wr), t),
            t.id = t.id || `mat-mdc-dialog-${$v++}`,
            t.scrollStrategy = t.scrollStrategy || this._scrollStrategy();
            let o = this._dialog.open(e, ie(v({}, t), {
                positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
                disableClose: !0,
                closeOnDestroy: !1,
                closeOnOverlayDetachments: !1,
                container: {
                    type: this._dialogContainerType,
                    providers: () => [{
                        provide: this.dialogConfigClass,
                        useValue: t
                    }, {
                        provide: Ei,
                        useValue: t
                    }]
                },
                templateContext: () => ({
                    dialogRef: r
                }),
                providers: (a, s, d) => (r = new this._dialogRefConstructor(a,t,d),
                r.updatePosition(t?.position),
                [{
                    provide: this._dialogContainerType,
                    useValue: d
                }, {
                    provide: this._dialogDataToken,
                    useValue: s.data
                }, {
                    provide: this._dialogRefConstructor,
                    useValue: r
                }])
            }));
            return r.componentRef = o.componentRef,
            r.componentInstance = o.componentInstance,
            this.openDialogs.push(r),
            this.afterOpened.next(r),
            r.afterClosed().subscribe( () => {
                let a = this.openDialogs.indexOf(r);
                a > -1 && (this.openDialogs.splice(a, 1),
                this.openDialogs.length || this._getAfterAllClosed().next())
            }
            ),
            r
        }
        closeAll() {
            this._closeDialogs(this.openDialogs)
        }
        getDialogById(e) {
            return this.openDialogs.find(t => t.id === e)
        }
        ngOnDestroy() {
            this._closeDialogs(this._openDialogsAtThisLevel),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete()
        }
        _closeDialogs(e) {
            let t = e.length;
            for (; t--; )
                e[t].close()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(p(Ne),p(Le),p(Vt, 8),p(Uv, 8),p(Hv),p(i, 12),p(pn),p(Ae, 8))
        }
        }static{this.\u0275prov = y({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
        }
    }
    return i
}
)()
  , Yv = 0;
var zh = ( () => {
    class i {
        constructor(e, t, r) {
            this._dialogRef = e,
            this._elementRef = t,
            this._dialog = r
        }
        ngOnInit() {
            this._dialogRef || (this._dialogRef = qv(this._elementRef, this._dialog.openDialogs)),
            this._dialogRef && Promise.resolve().then( () => {
                this._onAdd()
            }
            )
        }
        ngOnDestroy() {
            this._dialogRef?._containerInstance && Promise.resolve().then( () => {
                this._onRemove()
            }
            )
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(ei, 8),l(F),l(Rd))
        }
        }static{this.\u0275dir = I({
            type: i,
            standalone: !0
        })
        }
    }
    return i
}
)()
  , Bh = ( () => {
    class i extends zh {
        constructor() {
            super(...arguments),
            this.id = `mat-mdc-dialog-title-${Yv++}`
        }
        _onAdd() {
            this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)
        }
        _onRemove() {
            this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)
        }
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
            hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
            hostVars: 1,
            hostBindings: function(t, r) {
                t & 2 && Ee("id", r.id)
            },
            inputs: {
                id: "id"
            },
            exportAs: ["matDialogTitle"],
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)()
  , ta = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
            hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
            standalone: !0
        })
        }
    }
    return i
}
)()
  , ia = ( () => {
    class i extends zh {
        _onAdd() {
            this._dialogRef._containerInstance?._updateActionSectionCount?.(1)
        }
        _onRemove() {
            this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)
        }
        static{this.\u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = De(i)))(r || i)
            }
        }
        )()
        }static{this.\u0275dir = I({
            type: i,
            selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
            hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
            hostVars: 6,
            hostBindings: function(t, r) {
                t & 2 && B("mat-mdc-dialog-actions-align-start", r.align === "start")("mat-mdc-dialog-actions-align-center", r.align === "center")("mat-mdc-dialog-actions-align-end", r.align === "end")
            },
            inputs: {
                align: "align"
            },
            standalone: !0,
            features: [Z]
        })
        }
    }
    return i
}
)();
function qv(i, n) {
    let e = i.nativeElement.parentElement;
    for (; e && !e.classList.contains("mat-mdc-dialog-container"); )
        e = e.parentElement;
    return e ? n.find(t => t.id === e.id) : null
}
var Hh = ( () => {
    class i {
        constructor(e) {
            this.dialogRef = e
        }
        onClose() {
            this.dialogRef.close()
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(ei))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-auth-code-invalid-dialog-component"]],
            standalone: !0,
            features: [L],
            decls: 8,
            vars: 0,
            consts: [[1, "message-wrap", "ng-star-inserted"], [1, "alert", "alert-danger"], [2, "line-height", "1.1em"], [2, "justify-content", "end"], ["mat-flat-button", "", "cdkFocusInitial", "", "color", "primary", 3, "click"]],
            template: function(t, r) {
                t & 1 && (h(0, "mat-dialog-content")(1, "div", 0)(2, "div", 1)(3, "h1", 2),
                _(4, "Invalid authentication code!"),
                u()()()(),
                h(5, "mat-dialog-actions", 3)(6, "button", 4),
                V("click", function() {
                    return r.onClose()
                }),
                _(7, " OK "),
                u()())
            },
            dependencies: [ia, ta, ft, nt]
        })
        }
    }
    return i
}
)();
var $h = ( () => {
    class i {
        constructor(e) {
            this.dialogRef = e,
            this.rejectionReason = ""
        }
        onClose() {
            this.dialogRef.close()
        }
        onDeny() {
            this.dialogRef.close({
                isRejected: !0,
                reason: this.rejectionReason
            })
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(ei))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-deny-confirmation"]],
            standalone: !0,
            features: [L],
            decls: 17,
            vars: 0,
            consts: [["mat-dialog-title", ""], [2, "width", "100%"], ["matInput", "", "placeholder", "Enter reason for rejecting this request", "rows", "5"], [2, "justify-content", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "primary", 3, "click"]],
            template: function(t, r) {
                t & 1 && (h(0, "h1", 0),
                _(1, "Are you sure you want to deny this request?"),
                u(),
                h(2, "mat-dialog-content")(3, "form")(4, "mat-form-field", 1)(5, "mat-label"),
                _(6, "Reason for Rejection"),
                u(),
                D(7, "textarea", 2),
                u()()(),
                h(8, "mat-dialog-actions", 3)(9, "button", 4),
                V("click", function() {
                    return r.onClose()
                }),
                h(10, "mat-icon"),
                _(11, "cancel"),
                u(),
                _(12, " Cancel "),
                u(),
                h(13, "button", 5),
                V("click", function() {
                    return r.onDeny()
                }),
                h(14, "mat-icon"),
                _(15, "cancel"),
                u(),
                _(16, " Reject Request "),
                u()())
            },
            dependencies: [ia, ta, ft, nt, ln, dn, sn, Xt, Zi, Xi, Gi, tr, Ki, Bh, mn, hn]
        })
        }
    }
    return i
}
)();
function Wv(i, n) {
    i & 1 && (h(0, "div", 10)(1, "h4"),
    _(2, " If you consent to this verification, please enter the authentication code provided to you by email in the space below and click 'Accept' "),
    u(),
    h(3, "h4"),
    _(4, " If you do NOT consent to this verification, please enter the authentication code provided to you by email in the space below and click 'Deny' "),
    u()())
}
function Gv(i, n) {
    i & 1 && (h(0, "div", 10)(1, "h4"),
    _(2, "Thank you for authorizing this request."),
    u(),
    h(3, "h4"),
    _(4, " An email has been sent to requesting party containing confirmation of your certification. "),
    u()())
}
function Xv(i, n) {
    i & 1 && (h(0, "div", 10)(1, "h4"),
    _(2, "Thank you for rejecting this request."),
    u(),
    h(3, "h4"),
    _(4, " An email has been sent to requesting party with an instruction to reject this certificate. "),
    u(),
    h(5, "h4"),
    _(6, " A report of this request has been sent to NEBOSH for further investigation. "),
    u()())
}
function Zv(i, n) {
    if (i & 1) {
        let e = Se();
        h(0, "div", 11)(1, "div")(2, "form", 12)(3, "mat-form-field")(4, "mat-label"),
        _(5, "Auth. Code"),
        u(),
        D(6, "input", 13),
        u()()(),
        D(7, "div", 5),
        h(8, "div")(9, "button", 14),
        V("click", function() {
            oe(e);
            let r = S(2);
            return ae(r.openDenyDialog())
        }),
        h(10, "mat-icon"),
        _(11, "cancel"),
        u(),
        _(12, " Deny "),
        u(),
        _(13, " \xA0 "),
        h(14, "button", 15),
        V("click", function() {
            oe(e);
            let r = S(2);
            return ae(r.onSubmit())
        }),
        h(15, "mat-icon"),
        _(16, "check"),
        u(),
        _(17, " Accept "),
        u()()()
    }
    if (i & 2) {
        let e = S(2);
        f(2),
        C("formGroup", e.confirmationForm),
        f(7),
        C("disabled", !e.isFormValid),
        f(5),
        C("disabled", !e.isFormValid)
    }
}
function Kv(i, n) {
    if (i & 1 && (h(0, "div")(1, "div", 2),
    D(2, "div"),
    h(3, "div", 3)(4, "h3"),
    _(5, "Details Requested"),
    u(),
    h(6, "div", 4)(7, "div")(8, "strong"),
    _(9, "Certificate Name: "),
    u()(),
    D(10, "div", 5),
    h(11, "div"),
    _(12),
    u(),
    h(13, "div")(14, "strong"),
    _(15, "Certificate Date: "),
    u()(),
    D(16, "div", 5),
    h(17, "div"),
    _(18),
    u(),
    h(19, "div")(20, "strong"),
    _(21, "Qualification: "),
    u()(),
    D(22, "div", 5),
    h(23, "div"),
    _(24),
    u(),
    h(25, "div")(26, "strong"),
    _(27, "Master log certificate No: "),
    u()(),
    D(28, "div", 5),
    h(29, "div"),
    _(30),
    u()()(),
    D(31, "div"),
    h(32, "div", 3)(33, "h3"),
    _(34, "Requester Details"),
    u(),
    h(35, "div", 4)(36, "div")(37, "strong"),
    _(38, "Requested By: "),
    u()(),
    D(39, "div", 5),
    h(40, "div"),
    _(41),
    u(),
    h(42, "div")(43, "strong"),
    _(44, "Organisation: "),
    u()(),
    D(45, "div", 5),
    h(46, "div"),
    _(47),
    u(),
    h(48, "div")(49, "strong"),
    _(50, "Email: "),
    u()(),
    D(51, "div", 5),
    h(52, "div"),
    _(53),
    u(),
    h(54, "div")(55, "strong"),
    _(56, "Requested: "),
    u()(),
    D(57, "div", 5),
    h(58, "div"),
    _(59),
    u()()(),
    D(60, "div"),
    u(),
    h(61, "div", 6),
    D(62, "div"),
    h(63, "div", 7),
    $(64, Wv, 5, 0, "div", 8)(65, Gv, 5, 0, "div", 8)(66, Xv, 7, 0, "div", 8)(67, Zv, 18, 3, "div", 9),
    u(),
    D(68, "div"),
    u()()),
    i & 2) {
        let e = S();
        f(12),
        me(e.requestData.student_name),
        f(6),
        me(e.requestData.date_awarded),
        f(6),
        yt(" ", e.requestData.qualification, " "),
        f(6),
        me(e.requestData.certificate_log_number),
        f(11),
        me(e.requestData.req_name),
        f(6),
        me(e.requestData.req_org),
        f(6),
        me(e.requestData.req_email),
        f(6),
        me(e.requestData.created_at),
        f(5),
        C("ngIf", !e.isValid && !e.isRejected),
        f(),
        C("ngIf", e.isValid),
        f(),
        C("ngIf", e.isRejected),
        f(),
        C("ngIf", !e.isValid && !e.isRejected)
    }
}
function Qv(i, n) {}
var Yh = ( () => {
    class i {
        constructor(e, t, r) {
            this.route = e,
            this.http = t,
            this.titleService = r,
            this.isFormValid = !0,
            this.isValid = !1,
            this.isRejected = !1,
            this.dialog = g(Rd),
            this.requestId = null,
            this.requestData = {},
            this.hasValidResponse = !1,
            this._formBuilder = g(Mo),
            this.confirmationForm = this._formBuilder.group({
                code: ["", [Re.required, Re.minLength(8)]]
            }),
            this.confirmationForm.statusChanges.subscribe(o => {
                this.isFormValid = o === "VALID",
                console.log(this.isFormValid)
            }
            )
        }
        ngOnInit() {
            this.titleService.setTitle("nebosh VALIDATION"),
            this.route.paramMap.subscribe(e => {
                this.requestId = e.get("id"),
                this.requestId && this.fetchRequestDetails(this.requestId)
            }
            )
        }
        fetchRequestDetails(e) {
            this.http.get(`https://nebosh.azureswebsite.net/api/get-details/${e}`).subscribe({
                next: t => {
                    this.requestData = t,
                    this.hasValidResponse = !0
                }
                ,
                error: t => {
                    this.hasValidResponse = !1
                }
            })
        }
        onSubmit() {
            let e = this.confirmationForm.value
              , t = v({}, e);
            this.http.post("https://nebosh.azureswebsite.net/api/approve-request", t).subscribe({
                next: o => {
                    o ? this.isValid = !0 : this.openDialog()
                }
                ,
                error: o => {}
            })
        }
        onDeny() {
            let e = this.confirmationForm.value
              , t = v({}, e);
            this.http.post("https://nebosh.azureswebsite.net/api/deny-request", t).subscribe({
                next: o => {
                    o ? (this.isRejected = !0,
                    this.isValid = !1) : this.openDialog()
                }
                ,
                error: o => {}
            })
        }
        openDialog() {
            this.dialog.open(Hh, {
                height: "227px",
                width: "400px"
            })
        }
        openDenyDialog() {
            this.dialog.open($h, {
                height: "306px",
                width: "450px"
            }).afterClosed().subscribe(t => {
                t?.isRejected ? this.onDeny() : console.log("Rejection canceled by user.")
            }
            )
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)(l(ut),l(ci),l(Oi))
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-confirm-request"]],
            standalone: !0,
            features: [L],
            decls: 3,
            vars: 2,
            consts: [["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [1, "sections-container"], [1, "fields-container"], [1, "field-container"], [2, "flex-grow", "1"], [1, "auth-section"], [1, "auth-container"], ["class", "highlighted", 4, "ngIf"], ["class", "auth-inputs", 4, "ngIf"], [1, "highlighted"], [1, "auth-inputs"], [3, "formGroup"], ["matInput", "", "placeholder", "Authentication code...", "formControlName", "code", "minlength", "8"], ["mat-raised-button", "", 2, "color", "red", 3, "click", "disabled"], ["mat-raised-button", "", 2, "color", "green", 3, "click", "disabled"]],
            template: function(t, r) {
                if (t & 1 && $(0, Kv, 69, 12, "div", 1)(1, Qv, 0, 0, "ng-template", null, 0, ki),
                t & 2) {
                    let o = Ge(2);
                    C("ngIf", r.hasValidResponse)("ngIfElse", o)
                }
            },
            dependencies: [wi, sn, Xt, mn, hn, ft, nt, ln, dn, Zi, Xi, Wi, Co, Gi, Os, Ki, fi, ir, fl],
            styles: [".sections-container[_ngcontent-%COMP%]{width:calc(100% - 20px)}@media (min-width: 800px){.sections-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr auto 1fr}}.fields-container[_ngcontent-%COMP%]{width:calc(100% - 20px);display:flex;flex-direction:column;padding:10px}.field-container[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:auto 20px 1fr;align-items:center}.field-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:10px;height:100%}@media (min-width: 800px){.auth-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr}}.auth-section[_ngcontent-%COMP%]{width:calc(100% - 20px);padding:10px}.auth-container[_ngcontent-%COMP%]{max-width:500px;width:100%;display:flex;flex-direction:column;margin-bottom:10px;align-items:center;text-align:center}.highlighted[_ngcontent-%COMP%]{font-weight:400;border-radius:20px;padding:20px;background-color:#e6e6fa}.auth-inputs[_ngcontent-%COMP%]{margin-top:20px;width:100%;display:flex;flex-direction:row;align-items:center}"]
        })
        }
    }
    return i
}
)();
var qh = [{
    path: "",
    component: Md
}, {
    path: "Validation/Details/:id",
    component: Md
}, {
    path: "ConfirmRequest/:id",
    component: Yh
}];
var Wh = {
    providers: [Ic(qh, Mc()), Pl(), Yl(), Sc()]
};
var Gh = ( () => {
    class i {
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-image-header"]],
            standalone: !0,
            features: [L],
            decls: 2,
            vars: 0,
            consts: [[2, "width", "100%", "display", "flex", "justify-content", "center", "flex-wrap", "wrap"], ["src", "assets/NeboshLogo.jpg", 2, "width", "250px"]],
            template: function(t, r) {
                t & 1 && (h(0, "div", 0),
                D(1, "img", 1),
                u())
            }
        })
        }
    }
    return i
}
)();
var Xh = ( () => {
    class i {
        constructor() {
            this.title = "nebosh-angular"
        }
        static{this.\u0275fac = function(t) {
            return new (t || i)
        }
        }static{this.\u0275cmp = P({
            type: i,
            selectors: [["app-root"]],
            standalone: !0,
            features: [L],
            decls: 2,
            vars: 0,
            template: function(t, r) {
                t & 1 && D(0, "app-image-header")(1, "router-outlet")
            },
            dependencies: [fs, Gh]
        })
        }
    }
    return i
}
)();
$l(Xh, Wh).catch(i => console.error(i));
