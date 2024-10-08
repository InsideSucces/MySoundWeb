import { PlaylistData } from "@/types_models";
import Image from "next/image";

type HotPlaylistsProps = {
  playlists: PlaylistData[];
};
export const HotPlaylists = ({ playlists }: HotPlaylistsProps) => {
  return (
    <div className="mx-auto max-w-9xl p-6 xl:p-12">
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-roboto capitalize mb-8">
        Hot Playlists
      </h1>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-8 pb-4">
          {playlists.map((playlist, index) => (
            <div key={`${index}-${playlist.id}`} className="flex-none w-60 md:w-80 bg-[#2dcece] rounded-lg">
              <img
                src={playlist.image}
                alt={playlist.name}
                className="h-48 md:h-64 w-full bg-gray-300"
              />
              <div className="p-3">
                <h3 className="mt-4 text-[#0d0d0d] text-xl md:text-2xl font-medium font-roboto">
                  {playlist.name}
                </h3>
                <p className="mt-2 text-[#393939] text-sm md:text-base font-bold font-roboto opacity-80">
                  {playlist.description}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- Add more playlist items here --> */}
        </div>
        {/* <!-- Duplicate the playlist items to create a seamless loop --> */}
        <div className="flex flex-nowrap gap-8">
          {/* <!-- Duplicate playlist items here --> */}
        </div>
      </div>
    </div>
  );
};
