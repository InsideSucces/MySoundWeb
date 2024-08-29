import { Track, useAudioPlayerContext } from "@/contexts/audio-player-context";
import { ArtistData } from "@/types_models";
import { NextPage } from "next";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


interface ArtistProfileProps {
    artist_id: string;
}
export const ArtistProfile: NextPage<ArtistProfileProps> = ({ artist_id }) => {
    const router = useRouter();
    const { setCurrentTrack, setIsPlaying } = useAudioPlayerContext();
    const [artistProfile, setArtistProfile] = useState<ArtistData>()
    const [artistTracks, setArtistTracks] = useState<Track[]>()

    useEffect(() => {
        fetch(`/api/fetchArtistProfileById?artist_id=${artist_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
            .then((data) => {
                setArtistProfile(data[0]);
            })
            .catch((error) => console.error("Error:", error))
    }, [])

    useEffect(() => {
        fetch(`/api/fetchTracksByArtist?artist_id=${artist_id}`)
           .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json()
            })
           .then((data) => {
                setArtistTracks(data);
            })
           .catch((error) => console.error("Error:", error))
    },[])

    return (
        <div className="bg-transparent text-white min-h-screen mt-36 md:mt-52 mb-9">
        {/* Header */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${artistProfile?.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
          <div className="absolute bottom-10 left-10 z-10">
            <img
              src={artistProfile?.image!}
              alt={artistProfile?.name!}
              className="w-40 h-40 rounded-full md:w-64 md:h-64"
            />
            <h1 className="text-4xl font-bold mt-4">{artistProfile?.name}</h1>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-2">
              Follow
            </button>
          </div>
        </div>
  
        {/* Content Area */}
        <div className="container mx-auto px-4 py-8">
          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 md:text-xl text-semibold">{artistProfile?.bio}</p>
            {/* Genres, Related Artists */}
          </div>
  
          {/* Popular */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <ul>
              {artistTracks?.slice(0, 5).map((track) => (
                <li
                  key={track.id}
                  className="flex items-center mb-4 cursor-pointer"
                  onClick={() => {
                    setCurrentTrack(track);
                    setIsPlaying(true);
                  }}
                >
                  <img
                    src={track.cover_image}
                    alt={track.title}
                    className="w-[80px] h-[80px] rounded-md mr-4"
                  />
                  <div>
                    <p className="font-bold">{track.title}</p>
                    <p className="text-gray-400">{track.artist_name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Albums, Singles, Playlists (similar structure) */}
        </div>
      </div>
    )
}