import { useEffect } from "react";
// Cada recurso se libera al desmontar, también al recargar con Vite.
export function useEfectosVisuales() {
  useEffect(() => {
    const limpiezas = [],
      frames = new Set(),
      timers = new Set();
    const on = (target, evento, fn, opciones) => {
      target.addEventListener(evento, fn, opciones);
      limpiezas.push(() => target.removeEventListener(evento, fn, opciones));
    };
    const solicitarFrame = (fn) => {
      const id = requestAnimationFrame((t) => {
        frames.delete(id);
        fn(t);
      });
      frames.add(id);
      return id;
    };
    const cancelarFrame = (id) => {
      cancelAnimationFrame(id);
      frames.delete(id);
    };
    const esperar = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
      return id;
    };
    const cancelarEspera = (id) => {
      clearTimeout(id);
      timers.delete(id);
    };
    const observarMutaciones = (fn) => {
      const observer = new MutationObserver(fn);
      limpiezas.push(() => observer.disconnect());
      return observer;
    };

    (function () {
      const g = document.getElementById("cursorGlow");
      if (!g || !window.matchMedia("(hover:hover)").matches) return;
      let x = innerWidth / 2,
        y = innerHeight / 2,
        tx = x,
        ty = y,
        raf = null;
      function loop() {
        x += (tx - x) * 0.14;
        y += (ty - y) * 0.14;
        g.style.transform =
          "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
        raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.4 ? solicitarFrame(loop) : null;
      }
      on(
        window,
        "pointermove",
        (e) => {
          tx = e.clientX;
          ty = e.clientY;
          g.classList.add("on");
          if (!raf) raf = solicitarFrame(loop);
        },
        { passive: true },
      );
      on(document.documentElement, "mouseleave", () =>
        g.classList.remove("on"),
      );
    })();

    (function () {
      const cv = document.getElementById("bgParticles");
      if (!cv) return;
      const ctx = cv.getContext("2d");
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let W = 0,
        H = 0,
        parts = [],
        mx = -9999,
        my = -9999,
        raf = null,
        rgb = "165,187,255";
      const root = document.documentElement;

      function readColor() {
        const v = getComputedStyle(root).getPropertyValue("--pt").trim();
        if (v) rgb = v;
      }
      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        cv.width = W * dpr;
        cv.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.round(Math.min(64, Math.max(24, (W * H) / 24000)));
        parts = Array.from({ length: n }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.7 + Math.random() * 1.2,
          vx: 0.05 + Math.random() * 0.11, 
          vy: -(0.03 + Math.random() * 0.09),
          ph: Math.random() * 6.28,
          sp: 0.5 + Math.random() * 0.9,
        }));
      }
      function draw(t) {
        ctx.clearRect(0, 0, W, H);
        for (const p of parts) {
          if (!reduce) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10;
          }
          const tw = 0.32 + 0.3 * Math.sin((t / 1000) * p.sp + p.ph);
          const d = Math.hypot(p.x - mx, p.y - my);
          const boost = d < 150 ? (1 - d / 150) * 0.5 : 0;
          ctx.fillStyle = "rgba(" + rgb + "," + (tw + boost).toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + boost * 1.4, 0, 6.283);
          ctx.fill();
        }
        const L = 115;
        ctx.lineWidth = 0.7;
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const dx = parts[i].x - parts[j].x,
              dy = parts[i].y - parts[j].y;
            const dd = dx * dx + dy * dy;
            if (dd < L * L) {
              const a = (1 - Math.sqrt(dd) / L) * 0.13;
              ctx.strokeStyle = "rgba(" + rgb + "," + a.toFixed(3) + ")";
              ctx.beginPath();
              ctx.moveTo(parts[i].x, parts[i].y);
              ctx.lineTo(parts[j].x, parts[j].y);
              ctx.stroke();
            }
          }
        }
      }
      function frame(t) {
        draw(t);
        raf = solicitarFrame(frame);
      }
      function start() {
        if (!raf && !reduce) raf = solicitarFrame(frame);
      }
      function stop() {
        if (raf) {
          cancelarFrame(raf);
          raf = null;
        }
      }

      on(
        window,
        "pointermove",
        (e) => {
          mx = e.clientX;
          my = e.clientY;
        },
        { passive: true },
      );
      on(window, "resize", () => {
        resize();
        if (reduce) draw(0);
      });
      on(document, "visibilitychange", () =>
        document.hidden ? stop() : start(),
      );
      observarMutaciones(() => {
        readColor();
        if (reduce) draw(0);
      }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

      readColor();
      resize();
      if (reduce) draw(0);
      else start();
    })();

    (function () {
      const logo = document.querySelector(".logo");
      const mark = logo && logo.querySelector(".logo-mark");
      if (!mark) return;
      const dots = [
        { el: document.getElementById("glow1"), k: 0.38 },
        { el: document.getElementById("glow2"), k: 0.18 },
        { el: document.getElementById("glow3"), k: 0.09 },
      ];
      dots.forEach((d) => {
        d.x = 32;
        d.y = 32;
      });
      let tx = 32,
        ty = 32,
        raf = null,
        idleTimer = null;

      function tick() {
        dots.forEach((d) => {
          d.x += (tx - d.x) * d.k;
          d.y += (ty - d.y) * d.k;
          d.el.setAttribute("cx", d.x.toFixed(2));
          d.el.setAttribute("cy", d.y.toFixed(2));
        });
        raf = solicitarFrame(tick);
      }
      function setTarget(e) {
        const r = mark.getBoundingClientRect();
        tx = Math.max(-6, Math.min(70, ((e.clientX - r.left) / r.width) * 64));
        ty = Math.max(-6, Math.min(70, ((e.clientY - r.top) / r.height) * 64));
      }
      on(logo, "pointerenter", (e) => {
        cancelarEspera(idleTimer);
        setTarget(e);
        dots.forEach((d) => {
          d.x = tx;
          d.y = ty;
        });
        logo.classList.add("is-lit");
        if (!raf) raf = solicitarFrame(tick);
      });
      on(logo, "pointermove", setTarget);
      on(logo, "pointerleave", () => {
        logo.classList.remove("is-lit");
        idleTimer = esperar(() => {
          cancelarFrame(raf);
          raf = null;
        }, 500);
      });
    })();

    return () => {
      limpiezas.forEach((fn) => fn());
      frames.forEach(cancelAnimationFrame);
      timers.forEach(clearTimeout);
    };
  }, []);
}
