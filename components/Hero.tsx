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
                    <h1 className="text-9xl lg:text-9xl font-bold text-white mb-6">
                    Sounds For <br/> Every Moment
                    </h1>
                    <p className="text-[80px] text-white mb-8 font-bold ">
                        <span className="text-[#61C1C9]">Discover</span> Your Favorite Sounds
                    </p>
                    <div className="flex flex-row items-center gap-28 px-32 mt-24">
                    <button className="bg-[#11A8FD] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Listen Now
                    </button>
                    <button className="bg-transparent text-white border border-[#11A8FD] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Sign Up
                    </button>
                    </div>
                </div>
            </div>
        </section>
        // <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        //     <div className="absolute inset-0 bg-gradient-to-br from-[#61C1C9] via-[#61C1C9] to-[#11A8FD] z-0"></div>
        //     <div className="container mx-auto px-6 z-10">
        //         <div className="flex flex-row lg:flex-row items-center">
        //             <div className="w-full lg:w-1/2 text-center lg:text-left">
        //                 <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
        //                     Welcome to My Sound Web App
        //                 </h1>
        //                 <p className="text-xl text-white mb-8">
        //                     Experience the best in audio technology
        //                 </p>
        //                 <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
        //                     Get Started
        //                 </button>
        //             </div>
        //             <div className="w-full lg:w-1/2 mt-10 lg:mt-0">

        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}