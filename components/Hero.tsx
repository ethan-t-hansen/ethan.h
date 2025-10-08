export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="flex flex-col gap-2 text-2xl font-medium tracking-tight mb-4 md:w-3/4">
        {"Welcome to my creative archive."}
      </div>
      <div className="lg:w-3/4 space-y-4 text-sm">
        <p>
          {"Hey! I'm Ethan, a developer with a curiousity for human-computer interaction and a passion for motion + interface design. I enjoy crafting unique approaches that solve real issues."}
        </p>
        <p>{"Currently studying Business + Computer Science @ UBC."}</p>
      </div>
    </div>
  );
}
