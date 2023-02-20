import { defineComponent as N, ref as c, computed as x, watch as b, nextTick as B, openBlock as p, createElementBlock as f, normalizeClass as V, unref as v, normalizeStyle as $, withDirectives as m, renderSlot as w, createTextVNode as g, vShow as y, createCommentVNode as S, createElementVNode as _, toDisplayString as z, pushScopeId as D, popScopeId as L } from "vue";
const k = (e) => (D("data-v-75ff37c3"), e = e(), L(), e), R = {
  key: 0,
  class: "text-button"
}, W = /* @__PURE__ */ k(() => /* @__PURE__ */ _("i", { class: "down-arrow" }, null, -1)), O = {
  key: 1,
  class: "text-button"
}, j = /* @__PURE__ */ k(() => /* @__PURE__ */ _("i", { class: "up-arrow" }, null, -1)), q = /* @__PURE__ */ N({
  __name: "collapse-textarea",
  props: {
    width: null,
    lineHeight: null,
    defaultCollapseLine: null,
    content: null
  },
  setup(e) {
    const {
      width: t = "100%",
      lineHeight: a = 20,
      defaultCollapseLine: l = 3,
      content: i
    } = e, u = c(null), o = c(!0), s = c(!1), C = c(1e3), T = x(
      () => o.value ? "leaf-textarea-expand" : "leaf-textarea-collapse"
    ), E = x(() => {
      let n = "";
      return typeof t == "number" ? n = `${t}%` : n = t, {
        // 文本宽度
        "--leaf-text-width": n,
        // 设置行高
        "--leaf-text-line-height": a + "px",
        // 设置第n行开始省略
        "--leaf-text-hidden-line": l
      };
    });
    b(
      () => i,
      () => {
        B(() => {
          H();
        });
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    function H() {
      var h;
      const n = window.innerWidth / 375;
      if (!u.value)
        return;
      const d = (h = u.value) == null ? void 0 : h.offsetHeight;
      s.value = d > n * l * a, C.value = d, s && (o.value = !1);
    }
    function I() {
      o.value = !o.value;
    }
    return (n, d) => (p(), f("div", {
      class: V(v(T)),
      style: $(v(E)),
      onClick: I
    }, [
      s.value ? m((p(), f("span", R, [
        w(n.$slots, "down-arrow-content", {}, () => [
          g(" 展开 "),
          W
        ], !0)
      ], 512)), [
        [y, !o.value]
      ]) : S("", !0),
      _("div", {
        class: "content",
        ref_key: "contentRef",
        ref: u
      }, z(e.content), 513),
      s.value ? m((p(), f("span", O, [
        w(n.$slots, "up-arrow-content", {}, () => [
          g(" 收起 "),
          j
        ], !0)
      ], 512)), [
        [y, o.value]
      ]) : S("", !0)
    ], 6));
  }
});
const A = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, i] of t)
    a[l] = i;
  return a;
}, r = /* @__PURE__ */ A(q, [["__scopeId", "data-v-75ff37c3"]]);
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
  r as CollapseTextarea,
  K as default
};
