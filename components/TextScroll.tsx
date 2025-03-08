"use client"

import { useRef, useEffect, useState } from "react"

const lines = [
  "Designing to make",
  "digital interactions",
  "a little more fun.",
  "",
  "Exploring Figma, Rive,",
  "Spline, and AI tools.",
  "",
  "Experienced in design",
  "systems and collaborating",
  "with developers."
]

export default function Layout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const startPoint = windowHeight / 1.2
      const totalRange = windowHeight * 2

      const progress = (startPoint - rect.top) / totalRange
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative flex flex-col md:flex-row my-24 gap-24">

      <div ref={containerRef} className="h-fit flex items-center w-fit">
        <div>
          {lines.map((line, lineIndex) => (
            <Line
              key={lineIndex}
              text={line}
              lineIndex={lineIndex}
              totalLines={lines.length}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full md:w-[28rem] h-fit aspect-square overflow-hidden brightness-125">
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
              <source src={"/projects/video/spline-rotate.webm"} />
              <p>Your browser does not support HTML video</p>
            </video>
          </div>

   

    </div>
  )
}

function Line({
  text,
  lineIndex,
  scrollProgress,
}: {
  text: string
  lineIndex: number
  totalLines: number
  scrollProgress: number
}) {
  const staggerFactor = 0.03
  const offset = lineIndex * staggerFactor
  const lineProgress = Math.min(Math.max((scrollProgress - offset) * (1 + staggerFactor) * 3, 0), 1)

  return (
    <div className="relative pb-2 md:pb-4">

      <div className="opacity-40 text-2xl md:text-5xl tracking-tight leading-tight text-foreground text-nowrap">
        {text}
      </div>

      <div
        className="absolute inset-0 text-2xl md:text-5xl tracking-tight leading-tight text-foreground overflow-hidden whitespace-nowrap"
        style={{
          width: `${lineProgress * (text.length*10)}%`,
        }}
      >
        {text}
      </div>
    </div>
  )
}

