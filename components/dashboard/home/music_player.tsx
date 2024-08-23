import React, { useState, useRef } from 'react';

interface MusicPlayerProps {
    song?: any; // Define the structure of your song object
    isSmallScreen?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full max-w-[300px] items-center justify-center  md:w-72 relative rounded-3xl p-6">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-6">
                <img
                    className="w-full h-full object-cover"
                    src={song?.imageUrl || 'https://via.placeholder.com/248x213'}
                    alt={song?.title || 'Album Art'}
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <h3 className="text-white text-lg font-medium font-roboto mb-2">
                    {song?.title || 'Song Title'}
                </h3>
                <p className="text-[#99938f] text-sm font-medium mb-4">
                    {song?.artist || 'Artist Name'}
                </p>

                <div className="flex items-center justify-center gap-52 w-full mb-6">
                    <span className="text-[#847d79] text-xs font-medium">1:21</span>
                    <span className="text-[#847d79] text-xs font-medium">-2:36</span>
                </div>

                <div className="flex items-center justify-center gap-6 mb-4">
                    <button className="w-6 h-6">
                        {/* Replace with previous song icon */}
                    </button>
                    <button
                        onClick={handlePlayPause}
                        className="w-14 h-14 rounded-full bg-[#2dcece] flex items-center justify-center shadow-md"
                    >
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pause-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-play-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        )}
                    </button>
                    <button className="w-6 h-6">
                        {/* Replace with next song icon */}
                    </button>
                </div>
            </div>

            <audio ref={audioRef} src={song?.audioUrl} /> {/* Add audio source */}
        </div>
    );
};
