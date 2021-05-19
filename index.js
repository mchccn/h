(function() {
    Object.defineProperty(Object.prototype, "hashCode", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: function hashCode() {
            const name = this.constructor.name;
            const keys = Reflect.ownKeys(this);

            const construct = new Map(keys.map((k) => {
                const code = typeof this[k].hashCode === "function" && typeof this[k] === "object" ? this[k].hashCode() : `${typeof k}:${k.toString()}`;

                return [k, code];
            }));

            const data = `(${name}$${[...construct.entries()].map(([k, v]) => `${k}#${v}`).join("@")})`;

            const ascii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            let len = data.length - 1;
            let i = -1;
            let code = "";

            while (i < len) {
                const x = data.charCodeAt(++i) << 16 | data.charCodeAt(++i) << 8 | data.charCodeAt(++i);

                code += `${
					ascii[(x >>> 18) & 63]
				}${
					ascii[(x >>> 12) & 63]
				}${
					ascii[(x >>> 6) & 63]
				}${
					ascii[(x >>> 0) & 63]
				}`;
            }

            const pads = data.length % 3;

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
