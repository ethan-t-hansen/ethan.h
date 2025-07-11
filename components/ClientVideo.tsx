"use client";

export default function ClientVideo({ src }: { src: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      disableRemotePlayback
      playsInline
      className="pointer-events-none touch-none select-none w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
      controlsList="noplaybackrate nodownload nofullscreen"
      disablePictureInPicture
    >
      <source src={src} />
      Your browser does not support HTML video
    </video>
  );
}