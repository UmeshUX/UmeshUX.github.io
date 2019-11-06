var frappe = function() {
    "use strict";
    function a(a, b) {
        return "string" == typeof a ? (b || document).querySelector(a) : a || null;
    }
    function b(a) {
        var b = a.getBoundingClientRect();
        return {
            top: b.top + (document.documentElement.scrollTop || document.body.scrollTop),
            left: b.left + (document.documentElement.scrollLeft || document.body.scrollLeft)
        };
    }
    function c(a) {
        var b = a.getBoundingClientRect();
        return b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) && b.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    function d(a) {
        var b = window.getComputedStyle(a), c = parseFloat(b.paddingLeft) + parseFloat(b.paddingRight);
        return a.clientWidth - c;
    }
    function e(a, b, c) {
        var d = document.createEvent("HTMLEvents");
        d.initEvent(b, !0, !0);
        for (var e in c) d[e] = c[e];
        return a.dispatchEvent(d);
    }
    function f(a) {
        return a.titleHeight + a.margins.top + a.paddings.top;
    }
    function g(a) {
        return a.margins.left + a.paddings.left;
    }
    function h(a) {
        return a.margins.top + a.margins.bottom + a.paddings.top + a.paddings.bottom + a.titleHeight + a.legendHeight;
    }
    function i(a) {
        return a.margins.left + a.margins.right + a.paddings.left + a.paddings.right;
    }
    function j(a) {
        return parseFloat(a.toFixed(2));
    }
    function k(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        c || (c = d ? a[0] : a[a.length - 1]);
        var e = new Array(Math.abs(b)).fill(c);
        return a = d ? e.concat(a) : a.concat(e);
    }
    function l(a, b) {
        return (a + "").length * b;
    }
    function m(a, b) {
        return {
            x: Math.sin(a * Rb) * b,
            y: Math.cos(a * Rb) * b
        };
    }
    function n(a, b) {
        var c = void 0, d = void 0;
        return a <= b ? (c = b - a, d = a) : (c = a - b, d = b), [ c, d ];
    }
    function o(a, b) {
        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.length - a.length;
        return c > 0 ? a = k(a, c) : b = k(b, c), [ a, b ];
    }
    function p(a) {
        return a > 255 ? 255 : a < 0 ? 0 : a;
    }
    function q(a, b) {
        var c = Ub(a), d = !1;
        "#" == c[0] && (c = c.slice(1), d = !0);
        var e = parseInt(c, 16), f = p((e >> 16) + b), g = p((e >> 8 & 255) + b), h = p((255 & e) + b);
        return (d ? "#" : "") + (h | g << 8 | f << 16).toString(16);
    }
    function r(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    }
    function s(a, b) {
        return "string" == typeof a ? (b || document).querySelector(a) : a || null;
    }
    function t(a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", a);
        for (var d in b) {
            var e = b[d];
            if ("inside" === d) s(e).appendChild(c); else if ("around" === d) {
                var f = s(e);
                f.parentNode.insertBefore(c, f), c.appendChild(f);
            } else "styles" === d ? "object" === (void 0 === e ? "undefined" : Cb(e)) && Object.keys(e).map(function(a) {
                c.style[a] = e[a];
            }) : ("className" === d && (d = "class"), "innerHTML" === d ? c.textContent = e : c.setAttribute(d, e));
        }
        return c;
    }
    function u(a, b) {
        return t("linearGradient", {
            inside: a,
            id: b,
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
        });
    }
    function v(a, b, c, d) {
        return t("stop", {
            inside: a,
            style: "stop-color: " + c,
            offset: b,
            "stop-opacity": d
        });
    }
    function w(a, b, c, d) {
        return t("svg", {
            className: b,
            inside: a,
            width: c,
            height: d
        });
    }
    function x(a) {
        return t("defs", {
            inside: a
        });
    }
    function y(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, d = {
            className: a,
            transform: b
        };
        return c && (d.inside = c), t("g", d);
    }
    function z(a) {
        return t("path", {
            className: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            d: a,
            styles: {
                stroke: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
                fill: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
            }
        });
    }
    function A(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, f = c.x + a.x, g = c.y + a.y, h = c.x + b.x, i = c.y + b.y;
        return "M" + c.x + " " + c.y + "\n		L" + f + " " + g + "\n		A " + d + " " + d + " 0 0 " + (e ? 1 : 0) + "\n		" + h + " " + i + " z";
    }
    function B(a, b) {
        var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = "path-fill-gradient-" + b + "-" + (c ? "lighter" : "default"), e = u(a, d), f = [ 1, .6, .2 ];
        return c && (f = [ .4, .2, 0 ]), v(e, "0%", b, f[0]), v(e, "50%", b, f[1]), v(e, "100%", b, f[2]), 
        d;
    }
    function C(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Nb, f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "none";
        return t("rect", {
            className: "percentage-bar",
            x: a,
            y: b,
            width: c,
            height: d,
            fill: f,
            styles: {
                stroke: q(f, -25),
                "stroke-dasharray": "0, " + (d + c) + ", " + c + ", " + d,
                "stroke-width": e
            }
        });
    }
    function D(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none", f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, g = {
            className: a,
            x: b,
            y: c,
            width: d,
            height: d,
            fill: e
        };
        return Object.keys(f).map(function(a) {
            g[a] = f[a];
        }), t("rect", g);
    }
    function E(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", e = arguments[4], f = {
            className: "legend-bar",
            x: 0,
            y: 0,
            width: c,
            height: "2px",
            fill: d
        }, g = t("text", {
            className: "legend-dataset-text",
            x: 0,
            y: 0,
            dy: 2 * Xb + "px",
            "font-size": 1.2 * Xb + "px",
            "text-anchor": "start",
            fill: Zb,
            innerHTML: e
        }), h = t("g", {
            transform: "translate(" + a + ", " + b + ")"
        });
        return h.appendChild(t("rect", f)), h.appendChild(g), h;
    }
    function F(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", e = arguments[4], f = {
            className: "legend-dot",
            cx: 0,
            cy: 0,
            r: c,
            fill: d
        }, g = t("text", {
            className: "legend-dataset-text",
            x: 0,
            y: 0,
            dx: Xb + "px",
            dy: Xb / 3 + "px",
            "font-size": 1.2 * Xb + "px",
            "text-anchor": "start",
            fill: Zb,
            innerHTML: e
        }), h = t("g", {
            transform: "translate(" + a + ", " + b + ")"
        });
        return h.appendChild(t("circle", f)), h.appendChild(g), h;
    }
    function G(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, f = e.fontSize || Xb;
        return t("text", {
            className: a,
            x: b,
            y: c,
            dy: (void 0 !== e.dy ? e.dy : f / 2) + "px",
            "font-size": f + "px",
            fill: e.fill || Zb,
            "text-anchor": e.textAnchor || "start",
            innerHTML: d
        });
    }
    function H(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        e.stroke || (e.stroke = Yb);
        var f = t("line", {
            className: "line-vertical " + e.className,
            x1: 0,
            x2: 0,
            y1: c,
            y2: d,
            styles: {
                stroke: e.stroke
            }
        }), g = t("text", {
            x: 0,
            y: c > d ? c + Wb : c - Wb - Xb,
            dy: Xb + "px",
            "font-size": Xb + "px",
            "text-anchor": "middle",
            innerHTML: b + ""
        }), h = t("g", {
            transform: "translate(" + a + ", 0)"
        });
        return h.appendChild(f), h.appendChild(g), h;
    }
    function I(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        e.stroke || (e.stroke = Yb), e.lineType || (e.lineType = "");
        var f = t("line", {
            className: "line-horizontal " + e.className + ("dashed" === e.lineType ? "dashed" : ""),
            x1: c,
            x2: d,
            y1: 0,
            y2: 0,
            styles: {
                stroke: e.stroke
            }
        }), g = t("text", {
            x: c < d ? c - Wb : c + Wb,
            y: 0,
            dy: Xb / 2 - 2 + "px",
            "font-size": Xb + "px",
            "text-anchor": c < d ? "end" : "start",
            innerHTML: b + ""
        }), h = t("g", {
            transform: "translate(0, " + a + ")",
            "stroke-opacity": 1
        });
        return 0 !== g && "0" !== g || (h.style.stroke = "rgba(27, 31, 35, 0.6)"), h.appendChild(f), 
        h.appendChild(g), h;
    }
    function J(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        d.pos || (d.pos = "left"), d.offset || (d.offset = 0), d.mode || (d.mode = "span"), 
        d.stroke || (d.stroke = Yb), d.className || (d.className = "");
        var e = -1 * Vb, f = "span" === d.mode ? c + Vb : 0;
        return "tick" === d.mode && "right" === d.pos && (e = c + Vb, f = c), e += d.offset, 
        f += d.offset, I(a, b, e, f, {
            stroke: d.stroke,
            className: d.className,
            lineType: d.lineType
        });
    }
    function K(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        d.pos || (d.pos = "bottom"), d.offset || (d.offset = 0), d.mode || (d.mode = "span"), 
        d.stroke || (d.stroke = Yb), d.className || (d.className = "");
        var e = c + Vb, f = "span" === d.mode ? -1 * Vb : c;
        return "tick" === d.mode && "top" === d.pos && (e = -1 * Vb, f = 0), H(a, b, e, f, {
            stroke: d.stroke,
            className: d.className,
            lineType: d.lineType
        });
    }
    function L(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        d.labelPos || (d.labelPos = "right");
        var e = t("text", {
            className: "chart-label",
            x: "left" === d.labelPos ? Wb : c - l(b, 5) - Wb,
            y: 0,
            dy: Xb / -2 + "px",
            "font-size": Xb + "px",
            "text-anchor": "start",
            innerHTML: b + ""
        }), f = I(a, "", 0, c, {
            stroke: d.stroke || Yb,
            className: d.className || "",
            lineType: d.lineType
        });
        return f.appendChild(e), f;
    }
    function M(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, f = a - b, g = t("rect", {
            className: "bar mini",
            styles: {
                fill: "rgba(228, 234, 239, 0.49)",
                stroke: Yb,
                "stroke-dasharray": c + ", " + f
            },
            x: 0,
            y: 0,
            width: c,
            height: f
        });
        e.labelPos || (e.labelPos = "right");
        var h = t("text", {
            className: "chart-label",
            x: "left" === e.labelPos ? Wb : c - l(d + "", 4.5) - Wb,
            y: 0,
            dy: Xb / -2 + "px",
            "font-size": Xb + "px",
            "text-anchor": "start",
            innerHTML: d + ""
        }), i = t("g", {
            transform: "translate(0, " + b + ")"
        });
        return i.appendChild(g), i.appendChild(h), i;
    }
    function N(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, g = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {}, i = n(b, h.zeroLine), j = Ib(i, 2), k = j[0], l = j[1];
        l -= g, 0 === k && (k = h.minHeight, l -= h.minHeight);
        var m = t("rect", {
            className: "bar mini",
            style: "fill: " + d,
            "data-point-index": f,
            x: a,
            y: l,
            width: c,
            height: k
        });
        if ((e += "") || e.length) {
            m.setAttribute("y", 0), m.setAttribute("x", 0);
            var o = t("text", {
                className: "data-point-value",
                x: c / 2,
                y: 0,
                dy: Xb / 2 * -1 + "px",
                "font-size": Xb + "px",
                "text-anchor": "middle",
                innerHTML: e
            }), p = t("g", {
                "data-point-index": f,
                transform: "translate(" + a + ", " + l + ")"
            });
            return p.appendChild(m), p.appendChild(o), p;
        }
        return m;
    }
    function O(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, g = t("circle", {
            style: "fill: " + d,
            "data-point-index": f,
            cx: a,
            cy: b,
            r: c
        });
        if ((e += "") || e.length) {
            g.setAttribute("cy", 0), g.setAttribute("cx", 0);
            var h = t("text", {
                className: "data-point-value",
                x: 0,
                y: 0,
                dy: Xb / 2 * -1 - c + "px",
                "font-size": Xb + "px",
                "text-anchor": "middle",
                innerHTML: e
            }), i = t("g", {
                "data-point-index": f,
                transform: "translate(" + a + ", " + b + ")"
            });
            return i.appendChild(g), i.appendChild(h), i;
        }
        return g;
    }
    function P(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, f = b.map(function(b, c) {
            return a[c] + "," + b;
        }).join("L"), g = z("M" + f, "line-graph-path", c);
        if (d.heatline) {
            var h = B(e.svgDefs, c);
            g.style.stroke = "url(#" + h + ")";
        }
        var i = {
            path: g
        };
        if (d.regionFill) {
            var j = B(e.svgDefs, c, !0), k = "M" + a[0] + "," + e.zeroLine + "L" + f + "L" + a.slice(-1)[0] + "," + e.zeroLine;
            i.region = z(k, "region-fill", "none", "url(#" + j + ")");
        }
        return i;
    }
    function Q(a, b, c, d) {
        var e = "string" == typeof b ? b : b.join(", ");
        return [ a, {
            transform: c.join(", ")
        }, d, ec, "translate", {
            transform: e
        } ];
    }
    function R(a, b, c) {
        return Q(a, [ c, 0 ], [ b, 0 ], cc);
    }
    function S(a, b, c) {
        return Q(a, [ 0, c ], [ 0, b ], cc);
    }
    function T(a, b, c, d) {
        var e = b - c, f = a.childNodes[0];
        return [ [ f, {
            height: e,
            "stroke-dasharray": f.getAttribute("width") + ", " + e
        }, cc, ec ], Q(a, [ 0, d ], [ 0, c ], cc) ];
    }
    function U(a, b, c, d) {
        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, f = n(c, (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}).zeroLine), g = Ib(f, 2), h = g[0], i = g[1];
        return i -= e, "rect" !== a.nodeName ? [ [ a.childNodes[0], {
            width: d,
            height: h
        }, ac, ec ], Q(a, a.getAttribute("transform").split("(")[1].slice(0, -1), [ b, i ], cc) ] : [ [ a, {
            width: d,
            height: h,
            x: b,
            y: i
        }, ac, ec ] ];
    }
    function V(a, b, c) {
        return "circle" !== a.nodeName ? [ Q(a, a.getAttribute("transform").split("(")[1].slice(0, -1), [ b, c ], cc) ] : [ [ a, {
            cx: b,
            cy: c
        }, ac, ec ] ];
    }
    function W(a, b, c, d) {
        var e = [], f = c.map(function(a, c) {
            return b[c] + "," + a;
        }).join("L"), g = [ a.path, {
            d: "M" + f
        }, bc, ec ];
        if (e.push(g), a.region) {
            var h = b[0] + "," + d + "L", i = "L" + b.slice(-1)[0] + ", " + d, j = [ a.region, {
                d: "M" + h + f + i
            }, bc, ec ];
            e.push(j);
        }
        return e;
    }
    function X(a, b) {
        return [ a, {
            d: b
        }, ac, ec ];
    }
    function Y(a, b, c) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear", e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, g = a.cloneNode(!0), h = a.cloneNode(!0);
        for (var i in b) {
            var j = void 0;
            j = "transform" === i ? document.createElementNS("http://www.w3.org/2000/svg", "animateTransform") : document.createElementNS("http://www.w3.org/2000/svg", "animate");
            var k = f[i] || a.getAttribute(i), l = b[i], m = {
                attributeName: i,
                from: k,
                to: l,
                begin: "0s",
                dur: c / 1e3 + "s",
                values: k + ";" + l,
                keySplines: fc[d],
                keyTimes: "0;1",
                calcMode: "spline",
                fill: "freeze"
            };
            e && (m.type = e);
            for (var n in m) j.setAttribute(n, m[n]);
            g.appendChild(j), e ? h.setAttribute(i, "translate(" + l + ")") : h.setAttribute(i, l);
        }
        return [ g, h ];
    }
    function Z(a, b) {
        a.style.transform = b, a.style.webkitTransform = b, a.style.msTransform = b, a.style.mozTransform = b, 
        a.style.oTransform = b;
    }
    function $(a, b) {
        var c = [], d = [];
        b.map(function(a) {
            var b = a[0], e = b.parentNode, f = void 0, g = void 0;
            a[0] = b;
            var h = Y.apply(void 0, Jb(a)), i = Ib(h, 2);
            f = i[0], g = i[1], c.push(g), d.push([ f, e ]), e.replaceChild(f, b);
        });
        var e = a.cloneNode(!0);
        return d.map(function(a, d) {
            a[1].replaceChild(c[d], a[0]), b[d][0] = c[d];
        }), e;
    }
    function _(a, b, c) {
        if (0 !== c.length) {
            var d = $(b, c);
            b.parentNode == a && (a.removeChild(b), a.appendChild(d)), setTimeout(function() {
                d.parentNode == a && (a.removeChild(d), a.appendChild(b));
            }, dc);
        }
    }
    function ab(a, b) {
        var c = document.createElement("a");
        c.style = "display: none";
        var d = new Blob(b, {
            type: "image/svg+xml; charset=utf-8"
        }), e = window.URL.createObjectURL(d);
        c.href = e, c.download = a, document.body.appendChild(c), c.click(), setTimeout(function() {
            document.body.removeChild(c), window.URL.revokeObjectURL(e);
        }, 300);
    }
    function bb(b) {
        var c = b.cloneNode(!0);
        c.classList.add("chart-container"), c.setAttribute("xmlns", "http://www.w3.org/2000/svg"), 
        c.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        var d = a.create("style", {
            innerHTML: gc
        });
        c.insertBefore(d, c.firstChild);
        var e = a.create("div");
        return e.appendChild(c), e.innerHTML;
    }
    function cb(a) {
        var b = new Date(a);
        return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b;
    }
    function db(a) {
        var b = a.getDate(), c = a.getMonth() + 1;
        return [ a.getFullYear(), (c > 9 ? "" : "0") + c, (b > 9 ? "" : "0") + b ].join("-");
    }
    function eb(a) {
        return new Date(a.getTime());
    }
    function fb(a, b) {
        var c = kb(a);
        return Math.ceil(gb(c, b) / kc);
    }
    function gb(a, b) {
        var c = mc * lc;
        return (cb(b) - cb(a)) / c;
    }
    function hb(a, b) {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }
    function ib(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], c = nc[a];
        return b ? c.slice(0, 3) : c;
    }
    function jb(a, b) {
        return new Date(b, a + 1, 0);
    }
    function kb(a) {
        var b = eb(a), c = b.getDay();
        return 0 !== c && lb(b, -1 * c), b;
    }
    function lb(a, b) {
        a.setDate(a.getDate() + b);
    }
    function mb(a, b, c) {
        var d = Object.keys(qc).filter(function(b) {
            return a.includes(b);
        }), e = qc[d[0]];
        return Object.assign(e, {
            constants: b,
            getData: c
        }), new pc(e);
    }
    function nb(a) {
        if (0 === a) return [ 0, 0 ];
        if (isNaN(a)) return {
            mantissa: -6755399441055744,
            exponent: 972
        };
        var b = a > 0 ? 1 : -1;
        if (!isFinite(a)) return {
            mantissa: 4503599627370496 * b,
            exponent: 972
        };
        a = Math.abs(a);
        var c = Math.floor(Math.log10(a));
        return [ b * (a / Math.pow(10, c)), c ];
    }
    function ob(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, c = Math.ceil(a), d = Math.floor(b), e = c - d, f = e, g = 1;
        e > 5 && (e % 2 != 0 && (e = ++c - d), f = e / 2, g = 2), e <= 2 && (g = e / (f = 4)), 
        0 === e && (f = 5, g = 1);
        for (var h = [], i = 0; i <= f; i++) h.push(d + g * i);
        return h;
    }
    function pb(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, c = nb(a), d = Ib(c, 2), e = d[0], f = d[1], g = b ? b / Math.pow(10, f) : 0, h = ob(e = e.toFixed(6), g);
        return h = h.map(function(a) {
            return a * Math.pow(10, f);
        });
    }
    function qb(a) {
        function b(a, b) {
            for (var c = pb(a), d = c[1] - c[0], e = 0, f = 1; e < b; f++) e += d, c.unshift(-1 * e);
            return c;
        }
        var c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], d = Math.max.apply(Math, Jb(a)), e = Math.min.apply(Math, Jb(a)), f = [];
        if (d >= 0 && e >= 0) nb(d)[1], f = c ? pb(d, e) : pb(d); else if (d > 0 && e < 0) {
            var g = Math.abs(e);
            d >= g ? (nb(d)[1], f = b(d, g)) : (nb(g)[1], f = b(g, d).map(function(a) {
                return -1 * a;
            }));
        } else if (d <= 0 && e <= 0) {
            var h = Math.abs(e), i = Math.abs(d);
            nb(h)[1], f = (f = c ? pb(h, i) : pb(h)).reverse().map(function(a) {
                return -1 * a;
            });
        }
        return f;
    }
    function rb(a) {
        var b = sb(a);
        return a.indexOf(0) >= 0 ? a.indexOf(0) : a[0] > 0 ? -1 * a[0] / b : -1 * a[a.length - 1] / b + (a.length - 1);
    }
    function sb(a) {
        return a[1] - a[0];
    }
    function tb(a) {
        return a[a.length - 1] - a[0];
    }
    function ub(a, b) {
        return j(b.zeroLine - a * b.scaleMultiplier);
    }
    function vb(a, b) {
        var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = b.reduce(function(b, c) {
            return Math.abs(c - a) < Math.abs(b - a) ? c : b;
        });
        return c ? b.indexOf(d) : d;
    }
    function wb(a, b) {
        for (var c = Math.max.apply(Math, Jb(a)), d = 1 / (b - 1), e = [], f = 0; f < b; f++) {
            var g = c * d * f;
            e.push(g);
        }
        return e;
    }
    function xb(a, b) {
        return b.filter(function(b) {
            return b < a;
        }).length;
    }
    function yb(a, b) {
        a.labels = a.labels || [];
        var c = a.labels.length, d = a.datasets, e = new Array(c).fill(0);
        return d || (d = [ {
            values: e
        } ]), d.map(function(a) {
            if (a.values) {
                var d = a.values;
                d = (d = d.map(function(a) {
                    return isNaN(a) ? 0 : a;
                })).length > c ? d.slice(0, c) : k(d, c - d.length, 0);
            } else a.values = e;
            a.chartType || (Mb.includes(b), a.chartType = b);
        }), a.yRegions && a.yRegions.map(function(a) {
            if (a.end < a.start) {
                var b = [ a.end, a.start ];
                a.start = b[0], a.end = b[1];
            }
        }), a;
    }
    function zb(a) {
        var b = a.labels.length, c = new Array(b).fill(0), d = {
            labels: a.labels.slice(0, -1),
            datasets: a.datasets.map(function(a) {
                return {
                    name: "",
                    values: c.slice(0, -1),
                    chartType: a.chartType
                };
            })
        };
        return a.yMarkers && (d.yMarkers = [ {
            value: 0,
            label: ""
        } ]), a.yRegions && (d.yRegions = [ {
            start: 0,
            end: 0,
            label: ""
        } ]), d;
    }
    function Ab(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], d = a / b.length;
        d <= 0 && (d = 1);
        var e = d / Ob;
        return b.map(function(a, b) {
            return (a += "").length > e && (c ? b % Math.ceil(a.length / e) != 0 && (a = "") : a = e - 3 > 0 ? a.slice(0, e - 3) + " ..." : a.slice(0, e) + ".."), 
            a;
        });
    }
    function Bb() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "line", b = arguments[1], c = arguments[2];
        return "axis-mixed" === a ? (c.type = "line", new uc(b, c)) : vc[a] ? new vc[a](b, c) : void console.error("Undefined chart type: " + a);
    }
    !function(a, b) {
        void 0 === b && (b = {});
        var c = b.insertAt;
        if (a && "undefined" != typeof document) {
            var d = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
            e.type = "text/css", "top" === c && d.firstChild ? d.insertBefore(e, d.firstChild) : d.appendChild(e), 
            e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a));
        }
    }('.chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:1;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ol,.graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}', {});
    var Cb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a;
    } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, Db = (function() {
        function a(a) {
            this.value = a;
        }
        function b(a) {
            function b(a, b) {
                return new Promise(function(d, g) {
                    var h = {
                        key: a,
                        arg: b,
                        resolve: d,
                        reject: g,
                        next: null
                    };
                    f ? f = f.next = h : (e = f = h, c(a, b));
                });
            }
            function c(b, e) {
                try {
                    var f = a[b](e), g = f.value;
                    g instanceof h ? Promise.resolve(g.value).then(function(a) {
                        c("next", a);
                    }, function(a) {
                        c("throw", a);
                    }) : d(f.done ? "return" : "normal", f.value);
                } catch (h) {
                    d("throw", h);
                }
            }
            function d(a, b) {
                switch (a) {
                  case "return":
                    e.resolve({
                        value: b,
                        done: !0
                    });
                    break;

                  case "throw":
                    e.reject(b);
                    break;

                  default:
                    e.resolve({
                        value: b,
                        done: !1
                    });
                }
                (e = e.next) ? c(e.key, e.arg) : f = null;
            }
            var e, f;
            this._invoke = b, "function" != typeof a.return && (this.return = void 0);
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (b.prototype[Symbol.asyncIterator] = function() {
            return this;
        }), b.prototype.next = function(a) {
            return this._invoke("next", a);
        }, b.prototype.throw = function(a) {
            return this._invoke("throw", a);
        }, b.prototype.return = function(a) {
            return this._invoke("return", a);
        };
    }(), function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }), Eb = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(), Fb = function zc(a, b, c) {
        null === a && (a = Function.prototype);
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : zc(e, b, c);
        }
        if ("value" in d) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    }, Gb = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
    }, Hb = function(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !b || "object" != typeof b && "function" != typeof b ? a : b;
    }, Ib = function() {
        function a(a, b) {
            var c = [], d = !0, e = !1, f = void 0;
            try {
                for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), 
                !b || c.length !== b); d = !0) ;
            } catch (a) {
                e = !0, f = a;
            } finally {
                try {
                    !d && h.return && h.return();
                } finally {
                    if (e) throw f;
                }
            }
            return c;
        }
        return function(b, c) {
            if (Array.isArray(b)) return b;
            if (Symbol.iterator in Object(b)) return a(b, c);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), Jb = function(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c;
        }
        return Array.from(a);
    };
    a.create = function(b, c) {
        var d = document.createElement(b);
        for (var e in c) {
            var f = c[e];
            if ("inside" === e) a(f).appendChild(d); else if ("around" === e) {
                var g = a(f);
                g.parentNode.insertBefore(d, g), d.appendChild(g);
            } else "styles" === e ? "object" === (void 0 === f ? "undefined" : Cb(f)) && Object.keys(f).map(function(a) {
                d.style[a] = f[a];
            }) : e in d ? d[e] = f : d.setAttribute(e, f);
        }
        return d;
    };
    var Kb = {
        margins: {
            top: 10,
            bottom: 10,
            left: 20,
            right: 20
        },
        paddings: {
            top: 20,
            bottom: 40,
            left: 30,
            right: 10
        },
        baseHeight: 240,
        titleHeight: 20,
        legendHeight: 30,
        titleFontSize: 12
    }, Lb = 700, Mb = [ "line", "bar" ], Nb = 2, Ob = 7, Pb = [ "light-blue", "blue", "violet", "red", "orange", "yellow", "green", "light-green", "purple", "magenta", "light-grey", "dark-grey" ], Qb = {
        bar: Pb,
        line: Pb,
        pie: Pb,
        percentage: Pb,
        heatmap: [ "#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127" ]
    }, Rb = Math.PI / 180, Sb = function() {
        function b(a) {
            var c = a.parent, d = void 0 === c ? null : c, e = a.colors, f = void 0 === e ? [] : e;
            Db(this, b), this.parent = d, this.colors = f, this.titleName = "", this.titleValue = "", 
            this.listValues = [], this.titleValueFirst = 0, this.x = 0, this.y = 0, this.top = 0, 
            this.left = 0, this.setup();
        }
        return Eb(b, [ {
            key: "setup",
            value: function() {
                this.makeTooltip();
            }
        }, {
            key: "refresh",
            value: function() {
                this.fill(), this.calcPosition();
            }
        }, {
            key: "makeTooltip",
            value: function() {
                var b = this;
                this.container = a.create("div", {
                    inside: this.parent,
                    className: "graph-svg-tip comparison",
                    innerHTML: '<span class="title"></span>\n				<ul class="data-point-list"></ul>\n				<div class="svg-pointer"></div>'
                }), this.hideTip(), this.title = this.container.querySelector(".title"), this.dataPointList = this.container.querySelector(".data-point-list"), 
                this.parent.addEventListener("mouseleave", function() {
                    b.hideTip();
                });
            }
        }, {
            key: "fill",
            value: function() {
                var b = this, c = void 0;
                this.index && this.container.setAttribute("data-point-index", this.index), c = this.titleValueFirst ? "<strong>" + this.titleValue + "</strong>" + this.titleName : this.titleName + "<strong>" + this.titleValue + "</strong>", 
                this.title.innerHTML = c, this.dataPointList.innerHTML = "", this.listValues.map(function(c, d) {
                    var e = b.colors[d] || "black", f = 0 === c.formatted || c.formatted ? c.formatted : c.value, g = a.create("li", {
                        styles: {
                            "border-top": "3px solid " + e
                        },
                        innerHTML: '<strong style="display: block;">' + (0 === f || f ? f : "") + "</strong>\n					" + (c.title ? c.title : "")
                    });
                    b.dataPointList.appendChild(g);
                });
            }
        }, {
            key: "calcPosition",
            value: function() {
                var a = this.container.offsetWidth;
                this.top = this.y - this.container.offsetHeight - 5, this.left = this.x - a / 2;
                var b = this.parent.offsetWidth - a, c = this.container.querySelector(".svg-pointer");
                if (this.left < 0) c.style.left = "calc(50% - " + -1 * this.left + "px)", this.left = 0; else if (this.left > b) {
                    var d = "calc(50% + " + (this.left - b) + "px)";
                    c.style.left = d, this.left = b;
                } else c.style.left = "50%";
            }
        }, {
            key: "setValues",
            value: function(a, b) {
                var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                this.titleName = c.name, this.titleValue = c.value, this.listValues = d, this.x = a, 
                this.y = b, this.titleValueFirst = c.valueFirst || 0, this.index = e, this.refresh();
            }
        }, {
            key: "hideTip",
            value: function() {
                this.container.style.top = "0px", this.container.style.left = "0px", this.container.style.opacity = "0";
            }
        }, {
            key: "showTip",
            value: function() {
                this.container.style.top = this.top + "px", this.container.style.left = this.left + "px", 
                this.container.style.opacity = "1";
            }
        } ]), b;
    }(), Tb = {
        "light-blue": "#7cd6fd",
        blue: "#5e64ff",
        violet: "#743ee2",
        red: "#ff5858",
        orange: "#ffa00a",
        yellow: "#feef72",
        green: "#28a745",
        "light-green": "#98d85b",
        purple: "#b554ff",
        magenta: "#ffa3ef",
        black: "#36114C",
        grey: "#bdd3e6",
        "light-grey": "#f0f4f7",
        "dark-grey": "#b8c2cc"
    }, Ub = function(a) {
        return Tb[a] || a;
    }, Vb = 6, Wb = 4, Xb = 10, Yb = "#dadada", Zb = "#555b51", $b = {
        bar: function(a) {
            var b = void 0;
            "rect" !== a.nodeName && (b = a.getAttribute("transform"), a = a.childNodes[0]);
            var c = a.cloneNode();
            return c.style.fill = "#000000", c.style.opacity = "0.4", b && c.setAttribute("transform", b), 
            c;
        },
        dot: function(a) {
            var b = void 0;
            "circle" !== a.nodeName && (b = a.getAttribute("transform"), a = a.childNodes[0]);
            var c = a.cloneNode(), d = a.getAttribute("r"), e = a.getAttribute("fill");
            return c.setAttribute("r", parseInt(d) + 4), c.setAttribute("fill", e), c.style.opacity = "0.6", 
            b && c.setAttribute("transform", b), c;
        },
        heat_square: function(a) {
            var b = void 0;
            "circle" !== a.nodeName && (b = a.getAttribute("transform"), a = a.childNodes[0]);
            var c = a.cloneNode(), d = a.getAttribute("r"), e = a.getAttribute("fill");
            return c.setAttribute("r", parseInt(d) + 4), c.setAttribute("fill", e), c.style.opacity = "0.6", 
            b && c.setAttribute("transform", b), c;
        }
    }, _b = {
        bar: function(a, b) {
            var c = void 0;
            "rect" !== a.nodeName && (c = a.getAttribute("transform"), a = a.childNodes[0]);
            var d = [ "x", "y", "width", "height" ];
            Object.values(a.attributes).filter(function(a) {
                return d.includes(a.name) && a.specified;
            }).map(function(a) {
                b.setAttribute(a.name, a.nodeValue);
            }), c && b.setAttribute("transform", c);
        },
        dot: function(a, b) {
            var c = void 0;
            "circle" !== a.nodeName && (c = a.getAttribute("transform"), a = a.childNodes[0]);
            var d = [ "cx", "cy" ];
            Object.values(a.attributes).filter(function(a) {
                return d.includes(a.name) && a.specified;
            }).map(function(a) {
                b.setAttribute(a.name, a.nodeValue);
            }), c && b.setAttribute("transform", c);
        },
        heat_square: function(a, b) {
            var c = void 0;
            "circle" !== a.nodeName && (c = a.getAttribute("transform"), a = a.childNodes[0]);
            var d = [ "cx", "cy" ];
            Object.values(a.attributes).filter(function(a) {
                return d.includes(a.name) && a.specified;
            }).map(function(a) {
                b.setAttribute(a.name, a.nodeValue);
            }), c && b.setAttribute("transform", c);
        }
    }, ac = 350, bc = 350, cc = ac, dc = 250, ec = "easein", fc = {
        ease: "0.25 0.1 0.25 1",
        linear: "0 0 1 1",
        easein: "0.1 0.8 0.2 1",
        easeout: "0 0 0.58 1",
        easeinout: "0.42 0 0.58 1"
    }, gc = ".chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ul{padding-left:0;display:flex}.graph-svg-tip ol{padding-left:0;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}", hc = void 0, ic = function() {
        function b(a, c) {
            if (Db(this, b), this.parent = "string" == typeof a ? document.querySelector(a) : a, 
            !(this.parent instanceof HTMLElement)) throw new Error("No `parent` element to render on was provided.");
            this.rawChartArgs = c, this.title = c.title || "", this.type = c.type || "", this.realData = this.prepareData(c.data), 
            this.data = this.prepareFirstData(this.realData), this.colors = this.validateColors(c.colors, this.type), 
            this.config = {
                showTooltip: 1,
                showLegend: 1,
                isNavigable: c.isNavigable || 0,
                animate: 1
            }, this.measures = JSON.parse(JSON.stringify(Kb));
            var d = this.measures;
            this.setMeasures(c), this.title.length || (d.titleHeight = 0), this.config.showLegend || (d.legendHeight = 0), 
            this.argHeight = c.height || d.baseHeight, this.state = {}, this.options = {}, this.initTimeout = Lb, 
            this.config.isNavigable && (this.overlays = []), this.configure(c);
        }
        return Eb(b, [ {
            key: "prepareData",
            value: function(a) {
                return a;
            }
        }, {
            key: "prepareFirstData",
            value: function(a) {
                return a;
            }
        }, {
            key: "validateColors",
            value: function(a, b) {
                var c = [];
                return (a = (a || []).concat(Qb[b])).forEach(function(a) {
                    var b = Ub(a);
                    r(b) ? c.push(b) : console.warn('"' + a + '" is not a valid color.');
                }), c;
            }
        }, {
            key: "setMeasures",
            value: function() {}
        }, {
            key: "configure",
            value: function() {
                var a = this.argHeight;
                this.baseHeight = a, this.height = a - h(this.measures), hc = this.boundDrawFn.bind(this), 
                window.addEventListener("resize", hc), window.addEventListener("orientationchange", this.boundDrawFn.bind(this));
            }
        }, {
            key: "boundDrawFn",
            value: function() {
                this.draw(!0);
            }
        }, {
            key: "unbindWindowEvents",
            value: function() {
                window.removeEventListener("resize", hc), window.removeEventListener("orientationchange", this.boundDrawFn.bind(this));
            }
        }, {
            key: "setup",
            value: function() {
                this.makeContainer(), this.updateWidth(), this.makeTooltip(), this.draw(!1, !0);
            }
        }, {
            key: "makeContainer",
            value: function() {
                this.parent.innerHTML = "";
                var b = {
                    inside: this.parent,
                    className: "chart-container"
                };
                this.independentWidth && (b.styles = {
                    width: this.independentWidth + "px"
                }), this.container = a.create("div", b);
            }
        }, {
            key: "makeTooltip",
            value: function() {
                this.tip = new Sb({
                    parent: this.container,
                    colors: this.colors
                }), this.bindTooltip();
            }
        }, {
            key: "bindTooltip",
            value: function() {}
        }, {
            key: "draw",
            value: function() {
                var a = this, b = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.updateWidth(), this.calc(b), this.makeChartArea(), this.setupComponents(), 
                this.components.forEach(function(b) {
                    return b.setup(a.drawArea);
                }), this.render(this.components, !1), c && (this.data = this.realData, setTimeout(function() {
                    a.update(a.data);
                }, this.initTimeout)), this.renderLegend(), this.setupNavigation(c);
            }
        }, {
            key: "calc",
            value: function() {}
        }, {
            key: "updateWidth",
            value: function() {
                this.baseWidth = d(this.parent), this.width = this.baseWidth - i(this.measures);
            }
        }, {
            key: "makeChartArea",
            value: function() {
                this.svg && this.container.removeChild(this.svg);
                var a = this.measures;
                this.svg = w(this.container, "frappe-chart chart", this.baseWidth, this.baseHeight), 
                this.svgDefs = x(this.svg), this.title.length && (this.titleEL = G("title", a.margins.left, a.margins.top, this.title, {
                    fontSize: a.titleFontSize,
                    fill: "#666666",
                    dy: a.titleFontSize
                }));
                var b = f(a);
                this.drawArea = y(this.type + "-chart chart-draw-area", "translate(" + g(a) + ", " + b + ")"), 
                this.config.showLegend && (b += this.height + a.paddings.bottom, this.legendArea = y("chart-legend", "translate(" + g(a) + ", " + b + ")")), 
                this.title.length && this.svg.appendChild(this.titleEL), this.svg.appendChild(this.drawArea), 
                this.config.showLegend && this.svg.appendChild(this.legendArea), this.updateTipOffset(g(a), f(a));
            }
        }, {
            key: "updateTipOffset",
            value: function(a, b) {
                this.tip.offset = {
                    x: a,
                    y: b
                };
            }
        }, {
            key: "setupComponents",
            value: function() {
                this.components = new Map();
            }
        }, {
            key: "update",
            value: function(a) {
                a || console.error("No data to update."), this.data = this.prepareData(a), this.calc(), 
                this.render();
            }
        }, {
            key: "render",
            value: function() {
                var a = this, b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.components, c = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.config.isNavigable && this.overlays.map(function(a) {
                    return a.parentNode.removeChild(a);
                });
                var d = [];
                b.forEach(function(a) {
                    d = d.concat(a.update(c));
                }), d.length > 0 ? (_(this.container, this.svg, d), setTimeout(function() {
                    b.forEach(function(a) {
                        return a.make();
                    }), a.updateNav();
                }, 400)) : (b.forEach(function(a) {
                    return a.make();
                }), this.updateNav());
            }
        }, {
            key: "updateNav",
            value: function() {
                this.config.isNavigable && (this.makeOverlay(), this.bindUnits());
            }
        }, {
            key: "renderLegend",
            value: function() {}
        }, {
            key: "setupNavigation",
            value: function() {
                var a = this, b = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.config.isNavigable && b && (this.bindOverlay(), this.keyActions = {
                    13: this.onEnterKey.bind(this),
                    37: this.onLeftArrow.bind(this),
                    38: this.onUpArrow.bind(this),
                    39: this.onRightArrow.bind(this),
                    40: this.onDownArrow.bind(this)
                }, document.addEventListener("keydown", function(b) {
                    c(a.container) && (b = b || window.event, a.keyActions[b.keyCode] && a.keyActions[b.keyCode]());
                }));
            }
        }, {
            key: "makeOverlay",
            value: function() {}
        }, {
            key: "updateOverlay",
            value: function() {}
        }, {
            key: "bindOverlay",
            value: function() {}
        }, {
            key: "bindUnits",
            value: function() {}
        }, {
            key: "onLeftArrow",
            value: function() {}
        }, {
            key: "onRightArrow",
            value: function() {}
        }, {
            key: "onUpArrow",
            value: function() {}
        }, {
            key: "onDownArrow",
            value: function() {}
        }, {
            key: "onEnterKey",
            value: function() {}
        }, {
            key: "addDataPoint",
            value: function() {}
        }, {
            key: "removeDataPoint",
            value: function() {}
        }, {
            key: "getDataPoint",
            value: function() {}
        }, {
            key: "setCurrentDataPoint",
            value: function() {}
        }, {
            key: "updateDataset",
            value: function() {}
        }, {
            key: "export",
            value: function() {
                var a = bb(this.svg);
                ab(this.title || "Chart", [ a ]);
            }
        } ]), b;
    }(), jc = function(a) {
        function b(a, c) {
            return Db(this, b), Hb(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
        }
        return Gb(b, a), Eb(b, [ {
            key: "configure",
            value: function(a) {
                Fb(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "configure", this).call(this, a), 
                this.config.maxSlices = a.maxSlices || 20, this.config.maxLegendPoints = a.maxLegendPoints || 20;
            }
        }, {
            key: "calc",
            value: function() {
                var a = this, b = this.state, c = this.config.maxSlices;
                b.sliceTotals = [];
                var d = this.data.labels.map(function(b, c) {
                    var d = 0;
                    return a.data.datasets.map(function(a) {
                        d += a.values[c];
                    }), [ d, b ];
                }).filter(function(a) {
                    return a[0] >= 0;
                }), e = d;
                if (d.length > c) {
                    d.sort(function(a, b) {
                        return b[0] - a[0];
                    }), e = d.slice(0, c - 1);
                    var f = 0;
                    d.slice(c - 1).map(function(a) {
                        f += a[0];
                    }), e.push([ f, "Rest" ]), this.colors[c - 1] = "grey";
                }
                b.labels = [], e.map(function(a) {
                    b.sliceTotals.push(a[0]), b.labels.push(a[1]);
                }), b.grandTotal = b.sliceTotals.reduce(function(a, b) {
                    return a + b;
                }, 0), this.center = {
                    x: this.width / 2,
                    y: this.height / 2
                };
            }
        }, {
            key: "renderLegend",
            value: function() {
                var a = this, b = this.state;
                this.legendArea.textContent = "", this.legendTotals = b.sliceTotals.slice(0, this.config.maxLegendPoints);
                var c = 0, d = 0;
                this.legendTotals.map(function(e, f) {
                    var g = Math.floor((a.width - i(a.measures)) / 110);
                    c > g && (c = 0, d += 20);
                    var h = F(110 * c + 5, d, 5, a.colors[f], b.labels[f] + ": " + e);
                    a.legendArea.appendChild(h), c++;
                });
            }
        } ]), b;
    }(ic), kc = 7, lc = 1e3, mc = 86400, nc = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], oc = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], pc = function() {
        function a(b) {
            var c = b.layerClass, d = void 0 === c ? "" : c, e = b.layerTransform, f = void 0 === e ? "" : e, g = b.constants, h = b.getData, i = b.makeElements, j = b.animateElements;
            Db(this, a), this.layerTransform = f, this.constants = g, this.makeElements = i, 
            this.getData = h, this.animateElements = j, this.store = [], this.labels = [], this.layerClass = d, 
            this.layerClass = "function" == typeof this.layerClass ? this.layerClass() : this.layerClass, 
            this.refresh();
        }
        return Eb(a, [ {
            key: "refresh",
            value: function(a) {
                this.data = a || this.getData();
            }
        }, {
            key: "setup",
            value: function(a) {
                this.layer = y(this.layerClass, this.layerTransform, a);
            }
        }, {
            key: "make",
            value: function() {
                this.render(this.data), this.oldData = this.data;
            }
        }, {
            key: "render",
            value: function(a) {
                var b = this;
                this.store = this.makeElements(a), this.layer.textContent = "", this.store.forEach(function(a) {
                    b.layer.appendChild(a);
                }), this.labels.forEach(function(a) {
                    b.layer.appendChild(a);
                });
            }
        }, {
            key: "update",
            value: function() {
                var a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.refresh();
                var b = [];
                return a && (b = this.animateElements(this.data) || []), b;
            }
        } ]), a;
    }(), qc = {
        pieSlices: {
            layerClass: "pie-slices",
            makeElements: function(a) {
                return a.sliceStrings.map(function(b, c) {
                    var d = z(b, "pie-path", "none", a.colors[c]);
                    return d.style.transition = "transform .3s;", d;
                });
            },
            animateElements: function(a) {
                return this.store.map(function(b, c) {
                    return X(b, a.sliceStrings[c]);
                });
            }
        },
        percentageBars: {
            layerClass: "percentage-bars",
            makeElements: function(a) {
                var b = this;
                return a.xPositions.map(function(c, d) {
                    return C(c, 0, a.widths[d], b.constants.barHeight, b.constants.barDepth, a.colors[d]);
                });
            },
            animateElements: function(a) {
                if (a) return [];
            }
        },
        yAxis: {
            layerClass: "y axis",
            makeElements: function(a) {
                var b = this;
                return a.positions.map(function(c, d) {
                    return J(c, a.labels[d], b.constants.width, {
                        mode: b.constants.mode,
                        pos: b.constants.pos
                    });
                });
            },
            animateElements: function(a) {
                var b = a.positions, c = a.labels, d = this.oldData.positions, e = this.oldData.labels, f = o(d, b), g = Ib(f, 2);
                d = g[0], b = g[1];
                var h = o(e, c), i = Ib(h, 2);
                return e = i[0], c = i[1], this.render({
                    positions: d,
                    labels: c
                }), this.store.map(function(a, c) {
                    return S(a, b[c], d[c]);
                });
            }
        },
        xAxis: {
            layerClass: "x axis",
            makeElements: function(a) {
                var b = this;
                return a.positions.map(function(c, d) {
                    return K(c, a.calcLabels[d], b.constants.height, {
                        mode: b.constants.mode,
                        pos: b.constants.pos
                    });
                });
            },
            animateElements: function(a) {
                var b = a.positions, c = a.calcLabels, d = this.oldData.positions, e = this.oldData.calcLabels, f = o(d, b), g = Ib(f, 2);
                d = g[0], b = g[1];
                var h = o(e, c), i = Ib(h, 2);
                return e = i[0], c = i[1], this.render({
                    positions: d,
                    calcLabels: c
                }), this.store.map(function(a, c) {
                    return R(a, b[c], d[c]);
                });
            }
        },
        yMarkers: {
            layerClass: "y-markers",
            makeElements: function(a) {
                var b = this;
                return a.map(function(a) {
                    return L(a.position, a.label, b.constants.width, {
                        labelPos: a.options.labelPos,
                        mode: "span",
                        lineType: "dashed"
                    });
                });
            },
            animateElements: function(a) {
                var b = o(this.oldData, a), c = Ib(b, 2);
                this.oldData = c[0];
                var d = (a = c[1]).map(function(a) {
                    return a.position;
                }), e = a.map(function(a) {
                    return a.label;
                }), f = a.map(function(a) {
                    return a.options;
                }), g = this.oldData.map(function(a) {
                    return a.position;
                });
                return this.render(g.map(function(a, b) {
                    return {
                        position: g[b],
                        label: e[b],
                        options: f[b]
                    };
                })), this.store.map(function(a, b) {
                    return S(a, d[b], g[b]);
                });
            }
        },
        yRegions: {
            layerClass: "y-regions",
            makeElements: function(a) {
                var b = this;
                return a.map(function(a) {
                    return M(a.startPos, a.endPos, b.constants.width, a.label, {
                        labelPos: a.options.labelPos
                    });
                });
            },
            animateElements: function(a) {
                var b = o(this.oldData, a), c = Ib(b, 2);
                this.oldData = c[0];
                var d = (a = c[1]).map(function(a) {
                    return a.endPos;
                }), e = a.map(function(a) {
                    return a.label;
                }), f = a.map(function(a) {
                    return a.startPos;
                }), g = a.map(function(a) {
                    return a.options;
                }), h = this.oldData.map(function(a) {
                    return a.endPos;
                }), i = this.oldData.map(function(a) {
                    return a.startPos;
                });
                this.render(h.map(function(a, b) {
                    return {
                        startPos: i[b],
                        endPos: h[b],
                        label: e[b],
                        options: g[b]
                    };
                }));
                var j = [];
                return this.store.map(function(a, b) {
                    j = j.concat(T(a, f[b], d[b], h[b]));
                }), j;
            }
        },
        heatDomain: {
            layerClass: function() {
                return "heat-domain domain-" + this.constants.index;
            },
            makeElements: function(a) {
                var b = this, c = this.constants, d = c.index, e = c.colWidth, f = c.rowHeight, g = c.squareSize, h = c.xTranslate, i = 0;
                return this.serializedSubDomains = [], a.cols.map(function(a, c) {
                    1 === c && b.labels.push(G("domain-name", h, -12, ib(d, !0).toUpperCase(), {
                        fontSize: 9
                    })), a.map(function(a, c) {
                        if (a.fill) {
                            var d = {
                                "data-date": a.yyyyMmDd,
                                "data-value": a.dataValue,
                                "data-day": c
                            }, e = D("day", h, i, g, a.fill, d);
                            b.serializedSubDomains.push(e);
                        }
                        i += f;
                    }), i = 0, h += e;
                }), this.serializedSubDomains;
            },
            animateElements: function(a) {
                if (a) return [];
            }
        },
        barGraph: {
            layerClass: function() {
                return "dataset-units dataset-bars dataset-" + this.constants.index;
            },
            makeElements: function(a) {
                var b = this.constants;
                return this.unitType = "bar", this.units = a.yPositions.map(function(c, d) {
                    return N(a.xPositions[d], c, a.barWidth, b.color, a.labels[d], d, a.offsets[d], {
                        zeroLine: a.zeroLine,
                        barsWidth: a.barsWidth,
                        minHeight: b.minHeight
                    });
                }), this.units;
            },
            animateElements: function(a) {
                var b = a.xPositions, c = a.yPositions, d = a.offsets, e = a.labels, f = this.oldData.xPositions, g = this.oldData.yPositions, h = this.oldData.offsets, i = this.oldData.labels, j = o(f, b), k = Ib(j, 2);
                f = k[0], b = k[1];
                var l = o(g, c), m = Ib(l, 2);
                g = m[0], c = m[1];
                var n = o(h, d), p = Ib(n, 2);
                h = p[0], d = p[1];
                var q = o(i, e), r = Ib(q, 2);
                i = r[0], e = r[1], this.render({
                    xPositions: f,
                    yPositions: g,
                    offsets: h,
                    labels: e,
                    zeroLine: this.oldData.zeroLine,
                    barsWidth: this.oldData.barsWidth,
                    barWidth: this.oldData.barWidth
                });
                var s = [];
                return this.store.map(function(e, f) {
                    s = s.concat(U(e, b[f], c[f], a.barWidth, d[f], {
                        zeroLine: a.zeroLine
                    }));
                }), s;
            }
        },
        lineGraph: {
            layerClass: function() {
                return "dataset-units dataset-line dataset-" + this.constants.index;
            },
            makeElements: function(a) {
                var b = this.constants;
                return this.unitType = "dot", this.paths = {}, b.hideLine || (this.paths = P(a.xPositions, a.yPositions, b.color, {
                    heatline: b.heatline,
                    regionFill: b.regionFill
                }, {
                    svgDefs: b.svgDefs,
                    zeroLine: a.zeroLine
                })), this.units = [], b.hideDots || (this.units = a.yPositions.map(function(c, d) {
                    return O(a.xPositions[d], c, a.radius, b.color, b.valuesOverPoints ? a.values[d] : "", d);
                })), Object.values(this.paths).concat(this.units);
            },
            animateElements: function(a) {
                var b = a.xPositions, c = a.yPositions, d = a.values, e = this.oldData.xPositions, f = this.oldData.yPositions, g = this.oldData.values, h = o(e, b), i = Ib(h, 2);
                e = i[0], b = i[1];
                var j = o(f, c), k = Ib(j, 2);
                f = k[0], c = k[1];
                var l = o(g, d), m = Ib(l, 2);
                g = m[0], d = m[1], this.render({
                    xPositions: e,
                    yPositions: f,
                    values: d,
                    zeroLine: this.oldData.zeroLine,
                    radius: this.oldData.radius
                });
                var n = [];
                return Object.keys(this.paths).length && (n = n.concat(W(this.paths, b, c, a.zeroLine))), 
                this.units.length && this.units.map(function(a, d) {
                    n = n.concat(V(a, b[d], c[d]));
                }), n;
            }
        }
    }, rc = function(a) {
        function c(a, b) {
            Db(this, c);
            var d = Hb(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, a, b));
            return d.type = "percentage", d.setup(), d;
        }
        return Gb(c, a), Eb(c, [ {
            key: "setMeasures",
            value: function(a) {
                var b = this.measures;
                this.barOptions = a.barOptions || {};
                var c = this.barOptions;
                c.height = c.height || 20, c.depth = c.depth || Nb, b.paddings.right = 30, b.legendHeight = 80, 
                b.baseHeight = 8 * (c.height + .5 * c.depth);
            }
        }, {
            key: "setupComponents",
            value: function() {
                var a = this.state, b = [ [ "percentageBars", {
                    barHeight: this.barOptions.height,
                    barDepth: this.barOptions.depth
                }, function() {
                    return {
                        xPositions: a.xPositions,
                        widths: a.widths,
                        colors: this.colors
                    };
                }.bind(this) ] ];
                this.components = new Map(b.map(function(a) {
                    var b = mb.apply(void 0, Jb(a));
                    return [ a[0], b ];
                }));
            }
        }, {
            key: "calc",
            value: function() {
                var a = this;
                Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "calc", this).call(this);
                var b = this.state;
                b.xPositions = [], b.widths = [];
                var d = 0;
                b.sliceTotals.map(function(c) {
                    var e = a.width * c / b.grandTotal;
                    b.widths.push(e), b.xPositions.push(d), d += e;
                });
            }
        }, {
            key: "makeDataByIndex",
            value: function() {}
        }, {
            key: "bindTooltip",
            value: function() {
                var a = this, c = this.state;
                this.container.addEventListener("mousemove", function(d) {
                    var e = a.components.get("percentageBars").store, f = d.target;
                    if (e.includes(f)) {
                        var g = e.indexOf(f), h = b(a.container), i = b(f), j = i.left - h.left + parseInt(f.getAttribute("width")) / 2, k = i.top - h.top, l = (a.formattedLabels && a.formattedLabels.length > 0 ? a.formattedLabels[g] : a.state.labels[g]) + ": ", m = c.sliceTotals[g] / c.grandTotal;
                        a.tip.setValues(j, k, {
                            name: l,
                            value: (100 * m).toFixed(1) + "%"
                        }), a.tip.showTip();
                    }
                });
            }
        } ]), c;
    }(jc), sc = function(a) {
        function c(a, b) {
            Db(this, c);
            var d = Hb(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, a, b));
            return d.type = "pie", d.initTimeout = 0, d.init = 1, d.setup(), d;
        }
        return Gb(c, a), Eb(c, [ {
            key: "configure",
            value: function(a) {
                Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "configure", this).call(this, a), 
                this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), 
                this.hoverRadio = a.hoverRadio || .1, this.config.startAngle = a.startAngle || 0, 
                this.clockWise = a.clockWise || !1;
            }
        }, {
            key: "calc",
            value: function() {
                var a = this;
                Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "calc", this).call(this);
                var b = this.state;
                this.radius = this.height > this.width ? this.center.x : this.center.y;
                var d = this.radius, e = this.clockWise, f = b.slicesProperties || [];
                b.sliceStrings = [], b.slicesProperties = [];
                var g = 180 - this.config.startAngle;
                b.sliceTotals.map(function(c, h) {
                    var i = g, j = c / b.grandTotal * 360, k = e ? -j : j, l = g += k, n = m(i, d), o = m(l, d), p = a.init && f[h], q = void 0, r = void 0;
                    a.init ? (q = p ? p.startPosition : n, r = p ? p.endPosition : n) : (q = n, r = o);
                    var s = A(q, r, a.center, a.radius, a.clockWise);
                    b.sliceStrings.push(s), b.slicesProperties.push({
                        startPosition: n,
                        endPosition: o,
                        value: c,
                        total: b.grandTotal,
                        startAngle: i,
                        endAngle: l,
                        angle: k
                    });
                }), this.init = 0;
            }
        }, {
            key: "setupComponents",
            value: function() {
                var a = this.state, b = [ [ "pieSlices", {}, function() {
                    return {
                        sliceStrings: a.sliceStrings,
                        colors: this.colors
                    };
                }.bind(this) ] ];
                this.components = new Map(b.map(function(a) {
                    var b = mb.apply(void 0, Jb(a));
                    return [ a[0], b ];
                }));
            }
        }, {
            key: "calTranslateByAngle",
            value: function(a) {
                var b = this.radius, c = this.hoverRadio, d = m(a.startAngle + a.angle / 2, b);
                return "translate3d(" + d.x * c + "px," + d.y * c + "px,0)";
            }
        }, {
            key: "hoverSlice",
            value: function(a, c, d, e) {
                if (a) {
                    var f = this.colors[c];
                    if (d) {
                        Z(a, this.calTranslateByAngle(this.state.slicesProperties[c])), a.style.fill = q(f, 50);
                        var g = b(this.svg), h = e.pageX - g.left + 10, i = e.pageY - g.top - 10, j = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[c] : this.state.labels[c]) + ": ", k = (100 * this.state.sliceTotals[c] / this.state.grandTotal).toFixed(1);
                        this.tip.setValues(h, i, {
                            name: j,
                            value: k + "%"
                        }), this.tip.showTip();
                    } else Z(a, "translate3d(0,0,0)"), this.tip.hideTip(), a.style.fill = f;
                }
            }
        }, {
            key: "bindTooltip",
            value: function() {
                this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave);
            }
        }, {
            key: "mouseMove",
            value: function(a) {
                var b = a.target, c = this.components.get("pieSlices").store, d = this.curActiveSliceIndex, e = this.curActiveSlice;
                if (c.includes(b)) {
                    var f = c.indexOf(b);
                    this.hoverSlice(e, d, !1), this.curActiveSlice = b, this.curActiveSliceIndex = f, 
                    this.hoverSlice(b, f, !0, a);
                } else this.mouseLeave();
            }
        }, {
            key: "mouseLeave",
            value: function() {
                this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, !1);
            }
        } ]), c;
    }(jc), tc = function(a) {
        function b(a, c) {
            Db(this, b);
            var d = Hb(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, c));
            d.type = "heatmap", d.countLabel = c.countLabel || "";
            var e = [ "Sunday", "Monday" ], f = e.includes(c.startSubDomain) ? c.startSubDomain : "Sunday";
            return d.startSubDomainIndex = e.indexOf(f), d.setup(), d;
        }
        return Gb(b, a), Eb(b, [ {
            key: "setMeasures",
            value: function(a) {
                var b = this.measures;
                this.discreteDomains = 0 === a.discreteDomains ? 0 : 1, b.paddings.top = 36, b.paddings.bottom = 0, 
                b.legendHeight = 24, b.baseHeight = 12 * kc + h(b);
                var c = this.data, d = this.discreteDomains ? 12 : 0;
                this.independentWidth = 12 * (fb(c.start, c.end) + d) + i(b);
            }
        }, {
            key: "updateWidth",
            value: function() {
                var a = this.discreteDomains ? 12 : 0, b = this.state.noOfWeeks ? this.state.noOfWeeks : 52;
                this.baseWidth = 12 * (b + a) + i(this.measures);
            }
        }, {
            key: "prepareData",
            value: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
                if (a.start && a.end && a.start > a.end) throw new Error("Start date cannot be greater than end date.");
                if (a.start || (a.start = new Date(), a.start.setFullYear(a.start.getFullYear() - 1)), 
                a.end || (a.end = new Date()), a.dataPoints = a.dataPoints || {}, parseInt(Object.keys(a.dataPoints)[0]) > 1e5) {
                    var b = {};
                    Object.keys(a.dataPoints).forEach(function(c) {
                        var d = new Date(c * lc);
                        b[db(d)] = a.dataPoints[c];
                    }), a.dataPoints = b;
                }
                return a;
            }
        }, {
            key: "calc",
            value: function() {
                var a = this.state;
                a.start = eb(this.data.start), a.end = eb(this.data.end), a.firstWeekStart = eb(a.start), 
                a.noOfWeeks = fb(a.start, a.end), a.distribution = wb(Object.values(this.data.dataPoints), 5), 
                a.domainConfigs = this.getDomains();
            }
        }, {
            key: "setupComponents",
            value: function() {
                var a = this, b = this.state, c = this.discreteDomains ? 0 : 1, d = b.domainConfigs.map(function(d, e) {
                    return [ "heatDomain", {
                        index: d.index,
                        colWidth: 12,
                        rowHeight: 12,
                        squareSize: 10,
                        xTranslate: 12 * b.domainConfigs.filter(function(a, b) {
                            return b < e;
                        }).map(function(a) {
                            return a.cols.length - c;
                        }).reduce(function(a, b) {
                            return a + b;
                        }, 0)
                    }, function() {
                        return b.domainConfigs[e];
                    }.bind(a) ];
                });
                this.components = new Map(d.map(function(a, b) {
                    var c = mb.apply(void 0, Jb(a));
                    return [ a[0] + "-" + b, c ];
                }));
                var e = 0;
                oc.forEach(function(b, c) {
                    if ([ 1, 3, 5 ].includes(c)) {
                        var d = G("subdomain-name", -6, e, b, {
                            fontSize: 10,
                            dy: 8,
                            textAnchor: "end"
                        });
                        a.drawArea.appendChild(d);
                    }
                    e += 12;
                });
            }
        }, {
            key: "update",
            value: function(a) {
                a || console.error("No data to update."), this.data = this.prepareData(a), this.draw(), 
                this.bindTooltip();
            }
        }, {
            key: "bindTooltip",
            value: function() {
                var a = this;
                this.container.addEventListener("mousemove", function(b) {
                    a.components.forEach(function(c) {
                        var d = c.store, e = b.target;
                        if (d.includes(e)) {
                            var f = e.getAttribute("data-value"), g = e.getAttribute("data-date").split("-"), h = ib(parseInt(g[1]) - 1, !0), i = a.container.getBoundingClientRect(), j = e.getBoundingClientRect(), k = parseInt(b.target.getAttribute("width")), l = j.left - i.left + k / 2, m = j.top - i.top, n = f + " " + a.countLabel, o = " on " + h + " " + g[0] + ", " + g[2];
                            a.tip.setValues(l, m, {
                                name: o,
                                value: n,
                                valueFirst: 1
                            }, []), a.tip.showTip();
                        }
                    });
                });
            }
        }, {
            key: "renderLegend",
            value: function() {
                var a = this;
                this.legendArea.textContent = "";
                var b = 0, c = G("subdomain-name", b, 12, "Less", {
                    fontSize: 11,
                    dy: 9
                });
                b = 30, this.legendArea.appendChild(c), this.colors.slice(0, 5).map(function(c, d) {
                    var e = D("heatmap-legend-unit", b + 15 * d, 12, 10, c);
                    a.legendArea.appendChild(e);
                });
                var d = G("subdomain-name", b + 75 + 3, 12, "More", {
                    fontSize: 11,
                    dy: 9
                });
                this.legendArea.appendChild(d);
            }
        }, {
            key: "getDomains",
            value: function() {
                for (var a = this.state, b = [ a.start.getMonth(), a.start.getFullYear() ], c = b[0], d = b[1], e = [ a.end.getMonth(), a.end.getFullYear() ], f = e[0] - c + 1 + 12 * (e[1] - d), g = [], h = eb(a.start), i = 0; i < f; i++) {
                    var j = a.end;
                    if (!hb(h, a.end)) {
                        var k = [ h.getMonth(), h.getFullYear() ];
                        j = jb(k[0], k[1]);
                    }
                    g.push(this.getDomainConfig(h, j)), lb(j, 1), h = j;
                }
                return g;
            }
        }, {
            key: "getDomainConfig",
            value: function(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", c = [ a.getMonth(), a.getFullYear() ], d = c[0], e = c[1], f = kb(a), g = {
                    index: d,
                    cols: []
                };
                lb(b = eb(b) || jb(d, e), 1);
                for (var h = fb(f, b), i = [], j = void 0, k = 0; k < h; k++) j = this.getCol(f, d), 
                i.push(j), lb(f = new Date(j[kc - 1].yyyyMmDd), 1);
                return void 0 !== j[kc - 1].dataValue && (lb(f, 1), i.push(this.getCol(f, d, !0))), 
                g.cols = i, g;
            }
        }, {
            key: "getCol",
            value: function(a, b) {
                for (var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = this.state, e = eb(a), f = [], g = 0; g < kc; g++, 
                lb(e, 1)) {
                    var h = {}, i = e >= d.start && e <= d.end;
                    c || e.getMonth() !== b || !i ? h.yyyyMmDd = db(e) : h = this.getSubDomainConfig(e), 
                    f.push(h);
                }
                return f;
            }
        }, {
            key: "getSubDomainConfig",
            value: function(a) {
                var b = db(a), c = this.data.dataPoints[b];
                return {
                    yyyyMmDd: b,
                    dataValue: c || 0,
                    fill: this.colors[xb(c, this.state.distribution)]
                };
            }
        } ]), b;
    }(ic), uc = function(a) {
        function c(a, b) {
            Db(this, c);
            var d = Hb(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, a, b));
            return d.barOptions = b.barOptions || {}, d.lineOptions = b.lineOptions || {}, d.type = b.type || "line", 
            d.init = 1, d.setup(), d;
        }
        return Gb(c, a), Eb(c, [ {
            key: "setMeasures",
            value: function() {
                this.data.datasets.length <= 1 && (this.config.showLegend = 0, this.measures.paddings.bottom = 30);
            }
        }, {
            key: "configure",
            value: function(a) {
                Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "configure", this).call(this, a), 
                a.axisOptions = a.axisOptions || {}, a.tooltipOptions = a.tooltipOptions || {}, 
                this.config.xAxisMode = a.axisOptions.xAxisMode || "span", this.config.yAxisMode = a.axisOptions.yAxisMode || "span", 
                this.config.xIsSeries = a.axisOptions.xIsSeries || 0, this.config.formatTooltipX = a.tooltipOptions.formatTooltipX, 
                this.config.formatTooltipY = a.tooltipOptions.formatTooltipY, this.config.valuesOverPoints = a.valuesOverPoints;
            }
        }, {
            key: "prepareData",
            value: function() {
                return yb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data, this.type);
            }
        }, {
            key: "prepareFirstData",
            value: function() {
                return zb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data);
            }
        }, {
            key: "calc",
            value: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.calcXPositions(), a || this.calcYAxisParameters(this.getAllYValues(), "line" === this.type), 
                this.makeDataByIndex();
            }
        }, {
            key: "calcXPositions",
            value: function() {
                var a = this.state, b = this.data.labels;
                a.datasetLength = b.length, a.unitWidth = this.width / a.datasetLength, a.xOffset = a.unitWidth / 2, 
                a.xAxis = {
                    labels: b,
                    positions: b.map(function(b, c) {
                        return j(a.xOffset + c * a.unitWidth);
                    })
                };
            }
        }, {
            key: "calcYAxisParameters",
            value: function(a) {
                var b = qb(a, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false"), c = this.height / tb(b), d = sb(b) * c, e = this.height - rb(b) * d;
                this.state.yAxis = {
                    labels: b,
                    positions: b.map(function(a) {
                        return e - a * c;
                    }),
                    scaleMultiplier: c,
                    zeroLine: e
                }, this.calcDatasetPoints(), this.calcYExtremes(), this.calcYRegions();
            }
        }, {
            key: "calcDatasetPoints",
            value: function() {
                var a = this.state, b = function(b) {
                    return b.map(function(b) {
                        return ub(b, a.yAxis);
                    });
                };
                a.datasets = this.data.datasets.map(function(a, c) {
                    var d = a.values, e = a.cumulativeYs || [];
                    return {
                        name: a.name,
                        index: c,
                        chartType: a.chartType,
                        values: d,
                        yPositions: b(d),
                        cumulativeYs: e,
                        cumulativeYPos: b(e)
                    };
                });
            }
        }, {
            key: "calcYExtremes",
            value: function() {
                var a = this.state;
                if (this.barOptions.stacked) return void (a.yExtremes = a.datasets[a.datasets.length - 1].cumulativeYPos);
                a.yExtremes = new Array(a.datasetLength).fill(9999), a.datasets.map(function(b) {
                    b.yPositions.map(function(b, c) {
                        b < a.yExtremes[c] && (a.yExtremes[c] = b);
                    });
                });
            }
        }, {
            key: "calcYRegions",
            value: function() {
                var a = this.state;
                this.data.yMarkers && (this.state.yMarkers = this.data.yMarkers.map(function(b) {
                    return b.position = ub(b.value, a.yAxis), b.options || (b.options = {}), b;
                })), this.data.yRegions && (this.state.yRegions = this.data.yRegions.map(function(b) {
                    return b.startPos = ub(b.start, a.yAxis), b.endPos = ub(b.end, a.yAxis), b.options || (b.options = {}), 
                    b;
                }));
            }
        }, {
            key: "getAllYValues",
            value: function() {
                var a, b = this, c = "values";
                if (this.barOptions.stacked) {
                    c = "cumulativeYs";
                    var d = new Array(this.state.datasetLength).fill(0);
                    this.data.datasets.map(function(a, e) {
                        var f = b.data.datasets[e].values;
                        a[c] = d = d.map(function(a, b) {
                            return a + f[b];
                        });
                    });
                }
                var e = this.data.datasets.map(function(a) {
                    return a[c];
                });
                return this.data.yMarkers && e.push(this.data.yMarkers.map(function(a) {
                    return a.value;
                })), this.data.yRegions && this.data.yRegions.map(function(a) {
                    e.push([ a.end, a.start ]);
                }), (a = []).concat.apply(a, Jb(e));
            }
        }, {
            key: "setupComponents",
            value: function() {
                var a = this, b = [ [ "yAxis", {
                    mode: this.config.yAxisMode,
                    width: this.width
                }, function() {
                    return this.state.yAxis;
                }.bind(this) ], [ "xAxis", {
                    mode: this.config.xAxisMode,
                    height: this.height
                }, function() {
                    var a = this.state;
                    return a.xAxis.calcLabels = Ab(this.width, a.xAxis.labels, this.config.xIsSeries), 
                    a.xAxis;
                }.bind(this) ], [ "yRegions", {
                    width: this.width,
                    pos: "right"
                }, function() {
                    return this.state.yRegions;
                }.bind(this) ] ], c = this.state.datasets.filter(function(a) {
                    return "bar" === a.chartType;
                }), d = this.state.datasets.filter(function(a) {
                    return "line" === a.chartType;
                }), e = c.map(function(b) {
                    var d = b.index;
                    return [ "barGraph-" + b.index, {
                        index: d,
                        color: a.colors[d],
                        stacked: a.barOptions.stacked,
                        valuesOverPoints: a.config.valuesOverPoints,
                        minHeight: .01 * a.height
                    }, function() {
                        var a = this.state, b = a.datasets[d], e = this.barOptions.stacked, f = this.barOptions.spaceRatio || .5, g = a.unitWidth * (1 - f), h = g / (e ? 1 : c.length), i = a.xAxis.positions.map(function(a) {
                            return a - g / 2;
                        });
                        e || (i = i.map(function(a) {
                            return a + h * d;
                        }));
                        var j = new Array(a.datasetLength).fill("");
                        this.config.valuesOverPoints && (j = e && b.index === a.datasets.length - 1 ? b.cumulativeYs : b.values);
                        var k = new Array(a.datasetLength).fill(0);
                        return e && (k = b.yPositions.map(function(a, c) {
                            return a - b.cumulativeYPos[c];
                        })), {
                            xPositions: i,
                            yPositions: b.yPositions,
                            offsets: k,
                            labels: j,
                            zeroLine: a.yAxis.zeroLine,
                            barsWidth: g,
                            barWidth: h
                        };
                    }.bind(a) ];
                }), f = d.map(function(b) {
                    var c = b.index;
                    return [ "lineGraph-" + b.index, {
                        index: c,
                        color: a.colors[c],
                        svgDefs: a.svgDefs,
                        heatline: a.lineOptions.heatline,
                        regionFill: a.lineOptions.regionFill,
                        hideDots: a.lineOptions.hideDots,
                        hideLine: a.lineOptions.hideLine,
                        valuesOverPoints: a.config.valuesOverPoints
                    }, function() {
                        var a = this.state, b = a.datasets[c], d = a.yAxis.positions[0] < a.yAxis.zeroLine ? a.yAxis.positions[0] : a.yAxis.zeroLine;
                        return {
                            xPositions: a.xAxis.positions,
                            yPositions: b.yPositions,
                            values: b.values,
                            zeroLine: d,
                            radius: this.lineOptions.dotSize || 4
                        };
                    }.bind(a) ];
                }), g = [ [ "yMarkers", {
                    width: this.width,
                    pos: "right"
                }, function() {
                    return this.state.yMarkers;
                }.bind(this) ] ];
                b = b.concat(e, f, g);
                var h = [ "yMarkers", "yRegions" ];
                this.dataUnitComponents = [], this.components = new Map(b.filter(function(b) {
                    return !h.includes(b[0]) || a.state[b[0]];
                }).map(function(b) {
                    var c = mb.apply(void 0, Jb(b));
                    return (b[0].includes("lineGraph") || b[0].includes("barGraph")) && a.dataUnitComponents.push(c), 
                    [ b[0], c ];
                }));
            }
        }, {
            key: "makeDataByIndex",
            value: function() {
                var a = this;
                this.dataByIndex = {};
                var b = this.state, c = this.config.formatTooltipX, d = this.config.formatTooltipY;
                b.xAxis.labels.map(function(e, f) {
                    var g = a.state.datasets.map(function(b, c) {
                        var e = b.values[f];
                        return {
                            title: b.name,
                            value: e,
                            yPos: b.yPositions[f],
                            color: a.colors[c],
                            formatted: d ? d(e) : e
                        };
                    });
                    a.dataByIndex[f] = {
                        label: e,
                        formattedLabel: c ? c(e) : e,
                        xPos: b.xAxis.positions[f],
                        values: g,
                        yExtreme: b.yExtremes[f]
                    };
                });
            }
        }, {
            key: "bindTooltip",
            value: function() {
                var a = this;
                this.container.addEventListener("mousemove", function(c) {
                    var d = a.measures, e = b(a.container), h = c.pageX - e.left - g(d), i = c.pageY - e.top;
                    i < a.height + f(d) && i > f(d) ? a.mapTooltipXPosition(h) : a.tip.hideTip();
                });
            }
        }, {
            key: "mapTooltipXPosition",
            value: function(a) {
                var b = this.state;
                if (b.yExtremes) {
                    var c = vb(a, b.xAxis.positions, !0), d = this.dataByIndex[c];
                    this.tip.setValues(d.xPos + this.tip.offset.x, d.yExtreme + this.tip.offset.y, {
                        name: d.formattedLabel,
                        value: ""
                    }, d.values, c), this.tip.showTip();
                }
            }
        }, {
            key: "renderLegend",
            value: function() {
                var a = this, b = this.data;
                b.datasets.length > 1 && (this.legendArea.textContent = "", b.datasets.map(function(b, c) {
                    var d = E(100 * c, "0", 100, a.colors[c], b.name);
                    a.legendArea.appendChild(d);
                }));
            }
        }, {
            key: "makeOverlay",
            value: function() {
                var a = this;
                if (this.init) return void (this.init = 0);
                this.overlayGuides && this.overlayGuides.forEach(function(a) {
                    var b = a.overlay;
                    b.parentNode.removeChild(b);
                }), this.overlayGuides = this.dataUnitComponents.map(function(a) {
                    return {
                        type: a.unitType,
                        overlay: void 0,
                        units: a.units
                    };
                }), void 0 === this.state.currentIndex && (this.state.currentIndex = this.state.datasetLength - 1), 
                this.overlayGuides.map(function(b) {
                    var c = b.units[a.state.currentIndex];
                    b.overlay = $b[b.type](c), a.drawArea.appendChild(b.overlay);
                });
            }
        }, {
            key: "updateOverlayGuides",
            value: function() {
                this.overlayGuides && this.overlayGuides.forEach(function(a) {
                    var b = a.overlay;
                    b.parentNode.removeChild(b);
                });
            }
        }, {
            key: "bindOverlay",
            value: function() {
                var a = this;
                this.parent.addEventListener("data-select", function() {
                    a.updateOverlay();
                });
            }
        }, {
            key: "bindUnits",
            value: function() {
                var a = this;
                this.dataUnitComponents.map(function(b) {
                    b.units.map(function(b) {
                        b.addEventListener("click", function() {
                            var c = b.getAttribute("data-point-index");
                            a.setCurrentDataPoint(c);
                        });
                    });
                }), this.tip.container.addEventListener("click", function() {
                    var b = a.tip.container.getAttribute("data-point-index");
                    a.setCurrentDataPoint(b);
                });
            }
        }, {
            key: "updateOverlay",
            value: function() {
                var a = this;
                this.overlayGuides.map(function(b) {
                    var c = b.units[a.state.currentIndex];
                    _b[b.type](c, b.overlay);
                });
            }
        }, {
            key: "onLeftArrow",
            value: function() {
                this.setCurrentDataPoint(this.state.currentIndex - 1);
            }
        }, {
            key: "onRightArrow",
            value: function() {
                this.setCurrentDataPoint(this.state.currentIndex + 1);
            }
        }, {
            key: "getDataPoint",
            value: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentIndex, b = this.state;
                return {
                    index: a,
                    label: b.xAxis.labels[a],
                    values: b.datasets.map(function(b) {
                        return b.values[a];
                    })
                };
            }
        }, {
            key: "setCurrentDataPoint",
            value: function(a) {
                var b = this.state;
                (a = parseInt(a)) < 0 && (a = 0), a >= b.xAxis.labels.length && (a = b.xAxis.labels.length - 1), 
                a !== b.currentIndex && (b.currentIndex = a, e(this.parent, "data-select", this.getDataPoint()));
            }
        }, {
            key: "addDataPoint",
            value: function(a, b) {
                var d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.datasetLength;
                Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "addDataPoint", this).call(this, a, b, d), 
                this.data.labels.splice(d, 0, a), this.data.datasets.map(function(a, c) {
                    a.values.splice(d, 0, b[c]);
                }), this.update(this.data);
            }
        }, {
            key: "removeDataPoint",
            value: function() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.datasetLength - 1;
                this.data.labels.length <= 1 || (Fb(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "removeDataPoint", this).call(this, a), 
                this.data.labels.splice(a, 1), this.data.datasets.map(function(b) {
                    b.values.splice(a, 1);
                }), this.update(this.data));
            }
        }, {
            key: "updateDataset",
            value: function(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.data.datasets[b].values = a, this.update(this.data);
            }
        }, {
            key: "updateDatasets",
            value: function(a) {
                this.data.datasets.map(function(b, c) {
                    a[c] && (b.values = a[c]);
                }), this.update(this.data);
            }
        } ]), c;
    }(ic), vc = {
        bar: uc,
        line: uc,
        percentage: rc,
        heatmap: tc,
        pie: sc
    }, wc = function Ac(a, b) {
        return Db(this, Ac), Bb(b.type, a, b);
    }, xc = Object.freeze({
        Chart: wc,
        PercentageChart: rc,
        PieChart: sc,
        Heatmap: tc,
        AxisChart: uc
    }), yc = {};
    return yc.NAME = "Frappe Charts", yc.VERSION = "1.1.0", yc = Object.assign({}, yc, xc);
}();