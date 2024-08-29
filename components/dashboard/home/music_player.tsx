import { useAudioPlayerContext } from '@/contexts/audio-player-context';
import React, { useState, useRef } from 'react';
import { ProgressBar } from '../progressBar';
import { formatTime } from '@/helpers';
import { Controls } from '../controls';
import { useRouter } from 'next/router';

interface MusicPlayerProps {
    song?: any; // Define the structure of your song object
    isSmallScreen?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ song }) => {
    const {currentTrack, timeProgress, duration} = useAudioPlayerContext();

    const router = useRouter();
    const handleOpenArtistProfile = (artist_id: any) => {
        router.push(`/dashboard/artists/${artist_id}`, undefined, { shallow: true });
    };

    return (
        <div className="w-full max-w-[300px] items-center justify-center  md:w-72 relative rounded-3xl p-6">
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6">
                <img
                    className="w-full h-full"
                    src={currentTrack.cover_image}
                    alt={currentTrack.title || 'Album Art'}
                />
            </div>
            <div className="flex flex-col items-center text-center">
                <h3 className="text-white text-lg font-medium font-roboto mb-2">
                    {currentTrack.title || 'Song Title'}
                </h3>
                <p className="text-[#99938f] text-sm font-medium mb-4 cursor-pointer hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105" onClick={() => handleOpenArtistProfile(currentTrack.artist_id)}>
                    {currentTrack.artist_name || 'Artist Name'}
                </p>
                <ProgressBar />
                <div className="flex items-center justify-center gap-56 w-full mt-1 mb-6">
                    <span className="text-[#847d79] text-xs font-medium">{formatTime(timeProgress)}</span>
                    <span className="text-[#847d79] text-xs font-medium">-{formatTime(duration - timeProgress)}</span>
                </div>
                <Controls />
            </div>
        </div>
    );
};
