export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start mt-40">
      <div>
        <div className="flex flex-col gap-2 text-2xl md:text-3xl font-regular tracking-tight mb-4 md:w-3/4">
          <div>{"Hey, I'm Ethan. I'm a creative with a passion for well-crafted design and engineering."}</div>
        </div>

        <div className="flex gap-6 text-xs font-regular">
          <div className="flex flex-col md:flex-row md:gap-2">
            <p className="opacity-60">PREVIOUSLY</p>
            <p>UX Engineering Intern @ ICBC</p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            <p className="opacity-60">STUDYING</p>
            <p>Business + CS @ UBC</p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            <p className="opacity-60">BASED IN</p>
            <p>Vancouver, Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
