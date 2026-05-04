"use client";

import { useEffect, useRef } from "react";

const GAP = 22;
const GLOW_RADIUS = 160;

interface DotData {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  // 0–1: for "light" variant drives warm-accent flag; for "dark" drives gray shade
  shade: number;
}

interface Config {
  originX: number;
  originY: number;
  clearRadius: number; // normalized dist below which no dots appear
}

const LIGHT: Config = { originX: 0.5, originY: 0.1, clearRadius: 0.42 };
const DARK: Config = { originX: 0.38, originY: 0.22, clearRadius: 0.1 };

function buildDots(W: number, H: number, cfg: Config): DotData[] {
  const dots: DotData[] = [];
  const cols = Math.ceil(W / GAP) + 1;
  const rows = Math.ceil(H / GAP) + 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Strict grid — no positional jitter
      const x = col * GAP;
      const y = row * GAP;

      // Smooth elliptical mask: transparent near content origin, opaque at edges
      const nx = (x / W - cfg.originX) * 2;
      const ny = (y / H - cfg.originY) * 1.8;
      const dist = Math.sqrt(nx * nx + ny * ny);
      // Long ramp (0.1 → 1.0 over a wide distance) for an expansive, smooth fade
      const ramp = 1 - cfg.clearRadius;
      const mask = Math.max(0, Math.min(1, (dist - cfg.clearRadius) / ramp));

      if (mask < 0.015) continue;

      dots.push({
        x,
        y,
        r: 1.1 + Math.random() * 0.9,
        baseAlpha: (0.06 + Math.random() * 0.44) * mask,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.01,
        shade: Math.random(), // full [0–1] random per dot
      });
    }
  }
  return dots;
}

export default function DotGrid({ variant = "light" }: { variant?: "light" | "dark" }) {
  const cfg = variant === "dark" ? DARK : LIGHT;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DotData[]>([]);
  const mouse = useRef<{ x: number; y: number } | null>(null);
  const raf = useRef<number>(0);
  const tick = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dotsRef.current = buildDots(canvas.width, canvas.height, cfg);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = null;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick.current += 1;
      const m = mouse.current;

      for (const dot of dotsRef.current) {
        // Per-dot twinkle: each has a unique phase and speed
        const twinkle = Math.sin(tick.current * dot.speed + dot.phase) * 0.25 + 0.75;

        // Mouse proximity — ease-in for a crisp, precise glow
        let prox = 0;
        if (m) {
          const d = Math.hypot(dot.x - m.x, dot.y - m.y);
          prox = Math.max(0, 1 - d / GLOW_RADIUS);
          prox = prox * prox;
        }

        const alpha = Math.min(0.85, dot.baseAlpha * twinkle + prox * 0.7);
        if (alpha < 0.012) continue;

        let r: number, g: number, b: number;

        if (variant === "dark") {
          // Monochromatic: lerp from dark gray (70) to near-white (230)
          const v = Math.round(70 + dot.shade * 160);
          r = v;
          g = v;
          b = v;
        } else {
          // Light: dark ink with ~12% warm-brown accent
          const isWarm = dot.shade < 0.12;
          r = isWarm ? 90 : 36;
          g = isWarm ? 62 : 36;
          b = isWarm ? 28 : 36;
        }

        // Shift toward amber on cursor proximity
        if (prox > 0) {
          r = Math.round(r + (252 - r) * prox);
          g = Math.round(g + (179 - g) * prox);
          b = Math.round(b + (68 - b) * prox);
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r * (1 + prox * 0.7), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(render);
    };

    raf.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [cfg]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full" />;
}
