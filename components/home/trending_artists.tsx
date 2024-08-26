import { ArtistData } from "@/types_models";
import Image from "next/image";

type TrendingArtistesProps = {
  artists: ArtistData[];
};

export const TrendingArtistes = ({ artists }: TrendingArtistesProps) => {
  return (
    <div className="mx-auto max-w-full p-6 xl:p-12 overflow-hidden">
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-roboto capitalize mb-8">
        Trending Artistes
      </h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap gap-8 py-8">
          {artists.map((artist, index) => (
            <div key={`${index}-${artist.name}`} className="flex-none w-50">
              <img
                className="w-40 h-40 rounded-full md:w-64 md:h-64"
                src={artist.image}
                alt={artist.name}
              />
              <p className="mt-4 text-white text-lg font-semibold font-roboto text-center md:text-xl">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
