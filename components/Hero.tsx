export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start text-[#3b3b3b]">
      <div className="flex flex-col gap-2 text-xl font-medium tracking-tight mb-4 w-full">
        {"Ethan’s creative archive."}
      </div>
      <div className="w-full space-y-4 text-sm tracking-[-0.01em]">
        <p>
          {
            "I’m a designer with a background in software systems and a passion for human interaction design. I enjoy crafting solutions to unique issues that invoke inspiration in others."
          }
        </p>
        <p>
          {"Currently leading brand and human interaction design at "}
          <a
            href="https://ondeckai.com/"
            target="_blank"
            className="underline text-[#898989]"
          >
            OnDeck AI (YC S25)
          </a>
          .
        </p>
      </div>
    </div>
  );
}
