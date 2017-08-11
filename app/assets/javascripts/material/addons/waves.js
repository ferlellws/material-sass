var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * waves v0.7.4
 * http://fian.my.id/Waves
 */

!function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define([], function () {
    return b.apply(a);
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b.call(a) : a.Waves = b.call(a);
}("object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : this, function () {
  "use strict";
  function e(a) {
    return null !== a && a === a.window;
  }function f(a) {
    return e(a) ? a : 9 === a.nodeType && a.defaultView;
  }function g(a) {
    var b = typeof a === "undefined" ? "undefined" : _typeof(a);return "function" === b || "object" === b && !!a;
  }function h(a) {
    return g(a) && a.nodeType > 0;
  }function i(a) {
    var d = c.call(a);return "[object String]" === d ? b(a) : g(a) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(d) && a.hasOwnProperty("length") ? a : h(a) ? [a] : [];
  }function j(a) {
    var b,
        c,
        d = { top: 0, left: 0 },
        e = a && a.ownerDocument;return b = e.documentElement, "undefined" != typeof a.getBoundingClientRect && (d = a.getBoundingClientRect()), c = f(e), { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft };
  }function k(a) {
    var b = "";for (var c in a) {
      a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
    }return b;
  }function n(a, b, c, d) {
    if (c) {
      d.classList.remove("waves-wrapping"), c.classList.remove("waves-rippling");var e = c.getAttribute("data-x"),
          f = c.getAttribute("data-y"),
          g = c.getAttribute("data-scale"),
          h = c.getAttribute("data-translate"),
          i = Date.now() - Number(c.getAttribute("data-hold")),
          j = 350 - i;0 > j && (j = 0), "mousemove" === a.type && (j = 150);var m = "mousemove" === a.type ? 2500 : l.duration;setTimeout(function () {
        var a = { top: f + "px", left: e + "px", opacity: "0", "-webkit-transition-duration": m + "ms", "-moz-transition-duration": m + "ms", "-o-transition-duration": m + "ms", "transition-duration": m + "ms", "-webkit-transform": g + " " + h, "-moz-transform": g + " " + h, "-ms-transform": g + " " + h, "-o-transform": g + " " + h, transform: g + " " + h };c.setAttribute("style", k(a)), setTimeout(function () {
          try {
            d.removeChild(c), b.removeChild(d);
          } catch (a) {
            return !1;
          }
        }, m);
      }, j);
    }
  }function p(a) {
    if (o.allowEvent(a) === !1) return null;for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
      if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
        b = c;break;
      }c = c.parentElement;
    }return b;
  }function q(a) {
    var b = p(a);if (null !== b) {
      if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled")) return;if (o.registerEvent(a), "touchstart" === a.type && l.delay) {
        var c = !1,
            e = setTimeout(function () {
          e = null, l.show(a, b);
        }, l.delay),
            f = function f(d) {
          e && (clearTimeout(e), e = null, l.show(a, b)), c || (c = !0, l.hide(d, b));
        },
            g = function g(a) {
          e && (clearTimeout(e), e = null), f(a);
        };b.addEventListener("touchmove", g, !1), b.addEventListener("touchend", f, !1), b.addEventListener("touchcancel", f, !1);
      } else l.show(a, b), d && (b.addEventListener("touchend", l.hide, !1), b.addEventListener("touchcancel", l.hide, !1)), b.addEventListener("mouseup", l.hide, !1), b.addEventListener("mouseleave", l.hide, !1);
    }
  }var a = a || {},
      b = document.querySelectorAll.bind(document),
      c = Object.prototype.toString,
      d = "ontouchstart" in window,
      l = { duration: 750, delay: 200, show: function show(a, b, c) {
      if (2 === a.button) return !1;b = b || this;var d = document.createElement("div");d.className = "waves-wrap waves-wrapping", b.appendChild(d);var e = document.createElement("div");e.className = "waves-ripple waves-rippling", d.appendChild(e);var f = j(b),
          g = 0,
          h = 0;"touches" in a && a.touches.length ? (g = a.touches[0].pageY - f.top, h = a.touches[0].pageX - f.left) : (g = a.pageY - f.top, h = a.pageX - f.left), h = h >= 0 ? h : 0, g = g >= 0 ? g : 0;var i = "scale(" + b.clientWidth / 100 * 3 + ")",
          m = "translate(0,0)";c && (m = "translate(" + c.x + "px, " + c.y + "px)"), e.setAttribute("data-hold", Date.now()), e.setAttribute("data-x", h), e.setAttribute("data-y", g), e.setAttribute("data-scale", i), e.setAttribute("data-translate", m);var n = { top: g + "px", left: h + "px" };e.classList.add("waves-notransition"), e.setAttribute("style", k(n)), e.classList.remove("waves-notransition"), n["-webkit-transform"] = i + " " + m, n["-moz-transform"] = i + " " + m, n["-ms-transform"] = i + " " + m, n["-o-transform"] = i + " " + m, n.transform = i + " " + m, n.opacity = "1";var o = "mousemove" === a.type ? 2500 : l.duration;n["-webkit-transition-duration"] = o + "ms", n["-moz-transition-duration"] = o + "ms", n["-o-transition-duration"] = o + "ms", n["transition-duration"] = o + "ms", e.setAttribute("style", k(n));
    }, hide: function hide(a, b) {
      b = b || this;for (var c = b.getElementsByClassName("waves-wrapping"), d = b.getElementsByClassName("waves-rippling"), e = 0, f = d.length; f > e; e++) {
        n(a, b, d[e], c[e]);
      }
    } },
      m = { input: function input(a) {
      var b = a.parentNode;if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);var d = window.getComputedStyle(a, null),
            e = d.color,
            f = d.backgroundColor;c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);");
      }
    }, img: function img(a) {
      var b = a.parentNode;if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");b.replaceChild(c, a), c.appendChild(a);
      }
    } },
      o = { touches: 0, allowEvent: function allowEvent(a) {
      var b = !0;return (/^(mousedown|mousemove)$/.test(a.type) && o.touches && (b = !1), b
      );
    }, registerEvent: function registerEvent(a) {
      var b = a.type;"touchstart" === b ? o.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function () {
        o.touches && (o.touches -= 1);
      }, 500);
    } };return a.init = function (a) {
    var b = document.body;a = a || {}, "duration" in a && (l.duration = a.duration), "delay" in a && (l.delay = a.delay), d && (b.addEventListener("touchstart", q, !1), b.addEventListener("touchcancel", o.registerEvent, !1), b.addEventListener("touchend", o.registerEvent, !1)), b.addEventListener("mousedown", q, !1);
  }, a.attach = function (a, b) {
    a = i(a), "[object Array]" === c.call(b) && (b = b.join(" ")), b = b ? " " + b : "";for (var d, e, f = 0, g = a.length; g > f; f++) {
      d = a[f], e = d.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(e) && (m[e](d), d = d.parentElement), -1 === d.className.indexOf("waves-effect") && (d.className += " waves-effect" + b);
    }
  }, a.ripple = function (a, b) {
    a = i(a);var c = a.length;if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c) for (var d, e, f, g = {}, h = 0, k = { type: "mousedown", button: 1 }, m = function m(a, b) {
      return function () {
        l.hide(a, b);
      };
    }; c > h; h++) {
      if (d = a[h], e = b.position || { x: d.clientWidth / 2, y: d.clientHeight / 2 }, f = j(d), g.x = f.left + e.x, g.y = f.top + e.y, k.pageX = g.x, k.pageY = g.y, l.show(k, d), b.wait >= 0 && null !== b.wait) {
        var n = { type: "mouseup", button: 1 };setTimeout(m(n, d), b.wait);
      }
    }
  }, a.calm = function (a) {
    a = i(a);for (var b = { type: "mouseup", button: 1 }, c = 0, d = a.length; d > c; c++) {
      l.hide(b, a[c]);
    }
  }, a.displayEffect = function (b) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), a.init(b);
  }, a;
});
