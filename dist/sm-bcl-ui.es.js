import "./theme/index.css";
import { defineComponent as U, ref as a, onMounted as _, onUnmounted as z, watch as x, openBlock as u, createElementBlock as s, createElementVNode as t, toDisplayString as y, normalizeStyle as h } from "vue";
const N = {
  key: 0,
  class: "audio-cover"
}, q = ["src", "alt"], F = {
  key: 1,
  class: "audio-cover"
}, G = { class: "audio-info" }, H = { class: "audio-title" }, I = { class: "audio-artist" }, J = { class: "audio-controls" }, K = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, L = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, O = { class: "audio-progress" }, Q = { class: "time-display" }, W = { class: "current-time" }, Y = { class: "duration" }, Z = { class: "audio-volume" }, ee = {
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
}, le = {
  key: 2,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, oe = ["src", "autoplay", "loop", "muted", "volume", "preload"], ne = /* @__PURE__ */ U({
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
  setup(n, { expose: f, emit: P }) {
    const r = n, d = P, M = a(), l = a(), i = a(!1), c = a(r.muted), g = a(r.volume), v = a(0), m = a(0), p = a(0), T = (e) => {
      const o = Math.floor(e / 60), k = Math.floor(e % 60);
      return `${o}:${k.toString().padStart(2, "0")}`;
    }, B = () => {
      l.value && (i.value ? l.value.pause() : l.value.play());
    }, b = () => {
      i.value = !0, d("play");
    }, j = () => {
      i.value = !1, d("pause");
    }, E = () => {
      i.value = !1, d("ended");
    }, V = () => {
      l.value && (v.value = l.value.currentTime, m.value = l.value.duration || 0, p.value = v.value / m.value * 100 || 0, d("timeupdate", v.value));
    }, R = () => {
      l.value && (g.value = l.value.volume, c.value = l.value.muted, d("volumechange", g.value));
    }, X = (e) => {
      const o = e.target.error;
      o && d("error", new Error(o.message));
    }, $ = (e) => {
      if (!l.value || !e.currentTarget) return;
      const o = e.currentTarget.getBoundingClientRect(), w = (e.clientX - o.left) / o.width * 100 / 100 * m.value;
      l.value.currentTime = w;
    }, S = (e) => {
      if (!l.value || !e.currentTarget) return;
      const o = e.currentTarget.getBoundingClientRect(), w = (e.clientX - o.left) / o.width * 100 / 100;
      l.value.volume = w, l.value.muted = !1;
    }, D = () => {
      l.value && (l.value.muted = !l.value.muted);
    };
    return f({
      play: () => {
        var e;
        (e = l.value) == null || e.play();
      },
      pause: () => {
        var e;
        (e = l.value) == null || e.pause();
      },
      toggle: () => {
        B();
      },
      seek: (e) => {
        l.value && (l.value.currentTime = e);
      },
      setVolume: (e) => {
        l.value && (l.value.volume = Math.max(0, Math.min(1, e)), l.value.muted = !1);
      },
      setMuted: (e) => {
        l.value && (l.value.muted = e);
      },
      getCurrentTime: () => v.value,
      getDuration: () => m.value,
      getPlaying: () => i.value
    }), _(() => {
      c.value = r.muted, g.value = r.volume;
    }), z(() => {
      var e;
      (e = l.value) == null || e.pause();
    }), x(() => r.muted, (e) => {
      c.value = e, l.value && (l.value.muted = e);
    }), x(() => r.volume, (e) => {
      g.value = e, l.value && (l.value.volume = e);
    }), x(() => r.src, () => {
      v.value = 0, m.value = 0, p.value = 0, i.value = !1;
    }), (e, o) => (u(), s("div", {
      class: "audio-player",
      ref_key: "playerRef",
      ref: M
    }, [
      n.cover ? (u(), s("div", N, [
        t("img", {
          src: n.cover,
          alt: n.title
        }, null, 8, q)
      ])) : (u(), s("div", F, [...o[0] || (o[0] = [
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
      t("div", G, [
        t("h3", H, y(n.title || "未知标题"), 1),
        t("p", I, y(n.artist || "未知艺术家"), 1)
      ]),
      t("div", J, [
        t("button", {
          class: "audio-play-btn",
          onClick: B
        }, [
          i.value ? (u(), s("svg", L, [...o[2] || (o[2] = [
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
          ])])) : (u(), s("svg", K, [...o[1] || (o[1] = [
            t("polygon", { points: "5 3 19 12 5 21 5 3" }, null, -1)
          ])]))
        ])
      ]),
      t("div", O, [
        t("div", {
          class: "progress-container",
          onClick: $
        }, [
          t("div", {
            class: "progress-bar",
            style: h({ width: `${p.value}%` })
          }, null, 4),
          t("div", {
            class: "progress-handle",
            style: h({ left: `${p.value}%` })
          }, null, 4)
        ]),
        t("div", Q, [
          t("span", W, y(T(v.value)), 1),
          t("span", Y, y(T(m.value)), 1)
        ])
      ]),
      t("div", Z, [
        t("button", {
          class: "volume-btn",
          onClick: D
        }, [
          c.value || n.volume === 0 ? (u(), s("svg", ee, [...o[3] || (o[3] = [
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
          ])])) : n.volume < 0.5 ? (u(), s("svg", te, [...o[4] || (o[4] = [
            t("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
            t("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)
          ])])) : (u(), s("svg", le, [...o[5] || (o[5] = [
            t("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
            t("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1),
            t("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1)
          ])]))
        ]),
        t("div", {
          class: "volume-slider",
          onClick: S
        }, [
          t("div", {
            class: "volume-bar",
            style: h({ width: `${(c.value ? 0 : n.volume) * 100}%` })
          }, null, 4),
          t("div", {
            class: "volume-handle",
            style: h({ left: `${(c.value ? 0 : n.volume) * 100}%` })
          }, null, 4)
        ])
      ]),
      t("audio", {
        ref_key: "audioRef",
        ref: l,
        src: n.src,
        autoplay: n.autoplay,
        loop: n.loop,
        muted: n.muted,
        volume: n.volume,
        preload: n.preload,
        onPlay: b,
        onPause: j,
        onEnded: E,
        onTimeupdate: V,
        onVolumechange: R,
        onError: X
      }, null, 40, oe)
    ], 512));
  }
}), C = {
  AudioPlayer: ne
}, ae = (n) => {
  for (const f in C)
    n.component(f, C[f]);
}, ye = {
  install: ae,
  ...C
};
export {
  ne as AudioPlayer,
  ye as default
};
