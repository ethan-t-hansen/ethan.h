"use client";

import Sandbox from "@/components/Sandbox";
import { PageLoadCascade } from "@/components/PageLoadCascade";

export default function Page() {
  return (
    <main className="relative lg:justify-start justify-center min-h-screen">
      <PageLoadCascade>
        <Sandbox />
      </PageLoadCascade>
    </main>
  );
}
