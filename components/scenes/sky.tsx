"use client";

import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export function Sky() {
  const numClouds = 20; // Number of clouds
  const radius = 10; // Distance from center

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
      camera={{ fov: 120, near: 0.1, far: 5000 }}
    >
      <ambientLight color={"#fff"} intensity={3} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
      <Suspense fallback={null}>
        {Array.from({ length: numClouds }).map((_, i) => {
          const angle = (i / numClouds) * Math.PI * 2;
          const randomScale = Math.random() * 0.5 + 1.75;
          const randomY = -12 + (Math.random() * 6 - 2);
          const randomOpacity = Math.random() * 0.5 + 0.1;

          return (
            <Cloud
              key={i}
              position={[
                Math.cos(angle) * radius, // X position
                randomY, // Slight Y variation
                Math.sin(angle) * radius, // Z position
              ]}
              scale={randomScale}
              speed={0.2}
              opacity={randomOpacity}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
}
