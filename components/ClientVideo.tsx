"use client";

export default function ClientVideo({
  src,
  onLoadedData,
}: {
  src: string;
  onLoadedData?: () => void;
  className?: string;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      disableRemotePlayback
      playsInline
      className="pointer-events-none touch-none select-none w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
      controlsList="noplaybackrate nodownload nofullscreen"
      disablePictureInPicture
      onLoadedData={onLoadedData}
    >
      <source src={src} />
      Your browser does not support HTML video
    </video>
  );
}
