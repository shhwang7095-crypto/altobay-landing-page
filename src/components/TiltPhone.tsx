"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";

const REST_ROTATE = { x: 4, y: -10 };
const MAX_ROTATE = { x: 16, y: 22 };

export default function TiltPhone({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState(REST_ROTATE);
  const [active, setActive] = useState(false);

  function updateFromPointer(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2 * MAX_ROTATE.y;
    const rotateX = (0.5 - py) * 2 * MAX_ROTATE.x;
    setRotate({ x: rotateX, y: rotateY });
  }

  return (
    <div
      ref={ref}
      onPointerMove={updateFromPointer}
      onPointerDown={(e) => {
        setActive(true);
        updateFromPointer(e);
      }}
      onPointerUp={() => setActive(false)}
      onPointerLeave={() => {
        setActive(false);
        setRotate(REST_ROTATE);
      }}
      style={{ perspective: "1400px", touchAction: "none" }}
      className="cursor-grab select-none active:cursor-grabbing"
      aria-hidden="true"
    >
      <div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${active ? 1.03 : 1})`,
          transition: active ? "transform 60ms ease-out" : "transform 500ms ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
