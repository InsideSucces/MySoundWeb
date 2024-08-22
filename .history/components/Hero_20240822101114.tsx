import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f5881] via-[#0a4d74] to-[#2fabf3] z-10"></div>

      <div className="absolute right-0 h-full w-1/2 md:w-1/2 z-20">
        <img
          src="/assets/hero_image.png"
          alt="Hero Image"
          className="h-full w-full object-contain"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 overflow-hidden">
        <div className="text-[#FEFEFE] text-[29vw]  lg:text-[570px] font-bold opacity-10 mt-20 leading-none">
          MUSIC
        </div>
        <div className="text-[#FEFEFE] text-[29vw]  lg:text-[570px] font-bold opacity-10 mt-10 leading-none">
          MYSOUND
        </div>
      </div>

      <div className="container mx-auto px-16 z-40 relative md:px-16 lg:px-20">
        <div className="text-left max-w-[1200px]">
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-tight">
            Sounds For <br /> Every Moment
          </h1>
          <p className="text-4xl md:text-6xl lg:text-[80px] text-white mb-8 font-bold leading-tight">
            <span className="text-[#61C1C9]">Discover</span> Your Favorite
            Sounds
          </p>
          <div className="flex flex-row items-center px-3 md:px-9 lg:px-9 gap-8 md:gap-16 lg:gap-28 mt-12 md:mt-24">
            <Link href={"/dashboard"}>
              <button
                type="button"
                onClick={() => {
                  console.log("Listen Now Clicked!!!!");
                }}
                className="px-8 py-3 bg-gradient-to-tl from-teal-300 to-sky-500 rounded-3xl text-neutral-900 font-bold hover:opacity-90 transition duration-300 z-50"
              >
                Listen Now
              </button>
            </Link>
            <Link href={"/auth/signUp"}>
              <button
                type="button"
                className="w-40 h-11 bg-transparent text-white border-2 border-[#61C1C9] font-bold py-3 px-8 rounded-3xl hover:bg-opacity-80 transition duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
