// jquery.slim.min.js
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (g, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    v = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    m = {},
    b = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    w = g.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function C(e, t, n) {
    var r,
      i,
      o = (n = n || w).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function T(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f =
      "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = T(e);
    return (
      !b(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || b(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || E.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = E.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    E.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        C(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? E.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return v(a);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    var e,
      p,
      x,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      C,
      T,
      a,
      E,
      v,
      s,
      c,
      y,
      A = "sizzle" + 1 * new Date(),
      d = n.document,
      N = 0,
      r = 0,
      m = ue(),
      b = ue(),
      S = ue(),
      k = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      L = {}.hasOwnProperty,
      t = [],
      j = t.pop,
      q = t.push,
      O = t.push,
      P = t.slice,
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      B =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        R +
        "*(" +
        B +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        B +
        "))|)" +
        R +
        "*\\]",
      W =
        ":(" +
        B +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      F = new RegExp(R + "+", "g"),
      $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      z = new RegExp("^" + R + "*," + R + "*"),
      _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      U = new RegExp(R + "|>"),
      V = new RegExp(W),
      X = new RegExp("^" + B + "$"),
      Q = {
        ID: new RegExp("^#(" + B + ")"),
        CLASS: new RegExp("^\\.(" + B + ")"),
        TAG: new RegExp("^(" + B + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        C();
      },
      ae = xe(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((t = P.call(d.childNodes)), d.childNodes),
        t[d.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: t.length
          ? function (e, t) {
              q.apply(e, P.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        d = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (!r && (C(e), (e = e || T), E)) {
        if (11 !== d && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === d) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              p.getElementsByClassName &&
              e.getElementsByClassName
            )
              return O.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          p.qsa &&
          !k[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== d || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === d && (U.test(t) || _.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && p.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = A))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
            c = l.join(",");
          }
          try {
            return O.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            k(t, !0);
          } finally {
            s === A && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > x.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[A] = !0), e;
    }
    function ce(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) x.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((p = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (C = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : d;
        return (
          r != T &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (T = r).documentElement),
            (E = !i(T)),
            d != T &&
              (n = T.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (p.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(T.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (p.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (p.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (p.getElementsByClassName = J.test(T.getElementsByClassName)),
            (p.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = A),
                !T.getElementsByName || !T.getElementsByName(A).length
              );
            })),
            p.getById
              ? ((x.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((x.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (x.find.TAG = p.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : p.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (x.find.CLASS =
              p.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (p.qsa = J.test(T.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  A +
                  "'></a><select id='" +
                  A +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + R + "*(?:value|" + I + ")"),
                  e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="),
                  (t = T.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + A + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (p.matchesSelector = J.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (p.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", W);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = J.test(a.compareDocumentPosition)),
            (y =
              t || J.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!p.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == T || (e.ownerDocument == d && y(d, e))
                        ? -1
                        : t == T || (t.ownerDocument == d && y(d, t))
                        ? 1
                        : u
                        ? H(u, e) - H(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == T
                      ? -1
                      : t == T
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? H(u, e) - H(u, t)
                      : 0;
                  if (i === o) return de(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? de(a[r], s[r])
                    : a[r] == d
                    ? -1
                    : s[r] == d
                    ? 1
                    : 0;
                })),
          T
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (C(e),
        p.matchesSelector &&
          E &&
          !k[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          k(t, !0);
        }
      return 0 < se(t, T, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != T && C(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != T && C(e);
      var n = x.attrHandle[t.toLowerCase()],
        r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : p.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !p.detectDuplicates),
        (u = !p.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((x = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: Q,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Q.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    p = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            b
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && d)) {
                      (p =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++p && a === e) {
                          i[h] = [N, s, p];
                          break;
                        }
                    } else if (
                      (d &&
                        (p = s =
                          (r =
                            (i =
                              (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]),
                      !1 === p)
                    )
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (
                          (b
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++p &&
                          (d &&
                            ((i =
                              (o = a[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [N, p]),
                          a === e)
                        )
                          break;
                    return (p -= v) === g || (p % g == 0 && 0 <= p / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                x.pseudos[e] ||
                x.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[A]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                x.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = H(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[A]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              X.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = pe(e);
    for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);
    function me() {}
    function be(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function xe(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        d = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [N, d];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[A] || (e[A] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === N && r[1] === d)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Ce(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(p, h, g, v, y, e) {
      return (
        v && !v[A] && (v = Te(v)),
        y && !y[A] && (y = Te(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !p || (!e && h) ? c : Ce(c, s, p, n, r),
            d = g ? (y || (e ? p : l || v) ? [] : t) : f;
          if ((g && g(f, d, n, r), v)) {
            (i = Ce(d, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || p) {
              if (y) {
                (i = []), (o = d.length);
                while (o--) (a = d[o]) && i.push((f[o] = a));
                y(null, (d = []), i, r);
              }
              o = d.length;
              while (o--)
                (a = d[o]) &&
                  -1 < (i = y ? H(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (d = Ce(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : O.apply(t, d);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          u = xe(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = xe(
            function (e) {
              return -1 < H(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = x.relative[e[s].type])) c = [xe(we(c), t)];
        else {
          if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
            for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;
            return Te(
              1 < s && we(c),
              1 < s &&
                be(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && be(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = x.filters = x.pseudos),
      (x.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = b[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = x.preFilter);
          while (a) {
            for (o in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = _.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            x.filter))
              !(r = Q[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            b,
            r,
            i = [],
            o = [],
            a = S[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
            (a = S(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (b = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  d = w,
                  p = e || (b && x.find.TAG("*", i)),
                  h = (N += null == d ? 1 : Math.random() || 0.1),
                  g = p.length;
                for (
                  i && (w = t == T || t || i);
                  l !== g && null != (o = p[l]);
                  l++
                ) {
                  if (b && o) {
                    (a = 0), t || o.ownerDocument == T || (C(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || T, n)) {
                        r.push(o);
                        break;
                      }
                    i && (N = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = j.call(r));
                    f = Ce(f);
                  }
                  O.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((N = h), (w = d)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              x.relative[o[1].type]
            ) {
              if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = Q.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), x.relative[(s = a.type)])) break;
              if (
                (u = x.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && be(o))))
                  return O.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (p.sortStable = A.split("").sort(D).join("") === A),
      (p.detectDuplicates = !!l),
      C(),
      (p.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(I, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(g);
  (E.find = p),
    (E.expr = p.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = p.uniqueSort),
    (E.text = p.getText),
    (E.isXMLDoc = p.isXML),
    (E.contains = p.contains),
    (E.escapeSelector = p.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && E(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    A = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = E.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return b(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var L,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof E ? t[0] : t),
          E.merge(
            this,
            E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)
          ),
          k.test(r[1]) && E.isPlainObject(t))
        )
          for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = w.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : b(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(E)
      : E.makeArray(e, this);
  }).prototype = E.fn),
    (L = E(w));
  var q = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return A(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (S(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length &&
              (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function B(e, t, n, r) {
    var i;
    try {
      e && b((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && b((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          E.each(e.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  b(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== T(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = E.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = b(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          b(t)
                            ? s
                              ? t.call(e, l(u, o, I, s), l(u, o, R, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, I, s),
                                  l(u, o, R, s),
                                  l(u, o, I, o.notifyWith)
                                ))
                            : (a !== I && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== R && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      g.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)),
                  o[1][3].add(l(0, e, b(t) ? t : I)),
                  o[2][3].add(l(0, e, b(n) ? n : R));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = E.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (B(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || b(i[t] && i[t].then))
        )
          return o.then();
        while (t--) B(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    g.console &&
      g.console.warn &&
      e &&
      M.test(e.name) &&
      g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      g.setTimeout(function () {
        throw e;
      });
    });
  var W = E.Deferred();
  function F() {
    w.removeEventListener("DOMContentLoaded", F),
      g.removeEventListener("load", F),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      W.then(e)["catch"](function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          W.resolveWith(w, [E]);
      },
    }),
    (E.ready.then = W.then),
    "complete" === w.readyState ||
    ("loading" !== w.readyState && !w.documentElement.doScroll)
      ? g.setTimeout(E.ready)
      : (w.addEventListener("DOMContentLoaded", F),
        g.addEventListener("load", F));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === T(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        b(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(E(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    _ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(_, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = E.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(H) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || E.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var Y = new Q(),
    G = new Q(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return G.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = G.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              G.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = G.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  G.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = E.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = w.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === E.css(e, "display"))
    );
  };
  var se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = se[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = E.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (se[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var le,
    ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (le = w.createDocumentFragment().appendChild(w.createElement("div"))),
    (ce = w.createElement("input")).setAttribute("type", "radio"),
    ce.setAttribute("checked", "checked"),
    ce.setAttribute("name", "t"),
    le.appendChild(ce),
    (m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (le.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue),
    (le.innerHTML = "<option></option>"),
    (m.option = !!le.lastChild);
  var he = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S(e, t)) ? E.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
    (he.th = he.td),
    m.option ||
      (he.optgroup = he.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = he[s] || he._default),
            (a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          E.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    (f.textContent = ""), (p = 0);
    while ((o = d[p++]))
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ge(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) pe.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function we() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return w.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Te(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Te(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = we;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function Ee(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && E.event.add(e, i, xe);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.get(t);
      if (X(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && E.find.matchesSelector(re, i),
          n.guid || (n.guid = E.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(H) || [""]).length);
        while (l--)
          (p = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = E.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = E.event.special[p] || {}),
              (c = E.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                (((d = u[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(p, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (E.event.global[p] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(H) || [""]).length;
        while (l--)
          if (
            ((p = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            (f = E.event.special[p] || {}),
              (d = u[(p = (r ? f.delegateType : f.bindType) || p)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = d.length);
            while (o--)
              (c = d[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                E.removeEvent(e, p, v.handle),
              delete u[p]);
          } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = E.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (fe.test(t.type) &&
              t.click &&
              S(t, "input") &&
              Y.get(t, "click")) ||
            S(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? xe
              : we),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: we,
      isPropagationStopped: we,
      isImmediatePropagationStopped: we,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      E.event.addProp
    ),
    E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return Ee(this, e, Ce), !1;
        },
        trigger: function () {
          return Ee(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Te(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Te(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = we),
          this.each(function () {
            E.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ae = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function ke(e, t) {
    return (
      (S(e, "table") &&
        S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function je(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      G.hasData(e) && ((o = G.access(e)), (a = E.extend({}, o)), G.set(t, a));
    }
  }
  function qe(n, r, i, o) {
    r = v(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = b(p);
    if (h || (1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== d &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, ge(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++)
          (u = a[c]),
            pe.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              E.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : C(u.textContent.replace(Se, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(ge(r)),
        r.parentNode &&
          (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++)
            je(o[r], a[r]);
        else je(e, c);
      return (
        0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ke(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ke(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !he[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return qe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(ge(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = g), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Re = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || He(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = E.style(e, t)),
        !m.pixelBoxStyles() &&
          Pe.test(a) &&
          Re.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Me(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = g.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = w.createElement("div"),
      l = w.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
      E.extend(m, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = w.createElement("table")),
              (t = w.createElement("tr")),
              (n = w.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = g.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var We = ["Webkit", "Moz", "ms"],
    Fe = w.createElement("div").style,
    $e = {};
  function ze(e) {
    var t = E.cssProps[e] || $e[e];
    return (
      t ||
      (e in Fe
        ? e
        : ($e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = We.length;
              while (n--) if ((e = We[n] + t) in Fe) return e;
            })(e) || e))
    );
  }
  var _e,
    Ue,
    Ve = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Qe = { position: "absolute", visibility: "hidden", display: "block" },
    Ye = { letterSpacing: "0", fontWeight: "400" };
  function Ge(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= E.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += E.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += E.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += E.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = He(e),
      i =
        (!m.boxSizingReliable() || n) &&
        "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!m.boxSizingReliable() && i) ||
        (!m.reliableTrDimensions() && S(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(E.css(e, t));
            if (c && c[3] !== l) {
              (u /= 2), (l = l || c[3]), (c = +u || 1);
              while (a--)
                E.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          })(e, t, i)),
          (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
            m.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = E.cssHooks[t] || E.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Ye && (i = Ye[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    E.each(["height", "width"], function (e, u) {
      E.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Ie(e, Qe, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = He(e),
            o = !m.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = E.css(e, u))),
            Ge(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Me(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (E.cssHooks[i + o].set = Ge);
    }),
    E.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = He(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = g.setTimeout(e, r);
          t.stop = function () {
            g.clearTimeout(n);
          };
        })
      );
    }),
    (_e = w.createElement("input")),
    (Ue = w.createElement("select").appendChild(w.createElement("option"))),
    (_e.type = "checkbox"),
    (m.checkOn = "" !== _e.value),
    (m.optSelected = Ue.selected),
    ((_e = w.createElement("input")).value = "t"),
    (_e.type = "radio"),
    (m.radioValue = "t" === _e.value);
  var Ze,
    et = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? Ze : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (Ze = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = et[t] || E.find.attr;
      et[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = et[o]),
            (et[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (et[o] = i)),
          r
        );
      };
    });
  var tt = /^(?:input|select|textarea|button)$/i,
    nt = /^(?:a|area)$/i;
  function rt(e) {
    return (e.match(H) || []).join(" ");
  }
  function it(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ot(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : tt.test(e.nodeName) || (nt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, it(this)));
          });
        if ((e = ot(t)).length)
          while ((n = this[u++]))
            if (((i = it(n)), (r = 1 === n.nodeType && " " + rt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = rt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, it(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = ot(t)).length)
          while ((n = this[u++]))
            if (((i = it(n)), (r = 1 === n.nodeType && " " + rt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = rt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : b(i)
          ? this.each(function (e) {
              E(this).toggleClass(i.call(this, e, it(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = E(this)), (r = ot(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = it(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + rt(it(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var at = /\r/g;
  E.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = b(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, E(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = E.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(at, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : rt(E.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
              ) {
                if (((t = E(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = E.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        m.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (m.focusin = "onfocusin" in g);
  var st = /^(?:focusinfocus|focusoutblur)$/,
    ut = function (e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [n || w],
        p = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || w),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !st.test(p + E.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          ((e = e[E.expando]
            ? e
            : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : E.makeArray(t, [e])),
          (c = E.event.special[p] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || p, st.test(s + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            d.push(o), (a = o);
          a === (n.ownerDocument || w) &&
            d.push(a.defaultView || a.parentWindow || g);
        }
        i = 0;
        while ((o = d[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || p),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              X(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(d.pop(), t)) ||
            !X(n) ||
            (u &&
              b(n[p]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (E.event.triggered = p),
              e.isPropagationStopped() && f.addEventListener(p, ut),
              n[p](),
              e.isPropagationStopped() && f.removeEventListener(p, ut),
              (E.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    m.focusin ||
      E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        };
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      }),
    (E.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new g.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          E.error(
            "Invalid XML: " +
              (n
                ? E.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    });
  var lt,
    ct = /\[\]$/,
    ft = /\r?\n/g,
    dt = /^(?:submit|button|image|reset|file)$/i,
    pt = /^(?:input|select|textarea|keygen)/i;
  function ht(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      E.each(e, function (e, t) {
        r || ct.test(n)
          ? i(n, t)
          : ht(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== T(e)) i(n, e);
    else for (t in e) ht(n + "[" + t + "]", e[t], r, i);
  }
  (E.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = b(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) ht(n, e[n], t, i);
    return r.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              pt.test(this.nodeName) &&
              !dt.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(ft, "\r\n") };
                })
              : { name: t.name, value: n.replace(ft, "\r\n") };
          })
          .get();
      },
    }),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (b(e) && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return b(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = b(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (m.createHTMLDocument =
      (((lt = w.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === lt.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t =
                  w.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = w.location.href),
                t.head.appendChild(r))
              : (t = w)),
          (o = !n && []),
          (i = k.exec(e))
            ? [t.createElement(i[1])]
            : ((i = me([e], t, o)),
              o && o.length && E(o).remove(),
              E.merge([], i.childNodes)));
      var r, i, o;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, "position"),
          c = E(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = E.css(e, "top")),
          (u = E.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          b(t) && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === E.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
              (i.left += E.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - E.css(r, "marginTop", !0),
            left: t.left - i.left - E.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === E.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = Me(m.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? E(e).position()[n] + "px" : t;
      });
    }),
    E.each({ Height: "height", Width: "width" }, function (a, s) {
      E.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || E.guid++),
        i
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = S),
    (E.isFunction = b),
    (E.isWindow = x),
    (E.camelCase = V),
    (E.type = T),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? "" : (e + "").replace(gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var vt = g.jQuery,
    yt = g.$;
  return (
    (E.noConflict = function (e) {
      return g.$ === E && (g.$ = yt), e && g.jQuery === E && (g.jQuery = vt), E;
    }),
    "undefined" == typeof e && (g.jQuery = g.$ = E),
    E
  );
});

// jquery.dataTables.min.js
(function (l) {
  "function" === typeof define && define.amd
    ? define(["jquery"], function (R) {
        return l(R, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (R, W) {
        R || (R = window);
        W ||
          (W =
            "undefined" !== typeof window
              ? require("jquery")
              : require("jquery")(R));
        return l(W, R, R.document);
      })
    : l(jQuery, window, document);
})(function (l, R, W, r) {
  function qa(a) {
    var b,
      c,
      d = {};
    l.each(a, function (e, f) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") &&
        ((c = e.replace(b[0], b[2].toLowerCase())),
        (d[c] = e),
        "o" === b[1] && qa(a[e]));
    });
    a._hungarianMap = d;
  }
  function Y(a, b, c) {
    a._hungarianMap || qa(a);
    var d;
    l.each(b, function (e, f) {
      d = a._hungarianMap[e];
      d === r ||
        (!c && b[d] !== r) ||
        ("o" === d.charAt(0)
          ? (b[d] || (b[d] = {}), l.extend(!0, b[d], b[e]), Y(a[d], b[d], c))
          : (b[d] = b[e]));
    });
  }
  function Va(a) {
    var b = u.defaults.oLanguage,
      c = b.sDecimal;
    c && Wa(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable &&
        d &&
        "No data available in table" === b.sEmptyTable &&
        S(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords &&
        d &&
        "Loading..." === b.sLoadingRecords &&
        S(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Wa(a);
    }
  }
  function yb(a) {
    N(a, "ordering", "bSort");
    N(a, "orderMulti", "bSortMulti");
    N(a, "orderClasses", "bSortClasses");
    N(a, "orderCellsTop", "bSortCellsTop");
    N(a, "order", "aaSorting");
    N(a, "orderFixed", "aaSortingFixed");
    N(a, "paging", "bPaginate");
    N(a, "pagingType", "sPaginationType");
    N(a, "pageLength", "iDisplayLength");
    N(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if ((a = a.aoSearchCols))
      for (var b = 0, c = a.length; b < c; b++)
        a[b] && Y(u.models.oSearch, a[b]);
  }
  function zb(a) {
    N(a, "orderable", "bSortable");
    N(a, "orderData", "aDataSort");
    N(a, "orderSequence", "asSorting");
    N(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
  }
  function Ab(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = l("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: -1 * l(R).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            l("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(l("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    l.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth;
  }
  function Bb(a, b, c, d, e, f) {
    var g = !1;
    if (c !== r) {
      var h = c;
      g = !0;
    }
    for (; d !== e; )
      a.hasOwnProperty(d) &&
        ((h = g ? b(h, a[d], d, a) : a[d]), (g = !0), (d += f));
    return h;
  }
  function Xa(a, b) {
    var c = u.defaults.column,
      d = a.aoColumns.length;
    c = l.extend({}, u.models.oColumn, c, {
      nTh: b ? b : W.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d,
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = l.extend({}, u.models.oSearch, c[d]);
    Da(a, d, l(b).data());
  }
  function Da(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
      e = l(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }
    c !== r &&
      null !== c &&
      (zb(c),
      Y(u.defaults.column, c, !0),
      c.mDataProp === r || c.mData || (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      c.sClass && e.addClass(c.sClass),
      l.extend(b, c),
      S(b, c, "sWidth", "sWidthOrig"),
      c.iDataSort !== r && (b.aDataSort = [c.iDataSort]),
      S(b, c, "aDataSort"));
    var g = b.mData,
      h = ha(g),
      k = b.mRender ? ha(b.mRender) : null;
    c = function (n) {
      return "string" === typeof n && -1 !== n.indexOf("@");
    };
    b._bAttrSrc = l.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (n, m, p) {
      var t = h(n, m, r, p);
      return k && m ? k(t, m, n, p) : t;
    };
    b.fnSetData = function (n, m, p) {
      return ca(g)(n, m, p);
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== l.inArray("asc", b.asSorting);
    c = -1 !== l.inArray("desc", b.asSorting);
    b.bSortable && (a || c)
      ? a && !c
        ? ((b.sSortingClass = d.sSortableAsc),
          (b.sSortingClassJUI = d.sSortJUIAscAllowed))
        : !a && c
        ? ((b.sSortingClass = d.sSortableDesc),
          (b.sSortingClassJUI = d.sSortJUIDescAllowed))
        : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
      : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
  }
  function ra(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ya(a);
      for (var c = 0, d = b.length; c < d; c++)
        b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ("" === b.sY && "" === b.sX) || Ea(a);
    E(a, null, "column-sizing", [a]);
  }
  function sa(a, b) {
    var c = Fa(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null;
  }
  function ta(a, b) {
    var c = Fa(a, "bVisible");
    c = l.inArray(b, c);
    return -1 !== c ? c : null;
  }
  function ma(a) {
    var b = 0;
    l.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== l(d.nTh).css("display") && b++;
    });
    return b;
  }
  function Fa(a, b) {
    var c = [];
    l.map(a.aoColumns, function (d, e) {
      d[b] && c.push(e);
    });
    return c;
  }
  function Za(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = u.ext.type.detect,
      e,
      f,
      g;
    var h = 0;
    for (e = b.length; h < e; h++) {
      var k = b[h];
      var n = [];
      if (!k.sType && k._sManualType) k.sType = k._sManualType;
      else if (!k.sType) {
        var m = 0;
        for (f = d.length; m < f; m++) {
          var p = 0;
          for (g = c.length; p < g; p++) {
            n[p] === r && (n[p] = O(a, p, h, "type"));
            var t = d[m](n[p], a);
            if (!t && m !== d.length - 1) break;
            if ("html" === t) break;
          }
          if (t) {
            k.sType = t;
            break;
          }
        }
        k.sType || (k.sType = "string");
      }
    }
  }
  function Cb(a, b, c, d) {
    var e,
      f,
      g,
      h = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        var k = b[e];
        var n = k.targets !== r ? k.targets : k.aTargets;
        Array.isArray(n) || (n = [n]);
        var m = 0;
        for (f = n.length; m < f; m++)
          if ("number" === typeof n[m] && 0 <= n[m]) {
            for (; h.length <= n[m]; ) Xa(a);
            d(n[m], k);
          } else if ("number" === typeof n[m] && 0 > n[m])
            d(h.length + n[m], k);
          else if ("string" === typeof n[m]) {
            var p = 0;
            for (g = h.length; p < g; p++)
              ("_all" == n[m] || l(h[p].nTh).hasClass(n[m])) && d(p, k);
          }
      }
    if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
  }
  function da(a, b, c, d) {
    var e = a.aoData.length,
      f = l.extend(!0, {}, u.models.oRow, { src: c ? "dom" : "data", idx: e });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, h = 0, k = g.length; h < k; h++)
      g[h].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== r && (a.aIds[b] = f);
    (!c && a.oFeatures.bDeferRender) || $a(a, e, c, d);
    return e;
  }
  function Ga(a, b) {
    var c;
    b instanceof l || (b = l(b));
    return b.map(function (d, e) {
      c = ab(a, e);
      return da(a, c.data, e, c.cells);
    });
  }
  function O(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      h = f.sDefaultContent,
      k = f.fnGetData(g, d, { settings: a, row: b, col: c });
    if (k === r)
      return (
        a.iDrawError != e &&
          null === h &&
          (Z(
            a,
            0,
            "Requested unknown parameter " +
              ("function" == typeof f.mData
                ? "{function}"
                : "'" + f.mData + "'") +
              " for row " +
              b +
              ", column " +
              c,
            4
          ),
          (a.iDrawError = e)),
        h
      );
    if ((k === g || null === k) && null !== h && d !== r) k = h;
    else if ("function" === typeof k) return k.call(g);
    return null === k && "display" == d ? "" : k;
  }
  function Db(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c,
    });
  }
  function bb(a) {
    return l.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".");
    });
  }
  function ha(a) {
    if (l.isPlainObject(a)) {
      var b = {};
      l.each(a, function (d, e) {
        e && (b[d] = ha(e));
      });
      return function (d, e, f, g) {
        var h = b[e] || b._;
        return h !== r ? h(d, e, f, g) : d;
      };
    }
    if (null === a)
      return function (d) {
        return d;
      };
    if ("function" === typeof a)
      return function (d, e, f, g) {
        return a(d, e, f, g);
      };
    if (
      "string" !== typeof a ||
      (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
    )
      return function (d, e) {
        return d[a];
      };
    var c = function (d, e, f) {
      if ("" !== f) {
        var g = bb(f);
        for (var h = 0, k = g.length; h < k; h++) {
          f = g[h].match(ua);
          var n = g[h].match(na);
          if (f) {
            g[h] = g[h].replace(ua, "");
            "" !== g[h] && (d = d[g[h]]);
            n = [];
            g.splice(0, h + 1);
            g = g.join(".");
            if (Array.isArray(d))
              for (h = 0, k = d.length; h < k; h++) n.push(c(d[h], e, g));
            d = f[0].substring(1, f[0].length - 1);
            d = "" === d ? n : n.join(d);
            break;
          } else if (n) {
            g[h] = g[h].replace(na, "");
            d = d[g[h]]();
            continue;
          }
          if (null === d || d[g[h]] === r) return r;
          d = d[g[h]];
        }
      }
      return d;
    };
    return function (d, e) {
      return c(d, e, a);
    };
  }
  function ca(a) {
    if (l.isPlainObject(a)) return ca(a._);
    if (null === a) return function () {};
    if ("function" === typeof a)
      return function (c, d, e) {
        a(c, "set", d, e);
      };
    if (
      "string" !== typeof a ||
      (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("("))
    )
      return function (c, d) {
        c[a] = d;
      };
    var b = function (c, d, e) {
      e = bb(e);
      var f = e[e.length - 1];
      for (var g, h, k = 0, n = e.length - 1; k < n; k++) {
        if ("__proto__" === e[k] || "constructor" === e[k])
          throw Error("Cannot set prototype values");
        g = e[k].match(ua);
        h = e[k].match(na);
        if (g) {
          e[k] = e[k].replace(ua, "");
          c[e[k]] = [];
          f = e.slice();
          f.splice(0, k + 1);
          g = f.join(".");
          if (Array.isArray(d))
            for (h = 0, n = d.length; h < n; h++)
              (f = {}), b(f, d[h], g), c[e[k]].push(f);
          else c[e[k]] = d;
          return;
        }
        h && ((e[k] = e[k].replace(na, "")), (c = c[e[k]](d)));
        if (null === c[e[k]] || c[e[k]] === r) c[e[k]] = {};
        c = c[e[k]];
      }
      if (f.match(na)) c[f.replace(na, "")](d);
      else c[f.replace(ua, "")] = d;
    };
    return function (c, d) {
      return b(c, d, a);
    };
  }
  function cb(a) {
    return P(a.aoData, "_aData");
  }
  function Ha(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function Ia(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++)
      a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === r && a.splice(d, 1);
  }
  function va(a, b, c, d) {
    var e = a.aoData[b],
      f,
      g = function (k, n) {
        for (; k.childNodes.length; ) k.removeChild(k.firstChild);
        k.innerHTML = O(a, b, n, "display");
      };
    if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
      var h = e.anCells;
      if (h)
        if (d !== r) g(h[d], d);
        else for (c = 0, f = h.length; c < f; c++) g(h[c], c);
    } else e._aData = ab(a, e, d, d === r ? r : e._aData).data;
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== r) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      db(a, e);
    }
  }
  function ab(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g,
      h = 0,
      k,
      n = a.aoColumns,
      m = a._rowReadObject;
    d = d !== r ? d : m ? {} : [];
    var p = function (x, q) {
        if ("string" === typeof x) {
          var y = x.indexOf("@");
          -1 !== y && ((y = x.substring(y + 1)), ca(x)(d, q.getAttribute(y)));
        }
      },
      t = function (x) {
        if (c === r || c === h)
          (g = n[h]),
            (k = x.innerHTML.trim()),
            g && g._bAttrSrc
              ? (ca(g.mData._)(d, k),
                p(g.mData.sort, x),
                p(g.mData.type, x),
                p(g.mData.filter, x))
              : m
              ? (g._setter || (g._setter = ca(g.mData)), g._setter(d, k))
              : (d[h] = k);
        h++;
      };
    if (f)
      for (; f; ) {
        var v = f.nodeName.toUpperCase();
        if ("TD" == v || "TH" == v) t(f), e.push(f);
        f = f.nextSibling;
      }
    else for (e = b.anCells, f = 0, v = e.length; f < v; f++) t(e[f]);
    (b = b.firstChild ? b : b.nTr) &&
      (b = b.getAttribute("id")) &&
      ca(a.rowId)(d, b);
    return { data: d, cells: e };
  }
  function $a(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      h,
      k;
    if (null === e.nTr) {
      var n = c || W.createElement("tr");
      e.nTr = n;
      e.anCells = g;
      n._DT_RowIndex = b;
      db(a, e);
      var m = 0;
      for (h = a.aoColumns.length; m < h; m++) {
        var p = a.aoColumns[m];
        e = (k = c ? !1 : !0) ? W.createElement(p.sCellType) : d[m];
        e._DT_CellIndex = { row: b, column: m };
        g.push(e);
        if (
          k ||
          !(
            (!p.mRender && p.mData === m) ||
            (l.isPlainObject(p.mData) && p.mData._ === m + ".display")
          )
        )
          e.innerHTML = O(a, b, m, "display");
        p.sClass && (e.className += " " + p.sClass);
        p.bVisible && !c
          ? n.appendChild(e)
          : !p.bVisible && c && e.parentNode.removeChild(e);
        p.fnCreatedCell &&
          p.fnCreatedCell.call(a.oInstance, e, O(a, b, m), f, b, m);
      }
      E(a, "aoRowCreatedCallback", null, [n, f, b, g]);
    }
  }
  function db(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass &&
        ((e = d.DT_RowClass.split(" ")),
        (b.__rowc = b.__rowc ? Ja(b.__rowc.concat(e)) : e),
        l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && l(c).attr(d.DT_RowAttr);
      d.DT_RowData && l(c).data(d.DT_RowData);
    }
  }
  function Eb(a) {
    var b,
      c,
      d = a.nTHead,
      e = a.nTFoot,
      f = 0 === l("th, td", d).length,
      g = a.oClasses,
      h = a.aoColumns;
    f && (c = l("<tr/>").appendTo(d));
    var k = 0;
    for (b = h.length; k < b; k++) {
      var n = h[k];
      var m = l(n.nTh).addClass(n.sClass);
      f && m.appendTo(c);
      a.oFeatures.bSort &&
        (m.addClass(n.sSortingClass),
        !1 !== n.bSortable &&
          (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
          eb(a, n.nTh, k)));
      n.sTitle != m[0].innerHTML && m.html(n.sTitle);
      fb(a, "header")(a, m, n, g);
    }
    f && wa(a.aoHeader, d);
    l(d).children("tr").attr("role", "row");
    l(d).children("tr").children("th, td").addClass(g.sHeaderTH);
    l(e).children("tr").children("th, td").addClass(g.sFooterTH);
    if (null !== e)
      for (a = a.aoFooter[0], k = 0, b = a.length; k < b; k++)
        (n = h[k]),
          (n.nTf = a[k].cell),
          n.sClass && l(n.nTf).addClass(n.sClass);
  }
  function xa(a, b, c) {
    var d,
      e,
      f = [],
      g = [],
      h = a.aoColumns.length;
    if (b) {
      c === r && (c = !1);
      var k = 0;
      for (d = b.length; k < d; k++) {
        f[k] = b[k].slice();
        f[k].nTr = b[k].nTr;
        for (e = h - 1; 0 <= e; e--)
          a.aoColumns[e].bVisible || c || f[k].splice(e, 1);
        g.push([]);
      }
      k = 0;
      for (d = f.length; k < d; k++) {
        if ((a = f[k].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
        e = 0;
        for (b = f[k].length; e < b; e++) {
          var n = (h = 1);
          if (g[k][e] === r) {
            a.appendChild(f[k][e].cell);
            for (
              g[k][e] = 1;
              f[k + h] !== r && f[k][e].cell == f[k + h][e].cell;

            )
              (g[k + h][e] = 1), h++;
            for (; f[k][e + n] !== r && f[k][e].cell == f[k][e + n].cell; ) {
              for (c = 0; c < h; c++) g[k + c][e + n] = 1;
              n++;
            }
            l(f[k][e].cell).attr("rowspan", h).attr("colspan", n);
          }
        }
      }
    }
  }
  function ea(a) {
    var b = E(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== l.inArray(!1, b)) Q(a, !1);
    else {
      b = [];
      var c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        h = "ssp" == L(a),
        k = a.aiDisplay;
      a.bDrawing = !0;
      g !== r &&
        -1 !== g &&
        ((a._iDisplayStart = h ? g : g >= a.fnRecordsDisplay() ? 0 : g),
        (a.iInitDisplayStart = -1));
      g = a._iDisplayStart;
      var n = a.fnDisplayEnd();
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, Q(a, !1);
      else if (!h) a.iDraw++;
      else if (!a.bDestroying && !Fb(a)) return;
      if (0 !== k.length)
        for (f = h ? a.aoData.length : n, h = h ? 0 : g; h < f; h++) {
          var m = k[h],
            p = a.aoData[m];
          null === p.nTr && $a(a, m);
          var t = p.nTr;
          if (0 !== e) {
            var v = d[c % e];
            p._sRowStripe != v &&
              (l(t).removeClass(p._sRowStripe).addClass(v),
              (p._sRowStripe = v));
          }
          E(a, "aoRowCallback", null, [t, p._aData, c, h, m]);
          b.push(t);
          c++;
        }
      else
        (c = f.sZeroRecords),
          1 == a.iDraw && "ajax" == L(a)
            ? (c = f.sLoadingRecords)
            : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
          (b[0] = l("<tr/>", { class: e ? d[0] : "" }).append(
            l("<td />", {
              valign: "top",
              colSpan: ma(a),
              class: a.oClasses.sRowEmpty,
            }).html(c)
          )[0]);
      E(a, "aoHeaderCallback", "header", [
        l(a.nTHead).children("tr")[0],
        cb(a),
        g,
        n,
        k,
      ]);
      E(a, "aoFooterCallback", "footer", [
        l(a.nTFoot).children("tr")[0],
        cb(a),
        g,
        n,
        k,
      ]);
      d = l(a.nTBody);
      d.children().detach();
      d.append(l(b));
      E(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function ia(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && Gb(a);
    d ? ya(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    ea(a);
    a._drawHold = !1;
  }
  function Hb(a) {
    var b = a.oClasses,
      c = l(a.nTable);
    c = l("<div/>").insertBefore(c);
    var d = a.oFeatures,
      e = l("<div/>", {
        id: a.sTableId + "_wrapper",
        class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, h, k, n, m, p, t = 0; t < f.length; t++) {
      g = null;
      h = f[t];
      if ("<" == h) {
        k = l("<div/>")[0];
        n = f[t + 1];
        if ("'" == n || '"' == n) {
          m = "";
          for (p = 2; f[t + p] != n; ) (m += f[t + p]), p++;
          "H" == m ? (m = b.sJUIHeader) : "F" == m && (m = b.sJUIFooter);
          -1 != m.indexOf(".")
            ? ((n = m.split(".")),
              (k.id = n[0].substr(1, n[0].length - 1)),
              (k.className = n[1]))
            : "#" == m.charAt(0)
            ? (k.id = m.substr(1, m.length - 1))
            : (k.className = m);
          t += p;
        }
        e.append(k);
        e = l(k);
      } else if (">" == h) e = e.parent();
      else if ("l" == h && d.bPaginate && d.bLengthChange) g = Ib(a);
      else if ("f" == h && d.bFilter) g = Jb(a);
      else if ("r" == h && d.bProcessing) g = Kb(a);
      else if ("t" == h) g = Lb(a);
      else if ("i" == h && d.bInfo) g = Mb(a);
      else if ("p" == h && d.bPaginate) g = Nb(a);
      else if (0 !== u.ext.feature.length)
        for (k = u.ext.feature, p = 0, n = k.length; p < n; p++)
          if (h == k[p].cFeature) {
            g = k[p].fnInit(a);
            break;
          }
      g &&
        ((k = a.aanFeatures), k[h] || (k[h] = []), k[h].push(g), e.append(g));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function wa(a, b) {
    var c = l(b).children("tr"),
      d,
      e,
      f;
    a.splice(0, a.length);
    var g = 0;
    for (f = c.length; g < f; g++) a.push([]);
    g = 0;
    for (f = c.length; g < f; g++) {
      var h = c[g];
      for (d = h.firstChild; d; ) {
        if (
          "TD" == d.nodeName.toUpperCase() ||
          "TH" == d.nodeName.toUpperCase()
        ) {
          var k = 1 * d.getAttribute("colspan");
          var n = 1 * d.getAttribute("rowspan");
          k = k && 0 !== k && 1 !== k ? k : 1;
          n = n && 0 !== n && 1 !== n ? n : 1;
          var m = 0;
          for (e = a[g]; e[m]; ) m++;
          var p = m;
          var t = 1 === k ? !0 : !1;
          for (e = 0; e < k; e++)
            for (m = 0; m < n; m++)
              (a[g + m][p + e] = { cell: d, unique: t }), (a[g + m].nTr = h);
        }
        d = d.nextSibling;
      }
    }
  }
  function Ka(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), wa(c, b)));
    b = 0;
    for (var e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        !c[b][f].unique || (d[f] && a.bSortCellsTop) || (d[f] = c[b][f].cell);
    return d;
  }
  function La(a, b, c) {
    E(a, "aoServerParams", "serverParams", [b]);
    if (b && Array.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      l.each(b, function (m, p) {
        var t = p.name.match(e);
        t
          ? ((t = t[0]), d[t] || (d[t] = []), d[t].push(p.value))
          : (d[p.name] = p.value);
      });
      b = d;
    }
    var f = a.ajax,
      g = a.oInstance,
      h = function (m) {
        E(a, null, "xhr", [a, m, a.jqXHR]);
        c(m);
      };
    if (l.isPlainObject(f) && f.data) {
      var k = f.data;
      var n = "function" === typeof k ? k(b, a) : k;
      b = "function" === typeof k && n ? n : l.extend(!0, b, n);
      delete f.data;
    }
    n = {
      data: b,
      success: function (m) {
        var p = m.error || m.sError;
        p && Z(a, 0, p);
        a.json = m;
        h(m);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (m, p, t) {
        t = E(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === l.inArray(!0, t) &&
          ("parsererror" == p
            ? Z(a, 0, "Invalid JSON response", 1)
            : 4 === m.readyState && Z(a, 0, "Ajax error", 7));
        Q(a, !1);
      },
    };
    a.oAjaxData = b;
    E(a, null, "preXhr", [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          g,
          a.sAjaxSource,
          l.map(b, function (m, p) {
            return { name: p, value: m };
          }),
          h,
          a
        )
      : a.sAjaxSource || "string" === typeof f
      ? (a.jqXHR = l.ajax(l.extend(n, { url: f || a.sAjaxSource })))
      : "function" === typeof f
      ? (a.jqXHR = f.call(g, b, h, a))
      : ((a.jqXHR = l.ajax(l.extend(n, f))), (f.data = k));
  }
  function Fb(a) {
    return a.bAjaxDataGet
      ? (a.iDraw++,
        Q(a, !0),
        La(a, Ob(a), function (b) {
          Pb(a, b);
        }),
        !1)
      : !0;
  }
  function Ob(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g = [],
      h = oa(a);
    var k = a._iDisplayStart;
    var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var m = function (x, q) {
      g.push({ name: x, value: q });
    };
    m("sEcho", a.iDraw);
    m("iColumns", c);
    m("sColumns", P(b, "sName").join(","));
    m("iDisplayStart", k);
    m("iDisplayLength", n);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: k,
      length: n,
      search: { value: e.sSearch, regex: e.bRegex },
    };
    for (k = 0; k < c; k++) {
      var t = b[k];
      var v = f[k];
      n = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: n,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: { value: v.sSearch, regex: v.bRegex },
      });
      m("mDataProp_" + k, n);
      d.bFilter &&
        (m("sSearch_" + k, v.sSearch),
        m("bRegex_" + k, v.bRegex),
        m("bSearchable_" + k, t.bSearchable));
      d.bSort && m("bSortable_" + k, t.bSortable);
    }
    d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
    d.bSort &&
      (l.each(h, function (x, q) {
        p.order.push({ column: q.col, dir: q.dir });
        m("iSortCol_" + x, q.col);
        m("sSortDir_" + x, q.dir);
      }),
      m("iSortingCols", h.length));
    b = u.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? g : p) : b ? g : p;
  }
  function Pb(a, b) {
    var c = function (g, h) {
        return b[g] !== r ? b[g] : b[h];
      },
      d = Ma(a, b),
      e = c("sEcho", "draw"),
      f = c("iTotalRecords", "recordsTotal");
    c = c("iTotalDisplayRecords", "recordsFiltered");
    if (e !== r) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }
    Ha(a);
    a._iRecordsTotal = parseInt(f, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;
    for (f = d.length; e < f; e++) da(a, d[e]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    ea(a);
    a._bInitComplete || Na(a, b);
    a.bAjaxDataGet = !0;
    Q(a, !1);
  }
  function Ma(a, b) {
    var c =
      l.isPlainObject(a.ajax) && a.ajax.dataSrc !== r
        ? a.ajax.dataSrc
        : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? ha(c)(b) : b;
  }
  function Jb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      h = d.sSearch;
    h = h.match(/_INPUT_/) ? h.replace("_INPUT_", g) : h + g;
    b = l("<div/>", {
      id: f.f ? null : c + "_filter",
      class: b.sFilter,
    }).append(l("<label/>").append(h));
    var k = function () {
      var m = this.value ? this.value : "";
      m != e.sSearch &&
        (ya(a, {
          sSearch: m,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive,
        }),
        (a._iDisplayStart = 0),
        ea(a));
    };
    f = null !== a.searchDelay ? a.searchDelay : "ssp" === L(a) ? 400 : 0;
    var n = l("input", b)
      .val(e.sSearch)
      .attr("placeholder", d.sSearchPlaceholder)
      .on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? gb(k, f) : k)
      .on("mouseup", function (m) {
        setTimeout(function () {
          k.call(n[0]);
        }, 10);
      })
      .on("keypress.DT", function (m) {
        if (13 == m.keyCode) return !1;
      })
      .attr("aria-controls", c);
    l(a.nTable).on("search.dt.DT", function (m, p) {
      if (a === p)
        try {
          n[0] !== W.activeElement && n.val(e.sSearch);
        } catch (t) {}
    });
    return b[0];
  }
  function ya(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (h) {
        d.sSearch = h.sSearch;
        d.bRegex = h.bRegex;
        d.bSmart = h.bSmart;
        d.bCaseInsensitive = h.bCaseInsensitive;
      },
      g = function (h) {
        return h.bEscapeRegex !== r ? !h.bEscapeRegex : h.bRegex;
      };
    Za(a);
    if ("ssp" != L(a)) {
      Qb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      f(b);
      for (b = 0; b < e.length; b++)
        Rb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      Sb(a);
    } else f(b);
    a.bFiltered = !0;
    E(a, null, "search", [a]);
  }
  function Sb(a) {
    for (
      var b = u.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length;
      f < g;
      f++
    ) {
      for (var h = [], k = 0, n = c.length; k < n; k++)
        (e = c[k]),
          (d = a.aoData[e]),
          b[f](a, d._aFilterData, e, d._aData, k) && h.push(e);
      c.length = 0;
      l.merge(c, h);
    }
  }
  function Rb(a, b, c, d, e, f) {
    if ("" !== b) {
      var g = [],
        h = a.aiDisplay;
      d = hb(b, d, e, f);
      for (e = 0; e < h.length; e++)
        (b = a.aoData[h[e]]._aFilterData[c]), d.test(b) && g.push(h[e]);
      a.aiDisplay = g;
    }
  }
  function Qb(a, b, c, d, e, f) {
    e = hb(b, d, e, f);
    var g = a.oPreviousSearch.sSearch,
      h = a.aiDisplayMaster;
    f = [];
    0 !== u.ext.search.length && (c = !0);
    var k = Tb(a);
    if (0 >= b.length) a.aiDisplay = h.slice();
    else {
      if (k || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted)
        a.aiDisplay = h.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++)
        e.test(a.aoData[b[c]]._sFilterRow) && f.push(b[c]);
      a.aiDisplay = f;
    }
  }
  function hb(a, b, c, d) {
    a = b ? a : ib(a);
    c &&
      (a =
        "^(?=.*?" +
        l
          .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
            if ('"' === e.charAt(0)) {
              var f = e.match(/^"(.*)"$/);
              e = f ? f[1] : e;
            }
            return e.replace('"', "");
          })
          .join(")(?=.*?") +
        ").*$");
    return new RegExp(a, d ? "i" : "");
  }
  function Tb(a) {
    var b = a.aoColumns,
      c,
      d,
      e = u.ext.type.search;
    var f = !1;
    var g = 0;
    for (c = a.aoData.length; g < c; g++) {
      var h = a.aoData[g];
      if (!h._aFilterData) {
        var k = [];
        var n = 0;
        for (d = b.length; n < d; n++) {
          f = b[n];
          if (f.bSearchable) {
            var m = O(a, g, n, "filter");
            e[f.sType] && (m = e[f.sType](m));
            null === m && (m = "");
            "string" !== typeof m && m.toString && (m = m.toString());
          } else m = "";
          m.indexOf &&
            -1 !== m.indexOf("&") &&
            ((Oa.innerHTML = m), (m = rc ? Oa.textContent : Oa.innerText));
          m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
          k.push(m);
        }
        h._aFilterData = k;
        h._sFilterRow = k.join("  ");
        f = !0;
      }
    }
    return f;
  }
  function Ub(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive,
    };
  }
  function Vb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive,
    };
  }
  function Mb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = l("<div/>", { class: a.oClasses.sInfo, id: c ? null : b + "_info" });
    c ||
      (a.aoDrawCallback.push({ fn: Wb, sName: "information" }),
      d.attr("role", "status").attr("aria-live", "polite"),
      l(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }
  function Wb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        h = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (h += " " + c.sInfoFiltered);
      h += c.sInfoPostFix;
      h = Xb(a, h);
      c = c.fnInfoCallback;
      null !== c && (h = c.call(a.oInstance, a, d, e, f, g, h));
      l(b).html(h);
    }
  }
  function Xb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, f))
      .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }
  function za(a) {
    var b = a.iInitDisplayStart,
      c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;
    if (a.bInitialised) {
      Hb(a);
      Eb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      Q(a, !0);
      d.bAutoWidth && Ya(a);
      var f = 0;
      for (d = c.length; f < d; f++) {
        var g = c[f];
        g.sWidth && (g.nTh.style.width = H(g.sWidth));
      }
      E(a, null, "preInit", [a]);
      ia(a);
      c = L(a);
      if ("ssp" != c || e)
        "ajax" == c
          ? La(
              a,
              [],
              function (h) {
                var k = Ma(a, h);
                for (f = 0; f < k.length; f++) da(a, k[f]);
                a.iInitDisplayStart = b;
                ia(a);
                Q(a, !1);
                Na(a, h);
              },
              a
            )
          : (Q(a, !1), Na(a));
    } else
      setTimeout(function () {
        za(a);
      }, 200);
  }
  function Na(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && ra(a);
    E(a, null, "plugin-init", [a, b]);
    E(a, "aoInitComplete", "init", [a, b]);
  }
  function jb(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    kb(a);
    E(a, null, "length", [a, c]);
  }
  function Ib(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.aLengthMenu,
      e = Array.isArray(d[0]),
      f = e ? d[0] : d;
    d = e ? d[1] : d;
    e = l("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      class: b.sLengthSelect,
    });
    for (var g = 0, h = f.length; g < h; g++)
      e[0][g] = new Option(
        "number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g],
        f[g]
      );
    var k = l("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (k[0].id = c + "_length");
    k.children().append(
      a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
    );
    l("select", k)
      .val(a._iDisplayLength)
      .on("change.DT", function (n) {
        jb(a, l(this).val());
        ea(a);
      });
    l(a.nTable).on("length.dt.DT", function (n, m, p) {
      a === m && l("select", k).val(p);
    });
    return k[0];
  }
  function Nb(a) {
    var b = a.sPaginationType,
      c = u.ext.pager[b],
      d = "function" === typeof c,
      e = function (g) {
        ea(g);
      };
    b = l("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p ||
      ((b.id = a.sTableId + "_paginate"),
      a.aoDrawCallback.push({
        fn: function (g) {
          if (d) {
            var h = g._iDisplayStart,
              k = g._iDisplayLength,
              n = g.fnRecordsDisplay(),
              m = -1 === k;
            h = m ? 0 : Math.ceil(h / k);
            k = m ? 1 : Math.ceil(n / k);
            n = c(h, k);
            var p;
            m = 0;
            for (p = f.p.length; m < p; m++)
              fb(g, "pageButton")(g, f.p[m], m, n, h, k);
          } else c.fnUpdate(g, e);
        },
        sName: "pagination",
      }));
    return b;
  }
  function lb(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 === e
      ? (d = 0)
      : "number" === typeof b
      ? ((d = b * e), d > f && (d = 0))
      : "first" == b
      ? (d = 0)
      : "previous" == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : "next" == b
      ? d + e < f && (d += e)
      : "last" == b
      ? (d = Math.floor((f - 1) / e) * e)
      : Z(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (E(a, null, "page", [a]), c && ea(a));
    return b;
  }
  function Kb(a) {
    return l("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      class: a.oClasses.sProcessing,
    })
      .html(a.oLanguage.sProcessing)
      .insertBefore(a.nTable)[0];
  }
  function Q(a, b) {
    a.oFeatures.bProcessing &&
      l(a.aanFeatures.r).css("display", b ? "block" : "none");
    E(a, null, "processing", [a, b]);
  }
  function Lb(a) {
    var b = l(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      h = g.length ? g[0]._captionSide : null,
      k = l(b[0].cloneNode(!1)),
      n = l(b[0].cloneNode(!1)),
      m = b.children("tfoot");
    m.length || (m = null);
    k = l("<div/>", { class: f.sScrollWrapper })
      .append(
        l("<div/>", { class: f.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? (d ? H(d) : null) : "100%",
          })
          .append(
            l("<div/>", { class: f.sScrollHeadInner })
              .css({ boxSizing: "content-box", width: c.sXInner || "100%" })
              .append(
                k
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === h ? g : null)
                  .append(b.children("thead"))
              )
          )
      )
      .append(
        l("<div/>", { class: f.sScrollBody })
          .css({
            position: "relative",
            overflow: "auto",
            width: d ? H(d) : null,
          })
          .append(b)
      );
    m &&
      k.append(
        l("<div/>", { class: f.sScrollFoot })
          .css({
            overflow: "hidden",
            border: 0,
            width: d ? (d ? H(d) : null) : "100%",
          })
          .append(
            l("<div/>", { class: f.sScrollFootInner }).append(
              n
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === h ? g : null)
                .append(b.children("tfoot"))
            )
          )
      );
    b = k.children();
    var p = b[0];
    f = b[1];
    var t = m ? b[2] : null;
    if (d)
      l(f).on("scroll.DT", function (v) {
        v = this.scrollLeft;
        p.scrollLeft = v;
        m && (t.scrollLeft = v);
      });
    l(f).css("max-height", e);
    c.bCollapse || l(f).css("height", e);
    a.nScrollHead = p;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({ fn: Ea, sName: "scrolling" });
    return k[0];
  }
  function Ea(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY;
    b = b.iBarWidth;
    var f = l(a.nScrollHead),
      g = f[0].style,
      h = f.children("div"),
      k = h[0].style,
      n = h.children("table");
    h = a.nScrollBody;
    var m = l(h),
      p = h.style,
      t = l(a.nScrollFoot).children("div"),
      v = t.children("table"),
      x = l(a.nTHead),
      q = l(a.nTable),
      y = q[0],
      B = y.style,
      F = a.nTFoot ? l(a.nTFoot) : null,
      T = a.oBrowser,
      J = T.bScrollOversize,
      z = P(a.aoColumns, "nTh"),
      D = [],
      aa = [],
      U = [],
      ja = [],
      Aa,
      Yb = function (C) {
        C = C.style;
        C.paddingTop = "0";
        C.paddingBottom = "0";
        C.borderTopWidth = "0";
        C.borderBottomWidth = "0";
        C.height = 0;
      };
    var fa = h.scrollHeight > h.clientHeight;
    if (a.scrollBarVis !== fa && a.scrollBarVis !== r)
      (a.scrollBarVis = fa), ra(a);
    else {
      a.scrollBarVis = fa;
      q.children("thead, tfoot").remove();
      if (F) {
        var ka = F.clone().prependTo(q);
        var la = F.find("tr");
        ka = ka.find("tr");
      }
      var mb = x.clone().prependTo(q);
      x = x.find("tr");
      fa = mb.find("tr");
      mb.find("th, td").removeAttr("tabindex");
      c || ((p.width = "100%"), (f[0].style.width = "100%"));
      l.each(Ka(a, mb), function (C, V) {
        Aa = sa(a, C);
        V.style.width = a.aoColumns[Aa].sWidth;
      });
      F &&
        X(function (C) {
          C.style.width = "";
        }, ka);
      f = q.outerWidth();
      "" === c
        ? ((B.width = "100%"),
          J &&
            (q.find("tbody").height() > h.offsetHeight ||
              "scroll" == m.css("overflow-y")) &&
            (B.width = H(q.outerWidth() - b)),
          (f = q.outerWidth()))
        : "" !== d && ((B.width = H(d)), (f = q.outerWidth()));
      X(Yb, fa);
      X(function (C) {
        U.push(C.innerHTML);
        D.push(H(l(C).css("width")));
      }, fa);
      X(function (C, V) {
        -1 !== l.inArray(C, z) && (C.style.width = D[V]);
      }, x);
      l(fa).height(0);
      F &&
        (X(Yb, ka),
        X(function (C) {
          ja.push(C.innerHTML);
          aa.push(H(l(C).css("width")));
        }, ka),
        X(function (C, V) {
          C.style.width = aa[V];
        }, la),
        l(ka).height(0));
      X(function (C, V) {
        C.innerHTML = '<div class="dataTables_sizing">' + U[V] + "</div>";
        C.childNodes[0].style.height = "0";
        C.childNodes[0].style.overflow = "hidden";
        C.style.width = D[V];
      }, fa);
      F &&
        X(function (C, V) {
          C.innerHTML = '<div class="dataTables_sizing">' + ja[V] + "</div>";
          C.childNodes[0].style.height = "0";
          C.childNodes[0].style.overflow = "hidden";
          C.style.width = aa[V];
        }, ka);
      q.outerWidth() < f
        ? ((la =
            h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y")
              ? f + b
              : f),
          J &&
            (h.scrollHeight > h.offsetHeight ||
              "scroll" == m.css("overflow-y")) &&
            (B.width = H(la - b)),
          ("" !== c && "" === d) || Z(a, 1, "Possible column misalignment", 6))
        : (la = "100%");
      p.width = H(la);
      g.width = H(la);
      F && (a.nScrollFoot.style.width = H(la));
      !e && J && (p.height = H(y.offsetHeight + b));
      c = q.outerWidth();
      n[0].style.width = H(c);
      k.width = H(c);
      d = q.height() > h.clientHeight || "scroll" == m.css("overflow-y");
      e = "padding" + (T.bScrollbarLeft ? "Left" : "Right");
      k[e] = d ? b + "px" : "0px";
      F &&
        ((v[0].style.width = H(c)),
        (t[0].style.width = H(c)),
        (t[0].style[e] = d ? b + "px" : "0px"));
      q.children("colgroup").insertBefore(q.children("thead"));
      m.trigger("scroll");
      (!a.bSorted && !a.bFiltered) || a._drawHold || (h.scrollTop = 0);
    }
  }
  function X(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, h; e < f; ) {
      g = b[e].firstChild;
      for (h = c ? c[e].firstChild : null; g; )
        1 === g.nodeType && (c ? a(g, h, d) : a(g, d), d++),
          (g = g.nextSibling),
          (h = c ? h.nextSibling : null);
      e++;
    }
  }
  function Ya(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      h = c.length,
      k = Fa(a, "bVisible"),
      n = l("th", a.nTHead),
      m = b.getAttribute("width"),
      p = b.parentNode,
      t = !1,
      v,
      x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (m = v);
    for (v = 0; v < k.length; v++) {
      var q = c[k[v]];
      null !== q.sWidth && ((q.sWidth = Zb(q.sWidthOrig, p)), (t = !0));
    }
    if (d || (!t && !f && !e && h == ma(a) && h == n.length))
      for (v = 0; v < h; v++)
        (k = sa(a, v)), null !== k && (c[k].sWidth = H(n.eq(v).width()));
    else {
      h = l(b).clone().css("visibility", "hidden").removeAttr("id");
      h.find("tbody tr").remove();
      var y = l("<tr/>").appendTo(h.find("tbody"));
      h.find("thead, tfoot").remove();
      h.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());
      h.find("tfoot th, tfoot td").css("width", "");
      n = Ka(a, h.find("thead")[0]);
      for (v = 0; v < k.length; v++)
        (q = c[k[v]]),
          (n[v].style.width =
            null !== q.sWidthOrig && "" !== q.sWidthOrig
              ? H(q.sWidthOrig)
              : ""),
          q.sWidthOrig &&
            f &&
            l(n[v]).append(
              l("<div/>").css({
                width: q.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (a.aoData.length)
        for (v = 0; v < k.length; v++)
          (t = k[v]),
            (q = c[t]),
            l($b(a, t)).clone(!1).append(q.sContentPadding).appendTo(y);
      l("[name]", h).removeAttr("name");
      q = l("<div/>")
        .css(
          f || e
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(h)
        .appendTo(p);
      f && g
        ? h.width(g)
        : f
        ? (h.css("width", "auto"),
          h.removeAttr("width"),
          h.width() < p.clientWidth && m && h.width(p.clientWidth))
        : e
        ? h.width(p.clientWidth)
        : m && h.width(m);
      for (v = e = 0; v < k.length; v++)
        (p = l(n[v])),
          (g = p.outerWidth() - p.width()),
          (p = x.bBounding
            ? Math.ceil(n[v].getBoundingClientRect().width)
            : p.outerWidth()),
          (e += p),
          (c[k[v]].sWidth = H(p - g));
      b.style.width = H(e);
      q.remove();
    }
    m && (b.style.width = H(m));
    (!m && !f) ||
      a._reszEvt ||
      ((b = function () {
        l(R).on(
          "resize.DT-" + a.sInstance,
          gb(function () {
            ra(a);
          })
        );
      }),
      d ? setTimeout(b, 1e3) : b(),
      (a._reszEvt = !0));
  }
  function Zb(a, b) {
    if (!a) return 0;
    var c = l("<div/>")
        .css("width", H(a))
        .appendTo(b || W.body),
      d = c[0].offsetWidth;
    c.remove();
    return d;
  }
  function $b(a, b) {
    var c = ac(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : l("<td/>").html(O(a, c, b, "display"))[0];
  }
  function ac(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)
      (c = O(a, f, b, "display") + ""),
        (c = c.replace(sc, "")),
        (c = c.replace(/&nbsp;/g, " ")),
        c.length > d && ((d = c.length), (e = f));
    return e;
  }
  function H(a) {
    return null === a
      ? "0px"
      : "number" == typeof a
      ? 0 > a
        ? "0px"
        : a + "px"
      : a.match(/\d$/)
      ? a + "px"
      : a;
  }
  function oa(a) {
    var b = [],
      c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = l.isPlainObject(d);
    var f = [];
    var g = function (m) {
      m.length && !Array.isArray(m[0]) ? f.push(m) : l.merge(f, m);
    };
    Array.isArray(d) && g(d);
    e && d.pre && g(d.pre);
    g(a.aaSorting);
    e && d.post && g(d.post);
    for (a = 0; a < f.length; a++) {
      var h = f[a][0];
      g = c[h].aDataSort;
      d = 0;
      for (e = g.length; d < e; d++) {
        var k = g[d];
        var n = c[k].sType || "string";
        f[a]._idx === r && (f[a]._idx = l.inArray(f[a][1], c[k].asSorting));
        b.push({
          src: h,
          col: k,
          dir: f[a][1],
          index: f[a]._idx,
          type: n,
          formatter: u.ext.type.order[n + "-pre"],
        });
      }
    }
    return b;
  }
  function Gb(a) {
    var b,
      c = [],
      d = u.ext.type.order,
      e = a.aoData,
      f = 0,
      g = a.aiDisplayMaster;
    Za(a);
    var h = oa(a);
    var k = 0;
    for (b = h.length; k < b; k++) {
      var n = h[k];
      n.formatter && f++;
      bc(a, n.col);
    }
    if ("ssp" != L(a) && 0 !== h.length) {
      k = 0;
      for (b = g.length; k < b; k++) c[g[k]] = k;
      f === h.length
        ? g.sort(function (m, p) {
            var t,
              v = h.length,
              x = e[m]._aSortData,
              q = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var y = h[t];
              var B = x[y.col];
              var F = q[y.col];
              B = B < F ? -1 : B > F ? 1 : 0;
              if (0 !== B) return "asc" === y.dir ? B : -B;
            }
            B = c[m];
            F = c[p];
            return B < F ? -1 : B > F ? 1 : 0;
          })
        : g.sort(function (m, p) {
            var t,
              v = h.length,
              x = e[m]._aSortData,
              q = e[p]._aSortData;
            for (t = 0; t < v; t++) {
              var y = h[t];
              var B = x[y.col];
              var F = q[y.col];
              y = d[y.type + "-" + y.dir] || d["string-" + y.dir];
              B = y(B, F);
              if (0 !== B) return B;
            }
            B = c[m];
            F = c[p];
            return B < F ? -1 : B > F ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function cc(a) {
    var b = a.aoColumns,
      c = oa(a);
    a = a.oLanguage.oAria;
    for (var d = 0, e = b.length; d < e; d++) {
      var f = b[d];
      var g = f.asSorting;
      var h = f.sTitle.replace(/<.*?>/g, "");
      var k = f.nTh;
      k.removeAttribute("aria-sort");
      f.bSortable &&
        (0 < c.length && c[0].col == d
          ? (k.setAttribute(
              "aria-sort",
              "asc" == c[0].dir ? "ascending" : "descending"
            ),
            (f = g[c[0].index + 1] || g[0]))
          : (f = g[0]),
        (h += "asc" === f ? a.sSortAscending : a.sSortDescending));
      k.setAttribute("aria-label", h);
    }
  }
  function nb(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (h, k) {
        var n = h._idx;
        n === r && (n = l.inArray(h[1], f));
        return n + 1 < f.length ? n + 1 : k ? null : 0;
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = l.inArray(b, P(e, "0"))),
        -1 !== c
          ? ((b = g(e[c], !0)),
            null === b && 1 === e.length && (b = 0),
            null === b ? e.splice(c, 1) : ((e[c][1] = f[b]), (e[c]._idx = b)))
          : (e.push([b, f[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = g(e[0])), (e.length = 1), (e[0][1] = f[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, f[0]]), (e[0]._idx = 0));
    ia(a);
    "function" == typeof d && d(a);
  }
  function eb(a, b, c, d) {
    var e = a.aoColumns[c];
    ob(b, {}, function (f) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (Q(a, !0),
            setTimeout(function () {
              nb(a, c, f.shiftKey, d);
              "ssp" !== L(a) && Q(a, !1);
            }, 0))
          : nb(a, c, f.shiftKey, d));
    });
  }
  function Pa(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = oa(a),
      e = a.oFeatures,
      f;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++) {
        var g = b[e].src;
        l(P(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }
      e = 0;
      for (f = d.length; e < f; e++)
        (g = d[e].src),
          l(P(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function bc(a, b) {
    var c = a.aoColumns[b],
      d = u.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, ta(a, b)));
    for (
      var f, g = u.ext.type.order[c.sType + "-pre"], h = 0, k = a.aoData.length;
      h < k;
      h++
    )
      if (
        ((c = a.aoData[h]),
        c._aSortData || (c._aSortData = []),
        !c._aSortData[b] || d)
      )
        (f = d ? e[h] : O(a, h, b, "sort")), (c._aSortData[b] = g ? g(f) : f);
  }
  function Qa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: l.extend(!0, [], a.aaSorting),
        search: Ub(a.oPreviousSearch),
        columns: l.map(a.aoColumns, function (c, d) {
          return { visible: c.bVisible, search: Ub(a.aoPreSearchCols[d]) };
        }),
      };
      E(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function dc(a, b, c) {
    var d,
      e,
      f = a.aoColumns;
    b = function (h) {
      if (h && h.time) {
        var k = E(a, "aoStateLoadParams", "stateLoadParams", [a, h]);
        if (
          -1 === l.inArray(!1, k) &&
          ((k = a.iStateDuration),
          !(
            (0 < k && h.time < +new Date() - 1e3 * k) ||
            (h.columns && f.length !== h.columns.length)
          ))
        ) {
          a.oLoadedState = l.extend(!0, {}, h);
          h.start !== r &&
            ((a._iDisplayStart = h.start), (a.iInitDisplayStart = h.start));
          h.length !== r && (a._iDisplayLength = h.length);
          h.order !== r &&
            ((a.aaSorting = []),
            l.each(h.order, function (n, m) {
              a.aaSorting.push(m[0] >= f.length ? [0, m[1]] : m);
            }));
          h.search !== r && l.extend(a.oPreviousSearch, Vb(h.search));
          if (h.columns)
            for (d = 0, e = h.columns.length; d < e; d++)
              (k = h.columns[d]),
                k.visible !== r && (f[d].bVisible = k.visible),
                k.search !== r && l.extend(a.aoPreSearchCols[d], Vb(k.search));
          E(a, "aoStateLoaded", "stateLoaded", [a, h]);
        }
      }
      c();
    };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== r && b(g);
    } else c();
  }
  function Ra(a) {
    var b = u.settings;
    a = l.inArray(a, P(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }
  function Z(a, b, c, d) {
    c =
      "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d &&
      (c +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        d);
    if (b) R.console && console.log && console.log(c);
    else if (
      ((b = u.ext),
      (b = b.sErrMode || b.errMode),
      a && E(a, null, "error", [a, d, c]),
      "alert" == b)
    )
      alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }
  function S(a, b, c, d) {
    Array.isArray(c)
      ? l.each(c, function (e, f) {
          Array.isArray(f) ? S(a, b, f[0], f[1]) : S(a, b, f);
        })
      : (d === r && (d = c), b[c] !== r && (a[d] = b[c]));
  }
  function pb(a, b, c) {
    var d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        l.isPlainObject(e)
          ? (l.isPlainObject(a[d]) || (a[d] = {}), l.extend(!0, a[d], e))
          : c && "data" !== d && "aaData" !== d && Array.isArray(e)
          ? (a[d] = e.slice())
          : (a[d] = e);
      }
    return a;
  }
  function ob(a, b, c) {
    l(a)
      .on("click.DT", b, function (d) {
        l(a).trigger("blur");
        c(d);
      })
      .on("keypress.DT", b, function (d) {
        13 === d.which && (d.preventDefault(), c(d));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function M(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }
  function E(a, b, c, d) {
    var e = [];
    b &&
      (e = l.map(a[b].slice().reverse(), function (f, g) {
        return f.fn.apply(a.oInstance, d);
      }));
    null !== c &&
      ((b = l.Event(c + ".dt")), l(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function kb(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function fb(a, b) {
    var c = a.renderer,
      d = u.ext.renderer[b];
    return l.isPlainObject(c) && c[b]
      ? d[c[b]] || d._
      : "string" === typeof c
      ? d[c] || d._
      : d._;
  }
  function L(a) {
    return a.oFeatures.bServerSide
      ? "ssp"
      : a.ajax || a.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function Ba(a, b) {
    var c = ec.numbers_length;
    var d = Math.floor(c / 2);
    b <= c
      ? (c = pa(0, b))
      : a <= d
      ? ((c = pa(0, c - 2)), c.push("ellipsis"), c.push(b - 1))
      : (a >= b - 1 - d
          ? (c = pa(b - (c - 2), b))
          : ((c = pa(a - d + 2, a + d - 1)), c.push("ellipsis"), c.push(b - 1)),
        c.splice(0, 0, "ellipsis"),
        c.splice(0, 0, 0));
    c.DT_el = "span";
    return c;
  }
  function Wa(a) {
    l.each(
      {
        num: function (b) {
          return Sa(b, a);
        },
        "num-fmt": function (b) {
          return Sa(b, a, qb);
        },
        "html-num": function (b) {
          return Sa(b, a, Ta);
        },
        "html-num-fmt": function (b) {
          return Sa(b, a, Ta, qb);
        },
      },
      function (b, c) {
        I.type.order[b + a + "-pre"] = c;
        b.match(/^html\-/) && (I.type.search[b + a] = I.type.search.html);
      }
    );
  }
  function fc(a) {
    return function () {
      var b = [Ra(this[u.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return u.ext.internal[a].apply(this, b);
    };
  }
  var u = function (a) {
      this.$ = function (f, g) {
        return this.api(!0).$(f, g);
      };
      this._ = function (f, g) {
        return this.api(!0).rows(f, g).data();
      };
      this.api = function (f) {
        return f ? new A(Ra(this[I.iApiIndex])) : new A(this);
      };
      this.fnAddData = function (f, g) {
        var h = this.api(!0),
          k =
            Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0]))
              ? h.rows.add(f)
              : h.row.add(f);
        (g === r || g) && h.draw();
        return k.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (f) {
        var g = this.api(!0).columns.adjust(),
          h = g.settings()[0],
          k = h.oScroll;
        f === r || f ? g.draw(!1) : ("" !== k.sX || "" !== k.sY) && Ea(h);
      };
      this.fnClearTable = function (f) {
        var g = this.api(!0).clear();
        (f === r || f) && g.draw();
      };
      this.fnClose = function (f) {
        this.api(!0).row(f).child.hide();
      };
      this.fnDeleteRow = function (f, g, h) {
        var k = this.api(!0);
        f = k.rows(f);
        var n = f.settings()[0],
          m = n.aoData[f[0][0]];
        f.remove();
        g && g.call(this, n, m);
        (h === r || h) && k.draw();
        return m;
      };
      this.fnDestroy = function (f) {
        this.api(!0).destroy(f);
      };
      this.fnDraw = function (f) {
        this.api(!0).draw(f);
      };
      this.fnFilter = function (f, g, h, k, n, m) {
        n = this.api(!0);
        null === g || g === r
          ? n.search(f, h, k, m)
          : n.column(g).search(f, h, k, m);
        n.draw();
      };
      this.fnGetData = function (f, g) {
        var h = this.api(!0);
        if (f !== r) {
          var k = f.nodeName ? f.nodeName.toLowerCase() : "";
          return g !== r || "td" == k || "th" == k
            ? h.cell(f, g).data()
            : h.row(f).data() || null;
        }
        return h.data().toArray();
      };
      this.fnGetNodes = function (f) {
        var g = this.api(!0);
        return f !== r ? g.row(f).node() : g.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (f) {
        var g = this.api(!0),
          h = f.nodeName.toUpperCase();
        return "TR" == h
          ? g.row(f).index()
          : "TD" == h || "TH" == h
          ? ((f = g.cell(f).index()), [f.row, f.columnVisible, f.column])
          : null;
      };
      this.fnIsOpen = function (f) {
        return this.api(!0).row(f).child.isShown();
      };
      this.fnOpen = function (f, g, h) {
        return this.api(!0).row(f).child(g, h).show().child()[0];
      };
      this.fnPageChange = function (f, g) {
        var h = this.api(!0).page(f);
        (g === r || g) && h.draw(!1);
      };
      this.fnSetColumnVis = function (f, g, h) {
        f = this.api(!0).column(f).visible(g);
        (h === r || h) && f.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return Ra(this[I.iApiIndex]);
      };
      this.fnSort = function (f) {
        this.api(!0).order(f).draw();
      };
      this.fnSortListener = function (f, g, h) {
        this.api(!0).order.listener(f, g, h);
      };
      this.fnUpdate = function (f, g, h, k, n) {
        var m = this.api(!0);
        h === r || null === h ? m.row(g).data(f) : m.cell(g, h).data(f);
        (n === r || n) && m.columns.adjust();
        (k === r || k) && m.draw();
        return 0;
      };
      this.fnVersionCheck = I.fnVersionCheck;
      var b = this,
        c = a === r,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = I.internal;
      for (var e in u.ext.internal) e && (this[e] = fc(e));
      this.each(function () {
        var f = {},
          g = 1 < d ? pb(f, a, !0) : a,
          h = 0,
          k;
        f = this.getAttribute("id");
        var n = !1,
          m = u.defaults,
          p = l(this);
        if ("table" != this.nodeName.toLowerCase())
          Z(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          yb(m);
          zb(m.column);
          Y(m, m, !0);
          Y(m.column, m.column, !0);
          Y(m, l.extend(g, p.data()), !0);
          var t = u.settings;
          h = 0;
          for (k = t.length; h < k; h++) {
            var v = t[h];
            if (
              v.nTable == this ||
              (v.nTHead && v.nTHead.parentNode == this) ||
              (v.nTFoot && v.nTFoot.parentNode == this)
            ) {
              var x = g.bRetrieve !== r ? g.bRetrieve : m.bRetrieve;
              if (c || x) return v.oInstance;
              if (g.bDestroy !== r ? g.bDestroy : m.bDestroy) {
                v.oInstance.fnDestroy();
                break;
              } else {
                Z(v, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (v.sTableId == this.id) {
              t.splice(h, 1);
              break;
            }
          }
          if (null === f || "" === f)
            this.id = f = "DataTables_Table_" + u.ext._unique++;
          var q = l.extend(!0, {}, u.models.oSettings, {
            sDestroyWidth: p[0].style.width,
            sInstance: f,
            sTableId: f,
          });
          q.nTable = this;
          q.oApi = b.internal;
          q.oInit = g;
          t.push(q);
          q.oInstance = 1 === b.length ? b : p.dataTable();
          yb(g);
          Va(g.oLanguage);
          g.aLengthMenu &&
            !g.iDisplayLength &&
            (g.iDisplayLength = Array.isArray(g.aLengthMenu[0])
              ? g.aLengthMenu[0][0]
              : g.aLengthMenu[0]);
          g = pb(l.extend(!0, {}, m), g);
          S(
            q.oFeatures,
            g,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          S(q, g, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
          ]);
          S(q.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          S(q.oLanguage, g, "fnInfoCallback");
          M(q, "aoDrawCallback", g.fnDrawCallback, "user");
          M(q, "aoServerParams", g.fnServerParams, "user");
          M(q, "aoStateSaveParams", g.fnStateSaveParams, "user");
          M(q, "aoStateLoadParams", g.fnStateLoadParams, "user");
          M(q, "aoStateLoaded", g.fnStateLoaded, "user");
          M(q, "aoRowCallback", g.fnRowCallback, "user");
          M(q, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          M(q, "aoHeaderCallback", g.fnHeaderCallback, "user");
          M(q, "aoFooterCallback", g.fnFooterCallback, "user");
          M(q, "aoInitComplete", g.fnInitComplete, "user");
          M(q, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          q.rowIdFn = ha(g.rowId);
          Ab(q);
          var y = q.oClasses;
          l.extend(y, u.ext.classes, g.oClasses);
          p.addClass(y.sTable);
          q.iInitDisplayStart === r &&
            ((q.iInitDisplayStart = g.iDisplayStart),
            (q._iDisplayStart = g.iDisplayStart));
          null !== g.iDeferLoading &&
            ((q.bDeferLoading = !0),
            (f = Array.isArray(g.iDeferLoading)),
            (q._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading),
            (q._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading));
          var B = q.oLanguage;
          l.extend(!0, B, g.oLanguage);
          B.sUrl
            ? (l.ajax({
                dataType: "json",
                url: B.sUrl,
                success: function (z) {
                  Va(z);
                  Y(m.oLanguage, z);
                  l.extend(!0, B, z);
                  E(q, null, "i18n", [q]);
                  za(q);
                },
                error: function () {
                  za(q);
                },
              }),
              (n = !0))
            : E(q, null, "i18n", [q]);
          null === g.asStripeClasses &&
            (q.asStripeClasses = [y.sStripeOdd, y.sStripeEven]);
          f = q.asStripeClasses;
          var F = p.children("tbody").find("tr").eq(0);
          -1 !==
            l.inArray(
              !0,
              l.map(f, function (z, D) {
                return F.hasClass(z);
              })
            ) &&
            (l("tbody tr", this).removeClass(f.join(" ")),
            (q.asDestroyStripes = f.slice()));
          f = [];
          t = this.getElementsByTagName("thead");
          0 !== t.length && (wa(q.aoHeader, t[0]), (f = Ka(q)));
          if (null === g.aoColumns)
            for (t = [], h = 0, k = f.length; h < k; h++) t.push(null);
          else t = g.aoColumns;
          h = 0;
          for (k = t.length; h < k; h++) Xa(q, f ? f[h] : null);
          Cb(q, g.aoColumnDefs, t, function (z, D) {
            Da(q, z, D);
          });
          if (F.length) {
            var T = function (z, D) {
              return null !== z.getAttribute("data-" + D) ? D : null;
            };
            l(F[0])
              .children("th, td")
              .each(function (z, D) {
                var aa = q.aoColumns[z];
                if (aa.mData === z) {
                  var U = T(D, "sort") || T(D, "order"),
                    ja = T(D, "filter") || T(D, "search");
                  if (null !== U || null !== ja)
                    (aa.mData = {
                      _: z + ".display",
                      sort: null !== U ? z + ".@data-" + U : r,
                      type: null !== U ? z + ".@data-" + U : r,
                      filter: null !== ja ? z + ".@data-" + ja : r,
                    }),
                      Da(q, z);
                }
              });
          }
          var J = q.oFeatures;
          f = function () {
            if (g.aaSorting === r) {
              var z = q.aaSorting;
              h = 0;
              for (k = z.length; h < k; h++)
                z[h][1] = q.aoColumns[h].asSorting[0];
            }
            Pa(q);
            J.bSort &&
              M(q, "aoDrawCallback", function () {
                if (q.bSorted) {
                  var aa = oa(q),
                    U = {};
                  l.each(aa, function (ja, Aa) {
                    U[Aa.src] = Aa.dir;
                  });
                  E(q, null, "order", [q, aa, U]);
                  cc(q);
                }
              });
            M(
              q,
              "aoDrawCallback",
              function () {
                (q.bSorted || "ssp" === L(q) || J.bDeferRender) && Pa(q);
              },
              "sc"
            );
            z = p.children("caption").each(function () {
              this._captionSide = l(this).css("caption-side");
            });
            var D = p.children("thead");
            0 === D.length && (D = l("<thead/>").appendTo(p));
            q.nTHead = D[0];
            D = p.children("tbody");
            0 === D.length && (D = l("<tbody/>").appendTo(p));
            q.nTBody = D[0];
            D = p.children("tfoot");
            0 === D.length &&
              0 < z.length &&
              ("" !== q.oScroll.sX || "" !== q.oScroll.sY) &&
              (D = l("<tfoot/>").appendTo(p));
            0 === D.length || 0 === D.children().length
              ? p.addClass(y.sNoFooter)
              : 0 < D.length && ((q.nTFoot = D[0]), wa(q.aoFooter, q.nTFoot));
            if (g.aaData)
              for (h = 0; h < g.aaData.length; h++) da(q, g.aaData[h]);
            else
              (q.bDeferLoading || "dom" == L(q)) &&
                Ga(q, l(q.nTBody).children("tr"));
            q.aiDisplay = q.aiDisplayMaster.slice();
            q.bInitialised = !0;
            !1 === n && za(q);
          };
          g.bStateSave
            ? ((J.bStateSave = !0),
              M(q, "aoDrawCallback", Qa, "state_save"),
              dc(q, g, f))
            : f();
        }
      });
      b = null;
      return this;
    },
    I,
    w,
    G,
    rb = {},
    gc = /[\r\n\u2028]/g,
    Ta = /<.*?>/g,
    tc =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    uc = RegExp(
      "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
      "g"
    ),
    qb =
      /['\u00A0,$\u00a3\u20ac\u00a5%\u2009\u202F\u20BD\u20a9\u20BArfk\u0243\u039e]/gi,
    ba = function (a) {
      return a && !0 !== a && "-" !== a ? !1 : !0;
    },
    hc = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    ic = function (a, b) {
      rb[b] || (rb[b] = new RegExp(ib(b), "g"));
      return "string" === typeof a && "." !== b
        ? a.replace(/\./g, "").replace(rb[b], ".")
        : a;
    },
    sb = function (a, b, c) {
      var d = "string" === typeof a;
      if (ba(a)) return !0;
      b && d && (a = ic(a, b));
      c && d && (a = a.replace(qb, ""));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    jc = function (a, b, c) {
      return ba(a)
        ? !0
        : ba(a) || "string" === typeof a
        ? sb(a.replace(Ta, ""), b, c)
          ? !0
          : null
        : null;
    },
    P = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== r) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < f; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    Ca = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== r) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else for (; f < g; f++) e.push(a[b[f]][c]);
      return e;
    },
    pa = function (a, b) {
      var c = [];
      if (b === r) {
        b = 0;
        var d = a;
      } else (d = b), (b = a);
      for (var e = b; e < d; e++) c.push(e);
      return c;
    },
    kc = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    Ja = function (a) {
      a: {
        if (!(2 > a.length)) {
          var b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a;
            }
            c = b[d];
          }
        }
        b = !0;
      }
      if (b) return a.slice();
      b = [];
      e = a.length;
      var f,
        g = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++) if (b[f] === c) continue a;
        b.push(c);
        g++;
      }
      return b;
    },
    lc = function (a, b) {
      if (Array.isArray(b)) for (var c = 0; c < b.length; c++) lc(a, b[c]);
      else a.push(b);
      return a;
    };
  Array.isArray ||
    (Array.isArray = function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    });
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    });
  u.util = {
    throttle: function (a, b) {
      var c = b !== r ? b : 200,
        d,
        e;
      return function () {
        var f = this,
          g = +new Date(),
          h = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = r;
              a.apply(f, h);
            }, c)))
          : ((d = g), a.apply(f, h));
      };
    },
    escapeRegex: function (a) {
      return a.replace(uc, "\\$1");
    },
  };
  var N = function (a, b, c) {
      a[b] !== r && (a[c] = a[b]);
    },
    ua = /\[.*?\]$/,
    na = /\(\)$/,
    ib = u.util.escapeRegex,
    Oa = l("<div>")[0],
    rc = Oa.textContent !== r,
    sc = /<.*?>/g,
    gb = u.util.throttle,
    mc = [],
    K = Array.prototype,
    vc = function (a) {
      var b,
        c = u.settings,
        d = l.map(c, function (f, g) {
          return f.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
          var e = l.inArray(a, d);
          return -1 !== e ? [c[e]] : null;
        }
        if (a && "function" === typeof a.settings)
          return a.settings().toArray();
        "string" === typeof a ? (b = l(a)) : a instanceof l && (b = a);
      } else return [];
      if (b)
        return b
          .map(function (f) {
            e = l.inArray(this, d);
            return -1 !== e ? c[e] : null;
          })
          .toArray();
    };
  var A = function (a, b) {
    if (!(this instanceof A)) return new A(a, b);
    var c = [],
      d = function (g) {
        (g = vc(g)) && c.push.apply(c, g);
      };
    if (Array.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = Ja(c);
    b && l.merge(this, b);
    this.selector = { rows: null, cols: null, opts: null };
    A.extend(this, this, mc);
  };
  u.Api = A;
  l.extend(A.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: K.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new A(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (K.filter) b = K.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          a.call(this, this[c], c, this) && b.push(this[c]);
      return new A(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new A(this.context, a.concat.apply(a, this.toArray()));
    },
    join: K.join,
    indexOf:
      K.indexOf ||
      function (a, b) {
        for (var c = b || 0, d = this.length; c < d; c++)
          if (this[c] === a) return c;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        f,
        g,
        h = this.context,
        k,
        n = this.selector;
      "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      var m = 0;
      for (f = h.length; m < f; m++) {
        var p = new A(h[m]);
        if ("table" === b) {
          var t = c.call(p, h[m], m);
          t !== r && e.push(t);
        } else if ("columns" === b || "rows" === b)
          (t = c.call(p, h[m], this[m], m)), t !== r && e.push(t);
        else if (
          "column" === b ||
          "column-rows" === b ||
          "row" === b ||
          "cell" === b
        ) {
          var v = this[m];
          "column-rows" === b && (k = Ua(h[m], n.opts));
          var x = 0;
          for (g = v.length; x < g; x++)
            (t = v[x]),
              (t =
                "cell" === b
                  ? c.call(p, h[m], t.row, t.column, m, x)
                  : c.call(p, h[m], t, m, x, k)),
              t !== r && e.push(t);
        }
      }
      return e.length || d
        ? ((a = new A(h, a ? e.concat.apply([], e) : e)),
          (b = a.selector),
          (b.rows = n.rows),
          (b.cols = n.cols),
          (b.opts = n.opts),
          a)
        : this;
    },
    lastIndexOf:
      K.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (K.map) b = K.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          b.push(a.call(this, this[c], c));
      return new A(this.context, b);
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: K.pop,
    push: K.push,
    reduce:
      K.reduce ||
      function (a, b) {
        return Bb(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      K.reduceRight ||
      function (a, b) {
        return Bb(this, a, b, this.length - 1, -1, -1);
      },
    reverse: K.reverse,
    selector: null,
    shift: K.shift,
    slice: function () {
      return new A(this.context, this);
    },
    sort: K.sort,
    splice: K.splice,
    toArray: function () {
      return K.slice.call(this);
    },
    to$: function () {
      return l(this);
    },
    toJQuery: function () {
      return l(this);
    },
    unique: function () {
      return new A(this.context, Ja(this));
    },
    unshift: K.unshift,
  });
  A.extend = function (a, b, c) {
    if (c.length && b && (b instanceof A || b.__dt_wrapper)) {
      var d,
        e = function (h, k, n) {
          return function () {
            var m = k.apply(h, arguments);
            A.extend(m, m, n.methodExt);
            return m;
          };
        };
      var f = 0;
      for (d = c.length; f < d; f++) {
        var g = c[f];
        b[g.name] =
          "function" === g.type
            ? e(a, g.val, g)
            : "object" === g.type
            ? {}
            : g.val;
        b[g.name].__dt_wrapper = !0;
        A.extend(a, b[g.name], g.propExt);
      }
    }
  };
  A.register = w = function (a, b) {
    if (Array.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) A.register(a[c], b);
    else {
      var e = a.split("."),
        f = mc,
        g;
      c = 0;
      for (d = e.length; c < d; c++) {
        var h = (g = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        a: {
          var k = 0;
          for (var n = f.length; k < n; k++)
            if (f[k].name === h) {
              k = f[k];
              break a;
            }
          k = null;
        }
        k ||
          ((k = {
            name: h,
            val: {},
            methodExt: [],
            propExt: [],
            type: "object",
          }),
          f.push(k));
        c === d - 1
          ? ((k.val = b),
            (k.type =
              "function" === typeof b
                ? "function"
                : l.isPlainObject(b)
                ? "object"
                : "other"))
          : (f = g ? k.methodExt : k.propExt);
      }
    }
  };
  A.registerPlural = G = function (a, b, c) {
    A.register(a, c);
    A.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this
        ? this
        : d instanceof A
        ? d.length
          ? Array.isArray(d[0])
            ? new A(d.context, d[0])
            : d[0]
          : r
        : d;
    });
  };
  var nc = function (a, b) {
    if (Array.isArray(a))
      return l.map(a, function (d) {
        return nc(d, b);
      });
    if ("number" === typeof a) return [b[a]];
    var c = l.map(b, function (d, e) {
      return d.nTable;
    });
    return l(c)
      .filter(a)
      .map(function (d) {
        d = l.inArray(this, c);
        return b[d];
      })
      .toArray();
  };
  w("tables()", function (a) {
    return a !== r && null !== a ? new A(nc(a, this.context)) : this;
  });
  w("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new A(b[0]) : a;
  });
  G("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTable;
      },
      1
    );
  });
  G("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTBody;
      },
      1
    );
  });
  G("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTHead;
      },
      1
    );
  });
  G("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTFoot;
      },
      1
    );
  });
  G("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTableWrapper;
      },
      1
    );
  });
  w("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a
        ? ea(b)
        : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
          ia(b, !1 === a));
    });
  });
  w("page()", function (a) {
    return a === r
      ? this.page.info().page
      : this.iterator("table", function (b) {
          lb(b, a);
        });
  });
  w("page.info()", function (a) {
    if (0 === this.context.length) return r;
    a = this.context[0];
    var b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === L(a),
    };
  });
  w("page.len()", function (a) {
    return a === r
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : r
      : this.iterator("table", function (b) {
          jb(b, a);
        });
  });
  var oc = function (a, b, c) {
    if (c) {
      var d = new A(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }
    if ("ssp" == L(a)) ia(a, b);
    else {
      Q(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      La(a, [], function (f) {
        Ha(a);
        f = Ma(a, f);
        for (var g = 0, h = f.length; g < h; g++) da(a, f[g]);
        ia(a, b);
        Q(a, !1);
      });
    }
  };
  w("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  w("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  w("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });
  w("ajax.url()", function (a) {
    var b = this.context;
    if (a === r) {
      if (0 === b.length) return r;
      b = b[0];
      return b.ajax
        ? l.isPlainObject(b.ajax)
          ? b.ajax.url
          : b.ajax
        : b.sAjaxSource;
    }
    return this.iterator("table", function (c) {
      l.isPlainObject(c.ajax) ? (c.ajax.url = a) : (c.ajax = a);
    });
  });
  w("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a);
    });
  });
  var tb = function (a, b, c, d, e) {
      var f = [],
        g,
        h,
        k;
      var n = typeof b;
      (b && "string" !== n && "function" !== n && b.length !== r) || (b = [b]);
      n = 0;
      for (h = b.length; n < h; n++) {
        var m =
          b[n] && b[n].split && !b[n].match(/[\[\(:]/)
            ? b[n].split(",")
            : [b[n]];
        var p = 0;
        for (k = m.length; p < k; p++)
          (g = c("string" === typeof m[p] ? m[p].trim() : m[p])) &&
            g.length &&
            (f = f.concat(g));
      }
      a = I.selector[a];
      if (a.length) for (n = 0, h = a.length; n < h; n++) f = a[n](d, e, f);
      return Ja(f);
    },
    ub = function (a) {
      a || (a = {});
      a.filter && a.search === r && (a.search = a.filter);
      return l.extend({ search: "none", order: "current", page: "all" }, a);
    },
    vb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length)
          return (
            (a[0] = a[b]),
            (a[0].length = 1),
            (a.length = 1),
            (a.context = [a.context[b]]),
            a
          );
      a.length = 0;
      return a;
    },
    Ua = function (a, b) {
      var c = [],
        d = a.aiDisplay;
      var e = a.aiDisplayMaster;
      var f = b.search;
      var g = b.order;
      var h = b.page;
      if ("ssp" == L(a)) return "removed" === f ? [] : pa(0, e.length);
      if ("current" == h)
        for (g = a._iDisplayStart, h = a.fnDisplayEnd(); g < h; g++)
          c.push(d[g]);
      else if ("current" == g || "applied" == g)
        if ("none" == f) c = e.slice();
        else if ("applied" == f) c = d.slice();
        else {
          if ("removed" == f) {
            var k = {};
            g = 0;
            for (h = d.length; g < h; g++) k[d[g]] = null;
            c = l.map(e, function (n) {
              return k.hasOwnProperty(n) ? null : n;
            });
          }
        }
      else if ("index" == g || "original" == g)
        for (g = 0, h = a.aoData.length; g < h; g++)
          "none" == f
            ? c.push(g)
            : ((e = l.inArray(g, d)),
              ((-1 === e && "removed" == f) || (0 <= e && "applied" == f)) &&
                c.push(g));
      return c;
    },
    wc = function (a, b, c) {
      var d;
      return tb(
        "row",
        b,
        function (e) {
          var f = hc(e),
            g = a.aoData;
          if (null !== f && !c) return [f];
          d || (d = Ua(a, c));
          if (null !== f && -1 !== l.inArray(f, d)) return [f];
          if (null === e || e === r || "" === e) return d;
          if ("function" === typeof e)
            return l.map(d, function (k) {
              var n = g[k];
              return e(k, n._aData, n.nTr) ? k : null;
            });
          if (e.nodeName) {
            f = e._DT_RowIndex;
            var h = e._DT_CellIndex;
            if (f !== r) return g[f] && g[f].nTr === e ? [f] : [];
            if (h)
              return g[h.row] && g[h.row].nTr === e.parentNode ? [h.row] : [];
            f = l(e).closest("*[data-dt-row]");
            return f.length ? [f.data("dt-row")] : [];
          }
          if (
            "string" === typeof e &&
            "#" === e.charAt(0) &&
            ((f = a.aIds[e.replace(/^#/, "")]), f !== r)
          )
            return [f.idx];
          f = kc(Ca(a.aoData, d, "nTr"));
          return l(f)
            .filter(e)
            .map(function () {
              return this._DT_RowIndex;
            })
            .toArray();
        },
        a,
        c
      );
    };
  w("rows()", function (a, b) {
    a === r ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
    b = ub(b);
    var c = this.iterator(
      "table",
      function (d) {
        return wc(d, a, b);
      },
      1
    );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  w("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return a.aoData[b].nTr || r;
      },
      1
    );
  });
  w("rows().data()", function () {
    return this.iterator(
      !0,
      "rows",
      function (a, b) {
        return Ca(a.aoData, b, "_aData");
      },
      1
    );
  });
  G("rows().cache()", "row().cache()", function (a) {
    return this.iterator(
      "row",
      function (b, c) {
        var d = b.aoData[c];
        return "search" === a ? d._aFilterData : d._aSortData;
      },
      1
    );
  });
  G("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a);
    });
  });
  G("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return b;
      },
      1
    );
  });
  G("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    return new A(c, b);
  });
  G("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g,
        h;
      e.splice(c, 1);
      var k = 0;
      for (g = e.length; k < g; k++) {
        var n = e[k];
        var m = n.anCells;
        null !== n.nTr && (n.nTr._DT_RowIndex = k);
        if (null !== m)
          for (n = 0, h = m.length; n < h; n++) m[n]._DT_CellIndex.row = k;
      }
      Ia(b.aiDisplayMaster, c);
      Ia(b.aiDisplay, c);
      Ia(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      kb(b);
      c = b.rowIdFn(f._aData);
      c !== r && delete b.aIds[c];
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c;
    });
    return this;
  });
  w("rows.add()", function (a) {
    var b = this.iterator(
        "table",
        function (d) {
          var e,
            f = [];
          var g = 0;
          for (e = a.length; g < e; g++) {
            var h = a[g];
            h.nodeName && "TR" === h.nodeName.toUpperCase()
              ? f.push(Ga(d, h)[0])
              : f.push(da(d, h));
          }
          return f;
        },
        1
      ),
      c = this.rows(-1);
    c.pop();
    l.merge(c, b);
    return c;
  });
  w("row()", function (a, b) {
    return vb(this.rows(a, b));
  });
  w("row().data()", function (a) {
    var b = this.context;
    if (a === r)
      return b.length && this.length ? b[0].aoData[this[0]]._aData : r;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && ca(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this;
  });
  w("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  w("row.add()", function (a) {
    a instanceof l && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase()
        ? Ga(c, a)[0]
        : da(c, a);
    });
    return this.row(b[0]);
  });
  var xc = function (a, b, c, d) {
      var e = [],
        f = function (g, h) {
          if (Array.isArray(g) || g instanceof l)
            for (var k = 0, n = g.length; k < n; k++) f(g[k], h);
          else
            g.nodeName && "tr" === g.nodeName.toLowerCase()
              ? e.push(g)
              : ((k = l("<tr><td></td></tr>").addClass(h)),
                (l("td", k).addClass(h).html(g)[0].colSpan = ma(a)),
                e.push(k[0]));
        };
      f(c, d);
      b._details && b._details.detach();
      b._details = l(e);
      b._detailsShow && b._details.insertAfter(b.nTr);
    },
    wb = function (a, b) {
      var c = a.context;
      c.length &&
        (c = c[0].aoData[b !== r ? b : a[0]]) &&
        c._details &&
        (c._details.remove(), (c._detailsShow = r), (c._details = r));
    },
    pc = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        d._details &&
          ((d._detailsShow = b)
            ? d._details.insertAfter(d.nTr)
            : d._details.detach(),
          yc(c[0]));
      }
    },
    yc = function (a) {
      var b = new A(a),
        c = a.aoData;
      b.off(
        "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
      );
      0 < P(c, "_details").length &&
        (b.on("draw.dt.DT_details", function (d, e) {
          a === e &&
            b
              .rows({ page: "current" })
              .eq(0)
              .each(function (f) {
                f = c[f];
                f._detailsShow && f._details.insertAfter(f.nTr);
              });
        }),
        b.on("column-visibility.dt.DT_details", function (d, e, f, g) {
          if (a === e)
            for (e = ma(e), f = 0, g = c.length; f < g; f++)
              (d = c[f]),
                d._details &&
                  d._details.children("td[colspan]").attr("colspan", e);
        }),
        b.on("destroy.dt.DT_details", function (d, e) {
          if (a === e)
            for (var f = 0, g = c.length; f < g; f++) c[f]._details && wb(b, f);
        }));
    };
  w("row().child()", function (a, b) {
    var c = this.context;
    if (a === r)
      return c.length && this.length ? c[0].aoData[this[0]]._details : r;
    !0 === a
      ? this.child.show()
      : !1 === a
      ? wb(this)
      : c.length && this.length && xc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  w(["row().child.show()", "row().child().show()"], function (a) {
    pc(this, !0);
    return this;
  });
  w(["row().child.hide()", "row().child().hide()"], function () {
    pc(this, !1);
    return this;
  });
  w(["row().child.remove()", "row().child().remove()"], function () {
    wb(this);
    return this;
  });
  w("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length
      ? a[0].aoData[this[0]]._detailsShow || !1
      : !1;
  });
  var zc = /^([^:]+):(name|visIdx|visible)$/,
    qc = function (a, b, c, d, e) {
      c = [];
      d = 0;
      for (var f = e.length; d < f; d++) c.push(O(a, e[d], b));
      return c;
    },
    Ac = function (a, b, c) {
      var d = a.aoColumns,
        e = P(d, "sName"),
        f = P(d, "nTh");
      return tb(
        "column",
        b,
        function (g) {
          var h = hc(g);
          if ("" === g) return pa(d.length);
          if (null !== h) return [0 <= h ? h : d.length + h];
          if ("function" === typeof g) {
            var k = Ua(a, c);
            return l.map(d, function (p, t) {
              return g(t, qc(a, t, 0, 0, k), f[t]) ? t : null;
            });
          }
          var n = "string" === typeof g ? g.match(zc) : "";
          if (n)
            switch (n[2]) {
              case "visIdx":
              case "visible":
                h = parseInt(n[1], 10);
                if (0 > h) {
                  var m = l.map(d, function (p, t) {
                    return p.bVisible ? t : null;
                  });
                  return [m[m.length + h]];
                }
                return [sa(a, h)];
              case "name":
                return l.map(e, function (p, t) {
                  return p === n[1] ? t : null;
                });
              default:
                return [];
            }
          if (g.nodeName && g._DT_CellIndex) return [g._DT_CellIndex.column];
          h = l(f)
            .filter(g)
            .map(function () {
              return l.inArray(this, f);
            })
            .toArray();
          if (h.length || !g.nodeName) return h;
          h = l(g).closest("*[data-dt-column]");
          return h.length ? [h.data("dt-column")] : [];
        },
        a,
        c
      );
    };
  w("columns()", function (a, b) {
    a === r ? (a = "") : l.isPlainObject(a) && ((b = a), (a = ""));
    b = ub(b);
    var c = this.iterator(
      "table",
      function (d) {
        return Ac(d, a, b);
      },
      1
    );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  G("columns().header()", "column().header()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTh;
      },
      1
    );
  });
  G("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator(
      "column",
      function (c, d) {
        return c.aoColumns[d].nTf;
      },
      1
    );
  });
  G("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", qc, 1);
  });
  G("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1
    );
  });
  G("columns().cache()", "column().cache()", function (a) {
    return this.iterator(
      "column-rows",
      function (b, c, d, e, f) {
        return Ca(
          b.aoData,
          f,
          "search" === a ? "_aFilterData" : "_aSortData",
          c
        );
      },
      1
    );
  });
  G("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (a, b, c, d, e) {
        return Ca(a.aoData, e, "anCells", b);
      },
      1
    );
  });
  G("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
      d = this.iterator("column", function (e, f) {
        if (a === r) return e.aoColumns[f].bVisible;
        var g = e.aoColumns,
          h = g[f],
          k = e.aoData,
          n;
        if (a !== r && h.bVisible !== a) {
          if (a) {
            var m = l.inArray(!0, P(g, "bVisible"), f + 1);
            var p = 0;
            for (n = k.length; p < n; p++) {
              var t = k[p].nTr;
              g = k[p].anCells;
              t && t.insertBefore(g[f], g[m] || null);
            }
          } else l(P(e.aoData, "anCells", f)).detach();
          h.bVisible = a;
        }
      });
    a !== r &&
      this.iterator("table", function (e) {
        xa(e, e.aoHeader);
        xa(e, e.aoFooter);
        e.aiDisplay.length ||
          l(e.nTBody).find("td[colspan]").attr("colspan", ma(e));
        Qa(e);
        c.iterator("column", function (f, g) {
          E(f, null, "column-visibility", [f, g, a, b]);
        });
        (b === r || b) && c.columns.adjust();
      });
    return d;
  });
  G("columns().indexes()", "column().index()", function (a) {
    return this.iterator(
      "column",
      function (b, c) {
        return "visible" === a ? ta(b, c) : c;
      },
      1
    );
  });
  w("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (a) {
        ra(a);
      },
      1
    );
  });
  w("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return sa(c, b);
      if ("fromData" === a || "toVisible" === a) return ta(c, b);
    }
  });
  w("column()", function (a, b) {
    return vb(this.columns(a, b));
  });
  var Bc = function (a, b, c) {
    var d = a.aoData,
      e = Ua(a, c),
      f = kc(Ca(d, e, "anCells")),
      g = l(lc([], f)),
      h,
      k = a.aoColumns.length,
      n,
      m,
      p,
      t,
      v,
      x;
    return tb(
      "cell",
      b,
      function (q) {
        var y = "function" === typeof q;
        if (null === q || q === r || y) {
          n = [];
          m = 0;
          for (p = e.length; m < p; m++)
            for (h = e[m], t = 0; t < k; t++)
              (v = { row: h, column: t }),
                y
                  ? ((x = d[h]),
                    q(v, O(a, h, t), x.anCells ? x.anCells[t] : null) &&
                      n.push(v))
                  : n.push(v);
          return n;
        }
        if (l.isPlainObject(q))
          return q.column !== r && q.row !== r && -1 !== l.inArray(q.row, e)
            ? [q]
            : [];
        y = g
          .filter(q)
          .map(function (B, F) {
            return { row: F._DT_CellIndex.row, column: F._DT_CellIndex.column };
          })
          .toArray();
        if (y.length || !q.nodeName) return y;
        x = l(q).closest("*[data-dt-row]");
        return x.length
          ? [{ row: x.data("dt-row"), column: x.data("dt-column") }]
          : [];
      },
      a,
      c
    );
  };
  w("cells()", function (a, b, c) {
    l.isPlainObject(a) &&
      (a.row === r ? ((c = a), (a = null)) : ((c = b), (b = null)));
    l.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === r)
      return this.iterator("table", function (m) {
        return Bc(m, a, ub(c));
      });
    var d = c ? { page: c.page, order: c.order, search: c.search } : {},
      e = this.columns(b, d),
      f = this.rows(a, d),
      g,
      h,
      k,
      n;
    d = this.iterator(
      "table",
      function (m, p) {
        var t = [];
        g = 0;
        for (h = f[p].length; g < h; g++)
          for (k = 0, n = e[p].length; k < n; k++)
            t.push({ row: f[p][g], column: e[p][k] });
        return t;
      },
      1
    );
    d = c && c.selected ? this.cells(d, c) : d;
    l.extend(d.selector, { cols: b, rows: a, opts: c });
    return d;
  });
  G("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : r;
      },
      1
    );
  });
  w("cells().data()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return O(a, b, c);
      },
      1
    );
  });
  G("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1
    );
  });
  G("cells().render()", "cell().render()", function (a) {
    return this.iterator(
      "cell",
      function (b, c, d) {
        return O(b, c, d, a);
      },
      1
    );
  });
  G("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return { row: b, column: c, columnVisible: ta(a, c) };
      },
      1
    );
  });
  G("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      va(b, c, a, d);
    });
  });
  w("cell()", function (a, b, c) {
    return vb(this.cells(a, b, c));
  });
  w("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === r)
      return b.length && c.length ? O(b[0], c[0].row, c[0].column) : r;
    Db(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  w("order()", function (a, b) {
    var c = this.context;
    if (a === r) return 0 !== c.length ? c[0].aaSorting : r;
    "number" === typeof a
      ? (a = [[a, b]])
      : a.length &&
        !Array.isArray(a[0]) &&
        (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice();
    });
  });
  w("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      eb(d, a, b, c);
    });
  });
  w("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : r;
      return Array.isArray(b) ? { pre: b } : b;
    }
    return this.iterator("table", function (c) {
      c.aaSortingFixed = l.extend(!0, {}, a);
    });
  });
  w(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      l.each(b[d], function (f, g) {
        e.push([g, a]);
      });
      c.aaSorting = e;
    });
  });
  w("search()", function (a, b, c, d) {
    var e = this.context;
    return a === r
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : r
      : this.iterator("table", function (f) {
          f.oFeatures.bFilter &&
            ya(
              f,
              l.extend({}, f.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1
            );
        });
  });
  G("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === r) return g[f].sSearch;
      e.oFeatures.bFilter &&
        (l.extend(g[f], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d,
        }),
        ya(e, e.oPreviousSearch, 1));
    });
  });
  w("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  w("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  w("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  w("state.save()", function () {
    return this.iterator("table", function (a) {
      Qa(a);
    });
  });
  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");
    for (var c, d, e = 0, f = a.length; e < f; e++)
      if (
        ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
      )
        return c > d;
    return !0;
  };
  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = l(a).get(0),
      c = !1;
    if (a instanceof u.Api) return !0;
    l.each(u.settings, function (d, e) {
      var f = e.nScrollHead ? l("table", e.nScrollHead)[0] : null,
        g = e.nScrollFoot ? l("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0;
    });
    return c;
  };
  u.tables = u.fnTables = function (a) {
    var b = !1;
    l.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = l.map(u.settings, function (d) {
      if (!a || (a && l(d.nTable).is(":visible"))) return d.nTable;
    });
    return b ? new A(c) : c;
  };
  u.camelToHungarian = Y;
  w("$()", function (a, b) {
    var c = this.rows(b).nodes();
    c = l(c);
    return l([].concat(c.filter(a).toArray(), c.find(a).toArray()));
  });
  l.each(["on", "one", "off"], function (a, b) {
    w(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = l
        .map(c[0].split(/\s/), function (e) {
          return e.match(/\.dt\b/) ? e : e + ".dt";
        })
        .join(" ");
      var d = l(this.tables().nodes());
      d[b].apply(d, c);
      return this;
    });
  });
  w("clear()", function () {
    return this.iterator("table", function (a) {
      Ha(a);
    });
  });
  w("settings()", function () {
    return new A(this.context, this.context);
  });
  w("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  w("data()", function () {
    return this.iterator("table", function (a) {
      return P(a.aoData, "_aData");
    }).flatten();
  });
  w("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        h = b.nTFoot,
        k = l(e);
      f = l(f);
      var n = l(b.nTableWrapper),
        m = l.map(b.aoData, function (t) {
          return t.nTr;
        }),
        p;
      b.bDestroying = !0;
      E(b, "aoDestroyCallback", "destroy", [b]);
      a || new A(b).columns().visible(!0);
      n.off(".DT").find(":not(tbody *)").off(".DT");
      l(R).off(".DT-" + b.sInstance);
      e != g.parentNode && (k.children("thead").detach(), k.append(g));
      h && e != h.parentNode && (k.children("tfoot").detach(), k.append(h));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Pa(b);
      l(m).removeClass(b.asStripeClasses.join(" "));
      l("th, td", g).removeClass(
        d.sSortable +
          " " +
          d.sSortableAsc +
          " " +
          d.sSortableDesc +
          " " +
          d.sSortableNone
      );
      f.children().detach();
      f.append(m);
      g = a ? "remove" : "detach";
      k[g]();
      n[g]();
      !a &&
        c &&
        (c.insertBefore(e, b.nTableReinsertBefore),
        k.css("width", b.sDestroyWidth).removeClass(d.sTable),
        (p = b.asDestroyStripes.length) &&
          f.children().each(function (t) {
            l(this).addClass(b.asDestroyStripes[t % p]);
          }));
      c = l.inArray(b, u.settings);
      -1 !== c && u.settings.splice(c, 1);
    });
  });
  l.each(["column", "row", "cell"], function (a, b) {
    w(b + "s().every()", function (c) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, k, n) {
        c.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : r), g, h, k, n);
      });
    });
  });
  w("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = ha(a)(d.oLanguage);
    a === r && (a = b);
    c !== r && l.isPlainObject(a) && (a = a[c] !== r ? a[c] : a._);
    return a.replace("%d", c);
  });
  u.version = "1.10.24";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  u.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse(
          (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + a.sInstance + "_" + location.pathname
          )
        );
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + a.sInstance + "_" + location.pathname,
          JSON.stringify(b)
        );
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous",
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found",
    },
    oSearch: l.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
  };
  qa(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  qa(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: r,
    oAjaxData: r,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == L(this)
        ? 1 * this._iRecordsTotal
        : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return "ssp" == L(this)
        ? 1 * this._iRecordsDisplay
        : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide
        ? !1 === f || -1 === a
          ? b + d
          : Math.min(b + a, this._iRecordsDisplay)
        : !f || c > d || -1 === a
        ? d
        : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  u.ext = I = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version,
  };
  l.extend(I, {
    afnFiltering: I.search,
    aTypes: I.type.detect,
    ofnSearch: I.type.search,
    oSort: I.type.order,
    afnSortData: I.order,
    aoFeatures: I.feature,
    oApi: I.internal,
    oStdClasses: I.classes,
    oPagination: I.pager,
  });
  l.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var ec = u.ext.pager;
  l.extend(ec, {
    simple: function (a, b) {
      return ["previous", "next"];
    },
    full: function (a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (a, b) {
      return [Ba(a, b)];
    },
    simple_numbers: function (a, b) {
      return ["previous", Ba(a, b), "next"];
    },
    full_numbers: function (a, b) {
      return ["first", "previous", Ba(a, b), "next", "last"];
    },
    first_last_numbers: function (a, b) {
      return ["first", Ba(a, b), "last"];
    },
    _numbers: Ba,
    numbers_length: 7,
  });
  l.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          h = a.oLanguage.oPaginate,
          k = a.oLanguage.oAria.paginate || {},
          n,
          m,
          p = 0,
          t = function (x, q) {
            var y,
              B = g.sPageButtonDisabled,
              F = function (D) {
                lb(a, D.data.action, !0);
              };
            var T = 0;
            for (y = q.length; T < y; T++) {
              var J = q[T];
              if (Array.isArray(J)) {
                var z = l("<" + (J.DT_el || "div") + "/>").appendTo(x);
                t(z, J);
              } else {
                n = null;
                m = J;
                z = a.iTabIndex;
                switch (J) {
                  case "ellipsis":
                    x.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    n = h.sFirst;
                    0 === e && ((z = -1), (m += " " + B));
                    break;
                  case "previous":
                    n = h.sPrevious;
                    0 === e && ((z = -1), (m += " " + B));
                    break;
                  case "next":
                    n = h.sNext;
                    if (0 === f || e === f - 1) (z = -1), (m += " " + B);
                    break;
                  case "last":
                    n = h.sLast;
                    if (0 === f || e === f - 1) (z = -1), (m += " " + B);
                    break;
                  default:
                    (n = a.fnFormatNumber(J + 1)),
                      (m = e === J ? g.sPageButtonActive : "");
                }
                null !== n &&
                  ((z = l("<a>", {
                    class: g.sPageButton + " " + m,
                    "aria-controls": a.sTableId,
                    "aria-label": k[J],
                    "data-dt-idx": p,
                    tabindex: z,
                    id:
                      0 === c && "string" === typeof J
                        ? a.sTableId + "_" + J
                        : null,
                  })
                    .html(n)
                    .appendTo(x)),
                  ob(z, { action: J }, F),
                  p++);
              }
            }
          };
        try {
          var v = l(b).find(W.activeElement).data("dt-idx");
        } catch (x) {}
        t(l(b).empty(), d);
        v !== r &&
          l(b)
            .find("[data-dt-idx=" + v + "]")
            .trigger("focus");
      },
    },
  });
  l.extend(u.ext.type.detect, [
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return sb(a, c) ? "num" + c : null;
    },
    function (a, b) {
      if (a && !(a instanceof Date) && !tc.test(a)) return null;
      var c = Date.parse(a);
      return (null !== c && !isNaN(c)) || ba(a) ? "date" : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return sb(a, c, !0) ? "num-fmt" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return jc(a, c) ? "html-num" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return jc(a, c, !0) ? "html-num-fmt" + c : null;
    },
    function (a, b) {
      return ba(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  l.extend(u.ext.type.search, {
    html: function (a) {
      return ba(a)
        ? a
        : "string" === typeof a
        ? a.replace(gc, " ").replace(Ta, "")
        : "";
    },
    string: function (a) {
      return ba(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a;
    },
  });
  var Sa = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = ic(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };
  l.extend(I.type.order, {
    "date-pre": function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function (a) {
      return ba(a)
        ? ""
        : a.replace
        ? a.replace(/<.*?>/g, "").toLowerCase()
        : a + "";
    },
    "string-pre": function (a) {
      return ba(a)
        ? ""
        : "string" === typeof a
        ? a.toLowerCase()
        : a.toString
        ? a.toString()
        : "";
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  Wa("");
  l.extend(!0, u.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        l(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == h[e]
                  ? d.sSortAsc
                  : "desc" == h[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ));
        });
      },
      jqueryui: function (a, b, c, d) {
        l("<div/>")
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
          .appendTo(b);
        l(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          a === f &&
            ((e = c.idx),
            b
              .removeClass(d.sSortAsc + " " + d.sSortDesc)
              .addClass(
                "asc" == h[e]
                  ? d.sSortAsc
                  : "desc" == h[e]
                  ? d.sSortDesc
                  : c.sSortingClass
              ),
            b
              .find("span." + d.sSortIcon)
              .removeClass(
                d.sSortJUIAsc +
                  " " +
                  d.sSortJUIDesc +
                  " " +
                  d.sSortJUI +
                  " " +
                  d.sSortJUIAscAllowed +
                  " " +
                  d.sSortJUIDescAllowed
              )
              .addClass(
                "asc" == h[e]
                  ? d.sSortJUIAsc
                  : "desc" == h[e]
                  ? d.sSortJUIDesc
                  : c.sSortingClassJUI
              ));
        });
      },
    },
  });
  var xb = function (a) {
    return "string" === typeof a
      ? a
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : a;
  };
  u.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return xb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return (
            g +
            (d || "") +
            h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
            f +
            (e || "")
          );
        },
      };
    },
    text: function () {
      return { display: xb, filter: xb };
    },
  };
  l.extend(u.ext.internal, {
    _fnExternApiFunc: fc,
    _fnBuildAjax: La,
    _fnAjaxUpdate: Fb,
    _fnAjaxParameters: Ob,
    _fnAjaxUpdateDraw: Pb,
    _fnAjaxDataSrc: Ma,
    _fnAddColumn: Xa,
    _fnColumnOptions: Da,
    _fnAdjustColumnSizing: ra,
    _fnVisibleToColumnIndex: sa,
    _fnColumnIndexToVisible: ta,
    _fnVisbleColumns: ma,
    _fnGetColumns: Fa,
    _fnColumnTypes: Za,
    _fnApplyColumnDefs: Cb,
    _fnHungarianMap: qa,
    _fnCamelToHungarian: Y,
    _fnLanguageCompat: Va,
    _fnBrowserDetect: Ab,
    _fnAddData: da,
    _fnAddTr: Ga,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== r ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return l.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: O,
    _fnSetCellData: Db,
    _fnSplitObjNotation: bb,
    _fnGetObjectDataFn: ha,
    _fnSetObjectDataFn: ca,
    _fnGetDataMaster: cb,
    _fnClearTable: Ha,
    _fnDeleteIndex: Ia,
    _fnInvalidate: va,
    _fnGetRowElements: ab,
    _fnCreateTr: $a,
    _fnBuildHead: Eb,
    _fnDrawHead: xa,
    _fnDraw: ea,
    _fnReDraw: ia,
    _fnAddOptionsHtml: Hb,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: Ka,
    _fnFeatureHtmlFilter: Jb,
    _fnFilterComplete: ya,
    _fnFilterCustom: Sb,
    _fnFilterColumn: Rb,
    _fnFilter: Qb,
    _fnFilterCreateSearch: hb,
    _fnEscapeRegex: ib,
    _fnFilterData: Tb,
    _fnFeatureHtmlInfo: Mb,
    _fnUpdateInfo: Wb,
    _fnInfoMacros: Xb,
    _fnInitialise: za,
    _fnInitComplete: Na,
    _fnLengthChange: jb,
    _fnFeatureHtmlLength: Ib,
    _fnFeatureHtmlPaginate: Nb,
    _fnPageChange: lb,
    _fnFeatureHtmlProcessing: Kb,
    _fnProcessingDisplay: Q,
    _fnFeatureHtmlTable: Lb,
    _fnScrollDraw: Ea,
    _fnApplyToChildren: X,
    _fnCalculateColumnWidths: Ya,
    _fnThrottle: gb,
    _fnConvertToWidth: Zb,
    _fnGetWidestNode: $b,
    _fnGetMaxLenString: ac,
    _fnStringToCss: H,
    _fnSortFlatten: oa,
    _fnSort: Gb,
    _fnSortAria: cc,
    _fnSortListener: nb,
    _fnSortAttachListener: eb,
    _fnSortingClasses: Pa,
    _fnSortData: bc,
    _fnSaveState: Qa,
    _fnLoadState: dc,
    _fnSettingsFromNode: Ra,
    _fnLog: Z,
    _fnMap: S,
    _fnBindAction: ob,
    _fnCallbackReg: M,
    _fnCallbackFire: E,
    _fnLengthOverflow: kb,
    _fnRenderer: fb,
    _fnDataSource: L,
    _fnRowAttributes: db,
    _fnExtend: pb,
    _fnCalculateEnd: function () {},
  });
  l.fn.dataTable = u;
  u.$ = l;
  l.fn.dataTableSettings = u.settings;
  l.fn.dataTableExt = u.ext;
  l.fn.DataTable = function (a) {
    return l(this).dataTable(a).api();
  };
  l.each(u, function (a, b) {
    l.fn.DataTable[a] = b;
  });
  return l.fn.dataTable;
});

// dataTables.buttons.min.js
(function (f) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (A) {
        return f(A, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (A, y) {
        A || (A = window);
        (y && y.fn.dataTable) || (y = require("datatables.net")(A, y).$);
        return f(y, A, A.document);
      })
    : f(jQuery, window, document);
})(function (f, A, y, t) {
  function E(a, b, c) {
    f.fn.animate
      ? a.stop().fadeIn(b, c)
      : (a.css("display", "block"), c && c.call(a));
  }
  function F(a, b, c) {
    f.fn.animate
      ? a.stop().fadeOut(b, c)
      : (a.css("display", "none"), c && c.call(a));
  }
  function H(a, b) {
    a = new q.Api(a);
    b = b ? b : a.init().buttons || q.defaults.buttons;
    return new u(a, b).container();
  }
  var q = f.fn.dataTable,
    M = 0,
    N = 0,
    z = q.ext.buttons,
    u = function (a, b) {
      if (!(this instanceof u))
        return function (c) {
          return new u(c, a).container();
        };
      "undefined" === typeof b && (b = {});
      !0 === b && (b = {});
      Array.isArray(b) && (b = { buttons: b });
      this.c = f.extend(!0, {}, u.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {
        dt: new q.Api(a),
        buttons: [],
        listenKeys: "",
        namespace: "dtb" + M++,
      };
      this.dom = {
        container: f("<" + this.c.dom.container.tag + "/>").addClass(
          this.c.dom.container.className
        ),
      };
      this._constructor();
    };
  f.extend(u.prototype, {
    action: function (a, b) {
      a = this._nodeToButton(a);
      if (b === t) return a.conf.action;
      a.conf.action = b;
      return this;
    },
    active: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.button.active;
      c = f(c.node);
      if (b === t) return c.hasClass(a);
      c.toggleClass(a, b === t ? !0 : b);
      return this;
    },
    add: function (a, b) {
      var c = this.s.buttons;
      if ("string" === typeof b) {
        b = b.split("-");
        var d = this.s;
        c = 0;
        for (var e = b.length - 1; c < e; c++) d = d.buttons[1 * b[c]];
        c = d.buttons;
        b = 1 * b[b.length - 1];
      }
      this._expandButton(c, a, d !== t, b);
      this._draw();
      return this;
    },
    container: function () {
      return this.dom.container;
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      f(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0);
      return this;
    },
    destroy: function () {
      f("body").off("keyup." + this.s.namespace);
      var a = this.s.buttons.slice(),
        b;
      var c = 0;
      for (b = a.length; c < b; c++) this.remove(a[c].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      c = 0;
      for (b = a.length; c < b; c++)
        if (a.inst === this) {
          a.splice(c, 1);
          break;
        }
      return this;
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      a = this._nodeToButton(a);
      f(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
      return this;
    },
    name: function () {
      return this.c.name;
    },
    node: function (a) {
      if (!a) return this.dom.container;
      a = this._nodeToButton(a);
      return f(a.node);
    },
    processing: function (a, b) {
      var c = this.s.dt,
        d = this._nodeToButton(a);
      if (b === t) return f(d.node).hasClass("processing");
      f(d.node).toggleClass("processing", b);
      f(c.table().node()).triggerHandler("buttons-processing.dt", [
        b,
        c.button(a),
        c,
        f(a),
        d.conf,
      ]);
      return this;
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        d = this.s.dt;
      if (b.buttons.length)
        for (var e = b.buttons.length - 1; 0 <= e; e--)
          this.remove(b.buttons[e].node);
      b.conf.destroy && b.conf.destroy.call(d.button(a), d, f(a), b.conf);
      this._removeKey(b.conf);
      f(b.node).remove();
      a = f.inArray(b, c);
      c.splice(a, 1);
      return this;
    },
    text: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.collection.buttonLiner;
      a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var d = this.s.dt,
        e = f(c.node),
        h = function (m) {
          return "function" === typeof m ? m(d, e, c.conf) : m;
        };
      if (b === t) return h(c.conf.text);
      c.conf.text = b;
      a ? e.children(a).html(h(b)) : e.html(h(b));
      return this;
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        d = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({ inst: this, name: this.c.name });
      for (var e = 0, h = d.length; e < h; e++) this.add(d[e]);
      b.on("destroy", function (m, g) {
        g === c && a.destroy();
      });
      f("body").on("keyup." + this.s.namespace, function (m) {
        if (!y.activeElement || y.activeElement === y.body) {
          var g = String.fromCharCode(m.keyCode).toLowerCase();
          -1 !== a.s.listenKeys.toLowerCase().indexOf(g) && a._keypress(g, m);
        }
      });
    },
    _addKey: function (a) {
      a.key &&
        (this.s.listenKeys += f.isPlainObject(a.key) ? a.key.key : a.key);
    },
    _draw: function (a, b) {
      a || ((a = this.dom.container), (b = this.s.buttons));
      a.children().detach();
      for (var c = 0, d = b.length; c < d; c++)
        a.append(b[c].inserter),
          a.append(" "),
          b[c].buttons &&
            b[c].buttons.length &&
            this._draw(b[c].collection, b[c].buttons);
    },
    _expandButton: function (a, b, c, d) {
      var e = this.s.dt,
        h = 0;
      b = Array.isArray(b) ? b : [b];
      for (var m = 0, g = b.length; m < g; m++) {
        var l = this._resolveExtends(b[m]);
        if (l)
          if (Array.isArray(l)) this._expandButton(a, l, c, d);
          else {
            var k = this._buildButton(l, c);
            k &&
              (d !== t && null !== d ? (a.splice(d, 0, k), d++) : a.push(k),
              k.conf.buttons &&
                ((k.collection = f("<" + this.c.dom.collection.tag + "/>")),
                (k.conf._collection = k.collection),
                this._expandButton(k.buttons, k.conf.buttons, !0, d)),
              l.init && l.init.call(e.button(k.node), e, f(k.node), l),
              h++);
          }
      }
    },
    _buildButton: function (a, b) {
      var c = this.c.dom.button,
        d = this.c.dom.buttonLiner,
        e = this.c.dom.collection,
        h = this.s.dt,
        m = function (n) {
          return "function" === typeof n ? n(h, k, a) : n;
        };
      b && e.button && (c = e.button);
      b && e.buttonLiner && (d = e.buttonLiner);
      if (a.available && !a.available(h, a)) return !1;
      var g = function (n, p, r, v) {
        v.action.call(p.button(r), n, p, r, v);
        f(p.table().node()).triggerHandler("buttons-action.dt", [
          p.button(r),
          p,
          r,
          v,
        ]);
      };
      e = a.tag || c.tag;
      var l = a.clickBlurs === t ? !0 : a.clickBlurs,
        k = f("<" + e + "/>")
          .addClass(c.className)
          .attr("tabindex", this.s.dt.settings()[0].iTabIndex)
          .attr("aria-controls", this.s.dt.table().node().id)
          .on("click.dtb", function (n) {
            n.preventDefault();
            !k.hasClass(c.disabled) && a.action && g(n, h, k, a);
            l && k.trigger("blur");
          })
          .on("keyup.dtb", function (n) {
            13 === n.keyCode &&
              !k.hasClass(c.disabled) &&
              a.action &&
              g(n, h, k, a);
          });
      "a" === e.toLowerCase() && k.attr("href", "#");
      "button" === e.toLowerCase() && k.attr("type", "button");
      d.tag
        ? ((e = f("<" + d.tag + "/>")
            .html(m(a.text))
            .addClass(d.className)),
          "a" === d.tag.toLowerCase() && e.attr("href", "#"),
          k.append(e))
        : k.html(m(a.text));
      !1 === a.enabled && k.addClass(c.disabled);
      a.className && k.addClass(a.className);
      a.titleAttr && k.attr("title", m(a.titleAttr));
      a.attr && k.attr(a.attr);
      a.namespace || (a.namespace = ".dt-button-" + N++);
      d =
        (d = this.c.dom.buttonContainer) && d.tag
          ? f("<" + d.tag + "/>")
              .addClass(d.className)
              .append(k)
          : k;
      this._addKey(a);
      this.c.buttonCreated && (d = this.c.buttonCreated(a, d));
      return {
        conf: a,
        node: k.get(0),
        inserter: d,
        buttons: [],
        inCollection: b,
        collection: null,
      };
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, d = b.length; c < d; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var e = this._nodeToButton(a, b[c].buttons);
          if (e) return e;
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, d = b.length; c < d; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var e = this._nodeToHost(a, b[c].buttons);
          if (e) return e;
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (d) {
          for (var e = 0, h = d.length; e < h; e++) {
            var m = d[e].conf,
              g = d[e].node;
            m.key &&
              (m.key === a
                ? ((b._buttonsHandled = !0), f(g).click())
                : !f.isPlainObject(m.key) ||
                  m.key.key !== a ||
                  (m.key.shiftKey && !b.shiftKey) ||
                  (m.key.altKey && !b.altKey) ||
                  (m.key.ctrlKey && !b.ctrlKey) ||
                  (m.key.metaKey && !b.metaKey) ||
                  ((b._buttonsHandled = !0), f(g).click()));
            d[e].buttons.length && c(d[e].buttons);
          }
        };
        c(this.s.buttons);
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = f.isPlainObject(a.key) ? a.key.key : a.key;
        a = this.s.listenKeys.split("");
        b = f.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join("");
      }
    },
    _resolveExtends: function (a) {
      var b = this.s.dt,
        c,
        d = function (g) {
          for (var l = 0; !f.isPlainObject(g) && !Array.isArray(g); ) {
            if (g === t) return;
            if ("function" === typeof g) {
              if (((g = g(b, a)), !g)) return !1;
            } else if ("string" === typeof g) {
              if (!z[g]) throw "Unknown button type: " + g;
              g = z[g];
            }
            l++;
            if (30 < l) throw "Buttons: Too many iterations";
          }
          return Array.isArray(g) ? g : f.extend({}, g);
        };
      for (a = d(a); a && a.extend; ) {
        if (!z[a.extend])
          throw "Cannot extend unknown button type: " + a.extend;
        var e = d(z[a.extend]);
        if (Array.isArray(e)) return e;
        if (!e) return !1;
        var h = e.className;
        a = f.extend({}, e, a);
        h && a.className !== h && (a.className = h + " " + a.className);
        var m = a.postfixButtons;
        if (m) {
          a.buttons || (a.buttons = []);
          h = 0;
          for (c = m.length; h < c; h++) a.buttons.push(m[h]);
          a.postfixButtons = null;
        }
        if ((m = a.prefixButtons)) {
          a.buttons || (a.buttons = []);
          h = 0;
          for (c = m.length; h < c; h++) a.buttons.splice(h, 0, m[h]);
          a.prefixButtons = null;
        }
        a.extend = e.extend;
      }
      return a;
    },
    _popover: function (a, b, c) {
      var d = this.c,
        e = f.extend(
          {
            align: "button-left",
            autoClose: !1,
            background: !0,
            backgroundClassName: "dt-button-background",
            contentClassName: d.dom.collection.className,
            collectionLayout: "",
            collectionTitle: "",
            dropup: !1,
            fade: 400,
            rightAlignClassName: "dt-button-right",
            tag: d.dom.collection.tag,
          },
          c
        ),
        h = b.node(),
        m = function () {
          F(f(".dt-button-collection"), e.fade, function () {
            f(this).detach();
          });
          f(
            b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()
          ).attr("aria-expanded", "false");
          f("div.dt-button-background").off("click.dtb-collection");
          u.background(!1, e.backgroundClassName, e.fade, h);
          f("body").off(".dtb-collection");
          b.off("buttons-action.b-internal");
        };
      !1 === a && m();
      c = f(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
      c.length && ((h = c.eq(0)), m());
      c = f("<div/>")
        .addClass("dt-button-collection")
        .addClass(e.collectionLayout)
        .css("display", "none");
      a = f(a).addClass(e.contentClassName).attr("role", "menu").appendTo(c);
      h.attr("aria-expanded", "true");
      h.parents("body")[0] !== y.body && (h = y.body.lastChild);
      e.collectionTitle &&
        c.prepend(
          '<div class="dt-button-collection-title">' +
            e.collectionTitle +
            "</div>"
        );
      E(c.insertAfter(h), e.fade);
      d = f(b.table().container());
      var g = c.css("position");
      "dt-container" === e.align &&
        ((h = h.parent()), c.css("width", d.width()));
      if (
        "absolute" === g &&
        (c.hasClass(e.rightAlignClassName) ||
          c.hasClass(e.leftAlignClassName) ||
          "dt-container" === e.align)
      ) {
        var l = h.position();
        c.css({ top: l.top + h.outerHeight(), left: l.left });
        var k = c.outerHeight(),
          n = d.offset().top + d.height(),
          p = l.top + h.outerHeight() + k;
        n = p - n;
        p = l.top - k;
        var r = d.offset().top,
          v = l.top - k - 5;
        (n > r - p || e.dropup) && -v < r && c.css("top", v);
        l = d.offset().left;
        d = d.width();
        d = l + d;
        g = c.offset().left;
        var x = c.width();
        x = g + x;
        var w = h.offset().left,
          B = h.outerWidth();
        B = w + B;
        w = 0;
        c.hasClass(e.rightAlignClassName)
          ? ((w = B - x),
            l > g + w &&
              ((g = l - (g + w)), (d -= x + w), (w = g > d ? w + d : w + g)))
          : ((w = l - g),
            d < x + w &&
              ((g = l - (g + w)), (d -= x + w), (w = g > d ? w + d : w + g)));
        c.css("left", c.position().left + w);
      } else
        "absolute" === g
          ? ((l = h.position()),
            c.css({ top: l.top + h.outerHeight(), left: l.left }),
            (k = c.outerHeight()),
            (g = h.offset().top),
            (w = 0),
            (w = h.offset().left),
            (B = h.outerWidth()),
            (B = w + B),
            (g = c.offset().left),
            (x = a.width()),
            (x = g + x),
            (v = l.top - k - 5),
            (n = d.offset().top + d.height()),
            (p = l.top + h.outerHeight() + k),
            (n = p - n),
            (p = l.top - k),
            (r = d.offset().top),
            (n > r - p || e.dropup) && -v < r && c.css("top", v),
            (w = "button-right" === e.align ? B - x : w - g),
            c.css("left", c.position().left + w))
          : ((g = c.height() / 2),
            g > f(A).height() / 2 && (g = f(A).height() / 2),
            c.css("marginTop", -1 * g));
      e.background && u.background(!0, e.backgroundClassName, e.fade, h);
      f("div.dt-button-background").on("click.dtb-collection", function () {});
      f("body")
        .on("click.dtb-collection", function (C) {
          var I = f.fn.addBack ? "addBack" : "andSelf",
            J = f(C.target).parent()[0];
          ((!f(C.target).parents()[I]().filter(a).length &&
            !f(J).hasClass("dt-buttons")) ||
            f(C.target).hasClass("dt-button-background")) &&
            m();
        })
        .on("keyup.dtb-collection", function (C) {
          27 === C.keyCode && m();
        });
      e.autoClose &&
        setTimeout(function () {
          b.on("buttons-action.b-internal", function (C, I, J, O) {
            O[0] !== h[0] && m();
          });
        }, 0);
      f(c).trigger("buttons-popover.dt");
    },
  });
  u.background = function (a, b, c, d) {
    c === t && (c = 400);
    d || (d = y.body);
    a
      ? E(f("<div/>").addClass(b).css("display", "none").insertAfter(d), c)
      : F(f("div." + b), c, function () {
          f(this).removeClass(b).remove();
        });
  };
  u.instanceSelector = function (a, b) {
    if (a === t || null === a)
      return f.map(b, function (h) {
        return h.inst;
      });
    var c = [],
      d = f.map(b, function (h) {
        return h.name;
      }),
      e = function (h) {
        if (Array.isArray(h)) for (var m = 0, g = h.length; m < g; m++) e(h[m]);
        else
          "string" === typeof h
            ? -1 !== h.indexOf(",")
              ? e(h.split(","))
              : ((h = f.inArray(h.trim(), d)), -1 !== h && c.push(b[h].inst))
            : "number" === typeof h && c.push(b[h].inst);
      };
    e(a);
    return c;
  };
  u.buttonSelector = function (a, b) {
    for (
      var c = [],
        d = function (g, l, k) {
          for (var n, p, r = 0, v = l.length; r < v; r++)
            if ((n = l[r]))
              (p = k !== t ? k + r : r + ""),
                g.push({ node: n.node, name: n.conf.name, idx: p }),
                n.buttons && d(g, n.buttons, p + "-");
        },
        e = function (g, l) {
          var k,
            n = [];
          d(n, l.s.buttons);
          var p = f.map(n, function (r) {
            return r.node;
          });
          if (Array.isArray(g) || g instanceof f)
            for (p = 0, k = g.length; p < k; p++) e(g[p], l);
          else if (null === g || g === t || "*" === g)
            for (p = 0, k = n.length; p < k; p++)
              c.push({ inst: l, node: n[p].node });
          else if ("number" === typeof g)
            c.push({ inst: l, node: l.s.buttons[g].node });
          else if ("string" === typeof g)
            if (-1 !== g.indexOf(","))
              for (n = g.split(","), p = 0, k = n.length; p < k; p++)
                e(n[p].trim(), l);
            else if (g.match(/^\d+(\-\d+)*$/))
              (p = f.map(n, function (r) {
                return r.idx;
              })),
                c.push({ inst: l, node: n[f.inArray(g, p)].node });
            else if (-1 !== g.indexOf(":name"))
              for (g = g.replace(":name", ""), p = 0, k = n.length; p < k; p++)
                n[p].name === g && c.push({ inst: l, node: n[p].node });
            else
              f(p)
                .filter(g)
                .each(function () {
                  c.push({ inst: l, node: this });
                });
          else
            "object" === typeof g &&
              g.nodeName &&
              ((n = f.inArray(g, p)),
              -1 !== n && c.push({ inst: l, node: p[n] }));
        },
        h = 0,
        m = a.length;
      h < m;
      h++
    )
      e(b, a[h]);
    return c;
  };
  u.stripData = function (a, b) {
    if ("string" !== typeof a) return a;
    a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    a = a.replace(/<!\-\-.*?\-\->/g, "");
    b.stripHtml && (a = a.replace(/<[^>]*>/g, ""));
    b.trim && (a = a.replace(/^\s+|\s+$/g, ""));
    b.stripNewlines && (a = a.replace(/\n/g, " "));
    b.decodeEntities && ((K.innerHTML = a), (a = K.value));
    return a;
  };
  u.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: { tag: "div", className: "dt-buttons" },
      collection: { tag: "div", className: "" },
      button: {
        tag: "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled",
      },
      buttonLiner: { tag: "span", className: "" },
    },
  };
  u.version = "1.7.0";
  f.extend(z, {
    collection: {
      text: function (a) {
        return a.i18n("buttons.collection", "Collection");
      },
      className: "buttons-collection",
      init: function (a, b, c) {
        b.attr("aria-expanded", !1);
      },
      action: function (a, b, c, d) {
        a.stopPropagation();
        d._collection.parents("body").length
          ? this.popover(!1, d)
          : this.popover(d._collection, d);
      },
      attr: { "aria-haspopup": !0 },
    },
    copy: function (a, b) {
      if (z.copyHtml5) return "copyHtml5";
    },
    csv: function (a, b) {
      if (z.csvHtml5 && z.csvHtml5.available(a, b)) return "csvHtml5";
    },
    excel: function (a, b) {
      if (z.excelHtml5 && z.excelHtml5.available(a, b)) return "excelHtml5";
    },
    pdf: function (a, b) {
      if (z.pdfHtml5 && z.pdfHtml5.available(a, b)) return "pdfHtml5";
    },
    pageLength: function (a) {
      a = a.settings()[0].aLengthMenu;
      var b = [],
        c = [];
      if (Array.isArray(a[0])) (b = a[0]), (c = a[1]);
      else
        for (var d = 0; d < a.length; d++) {
          var e = a[d];
          f.isPlainObject(e)
            ? (b.push(e.value), c.push(e.label))
            : (b.push(e), c.push(e));
        }
      return {
        extend: "collection",
        text: function (h) {
          return h.i18n(
            "buttons.pageLength",
            { "-1": "Show all rows", _: "Show %d rows" },
            h.page.len()
          );
        },
        className: "buttons-page-length",
        autoClose: !0,
        buttons: f.map(b, function (h, m) {
          return {
            text: c[m],
            className: "button-page-length",
            action: function (g, l) {
              l.page.len(h).draw();
            },
            init: function (g, l, k) {
              var n = this;
              l = function () {
                n.active(g.page.len() === h);
              };
              g.on("length.dt" + k.namespace, l);
              l();
            },
            destroy: function (g, l, k) {
              g.off("length.dt" + k.namespace);
            },
          };
        }),
        init: function (h, m, g) {
          var l = this;
          h.on("length.dt" + g.namespace, function () {
            l.text(g.text);
          });
        },
        destroy: function (h, m, g) {
          h.off("length.dt" + g.namespace);
        },
      };
    },
  });
  q.Api.register("buttons()", function (a, b) {
    b === t && ((b = a), (a = t));
    this.selector.buttonGroup = a;
    var c = this.iterator(
      !0,
      "table",
      function (d) {
        if (d._buttons)
          return u.buttonSelector(u.instanceSelector(a, d._buttons), b);
      },
      !0
    );
    c._groupSelector = a;
    return c;
  });
  q.Api.register("button()", function (a, b) {
    a = this.buttons(a, b);
    1 < a.length && a.splice(1, a.length);
    return a;
  });
  q.Api.registerPlural("buttons().active()", "button().active()", function (a) {
    return a === t
      ? this.map(function (b) {
          return b.inst.active(b.node);
        })
      : this.each(function (b) {
          b.inst.active(b.node, a);
        });
  });
  q.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === t
      ? this.map(function (b) {
          return b.inst.action(b.node);
        })
      : this.each(function (b) {
          b.inst.action(b.node, a);
        });
  });
  q.Api.register(["buttons().enable()", "button().enable()"], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a);
    });
  });
  q.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (a) {
      a.inst.disable(a.node);
    });
  });
  q.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var a = f();
    f(
      this.each(function (b) {
        a = a.add(b.inst.node(b.node));
      })
    );
    return a;
  });
  q.Api.registerPlural(
    "buttons().processing()",
    "button().processing()",
    function (a) {
      return a === t
        ? this.map(function (b) {
            return b.inst.processing(b.node);
          })
        : this.each(function (b) {
            b.inst.processing(b.node, a);
          });
    }
  );
  q.Api.registerPlural("buttons().text()", "button().text()", function (a) {
    return a === t
      ? this.map(function (b) {
          return b.inst.text(b.node);
        })
      : this.each(function (b) {
          b.inst.text(b.node, a);
        });
  });
  q.Api.registerPlural(
    "buttons().trigger()",
    "button().trigger()",
    function () {
      return this.each(function (a) {
        a.inst.node(a.node).trigger("click");
      });
    }
  );
  q.Api.register("button().popover()", function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a, this.button(this[0].node), b);
    });
  });
  q.Api.register("buttons().containers()", function () {
    var a = f(),
      b = this._groupSelector;
    this.iterator(!0, "table", function (c) {
      if (c._buttons) {
        c = u.instanceSelector(b, c._buttons);
        for (var d = 0, e = c.length; d < e; d++) a = a.add(c[d].container());
      }
    });
    return a;
  });
  q.Api.register("buttons().container()", function () {
    return this.containers().eq(0);
  });
  q.Api.register("button().add()", function (a, b) {
    var c = this.context;
    c.length &&
      ((c = u.instanceSelector(this._groupSelector, c[0]._buttons)),
      c.length && c[0].add(b, a));
    return this.button(this._groupSelector, a);
  });
  q.Api.register("buttons().destroy()", function () {
    this.pluck("inst")
      .unique()
      .each(function (a) {
        a.destroy();
      });
    return this;
  });
  q.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    this.each(function (a) {
      a.inst.remove(a.node);
    });
    return this;
  });
  var D;
  q.Api.register("buttons.info()", function (a, b, c) {
    var d = this;
    if (!1 === a)
      return (
        this.off("destroy.btn-info"),
        F(f("#datatables_buttons_info"), 400, function () {
          f(this).remove();
        }),
        clearTimeout(D),
        (D = null),
        this
      );
    D && clearTimeout(D);
    f("#datatables_buttons_info").length &&
      f("#datatables_buttons_info").remove();
    a = a ? "<h2>" + a + "</h2>" : "";
    E(
      f('<div id="datatables_buttons_info" class="dt-button-info"/>')
        .html(a)
        .append(f("<div/>")["string" === typeof b ? "html" : "append"](b))
        .css("display", "none")
        .appendTo("body")
    );
    c !== t &&
      0 !== c &&
      (D = setTimeout(function () {
        d.buttons.info(!1);
      }, c));
    this.on("destroy.btn-info", function () {
      d.buttons.info(!1);
    });
    return this;
  });
  q.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) return P(new q.Api(this.context[0]), a);
  });
  q.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {});
    var b = a;
    var c =
      "*" === b.filename &&
      "*" !== b.title &&
      b.title !== t &&
      null !== b.title &&
      "" !== b.title
        ? b.title
        : b.filename;
    "function" === typeof c && (c = c());
    c === t || null === c
      ? (c = null)
      : (-1 !== c.indexOf("*") &&
          (c = c.replace("*", f("head > title").text()).trim()),
        (c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "")),
        (b = G(b.extension)) || (b = ""),
        (c += b));
    b = G(a.title);
    b =
      null === b
        ? null
        : -1 !== b.indexOf("*")
        ? b.replace("*", f("head > title").text() || "Exported data")
        : b;
    return {
      filename: c,
      title: b,
      messageTop: L(this, a.message || a.messageTop, "top"),
      messageBottom: L(this, a.messageBottom, "bottom"),
    };
  });
  var G = function (a) {
      return null === a || a === t ? null : "function" === typeof a ? a() : a;
    },
    L = function (a, b, c) {
      b = G(b);
      if (null === b) return null;
      a = f("caption", a.table().container()).eq(0);
      return "*" === b
        ? a.css("caption-side") !== c
          ? null
          : a.length
          ? a.text()
          : ""
        : b;
    },
    K = f("<textarea/>")[0],
    P = function (a, b) {
      var c = f.extend(
        !0,
        {},
        {
          rows: null,
          columns: "",
          modifier: { search: "applied", order: "applied" },
          orthogonal: "display",
          stripHtml: !0,
          stripNewlines: !0,
          decodeEntities: !0,
          trim: !0,
          format: {
            header: function (v) {
              return u.stripData(v, c);
            },
            footer: function (v) {
              return u.stripData(v, c);
            },
            body: function (v) {
              return u.stripData(v, c);
            },
          },
          customizeData: null,
        },
        b
      );
      b = a
        .columns(c.columns)
        .indexes()
        .map(function (v) {
          var x = a.column(v).header();
          return c.format.header(x.innerHTML, v, x);
        })
        .toArray();
      var d = a.table().footer()
          ? a
              .columns(c.columns)
              .indexes()
              .map(function (v) {
                var x = a.column(v).footer();
                return c.format.footer(x ? x.innerHTML : "", v, x);
              })
              .toArray()
          : null,
        e = f.extend({}, c.modifier);
      a.select &&
        "function" === typeof a.select.info &&
        e.selected === t &&
        a.rows(c.rows, f.extend({ selected: !0 }, e)).any() &&
        f.extend(e, { selected: !0 });
      e = a.rows(c.rows, e).indexes().toArray();
      var h = a.cells(e, c.columns);
      e = h.render(c.orthogonal).toArray();
      h = h.nodes().toArray();
      for (
        var m = b.length, g = [], l = 0, k = 0, n = 0 < m ? e.length / m : 0;
        k < n;
        k++
      ) {
        for (var p = [m], r = 0; r < m; r++)
          (p[r] = c.format.body(e[l], k, r, h[l])), l++;
        g[k] = p;
      }
      b = { header: b, footer: d, body: g };
      c.customizeData && c.customizeData(b);
      return b;
    };
  f.fn.dataTable.Buttons = u;
  f.fn.DataTable.Buttons = u;
  f(y).on("init.dt plugin-init.dt", function (a, b) {
    "dt" === a.namespace &&
      (a = b.oInit.buttons || q.defaults.buttons) &&
      !b._buttons &&
      new u(b, a).container();
  });
  q.ext.feature.push({ fnInit: H, cFeature: "B" });
  q.ext.features && q.ext.features.register("buttons", H);
  return u;
});

// buttons.html5.min.js
(function (n) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (u) {
          return n(u, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (u, x, E, F) {
        u || (u = window);
        (x && x.fn.dataTable) || (x = require("datatables.net")(u, x).$);
        x.fn.dataTable.Buttons || require("datatables.net-buttons")(u, x);
        return n(x, u, u.document, E, F);
      })
    : n(jQuery, window, document);
})(function (n, u, x, E, F, B) {
  function I(a) {
    for (var c = ""; 0 <= a; )
      (c = String.fromCharCode((a % 26) + 65) + c),
        (a = Math.floor(a / 26) - 1);
    return c;
  }
  function O(a, c) {
    J === B &&
      (J =
        -1 ===
        M.serializeToString(
          new u.DOMParser().parseFromString(
            P["xl/worksheets/sheet1.xml"],
            "text/xml"
          )
        ).indexOf("xmlns:r"));
    n.each(c, function (d, b) {
      if (n.isPlainObject(b)) (d = a.folder(d)), O(d, b);
      else {
        if (J) {
          var m = b.childNodes[0],
            e,
            f = [];
          for (e = m.attributes.length - 1; 0 <= e; e--) {
            var g = m.attributes[e].nodeName;
            var p = m.attributes[e].nodeValue;
            -1 !== g.indexOf(":") &&
              (f.push({ name: g, value: p }), m.removeAttribute(g));
          }
          e = 0;
          for (g = f.length; e < g; e++)
            (p = b.createAttribute(
              f[e].name.replace(":", "_dt_b_namespace_token_")
            )),
              (p.value = f[e].value),
              m.setAttributeNode(p);
        }
        b = M.serializeToString(b);
        J &&
          (-1 === b.indexOf("<?xml") &&
            (b = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + b),
          (b = b.replace(/_dt_b_namespace_token_/g, ":")),
          (b = b.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")));
        b = b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(d, b);
      }
    });
  }
  function y(a, c, d) {
    var b = a.createElement(c);
    d &&
      (d.attr && n(b).attr(d.attr),
      d.children &&
        n.each(d.children, function (m, e) {
          b.appendChild(e);
        }),
      null !== d.text &&
        d.text !== B &&
        b.appendChild(a.createTextNode(d.text)));
    return b;
  }
  function V(a, c) {
    var d = a.header[c].length;
    a.footer && a.footer[c].length > d && (d = a.footer[c].length);
    for (var b = 0, m = a.body.length; b < m; b++) {
      var e = a.body[b][c];
      e = null !== e && e !== B ? e.toString() : "";
      -1 !== e.indexOf("\n")
        ? ((e = e.split("\n")),
          e.sort(function (f, g) {
            return g.length - f.length;
          }),
          (e = e[0].length))
        : (e = e.length);
      e > d && (d = e);
      if (40 < d) return 54;
    }
    d *= 1.35;
    return 6 < d ? d : 6;
  }
  var D = n.fn.dataTable;
  D.Buttons.pdfMake = function (a) {
    if (!a) return F || u.pdfMake;
    F = a;
  };
  D.Buttons.jszip = function (a) {
    if (!a) return E || u.JSZip;
    E = a;
  };
  var K = (function (a) {
    if (
      !(
        "undefined" === typeof a ||
        ("undefined" !== typeof navigator &&
          /MSIE [1-9]\./.test(navigator.userAgent))
      )
    ) {
      var c = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        d = "download" in c,
        b = /constructor/i.test(a.HTMLElement) || a.safari,
        m = /CriOS\/[\d]+/.test(navigator.userAgent),
        e = function (h) {
          (a.setImmediate || a.setTimeout)(function () {
            throw h;
          }, 0);
        },
        f = function (h) {
          setTimeout(function () {
            "string" === typeof h
              ? (a.URL || a.webkitURL || a).revokeObjectURL(h)
              : h.remove();
          }, 4e4);
        },
        g = function (h) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            h.type
          )
            ? new Blob([String.fromCharCode(65279), h], { type: h.type })
            : h;
        },
        p = function (h, q, v) {
          v || (h = g(h));
          var r = this,
            w = "application/octet-stream" === h.type,
            C = function () {
              var l = ["writestart", "progress", "write", "writeend"];
              l = [].concat(l);
              for (var z = l.length; z--; ) {
                var G = r["on" + l[z]];
                if ("function" === typeof G)
                  try {
                    G.call(r, r);
                  } catch (A) {
                    e(A);
                  }
              }
            };
          r.readyState = r.INIT;
          if (d) {
            var k = (a.URL || a.webkitURL || a).createObjectURL(h);
            setTimeout(function () {
              c.href = k;
              c.download = q;
              var l = new MouseEvent("click");
              c.dispatchEvent(l);
              C();
              f(k);
              r.readyState = r.DONE;
            });
          } else
            (function () {
              if ((m || (w && b)) && a.FileReader) {
                var l = new FileReader();
                l.onloadend = function () {
                  var z = m
                    ? l.result
                    : l.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  a.open(z, "_blank") || (a.location.href = z);
                  r.readyState = r.DONE;
                  C();
                };
                l.readAsDataURL(h);
                r.readyState = r.INIT;
              } else
                k || (k = (a.URL || a.webkitURL || a).createObjectURL(h)),
                  w
                    ? (a.location.href = k)
                    : a.open(k, "_blank") || (a.location.href = k),
                  (r.readyState = r.DONE),
                  C(),
                  f(k);
            })();
        },
        t = p.prototype;
      if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob)
        return function (h, q, v) {
          q = q || h.name || "download";
          v || (h = g(h));
          return navigator.msSaveOrOpenBlob(h, q);
        };
      t.abort = function () {};
      t.readyState = t.INIT = 0;
      t.WRITING = 1;
      t.DONE = 2;
      t.error =
        t.onwritestart =
        t.onprogress =
        t.onwrite =
        t.onabort =
        t.onerror =
        t.onwriteend =
          null;
      return function (h, q, v) {
        return new p(h, q || h.name || "download", v);
      };
    }
  })(
    ("undefined" !== typeof self && self) ||
      ("undefined" !== typeof u && u) ||
      this.content
  );
  D.fileSave = K;
  var Q = function (a) {
      var c = "Sheet1";
      a.sheetName && (c = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
      return c;
    },
    R = function (a) {
      return a.newline
        ? a.newline
        : navigator.userAgent.match(/Windows/)
        ? "\r\n"
        : "\n";
    },
    S = function (a, c) {
      var d = R(c);
      a = a.buttons.exportData(c.exportOptions);
      var b = c.fieldBoundary,
        m = c.fieldSeparator,
        e = new RegExp(b, "g"),
        f = c.escapeChar !== B ? c.escapeChar : "\\",
        g = function (v) {
          for (var r = "", w = 0, C = v.length; w < C; w++)
            0 < w && (r += m),
              (r += b ? b + ("" + v[w]).replace(e, f + b) + b : v[w]);
          return r;
        },
        p = c.header ? g(a.header) + d : "";
      c = c.footer && a.footer ? d + g(a.footer) : "";
      for (var t = [], h = 0, q = a.body.length; h < q; h++)
        t.push(g(a.body[h]));
      return { str: p + t.join(d) + c, rows: t.length };
    },
    T = function () {
      if (
        -1 === navigator.userAgent.indexOf("Safari") ||
        -1 !== navigator.userAgent.indexOf("Chrome") ||
        -1 !== navigator.userAgent.indexOf("Opera")
      )
        return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1;
    };
  try {
    var M = new XMLSerializer(),
      J;
  } catch (a) {}
  var P = {
      "_rels/.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
      "xl/worksheets/sheet1.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml":
        '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>',
    },
    U = [
      {
        match: /^\-?\d+\.\d%$/,
        style: 60,
        fmt: function (a) {
          return a / 100;
        },
      },
      {
        match: /^\-?\d+\.?\d*%$/,
        style: 56,
        fmt: function (a) {
          return a / 100;
        },
      },
      { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
      { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
      { match: /^\-?€[\d,]+.?\d*$/, style: 59 },
      { match: /^\-?\d+$/, style: 65 },
      { match: /^\-?\d+\.\d{2}$/, style: 66 },
      {
        match: /^\([\d,]+\)$/,
        style: 61,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      {
        match: /^\([\d,]+\.\d{2}\)$/,
        style: 62,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      { match: /^\-?[\d,]+$/, style: 63 },
      { match: /^\-?[\d,]+\.\d{2}$/, style: 64 },
      {
        match: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/,
        style: 67,
        fmt: function (a) {
          return Math.round(25569 + Date.parse(a) / 864e5);
        },
      },
    ];
  D.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (a) {
      return a.i18n("buttons.copy", "Copy");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this;
      a = S(c, b);
      var e = c.buttons.exportInfo(b),
        f = R(b),
        g = a.str;
      d = n("<div/>").css({
        height: 1,
        width: 1,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      });
      e.title && (g = e.title + f + f + g);
      e.messageTop && (g = e.messageTop + f + f + g);
      e.messageBottom && (g = g + f + f + e.messageBottom);
      b.customize && (g = b.customize(g, b, c));
      b = n("<textarea readonly/>").val(g).appendTo(d);
      if (x.queryCommandSupported("copy")) {
        d.appendTo(c.table().container());
        b[0].focus();
        b[0].select();
        try {
          var p = x.execCommand("copy");
          d.remove();
          if (p) {
            c.buttons.info(
              c.i18n("buttons.copyTitle", "Copy to clipboard"),
              c.i18n(
                "buttons.copySuccess",
                {
                  1: "Copied one row to clipboard",
                  _: "Copied %d rows to clipboard",
                },
                a.rows
              ),
              2e3
            );
            this.processing(!1);
            return;
          }
        } catch (q) {}
      }
      p = n(
        "<span>" +
          c.i18n(
            "buttons.copyKeys",
            "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
          ) +
          "</span>"
      ).append(d);
      c.buttons.info(c.i18n("buttons.copyTitle", "Copy to clipboard"), p, 0);
      b[0].focus();
      b[0].select();
      var t = n(p).closest(".dt-button-info"),
        h = function () {
          t.off("click.buttons-copy");
          n(x).off(".buttons-copy");
          c.buttons.info(!1);
        };
      t.on("click.buttons-copy", h);
      n(x)
        .on("keydown.buttons-copy", function (q) {
          27 === q.keyCode && (h(), m.processing(!1));
        })
        .on("copy.buttons-copy cut.buttons-copy", function () {
          h();
          m.processing(!1);
        });
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
  };
  D.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function () {
      return u.FileReader !== B && u.Blob;
    },
    text: function (a) {
      return a.i18n("buttons.csv", "CSV");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      a = S(c, b).str;
      d = c.buttons.exportInfo(b);
      var m = b.charset;
      b.customize && (a = b.customize(a, b, c));
      !1 !== m
        ? (m || (m = x.characterSet || x.charset), m && (m = ";charset=" + m))
        : (m = "");
      b.bom && (a = "﻿" + a);
      K(new Blob([a], { type: "text/csv" + m }), d.filename, !0);
      this.processing(!1);
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1,
  };
  D.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return u.FileReader !== B && (E || u.JSZip) !== B && !T() && M;
    },
    text: function (a) {
      return a.i18n("buttons.excel", "Excel");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this,
        e = 0;
      a = function (k) {
        return n.parseXML(P[k]);
      };
      var f = a("xl/worksheets/sheet1.xml"),
        g = f.getElementsByTagName("sheetData")[0];
      a = {
        _rels: { ".rels": a("_rels/.rels") },
        xl: {
          _rels: { "workbook.xml.rels": a("xl/_rels/workbook.xml.rels") },
          "workbook.xml": a("xl/workbook.xml"),
          "styles.xml": a("xl/styles.xml"),
          worksheets: { "sheet1.xml": f },
        },
        "[Content_Types].xml": a("[Content_Types].xml"),
      };
      var p = c.buttons.exportData(b.exportOptions),
        t,
        h,
        q = function (k) {
          t = e + 1;
          h = y(f, "row", { attr: { r: t } });
          for (var l = 0, z = k.length; l < z; l++) {
            var G = I(l) + "" + t,
              A = null;
            if (null === k[l] || k[l] === B || "" === k[l])
              if (!0 === b.createEmptyCells) k[l] = "";
              else continue;
            var H = k[l];
            k[l] = "function" === typeof k[l].trim ? k[l].trim() : k[l];
            for (var N = 0, W = U.length; N < W; N++) {
              var L = U[N];
              if (k[l].match && !k[l].match(/^0\d+/) && k[l].match(L.match)) {
                A = k[l].replace(/[^\d\.\-]/g, "");
                L.fmt && (A = L.fmt(A));
                A = y(f, "c", {
                  attr: { r: G, s: L.style },
                  children: [y(f, "v", { text: A })],
                });
                break;
              }
            }
            A ||
              ("number" === typeof k[l] ||
              (k[l].match &&
                k[l].match(/^-?\d+(\.\d+)?$/) &&
                !k[l].match(/^0\d+/))
                ? (A = y(f, "c", {
                    attr: { t: "n", r: G },
                    children: [y(f, "v", { text: k[l] })],
                  }))
                : ((H = H.replace
                    ? H.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "")
                    : H),
                  (A = y(f, "c", {
                    attr: { t: "inlineStr", r: G },
                    children: {
                      row: y(f, "is", {
                        children: {
                          row: y(f, "t", {
                            text: H,
                            attr: { "xml:space": "preserve" },
                          }),
                        },
                      }),
                    },
                  }))));
            h.appendChild(A);
          }
          g.appendChild(h);
          e++;
        };
      b.customizeData && b.customizeData(p);
      var v = function (k, l) {
          var z = n("mergeCells", f);
          z[0].appendChild(
            y(f, "mergeCell", { attr: { ref: "A" + k + ":" + I(l) + k } })
          );
          z.attr("count", parseFloat(z.attr("count")) + 1);
          n("row:eq(" + (k - 1) + ") c", f).attr("s", "51");
        },
        r = c.buttons.exportInfo(b);
      r.title && (q([r.title], e), v(e, p.header.length - 1));
      r.messageTop && (q([r.messageTop], e), v(e, p.header.length - 1));
      b.header && (q(p.header, e), n("row:last c", f).attr("s", "2"));
      d = e;
      var w = 0;
      for (var C = p.body.length; w < C; w++) q(p.body[w], e);
      w = e;
      b.footer &&
        p.footer &&
        (q(p.footer, e), n("row:last c", f).attr("s", "2"));
      r.messageBottom && (q([r.messageBottom], e), v(e, p.header.length - 1));
      q = y(f, "cols");
      n("worksheet", f).prepend(q);
      v = 0;
      for (C = p.header.length; v < C; v++)
        q.appendChild(
          y(f, "col", {
            attr: { min: v + 1, max: v + 1, width: V(p, v), customWidth: 1 },
          })
        );
      q = a.xl["workbook.xml"];
      n("sheets sheet", q).attr("name", Q(b));
      b.autoFilter &&
        (n("mergeCells", f).before(
          y(f, "autoFilter", {
            attr: { ref: "A" + d + ":" + I(p.header.length - 1) + w },
          })
        ),
        n("definedNames", q).append(
          y(q, "definedName", {
            attr: {
              name: "_xlnm._FilterDatabase",
              localSheetId: "0",
              hidden: 1,
            },
            text: Q(b) + "!$A$" + d + ":" + I(p.header.length - 1) + w,
          })
        ));
      b.customize && b.customize(a, b, c);
      0 === n("mergeCells", f).children().length && n("mergeCells", f).remove();
      c = new (E || u.JSZip)();
      d = {
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
      O(c, a);
      c.generateAsync
        ? c.generateAsync(d).then(function (k) {
            K(k, r.filename);
            m.processing(!1);
          })
        : (K(c.generate(d), r.filename), this.processing(!1));
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: !1,
    autoFilter: !1,
    sheetName: "",
  };
  D.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return u.FileReader !== B && (F || u.pdfMake);
    },
    text: function (a) {
      return a.i18n("buttons.pdf", "PDF");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      d = c.buttons.exportData(b.exportOptions);
      a = c.buttons.exportInfo(b);
      var m = [];
      b.header &&
        m.push(
          n.map(d.header, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableHeader",
            };
          })
        );
      for (var e = 0, f = d.body.length; e < f; e++)
        m.push(
          n.map(d.body[e], function (g) {
            if (null === g || g === B) g = "";
            return {
              text: "string" === typeof g ? g : g + "",
              style: e % 2 ? "tableBodyEven" : "tableBodyOdd",
            };
          })
        );
      b.footer &&
        d.footer &&
        m.push(
          n.map(d.footer, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableFooter",
            };
          })
        );
      d = {
        pageSize: b.pageSize,
        pageOrientation: b.orientation,
        content: [{ table: { headerRows: 1, body: m }, layout: "noBorders" }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center",
          },
          tableBodyEven: {},
          tableBodyOdd: { fillColor: "#f3f3f3" },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
          },
          title: { alignment: "center", fontSize: 15 },
          message: {},
        },
        defaultStyle: { fontSize: 10 },
      };
      a.messageTop &&
        d.content.unshift({
          text: a.messageTop,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.messageBottom &&
        d.content.push({
          text: a.messageBottom,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.title &&
        d.content.unshift({
          text: a.title,
          style: "title",
          margin: [0, 0, 0, 12],
        });
      b.customize && b.customize(d, b, c);
      c = (F || u.pdfMake).createPdf(d);
      "open" !== b.download || T() ? c.download(a.filename) : c.open();
      this.processing(!1);
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download",
  };
  return D.Buttons;
});

// dataTables.searchPanes.min.js
(function () {
  function G(m) {
    l = m;
    A = m.fn.dataTable;
  }
  function H(m) {
    p = m;
    B = m.fn.dataTable;
  }
  var l,
    A,
    E = (function () {
      function m(a, b, e, d, f, c) {
        var g = this;
        void 0 === c && (c = null);
        if (!A || !A.versionCheck || !A.versionCheck("1.10.0"))
          throw Error("SearchPane requires DataTables 1.10 or newer");
        if (!A.select) throw Error("SearchPane requires Select");
        a = new A.Api(a);
        this.classes = l.extend(!0, {}, m.classes);
        this.c = l.extend(!0, {}, m.defaults, b);
        void 0 !== b &&
          void 0 !== b.hideCount &&
          void 0 === b.viewCount &&
          (this.c.viewCount = !this.c.hideCount);
        this.customPaneSettings = c;
        this.s = {
          cascadeRegen: !1,
          clearing: !1,
          colOpts: [],
          deselect: !1,
          displayed: !1,
          dt: a,
          dtPane: void 0,
          filteringActive: !1,
          forceViewTotal: !1,
          index: e,
          indexes: [],
          lastCascade: !1,
          lastSelect: !1,
          listSet: !1,
          name: void 0,
          redraw: !1,
          rowData: {
            arrayFilter: [],
            arrayOriginal: [],
            arrayTotals: [],
            bins: {},
            binsOriginal: {},
            binsTotal: {},
            filterMap: new Map(),
            totalOptions: 0,
          },
          scrollTop: 0,
          searchFunction: void 0,
          selectPresent: !1,
          serverSelect: [],
          serverSelecting: !1,
          showFiltered: !1,
          tableLength: null,
          updating: !1,
        };
        b = a.columns().eq(0).toArray().length;
        this.colExists = this.s.index < b;
        this.c.layout = d;
        b = parseInt(d.split("-")[1], 10);
        this.dom = {
          buttonGroup: l("<div/>").addClass(this.classes.buttonGroup),
          clear: l('<button type="button">&#215;</button>')
            .addClass(this.classes.disabledButton)
            .attr("disabled", "true")
            .addClass(this.classes.paneButton)
            .addClass(this.classes.clearButton),
          container: l("<div/>")
            .addClass(this.classes.container)
            .addClass(
              this.classes.layout + (10 > b ? d : d.split("-")[0] + "-9")
            ),
          countButton: l('<button type="button"></button>')
            .addClass(this.classes.paneButton)
            .addClass(this.classes.countButton),
          dtP: l(
            "<table><thead><tr><th>" +
              (this.colExists
                ? l(a.column(this.colExists ? this.s.index : 0).header()).text()
                : this.customPaneSettings.header || "Custom Pane") +
              "</th><th/></tr></thead></table>"
          ),
          lower: l("<div/>")
            .addClass(this.classes.subRow2)
            .addClass(this.classes.narrowButton),
          nameButton: l('<button type="button"></button>')
            .addClass(this.classes.paneButton)
            .addClass(this.classes.nameButton),
          panesContainer: f,
          searchBox: l("<input/>")
            .addClass(this.classes.paneInputButton)
            .addClass(this.classes.search),
          searchButton: l(
            '<button type = "button" class="' +
              this.classes.searchIcon +
              '"></button>'
          ).addClass(this.classes.paneButton),
          searchCont: l("<div/>").addClass(this.classes.searchCont),
          searchLabelCont: l("<div/>").addClass(this.classes.searchLabelCont),
          topRow: l("<div/>").addClass(this.classes.topRow),
          upper: l("<div/>")
            .addClass(this.classes.subRow1)
            .addClass(this.classes.narrowSearch),
        };
        this.s.displayed = !1;
        a = this.s.dt;
        this.selections = [];
        this.s.colOpts = this.colExists
          ? this._getOptions()
          : this._getBonusOptions();
        var h = this.s.colOpts;
        d = l('<button type="button">X</button>').addClass(
          this.classes.paneButton
        );
        l(d).text(a.i18n("searchPanes.clearPane", this.c.i18n.clearPane));
        this.dom.container.addClass(h.className);
        this.dom.container.addClass(
          null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.className
            ? this.customPaneSettings.className
            : ""
        );
        this.s.name =
          void 0 !== this.s.colOpts.name
            ? this.s.colOpts.name
            : null !== this.customPaneSettings &&
              void 0 !== this.customPaneSettings.name
            ? this.customPaneSettings.name
            : this.colExists
            ? l(a.column(this.s.index).header()).text()
            : this.customPaneSettings.header || "Custom Pane";
        l(f).append(this.dom.container);
        var n = a.table(0).node();
        this.s.searchFunction = function (k, r, v, t) {
          if (0 === g.selections.length || k.nTable !== n) return !0;
          k = null;
          g.colExists &&
            ((k = r[g.s.index]),
            "filter" !== h.orthogonal.filter &&
              ((k = g.s.rowData.filterMap.get(v)),
              k instanceof l.fn.dataTable.Api && (k = k.toArray())));
          return g._search(k, v);
        };
        l.fn.dataTable.ext.search.push(this.s.searchFunction);
        if (this.c.clear)
          l(d).on("click", function () {
            g.dom.container
              .find("." + g.classes.search.replace(/\s+/g, "."))
              .each(function () {
                l(this).val("");
                l(this).trigger("input");
              });
            g.clearPane();
          });
        a.on("draw.dtsp", function () {
          g.adjustTopRow();
        });
        a.on("buttons-action", function () {
          g.adjustTopRow();
        });
        a.on("column-reorder.dtsp", function (k, r, v) {
          g.s.index = v.mapping[g.s.index];
        });
        return this;
      }
      m.prototype.addRow = function (a, b, e, d, f, c, g) {
        for (var h, n = 0, k = this.s.indexes; n < k.length; n++) {
          var r = k[n];
          r.filter === b && (h = r.index);
        }
        void 0 === h &&
          ((h = this.s.indexes.length),
          this.s.indexes.push({ filter: b, index: h }));
        return this.s.dtPane.row.add({
          className: g,
          display: "" !== a ? a : this.emptyMessage(),
          filter: b,
          index: h,
          shown: e,
          sort: f,
          total: d,
          type: c,
        });
      };
      m.prototype.adjustTopRow = function () {
        var a = this.dom.container.find(
            "." + this.classes.subRowsContainer.replace(/\s+/g, ".")
          ),
          b = this.dom.container.find(
            "." + this.classes.subRow1.replace(/\s+/g, ".")
          ),
          e = this.dom.container.find(
            "." + this.classes.subRow2.replace(/\s+/g, ".")
          ),
          d = this.dom.container.find(
            "." + this.classes.topRow.replace(/\s+/g, ".")
          );
        (252 > l(a[0]).width() || 252 > l(d[0]).width()) &&
        0 !== l(a[0]).width()
          ? (l(a[0]).addClass(this.classes.narrow),
            l(b[0])
              .addClass(this.classes.narrowSub)
              .removeClass(this.classes.narrowSearch),
            l(e[0])
              .addClass(this.classes.narrowSub)
              .removeClass(this.classes.narrowButton))
          : (l(a[0]).removeClass(this.classes.narrow),
            l(b[0])
              .removeClass(this.classes.narrowSub)
              .addClass(this.classes.narrowSearch),
            l(e[0])
              .removeClass(this.classes.narrowSub)
              .addClass(this.classes.narrowButton));
      };
      m.prototype.clearData = function () {
        this.s.rowData = {
          arrayFilter: [],
          arrayOriginal: [],
          arrayTotals: [],
          bins: {},
          binsOriginal: {},
          binsTotal: {},
          filterMap: new Map(),
          totalOptions: 0,
        };
      };
      m.prototype.clearPane = function () {
        this.s.dtPane.rows({ selected: !0 }).deselect();
        this.updateTable();
        return this;
      };
      m.prototype.destroy = function () {
        l(this.s.dtPane).off(".dtsp");
        l(this.s.dt).off(".dtsp");
        l(this.dom.nameButton).off(".dtsp");
        l(this.dom.countButton).off(".dtsp");
        l(this.dom.clear).off(".dtsp");
        l(this.dom.searchButton).off(".dtsp");
        l(this.dom.container).remove();
        for (
          var a = l.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
          -1 !== a;

        )
          l.fn.dataTable.ext.search.splice(a, 1),
            (a = l.fn.dataTable.ext.search.indexOf(this.s.searchFunction));
        void 0 !== this.s.dtPane && this.s.dtPane.destroy();
        this.s.listSet = !1;
      };
      m.prototype.emptyMessage = function () {
        var a = this.c.i18n.emptyMessage;
        this.c.emptyMessage && (a = this.c.emptyMessage);
        !1 !== this.s.colOpts.emptyMessage &&
          null !== this.s.colOpts.emptyMessage &&
          (a = this.s.colOpts.emptyMessage);
        return this.s.dt.i18n("searchPanes.emptyMessage", a);
      };
      m.prototype.getPaneCount = function () {
        return void 0 !== this.s.dtPane
          ? this.s.dtPane.rows({ selected: !0 }).data().toArray().length
          : 0;
      };
      m.prototype.rebuildPane = function (a, b, e, d) {
        void 0 === a && (a = !1);
        void 0 === b && (b = null);
        void 0 === e && (e = null);
        void 0 === d && (d = !1);
        this.clearData();
        var f = [];
        this.s.serverSelect = [];
        var c = null;
        void 0 !== this.s.dtPane &&
          (d &&
            (this.s.dt.page.info().serverSide
              ? (this.s.serverSelect = this.s.dtPane
                  .rows({ selected: !0 })
                  .data()
                  .toArray())
              : (f = this.s.dtPane.rows({ selected: !0 }).data().toArray())),
          this.s.dtPane.clear().destroy(),
          (c = l(this.dom.container).prev()),
          this.destroy(),
          (this.s.dtPane = void 0),
          l.fn.dataTable.ext.search.push(this.s.searchFunction));
        this.dom.container.removeClass(this.classes.hidden);
        this.s.displayed = !1;
        this._buildPane(
          this.s.dt.page.info().serverSide ? this.s.serverSelect : f,
          a,
          b,
          e,
          c
        );
        return this;
      };
      m.prototype.removePane = function () {
        this.s.displayed = !1;
        l(this.dom.container).hide();
      };
      m.prototype.resize = function (a) {
        this.c.layout = a;
        var b = parseInt(a.split("-")[1], 10);
        l(this.dom.container)
          .removeClass()
          .addClass(this.classes.container)
          .addClass(this.classes.layout + (10 > b ? a : a.split("-")[0] + "-9"))
          .addClass(this.s.colOpts.className)
          .addClass(
            null !== this.customPaneSettings &&
              void 0 !== this.customPaneSettings.className
              ? this.customPaneSettings.className
              : ""
          )
          .addClass(this.classes.show);
        this.adjustTopRow();
      };
      m.prototype.setCascadeRegen = function (a) {
        this.s.cascadeRegen = a;
      };
      m.prototype.setClear = function (a) {
        this.s.clearing = a;
      };
      m.prototype.updatePane = function (a) {
        void 0 === a && (a = !1);
        this.s.updating = !0;
        this._updateCommon(a);
        this.s.updating = !1;
      };
      m.prototype.updateTable = function () {
        this.selections = this.s.dtPane.rows({ selected: !0 }).data().toArray();
        this._searchExtras();
        (this.c.cascadePanes || this.c.viewTotal) && this.updatePane();
      };
      m.prototype._setListeners = function () {
        var a = this,
          b = this.s.rowData,
          e;
        this.s.dtPane.on("select.dtsp", function () {
          clearTimeout(e);
          a.s.dt.page.info().serverSide && !a.s.updating
            ? a.s.serverSelecting ||
              ((a.s.serverSelect = a.s.dtPane
                .rows({ selected: !0 })
                .data()
                .toArray()),
              (a.s.scrollTop = l(
                a.s.dtPane.table().node()
              ).parent()[0].scrollTop),
              (a.s.selectPresent = !0),
              a.s.dt.draw(!1))
            : (l(a.dom.clear)
                .removeClass(a.classes.disabledButton)
                .removeAttr("disabled"),
              a.s.updating ||
                ((a.s.selectPresent = !0),
                a._makeSelection(),
                (a.s.selectPresent = !1)));
        });
        this.s.dtPane.on("deselect.dtsp", function () {
          e = setTimeout(function () {
            a.s.scrollTop = l(a.s.dtPane.table().node()).parent()[0].scrollTop;
            a.s.dt.page.info().serverSide && !a.s.updating
              ? a.s.serverSelecting ||
                ((a.s.serverSelect = a.s.dtPane
                  .rows({ selected: !0 })
                  .data()
                  .toArray()),
                (a.s.deselect = !0),
                a.s.dt.draw(!1))
              : ((a.s.deselect = !0),
                0 ===
                  a.s.dtPane.rows({ selected: !0 }).data().toArray().length &&
                  l(a.dom.clear)
                    .addClass(a.classes.disabledButton)
                    .attr("disabled", "true"),
                a._makeSelection(),
                (a.s.deselect = !1),
                a.s.dt.state.save());
          }, 50);
        });
        this.s.dt.on("stateSaveParams.dtsp", function (d, f, c) {
          if (l.isEmptyObject(c)) a.s.dtPane.state.clear();
          else {
            d = [];
            if (void 0 !== a.s.dtPane) {
              d = a.s.dtPane
                .rows({ selected: !0 })
                .data()
                .map(function (r) {
                  return r.filter.toString();
                })
                .toArray();
              var g = l(a.dom.searchBox).val();
              var h = a.s.dtPane.order();
              var n = b.binsOriginal;
              var k = b.arrayOriginal;
            }
            void 0 === c.searchPanes && (c.searchPanes = {});
            void 0 === c.searchPanes.panes && (c.searchPanes.panes = []);
            for (f = 0; f < c.searchPanes.panes.length; f++)
              c.searchPanes.panes[f].id === a.s.index &&
                (c.searchPanes.panes.splice(f, 1), f--);
            c.searchPanes.panes.push({
              arrayFilter: k,
              bins: n,
              id: a.s.index,
              order: h,
              searchTerm: g,
              selected: d,
            });
          }
        });
        this.s.dtPane.on("user-select.dtsp", function (d, f, c, g, h) {
          h.stopPropagation();
        });
        this.s.dtPane.on("draw.dtsp", function () {
          a.adjustTopRow();
        });
        l(this.dom.nameButton).on("click.dtsp", function () {
          var d = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([0, "asc" === d ? "desc" : "asc"]).draw();
          a.s.dt.state.save();
        });
        l(this.dom.countButton).on("click.dtsp", function () {
          var d = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([1, "asc" === d ? "desc" : "asc"]).draw();
          a.s.dt.state.save();
        });
        l(this.dom.clear).on("click.dtsp", function () {
          a.dom.container
            .find("." + a.classes.search.replace(/ /g, "."))
            .each(function () {
              l(this).val("");
              l(this).trigger("input");
            });
          a.clearPane();
        });
        l(this.dom.searchButton).on("click.dtsp", function () {
          l(a.dom.searchBox).focus();
        });
        l(this.dom.searchBox).on("input.dtsp", function () {
          var d = l(a.dom.searchBox).val();
          a.s.dtPane.search(d).draw();
          0 < d.length ||
          (0 === d.length &&
            0 < a.s.dtPane.rows({ selected: !0 }).data().toArray().length)
            ? a.dom.clear
                .removeClass(a.classes.disabledButton)
                .removeAttr("disabled")
            : a.dom.clear
                .addClass(a.classes.disabledButton)
                .attr("disabled", "true");
          a.s.dt.state.save();
        });
        this.s.dt.state.save();
        return !0;
      };
      m.prototype._addOption = function (a, b, e, d, f, c) {
        if (Array.isArray(a) || a instanceof A.Api)
          if (
            (a instanceof A.Api && ((a = a.toArray()), (b = b.toArray())),
            a.length === b.length)
          )
            for (var g = 0; g < a.length; g++)
              c[a[g]]
                ? c[a[g]]++
                : ((c[a[g]] = 1),
                  f.push({
                    display: b[g],
                    filter: a[g],
                    sort: e[g],
                    type: d[g],
                  })),
                this.s.rowData.totalOptions++;
          else throw Error("display and filter not the same length");
        else
          "string" === typeof this.s.colOpts.orthogonal
            ? (c[a]
                ? c[a]++
                : ((c[a] = 1),
                  f.push({ display: b, filter: a, sort: e, type: d })),
              this.s.rowData.totalOptions++)
            : f.push({ display: b, filter: a, sort: e, type: d });
      };
      m.prototype._buildPane = function (a, b, e, d, f) {
        var c = this;
        void 0 === a && (a = []);
        void 0 === b && (b = !1);
        void 0 === e && (e = null);
        void 0 === d && (d = null);
        void 0 === f && (f = null);
        this.selections = [];
        var g = this.s.dt,
          h = g.column(this.colExists ? this.s.index : 0),
          n = this.s.colOpts,
          k = this.s.rowData,
          r = g.i18n("searchPanes.count", this.c.i18n.count),
          v = g.i18n("searchPanes.countFiltered", this.c.i18n.countFiltered),
          t = g.state.loaded();
        this.s.listSet && (t = g.state());
        if (this.colExists) {
          var u = -1;
          if (t && t.searchPanes && t.searchPanes.panes)
            for (var q = 0; q < t.searchPanes.panes.length; q++)
              if (t.searchPanes.panes[q].id === this.s.index) {
                u = q;
                break;
              }
          if (
            (!1 === n.show || (void 0 !== n.show && !0 !== n.show)) &&
            -1 === u
          )
            return (
              this.dom.container.addClass(this.classes.hidden),
              (this.s.displayed = !1)
            );
          if (!0 === n.show || -1 !== u) this.s.displayed = !0;
          if (
            !this.s.dt.page.info().serverSide &&
            (null === e ||
              null === e.searchPanes ||
              null === e.searchPanes.options)
          ) {
            if (0 === k.arrayFilter.length) {
              this._populatePane(b);
              this.s.rowData.totalOptions = 0;
              this._detailsPane();
              if (t && t.searchPanes && t.searchPanes.panes && -1 === u) {
                this.dom.container.addClass(this.classes.hidden);
                this.s.displayed = !1;
                return;
              }
              k.arrayOriginal = k.arrayTotals;
              k.binsOriginal = k.binsTotal;
            }
            q = Object.keys(k.binsOriginal).length;
            b = this._uniqueRatio(q, g.rows()[0].length);
            if (
              !1 === this.s.displayed &&
              ((void 0 === n.show && null === n.threshold
                ? b > this.c.threshold
                : b > n.threshold) ||
                (!0 !== n.show && 1 >= q))
            ) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return;
            }
            this.c.viewTotal && 0 === k.arrayTotals.length
              ? ((this.s.rowData.totalOptions = 0), this._detailsPane())
              : (k.binsTotal = k.bins);
            this.dom.container.addClass(this.classes.show);
            this.s.displayed = !0;
          } else if (
            null !== e &&
            null !== e.searchPanes &&
            null !== e.searchPanes.options
          ) {
            if (void 0 !== e.tableLength)
              (this.s.tableLength = e.tableLength),
                (this.s.rowData.totalOptions = this.s.tableLength);
            else if (
              null === this.s.tableLength ||
              g.rows()[0].length > this.s.tableLength
            )
              (this.s.tableLength = g.rows()[0].length),
                (this.s.rowData.totalOptions = this.s.tableLength);
            b = g.column(this.s.index).dataSrc();
            if (void 0 !== e.searchPanes.options[b])
              for (q = 0, b = e.searchPanes.options[b]; q < b.length; q++)
                (u = b[q]),
                  this.s.rowData.arrayFilter.push({
                    display: u.label,
                    filter: u.value,
                    sort: u.label,
                    type: u.label,
                  }),
                  (this.s.rowData.bins[u.value] =
                    this.c.viewTotal || this.c.cascadePanes
                      ? u.count
                      : u.total),
                  (this.s.rowData.binsTotal[u.value] = u.total);
            q = Object.keys(k.binsTotal).length;
            b = this._uniqueRatio(q, this.s.tableLength);
            if (
              !1 === this.s.displayed &&
              ((void 0 === n.show && null === n.threshold
                ? b > this.c.threshold
                : b > n.threshold) ||
                (!0 !== n.show && 1 >= q))
            ) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return;
            }
            this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter;
            this.s.rowData.binsOriginal = this.s.rowData.bins;
            this.s.displayed = !0;
          }
        } else this.s.displayed = !0;
        this._displayPane();
        if (!this.s.listSet)
          this.dom.dtP.on("stateLoadParams.dt", function (x, C, y) {
            l.isEmptyObject(g.state.loaded()) &&
              l.each(y, function (z, I) {
                delete y[z];
              });
          });
        null !== f && 0 < l(this.dom.panesContainer).has(f).length
          ? l(this.dom.container).insertAfter(f)
          : l(this.dom.panesContainer).prepend(this.dom.container);
        q = l.fn.dataTable.ext.errMode;
        l.fn.dataTable.ext.errMode = "none";
        f = A.Scroller;
        this.s.dtPane = l(this.dom.dtP).DataTable(
          l.extend(
            !0,
            {
              columnDefs: [
                {
                  className: "dtsp-nameColumn",
                  data: "display",
                  render: function (x, C, y) {
                    if ("sort" === C) return y.sort;
                    if ("type" === C) return y.type;
                    var z =
                      ((c.s.filteringActive || c.s.showFiltered) &&
                        c.c.viewTotal) ||
                      (c.c.viewTotal && c.s.forceViewTotal)
                        ? v.replace(/{total}/, y.total)
                        : r.replace(/{total}/, y.total);
                    for (
                      z = z.replace(/{shown}/, y.shown);
                      -1 !== z.indexOf("{total}");

                    )
                      z = z.replace(/{total}/, y.total);
                    for (; -1 !== z.indexOf("{shown}"); )
                      z = z.replace(/{shown}/, y.shown);
                    y = '<span class="' + c.classes.pill + '">' + z + "</span>";
                    (c.c.viewCount && n.viewCount) || (y = "");
                    return "filter" === C
                      ? "string" === typeof x && null !== x.match(/<[^>]*>/)
                        ? x.replace(/<[^>]*>/g, "")
                        : x
                      : '<div class="' +
                          c.classes.nameCont +
                          '"><span title="' +
                          ("string" === typeof x && null !== x.match(/<[^>]*>/)
                            ? x.replace(/<[^>]*>/g, "")
                            : x) +
                          '" class="' +
                          c.classes.name +
                          '">' +
                          x +
                          "</span>" +
                          y +
                          "</div>";
                  },
                  targets: 0,
                  type:
                    void 0 !== g.settings()[0].aoColumns[this.s.index]
                      ? g.settings()[0].aoColumns[this.s.index]._sManualType
                      : null,
                },
                {
                  className: "dtsp-countColumn " + this.classes.badgePill,
                  data: "shown",
                  orderData: [1, 2],
                  searchable: !1,
                  targets: 1,
                  visible: !1,
                },
                { data: "total", searchable: !1, targets: 2, visible: !1 },
              ],
              deferRender: !0,
              dom: "t",
              info: !1,
              language: this.s.dt.settings()[0].oLanguage,
              paging: f ? !0 : !1,
              scrollX: !1,
              scrollY: "200px",
              scroller: f ? !0 : !1,
              select: !0,
              stateSave: g.settings()[0].oFeatures.bStateSave ? !0 : !1,
            },
            this.c.dtOpts,
            void 0 !== n ? n.dtOpts : {},
            void 0 === this.s.colOpts.options && this.colExists
              ? void 0
              : {
                  createdRow: function (x, C, y) {
                    l(x).addClass(C.className);
                  },
                },
            null !== this.customPaneSettings &&
              void 0 !== this.customPaneSettings.dtOpts
              ? this.customPaneSettings.dtOpts
              : {},
            l.fn.dataTable.versionCheck("2")
              ? {
                  layout: {
                    bottomLeft: null,
                    bottomRight: null,
                    topLeft: null,
                    topRight: null,
                  },
                }
              : {}
          )
        );
        l(this.dom.dtP).addClass(this.classes.table);
        f = "Custom Pane";
        this.customPaneSettings && this.customPaneSettings.header
          ? (f = this.customPaneSettings.header)
          : n.header
          ? (f = n.header)
          : this.colExists &&
            (f = l.fn.dataTable.versionCheck("2")
              ? g.column(this.s.index).title()
              : g.settings()[0].aoColumns[this.s.index].sTitle);
        this.dom.searchBox.attr("placeholder", f);
        l.fn.dataTable.select.init(this.s.dtPane);
        l.fn.dataTable.ext.errMode = q;
        if (this.colExists) {
          h = (h = h.search()) ? h.substr(1, h.length - 2).split("|") : [];
          var w = 0;
          k.arrayFilter.forEach(function (x) {
            "" === x.filter && w++;
          });
          q = 0;
          for (f = k.arrayFilter.length; q < f; q++) {
            h = !1;
            u = 0;
            for (var D = this.s.serverSelect; u < D.length; u++)
              (b = D[u]), b.filter === k.arrayFilter[q].filter && (h = !0);
            if (
              this.s.dt.page.info().serverSide &&
              (!this.c.cascadePanes ||
                (this.c.cascadePanes &&
                  0 !== k.bins[k.arrayFilter[q].filter]) ||
                (this.c.cascadePanes && null !== d) ||
                h)
            )
              for (
                h = this.addRow(
                  k.arrayFilter[q].display,
                  k.arrayFilter[q].filter,
                  d
                    ? k.binsTotal[k.arrayFilter[q].filter]
                    : k.bins[k.arrayFilter[q].filter],
                  this.c.viewTotal || d
                    ? String(k.binsTotal[k.arrayFilter[q].filter])
                    : k.bins[k.arrayFilter[q].filter],
                  k.arrayFilter[q].sort,
                  k.arrayFilter[q].type
                ),
                  u = 0,
                  D = this.s.serverSelect;
                u < D.length;
                u++
              )
                (b = D[u]),
                  b.filter === k.arrayFilter[q].filter &&
                    ((this.s.serverSelecting = !0),
                    h.select(),
                    (this.s.serverSelecting = !1));
            else
              this.s.dt.page.info().serverSide ||
              !k.arrayFilter[q] ||
              (void 0 === k.bins[k.arrayFilter[q].filter] &&
                this.c.cascadePanes)
                ? this.s.dt.page.info().serverSide ||
                  this.addRow("", w, w, "", "", "")
                : this.addRow(
                    k.arrayFilter[q].display,
                    k.arrayFilter[q].filter,
                    k.bins[k.arrayFilter[q].filter],
                    k.binsTotal[k.arrayFilter[q].filter],
                    k.arrayFilter[q].sort,
                    k.arrayFilter[q].type
                  );
          }
        }
        A.select.init(this.s.dtPane);
        (void 0 !== n.options ||
          (null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.options)) &&
          this._getComparisonRows();
        this.s.dtPane.draw();
        this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
        this.adjustTopRow();
        this.s.listSet || (this._setListeners(), (this.s.listSet = !0));
        for (d = 0; d < a.length; d++)
          if (((k = a[d]), void 0 !== k))
            for (
              q = 0, f = this.s.dtPane.rows().indexes().toArray();
              q < f.length;
              q++
            )
              (h = f[q]),
                void 0 !== this.s.dtPane.row(h).data() &&
                  k.filter === this.s.dtPane.row(h).data().filter &&
                  (this.s.dt.page.info().serverSide
                    ? ((this.s.serverSelecting = !0),
                      this.s.dtPane.row(h).select(),
                      (this.s.serverSelecting = !1))
                    : this.s.dtPane.row(h).select());
        this.s.dt.page.info().serverSide &&
          this.s.dtPane.search(l(this.dom.searchBox).val()).draw();
        if (
          t &&
          t.searchPanes &&
          t.searchPanes.panes &&
          (null === e || 1 === e.draw)
        )
          for (
            this.c.cascadePanes || this._reloadSelect(t),
              e = 0,
              t = t.searchPanes.panes;
            e < t.length;
            e++
          )
            (a = t[e]),
              a.id === this.s.index &&
                (l(this.dom.searchBox).val(a.searchTerm),
                l(this.dom.searchBox).trigger("input"),
                this.s.dtPane.order(a.order).draw());
        this.s.dt.state.save();
        return !0;
      };
      m.prototype._detailsPane = function () {
        var a = this.s.dt;
        this.s.rowData.arrayTotals = [];
        this.s.rowData.binsTotal = {};
        var b = this.s.dt.settings()[0];
        a = a.rows().indexes();
        if (!this.s.dt.page.info().serverSide)
          for (var e = 0; e < a.length; e++)
            this._populatePaneArray(
              a[e],
              this.s.rowData.arrayTotals,
              b,
              this.s.rowData.binsTotal
            );
      };
      m.prototype._displayPane = function () {
        var a = this.dom.container,
          b = this.s.colOpts,
          e = parseInt(this.c.layout.split("-")[1], 10);
        l(this.dom.topRow).empty();
        l(this.dom.dtP).empty();
        l(this.dom.topRow).addClass(this.classes.topRow);
        3 < e && l(this.dom.container).addClass(this.classes.smallGap);
        l(this.dom.topRow).addClass(this.classes.subRowsContainer);
        l(this.dom.upper).appendTo(this.dom.topRow);
        l(this.dom.lower).appendTo(this.dom.topRow);
        l(this.dom.searchCont).appendTo(this.dom.upper);
        l(this.dom.buttonGroup).appendTo(this.dom.lower);
        (!1 === this.c.dtOpts.searching ||
          (void 0 !== b.dtOpts && !1 === b.dtOpts.searching) ||
          !this.c.controls ||
          !b.controls ||
          (null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.dtOpts &&
            void 0 !== this.customPaneSettings.dtOpts.searching &&
            !this.customPaneSettings.dtOpts.searching)) &&
          l(this.dom.searchBox)
            .removeClass(this.classes.paneInputButton)
            .addClass(this.classes.disabledButton)
            .attr("disabled", "true");
        l(this.dom.searchBox).appendTo(this.dom.searchCont);
        this._searchContSetup();
        this.c.clear &&
          this.c.controls &&
          b.controls &&
          l(this.dom.clear).appendTo(this.dom.buttonGroup);
        this.c.orderable &&
          b.orderable &&
          this.c.controls &&
          b.controls &&
          l(this.dom.nameButton).appendTo(this.dom.buttonGroup);
        this.c.viewCount &&
          b.viewCount &&
          this.c.orderable &&
          b.orderable &&
          this.c.controls &&
          b.controls &&
          l(this.dom.countButton).appendTo(this.dom.buttonGroup);
        l(this.dom.topRow).prependTo(this.dom.container);
        l(a).append(this.dom.dtP);
        l(a).show();
      };
      m.prototype._getBonusOptions = function () {
        return l.extend(
          !0,
          {},
          m.defaults,
          { orthogonal: { threshold: null }, threshold: null },
          void 0 !== this.c ? this.c : {}
        );
      };
      m.prototype._getComparisonRows = function () {
        var a = this.s.colOpts;
        a =
          void 0 !== a.options
            ? a.options
            : null !== this.customPaneSettings &&
              void 0 !== this.customPaneSettings.options
            ? this.customPaneSettings.options
            : void 0;
        if (void 0 !== a) {
          var b = this.s.dt.rows({ search: "applied" }).data().toArray(),
            e = this.s.dt.rows({ search: "applied" }),
            d = this.s.dt.rows().data().toArray(),
            f = this.s.dt.rows(),
            c = [];
          this.s.dtPane.clear();
          for (var g = 0; g < a.length; g++) {
            var h = a[g],
              n = "" !== h.label ? h.label : this.emptyMessage(),
              k = h.className,
              r = n,
              v = "function" === typeof h.value ? h.value : [],
              t = 0,
              u = n,
              q = 0;
            if ("function" === typeof h.value) {
              for (var w = 0; w < b.length; w++)
                h.value.call(this.s.dt, b[w], e[0][w]) && t++;
              for (w = 0; w < d.length; w++)
                h.value.call(this.s.dt, d[w], f[0][w]) && q++;
              "function" !== typeof v && v.push(h.filter);
            }
            (!this.c.cascadePanes || (this.c.cascadePanes && 0 !== t)) &&
              c.push(this.addRow(r, v, t, q, u, n, k));
          }
          return c;
        }
      };
      m.prototype._getOptions = function () {
        var a = this.s.dt.settings()[0].aoColumns[this.s.index].searchPanes,
          b = l.extend(
            !0,
            {},
            m.defaults,
            {
              emptyMessage: !1,
              orthogonal: { threshold: null },
              threshold: null,
            },
            a
          );
        void 0 !== a &&
          void 0 !== a.hideCount &&
          void 0 === a.viewCount &&
          (b.viewCount = !a.hideCount);
        return b;
      };
      m.prototype._makeSelection = function () {
        this.updateTable();
        this.s.updating = !0;
        this.s.dt.draw();
        this.s.updating = !1;
      };
      m.prototype._populatePane = function (a) {
        void 0 === a && (a = !1);
        var b = this.s.dt;
        this.s.rowData.arrayFilter = [];
        this.s.rowData.bins = {};
        var e = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide) {
          var d = 0;
          for (
            a = (
              (!this.c.cascadePanes && !this.c.viewTotal) ||
              this.s.clearing ||
              a
                ? b.rows().indexes()
                : b.rows({ search: "applied" }).indexes()
            ).toArray();
            d < a.length;
            d++
          )
            this._populatePaneArray(a[d], this.s.rowData.arrayFilter, e);
        }
      };
      m.prototype._populatePaneArray = function (a, b, e, d) {
        void 0 === d && (d = this.s.rowData.bins);
        var f = this.s.colOpts;
        if ("string" === typeof f.orthogonal)
          (e = e.oApi._fnGetCellData(e, a, this.s.index, f.orthogonal)),
            this.s.rowData.filterMap.set(a, e),
            this._addOption(e, e, e, e, b, d);
        else {
          var c = e.oApi._fnGetCellData(
            e,
            a,
            this.s.index,
            f.orthogonal.search
          );
          null === c && (c = "");
          "string" === typeof c && (c = c.replace(/<[^>]*>/g, ""));
          this.s.rowData.filterMap.set(a, c);
          d[c]
            ? d[c]++
            : ((d[c] = 1),
              this._addOption(
                c,
                e.oApi._fnGetCellData(e, a, this.s.index, f.orthogonal.display),
                e.oApi._fnGetCellData(e, a, this.s.index, f.orthogonal.sort),
                e.oApi._fnGetCellData(e, a, this.s.index, f.orthogonal.type),
                b,
                d
              ));
          this.s.rowData.totalOptions++;
        }
      };
      m.prototype._reloadSelect = function (a) {
        if (void 0 !== a) {
          for (var b, e = 0; e < a.searchPanes.panes.length; e++)
            if (a.searchPanes.panes[e].id === this.s.index) {
              b = e;
              break;
            }
          if (void 0 !== b) {
            e = this.s.dtPane;
            var d = e
                .rows({ order: "index" })
                .data()
                .map(function (g) {
                  return null !== g.filter ? g.filter.toString() : null;
                })
                .toArray(),
              f = 0;
            for (a = a.searchPanes.panes[b].selected; f < a.length; f++) {
              b = a[f];
              var c = -1;
              null !== b && (c = d.indexOf(b.toString()));
              -1 < c &&
                ((this.s.serverSelecting = !0),
                e.row(c).select(),
                (this.s.serverSelecting = !1));
            }
          }
        }
      };
      m.prototype._search = function (a, b) {
        for (
          var e = this.s.colOpts, d = this.s.dt, f = 0, c = this.selections;
          f < c.length;
          f++
        ) {
          var g = c[f];
          "string" === typeof g.filter &&
            "string" === typeof a &&
            (g.filter = g.filter
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"'));
          if (Array.isArray(a)) {
            if (-1 !== a.indexOf(g.filter)) return !0;
          } else if ("function" === typeof g.filter)
            if (g.filter.call(d, d.row(b).data(), b)) {
              if ("or" === e.combiner) return !0;
            } else {
              if ("and" === e.combiner) return !1;
            }
          else if (
            a === g.filter ||
            (("string" !== typeof a || 0 !== a.length) && a == g.filter) ||
            (null === g.filter && "string" === typeof a && "" === a)
          )
            return !0;
        }
        return "and" === e.combiner ? !0 : !1;
      };
      m.prototype._searchContSetup = function () {
        this.c.controls &&
          this.s.colOpts.controls &&
          l(this.dom.searchButton).appendTo(this.dom.searchLabelCont);
        !1 === this.c.dtOpts.searching ||
          !1 === this.s.colOpts.dtOpts.searching ||
          (null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.dtOpts &&
            void 0 !== this.customPaneSettings.dtOpts.searching &&
            !this.customPaneSettings.dtOpts.searching) ||
          l(this.dom.searchLabelCont).appendTo(this.dom.searchCont);
      };
      m.prototype._searchExtras = function () {
        var a = this.s.updating;
        this.s.updating = !0;
        var b = this.s.dtPane
            .rows({ selected: !0 })
            .data()
            .pluck("filter")
            .toArray(),
          e = b.indexOf(this.emptyMessage()),
          d = l(this.s.dtPane.table().container());
        -1 < e && (b[e] = "");
        0 < b.length
          ? d.addClass(this.classes.selected)
          : 0 === b.length && d.removeClass(this.classes.selected);
        this.s.updating = a;
      };
      m.prototype._uniqueRatio = function (a, b) {
        return 0 < b &&
          ((0 < this.s.rowData.totalOptions &&
            !this.s.dt.page.info().serverSide) ||
            (this.s.dt.page.info().serverSide && 0 < this.s.tableLength))
          ? a / this.s.rowData.totalOptions
          : 1;
      };
      m.prototype._updateCommon = function (a) {
        void 0 === a && (a = !1);
        if (
          !(
            this.s.dt.page.info().serverSide ||
            void 0 === this.s.dtPane ||
            (this.s.filteringActive && !this.c.cascadePanes && !0 !== a) ||
            (!0 === this.c.cascadePanes && !0 === this.s.selectPresent) ||
            (this.s.lastSelect && this.s.lastCascade)
          )
        ) {
          a = this.s.colOpts;
          var b = this.s.dtPane.rows({ selected: !0 }).data().toArray(),
            e = this.s.rowData;
          this.s.dtPane.clear();
          if (this.colExists) {
            0 === e.arrayFilter.length
              ? this._populatePane(!this.s.filteringActive)
              : this.c.cascadePanes &&
                this.s.dt.rows().data().toArray().length ===
                  this.s.dt.rows({ search: "applied" }).data().toArray().length
              ? ((e.arrayFilter = e.arrayOriginal), (e.bins = e.binsOriginal))
              : (this.c.viewTotal || this.c.cascadePanes) &&
                this._populatePane(!this.s.filteringActive);
            this.c.viewTotal ? this._detailsPane() : (e.binsTotal = e.bins);
            this.c.viewTotal &&
              !this.c.cascadePanes &&
              (e.arrayFilter = e.arrayTotals);
            for (
              var d = function (h) {
                  if (
                    h &&
                    ((void 0 !== e.bins[h.filter] &&
                      0 !== e.bins[h.filter] &&
                      f.c.cascadePanes) ||
                      !f.c.cascadePanes ||
                      f.s.clearing)
                  ) {
                    var n = f.addRow(
                        h.display,
                        h.filter,
                        f.c.viewTotal
                          ? void 0 !== e.bins[h.filter]
                            ? e.bins[h.filter]
                            : 0
                          : e.bins[h.filter],
                        f.c.viewTotal
                          ? String(e.binsTotal[h.filter])
                          : e.bins[h.filter],
                        h.sort,
                        h.type
                      ),
                      k = b.findIndex(function (r) {
                        return r.filter === h.filter;
                      });
                    -1 !== k && (n.select(), b.splice(k, 1));
                  }
                },
                f = this,
                c = 0,
                g = e.arrayFilter;
              c < g.length;
              c++
            )
              d(g[c]);
          }
          if (
            (void 0 !== a.searchPanes && void 0 !== a.searchPanes.options) ||
            void 0 !== a.options ||
            (null !== this.customPaneSettings &&
              void 0 !== this.customPaneSettings.options)
          )
            for (
              d = function (h) {
                var n = b.findIndex(function (k) {
                  if (k.display === h.data().display) return !0;
                });
                -1 !== n && (h.select(), b.splice(n, 1));
              },
                c = 0,
                g = this._getComparisonRows();
              c < g.length;
              c++
            )
              (a = g[c]), d(a);
          for (d = 0; d < b.length; d++)
            (a = b[d]),
              (a = this.addRow(
                a.display,
                a.filter,
                0,
                this.c.viewTotal ? a.total : 0,
                a.display,
                a.display
              )),
              (this.s.updating = !0),
              a.select(),
              (this.s.updating = !1);
          this.s.dtPane.draw();
          this.s.dtPane.table().node().parentNode.scrollTop = this.s.scrollTop;
        }
      };
      m.version = "1.3.0";
      m.classes = {
        buttonGroup: "dtsp-buttonGroup",
        buttonSub: "dtsp-buttonSub",
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        clearButton: "clearButton",
        container: "dtsp-searchPane",
        countButton: "dtsp-countButton",
        disabledButton: "dtsp-disabledButton",
        hidden: "dtsp-hidden",
        hide: "dtsp-hide",
        layout: "dtsp-",
        name: "dtsp-name",
        nameButton: "dtsp-nameButton",
        nameCont: "dtsp-nameCont",
        narrow: "dtsp-narrow",
        paneButton: "dtsp-paneButton",
        paneInputButton: "dtsp-paneInputButton",
        pill: "dtsp-pill",
        search: "dtsp-search",
        searchCont: "dtsp-searchCont",
        searchIcon: "dtsp-searchIcon",
        searchLabelCont: "dtsp-searchButtonCont",
        selected: "dtsp-selected",
        smallGap: "dtsp-smallGap",
        subRow1: "dtsp-subRow1",
        subRow2: "dtsp-subRow2",
        subRowsContainer: "dtsp-subRowsContainer",
        title: "dtsp-title",
        topRow: "dtsp-topRow",
      };
      m.defaults = {
        cascadePanes: !1,
        clear: !0,
        combiner: "or",
        container: function (a) {
          return a.table().container();
        },
        controls: !0,
        dtOpts: {},
        emptyMessage: null,
        hideCount: !1,
        i18n: {
          clearPane: "&times;",
          count: "{total}",
          countFiltered: "{shown} ({total})",
          emptyMessage: "<em>No data</em>",
        },
        layout: "auto",
        name: void 0,
        orderable: !0,
        orthogonal: {
          display: "display",
          filter: "filter",
          hideCount: !1,
          search: "filter",
          show: void 0,
          sort: "sort",
          threshold: 0.6,
          type: "type",
          viewCount: !0,
        },
        preSelect: [],
        threshold: 0.6,
        viewCount: !0,
        viewTotal: !1,
      };
      return m;
    })(),
    p,
    B,
    F = (function () {
      function m(a, b, e) {
        var d = this;
        void 0 === e && (e = !1);
        this.regenerating = !1;
        if (!B || !B.versionCheck || !B.versionCheck("1.10.0"))
          throw Error("SearchPane requires DataTables 1.10 or newer");
        if (!B.select) throw Error("SearchPane requires Select");
        var f = new B.Api(a);
        this.classes = p.extend(!0, {}, m.classes);
        this.c = p.extend(!0, {}, m.defaults, b);
        this.dom = {
          clearAll: p('<button type="button">Clear All</button>').addClass(
            this.classes.clearAll
          ),
          container: p("<div/>")
            .addClass(this.classes.panes)
            .text(f.i18n("searchPanes.loadMessage", this.c.i18n.loadMessage)),
          emptyMessage: p("<div/>").addClass(this.classes.emptyMessage),
          options: p("<div/>").addClass(this.classes.container),
          panes: p("<div/>").addClass(this.classes.container),
          title: p("<div/>").addClass(this.classes.title),
          titleRow: p("<div/>").addClass(this.classes.titleRow),
          wrapper: p("<div/>"),
        };
        this.s = {
          colOpts: [],
          dt: f,
          filterCount: 0,
          filterPane: -1,
          page: 0,
          panes: [],
          selectionList: [],
          serverData: {},
          stateRead: !1,
          updating: !1,
        };
        if (void 0 === f.settings()[0]._searchPanes) {
          this._getState();
          if (this.s.dt.page.info().serverSide)
            f.on("preXhr.dt", function (c, g, h) {
              void 0 === h.searchPanes && (h.searchPanes = {});
              void 0 === h.searchPanes_null && (h.searchPanes_null = {});
              c = 0;
              for (g = d.s.selectionList; c < g.length; c++) {
                var n = g[c],
                  k = d.s.dt.column(n.index).dataSrc();
                void 0 === h.searchPanes[k] && (h.searchPanes[k] = {});
                void 0 === h.searchPanes_null[k] &&
                  (h.searchPanes_null[k] = {});
                for (var r = 0; r < n.rows.length; r++)
                  (h.searchPanes[k][r] = n.rows[r].filter),
                    null === h.searchPanes[k][r] &&
                      (h.searchPanes_null[k][r] = !0);
              }
            });
          f.on("xhr", function (c, g, h, n) {
            h &&
              h.searchPanes &&
              h.searchPanes.options &&
              ((d.s.serverData = h),
              (d.s.serverData.tableLength = h.recordsTotal),
              d._serverTotals());
          });
          f.settings()[0]._searchPanes = this;
          this.dom.clearAll.text(
            f.i18n("searchPanes.clearMessage", this.c.i18n.clearMessage)
          );
          if (this.s.dt.settings()[0]._bInitComplete || e)
            this._paneDeclare(f, a, b);
          else
            f.one("preInit.dt", function (c) {
              d._paneDeclare(f, a, b);
            });
          return this;
        }
      }
      m.prototype.clearSelections = function () {
        this.dom.container
          .find("." + this.classes.search.replace(/\s+/g, "."))
          .each(function () {
            p(this).val("");
            p(this).trigger("input");
          });
        for (var a = [], b = 0, e = this.s.panes; b < e.length; b++) {
          var d = e[b];
          void 0 !== d.s.dtPane && a.push(d.clearPane());
        }
        return a;
      };
      m.prototype.getNode = function () {
        return this.dom.container;
      };
      m.prototype.rebuild = function (a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        p(this.dom.emptyMessage).remove();
        var e = [];
        !1 === a && p(this.dom.panes).empty();
        for (var d = 0, f = this.s.panes; d < f.length; d++) {
          var c = f[d];
          if (!1 === a || c.s.index === a)
            c.clearData(),
              e.push(
                c.rebuildPane(
                  void 0 !==
                    this.s.selectionList[this.s.selectionList.length - 1]
                    ? c.s.index ===
                        this.s.selectionList[this.s.selectionList.length - 1]
                          .index
                    : !1,
                  this.s.dt.page.info().serverSide ? this.s.serverData : void 0,
                  null,
                  b
                )
              ),
              p(this.dom.panes).append(c.dom.container);
        }
        this.c.cascadePanes || this.c.viewTotal
          ? this.redrawPanes(!0)
          : this._updateSelection();
        this._updateFilterCount();
        this._attachPaneContainer();
        this.s.dt.draw(!b);
        this.resizePanes();
        return 1 === e.length ? e[0] : e;
      };
      m.prototype.redrawPanes = function (a) {
        void 0 === a && (a = !1);
        var b = this.s.dt;
        if (!this.s.updating && !this.s.dt.page.info().serverSide) {
          for (
            var e = !0,
              d = this.s.filterPane,
              f = null,
              c = 0,
              g = this.s.panes;
            c < g.length;
            c++
          ) {
            var h = g[c];
            void 0 !== h.s.dtPane &&
              (f += h.s.dtPane.rows({ selected: !0 }).data().toArray().length);
          }
          if (
            0 === f &&
            b.rows({ search: "applied" }).data().toArray().length ===
              b.rows().data().toArray().length
          )
            e = !1;
          else if (this.c.viewTotal) {
            c = 0;
            for (g = this.s.panes; c < g.length; c++)
              if (((h = g[c]), void 0 !== h.s.dtPane)) {
                var n = h.s.dtPane
                  .rows({ selected: !0 })
                  .data()
                  .toArray().length;
                if (0 === n)
                  for (var k = 0, r = this.s.selectionList; k < r.length; k++) {
                    var v = r[k];
                    v.index === h.s.index &&
                      0 !== v.rows.length &&
                      (n = v.rows.length);
                  }
                0 < n && -1 === d ? (d = h.s.index) : 0 < n && (d = null);
              }
            0 === f && (d = null);
          }
          g = void 0;
          c = [];
          if (this.regenerating) {
            b = -1;
            1 === c.length && null !== f && 0 !== f && (b = c[0].index);
            a = 0;
            for (c = this.s.panes; a < c.length; a++)
              if (((h = c[a]), void 0 !== h.s.dtPane)) {
                g = !0;
                h.s.filteringActive = !0;
                if (
                  (-1 !== d && null !== d && d === h.s.index) ||
                  !1 === e ||
                  h.s.index === b
                )
                  (g = !1), (h.s.filteringActive = !1);
                h.updatePane(g ? e : g);
              }
            this._updateFilterCount();
          } else {
            n = 0;
            for (k = this.s.panes; n < k.length; n++)
              if (((h = k[n]), h.s.selectPresent)) {
                this.s.selectionList.push({
                  index: h.s.index,
                  protect: !1,
                  rows: h.s.dtPane.rows({ selected: !0 }).data().toArray(),
                });
                b.state.save();
                break;
              } else
                h.s.deselect &&
                  ((g = h.s.index),
                  (r = h.s.dtPane.rows({ selected: !0 }).data().toArray()),
                  0 < r.length &&
                    this.s.selectionList.push({
                      index: h.s.index,
                      protect: !0,
                      rows: r,
                    }));
            if (0 < this.s.selectionList.length)
              for (
                b = this.s.selectionList[this.s.selectionList.length - 1].index,
                  n = 0,
                  k = this.s.panes;
                n < k.length;
                n++
              )
                (h = k[n]), (h.s.lastSelect = h.s.index === b);
            for (h = 0; h < this.s.selectionList.length; h++)
              if (
                this.s.selectionList[h].index !== g ||
                !0 === this.s.selectionList[h].protect
              ) {
                b = !1;
                for (n = h + 1; n < this.s.selectionList.length; n++)
                  this.s.selectionList[n].index ===
                    this.s.selectionList[h].index && (b = !0);
                b ||
                  (c.push(this.s.selectionList[h]),
                  (this.s.selectionList[h].protect = !1));
              }
            b = -1;
            1 === c.length && null !== f && 0 !== f && (b = c[0].index);
            n = 0;
            for (k = this.s.panes; n < k.length; n++)
              if (((h = k[n]), void 0 !== h.s.dtPane)) {
                g = !0;
                h.s.filteringActive = !0;
                if (
                  (-1 !== d && null !== d && d === h.s.index) ||
                  !1 === e ||
                  h.s.index === b
                )
                  (g = !1), (h.s.filteringActive = !1);
                h.updatePane(g ? e : !1);
              }
            this._updateFilterCount();
            if (0 < c.length && (c.length < this.s.selectionList.length || a))
              for (
                this._cascadeRegen(c, f),
                  b = c[c.length - 1].index,
                  d = 0,
                  a = this.s.panes;
                d < a.length;
                d++
              )
                (h = a[d]), (h.s.lastSelect = h.s.index === b);
            else if (0 < c.length)
              for (h = 0, a = this.s.panes; h < a.length; h++)
                if (((c = a[h]), void 0 !== c.s.dtPane)) {
                  g = !0;
                  c.s.filteringActive = !0;
                  if (
                    (-1 !== d && null !== d && d === c.s.index) ||
                    !1 === e ||
                    c.s.index === b
                  )
                    (g = !1), (c.s.filteringActive = !1);
                  c.updatePane(g ? e : g);
                }
          }
          (e && 0 !== f) || (this.s.selectionList = []);
        }
      };
      m.prototype.resizePanes = function () {
        if ("auto" === this.c.layout) {
          var a = p(this.s.dt.searchPanes.container()).width(),
            b = Math.floor(a / 260);
          a = 1;
          for (var e = 0, d = [], f = 0, c = this.s.panes; f < c.length; f++) {
            var g = c[f];
            g.s.displayed && d.push(g.s.index);
          }
          g = d.length;
          if (b === g) a = b;
          else
            for (; 1 < b; b--)
              if (((f = g % b), 0 === f)) {
                a = b;
                e = 0;
                break;
              } else f > e && ((a = b), (e = f));
          d = 0 !== e ? d.slice(d.length - e, d.length) : [];
          b = 0;
          for (f = this.s.panes; b < f.length; b++)
            (g = f[b]),
              g.s.displayed &&
                ((c = "columns-" + (-1 === d.indexOf(g.s.index) ? a : e)),
                g.resize(c));
        } else
          for (a = 0, e = this.s.panes; a < e.length; a++)
            (g = e[a]), g.adjustTopRow();
        return this;
      };
      m.prototype._attach = function () {
        var a = this;
        p(this.dom.container).removeClass(this.classes.hide);
        p(this.dom.titleRow).removeClass(this.classes.hide);
        p(this.dom.titleRow).remove();
        p(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear &&
          (p(this.dom.clearAll).appendTo(this.dom.titleRow),
          p(this.dom.clearAll).on("click.dtsps", function () {
            a.clearSelections();
          }));
        p(this.dom.titleRow).appendTo(this.dom.container);
        for (var b = 0, e = this.s.panes; b < e.length; b++)
          p(e[b].dom.container).appendTo(this.dom.panes);
        p(this.dom.panes).appendTo(this.dom.container);
        0 === p("div." + this.classes.container).length &&
          p(this.dom.container).prependTo(this.s.dt);
        return this.dom.container;
      };
      m.prototype._attachExtras = function () {
        p(this.dom.container).removeClass(this.classes.hide);
        p(this.dom.titleRow).removeClass(this.classes.hide);
        p(this.dom.titleRow).remove();
        p(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear && p(this.dom.clearAll).appendTo(this.dom.titleRow);
        p(this.dom.titleRow).appendTo(this.dom.container);
        return this.dom.container;
      };
      m.prototype._attachMessage = function () {
        try {
          var a = this.s.dt.i18n(
            "searchPanes.emptyPanes",
            this.c.i18n.emptyPanes
          );
        } catch (b) {
          a = null;
        }
        if (null === a)
          p(this.dom.container).addClass(this.classes.hide),
            p(this.dom.titleRow).removeClass(this.classes.hide);
        else
          return (
            p(this.dom.container).removeClass(this.classes.hide),
            p(this.dom.titleRow).addClass(this.classes.hide),
            p(this.dom.emptyMessage).text(a),
            this.dom.emptyMessage.appendTo(this.dom.container),
            this.dom.container
          );
      };
      m.prototype._attachPaneContainer = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++)
          if (!0 === b[a].s.displayed) return this._attach();
        return this._attachMessage();
      };
      m.prototype._cascadeRegen = function (a, b) {
        this.regenerating = !0;
        var e = -1;
        1 === a.length && null !== b && 0 !== b && (e = a[0].index);
        for (var d = 0, f = this.s.panes; d < f.length; d++) {
          var c = f[d];
          c.setCascadeRegen(!0);
          c.setClear(!0);
          ((void 0 !== c.s.dtPane && c.s.index === e) ||
            void 0 !== c.s.dtPane) &&
            c.clearPane();
          c.setClear(!1);
        }
        this.s.dt.draw();
        e = this.s.dt.rows({ search: "applied" }).data().toArray().length;
        d = this.s.dt.rows().data().toArray().length;
        if (d !== e) {
          f = 0;
          for (var g = this.s.panes; f < g.length; f++)
            (c = g[f]), (c.s.forceViewTotal = !0);
        }
        f = 0;
        for (g = this.s.panes; f < g.length; f++) (c = g[f]), c.updatePane(!0);
        this._makeCascadeSelections(a);
        this.s.selectionList = a;
        f = 0;
        for (g = this.s.panes; f < g.length; f++)
          (c = g[f]), c.setCascadeRegen(!1);
        this.regenerating = !1;
        if (d !== e)
          for (e = 0, d = this.s.panes; e < d.length; e++)
            (c = d[e]), (c.s.forceViewTotal = !1);
      };
      m.prototype._checkMessage = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++)
          if (!0 === b[a].s.displayed) {
            p(this.dom.emptyMessage).remove();
            p(this.dom.titleRow).removeClass(this.classes.hide);
            return;
          }
        return this._attachMessage();
      };
      m.prototype._getState = function () {
        var a = this.s.dt.state.loaded();
        a &&
          a.searchPanes &&
          void 0 !== a.searchPanes.selectionList &&
          (this.s.selectionList = a.searchPanes.selectionList);
      };
      m.prototype._makeCascadeSelections = function (a) {
        for (var b = 0; b < a.length; b++)
          for (
            var e = function (g) {
                if (g.s.index === a[b].index && void 0 !== g.s.dtPane) {
                  b === a.length - 1 && (g.s.lastCascade = !0);
                  0 <
                    g.s.dtPane.rows({ selected: !0 }).data().toArray().length &&
                    void 0 !== g.s.dtPane &&
                    (g.setClear(!0), g.clearPane(), g.setClear(!1));
                  for (
                    var h = function (r) {
                        var v = !1;
                        g.s.dtPane.rows().every(function (t) {
                          void 0 !== g.s.dtPane.row(t).data() &&
                            void 0 !== r &&
                            g.s.dtPane.row(t).data().filter === r.filter &&
                            ((v = !0), g.s.dtPane.row(t).select());
                        });
                        v ||
                          g
                            .addRow(
                              r.display,
                              r.filter,
                              0,
                              r.total,
                              r.sort,
                              r.type,
                              r.className
                            )
                            .select();
                      },
                      n = 0,
                      k = a[b].rows;
                    n < k.length;
                    n++
                  )
                    h(k[n]);
                  g.s.scrollTop = p(
                    g.s.dtPane.table().node()
                  ).parent()[0].scrollTop;
                  g.s.dtPane.draw();
                  g.s.dtPane.table().node().parentNode.scrollTop =
                    g.s.scrollTop;
                  d._updateFilterCount();
                  g.s.lastCascade = !1;
                }
              },
              d = this,
              f = 0,
              c = this.s.panes;
            f < c.length;
            f++
          )
            e(c[f]);
        this.s.dt.state.save();
      };
      m.prototype._paneDeclare = function (a, b, e) {
        var d = this;
        a.columns(0 < this.c.columns.length ? this.c.columns : void 0)
          .eq(0)
          .each(function (h) {
            d.s.panes.push(new E(b, e, h, d.c.layout, d.dom.panes));
          });
        for (
          var f = a.columns().eq(0).toArray().length,
            c = this.c.panes.length,
            g = 0;
          g < c;
          g++
        )
          this.s.panes.push(
            new E(b, e, f + g, this.c.layout, this.dom.panes, this.c.panes[g])
          );
        if (0 < this.c.order.length)
          for (
            f = this.c.order.map(function (h, n, k) {
              return d._findPane(h);
            }),
              this.dom.panes.empty(),
              this.s.panes = f,
              f = 0,
              c = this.s.panes;
            f < c.length;
            f++
          )
            this.dom.panes.append(c[f].dom.container);
        this.s.dt.settings()[0]._bInitComplete
          ? this._startup(a)
          : this.s.dt.settings()[0].aoInitComplete.push({
              fn: function () {
                d._startup(a);
              },
            });
      };
      m.prototype._findPane = function (a) {
        for (var b = 0, e = this.s.panes; b < e.length; b++) {
          var d = e[b];
          if (a === d.s.name) return d;
        }
      };
      m.prototype._serverTotals = function () {
        for (
          var a = !1, b = !1, e = this.s.dt, d = 0, f = this.s.panes;
          d < f.length;
          d++
        ) {
          var c = f[d];
          if (c.s.selectPresent) {
            this.s.selectionList.push({
              index: c.s.index,
              protect: !1,
              rows: c.s.dtPane.rows({ selected: !0 }).data().toArray(),
            });
            e.state.save();
            c.s.selectPresent = !1;
            a = !0;
            break;
          } else
            c.s.deselect &&
              ((b = c.s.dtPane.rows({ selected: !0 }).data().toArray()),
              0 < b.length &&
                this.s.selectionList.push({
                  index: c.s.index,
                  protect: !0,
                  rows: b,
                }),
              (b = a = !0));
        }
        if (a) {
          e = [];
          for (d = 0; d < this.s.selectionList.length; d++) {
            c = !1;
            for (f = d + 1; f < this.s.selectionList.length; f++)
              this.s.selectionList[f].index === this.s.selectionList[d].index &&
                (c = !0);
            if (!c) {
              f = !1;
              a = 0;
              for (var g = this.s.panes; a < g.length; a++)
                (c = g[a]),
                  c.s.index === this.s.selectionList[d].index &&
                    0 <
                      c.s.dtPane.rows({ selected: !0 }).data().toArray()
                        .length &&
                    (f = !0);
              f && e.push(this.s.selectionList[d]);
            }
          }
          this.s.selectionList = e;
        } else this.s.selectionList = [];
        e = -1;
        if (b && 1 === this.s.selectionList.length)
          for (b = 0, d = this.s.panes; b < d.length; b++)
            (c = d[b]),
              (c.s.lastSelect = !1),
              (c.s.deselect = !1),
              void 0 !== c.s.dtPane &&
                0 < c.s.dtPane.rows({ selected: !0 }).data().toArray().length &&
                (e = c.s.index);
        else if (0 < this.s.selectionList.length)
          for (
            b = this.s.selectionList[this.s.selectionList.length - 1].index,
              d = 0,
              f = this.s.panes;
            d < f.length;
            d++
          )
            (c = f[d]), (c.s.lastSelect = c.s.index === b), (c.s.deselect = !1);
        else if (0 === this.s.selectionList.length)
          for (b = 0, d = this.s.panes; b < d.length; b++)
            (c = d[b]), (c.s.lastSelect = !1), (c.s.deselect = !1);
        p(this.dom.panes).empty();
        b = 0;
        for (d = this.s.panes; b < d.length; b++)
          (c = d[b]),
            c.s.lastSelect
              ? c._setListeners()
              : c.rebuildPane(
                  void 0,
                  this.s.dt.page.info().serverSide ? this.s.serverData : void 0,
                  c.s.index === e ? !0 : null,
                  !0
                ),
            p(this.dom.panes).append(c.dom.container),
            void 0 !== c.s.dtPane &&
              ((p(c.s.dtPane.table().node()).parent()[0].scrollTop =
                c.s.scrollTop),
              p.fn.dataTable.select.init(c.s.dtPane));
        this._updateSelection();
      };
      m.prototype._startup = function (a) {
        var b = this;
        p(this.dom.container).text("");
        this._attachExtras();
        p(this.dom.container).append(this.dom.panes);
        p(this.dom.panes).empty();
        var e = this.s.dt.state.loaded();
        if (
          this.c.viewTotal &&
          !this.c.cascadePanes &&
          null !== e &&
          void 0 !== e &&
          void 0 !== e.searchPanes &&
          void 0 !== e.searchPanes.panes
        ) {
          for (var d = !1, f = 0, c = e.searchPanes.panes; f < c.length; f++) {
            var g = c[f];
            if (0 < g.selected.length) {
              d = !0;
              break;
            }
          }
          if (d)
            for (d = 0, f = this.s.panes; d < f.length; d++)
              (g = f[d]), (g.s.showFiltered = !0);
        }
        d = 0;
        for (f = this.s.panes; d < f.length; d++)
          (g = f[d]),
            g.rebuildPane(
              void 0,
              0 < Object.keys(this.s.serverData).length
                ? this.s.serverData
                : void 0
            ),
            p(this.dom.panes).append(g.dom.container);
        "auto" === this.c.layout && this.resizePanes();
        this.s.stateRead ||
          null === e ||
          void 0 === e ||
          (this.s.dt.page(e.start / this.s.dt.page.len()),
          this.s.dt.draw("page"));
        this.s.stateRead = !0;
        if (this.c.viewTotal && !this.c.cascadePanes)
          for (e = 0, d = this.s.panes; e < d.length; e++)
            (g = d[e]), g.updatePane();
        this._updateFilterCount();
        this._checkMessage();
        a.on("preDraw.dtsps", function () {
          b.s.updating ||
            (b._updateFilterCount(),
            (!b.c.cascadePanes && !b.c.viewTotal) ||
            b.s.dt.page.info().serverSide
              ? b._updateSelection()
              : b.redrawPanes(b.c.viewTotal),
            (b.s.filterPane = -1));
        });
        p(window).on(
          "resize.dtsp",
          B.util.throttle(function () {
            b.resizePanes();
          })
        );
        this.s.dt.on("stateSaveParams.dtsp", function (h, n, k) {
          void 0 === k.searchPanes && (k.searchPanes = {});
          k.searchPanes.selectionList = b.s.selectionList;
        });
        if (this.s.dt.page.info().serverSide)
          a.off("page"),
            a.on("page", function () {
              b.s.page = b.s.dt.page();
            }),
            a.off("preXhr.dt"),
            a.on("preXhr.dt", function (h, n, k) {
              void 0 === k.searchPanes && (k.searchPanes = {});
              void 0 === k.searchPanes_null && (k.searchPanes_null = {});
              n = h = 0;
              for (var r = b.s.panes; n < r.length; n++) {
                var v = r[n],
                  t = b.s.dt.column(v.s.index).dataSrc();
                void 0 === k.searchPanes[t] && (k.searchPanes[t] = {});
                void 0 === k.searchPanes_null[t] &&
                  (k.searchPanes_null[t] = {});
                if (void 0 !== v.s.dtPane) {
                  v = v.s.dtPane.rows({ selected: !0 }).data().toArray();
                  for (var u = 0; u < v.length; u++)
                    (k.searchPanes[t][u] = v[u].filter),
                      null === k.searchPanes[t][u] &&
                        (k.searchPanes_null[t][u] = !0),
                      h++;
                }
              }
              b.c.viewTotal && b._prepViewTotal(h);
              0 < h &&
                (h !== b.s.filterCount
                  ? ((k.start = 0), (b.s.page = 0))
                  : (k.start = b.s.page * b.s.dt.page.len()),
                b.s.dt.page(b.s.page),
                (b.s.filterCount = h));
            });
        else
          a.on("preXhr.dt", function (h, n, k) {
            h = 0;
            for (n = b.s.panes; h < n.length; h++) n[h].clearData();
          });
        this.s.dt.on("xhr", function (h, n, k, r) {
          if (n.nTable === b.s.dt.table().node()) {
            var v = !1;
            if (!b.s.dt.page.info().serverSide)
              b.s.dt.one("preDraw", function () {
                if (!v) {
                  var t = b.s.dt.page();
                  v = !0;
                  b.s.updating = !0;
                  p(b.dom.panes).empty();
                  for (var u = 0, q = b.s.panes; u < q.length; u++) {
                    var w = q[u];
                    w.clearData();
                    w.rebuildPane(
                      void 0 !== b.s.selectionList[b.s.selectionList.length - 1]
                        ? w.s.index ===
                            b.s.selectionList[b.s.selectionList.length - 1]
                              .index
                        : !1,
                      void 0,
                      void 0,
                      !0
                    );
                    p(b.dom.panes).append(w.dom.container);
                  }
                  b.s.dt.page.info().serverSide || b.s.dt.draw();
                  b.s.updating = !1;
                  b.c.cascadePanes || b.c.viewTotal
                    ? b.redrawPanes(b.c.cascadePanes)
                    : b._updateSelection();
                  b._checkMessage();
                  b.s.dt.one("draw", function () {
                    b.s.updating = !0;
                    b.s.dt.page(t).draw(!1);
                    b.s.updating = !1;
                  });
                }
              });
          }
        });
        e = 0;
        for (d = this.s.panes; e < d.length; e++)
          if (
            ((g = d[e]),
            void 0 !== g &&
              void 0 !== g.s.dtPane &&
              ((void 0 !== g.s.colOpts.preSelect &&
                0 < g.s.colOpts.preSelect.length) ||
                (null !== g.customPaneSettings &&
                  void 0 !== g.customPaneSettings.preSelect &&
                  0 < g.customPaneSettings.preSelect.length)))
          ) {
            f = g.s.dtPane.rows().data().toArray().length;
            for (c = 0; c < f; c++)
              (-1 !==
                g.s.colOpts.preSelect.indexOf(g.s.dtPane.cell(c, 0).data()) ||
                (null !== g.customPaneSettings &&
                  void 0 !== g.customPaneSettings.preSelect &&
                  -1 !==
                    g.customPaneSettings.preSelect.indexOf(
                      g.s.dtPane.cell(c, 0).data()
                    ))) &&
                g.s.dtPane.row(c).select();
            g.updateTable();
          }
        if (void 0 !== this.s.selectionList && 0 < this.s.selectionList.length)
          for (
            e = this.s.selectionList[this.s.selectionList.length - 1].index,
              d = 0,
              f = this.s.panes;
            d < f.length;
            d++
          )
            (g = f[d]), (g.s.lastSelect = g.s.index === e);
        0 < this.s.selectionList.length &&
          this.c.cascadePanes &&
          this._cascadeRegen(this.s.selectionList, this.s.selectionList.length);
        this._updateFilterCount();
        a.on("destroy.dtsps", function () {
          for (var h = 0, n = b.s.panes; h < n.length; h++) n[h].destroy();
          a.off(".dtsps");
          p(b.dom.clearAll).off(".dtsps");
          p(b.dom.container).remove();
          b.clearSelections();
        });
        if (this.c.clear)
          p(this.dom.clearAll).on("click.dtsps", function () {
            b.clearSelections();
          });
        a.settings()[0]._searchPanes = this;
        this.s.dt.state.save();
      };
      m.prototype._prepViewTotal = function (a) {
        for (
          var b = this.s.filterPane, e = !1, d = 0, f = this.s.panes;
          d < f.length;
          d++
        ) {
          var c = f[d];
          if (void 0 !== c.s.dtPane) {
            var g = c.s.dtPane.rows({ selected: !0 }).data().toArray().length;
            0 < g && -1 === b
              ? ((b = c.s.index), (e = !0))
              : 0 < g && (b = null);
          }
        }
        null !== a && 0 !== a && (b = null);
        a = 0;
        for (d = this.s.panes; a < d.length; a++)
          if (
            ((c = d[a]),
            void 0 !== c.s.dtPane &&
              ((c.s.filteringActive = !0),
              (-1 !== b && null !== b && b === c.s.index) || !1 === e))
          )
            c.s.filteringActive = !1;
      };
      m.prototype._updateFilterCount = function () {
        for (var a = 0, b = 0, e = this.s.panes; b < e.length; b++) {
          var d = e[b];
          void 0 !== d.s.dtPane && (a += d.getPaneCount());
        }
        b = this.s.dt.i18n("searchPanes.title", this.c.i18n.title, a);
        p(this.dom.title).text(b);
        void 0 !== this.c.filterChanged &&
          "function" === typeof this.c.filterChanged &&
          this.c.filterChanged.call(this.s.dt, a);
        0 === a
          ? p(this.dom.clearAll)
              .addClass(this.classes.disabledButton)
              .attr("disabled", "true")
          : p(this.dom.clearAll)
              .removeClass(this.classes.disabledButton)
              .removeAttr("disabled");
      };
      m.prototype._updateSelection = function () {
        this.s.selectionList = [];
        for (var a = 0, b = this.s.panes; a < b.length; a++) {
          var e = b[a];
          void 0 !== e.s.dtPane &&
            this.s.selectionList.push({
              index: e.s.index,
              protect: !1,
              rows: e.s.dtPane.rows({ selected: !0 }).data().toArray(),
            });
        }
        this.s.dt.state.save();
      };
      m.version = "1.3.0";
      m.classes = {
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        container: "dtsp-searchPanes",
        disabledButton: "dtsp-disabledButton",
        emptyMessage: "dtsp-emptyMessage",
        hide: "dtsp-hidden",
        panes: "dtsp-panesContainer",
        search: "dtsp-search",
        title: "dtsp-title",
        titleRow: "dtsp-titleRow",
      };
      m.defaults = {
        cascadePanes: !1,
        clear: !0,
        columns: [],
        container: function (a) {
          return a.table().container();
        },
        filterChanged: void 0,
        i18n: {
          clearMessage: "Clear All",
          clearPane: "&times;",
          collapse: { 0: "SearchPanes", _: "SearchPanes (%d)" },
          count: "{total}",
          countFiltered: "{shown} ({total})",
          emptyMessage: "<em>No data</em>",
          emptyPanes: "No SearchPanes",
          loadMessage: "Loading Search Panes...",
          title: "Filters Active - %d",
        },
        layout: "auto",
        order: [],
        panes: [],
        viewTotal: !1,
      };
      return m;
    })();
  (function (m) {
    "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (a) {
          return m(a, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (a, b) {
          a || (a = window);
          (b && b.fn.dataTable) || (b = require("datatables.net")(a, b).$);
          return m(b, a, a.document);
        })
      : m(window.jQuery, window, document);
  })(function (m, a, b) {
    function e(f, c, g) {
      void 0 === c && (c = null);
      void 0 === g && (g = !1);
      f = new d.Api(f);
      c = c ? c : f.init().searchPanes || d.defaults.searchPanes;
      return new F(f, c, g).getNode();
    }
    G(m);
    H(m);
    var d = m.fn.dataTable;
    m.fn.dataTable.SearchPanes = F;
    m.fn.DataTable.SearchPanes = F;
    m.fn.dataTable.SearchPane = E;
    m.fn.DataTable.SearchPane = E;
    a = m.fn.dataTable.Api.register;
    a("searchPanes()", function () {
      return this;
    });
    a("searchPanes.clearSelections()", function () {
      return this.iterator("table", function (f) {
        f._searchPanes && f._searchPanes.clearSelections();
      });
    });
    a("searchPanes.rebuildPane()", function (f, c) {
      return this.iterator("table", function (g) {
        g._searchPanes && g._searchPanes.rebuild(f, c);
      });
    });
    a("searchPanes.resizePanes()", function () {
      var f = this.context[0];
      return f._searchPanes ? f._searchPanes.resizePanes() : null;
    });
    a("searchPanes.container()", function () {
      var f = this.context[0];
      return f._searchPanes ? f._searchPanes.getNode() : null;
    });
    m.fn.dataTable.ext.buttons.searchPanesClear = {
      action: function (f, c, g, h) {
        c.searchPanes.clearSelections();
      },
      text: "Clear Panes",
    };
    m.fn.dataTable.ext.buttons.searchPanes = {
      action: function (f, c, g, h) {
        f.stopPropagation();
        this.popover(h._panes.getNode(), { align: "dt-container" });
        h._panes.rebuild(void 0, !0);
      },
      config: {},
      init: function (f, c, g) {
        var h = new m.fn.dataTable.SearchPanes(
            f,
            m.extend(
              {
                filterChanged: function (k) {
                  f.button(c).text(
                    f.i18n(
                      "searchPanes.collapse",
                      void 0 !== f.context[0].oLanguage.searchPanes
                        ? f.context[0].oLanguage.searchPanes.collapse
                        : f.context[0]._searchPanes.c.i18n.collapse,
                      k
                    )
                  );
                },
              },
              g.config
            )
          ),
          n = f.i18n("searchPanes.collapse", h.c.i18n.collapse, 0);
        f.button(c).text(n);
        g._panes = h;
      },
      text: "Search Panes",
    };
    m(b).on("preInit.dt.dtsp", function (f, c, g) {
      "dt" === f.namespace &&
        (c.oInit.searchPanes || d.defaults.searchPanes) &&
        (c._searchPanes || e(c, null, !0));
    });
    d.ext.feature.push({ cFeature: "P", fnInit: e });
    d.ext.features && d.ext.features.register("searchPanes", e);
  });
})();

// dataTables.select.min.js
(function (h) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (q) {
        return h(q, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (q, t) {
        q || (q = window);
        (t && t.fn.dataTable) || (t = require("datatables.net")(q, t).$);
        return h(t, q, q.document);
      })
    : h(jQuery, window, document);
})(function (h, q, t, n) {
  function E(a, b, c) {
    var d = function (g, f) {
      if (g > f) {
        var k = f;
        f = g;
        g = k;
      }
      var l = !1;
      return a
        .columns(":visible")
        .indexes()
        .filter(function (p) {
          p === g && (l = !0);
          return p === f ? ((l = !1), !0) : l;
        });
    };
    var e = function (g, f) {
      var k = a.rows({ search: "applied" }).indexes();
      if (k.indexOf(g) > k.indexOf(f)) {
        var l = f;
        f = g;
        g = l;
      }
      var p = !1;
      return k.filter(function (u) {
        u === g && (p = !0);
        return u === f ? ((p = !1), !0) : p;
      });
    };
    a.cells({ selected: !0 }).any() || c
      ? ((d = d(c.column, b.column)), (c = e(c.row, b.row)))
      : ((d = d(0, b.column)), (c = e(0, b.row)));
    c = a.cells(c, d).flatten();
    a.cells(b, { selected: !0 }).any()
      ? a.cells(c).deselect()
      : a.cells(c).select();
  }
  function A(a) {
    var b = a.settings()[0]._select.selector;
    h(a.table().container())
      .off("mousedown.dtSelect", b)
      .off("mouseup.dtSelect", b)
      .off("click.dtSelect", b);
    h("body").off(
      "click.dtSelect" +
        a
          .table()
          .node()
          .id.replace(/[^a-zA-Z0-9\-_]/g, "-")
    );
  }
  function F(a) {
    var b = h(a.table().container()),
      c = a.settings()[0],
      d = c._select.selector,
      e;
    b.on("mousedown.dtSelect", d, function (g) {
      if (g.shiftKey || g.metaKey || g.ctrlKey)
        b.css("-moz-user-select", "none").one(
          "selectstart.dtSelect",
          d,
          function () {
            return !1;
          }
        );
      q.getSelection && (e = q.getSelection());
    })
      .on("mouseup.dtSelect", d, function () {
        b.css("-moz-user-select", "");
      })
      .on("click.dtSelect", d, function (g) {
        var f = a.select.items();
        if (e) {
          var k = q.getSelection();
          if (
            (!k.anchorNode ||
              h(k.anchorNode).closest("table")[0] === a.table().node()) &&
            k !== e
          )
            return;
        }
        k = a.settings()[0];
        var l = a.settings()[0].oClasses.sWrapper.trim().replace(/ +/g, ".");
        if (
          h(g.target).closest("div." + l)[0] == a.table().container() &&
          ((l = a.cell(h(g.target).closest("td, th"))), l.any())
        ) {
          var p = h.Event("user-select.dt");
          r(a, p, [f, l, g]);
          p.isDefaultPrevented() ||
            ((p = l.index()),
            "row" === f
              ? ((f = p.row), B(g, a, k, "row", f))
              : "column" === f
              ? ((f = l.index().column), B(g, a, k, "column", f))
              : "cell" === f && ((f = l.index()), B(g, a, k, "cell", f)),
            (k._select_lastCell = p));
        }
      });
    h("body").on(
      "click.dtSelect" +
        a
          .table()
          .node()
          .id.replace(/[^a-zA-Z0-9\-_]/g, "-"),
      function (g) {
        !c._select.blurable ||
          h(g.target).parents().filter(a.table().container()).length ||
          0 === h(g.target).parents("html").length ||
          h(g.target).parents("div.DTE").length ||
          x(c, !0);
      }
    );
  }
  function r(a, b, c, d) {
    if (!d || a.flatten().length)
      "string" === typeof b && (b += ".dt"),
        c.unshift(a),
        h(a.table().node()).trigger(b, c);
  }
  function I(a) {
    var b = a.settings()[0];
    if (b._select.info && b.aanFeatures.i && "api" !== a.select.style()) {
      var c = a.rows({ selected: !0 }).flatten().length,
        d = a.columns({ selected: !0 }).flatten().length,
        e = a.cells({ selected: !0 }).flatten().length,
        g = function (f, k, l) {
          f.append(
            h('<span class="select-item"/>').append(
              a.i18n(
                "select." + k + "s",
                {
                  _: "%d " + k + "s selected",
                  0: "",
                  1: "1 " + k + " selected",
                },
                l
              )
            )
          );
        };
      h.each(b.aanFeatures.i, function (f, k) {
        k = h(k);
        f = h('<span class="select-info"/>');
        g(f, "row", c);
        g(f, "column", d);
        g(f, "cell", e);
        var l = k.children("span.select-info");
        l.length && l.remove();
        "" !== f.text() && k.append(f);
      });
    }
  }
  function J(a) {
    var b = new m.Api(a);
    a.aoRowCreatedCallback.push({
      fn: function (c, d, e) {
        d = a.aoData[e];
        d._select_selected && h(c).addClass(a._select.className);
        c = 0;
        for (e = a.aoColumns.length; c < e; c++)
          (a.aoColumns[c]._select_selected ||
            (d._selected_cells && d._selected_cells[c])) &&
            h(d.anCells[c]).addClass(a._select.className);
      },
      sName: "select-deferRender",
    });
    b.on("preXhr.dt.dtSelect", function (c, d) {
      if (d === b.settings()[0]) {
        var e = b
            .rows({ selected: !0 })
            .ids(!0)
            .filter(function (f) {
              return f !== n;
            }),
          g = b
            .cells({ selected: !0 })
            .eq(0)
            .map(function (f) {
              var k = b.row(f.row).id(!0);
              return k ? { row: k, column: f.column } : n;
            })
            .filter(function (f) {
              return f !== n;
            });
        b.one("draw.dt.dtSelect", function () {
          b.rows(e).select();
          g.any() &&
            g.each(function (f) {
              b.cells(f.row, f.column).select();
            });
        });
      }
    });
    b.on(
      "draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",
      function () {
        I(b);
      }
    );
    b.on("destroy.dtSelect", function () {
      b.rows({ selected: !0 }).deselect();
      A(b);
      b.off(".dtSelect");
    });
  }
  function G(a, b, c, d) {
    var e = a[b + "s"]({ search: "applied" }).indexes();
    d = h.inArray(d, e);
    var g = h.inArray(c, e);
    if (a[b + "s"]({ selected: !0 }).any() || -1 !== d) {
      if (d > g) {
        var f = g;
        g = d;
        d = f;
      }
      e.splice(g + 1, e.length);
      e.splice(0, d);
    } else e.splice(h.inArray(c, e) + 1, e.length);
    a[b](c, { selected: !0 }).any()
      ? (e.splice(h.inArray(c, e), 1), a[b + "s"](e).deselect())
      : a[b + "s"](e).select();
  }
  function x(a, b) {
    if (b || "single" === a._select.style)
      (a = new m.Api(a)),
        a.rows({ selected: !0 }).deselect(),
        a.columns({ selected: !0 }).deselect(),
        a.cells({ selected: !0 }).deselect();
  }
  function B(a, b, c, d, e) {
    var g = b.select.style(),
      f = b.select.toggleable(),
      k = b[d](e, { selected: !0 }).any();
    if (!k || f)
      "os" === g
        ? a.ctrlKey || a.metaKey
          ? b[d](e).select(!k)
          : a.shiftKey
          ? "cell" === d
            ? E(b, e, c._select_lastCell || null)
            : G(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null)
          : ((a = b[d + "s"]({ selected: !0 })),
            k && 1 === a.flatten().length
              ? b[d](e).deselect()
              : (a.deselect(), b[d](e).select()))
        : "multi+shift" == g
        ? a.shiftKey
          ? "cell" === d
            ? E(b, e, c._select_lastCell || null)
            : G(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null)
          : b[d](e).select(!k)
        : b[d](e).select(!k);
  }
  function y(a, b) {
    return function (c) {
      return c.i18n("buttons." + a, b);
    };
  }
  function C(a) {
    a = a._eventNamespace;
    return "draw.dt.DT" + a + " select.dt.DT" + a + " deselect.dt.DT" + a;
  }
  function K(a, b) {
    return (-1 !== h.inArray("rows", b.limitTo) &&
      a.rows({ selected: !0 }).any()) ||
      (-1 !== h.inArray("columns", b.limitTo) &&
        a.columns({ selected: !0 }).any()) ||
      (-1 !== h.inArray("cells", b.limitTo) && a.cells({ selected: !0 }).any())
      ? !0
      : !1;
  }
  var m = h.fn.dataTable;
  m.select = {};
  m.select.version = "1.3.3";
  m.select.init = function (a) {
    var b = a.settings()[0],
      c = b.oInit.select,
      d = m.defaults.select;
    c = c === n ? d : c;
    d = "row";
    var e = "api",
      g = !1,
      f = !0,
      k = !0,
      l = "td, th",
      p = "selected",
      u = !1;
    b._select = {};
    !0 === c
      ? ((e = "os"), (u = !0))
      : "string" === typeof c
      ? ((e = c), (u = !0))
      : h.isPlainObject(c) &&
        (c.blurable !== n && (g = c.blurable),
        c.toggleable !== n && (f = c.toggleable),
        c.info !== n && (k = c.info),
        c.items !== n && (d = c.items),
        (e = c.style !== n ? c.style : "os"),
        (u = !0),
        c.selector !== n && (l = c.selector),
        c.className !== n && (p = c.className));
    a.select.selector(l);
    a.select.items(d);
    a.select.style(e);
    a.select.blurable(g);
    a.select.toggleable(f);
    a.select.info(k);
    b._select.className = p;
    h.fn.dataTable.ext.order["select-checkbox"] = function (z, L) {
      return this.api()
        .column(L, { order: "index" })
        .nodes()
        .map(function (H) {
          return "row" === z._select.items
            ? h(H).parent().hasClass(z._select.className)
            : "cell" === z._select.items
            ? h(H).hasClass(z._select.className)
            : !1;
        });
    };
    !u && h(a.table().node()).hasClass("selectable") && a.select.style("os");
  };
  h.each(
    [
      { type: "row", prop: "aoData" },
      { type: "column", prop: "aoColumns" },
    ],
    function (a, b) {
      m.ext.selector[b.type].push(function (c, d, e) {
        d = d.selected;
        var g = [];
        if (!0 !== d && !1 !== d) return e;
        for (var f = 0, k = e.length; f < k; f++) {
          var l = c[b.prop][e[f]];
          ((!0 === d && !0 === l._select_selected) ||
            (!1 === d && !l._select_selected)) &&
            g.push(e[f]);
        }
        return g;
      });
    }
  );
  m.ext.selector.cell.push(function (a, b, c) {
    b = b.selected;
    var d = [];
    if (b === n) return c;
    for (var e = 0, g = c.length; e < g; e++) {
      var f = a.aoData[c[e].row];
      ((!0 === b &&
        f._selected_cells &&
        !0 === f._selected_cells[c[e].column]) ||
        !(!1 !== b || (f._selected_cells && f._selected_cells[c[e].column]))) &&
        d.push(c[e]);
    }
    return d;
  });
  var v = m.Api.register,
    w = m.Api.registerPlural;
  v("select()", function () {
    return this.iterator("table", function (a) {
      m.select.init(new m.Api(a));
    });
  });
  v("select.blurable()", function (a) {
    return a === n
      ? this.context[0]._select.blurable
      : this.iterator("table", function (b) {
          b._select.blurable = a;
        });
  });
  v("select.toggleable()", function (a) {
    return a === n
      ? this.context[0]._select.toggleable
      : this.iterator("table", function (b) {
          b._select.toggleable = a;
        });
  });
  v("select.info()", function (a) {
    return a === n
      ? this.context[0]._select.info
      : this.iterator("table", function (b) {
          b._select.info = a;
        });
  });
  v("select.items()", function (a) {
    return a === n
      ? this.context[0]._select.items
      : this.iterator("table", function (b) {
          b._select.items = a;
          r(new m.Api(b), "selectItems", [a]);
        });
  });
  v("select.style()", function (a) {
    return a === n
      ? this.context[0]._select.style
      : this.iterator("table", function (b) {
          b._select.style = a;
          b._select_init || J(b);
          var c = new m.Api(b);
          A(c);
          "api" !== a && F(c);
          r(new m.Api(b), "selectStyle", [a]);
        });
  });
  v("select.selector()", function (a) {
    return a === n
      ? this.context[0]._select.selector
      : this.iterator("table", function (b) {
          A(new m.Api(b));
          b._select.selector = a;
          "api" !== b._select.style && F(new m.Api(b));
        });
  });
  w("rows().select()", "row().select()", function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator("row", function (c, d) {
      x(c);
      c.aoData[d]._select_selected = !0;
      h(c.aoData[d].nTr).addClass(c._select.className);
    });
    this.iterator("table", function (c, d) {
      r(b, "select", ["row", b[d]], !0);
    });
    return this;
  });
  w("columns().select()", "column().select()", function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator("column", function (c, d) {
      x(c);
      c.aoColumns[d]._select_selected = !0;
      d = new m.Api(c).column(d);
      h(d.header()).addClass(c._select.className);
      h(d.footer()).addClass(c._select.className);
      d.nodes().to$().addClass(c._select.className);
    });
    this.iterator("table", function (c, d) {
      r(b, "select", ["column", b[d]], !0);
    });
    return this;
  });
  w("cells().select()", "cell().select()", function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator("cell", function (c, d, e) {
      x(c);
      d = c.aoData[d];
      d._selected_cells === n && (d._selected_cells = []);
      d._selected_cells[e] = !0;
      d.anCells && h(d.anCells[e]).addClass(c._select.className);
    });
    this.iterator("table", function (c, d) {
      r(b, "select", ["cell", b.cells(b[d]).indexes().toArray()], !0);
    });
    return this;
  });
  w("rows().deselect()", "row().deselect()", function () {
    var a = this;
    this.iterator("row", function (b, c) {
      b.aoData[c]._select_selected = !1;
      b._select_lastCell = null;
      h(b.aoData[c].nTr).removeClass(b._select.className);
    });
    this.iterator("table", function (b, c) {
      r(a, "deselect", ["row", a[c]], !0);
    });
    return this;
  });
  w("columns().deselect()", "column().deselect()", function () {
    var a = this;
    this.iterator("column", function (b, c) {
      b.aoColumns[c]._select_selected = !1;
      var d = new m.Api(b),
        e = d.column(c);
      h(e.header()).removeClass(b._select.className);
      h(e.footer()).removeClass(b._select.className);
      d.cells(null, c)
        .indexes()
        .each(function (g) {
          var f = b.aoData[g.row],
            k = f._selected_cells;
          !f.anCells ||
            (k && k[g.column]) ||
            h(f.anCells[g.column]).removeClass(b._select.className);
        });
    });
    this.iterator("table", function (b, c) {
      r(a, "deselect", ["column", a[c]], !0);
    });
    return this;
  });
  w("cells().deselect()", "cell().deselect()", function () {
    var a = this;
    this.iterator("cell", function (b, c, d) {
      c = b.aoData[c];
      c._selected_cells[d] = !1;
      c.anCells &&
        !b.aoColumns[d]._select_selected &&
        h(c.anCells[d]).removeClass(b._select.className);
    });
    this.iterator("table", function (b, c) {
      r(a, "deselect", ["cell", a[c]], !0);
    });
    return this;
  });
  var D = 0;
  h.extend(m.ext.buttons, {
    selected: {
      text: y("selected", "Selected"),
      className: "buttons-selected",
      limitTo: ["rows", "columns", "cells"],
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = ".select" + D++;
        a.on(C(c), function () {
          d.enable(K(a, c));
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
    selectedSingle: {
      text: y("selectedSingle", "Selected single"),
      className: "buttons-selected-single",
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = ".select" + D++;
        a.on(C(c), function () {
          var e =
            a.rows({ selected: !0 }).flatten().length +
            a.columns({ selected: !0 }).flatten().length +
            a.cells({ selected: !0 }).flatten().length;
          d.enable(1 === e);
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
    selectAll: {
      text: y("selectAll", "Select all"),
      className: "buttons-select-all",
      action: function () {
        this[this.select.items() + "s"]().select();
      },
    },
    selectNone: {
      text: y("selectNone", "Deselect all"),
      className: "buttons-select-none",
      action: function () {
        x(this.settings()[0], !0);
      },
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = ".select" + D++;
        a.on(C(c), function () {
          var e =
            a.rows({ selected: !0 }).flatten().length +
            a.columns({ selected: !0 }).flatten().length +
            a.cells({ selected: !0 }).flatten().length;
          d.enable(0 < e);
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
  });
  h.each(["Row", "Column", "Cell"], function (a, b) {
    var c = b.toLowerCase();
    m.ext.buttons["select" + b + "s"] = {
      text: y("select" + b + "s", "Select " + c + "s"),
      className: "buttons-select-" + c + "s",
      action: function () {
        this.select.items(c);
      },
      init: function (d) {
        var e = this;
        d.on("selectItems.dt.DT", function (g, f, k) {
          e.active(k === c);
        });
      },
    };
  });
  h(t).on("preInit.dt.dtSelect", function (a, b) {
    "dt" === a.namespace && m.select.init(new m.Api(b));
  });
  return m.select;
});

// row().show().js
$.fn.dataTable.Api.register("row().show()", function () {
  var b = this.table().page.info(),
    a = this.index();
  a = this.table().rows({ search: "applied" })[0].indexOf(a);
  if ((a >= b.start && a < b.end) || 0 > a) return this;
  b = Math.floor(a / this.table().page.len());
  this.table().page(b);
  return this;
});

// input.min.js
(function (b) {
  function m(a) {
    return Math.ceil(a._iDisplayStart / a._iDisplayLength) + 1;
  }
  function r(a) {
    return Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength);
  }
  b.fn.dataTableExt.oPagination.input = {
    fnInit: function (a, e, h) {
      var d = document.createElement("span"),
        g = document.createElement("span"),
        c = document.createElement("span"),
        k = document.createElement("span"),
        l = document.createElement("input"),
        n = document.createElement("span"),
        u = document.createElement("span"),
        p = a.oLanguage.oPaginate,
        t = a.oClasses,
        q = p.info || "Page _INPUT_ of _TOTAL_";
      d.innerHTML = p.sFirst;
      g.innerHTML = p.sPrevious;
      c.innerHTML = p.sNext;
      k.innerHTML = p.sLast;
      d.className = "first " + t.sPageButton;
      g.className = "previous " + t.sPageButton;
      c.className = "next " + t.sPageButton;
      k.className = "last " + t.sPageButton;
      l.className = "paginate_input";
      n.className = "paginate_total";
      "" !== a.sTableId &&
        (e.setAttribute("id", a.sTableId + "_paginate"),
        d.setAttribute("id", a.sTableId + "_first"),
        g.setAttribute("id", a.sTableId + "_previous"),
        c.setAttribute("id", a.sTableId + "_next"),
        k.setAttribute("id", a.sTableId + "_last"));
      l.type = "text";
      q = q.replace(/_INPUT_/g, "</span>" + l.outerHTML + "<span>");
      q = q.replace(/_TOTAL_/g, "</span>" + n.outerHTML + "<span>");
      u.innerHTML = "<span>" + q + "</span>";
      e.appendChild(d);
      e.appendChild(g);
      b(u)
        .children()
        .each(function (f, v) {
          e.appendChild(v);
        });
      e.appendChild(c);
      e.appendChild(k);
      b(d).click(function () {
        1 !== m(a) && (a.oApi._fnPageChange(a, "first"), h(a));
      });
      b(g).click(function () {
        1 !== m(a) && (a.oApi._fnPageChange(a, "previous"), h(a));
      });
      b(c).click(function () {
        m(a) !== r(a) && (a.oApi._fnPageChange(a, "next"), h(a));
      });
      b(k).click(function () {
        m(a) !== r(a) && (a.oApi._fnPageChange(a, "last"), h(a));
      });
      b(e)
        .find(".paginate_input")
        .keyup(function (f) {
          38 === f.which || 39 === f.which
            ? this.value++
            : (37 === f.which || 40 === f.which) &&
              1 < this.value &&
              this.value--;
          "" === this.value || this.value.match(/[^0-9]/)
            ? (this.value = this.value.replace(/[^\d]/g, ""))
            : ((f = a._iDisplayLength * (this.value - 1)),
              0 > f && (f = 0),
              f >= a.fnRecordsDisplay() &&
                (f =
                  (Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength) - 1) *
                  a._iDisplayLength),
              (a._iDisplayStart = f),
              a.oInstance.trigger("page.dt", a),
              h(a));
        });
      b("span", e).bind("mousedown", function () {
        return !1;
      });
      b("span", e).bind("selectstart", function () {
        return !1;
      });
      1 >= r(a) && b(e).hide();
    },
    fnUpdate: function (a) {
      if (a.aanFeatures.p) {
        var e = r(a),
          h = m(a),
          d = a.aanFeatures.p;
        if (1 >= e) b(d).hide();
        else {
          var g = a._iDisplayStart;
          var c = a._iDisplayLength;
          var k = a.fnRecordsDisplay(),
            l = -1 === c,
            n = l ? 0 : Math.ceil(g / c);
          g = 0 < n ? "" : a.oClasses.sPageButtonDisabled;
          c =
            n < (l ? 1 : Math.ceil(k / c)) - 1
              ? ""
              : a.oClasses.sPageButtonDisabled;
          c = { first: g, previous: g, next: c, last: c };
          b(d).show();
          b(d)
            .children(".first")
            .removeClass(a.oClasses.sPageButtonDisabled)
            .addClass(c.first);
          b(d)
            .children(".previous")
            .removeClass(a.oClasses.sPageButtonDisabled)
            .addClass(c.previous);
          b(d)
            .children(".next")
            .removeClass(a.oClasses.sPageButtonDisabled)
            .addClass(c.next);
          b(d)
            .children(".last")
            .removeClass(a.oClasses.sPageButtonDisabled)
            .addClass(c.last);
          b(d).find(".paginate_total").html(e);
          b(d).find(".paginate_input").val(h);
        }
      }
    },
  };
})(jQuery);

// jquery.mark.min.js
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : (e.Mark = t(e.jQuery));
})(this, function (e) {
  "use strict";
  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function n(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function o(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function i() {
    return (i =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  e = e && e.hasOwnProperty("default") ? e.default : e;
  var a = (function () {
      function e(t) {
        var r =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 5e3;
        n(this, e),
          (this.ctx = t),
          (this.iframes = r),
          (this.exclude = o),
          (this.iframesTimeout = i);
      }
      return (
        o(
          e,
          [
            {
              key: "getContexts",
              value: function () {
                var e = [];
                return (
                  (void 0 !== this.ctx && this.ctx
                    ? NodeList.prototype.isPrototypeOf(this.ctx)
                      ? Array.prototype.slice.call(this.ctx)
                      : Array.isArray(this.ctx)
                      ? this.ctx
                      : "string" == typeof this.ctx
                      ? Array.prototype.slice.call(
                          document.querySelectorAll(this.ctx)
                        )
                      : [this.ctx]
                    : []
                  ).forEach(function (t) {
                    var n =
                      e.filter(function (e) {
                        return e.contains(t);
                      }).length > 0;
                    -1 !== e.indexOf(t) || n || e.push(t);
                  }),
                  e
                );
              },
            },
            {
              key: "getIframeContents",
              value: function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : function () {};
                try {
                  var o = e.contentWindow;
                  if (((n = o.document), !o || !n))
                    throw new Error("iframe inaccessible");
                } catch (e) {
                  r();
                }
                n && t(n);
              },
            },
            {
              key: "isIframeBlank",
              value: function (e) {
                var t = "about:blank",
                  n = e.getAttribute("src").trim();
                return e.contentWindow.location.href === t && n !== t && n;
              },
            },
            {
              key: "observeIframeLoad",
              value: function (e, t, n) {
                var r = this,
                  o = !1,
                  i = null,
                  a = function a() {
                    if (!o) {
                      (o = !0), clearTimeout(i);
                      try {
                        r.isIframeBlank(e) ||
                          (e.removeEventListener("load", a),
                          r.getIframeContents(e, t, n));
                      } catch (e) {
                        n();
                      }
                    }
                  };
                e.addEventListener("load", a),
                  (i = setTimeout(a, this.iframesTimeout));
              },
            },
            {
              key: "onIframeReady",
              value: function (e, t, n) {
                try {
                  "complete" === e.contentWindow.document.readyState
                    ? this.isIframeBlank(e)
                      ? this.observeIframeLoad(e, t, n)
                      : this.getIframeContents(e, t, n)
                    : this.observeIframeLoad(e, t, n);
                } catch (e) {
                  n();
                }
              },
            },
            {
              key: "waitForIframes",
              value: function (e, t) {
                var n = this,
                  r = 0;
                this.forEachIframe(
                  e,
                  function () {
                    return !0;
                  },
                  function (e) {
                    r++,
                      n.waitForIframes(e.querySelector("html"), function () {
                        --r || t();
                      });
                  },
                  function (e) {
                    e || t();
                  }
                );
              },
            },
            {
              key: "forEachIframe",
              value: function (t, n, r) {
                var o = this,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : function () {},
                  a = t.querySelectorAll("iframe"),
                  s = a.length,
                  c = 0;
                a = Array.prototype.slice.call(a);
                var u = function () {
                  --s <= 0 && i(c);
                };
                s || u(),
                  a.forEach(function (t) {
                    e.matches(t, o.exclude)
                      ? u()
                      : o.onIframeReady(
                          t,
                          function (e) {
                            n(t) && (c++, r(e)), u();
                          },
                          u
                        );
                  });
              },
            },
            {
              key: "createIterator",
              value: function (e, t, n) {
                return document.createNodeIterator(e, t, n, !1);
              },
            },
            {
              key: "createInstanceOnIframe",
              value: function (t) {
                return new e(t.querySelector("html"), this.iframes);
              },
            },
            {
              key: "compareNodeIframe",
              value: function (e, t, n) {
                if (
                  e.compareDocumentPosition(n) &
                  Node.DOCUMENT_POSITION_PRECEDING
                ) {
                  if (null === t) return !0;
                  if (
                    t.compareDocumentPosition(n) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                  )
                    return !0;
                }
                return !1;
              },
            },
            {
              key: "getIteratorNode",
              value: function (e) {
                var t = e.previousNode();
                return {
                  prevNode: t,
                  node:
                    null === t ? e.nextNode() : e.nextNode() && e.nextNode(),
                };
              },
            },
            {
              key: "checkIframeFilter",
              value: function (e, t, n, r) {
                var o = !1,
                  i = !1;
                return (
                  r.forEach(function (e, t) {
                    e.val === n && ((o = t), (i = e.handled));
                  }),
                  this.compareNodeIframe(e, t, n)
                    ? (!1 !== o || i
                        ? !1 === o || i || (r[o].handled = !0)
                        : r.push({ val: n, handled: !0 }),
                      !0)
                    : (!1 === o && r.push({ val: n, handled: !1 }), !1)
                );
              },
            },
            {
              key: "handleOpenIframes",
              value: function (e, t, n, r) {
                var o = this;
                e.forEach(function (e) {
                  e.handled ||
                    o.getIframeContents(e.val, function (e) {
                      o.createInstanceOnIframe(e).forEachNode(t, n, r);
                    });
                });
              },
            },
            {
              key: "iterateThroughNodes",
              value: function (e, t, n, r, o) {
                for (
                  var i,
                    a,
                    s,
                    c = this,
                    u = this.createIterator(t, e, r),
                    l = [],
                    h = [];
                  (s = void 0),
                    (s = c.getIteratorNode(u)),
                    (a = s.prevNode),
                    (i = s.node);

                )
                  this.iframes &&
                    this.forEachIframe(
                      t,
                      function (e) {
                        return c.checkIframeFilter(i, a, e, l);
                      },
                      function (t) {
                        c.createInstanceOnIframe(t).forEachNode(
                          e,
                          function (e) {
                            return h.push(e);
                          },
                          r
                        );
                      }
                    ),
                    h.push(i);
                h.forEach(function (e) {
                  n(e);
                }),
                  this.iframes && this.handleOpenIframes(l, e, n, r),
                  o();
              },
            },
            {
              key: "forEachNode",
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : function () {},
                  i = this.getContexts(),
                  a = i.length;
                a || o(),
                  i.forEach(function (i) {
                    var s = function () {
                      r.iterateThroughNodes(e, i, t, n, function () {
                        --a <= 0 && o();
                      });
                    };
                    r.iframes ? r.waitForIframes(i, s) : s();
                  });
              },
            },
          ],
          [
            {
              key: "matches",
              value: function (e, t) {
                var n = "string" == typeof t ? [t] : t,
                  r =
                    e.matches ||
                    e.matchesSelector ||
                    e.msMatchesSelector ||
                    e.mozMatchesSelector ||
                    e.oMatchesSelector ||
                    e.webkitMatchesSelector;
                if (r) {
                  var o = !1;
                  return (
                    n.every(function (t) {
                      return !r.call(e, t) || ((o = !0), !1);
                    }),
                    o
                  );
                }
                return !1;
              },
            },
          ]
        ),
        e
      );
    })(),
    s = (function () {
      function e(t) {
        n(this, e),
          (this.opt = i(
            {},
            {
              diacritics: !0,
              synonyms: {},
              accuracy: "partially",
              caseSensitive: !1,
              ignoreJoiners: !1,
              ignorePunctuation: [],
              wildcards: "disabled",
            },
            t
          ));
      }
      return (
        o(e, [
          {
            key: "create",
            value: function (e) {
              return (
                "disabled" !== this.opt.wildcards &&
                  (e = this.setupWildcardsRegExp(e)),
                (e = this.escapeStr(e)),
                Object.keys(this.opt.synonyms).length &&
                  (e = this.createSynonymsRegExp(e)),
                (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
                  (e = this.setupIgnoreJoinersRegExp(e)),
                this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                (e = this.createMergedBlanksRegExp(e)),
                (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
                  (e = this.createJoinersRegExp(e)),
                "disabled" !== this.opt.wildcards &&
                  (e = this.createWildcardsRegExp(e)),
                (e = this.createAccuracyRegExp(e)),
                new RegExp(e, "gm".concat(this.opt.caseSensitive ? "" : "i"))
              );
            },
          },
          {
            key: "sortByLength",
            value: function (e) {
              return e.sort(function (e, t) {
                return e.length === t.length
                  ? e > t
                    ? 1
                    : -1
                  : t.length - e.length;
              });
            },
          },
          {
            key: "escapeStr",
            value: function (e) {
              return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
          },
          {
            key: "createSynonymsRegExp",
            value: function (e) {
              var t = this,
                n = this.opt.synonyms,
                r = this.opt.caseSensitive ? "" : "i",
                o =
                  this.opt.ignoreJoiners || this.opt.ignorePunctuation.length
                    ? "\0"
                    : "";
              for (var i in n)
                if (n.hasOwnProperty(i)) {
                  var a = Array.isArray(n[i]) ? n[i] : [n[i]];
                  a.unshift(i),
                    (a = this.sortByLength(a)
                      .map(function (e) {
                        return (
                          "disabled" !== t.opt.wildcards &&
                            (e = t.setupWildcardsRegExp(e)),
                          (e = t.escapeStr(e))
                        );
                      })
                      .filter(function (e) {
                        return "" !== e;
                      })).length > 1 &&
                      (e = e.replace(
                        new RegExp(
                          "(".concat(
                            a
                              .map(function (e) {
                                return t.escapeStr(e);
                              })
                              .join("|"),
                            ")"
                          ),
                          "gm".concat(r)
                        ),
                        o +
                          "(".concat(
                            a
                              .map(function (e) {
                                return t.processSynonyms(e);
                              })
                              .join("|"),
                            ")"
                          ) +
                          o
                      ));
                }
              return e;
            },
          },
          {
            key: "processSynonyms",
            value: function (e) {
              return (
                (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) &&
                  (e = this.setupIgnoreJoinersRegExp(e)),
                e
              );
            },
          },
          {
            key: "setupWildcardsRegExp",
            value: function (e) {
              return (e = e.replace(/(?:\\)*\?/g, function (e) {
                return "\\" === e.charAt(0) ? "?" : "";
              })).replace(/(?:\\)*\*/g, function (e) {
                return "\\" === e.charAt(0) ? "*" : "";
              });
            },
          },
          {
            key: "createWildcardsRegExp",
            value: function (e) {
              var t = "withSpaces" === this.opt.wildcards;
              return e
                .replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?")
                .replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
            },
          },
          {
            key: "setupIgnoreJoinersRegExp",
            value: function (e) {
              return e.replace(/[^(|)\\]/g, function (e, t, n) {
                var r = n.charAt(t + 1);
                return /[(|)\\]/.test(r) || "" === r ? e : e + "\0";
              });
            },
          },
          {
            key: "createJoinersRegExp",
            value: function (e) {
              var t = [],
                n = this.opt.ignorePunctuation;
              return (
                Array.isArray(n) &&
                  n.length &&
                  t.push(this.escapeStr(n.join(""))),
                this.opt.ignoreJoiners &&
                  t.push("\\u00ad\\u200b\\u200c\\u200d"),
                t.length
                  ? e.split(/\u0000+/).join("[".concat(t.join(""), "]*"))
                  : e
              );
            },
          },
          {
            key: "createDiacriticsRegExp",
            value: function (e) {
              var t = this.opt.caseSensitive ? "" : "i",
                n = this.opt.caseSensitive
                  ? [
                      "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                      "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                      "cçćč",
                      "CÇĆČ",
                      "dđď",
                      "DĐĎ",
                      "eèéẻẽẹêềếểễệëěēę",
                      "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                      "iìíỉĩịîïī",
                      "IÌÍỈĨỊÎÏĪ",
                      "lł",
                      "LŁ",
                      "nñňń",
                      "NÑŇŃ",
                      "oòóỏõọôồốổỗộơởỡớờợöøō",
                      "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                      "rř",
                      "RŘ",
                      "sšśșş",
                      "SŠŚȘŞ",
                      "tťțţ",
                      "TŤȚŢ",
                      "uùúủũụưừứửữựûüůū",
                      "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                      "yýỳỷỹỵÿ",
                      "YÝỲỶỸỴŸ",
                      "zžżź",
                      "ZŽŻŹ",
                    ]
                  : [
                      "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                      "cçćčCÇĆČ",
                      "dđďDĐĎ",
                      "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                      "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                      "lłLŁ",
                      "nñňńNÑŇŃ",
                      "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                      "rřRŘ",
                      "sšśșşSŠŚȘŞ",
                      "tťțţTŤȚŢ",
                      "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                      "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                      "zžżźZŽŻŹ",
                    ],
                r = [];
              return (
                e.split("").forEach(function (o) {
                  n.every(function (n) {
                    if (-1 !== n.indexOf(o)) {
                      if (r.indexOf(n) > -1) return !1;
                      (e = e.replace(
                        new RegExp("[".concat(n, "]"), "gm".concat(t)),
                        "[".concat(n, "]")
                      )),
                        r.push(n);
                    }
                    return !0;
                  });
                }),
                e
              );
            },
          },
          {
            key: "createMergedBlanksRegExp",
            value: function (e) {
              return e.replace(/[\s]+/gim, "[\\s]+");
            },
          },
          {
            key: "createAccuracyRegExp",
            value: function (e) {
              var t = this,
                n = this.opt.accuracy,
                r = "string" == typeof n ? n : n.value,
                o = "string" == typeof n ? [] : n.limiters,
                i = "";
              switch (
                (o.forEach(function (e) {
                  i += "|".concat(t.escapeStr(e));
                }),
                r)
              ) {
                case "partially":
                default:
                  return "()(".concat(e, ")");
                case "complementary":
                  return (
                    (i =
                      "\\s" +
                      (i ||
                        this.escapeStr(
                          "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"
                        ))),
                    "()([^".concat(i, "]*").concat(e, "[^").concat(i, "]*)")
                  );
                case "exactly":
                  return "(^|\\s"
                    .concat(i, ")(")
                    .concat(e, ")(?=$|\\s")
                    .concat(i, ")");
              }
            },
          },
        ]),
        e
      );
    })(),
    c = (function () {
      function e(t) {
        n(this, e), (this.ctx = t), (this.ie = !1);
        var r = window.navigator.userAgent;
        (r.indexOf("MSIE") > -1 || r.indexOf("Trident") > -1) && (this.ie = !0);
      }
      return (
        o(e, [
          {
            key: "log",
            value: function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "debug",
                r = this.opt.log;
              this.opt.debug &&
                "object" === t(r) &&
                "function" == typeof r[n] &&
                r[n]("mark.js: ".concat(e));
            },
          },
          {
            key: "getSeparatedKeywords",
            value: function (e) {
              var t = this,
                n = [];
              return (
                e.forEach(function (e) {
                  t.opt.separateWordSearch
                    ? e.split(" ").forEach(function (e) {
                        e.trim() && -1 === n.indexOf(e) && n.push(e);
                      })
                    : e.trim() && -1 === n.indexOf(e) && n.push(e);
                }),
                {
                  keywords: n.sort(function (e, t) {
                    return t.length - e.length;
                  }),
                  length: n.length,
                }
              );
            },
          },
          {
            key: "isNumeric",
            value: function (e) {
              return Number(parseFloat(e)) == e;
            },
          },
          {
            key: "checkRanges",
            value: function (e) {
              var t = this;
              if (
                !Array.isArray(e) ||
                "[object Object]" !== Object.prototype.toString.call(e[0])
              )
                return (
                  this.log("markRanges() will only accept an array of objects"),
                  this.opt.noMatch(e),
                  []
                );
              var n = [],
                r = 0;
              return (
                e
                  .sort(function (e, t) {
                    return e.start - t.start;
                  })
                  .forEach(function (e) {
                    var o = t.callNoMatchOnInvalidRanges(e, r),
                      i = o.start,
                      a = o.end;
                    o.valid &&
                      ((e.start = i), (e.length = a - i), n.push(e), (r = a));
                  }),
                n
              );
            },
          },
          {
            key: "callNoMatchOnInvalidRanges",
            value: function (e, t) {
              var n,
                r,
                o = !1;
              return (
                e && void 0 !== e.start
                  ? ((r = (n = parseInt(e.start, 10)) + parseInt(e.length, 10)),
                    this.isNumeric(e.start) &&
                    this.isNumeric(e.length) &&
                    r - t > 0 &&
                    r - n > 0
                      ? (o = !0)
                      : (this.log(
                          "Ignoring invalid or overlapping range: " +
                            "".concat(JSON.stringify(e))
                        ),
                        this.opt.noMatch(e)))
                  : (this.log(
                      "Ignoring invalid range: ".concat(JSON.stringify(e))
                    ),
                    this.opt.noMatch(e)),
                { start: n, end: r, valid: o }
              );
            },
          },
          {
            key: "checkWhitespaceRanges",
            value: function (e, t, n) {
              var r,
                o = !0,
                i = n.length,
                a = t - i,
                s = parseInt(e.start, 10) - a;
              return (
                (r = (s = s > i ? i : s) + parseInt(e.length, 10)) > i &&
                  ((r = i),
                  this.log(
                    "End range automatically set to the max value of ".concat(i)
                  )),
                s < 0 || r - s < 0 || s > i || r > i
                  ? ((o = !1),
                    this.log("Invalid range: ".concat(JSON.stringify(e))),
                    this.opt.noMatch(e))
                  : "" === n.substring(s, r).replace(/\s+/g, "") &&
                    ((o = !1),
                    this.log(
                      "Skipping whitespace only range: " + JSON.stringify(e)
                    ),
                    this.opt.noMatch(e)),
                { start: s, end: r, valid: o }
              );
            },
          },
          {
            key: "getTextNodes",
            value: function (e) {
              var t = this,
                n = "",
                r = [];
              this.iterator.forEachNode(
                NodeFilter.SHOW_TEXT,
                function (e) {
                  r.push({
                    start: n.length,
                    end: (n += e.textContent).length,
                    node: e,
                  });
                },
                function (e) {
                  return t.matchesExclude(e.parentNode)
                    ? NodeFilter.FILTER_REJECT
                    : NodeFilter.FILTER_ACCEPT;
                },
                function () {
                  e({ value: n, nodes: r });
                }
              );
            },
          },
          {
            key: "matchesExclude",
            value: function (e) {
              return a.matches(
                e,
                this.opt.exclude.concat([
                  "script",
                  "style",
                  "title",
                  "head",
                  "html",
                ])
              );
            },
          },
          {
            key: "wrapRangeInTextNode",
            value: function (e, t, n) {
              var r = this.opt.element ? this.opt.element : "mark",
                o = e.splitText(t),
                i = o.splitText(n - t),
                a = document.createElement(r);
              return (
                a.setAttribute("data-markjs", "true"),
                this.opt.className &&
                  a.setAttribute("class", this.opt.className),
                (a.textContent = o.textContent),
                o.parentNode.replaceChild(a, o),
                i
              );
            },
          },
          {
            key: "wrapRangeInMappedTextNode",
            value: function (e, t, n, r, o) {
              var i = this;
              e.nodes.every(function (a, s) {
                var c = e.nodes[s + 1];
                if (void 0 === c || c.start > t) {
                  if (!r(a.node)) return !1;
                  var u = t - a.start,
                    l = (n > a.end ? a.end : n) - a.start,
                    h = e.value.substr(0, a.start),
                    f = e.value.substr(l + a.start);
                  if (
                    ((a.node = i.wrapRangeInTextNode(a.node, u, l)),
                    (e.value = h + f),
                    e.nodes.forEach(function (t, n) {
                      n >= s &&
                        (e.nodes[n].start > 0 &&
                          n !== s &&
                          (e.nodes[n].start -= l),
                        (e.nodes[n].end -= l));
                    }),
                    (n -= l),
                    o(a.node.previousSibling, a.start),
                    !(n > a.end))
                  )
                    return !1;
                  t = a.end;
                }
                return !0;
              });
            },
          },
          {
            key: "wrapGroups",
            value: function (e, t, n, r) {
              return (
                r((e = this.wrapRangeInTextNode(e, t, t + n)).previousSibling),
                e
              );
            },
          },
          {
            key: "separateGroups",
            value: function (e, t, n, r, o) {
              for (var i = t.length, a = 1; a < i; a++) {
                var s = e.textContent.indexOf(t[a]);
                t[a] &&
                  s > -1 &&
                  r(t[a], e) &&
                  (e = this.wrapGroups(e, s, t[a].length, o));
              }
              return e;
            },
          },
          {
            key: "wrapMatches",
            value: function (e, t, n, r, o) {
              var i = this,
                a = 0 === t ? 0 : t + 1;
              this.getTextNodes(function (t) {
                t.nodes.forEach(function (t) {
                  var o;
                  for (
                    t = t.node;
                    null !== (o = e.exec(t.textContent)) && "" !== o[a];

                  ) {
                    if (i.opt.separateGroups)
                      t = i.separateGroups(t, o, a, n, r);
                    else {
                      if (!n(o[a], t)) continue;
                      var s = o.index;
                      if (0 !== a) for (var c = 1; c < a; c++) s += o[c].length;
                      t = i.wrapGroups(t, s, o[a].length, r);
                    }
                    e.lastIndex = 0;
                  }
                }),
                  o();
              });
            },
          },
          {
            key: "wrapMatchesAcrossElements",
            value: function (e, t, n, r, o) {
              var i = this,
                a = 0 === t ? 0 : t + 1;
              this.getTextNodes(function (t) {
                for (var s; null !== (s = e.exec(t.value)) && "" !== s[a]; ) {
                  var c = s.index;
                  if (0 !== a) for (var u = 1; u < a; u++) c += s[u].length;
                  var l = c + s[a].length;
                  i.wrapRangeInMappedTextNode(
                    t,
                    c,
                    l,
                    function (e) {
                      return n(s[a], e);
                    },
                    function (t, n) {
                      (e.lastIndex = n), r(t);
                    }
                  );
                }
                o();
              });
            },
          },
          {
            key: "wrapRangeFromIndex",
            value: function (e, t, n, r) {
              var o = this;
              this.getTextNodes(function (i) {
                var a = i.value.length;
                e.forEach(function (e, r) {
                  var s = o.checkWhitespaceRanges(e, a, i.value),
                    c = s.start,
                    u = s.end;
                  s.valid &&
                    o.wrapRangeInMappedTextNode(
                      i,
                      c,
                      u,
                      function (n) {
                        return t(n, e, i.value.substring(c, u), r);
                      },
                      function (t) {
                        n(t, e);
                      }
                    );
                }),
                  r();
              });
            },
          },
          {
            key: "unwrapMatches",
            value: function (e) {
              for (
                var t = e.parentNode, n = document.createDocumentFragment();
                e.firstChild;

              )
                n.appendChild(e.removeChild(e.firstChild));
              t.replaceChild(n, e),
                this.ie ? this.normalizeTextNode(t) : t.normalize();
            },
          },
          {
            key: "normalizeTextNode",
            value: function (e) {
              if (e) {
                if (3 === e.nodeType)
                  for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                    (e.nodeValue += e.nextSibling.nodeValue),
                      e.parentNode.removeChild(e.nextSibling);
                else this.normalizeTextNode(e.firstChild);
                this.normalizeTextNode(e.nextSibling);
              }
            },
          },
          {
            key: "markRegExp",
            value: function (e, t) {
              var n = this;
              (this.opt = t),
                this.log('Searching with expression "'.concat(e, '"'));
              var r = 0,
                o = "wrapMatches";
              this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                this[o](
                  e,
                  this.opt.ignoreGroups,
                  function (e, t) {
                    return n.opt.filter(t, e, r);
                  },
                  function (e) {
                    r++, n.opt.each(e);
                  },
                  function () {
                    0 === r && n.opt.noMatch(e), n.opt.done(r);
                  }
                );
            },
          },
          {
            key: "mark",
            value: function (e, t) {
              var n = this;
              this.opt = t;
              var r = 0,
                o = "wrapMatches",
                i = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                a = i.keywords,
                c = i.length;
              this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                0 === c
                  ? this.opt.done(r)
                  : (function e(t) {
                      var i = new s(n.opt).create(t),
                        u = 0;
                      n.log('Searching with expression "'.concat(i, '"')),
                        n[o](
                          i,
                          1,
                          function (e, o) {
                            return n.opt.filter(o, t, r, u);
                          },
                          function (e) {
                            u++, r++, n.opt.each(e);
                          },
                          function () {
                            0 === u && n.opt.noMatch(t),
                              a[c - 1] === t
                                ? n.opt.done(r)
                                : e(a[a.indexOf(t) + 1]);
                          }
                        );
                    })(a[0]);
            },
          },
          {
            key: "markRanges",
            value: function (e, t) {
              var n = this;
              this.opt = t;
              var r = 0,
                o = this.checkRanges(e);
              o && o.length
                ? (this.log(
                    "Starting to mark with the following ranges: " +
                      JSON.stringify(o)
                  ),
                  this.wrapRangeFromIndex(
                    o,
                    function (e, t, r, o) {
                      return n.opt.filter(e, t, r, o);
                    },
                    function (e, t) {
                      r++, n.opt.each(e, t);
                    },
                    function () {
                      n.opt.done(r);
                    }
                  ))
                : this.opt.done(r);
            },
          },
          {
            key: "unmark",
            value: function (e) {
              var t = this;
              this.opt = e;
              var n = this.opt.element ? this.opt.element : "*";
              (n += "[data-markjs]"),
                this.opt.className && (n += ".".concat(this.opt.className)),
                this.log('Removal selector "'.concat(n, '"')),
                this.iterator.forEachNode(
                  NodeFilter.SHOW_ELEMENT,
                  function (e) {
                    t.unwrapMatches(e);
                  },
                  function (e) {
                    var r = a.matches(e, n),
                      o = t.matchesExclude(e);
                    return !r || o
                      ? NodeFilter.FILTER_REJECT
                      : NodeFilter.FILTER_ACCEPT;
                  },
                  this.opt.done
                );
            },
          },
          {
            key: "opt",
            set: function (e) {
              this._opt = i(
                {},
                {
                  element: "",
                  className: "",
                  exclude: [],
                  iframes: !1,
                  iframesTimeout: 5e3,
                  separateWordSearch: !0,
                  acrossElements: !1,
                  ignoreGroups: 0,
                  each: function () {},
                  noMatch: function () {},
                  filter: function () {
                    return !0;
                  },
                  done: function () {},
                  debug: !1,
                  log: window.console,
                },
                e
              );
            },
            get: function () {
              return this._opt;
            },
          },
          {
            key: "iterator",
            get: function () {
              return new a(
                this.ctx,
                this.opt.iframes,
                this.opt.exclude,
                this.opt.iframesTimeout
              );
            },
          },
        ]),
        e
      );
    })();
  return (
    (e.fn.mark = function (e, t) {
      return new c(this.get()).mark(e, t), this;
    }),
    (e.fn.markRegExp = function (e, t) {
      return new c(this.get()).markRegExp(e, t), this;
    }),
    (e.fn.markRanges = function (e, t) {
      return new c(this.get()).markRanges(e, t), this;
    }),
    (e.fn.unmark = function (e) {
      return new c(this.get()).unmark(e), this;
    }),
    e
  );
});

// datatables.mark.min.js
("use strict");
var _createClass = (function () {
    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, e, n) {
      return e && a(t.prototype, e), n && a(t, n), t;
    };
  })(),
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        };
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
!(function (e, t, n) {
  var a;
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports))
    ? ((a = require("jquery")),
      require("datatables.net"),
      require("mark.js/dist/jquery.mark.js"),
      (module.exports = e(0, n, a)))
    : "function" == typeof define && define.amd
    ? define(["jquery", "datatables.net", "markjs"], function (t) {
        return e(0, n, t);
      })
    : e(0, n, jQuery);
})(
  function (t, e, i) {
    var r =
      (_createClass(n, [
        {
          key: "initMarkListener",
          value: function () {
            var t = this,
              e = "draw.dt.dth column-visibility.dt.dth column-reorder.dt.dth";
            e += " responsive-display.dt.dth";
            var n = null;
            this.instance.on(e, function () {
              t.instance.rows({ filter: "applied", page: "current" }).nodes()
                .length > t.intervalThreshold
                ? (clearTimeout(n),
                  (n = setTimeout(function () {
                    t.mark();
                  }, t.intervalMs)))
                : t.mark();
            }),
              this.instance.on("destroy", function () {
                t.instance.off(e);
              }),
              this.mark();
          },
        },
        {
          key: "mark",
          value: function () {
            var a = this,
              r = this.instance.search(),
              t = i(this.instance.table().body());
            t.unmark(this.options),
              this.instance.table().rows({ search: "applied" }).data().length &&
                t.mark(r, this.options),
              this.instance
                .columns({ search: "applied", page: "current" })
                .nodes()
                .each(function (t, e) {
                  var n = a.instance.column(e).search() || r;
                  n &&
                    t.forEach(function (t) {
                      i(t).unmark(a.options).mark(n, a.options);
                    });
                });
          },
        },
      ]),
      n);
    function n(t, e) {
      if ((_classCallCheck(this, n), !i.fn.mark || !i.fn.unmark))
        throw new Error("jquery.mark.js is necessary for datatables.mark.js");
      (this.instance = t),
        (this.options =
          "object" === (void 0 === e ? "undefined" : _typeof(e)) ? e : {}),
        (this.intervalThreshold = 49),
        (this.intervalMs = 300),
        this.initMarkListener();
    }
    i(e).on("init.dt.dth", function (t, e) {
      var n, a;
      "dt" === t.namespace &&
        ((a = null),
        (n = i.fn.dataTable.Api(e)).init().mark
          ? (a = n.init().mark)
          : i.fn.dataTable.defaults.mark && (a = i.fn.dataTable.defaults.mark),
        null !== a && new r(n, a));
    });
  },
  window,
  document
);

// buttons.colVis.min.js
(function (g) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (e) {
          return g(e, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (e, f) {
        e || (e = window);
        (f && f.fn.dataTable) || (f = require("datatables.net")(e, f).$);
        f.fn.dataTable.Buttons || require("datatables.net-buttons")(e, f);
        return g(f, e, e.document);
      })
    : g(jQuery, window, document);
})(function (g, e, f, l) {
  e = g.fn.dataTable;
  g.extend(e.ext.buttons, {
    colvis: function (b, a) {
      return {
        extend: "collection",
        text: function (c) {
          return c.i18n("buttons.colvis", "Column visibility");
        },
        className: "buttons-colvis",
        buttons: [
          {
            extend: "columnsToggle",
            columns: a.columns,
            columnText: a.columnText,
          },
        ],
      };
    },
    columnsToggle: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnToggle",
            columns: c,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnToggle: function (b, a) {
      return {
        extend: "columnVisibility",
        columns: a.columns,
        columnText: a.columnText,
      };
    },
    columnsVisibility: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnVisibility",
            columns: c,
            visibility: a.visibility,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnVisibility: {
      columns: l,
      text: function (b, a, c) {
        return c._columnText(b, c);
      },
      className: "buttons-columnVisibility",
      action: function (b, a, c, d) {
        b = a.columns(d.columns);
        a = b.visible();
        b.visible(d.visibility !== l ? d.visibility : !(a.length && a[0]));
      },
      init: function (b, a, c) {
        var d = this;
        a.attr("data-cv-idx", c.columns);
        b.on("column-visibility.dt" + c.namespace, function (h, k) {
          k.bDestroying ||
            k.nTable != b.settings()[0].nTable ||
            d.active(b.column(c.columns).visible());
        }).on("column-reorder.dt" + c.namespace, function (h, k, m) {
          1 === b.columns(c.columns).count() &&
            (d.text(c._columnText(b, c)),
            d.active(b.column(c.columns).visible()));
        });
        this.active(b.column(c.columns).visible());
      },
      destroy: function (b, a, c) {
        b.off("column-visibility.dt" + c.namespace).off(
          "column-reorder.dt" + c.namespace
        );
      },
      _columnText: function (b, a) {
        var c = b.column(a.columns).index(),
          d = b.settings()[0].aoColumns[c].sTitle;
        d || (d = b.column(c).header().innerHTML);
        d = d
          .replace(/\n/g, " ")
          .replace(/<br\s*\/?>/gi, " ")
          .replace(/<select(.*?)<\/select>/g, "")
          .replace(/<!\-\-.*?\-\->/g, "")
          .replace(/<.*?>/g, "")
          .replace(/^\s+|\s+$/g, "");
        return a.columnText ? a.columnText(b, c, d) : d;
      },
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (b) {
        return b.i18n("buttons.colvisRestore", "Restore visibility");
      },
      init: function (b, a, c) {
        c._visOriginal = b
          .columns()
          .indexes()
          .map(function (d) {
            return b.column(d).visible();
          })
          .toArray();
      },
      action: function (b, a, c, d) {
        a.columns().every(function (h) {
          h =
            a.colReorder && a.colReorder.transpose
              ? a.colReorder.transpose(h, "toOriginal")
              : h;
          this.visible(d._visOriginal[h]);
        });
      },
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (b, a, c, d) {
        a.columns(d.show).visible(!0, !1);
        a.columns(d.hide).visible(!1, !1);
        a.columns.adjust();
      },
      show: [],
      hide: [],
    },
  });
  return e.Buttons;
});

// dataTables.keyTable.min.js
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var h = 0;
  return function () {
    return h < b.length ? { done: !1, value: b[h++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (b) {
  return { next: $jscomp.arrayIteratorImpl(b) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (b, h, k) {
        if (b == Array.prototype || b == Object.prototype) return b;
        b[h] = k.value;
        return b;
      };
$jscomp.getGlobal = function (b) {
  b = [
    "object" == typeof globalThis && globalThis,
    b,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var h = 0; h < b.length; ++h) {
    var k = b[h];
    if (k && k.Math == Math) return k;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (b, h) {
  var k = $jscomp.propertyToPolyfillSymbol[h];
  if (null == k) return b[h];
  k = b[k];
  return void 0 !== k ? k : b[h];
};
$jscomp.polyfill = function (b, h, k, n) {
  h &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(b, h, k, n)
      : $jscomp.polyfillUnisolated(b, h, k, n));
};
$jscomp.polyfillUnisolated = function (b, h, k, n) {
  k = $jscomp.global;
  b = b.split(".");
  for (n = 0; n < b.length - 1; n++) {
    var m = b[n];
    if (!(m in k)) return;
    k = k[m];
  }
  b = b[b.length - 1];
  n = k[b];
  h = h(n);
  h != n &&
    null != h &&
    $jscomp.defineProperty(k, b, { configurable: !0, writable: !0, value: h });
};
$jscomp.polyfillIsolated = function (b, h, k, n) {
  var m = b.split(".");
  b = 1 === m.length;
  n = m[0];
  n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var u = 0; u < m.length - 1; u++) {
    var w = m[u];
    if (!(w in n)) return;
    n = n[w];
  }
  m = m[m.length - 1];
  k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? n[m] : null;
  h = h(k);
  null != h &&
    (b
      ? $jscomp.defineProperty($jscomp.polyfills, m, {
          configurable: !0,
          writable: !0,
          value: h,
        })
      : h !== k &&
        (($jscomp.propertyToPolyfillSymbol[m] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(m)
          : $jscomp.POLYFILL_PREFIX + m),
        (m = $jscomp.propertyToPolyfillSymbol[m]),
        $jscomp.defineProperty(n, m, {
          configurable: !0,
          writable: !0,
          value: h,
        })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (b) {
    if (b) return b;
    var h = function (m, u) {
      this.$jscomp$symbol$id_ = m;
      $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: u,
      });
    };
    h.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var k = 0,
      n = function (m) {
        if (this instanceof n)
          throw new TypeError("Symbol is not a constructor");
        return new h("jscomp_symbol_" + (m || "") + "_" + k++, m);
      };
    return n;
  },
  "es6",
  "es3"
);
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill(
  "Symbol.iterator",
  function (b) {
    if (b) return b;
    b = Symbol("Symbol.iterator");
    for (
      var h =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        k = 0;
      k < h.length;
      k++
    ) {
      var n = $jscomp.global[h[k]];
      "function" === typeof n &&
        "function" != typeof n.prototype[b] &&
        $jscomp.defineProperty(n.prototype, b, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          },
        });
    }
    return b;
  },
  "es6",
  "es3"
);
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (b) {
  b = { next: b };
  b[Symbol.iterator] = function () {
    return this;
  };
  return b;
};
$jscomp.iteratorFromArray = function (b, h) {
  b instanceof String && (b += "");
  var k = 0,
    n = {
      next: function () {
        if (k < b.length) {
          var m = k++;
          return { value: h(m, b[m]), done: !1 };
        }
        n.next = function () {
          return { done: !0, value: void 0 };
        };
        return n.next();
      },
    };
  n[Symbol.iterator] = function () {
    return n;
  };
  return n;
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (b) {
    return b
      ? b
      : function () {
          return $jscomp.iteratorFromArray(this, function (h) {
            return h;
          });
        };
  },
  "es6",
  "es3"
);
(function (b) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (h) {
        return b(h, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (h, k) {
        h || (h = window);
        (k && k.fn.dataTable) || (k = require("datatables.net")(h, k).$);
        return b(k, h, h.document);
      })
    : b(jQuery, window, document);
})(function (b, h, k, n) {
  var m = b.fn.dataTable,
    u = 0,
    w = 0,
    t = function (a, c) {
      if (!m.versionCheck || !m.versionCheck("1.10.8"))
        throw "KeyTable requires DataTables 1.10.8 or newer";
      this.c = b.extend(!0, {}, m.defaults.keyTable, t.defaults, c);
      this.s = {
        dt: new m.Api(a),
        enable: !0,
        focusDraw: !1,
        waitingForDraw: !1,
        lastFocus: null,
        namespace: ".keyTable-" + u++,
        tabInput: null,
      };
      this.dom = {};
      a = this.s.dt.settings()[0];
      if ((c = a.keytable)) return c;
      a.keytable = this;
      this._constructor();
    };
  b.extend(t.prototype, {
    blur: function () {
      this._blur();
    },
    enable: function (a) {
      this.s.enable = a;
    },
    enabled: function () {
      return this.s.enable;
    },
    focus: function (a, c) {
      this._focus(this.s.dt.cell(a, c));
    },
    focused: function (a) {
      if (!this.s.lastFocus) return !1;
      var c = this.s.lastFocus.cell.index();
      return a.row === c.row && a.column === c.column;
    },
    _constructor: function () {
      this._tabInput();
      var a = this,
        c = this.s.dt,
        e = b(c.table().node()),
        d = this.s.namespace,
        g = !1;
      "static" === e.css("position") && e.css("position", "relative");
      b(c.table().body()).on("click" + d, "th, td", function (f) {
        if (!1 !== a.s.enable) {
          var q = c.cell(this);
          q.any() && a._focus(q, null, !1, f);
        }
      });
      b(k).on("keydown" + d, function (f) {
        g || a._key(f);
      });
      if (this.c.blurable)
        b(k).on("mousedown" + d, function (f) {
          b(f.target).parents(".dataTables_filter").length && a._blur();
          b(f.target).parents().filter(c.table().container()).length ||
            b(f.target).parents("div.DTE").length ||
            b(f.target).parents("div.editor-datetime").length ||
            b(f.target).parents("div.dt-datetime").length ||
            b(f.target).parents().filter(".DTFC_Cloned").length ||
            a._blur();
        });
      if (this.c.editor) {
        var p = this.c.editor;
        p.on("open.keyTableMain", function (f, q, r) {
          "inline" !== q &&
            a.s.enable &&
            (a.enable(!1),
            p.one("close" + d, function () {
              a.enable(!0);
            }));
        });
        if (this.c.editOnFocus)
          c.on("key-focus" + d + " key-refocus" + d, function (f, q, r, v) {
            a._editor(null, v, !0);
          });
        c.on("key" + d, function (f, q, r, v, x) {
          a._editor(r, x, !1);
        });
        b(c.table().body()).on("dblclick" + d, "th, td", function (f) {
          !1 !== a.s.enable &&
            c.cell(this).any() &&
            ((a.s.lastFocus && this !== a.s.lastFocus.cell.node()) ||
              a._editor(null, f, !0));
        });
        p.on("preSubmit", function () {
          g = !0;
        })
          .on("preSubmitCancelled", function () {
            g = !1;
          })
          .on("submitComplete", function () {
            g = !1;
          });
      }
      if (c.settings()[0].oFeatures.bStateSave)
        c.on("stateSaveParams" + d, function (f, q, r) {
          r.keyTable = a.s.lastFocus ? a.s.lastFocus.cell.index() : null;
        });
      c.on("column-visibility" + d, function (f) {
        a._tabInput();
      });
      c.on("draw" + d, function (f) {
        a._tabInput();
        if (!a.s.focusDraw && a.s.lastFocus) {
          var q = a.s.lastFocus.relative,
            r = c.page.info(),
            v = q.row + r.start;
          0 !== r.recordsDisplay &&
            (v >= r.recordsDisplay && (v = r.recordsDisplay - 1),
            a._focus(v, q.column, !0, f));
        }
      });
      this.c.clipboard && this._clipboard();
      c.on("destroy" + d, function () {
        a._blur(!0);
        c.off(d);
        b(c.table().body())
          .off("click" + d, "th, td")
          .off("dblclick" + d, "th, td");
        b(k)
          .off("mousedown" + d)
          .off("keydown" + d)
          .off("copy" + d)
          .off("paste" + d);
      });
      var l = c.state.loaded();
      if (l && l.keyTable)
        c.one("init", function () {
          var f = c.cell(l.keyTable);
          f.any() && f.focus();
        });
      else this.c.focus && c.cell(this.c.focus).focus();
    },
    _blur: function (a) {
      if (this.s.enable && this.s.lastFocus) {
        var c = this.s.lastFocus.cell;
        b(c.node()).removeClass(this.c.className);
        this.s.lastFocus = null;
        a ||
          (this._updateFixedColumns(c.index().column),
          this._emitEvent("key-blur", [this.s.dt, c]));
      }
    },
    _clipboard: function () {
      var a = this.s.dt,
        c = this,
        e = this.s.namespace;
      h.getSelection &&
        (b(k).on("copy" + e, function (d) {
          d = d.originalEvent;
          var g = h.getSelection().toString(),
            p = c.s.lastFocus;
          !g &&
            p &&
            (d.clipboardData.setData(
              "text/plain",
              p.cell.render(c.c.clipboardOrthogonal)
            ),
            d.preventDefault());
        }),
        b(k).on("paste" + e, function (d) {
          d = d.originalEvent;
          var g = c.s.lastFocus,
            p = k.activeElement,
            l = c.c.editor,
            f;
          !g ||
            (p && "body" !== p.nodeName.toLowerCase()) ||
            (d.preventDefault(),
            h.clipboardData && h.clipboardData.getData
              ? (f = h.clipboardData.getData("Text"))
              : d.clipboardData &&
                d.clipboardData.getData &&
                (f = d.clipboardData.getData("text/plain")),
            l
              ? l.inline(g.cell.index()).set(l.displayed()[0], f).submit()
              : (g.cell.data(f), a.draw(!1)));
        }));
    },
    _columns: function () {
      var a = this.s.dt,
        c = a.columns(this.c.columns).indexes(),
        e = [];
      a.columns(":visible").every(function (d) {
        -1 !== c.indexOf(d) && e.push(d);
      });
      return e;
    },
    _editor: function (a, c, e) {
      if (this.s.lastFocus && (!c || "draw" !== c.type)) {
        var d = this,
          g = this.s.dt,
          p = this.c.editor,
          l = this.s.lastFocus.cell,
          f = this.s.namespace + "e" + w++;
        if (
          !(
            b("div.DTE", l.node()).length ||
            (null !== a &&
              ((0 <= a && 9 >= a) ||
                11 === a ||
                12 === a ||
                (14 <= a && 31 >= a) ||
                (112 <= a && 123 >= a) ||
                (127 <= a && 159 >= a)))
          )
        ) {
          c && (c.stopPropagation(), 13 === a && c.preventDefault());
          var q = function () {
            p.one("open" + f, function () {
              p.off("cancelOpen" + f);
              e ||
                b(
                  "div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea"
                ).select();
              g.keys.enable(e ? "tab-only" : "navigation-only");
              g.on("key-blur.editor", function (r, v, x) {
                p.displayed() && x.node() === l.node() && p.submit();
              });
              e && b(g.table().container()).addClass("dtk-focus-alt");
              p.on("preSubmitCancelled" + f, function () {
                setTimeout(function () {
                  d._focus(l, null, !1);
                }, 50);
              });
              p.on("submitUnsuccessful" + f, function () {
                d._focus(l, null, !1);
              });
              p.one("close" + f, function () {
                g.keys.enable(!0);
                g.off("key-blur.editor");
                p.off(f);
                b(g.table().container()).removeClass("dtk-focus-alt");
                d.s.returnSubmit &&
                  ((d.s.returnSubmit = !1),
                  d._emitEvent("key-return-submit", [g, l]));
              });
            })
              .one("cancelOpen" + f, function () {
                p.off(f);
              })
              .inline(l.index());
          };
          13 === a
            ? ((e = !0),
              b(k).one("keyup", function () {
                q();
              }))
            : q();
        }
      }
    },
    _emitEvent: function (a, c) {
      this.s.dt.iterator("table", function (e, d) {
        b(e.nTable).triggerHandler(a, c);
      });
    },
    _focus: function (a, c, e, d) {
      var g = this,
        p = this.s.dt,
        l = p.page.info(),
        f = this.s.lastFocus;
      d || (d = null);
      if (this.s.enable) {
        if ("number" !== typeof a) {
          if (!a.any()) return;
          var q = a.index();
          c = q.column;
          a = p
            .rows({ filter: "applied", order: "applied" })
            .indexes()
            .indexOf(q.row);
          if (0 > a) return;
          l.serverSide && (a += l.start);
        }
        if (-1 !== l.length && (a < l.start || a >= l.start + l.length))
          (this.s.focusDraw = !0),
            (this.s.waitingForDraw = !0),
            p
              .one("draw", function () {
                g.s.focusDraw = !1;
                g.s.waitingForDraw = !1;
                g._focus(a, c, n, d);
              })
              .page(Math.floor(a / l.length))
              .draw(!1);
        else if (-1 !== b.inArray(c, this._columns())) {
          l.serverSide && (a -= l.start);
          l = p
            .cells(null, c, { search: "applied", order: "applied" })
            .flatten();
          l = p.cell(l[a]);
          if (f) {
            if (f.node === l.node()) {
              this._emitEvent("key-refocus", [this.s.dt, l, d || null]);
              return;
            }
            this._blur();
          }
          this._removeOtherFocus();
          f = b(l.node());
          f.addClass(this.c.className);
          this._updateFixedColumns(c);
          if (e === n || !0 === e)
            this._scroll(b(h), b(k.body), f, "offset"),
              (e = p.table().body().parentNode),
              e !== p.table().header().parentNode &&
                ((e = b(e.parentNode)), this._scroll(e, e, f, "position"));
          this.s.lastFocus = {
            cell: l,
            node: l.node(),
            relative: {
              row: p.rows({ page: "current" }).indexes().indexOf(l.index().row),
              column: l.index().column,
            },
          };
          this._emitEvent("key-focus", [this.s.dt, l, d || null]);
          p.state.save();
        }
      }
    },
    _key: function (a) {
      if (this.s.waitingForDraw) a.preventDefault();
      else {
        var c = this.s.enable;
        this.s.returnSubmit =
          ("navigation-only" !== c && "tab-only" !== c) || 13 !== a.keyCode
            ? !1
            : !0;
        var e = !0 === c || "navigation-only" === c;
        if (
          c &&
          (!(0 === a.keyCode || a.ctrlKey || a.metaKey || a.altKey) ||
            (a.ctrlKey && a.altKey))
        ) {
          var d = this.s.lastFocus;
          if (d)
            if (this.s.dt.cell(d.node).any()) {
              d = this.s.dt;
              var g = this.s.dt.settings()[0].oScroll.sY ? !0 : !1;
              if (!this.c.keys || -1 !== b.inArray(a.keyCode, this.c.keys))
                switch (a.keyCode) {
                  case 9:
                    this._shift(a, a.shiftKey ? "left" : "right", !0);
                    break;
                  case 27:
                    this.s.blurable && !0 === c && this._blur();
                    break;
                  case 33:
                  case 34:
                    e &&
                      !g &&
                      (a.preventDefault(),
                      d.page(33 === a.keyCode ? "previous" : "next").draw(!1));
                    break;
                  case 35:
                  case 36:
                    e &&
                      (a.preventDefault(),
                      (c = d.cells({ page: "current" }).indexes()),
                      (e = this._columns()),
                      this._focus(
                        d.cell(c[35 === a.keyCode ? c.length - 1 : e[0]]),
                        null,
                        !0,
                        a
                      ));
                    break;
                  case 37:
                    e && this._shift(a, "left");
                    break;
                  case 38:
                    e && this._shift(a, "up");
                    break;
                  case 39:
                    e && this._shift(a, "right");
                    break;
                  case 40:
                    e && this._shift(a, "down");
                    break;
                  case 113:
                    if (this.c.editor) {
                      this._editor(null, a, !0);
                      break;
                    }
                  default:
                    !0 === c &&
                      this._emitEvent("key", [
                        d,
                        a.keyCode,
                        this.s.lastFocus.cell,
                        a,
                      ]);
                }
            } else this.s.lastFocus = null;
        }
      }
    },
    _removeOtherFocus: function () {
      var a = this.s.dt.table().node();
      b.fn.dataTable.tables({ api: !0 }).iterator("table", function (c) {
        this.table().node() !== a && this.cell.blur();
      });
    },
    _scroll: function (a, c, e, d) {
      var g = e[d](),
        p = e.outerHeight(),
        l = e.outerWidth(),
        f = c.scrollTop(),
        q = c.scrollLeft(),
        r = a.height();
      a = a.width();
      "position" === d &&
        (g.top += parseInt(e.closest("table").css("top"), 10));
      g.top < f && c.scrollTop(g.top);
      g.left < q && c.scrollLeft(g.left);
      g.top + p > f + r && p < r && c.scrollTop(g.top + p - r);
      g.left + l > q + a && l < a && c.scrollLeft(g.left + l - a);
    },
    _shift: function (a, c, e) {
      var d = this.s.dt,
        g = d.page.info(),
        p = g.recordsDisplay,
        l = this._columns(),
        f = this.s.lastFocus;
      if (f) {
        var q = f.cell;
        q &&
          ((f = d
            .rows({ filter: "applied", order: "applied" })
            .indexes()
            .indexOf(q.index().row)),
          g.serverSide && (f += g.start),
          (d = d.columns(l).indexes().indexOf(q.index().column)),
          (g = f),
          (f = l[d]),
          "right" === c
            ? d >= l.length - 1
              ? (g++, (f = l[0]))
              : (f = l[d + 1])
            : "left" === c
            ? 0 === d
              ? (g--, (f = l[l.length - 1]))
              : (f = l[d - 1])
            : "up" === c
            ? g--
            : "down" === c && g++,
          0 <= g && g < p && -1 !== b.inArray(f, l)
            ? (a && a.preventDefault(), this._focus(g, f, !0, a))
            : e && this.c.blurable
            ? this._blur()
            : a && a.preventDefault());
      }
    },
    _tabInput: function () {
      var a = this,
        c = this.s.dt,
        e =
          null !== this.c.tabIndex
            ? this.c.tabIndex
            : c.settings()[0].iTabIndex;
      -1 != e &&
        (this.s.tabInput ||
          ((e = b('<div><input type="text" tabindex="' + e + '"/></div>').css({
            position: "absolute",
            height: 1,
            width: 0,
            overflow: "hidden",
          })),
          e.children().on("focus", function (d) {
            var g = c.cell(":eq(0)", a._columns(), { page: "current" });
            g.any() && a._focus(g, null, !0, d);
          }),
          (this.s.tabInput = e)),
        (e = this.s.dt
          .cell(":eq(0)", "0:visible", { page: "current", order: "current" })
          .node()) && b(e).prepend(this.s.tabInput));
    },
    _updateFixedColumns: function (a) {
      var c = this.s.dt,
        e = c.settings()[0];
      if (e._oFixedColumns) {
        var d = e.aoColumns.length - e._oFixedColumns.s.iRightColumns;
        (a < e._oFixedColumns.s.iLeftColumns || a >= d) &&
          c.fixedColumns().update();
      }
    },
  });
  t.defaults = {
    blurable: !0,
    className: "focus",
    clipboard: !0,
    clipboardOrthogonal: "display",
    columns: "",
    editor: null,
    editOnFocus: !1,
    focus: null,
    keys: null,
    tabIndex: null,
  };
  t.version = "2.6.1";
  b.fn.dataTable.KeyTable = t;
  b.fn.DataTable.KeyTable = t;
  m.Api.register("cell.blur()", function () {
    return this.iterator("table", function (a) {
      a.keytable && a.keytable.blur();
    });
  });
  m.Api.register("cell().focus()", function () {
    return this.iterator("cell", function (a, c, e) {
      a.keytable && a.keytable.focus(c, e);
    });
  });
  m.Api.register("keys.disable()", function () {
    return this.iterator("table", function (a) {
      a.keytable && a.keytable.enable(!1);
    });
  });
  m.Api.register("keys.enable()", function (a) {
    return this.iterator("table", function (c) {
      c.keytable && c.keytable.enable(a === n ? !0 : a);
    });
  });
  m.Api.register("keys.enabled()", function (a) {
    a = this.context;
    return a.length ? (a[0].keytable ? a[0].keytable.enabled() : !1) : !1;
  });
  m.Api.register("keys.move()", function (a) {
    return this.iterator("table", function (c) {
      c.keytable && c.keytable._shift(null, a, !1);
    });
  });
  m.ext.selector.cell.push(function (a, c, e) {
    c = c.focused;
    a = a.keytable;
    var d = [];
    if (!a || c === n) return e;
    for (var g = 0, p = e.length; g < p; g++)
      ((!0 === c && a.focused(e[g])) || (!1 === c && !a.focused(e[g]))) &&
        d.push(e[g]);
    return d;
  });
  b(k).on("preInit.dt.dtk", function (a, c, e) {
    "dt" === a.namespace &&
      ((a = c.oInit.keys), (e = m.defaults.keys), a || e) &&
      ((e = b.extend({}, e, a)), !1 !== a && new t(c, e));
  });
  return t;
});

// dataTables.keepConditions.min.js
("use strict");
function _typeof(t) {
  return t && "undefined" != typeof Symbol && t.constructor === Symbol
    ? "symbol"
    : typeof t;
}
function _classCallCheck(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
var _createClass = (function () {
    function t(t, n) {
      for (var e = 0; e < n.length; e++) {
        var i = n[e];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (n, e, i) {
      return e && t(n.prototype, e), i && t(n, i), n;
    };
  })(),
  KeepConditions = (function () {
    function t(n) {
      if (
        (_classCallCheck(this, t),
        !$.fn.DataTable.isDataTable(n) && !n instanceof $.fn.dataTable.Api)
      )
        throw new Error(
          "Failed to initialize KeepConditions plugin on non-datatable object"
        );
      n instanceof $.fn.dataTable.Api
        ? (this._dtApi = n)
        : (this._dtApi = new $.fn.dataTable.Api(n)),
        (n = this._dtApi.settings()[0]),
        (this._dtSettings = n),
        (this._tableId = $(this._dtApi.table().node()).attr("id")),
        (this._dtDefaults = $.fn.dataTable.defaults),
        (this._keysToCons = this._keyMap()),
        (this._shouldDraw = !1),
        (this._enabledConditions = []),
        (this._eventNamespace = "keepConditions"),
        (n.oKeepConditions = this),
        this._init();
    }
    return (
      _createClass(
        t,
        [
          {
            key: "_init",
            value: function () {
              this._collectEnabled(),
                (this._dtSettings.oInit.keepConditions === !0 ||
                  "string" == typeof this._dtSettings.oInit.keepConditions ||
                  $.isArray(this._dtSettings.oInit.keepConditions) ||
                  ($.isPlainObject(this._dtSettings.oInit.keepConditions) &&
                    ("undefined" ==
                      typeof this._dtSettings.oInit.keepConditions
                        .attachEvents ||
                      this._dtSettings.oInit.keepConditions.attachEvents ===
                        !0))) &&
                  this.attachEvents(),
                this.processHash();
            },
          },
          {
            key: "_collectEnabled",
            value: function () {
              var t = this;
              $.each(this.conditions(), function (n, e) {
                t._isEnabled(n) && e.isInit() && t.enableCondition(n);
              });
            },
          },
          {
            key: "_keyMap",
            value: function () {
              return (function (t) {
                var n = {};
                return (
                  $.each(t, function (t, e) {
                    n[e.key] = t;
                  }),
                  n
                );
              })(this.conditions());
            },
          },
          {
            key: "_isEnabled",
            value: function (t) {
              var n = this._dtSettings.oInit.keepConditions;
              if (1 === t.length) {
                var e = this.nameByKey(t);
                if (!t)
                  throw new Error(
                    "Unable to find an existing condition with the key '" +
                      t +
                      "'"
                  );
                t = e;
              } else if (this.conditions(t) === !1)
                throw new Error(
                  "Unable to find an existing condition with the name '" +
                    t +
                    "'"
                );
              return (
                n === !0 ||
                "undefined" == typeof n ||
                ("string" == typeof n &&
                  -1 !== n.indexOf(this.conditions(t).key)) ||
                ($.isArray(n) && -1 !== $.inArray(t, n)) ||
                ($.isPlainObject(n) &&
                  $.isArray(n.conditions) &&
                  -1 !== $.inArray(t, n.conditions)) ||
                ($.isPlainObject(n) &&
                  "string" == typeof n.conditions &&
                  -1 !== n.conditions.indexOf(this.conditions(t).key))
              );
            },
          },
          {
            key: "_drawTable",
            value: function (t, n) {
              (this._shouldDraw === !0 || t === !0) &&
                (this._dtApi.draw(n === !0), (this._shouldDraw = !1));
            },
          },
          { key: "_lang", value: function (t, n) {} },
          {
            key: "structureHash",
            value: function (n) {
              return t.structureHash(this._dtSettings, n);
            },
          },
          {
            key: "dtSettings",
            value: function () {
              return this._dtSettings;
            },
          },
          {
            key: "attachEvents",
            value: function () {
              var n = this,
                e = { dtSettings: this._dtSettings },
                i = this.getEnabledConditions();
              if (i === !1)
                throw new Error("No enabled conditions to attach to events");
              var o = this.conditions(i);
              $.each(o, function (i, o) {
                n._dtApi.on(
                  o.event + "." + n._eventNamespace,
                  e,
                  t.structureHash.bind(t)
                );
              });
            },
          },
          {
            key: "detachEvents",
            value: function () {
              var t = this,
                n =
                  ({ dtSettings: this._dtSettings },
                  this.getEnabledConditions());
              if (n === !1)
                throw new Error("No enabled conditions to attach to events");
              var e = this.conditions(n);
              $.each(e, function (n, e) {
                t._isEnabled(n) &&
                  e.isInit() &&
                  t._dtApi.off(e.event + "." + t._eventNamespace);
              });
            },
          },
          {
            key: "detachEvent",
            value: function (n) {
              var e = this;
              if ("undefined" == typeof n)
                return void console.warn(
                  "No condition or event specified for KeepConditions.detachEvent(), nothing is getting detached"
                );
              var i = this.conditions(n);
              if (!i) return !1;
              var o;
              "string" == typeof n
                ? ((o = n.endsWith(".dt") ? n : i.event),
                  this._dtApi.off(o, t.structureHash.bind(t)))
                : $.isArray(n) && n.length > 0
                ? $.each(n, function (t, n) {
                    if (n.endsWith(".dt")) o = n;
                    else {
                      if ("undefined" == typeof i[n])
                        throw new Error("Unknown condition specified: " + n);
                      o = i[n].event;
                    }
                    e._dtApi.off(o + "." + e._eventNamespace);
                  })
                : console.warn(
                    "Illegal parameter type for KeepConditions.detachEvent(), should be array or string, was: ",
                    "undefined" == typeof n ? "undefined" : _typeof(n)
                  );
            },
          },
          {
            key: "attachEvent",
            value: function (n) {
              var e = this;
              if ("undefined" == typeof n)
                return void console.warn(
                  "No condition or event specified for KeepConditions.attachEvent(), nothing is getting attached"
                );
              var i = { dtSettings: this._dtSettings },
                o = this.conditions(n);
              if (!o) return !1;
              var s;
              "string" == typeof n
                ? ((s = n.endsWith(".dt") ? n : o.event),
                  this._dtApi.on(s, i, t.structureHash.bind(t)))
                : $.isArray(n) && n.length > 0
                ? $.each(n, function (n, i) {
                    if (i.endsWith(".dt")) s = i;
                    else {
                      if ("undefined" == typeof o[i])
                        throw new Error("Unknown condition specified: " + i);
                      s = o[i].event;
                    }
                    e._dtApi.on(
                      s + "." + e._eventNamespace,
                      t.structureHash.bind(t)
                    );
                  })
                : console.warn(
                    "Illegal parameter type for KeepConditions.attachEvent(), should be array or string, was: " +
                      ("undefined" == typeof n ? "undefined" : _typeof(n))
                  );
            },
          },
          {
            key: "processHash",
            value: function () {
              var n = this;
              $.each(t.queryString(), function (t, e) {
                ($.isArray(e) || $.isPlainObject(e)) && (e = e[0]),
                  t === n._tableId &&
                    ($.each(e.split(":"), function (t, e) {
                      var i = e.charAt(0),
                        o = e.substring(1),
                        s = n.nameByKey(i),
                        a = n.conditions()[s];
                      if (-1 !== $.inArray(s, n.getEnabledConditions()))
                        return "undefined" == typeof a
                          ? void console.warn(
                              "[keepConditions:' " +
                                n._tableId +
                                "] No condition object found for condition key:",
                              i
                            )
                          : void a.onLoad(o);
                    }),
                    n._drawTable());
              });
            },
          },
          {
            key: "enableCondition",
            value: function (n, e) {
              var i = this,
                o = !1;
              $.isArray(n)
                ? $.each(n, function (t, n) {
                    1 === n.length && (n = i.nameByKey(n)),
                      i.conditions(n) !== !1 &&
                        (i._enabledConditions.push(n), (o = !0));
                  })
                : "string" == typeof n &&
                  (1 === n.length && (n = this.nameByKey(n)),
                  this.conditions(n) !== !1 &&
                    (this._enabledConditions.push(n), (o = !0))),
                e === !0 && o === !0 && t.structureHash(this._dtSettings, !1);
            },
          },
          {
            key: "disableCondition",
            value: function (n, e) {
              var i = this,
                o = !1;
              $.isArray(n)
                ? $.each(n, function (t, n) {
                    1 === n.length && (n = i.nameByKey(n)),
                      i.conditions(n) !== !1 &&
                        (i._enabledConditions.splice(
                          $.inArray(n, i._enabledConditions),
                          1
                        ),
                        (o = !0));
                  })
                : "string" == typeof n &&
                  (1 === n.length && (n = this.nameByKey(n)),
                  this.conditions(n) !== !1 &&
                    (this._enabledConditions.splice(
                      $.inArray(n, this._enabledConditions),
                      1
                    ),
                    (o = !0))),
                e === !0 && o === !0 && t.structureHash(this._dtSettings, !1);
            },
          },
          {
            key: "getEnabledConditions",
            value: function () {
              return this._enabledConditions.length > 0
                ? $.unique(this._enabledConditions)
                : !1;
            },
          },
          {
            key: "nameByKey",
            value: function (t) {
              return this._keysToCons[t] || !1;
            },
          },
          {
            key: "conditions",
            value: function n(t) {
              var e = this,
                i = this,
                n = {
                  search: {
                    key: "f",
                    event: "search.dt",
                    isInit: function () {
                      return (
                        "undefined" == typeof i._dtSettings.oInit.searching ||
                        i._dtSettings.oInit.searching !== !1
                      );
                    },
                    onLoad: function (t) {
                      "undefined" != typeof t &&
                        i._dtApi.search() !== decodeURIComponent(t) &&
                        (i._dtApi.search(decodeURIComponent(t)),
                        (i._shouldDraw = !0));
                    },
                    isset: function () {
                      return 0 !== i._dtApi.search().length;
                    },
                    newHashVal: function () {
                      return encodeURIComponent(i._dtApi.search());
                    },
                  },
                  length: {
                    key: "l",
                    event: "length.dt",
                    isInit: function () {
                      return !(
                        i._dtSettings.oInit.lengthChange === !1 ||
                        ("undefined" ==
                          typeof i._dtSettings.oInit.lengthChange &&
                          i._dtDefaults.bLengthChange === !1)
                      );
                    },
                    onLoad: function (t) {
                      "undefined" != typeof t &&
                        (i._dtApi.page.len(parseInt(t)), (i._shouldDraw = !0));
                    },
                    isset: function () {
                      return (
                        i._dtApi.page.len() &&
                        i._dtApi.page.len() !==
                          (i._dtSettings.oInit.pageLength ||
                            i._dtDefaults.iDisplayLength)
                      );
                    },
                    newHashVal: function () {
                      return i._dtApi.page.len();
                    },
                  },
                  page: {
                    key: "p",
                    event: "page.dt",
                    isInit: function () {
                      return !(
                        i._dtSettings.oInit.paging === !1 ||
                        ("undefined" == typeof i._dtSettings.oInit.paging &&
                          i._dtDefaults.bPaginate === !1)
                      );
                    },
                    onLoad: function (t) {
                      "undefined" != typeof t &&
                        0 !== parseInt(t) &&
                        (i._dtApi.page(parseInt(t)), (i._shouldDraw = !0));
                    },
                    isset: function () {
                      return (
                        i._dtApi.page.info() && 0 !== i._dtApi.page.info().page
                      );
                    },
                    newHashVal: function () {
                      return i._dtApi.page.info().page;
                    },
                  },
                  colvis: {
                    key: "v",
                    event: "column-visibility.dt",
                    isInit: function () {
                      return !0;
                    },
                    onLoad: function (t) {
                      if ("undefined" != typeof t) {
                        var n = (function () {
                          var n = t.charAt(0),
                            e = t.substring(1).split(".");
                          return "f" !== n && "t" !== n
                            ? (console.warn(
                                "Unknown ColVis condition visibility value, expected t or f, found:",
                                n
                              ),
                              { v: void 0 })
                            : (i._dtApi
                                .columns()
                                .indexes()
                                .each(function (t, o) {
                                  "t" === n
                                    ? -1 === $.inArray(t.toString(), e)
                                      ? i._dtApi.column(t).visible(!1)
                                      : i._dtApi.column(t).visible(!0)
                                    : -1 === $.inArray(t.toString(), e)
                                    ? i._dtApi.column(t).visible(!0)
                                    : i._dtApi.column(t).visible(!1);
                                }),
                              void (i._shouldDraw = !0));
                        })();
                        if (
                          "object" ===
                          ("undefined" == typeof n ? "undefined" : _typeof(n))
                        )
                          return n.v;
                      }
                    },
                    isset: function () {
                      return i._dtApi
                        .columns()
                        .visible()
                        .filter(function (t) {
                          return !t;
                        })
                        .any();
                    },
                    newHashVal: function () {
                      var t = [],
                        n = [];
                      return (
                        i._dtApi
                          .columns()
                          .visible()
                          .each(function (e, i) {
                            e === !0 ? t.push(i) : n.push(i);
                          }),
                        t.length >= n.length
                          ? "f" + n.join(".")
                          : "t" + t.join(".")
                      );
                    },
                  },
                  scroller: {
                    key: "s",
                    event: "draw.dt",
                    isInit: function () {
                      return "undefined" != typeof i._dtSettings.oScroller;
                    },
                    onLoad: function (t) {
                      0 !== parseInt(t) && i._dtApi.row(parseInt(t)).scrollTo();
                    },
                    isset: function () {
                      return (
                        0 !==
                        Math.trunc(
                          parseInt(i._dtSettings.oScroller.s.baseRowTop)
                        )
                      );
                    },
                    newHashVal: function () {
                      var t = Math.trunc(
                        parseInt(i._dtSettings.oScroller.s.baseRowTop)
                      );
                      return 0 !== t ? t : !1;
                    },
                  },
                  colorder: {
                    key: "c",
                    event: "column-reorder.dt",
                    isInit: function () {
                      return "undefined" != typeof i._dtSettings._colReorder;
                    },
                    onLoad: function (t) {
                      var n = t.split("."),
                        e = [];
                      $.each(n, function (t, n) {
                        if (-1 !== n.indexOf("-")) {
                          var i = n.split("-"),
                            o = parseInt(i[0]),
                            s = parseInt(i[1]);
                          if (o > s) for (var a = o; a + 1 > s; a--) e.push(a);
                          else for (var a = o; s > a - 1; a++) e.push(a);
                        } else e.push(n);
                      });
                      var o = e.map(function (t) {
                        return parseInt(t);
                      });
                      return "undefined" == typeof i._dtApi.colReorder
                        ? !1
                        : void (
                            JSON.stringify(o) !==
                              JSON.stringify(i._dtApi.colReorder.order()) &&
                            (i._dtApi.colReorder.order(o, !0),
                            (i._shouldDraw = !0))
                          );
                    },
                    isset: function () {
                      return "undefined" == typeof i._dtApi.colReorder
                        ? !1
                        : JSON.stringify(i._dtApi.colReorder.order()) !==
                            JSON.stringify(
                              i._dtApi.columns().indexes().toArray()
                            );
                    },
                    newHashVal: function () {
                      var t = i._dtApi.colReorder.order(),
                        n = void 0,
                        e = [],
                        o = [],
                        s = function (t) {
                          return o[o.length - t];
                        },
                        a = function () {
                          var t = void 0;
                          return (
                            (t =
                              2 === o.length
                                ? o[0] + "." + o[1]
                                : o[0] + "-" + s(1)),
                            (o = []),
                            t
                          );
                        };
                      return (
                        $.each(t, function (t, i) {
                          (i = parseInt(i)),
                            "undefined" == typeof n
                              ? e.push(i)
                              : o.length > 0
                              ? s(1) > s(2) && i === s(1) + 1
                                ? o.push(i)
                                : s(1) < s(2) && i === s(1) - 1
                                ? o.push(i)
                                : (e.push(a()), e.push(i))
                              : i === n + 1 || i === n - 1
                              ? (e.splice(e.length - 1, 1),
                                o.push(n),
                                o.push(i))
                              : e.push(i),
                            (n = i);
                        }),
                        o.length > 0 && e.push(a()),
                        e.join(".")
                      );
                    },
                  },
                  order: {
                    key: "o",
                    event: "order.dt",
                    isInit: function () {
                      var t = !1;
                      return (
                        $.each(e._dtSettings.aoColumns, function (n, e) {
                          return e.bSortable === !0 ? ((t = !0), !1) : void 0;
                        }),
                        t
                      );
                    },
                    onLoad: function (t) {
                      if ("undefined" != typeof t) {
                        var n = { a: "asc", d: "desc" };
                        i._dtApi.order([
                          parseInt(t.substring(1)),
                          n[t.charAt(0)],
                        ]),
                          (i._shouldDraw = !0);
                      }
                    },
                    isset: function () {
                      return (
                        i._dtApi.order()[0] &&
                        JSON.stringify(i._dtApi.order()) !==
                          JSON.stringify($.fn.dataTable.defaults.aaSorting)
                      );
                    },
                    newHashVal: function () {
                      return (
                        i._dtApi.order()[0][1].charAt(0) +
                        i._dtApi.order()[0][0]
                      );
                    },
                  },
                };
              if ("string" == typeof t)
                return "undefined" == typeof n[t] ? !1 : n[t];
              if ($.isArray(t) && t.length > 0) {
                var o = {};
                return (
                  $.each(t, function (t, e) {
                    if ("undefined" == typeof n[e])
                      throw new Error(
                        "Unable to retrieve condition by name: " + e
                      );
                    o[e] = n[e];
                  }),
                  o
                );
              }
              return n;
            },
          },
        ],
        [
          {
            key: "queryString",
            value: function e() {
              for (
                var e = {},
                  t = window.location.hash.substring(1),
                  n = t.split("&"),
                  i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i].split("=");
                "undefined" == typeof e[o[0]]
                  ? (e[o[0]] = o[1])
                  : "string" == typeof e[o[0]]
                  ? (e[o[0]] = [e[o[0]], o[1]])
                  : e[o[0]].push(o[1]);
              }
              return e || !1;
            },
          },
          {
            key: "structureHash",
            value: function (n, e) {
              var i;
              if (!n)
                throw new Error(
                  "Illegal execution of KeepConditions.structureHash()"
                );
              if (n instanceof t) i = n.dtSettings();
              else if (
                "undefined" != typeof n.type &&
                "undefined" != typeof n.data.dtSettings
              )
                i = n.data.dtSettings;
              else if (n instanceof $.fn.dataTable.Api) i = n.settings()[0];
              else if ($.fn.DataTable.isDataTable(n))
                i = new $.fn.dataTable.Api(n).settings()[0];
              else {
                if (
                  !$.isPlainObject(n) ||
                  !_typeof($.isPlainObject(n.oKeepConditions))
                )
                  throw new Error(
                    "Unable to determine what you passed to KeepConditions.structureHash(), should be either an instance of KeepConditions, a proper jQuery event, or a DataTable instance with keepConditions enabled"
                  );
                i = n;
              }
              var o = new $.fn.dataTable.Api(i),
                s = (i.oInit, i.oKeepConditions.getEnabledConditions()),
                a = t.queryString(),
                r = $(o.table().node()).attr("id"),
                d = {},
                u = [],
                c = [];
              if ("undefined" == typeof s || s === !1)
                throw new Error("Couldn't get conditions from table settings");
              $.each(a, function (t, n) {
                (t || n) && t !== r && (d[t] = n || "");
              }),
                $.each(s, function (t, n) {
                  if (i.oKeepConditions.conditions()[n].isset()) {
                    var e = i.oKeepConditions.conditions()[n].newHashVal();
                    "undefined" != typeof e &&
                      e !== !1 &&
                      u.push(i.oKeepConditions.conditions()[n].key + e);
                  }
                }),
                (d[r] = u.join(":")),
                $.each(d, function (t, n) {
                  n.length > 0 && c.push(t + "=" + n);
                });
              var l = c.join("&");
              return e === !0 ? l : void (window.location.hash = l || "_");
            },
          },
        ]
      ),
      t
    );
  })();
!(function (t, n, e, i) {
  e.extend(!0, e.fn.dataTable.defaults, {
    language: {
      keepConditions: {
        button: {
          btnCopyTitle: "URL Copied",
          btnCopyBody:
            "The URL with the DataTables conditions has been copied to your clipboard",
          btnSelectTitle: "Copy URL",
          btnSelectBody: "Copy be below input to easily share the URL",
        },
      },
    },
  }),
    e(n).on("init.dt", function (t, n) {
      "dt" === t.namespace &&
        n.oInit.keepConditions !== i &&
        new KeepConditions(n);
    }),
    e.fn.dataTable.Api.register("keepConditions.attachEvents()", function (t) {
      return this.iterator("table", function (t) {
        return t.oKeepConditions.attachEvents();
      });
    }),
    e.fn.dataTable.Api.register("keepConditions.detachEvents()", function (t) {
      return this.iterator("table", function (t) {
        return t.oKeepConditions.detachEvents();
      });
    }),
    e.fn.dataTable.Api.register("keepConditions.structureHash()", function (t) {
      return this.context[0].oKeepConditions.structureHash(t);
    }),
    e.fn.dataTable.Api.register(
      "keepConditions.enableCondition()",
      function (t, n) {
        return this.iterator("table", function (e) {
          return e.oKeepConditions.enableCondition(t, n);
        });
      }
    ),
    e.fn.dataTable.Api.register(
      "keepConditions.disableCondition()",
      function (t, n) {
        return this.iterator("table", function (e) {
          return e.oKeepConditions.disableCondition(t, n);
        });
      }
    ),
    (e.fn.dataTable.ext.buttons.copyConditions = {
      text: "Copy Conditions",
      action: function (i, o, s, a) {
        var r,
          d = o.settings()[0].oLanguage.keepConditions,
          u = o.settings()[0].oKeepConditions.structureHash(!0),
          c =
            n.location.protocol +
            "//" +
            n.location.host +
            (n.location.port.length ? ":" + n.location.port : "") +
            n.location.pathname +
            "#" +
            u,
          l = {
            btnNoHashTitle: d.btnNoHashTitle || "No Conditions",
            btnNoHashBody:
              d.btnNoHashBody || "Thre are no conditions to be copied",
            btnCopyTitle: d.btnCopyTitle || "URL Copied",
            btnCopyBody:
              d.btnCopyBody ||
              "The URL with the DataTables conditions has been copied to your clipboard",
            btnSelectTitle: d.btnSelectTitle || "Copy URL",
            btnSelectBody:
              d.btnSelectBody || "Copy be below input to easily share the URL",
          };
        if (!u)
          return void o.buttons.info(l.btnNoHashTitle, l.btnNoHashBody, 3e3);
        e("<input />")
          .val(c)
          .attr("id", "copyConditions-text")
          .css({
            position: "absolute",
            left: "-9999px",
            top: (t.pageYOffset || n.documentElement.scrollTop) + "px",
          })
          .appendTo("body"),
          e("#copyConditions-text").select();
        try {
          n.execCommand("copy"),
            o.buttons.info(l.btnCopyTitle, l.btnCopyBody, a.copyTimeout || 4e3),
            (r = !0);
        } catch (f) {
          o.buttons.info(
            l.btnSelectTitle,
            l.btnSelectBody +
              '<br><input id="keepConditions-input" value="' +
              c +
              '" style="width:90%;">',
            a.selectTimeout || 1e4
          ),
            e("input#keepConditions-input").select();
        } finally {
          e("#copyConditions-text").remove();
        }
      },
    });
})(window, document, jQuery);

// hmv-script.js
function myHelp() {
  alert(
    "Thank you for choosing hadithmv, The Maldivian Platform for Translations of the Sunnah.\nhadithmv is available online as a website, as well as an offline application on both Android and Windows.\n\nBy default, hadithmv shows 40 nawawi when it starts\nClick on the top navbar to open the menu\nOpen a book to begin browsing\nUse the search box to look up words\nUse the show 1 box to select how many items to show\nUse the page buttons to move forward or backward\nYou can write in the page box to jump to a page\nUse the Options button to filter data\nUse the Copy button to copy all visible data\nUse the Extra Columns button to show or hide specific data\nAfter searching, you can double click on a search result to jump to the page where that result comes from\n\nDesktop Keyboard Controls:\n[Tab] =Tab Navigation\n[Arrow Keys] = Keyboard Navigation\n[Shift + d] = Show columns\n[Shift + C] = Copy\n[Shift + k] = Options"
  );
}
