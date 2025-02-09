"use client";

import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls} from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-200"
    ></motion.div>
  );
};

const Clouds = () => {
  const numClouds = 20;
  const radius = 10;

  return (
    <>
      <ambientLight color={"#fff"} intensity={3} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
      {Array.from({ length: numClouds }).map((_, i) => {
        const angle = (i / numClouds) * Math.PI * 2;
        const randomScale = Math.random() * 0.5 + 1.75;
        const randomY = -12 + (Math.random() * 6 - 2);
        const randomOpacity = Math.random() * 0.5 + 0.1;

        return (
          <Cloud
            key={i}
            position={[
              Math.cos(angle) * radius,
              randomY,
              Math.sin(angle) * radius,
            ]}
            scale={randomScale}
            speed={0.2}
            opacity={randomOpacity}
          />
        );
      })}
    </>
  );
};

export function Sky() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>

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
          <Suspense fallback={null}>
            <Clouds />
          </Suspense>
        </Canvas>

    </>
  );
}

export default Sky;
