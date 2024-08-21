// import img from "next/img";

export const ArtistProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4 lg:p-8">
      <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-4">
        <h1 className="text-[#2dcece] text-4xl lg:text-6xl xl:text-7xl font-extrabold font-roboto capitalize">
          Gilly Mu
        </h1>
        <p className="text-white/70 text-base lg:text-xl font-normal font-roboto">
          Music Artist from South London with roots in Uganda, looking to bridge
          the gap between the UK & East Africa through music. Gilly Muwanga who
          is known by his stage name as Gilly Mu is a Ugandan Dancer, music
          artist, singer and songwriter who is one of the fast rising music
          artists in diaspora representing Uganda.
        </p>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          className="w-full max-w-[354px] h-auto"
          src="https://via.placeholder.com/354x384"
          alt="Gilly Mu"
        />
      </div>

      <div className="w-full lg:w-1/3 p-4 lg:p-8 bg-transparent rounded-[13.59px] backdrop-blur-[13.59px] flex flex-col justify-start items-center gap-6">
        <div className="w-full">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold font-roboto leading-9">
            Album: GILLY
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* Repeat this block for each song */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-[9.06px]"
                src="https://via.placeholder.com/48x48"
                alt="Album cover"
              />
              <div>
                <p className="text-white text-base font-medium font-roboto">
                  Sweet & Sour
                </p>
                <p className="text-[#99938f] text-sm font-medium font-roboto">
                  Gilly Mu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#99938f] text-xs">120k</span>
              <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                <span className="text-[#2dcece]">▶</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-[9.06px]"
                src="https://via.placeholder.com/48x48"
                alt="Album cover"
              />
              <div>
                <p className="text-white text-base font-medium font-roboto">
                  Sweet & Sour
                </p>
                <p className="text-[#99938f] text-sm font-medium font-roboto">
                  Gilly Mu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#99938f] text-xs">120k</span>
              <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                <span className="text-[#2dcece]">▶</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-[9.06px]"
                src="https://via.placeholder.com/48x48"
                alt="Album cover"
              />
              <div>
                <p className="text-white text-base font-medium font-roboto">
                  Sweet & Sour
                </p>
                <p className="text-[#99938f] text-sm font-medium font-roboto">
                  Gilly Mu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#99938f] text-xs">120k</span>
              <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                <span className="text-[#2dcece]">▶</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-[9.06px]"
                src="https://via.placeholder.com/48x48"
                alt="Album cover"
              />
              <div>
                <p className="text-white text-base font-medium font-roboto">
                  Sweet & Sour
                </p>
                <p className="text-[#99938f] text-sm font-medium font-roboto">
                  Gilly Mu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#99938f] text-xs">120k</span>
              <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                <span className="text-[#2dcece]">▶</span>
              </button>
            </div>
          </div>
          {/* End of song block */}
        </div>

        <button className="w-full max-w-[169px] h-[30px] bg-gradient-to-r from-[#61c1c8] to-[#11a8fd] rounded-full text-[#121212] text-xl font-extrabold font-roboto capitalize">
          Buy Now (£9.99)
        </button>
      </div>
    </div>
  );
};
