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
            <div className="md:flex z-50 bg-black px-6 py-4 mb-[30]">
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
                <div className="flex items-center justify-center">
                    {/* <button className="text-zinc-400 hover:text-[#2dcece] transform transition duration-300 ease-in-out hover:scale-125">
                        <svg className="w-4 h-4 text-current fill-current" viewBox="0 0 16 16">
                            <path d="M11.196 8 6 5v6l5.196-3z"></path>
                            <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
                        </svg>
                    </button>
                    <button className="text-zinc-400 hover:text-[#2dcece] transform transition duration-300 ease-in-out hover:scale-125">
                        <svg className="w-4 h-4 text-current fill-current" viewBox="0 0 16 16">
                            <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                        </svg>
                    </button>
                    <button className="text-zinc-400 hover:text-[#2dcece] transform transition duration-300 ease-in-out hover:scale-125">
                        <svg className="w-4 h-4 text-current fill-current" viewBox="0 0 16 16">
                            <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                    </button> */}
                    <VolumeControl />
                </div>
            </div>
        </footer>
    )
}
