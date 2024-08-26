import { useAudioPlayerContext } from "@/contexts/audio-player-context";
import { FC } from "react";
import { BsMusicNoteBeamed } from 'react-icons/bs';

export const TrackInfo: FC = () => {
    const { currentTrack } = useAudioPlayerContext();
    return (
        <div className="flex items-center gap-4">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
                {currentTrack.cover_image ? (
                    <img
                        className="w-full h-full object-cover"
                        src={currentTrack.cover_image}
                        alt={currentTrack.title}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-md">
                        <span className="text-xl text-gray-600">
                            <BsMusicNoteBeamed />
                        </span>
                    </div>
                )}
            </div>
            <div>
                <p className="font-bold lg:truncate lg:max-w-64">
                    {currentTrack.title}
                </p>
            </div>
        </div>
    )
}