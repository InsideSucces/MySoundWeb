import { useAudioPlayerContext } from '@/contexts/audio-player-context';
import React, { useState, useRef } from 'react';
import { ProgressBar } from '../progressBar';
import { formatTime } from '@/helpers';
import { Controls } from '../controls';

interface MusicPlayerProps {
    song?: any; // Define the structure of your song object
    isSmallScreen?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ song }) => {
    const {currentTrack, timeProgress, duration} = useAudioPlayerContext();

    return (
        <div className="w-full max-w-[300px] items-center justify-center  md:w-72 relative rounded-3xl p-6">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-6">
                <img
                    className="w-full h-full object-cover"
                    src={currentTrack.cover_image}
                    alt={currentTrack.title || 'Album Art'}
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <h3 className="text-white text-lg font-medium font-roboto mb-2">
                    {currentTrack.title || 'Song Title'}
                </h3>
                <p className="text-[#99938f] text-sm font-medium mb-4">
                    {song?.artist || 'Artist Name'}
                </p>
                <ProgressBar />
                <div className="flex items-center justify-center gap-52 w-full mb-6">
                    <span className="text-[#847d79] text-xs font-medium">{formatTime(timeProgress)}</span>
                    <span className="text-[#847d79] text-xs font-medium">-{formatTime(duration - timeProgress)}</span>
                </div>
                <Controls />
            </div>
        </div>
    );
};
