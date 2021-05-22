"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
(function () {
    Object.defineProperty(Object.prototype, "hashCode", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function hashCode() {
            var _this = this;
            var name = this.constructor.name;
            var keys = Reflect.ownKeys(this);
            var construct = new Map(keys.map(function (k) {
                var code = typeof _this[k].hashCode === "function" && typeof _this[k] === "object" ? _this[k].hashCode() : typeof k + ":" + k.toString();
                return [k, code];
            }));
            var data = "(" + name + "$" + __spreadArray([], __read(construct.entries())).map(function (_a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                return k + "#" + v;
            }).join("@") + ")";
            var ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var len = data.length - 1;
            var i = -1;
            var code = "";
            while (i < len) {
                var x = (data.charCodeAt(++i) << 16) | (data.charCodeAt(++i) << 8) | data.charCodeAt(++i);
                code += "" + ascii[(x >>> 18) & 63] + ascii[(x >>> 12) & 63] + ascii[(x >>> 6) & 63] + ascii[(x >>> 0) & 63];
            }
            var pads = data.length % 3;
            if (pads > 0) {
                code = code.slice(0, pads - 3);
                while (code.length % 4 !== 0) {
                    code += "=";
                }
            }
            return code;
        },
    });
})();
