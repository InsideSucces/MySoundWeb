import { ArtistData } from "@/types";

type TrendingArtistesProps = {
  artists: ArtistData[];
};

export const TrendingArtistes = ({ artists }: TrendingArtistesProps) => {
  return (
    <div className="mx-auto max-w-full p-6 xl:p-12 overflow-hidden">
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-roboto capitalize mb-8">
        Trending Artistes
      </h1>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-8 py-8">
          {artists.map((artist) => (
            <div className="flex-none w-48">
              <img
                className="w-48 h-48 rounded-full"
                src={artist.image}
                alt={artist.name}
              />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
