import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Volume2Icon,
  VolumeOff,
} from "lucide-react";
// import { useIsMobile } from "@/hooks/use-mobile";

interface Track {
  title: string;
  artist: string;
  cover: string;
  url: string;
}

export default function LofiPlayer() {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isRepeating, setIsRepeating] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [open, setOpen] = useState(false);

  const playlist: Track[] = [
    {
      title: "Skating in Central Park",
      artist: "Bill Evans",
      cover: "https://i.scdn.co/image/ab67616d0000b2731a05b72d0e1fc7a4e30d047d",
      url: "https://swt0bwz5tdidb41n.public.blob.vercel-storage.com/Skating%20In%20Central%20Park.mp3",
    },
  ];

  const track: Track = playlist[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = (): void => setCurrentTime(audio.currentTime);
    const updateDuration = (): void => setDuration(audio.duration);
    const handleEnded = (): void => {
      if (isRepeating) {
        audio.currentTime = 0;
        audio.play();
      } else {
        skipForward();
      }
    };

    // Check if metadata is already loaded
    if (audio.duration) {
      setDuration(audio.duration);
    }

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isRepeating, currentTrack]);

  const togglePlay = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = (e?: React.MouseEvent): void => {
    e?.stopPropagation();
    const nextTrack = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextTrack);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const skipBackward = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (currentTime > 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      const prevTrack =
        currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
      setCurrentTrack(prevTrack);
      setIsPlaying(true);
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  const formatTime = (time: number): string => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    if (audioRef.current) {
      audioRef.current.currentTime = percentage * duration;
    }
  };

  return (
    <div className="cursor-pointer">
      {open ? (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-background/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="w-96 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl shadow-2xl p-6 font-sans">
            {/* Track Info */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-1">
                {track.title}
              </h3>
              <p className="text-sm text-neutral-500">{track.artist}</p>
            </div>

            {/* Album Art */}
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between text-xs text-neutral-500 mb-3">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Progress Bar */}
            <div
              className="w-full h-1 bg-neutral-200 rounded-full cursor-pointer mb-6 overflow-hidden"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full "
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => setIsRepeating(!isRepeating)}
                className={`p-2 rounded-full  ${
                  isRepeating
                    ? "text-purple-600 bg-purple-100"
                    : "text-neutral-600 hover:bg-background/20"
                }`}
              >
                <Repeat size={20} />
              </button>
              <button
                onClick={skipBackward}
                className="p-3 rounded-full hover:bg-background/20  text-neutral-400"
              >
                <SkipBack size={24} />
              </button>
              <button
                onClick={togglePlay}
                className="p-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-transform transform hover:scale-105"
              >
                {isPlaying ? (
                  <Pause size={28} fill="white" />
                ) : (
                  <Play size={28} fill="white" />
                )}
              </button>
              <button
                onClick={skipForward}
                className="p-3 rounded-full hover:bg-background/20  text-neutral-400"
              >
                <SkipForward size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMuted((currentState) => !currentState);
                }}
                className="p-3 rounded-full hover:bg-background/20  text-neutral-400"
              >
                {muted ? <VolumeOff size={24} /> : <Volume2Icon size={24} />}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row md:justify-start justify-center md:w-fit w-full md:items bg-foreground shadow-lg"
          onClick={() => setOpen(true)}
        >
          {/* Album Art */}
          <div className="flex flex-row items-center gap-2 p-2">
            <div className="w-8 h-8 aspect-square overflow-hidden shadow-lg">
              <img
                src={track.cover}
                alt={track.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-background">
                {track.title}
              </h3>
              <p className="text-xs text-neutral-500">{track.artist}</p>
            </div>

            <button
              onClick={skipBackward}
              className="p-2 rounded-full hover:bg-background/20  text-neutral-400"
            >
              <SkipBack size={16} />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg  transform hover:scale-105"
            >
              {isPlaying ? (
                <Pause size={16} fill="white" />
              ) : (
                <Play size={16} fill="white" />
              )}
            </button>
            <button
              onClick={(e) => skipForward(e)}
              className="p-2 rounded-full hover:bg-background/20  text-neutral-400"
            >
              <SkipForward size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMuted((currentState) => !currentState);
              }}
              className="p-2 rounded-full hover:bg-background/20  text-neutral-400"
            >
              {muted ? <VolumeOff size={16} /> : <Volume2Icon size={16} />}
            </button>
          </div>
        </div>
      )}

      <audio ref={audioRef} src={track.url} muted={muted} />
    </div>
  );
}
