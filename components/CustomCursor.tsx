"use client";

import { MousePointer2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Override default cursor
    const style = document.createElement("style");
    style.textContent = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-3 h-3 -ml-2 -mt-2 backdrop-invert transition-transform duration-100 ease-out"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
    </div>
  );
};

export default CustomCursor;
