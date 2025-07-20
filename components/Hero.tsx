export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-start mt-40">
      <div>

        <div className="flex flex-col gap-2 text-3xl md:text-4xl font-regular tracking-tight mb-4 md:w-3/4">
          <div className="text-2xl md:text-3xl">
            {"Hey 👋🏻 I'm Ethan, a designer focused on the intersection between development and creativity."}
          </div>
        </div>

        <div className="flex gap-6 text-xs font-regular">
          <div className="flex flex-col md:flex-row md:gap-2">
            <p className="opacity-60">WORKING AS</p>
            <p>Design Eng Intern @ ICBC</p>
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
