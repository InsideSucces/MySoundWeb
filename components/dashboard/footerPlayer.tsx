import { useAudioPlayerContext } from "@/contexts/audio-player-context";
import { FC } from "react";
import { Controls } from "./controls";
import { ProgressBar } from "./progressBar";
import { formatTime } from "@/helpers";
import { useRouter } from "next/router";
import { VolumeControl } from "./volumeControl";

export const FooterMusicPlayer: FC = () => {
    const router = useRouter();
    const { currentTrack, timeProgress, duration } = useAudioPlayerContext();
    const handleOpenArtistProfile = (artist_id: any) => {
        router.push(`/dashboard/artists/${artist_id}`, undefined, { shallow: true });
    };

    return (
        <footer className="footer-wrapper items-center justify-center md:ml-[150] ">
            <div className="md:flex items-center justify-center z-50 bg-black px-6 py-4 mb-[30]">
                <div className="flex items-center gap-9 mx-9">
                    <img className="w-14 h-14" src={currentTrack.cover_image} width={56} height={56} alt="Foto do álbum" />
                    <div className="flex flex-col flex-grow">
                        <span className="font-normal">{currentTrack.title}</span>
                        <span className="text-xs text-zinc-400 cursor-pointer hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105" onClick={() => handleOpenArtistProfile(currentTrack.artist_id)}>{currentTrack.artist_name}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 ml-9">
                    <Controls />
                    <ProgressBar />
                    <div className="flex items-center justify-center gap-56 w-full mt-1 mb-6">
                        <span className="text-[#847d79] text-xs font-medium">{formatTime(timeProgress)}</span>
                        <span className="text-[#847d79] text-xs font-medium">-{formatTime(duration - timeProgress)}</span>
                    </div>
                </div>
                <VolumeControl />
            </div>
        </footer>
    )
}
