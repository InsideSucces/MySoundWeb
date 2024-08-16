export const HeroSection = () => {
    return (

        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f5881] via-[#0a4d74] to-[#2fabf3] z-0"></div>
            <div className="absolute  right-0 h-full w-1/2 z-10">
                <img
                    src="/assets/hero_image.png"
                    alt="Hero Image"
                    className="mx-auto"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 overflow-hidden">
                <div className="text-[#FEFEFE] text-[570px] font-bold opacity-10 mt-20">MUSIC</div>
                <div className="text-[#FEFEFE] text-[570px] font-bold opacity-10 mt-10">MYSOUND</div>
            </div>
            <div className="container mx-auto z-20 relative">
                <div className="text-left">
                    <h1 className="text-9xl lg:text-9xl md:text-4xl font-bold text-white mb-6">
                    Sounds For <br/> Every Moment
                    </h1>
                    <p className="text-[80px] text-white mb-8 font-bold ">
                        <span className="text-[#61C1C9]">Discover</span> Your Favorite Sounds
                    </p>
                    <div className="flex flex-row items-center gap-28 px-32 mt-24">
                    <button className="bg-gradient-to-br from-[#61C1C9] via-[#0081C9] to-[#11A8FD] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Listen Now
                    </button>
                    <button className="bg-transparent text-white border-2 border-[#61C1C9] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Sign Up
                    </button>
                    </div>
                </div>
            </div>
        </section>
    )
}