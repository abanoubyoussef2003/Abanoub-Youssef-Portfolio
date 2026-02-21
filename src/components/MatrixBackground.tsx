import React, { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const fontSize = 18;

    // Data-analysis flavored character pools
    const pools = {
      numeric: "0123456789.0123456789",
      symbols: "%∑∆σμ±≈∞√∫≤≥→←↑↓",
      stats: "0.0 0.5 1.0 p< r= R² CI",
      hex: "0xABCDEF0123456789",
    };

    // Flatten into one weighted pool
    const chars = (
      pools.numeric.repeat(6) +
      pools.symbols.repeat(3) +
      pools.stats +
      pools.hex.repeat(2)
    ).split("");

    // Color palette — analytics dashboard blues / teals
    const streamColors = [
      { r: 56, g: 189, b: 248 }, // sky-400
      { r: 34, g: 211, b: 238 }, // cyan-400
      { r: 99, g: 102, b: 241 }, // indigo-400
      { r: 52, g: 211, b: 153 }, // emerald-400
      { r: 148, g: 163, b: 184 }, // slate-400 (dim)
    ];

    type Drop = {
      x: number;
      y: number;
      speed: number;
      color: { r: number; g: number; b: number };
      trail: number; // how many tail chars
      bright: boolean; // is head bright?
    };

    const columns = Math.floor(canvas.width / fontSize);
    const drops: Drop[] = Array.from({ length: columns }, (_, i) => ({
      x: i * fontSize,
      y: Math.random() * -canvas.height,
      speed: 0.3 + Math.random() * 0.9,
      color: streamColors[Math.floor(Math.random() * streamColors.length)],
      trail: 8 + Math.floor(Math.random() * 20),
      bright: Math.random() > 0.6,
    }));

    // Horizontal grid lines — faint blueprint overlay
    function drawGrid() {
      if (!ctx || !canvas) return;
      const gridSpacing = 60;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    }

    // Subtle scan-line sweep state
    let scanY = 0;

    function draw() {
      if (!ctx || !canvas) return;

      // Fade previous frame — slow fade = longer trails
      ctx.fillStyle = "rgba(8, 12, 28, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      // Scan line — thin horizontal beam sweeping down
      scanY = (scanY + 0.6) % canvas.height;
      const grad = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      grad.addColorStop(0, "rgba(56, 189, 248, 0)");
      grad.addColorStop(0.5, "rgba(56, 189, 248, 0.06)");
      grad.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 2, canvas.width, 4);

      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (const drop of drops) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const { r, g, b } = drop.color;

        // Head glow
        if (drop.bright) {
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(255,255,255,0.95)`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
        }

        ctx.fillText(char, drop.x, drop.y);
        ctx.shadowBlur = 0;

        // Draw trail — fades out
        for (let t = 1; t <= drop.trail; t++) {
          const alpha = (1 - t / drop.trail) * 0.35;
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(trailChar, drop.x, drop.y - t * fontSize);
        }

        drop.y += fontSize * drop.speed;

        // Reset when off-screen
        if (drop.y - drop.trail * fontSize > canvas.height) {
          drop.y = -fontSize * (2 + Math.random() * 10);
          drop.speed = 0.3 + Math.random() * 0.9;
          drop.color =
            streamColors[Math.floor(Math.random() * streamColors.length)];
          drop.trail = 8 + Math.floor(Math.random() * 20);
          drop.bright = Math.random() > 0.6;
        }
      }
    }

    const interval = setInterval(draw, 45);

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.35, background: "rgb(8, 12, 28)" }}
      aria-hidden="true"
    />
  );
}
