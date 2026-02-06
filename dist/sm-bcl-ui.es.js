import { defineComponent as U, ref as u, onMounted as z, onUnmounted as A, watch as C, openBlock as r, createElementBlock as i, createElementVNode as t, toDisplayString as h, normalizeStyle as k } from "vue";
const I = {
  key: 0,
  class: "audio-cover"
}, N = ["src", "alt"], O = {
  key: 1,
  class: "audio-cover"
}, q = { class: "audio-info" }, F = { class: "audio-title" }, G = { class: "audio-artist" }, H = { class: "audio-controls" }, J = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, K = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, L = { class: "audio-progress" }, Q = { class: "time-display" }, W = { class: "current-time" }, Y = { class: "duration" }, Z = { class: "audio-volume" }, ee = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, te = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, oe = {
  key: 2,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, le = ["src", "autoplay", "loop", "muted", "volume", "preload"], ne = /* @__PURE__ */ U({
  __name: "index",
  props: {
    src: {},
    title: { default: "" },
    artist: { default: "" },
    cover: { default: "" },
    autoplay: { type: Boolean, default: !1 },
    loop: { type: Boolean, default: !1 },
    muted: { type: Boolean, default: !1 },
    volume: { default: 1 },
    preload: { default: "metadata" }
  },
  emits: ["play", "pause", "ended", "timeupdate", "volumechange", "error"],
  setup(n, { expose: d, emit: g }) {
    const a = n, s = g, P = u(), o = u(), c = u(!1), v = u(a.muted), p = u(a.volume), m = u(0), f = u(0), y = u(0), B = (e) => {
      const l = Math.floor(e / 60), w = Math.floor(e % 60);
      return `${l}:${w.toString().padStart(2, "0")}`;
    }, M = () => {
      o.value && (c.value ? o.value.pause() : o.value.play());
    }, _ = () => {
      c.value = !0, s("play");
    }, b = () => {
      c.value = !1, s("pause");
    }, j = () => {
      c.value = !1, s("ended");
    }, E = () => {
      o.value && (m.value = o.value.currentTime, f.value = o.value.duration || 0, y.value = m.value / f.value * 100 || 0, s("timeupdate", m.value));
    }, V = () => {
      o.value && (p.value = o.value.volume, v.value = o.value.muted, s("volumechange", p.value));
    }, R = (e) => {
      const l = e.target.error;
      l && s("error", new Error(l.message));
    }, X = (e) => {
      if (!o.value || !e.currentTarget) return;
      const l = e.currentTarget.getBoundingClientRect(), x = (e.clientX - l.left) / l.width * 100 / 100 * f.value;
      o.value.currentTime = x;
    }, $ = (e) => {
      if (!o.value || !e.currentTarget) return;
      const l = e.currentTarget.getBoundingClientRect(), x = (e.clientX - l.left) / l.width * 100 / 100;
      o.value.volume = x, o.value.muted = !1;
    }, S = () => {
      o.value && (o.value.muted = !o.value.muted);
    };
    return d({
      play: () => {
        var e;
        (e = o.value) == null || e.play();
      },
      pause: () => {
        var e;
        (e = o.value) == null || e.pause();
      },
      toggle: () => {
        M();
      },
      seek: (e) => {
        o.value && (o.value.currentTime = e);
      },
      setVolume: (e) => {
        o.value && (o.value.volume = Math.max(0, Math.min(1, e)), o.value.muted = !1);
      },
      setMuted: (e) => {
        o.value && (o.value.muted = e);
      },
      getCurrentTime: () => m.value,
      getDuration: () => f.value,
      getPlaying: () => c.value
    }), z(() => {
      v.value = a.muted, p.value = a.volume;
    }), A(() => {
      var e;
      (e = o.value) == null || e.pause();
    }), C(() => a.muted, (e) => {
      v.value = e, o.value && (o.value.muted = e);
    }), C(() => a.volume, (e) => {
      p.value = e, o.value && (o.value.volume = e);
    }), C(() => a.src, () => {
      m.value = 0, f.value = 0, y.value = 0, c.value = !1;
    }), (e, l) => (r(), i("div", {
      class: "audio-player",
      ref_key: "playerRef",
      ref: P
    }, [
      n.cover ? (r(), i("div", I, [
        t("img", {
          src: n.cover,
          alt: n.title
        }, null, 8, N)
      ])) : (r(), i("div", O, [...l[0] || (l[0] = [
        t("div", { style: { width: "100%", height: "100%", "background-color": "#f3f4f6", display: "flex", "align-items": "center", "justify-content": "center" } }, [
          t("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#9ca3af",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            t("polygon", { points: "5 3 19 12 5 21 5 3" })
          ])
        ], -1)
      ])])),
      t("div", q, [
        t("h3", F, h(n.title || "未知标题"), 1),
        t("p", G, h(n.artist || "未知艺术家"), 1)
      ]),
      t("div", H, [
        t("button", {
          class: "audio-play-btn",
          onClick: M
        }, [
          c.value ? (r(), i("svg", K, [...l[2] || (l[2] = [
            t("rect", {
              x: "6",
              y: "4",
              width: "4",
              height: "16"
            }, null, -1),
            t("rect", {
              x: "14",
              y: "4",
              width: "4",
              height: "16"
            }, null, -1)
          ])])) : (r(), i("svg", J, [...l[1] || (l[1] = [
            t("polygon", { points: "5 3 19 12 5 21 5 3" }, null, -1)
          ])]))
        ])
      ]),
      t("div", L, [
        t("div", {
          class: "progress-container",
          onClick: X
        }, [
          t("div", {
            class: "progress-bar",
            style: k({ width: `${y.value}%` })
          }, null, 4),
          t("div", {
            class: "progress-handle",
            style: k({ left: `${y.value}%` })
          }, null, 4)
        ]),
        t("div", Q, [
          t("span", W, h(B(m.value)), 1),
          t("span", Y, h(B(f.value)), 1)
        ])
      ]),
      t("div", Z, [
        t("button", {
          class: "volume-btn",
          onClick: S
        }, [
          v.value || n.volume === 0 ? (r(), i("svg", ee, [...l[3] || (l[3] = [
            t("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
            t("line", {
              x1: "23",
              y1: "9",
              x2: "17",
              y2: "15"
            }, null, -1),
            t("line", {
              x1: "17",
              y1: "9",
              x2: "23",
              y2: "15"
            }, null, -1)
          ])])) : n.volume < 0.5 ? (r(), i("svg", te, [...l[4] || (l[4] = [
            t("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
            t("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)
          ])])) : (r(), i("svg", oe, [...l[5] || (l[5] = [
            t("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
            t("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1),
            t("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1)
          ])]))
        ]),
        t("div", {
          class: "volume-slider",
          onClick: $
        }, [
          t("div", {
            class: "volume-bar",
            style: k({ width: `${(v.value ? 0 : n.volume) * 100}%` })
          }, null, 4),
          t("div", {
            class: "volume-handle",
            style: k({ left: `${(v.value ? 0 : n.volume) * 100}%` })
          }, null, 4)
        ])
      ]),
      t("audio", {
        ref_key: "audioRef",
        ref: o,
        src: n.src,
        autoplay: n.autoplay,
        loop: n.loop,
        muted: n.muted,
        volume: n.volume,
        preload: n.preload,
        onPlay: _,
        onPause: b,
        onEnded: j,
        onTimeupdate: E,
        onVolumechange: V,
        onError: R
      }, null, 40, le)
    ], 512));
  }
}), ae = (n, d) => {
  const g = n.__vccOpts || n;
  for (const [a, s] of d)
    g[a] = s;
  return g;
}, se = /* @__PURE__ */ ae(ne, [["__scopeId", "data-v-f5016fea"]]), T = {
  AudioPlayer: se
}, ue = (n) => {
  for (const d in T)
    n.component(d, T[d]);
}, he = {
  install: ue,
  ...T
};
export {
  se as AudioPlayer,
  he as default
};
