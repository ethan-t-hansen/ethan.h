export default function Hero() {
  const Fade: React.FC = () => {
    return (
      <div className="absolute -bottom-4 h-32 w-screen bg-gradient-to-t from-black to-black/0">
        <div className="absolute -bottom-4 h-screen w-screen bg-black/30 -z-10"/>
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mb-32">
      <div>
        <div className="text-3xl md:text-4xl lg:text-4xl font-regular font-sans flex-row flex tracking-tight justify-center text-center mb-4">
          Creative Developer / Product Designer
        </div>

        <div className="flex md:gap-0 gap-4 md:justify-between text-xs font-regular">
          <p className="opacity-60">CURRENTLY</p>
          <div className="flex flex-col items-start md:items-end text-left">
            <p>Business + CS @ The University of British Columbia</p>
            <p>Design Engineering @ ICBC</p>
          </div>
          <p className="opacity-60">BASED IN</p>
          <p>Vancouver, Canada</p>
        </div>
      </div>
      <Fade />
    </div>
  );
}
