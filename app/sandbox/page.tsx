"use client";

import Sandbox from "@/components/Sandbox";

export default function Page() {
  return (
    <main className="relative lg:justify-start justify-center min-h-screen py-48">
      <h3 className="text-3xl font-regular mb-8 font-sans tracking-tight">
        {" "}
        Sandbox{" "}
      </h3>

      <Sandbox />
    </main>
  );
}
