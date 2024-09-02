// import img from "next/img";

import { Track } from "@/contexts/audio-player-context";
import { truncateString } from "@/helpers";
import { ArtistData } from "@/types_models";

type ArtistProfilePros = {
  artist?: ArtistData
  tracks: Track[]
}

export const ArtistProfile = ({ artist, tracks }: ArtistProfilePros) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4 mx-[6rem] lg:p-8">
      <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-4">
        <h1 className="text-[#2dcece] text-4xl lg:text-6xl xl:text-7xl font-extrabold font-roboto capitalize">
          {artist?.name ?? ""}
        </h1>
        <p className="text-white/70 text-base lg:text-xl font-normal font-roboto">
          {truncateString(500, artist?.bio!) ?? ""}
        </p>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          className="w-full max-w-[354px] h-auto"
          src={artist?.image! ?? ""}
          alt={artist?.name ?? ""}
        />
      </div>

      <div className="w-full lg:w-1/3 p-4 lg:p-8 bg-transparent rounded-[13.59px] backdrop-blur-[13.59px] flex flex-col justify-start items-center gap-6">
        <div className="w-full">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold font-roboto leading-9">
            Album: GILLY
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4">
          {tracks && tracks.length > 0 ? tracks.map((track, index) => (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-[9.06px]"
                  src={track.cover_image}
                  alt={track.artist_name}
                />
                <div>
                  <p className="text-white text-base font-medium font-roboto">
                    {track.title}
                  </p>
                  <p className="text-[#99938f] text-sm font-medium font-roboto">
                    {track.artist_name}
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
          )) : (
            <div>Loading tracks...</div>
          )}
        </div>

        <button className="w-full max-w-[169px] h-[30px] bg-gradient-to-r from-[#61c1c8] to-[#11a8fd] rounded-full text-[#121212] text-xl font-extrabold font-roboto capitalize">
          Buy Now (£9.99)
        </button>
      </div>
    </div>
  );
};
