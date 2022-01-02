var app = (function () {
  'use strict'
  function t() {}
  function e(t) {
    return t()
  }
  function n() {
    return Object.create(null)
  }
  function o(t) {
    t.forEach(e)
  }
  function r(t) {
    return 'function' == typeof t
  }
  function c(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && 'object' == typeof t) || 'function' == typeof t
  }
  let i, s
  function u(t, e) {
    return i || (i = document.createElement('a')), (i.href = e), t === i.href
  }
  function a(t, e) {
    t.appendChild(e)
  }
  function l(t) {
    t.parentNode.removeChild(t)
  }
  function f(t) {
    return document.createElement(t)
  }
  function d() {
    return (t = ' '), document.createTextNode(t)
    var t
  }
  function p(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n)
  }
  function m(t) {
    s = t
  }
  const h = [],
    $ = [],
    g = [],
    v = [],
    b = Promise.resolve()
  let _ = !1
  function y(t) {
    g.push(t)
  }
  const x = new Set()
  let E = 0
  function k() {
    const t = s
    do {
      for (; E < h.length; ) {
        const t = h[E]
        E++, m(t), w(t.$$)
      }
      for (m(null), h.length = 0, E = 0; $.length; ) $.pop()()
      for (let t = 0; t < g.length; t += 1) {
        const e = g[t]
        x.has(e) || (x.add(e), e())
      }
      g.length = 0
    } while (h.length)
    for (; v.length; ) v.pop()()
    ;(_ = !1), x.clear(), m(t)
  }
  function w(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update)
      const e = t.dirty
      ;(t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(y)
    }
  }
  const T = new Set()
  function L(t, e) {
    ;-1 === t.$$.dirty[0] &&
      (h.push(t), _ || ((_ = !0), b.then(k)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
  }
  function A(c, i, u, a, f, d, p, h = [-1]) {
    const $ = s
    m(c)
    const g = (c.$$ = {
      fragment: null,
      ctx: null,
      props: d,
      update: t,
      not_equal: f,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(i.context || ($ ? $.$$.context : [])),
      callbacks: n(),
      dirty: h,
      skip_bound: !1,
      root: i.target || $.$$.root,
    })
    p && p(g.root)
    let v = !1
    if (
      ((g.ctx = u
        ? u(c, i.props || {}, (t, e, ...n) => {
            const o = n.length ? n[0] : e
            return (
              g.ctx &&
                f(g.ctx[t], (g.ctx[t] = o)) &&
                (!g.skip_bound && g.bound[t] && g.bound[t](o), v && L(c, t)),
              e
            )
          })
        : []),
      g.update(),
      (v = !0),
      o(g.before_update),
      (g.fragment = !!a && a(g.ctx)),
      i.target)
    ) {
      if (i.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes)
        })(i.target)
        g.fragment && g.fragment.l(t), t.forEach(l)
      } else g.fragment && g.fragment.c()
      i.intro && (b = c.$$.fragment) && b.i && (T.delete(b), b.i(_)),
        (function (t, n, c, i) {
          const {
            fragment: s,
            on_mount: u,
            on_destroy: a,
            after_update: l,
          } = t.$$
          s && s.m(n, c),
            i ||
              y(() => {
                const n = u.map(e).filter(r)
                a ? a.push(...n) : o(n), (t.$$.on_mount = [])
              }),
            l.forEach(y)
        })(c, i.target, i.anchor, i.customElement),
        k()
    }
    var b, _
    m($)
  }
  function M(e) {
    let n, o, r, c, i, s, m, h, $, g
    return {
      c() {
        ;(n = f('article')),
          (o = f('img')),
          (c = d()),
          (i = f('div')),
          (s = f('h1')),
          (m = d()),
          (h = f('p')),
          u(o.src, (r = e[0])) || p(o, 'src', r),
          p(o, 'alt', e[1]),
          p(o, 'class', 'svelte-17ow9lv'),
          p(s, 'class', 'svelte-17ow9lv'),
          p(i, 'class', 'svelte-17ow9lv'),
          p(n, 'class', 'svelte-17ow9lv')
      },
      m(t, r) {
        var u, l, f, d
        !(function (t, e, n) {
          t.insertBefore(e, n || null)
        })(t, n, r),
          a(n, o),
          a(n, c),
          a(n, i),
          a(i, s),
          (s.innerHTML = e[1]),
          a(i, m),
          a(i, h),
          (h.innerHTML = e[2]),
          $ ||
            ((u = n),
            (l = 'click'),
            (f = e[3]),
            u.addEventListener(l, f, d),
            (g = () => u.removeEventListener(l, f, d)),
            ($ = !0))
      },
      p(t, [e]) {
        1 & e && !u(o.src, (r = t[0])) && p(o, 'src', r),
          2 & e && p(o, 'alt', t[1]),
          2 & e && (s.innerHTML = t[1]),
          4 & e && (h.innerHTML = t[2])
      },
      i: t,
      o: t,
      d(t) {
        t && l(n), ($ = !1), g()
      },
    }
  }
  function q(t, e, n) {
    let { src: o = 'https://picsum.photos/200/300' } = e,
      { title: r = 'Default Title' } = e,
      {
        content:
          c = '<strong>DEFAULT TEXT</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloremque veniam aliquid libero, optio harum ad laboriosam molestiae nisi? Deserunt, nulla harum dolorem, quam incidunt non unde ipsam facere, vero autem ea!',
      } = e
    return (
      (t.$$set = t => {
        'src' in t && n(0, (o = t.src)),
          'title' in t && n(1, (r = t.title)),
          'content' in t && n(2, (c = t.content))
      }),
      [o, r, c, t => alert(t.target)]
    )
  }
  class D extends class {
    $destroy() {
      !(function (t, e) {
        const n = t.$$
        null !== n.fragment &&
          (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []))
      })(this, 1),
        (this.$destroy = t)
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e)
          ;-1 !== t && n.splice(t, 1)
        }
      )
    }
    $set(t) {
      var e
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  } {
    constructor(t) {
      super(), A(this, t, q, M, c, { src: 0, title: 1, content: 2 })
    }
  }
  return function (t, e) {
    new D({ target: t, props: e })
  }
})()
//# sourceMappingURL=bundle.js.map
