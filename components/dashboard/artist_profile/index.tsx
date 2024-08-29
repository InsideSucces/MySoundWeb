import { Track } from "@/contexts/audio-player-context";
import { ArtistData } from "@/types_models";
import { FC, useEffect, useState } from "react";

interface ArtistProfileProps {
    artist_id: string;
}
export const ArtistProfile: FC<ArtistProfileProps> = ({ artist_id }) => {
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
        <>
            {artistProfile && (
                <div className="mt-9">
                    <p className="text-white">Artist Name: {artistProfile.name}</p>
                </div>
            )}
        </>
    )
}