import { defineComponent as I, ref as c, computed as x, watch as N, nextTick as B, openBlock as p, createElementBlock as f, normalizeClass as L, unref as v, normalizeStyle as V, withDirectives as m, renderSlot as w, createTextVNode as g, vShow as y, createCommentVNode as C, createElementVNode as _, toDisplayString as $, pushScopeId as z, popScopeId as D } from "vue";
const S = (e) => (z("data-v-75f1ab44"), e = e(), D(), e), R = {
  key: 0,
  class: "text-button"
}, W = /* @__PURE__ */ S(() => /* @__PURE__ */ _("i", { class: "down-arrow" }, null, -1)), O = {
  key: 1,
  class: "text-button"
}, j = /* @__PURE__ */ S(() => /* @__PURE__ */ _("i", { class: "up-arrow" }, null, -1)), q = /* @__PURE__ */ I({
  __name: "leaf-collapse-textarea",
  props: {
    width: null,
    lineHeight: null,
    defaultCollapseLine: null,
    content: null
  },
  setup(e) {
    const {
      width: t = "100%",
      lineHeight: o = 20,
      defaultCollapseLine: l = 3,
      content: i
    } = e, u = c(null), a = c(!0), s = c(!1), k = c(1e3), T = x(
      () => a.value ? "leaf-textarea-expand" : "leaf-textarea-collapse"
    ), b = x(() => {
      let n = "";
      return typeof t == "number" ? n = `${t}%` : n = t, {
        // 文本宽度
        "--leaf-text-width": n,
        // 设置行高
        "--leaf-text-line-height": o + "px",
        // 设置第n行开始省略
        "--leaf-text-hidden-line": l
      };
    });
    N(
      () => i,
      () => {
        B(() => {
          E();
        });
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    function E() {
      var h;
      const n = window.innerWidth / 375;
      if (!u.value)
        return;
      const d = (h = u.value) == null ? void 0 : h.offsetHeight;
      s.value = d > n * l * o, k.value = d, s && (a.value = !1);
    }
    function H() {
      a.value = !a.value;
    }
    return (n, d) => (p(), f("div", {
      class: L(v(T)),
      style: V(v(b)),
      onClick: H
    }, [
      s.value ? m((p(), f("span", R, [
        w(n.$slots, "down-arrow-content", {}, () => [
          g(" 展开 "),
          W
        ], !0)
      ], 512)), [
        [y, !a.value]
      ]) : C("", !0),
      _("div", {
        class: "content",
        ref_key: "contentRef",
        ref: u
      }, $(e.content), 513),
      s.value ? m((p(), f("span", O, [
        w(n.$slots, "up-arrow-content", {}, () => [
          g(" 收起 "),
          j
        ], !0)
      ], 512)), [
        [y, a.value]
      ]) : C("", !0)
    ], 6));
  }
});
const A = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, i] of t)
    o[l] = i;
  return o;
}, r = /* @__PURE__ */ A(q, [["__scopeId", "data-v-75f1ab44"]]);
r.install = (e) => {
  e.component(r.__name, r);
};
const F = [r], G = (e) => {
  F.forEach((t) => {
    e.component(t.__name, t);
  });
}, K = {
  install: G
};
export {
  r as LeafCollapseTextarea,
  K as default
};
