"use client";

import LofiPlayer from "@/components/AudioPlayer";
import { PageLoadCascade } from "@/components/PageLoadCascade";

export default function Page() {
  return (
    <PageLoadCascade>
      <div className="fixed bottom-0 right-0 m-4">
        <LofiPlayer />
      </div>
    </PageLoadCascade>
  );
}
