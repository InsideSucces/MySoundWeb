import { FC } from "react";

import { useAudioPlayerContext } from "@/contexts/audio-player-context";

export const ProgressBar: FC = () => {
    const {
        progressBarRef,
        audioRef,
        timeProgress,
        progressBarRefForDiv,
        duration,
        setTimeProgress,
    } = useAudioPlayerContext();

    const handleProgressChange = () => {
        if (audioRef.current && progressBarRef.current) {
            const newTime = Number(progressBarRef.current.value);
            audioRef.current.currentTime = newTime;

            setTimeProgress(newTime);

            // if progress bar changes while audio is on pause
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(newTime / duration) * 100}%`
            );
        }
    };

    const handleProgressChangeForDiv = () => {
        if (audioRef.current && progressBarRefForDiv.current) {
            const newTime = Number(progressBarRefForDiv.current.nodeValue);
            audioRef.current.currentTime = newTime;

            setTimeProgress(newTime);
            // if progress bar changes while audio is on pause
            progressBarRefForDiv.current.style.setProperty(
                'width',
                `${(newTime / duration) * 100}%`
            );
        }
    };

    const progressPercentage = (timeProgress / duration) * 100;

    return (

        <>
            <div className="flex flex-column items-center justify-center gap-5 w-full">
                <input
                    className="w-full bg-gray-300 text-[#2dcece] hidden"
                    ref={progressBarRef}
                    type="range"
                    defaultValue="0"
                    onChange={handleProgressChange}
                />
            </div>
            <div className="flex items-center">
                <div className="md:h-[4x] w-[304] rounded-full bg-[#1C1C1C]">
                    <div
                        ref={progressBarRefForDiv || progressBarRef}
                        onChange={handleProgressChangeForDiv}
                        onPlay={handleProgressChangeForDiv}
                        itemType="range"
                        defaultValue={0}
                        className="md:h-[4px] h-1 rounded-full bg-[#2dcece] shadow-md transition-all relative"
                        style={{ width: `${progressPercentage}%` }}
                    >
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 bg-[#2dcece] rounded-full shadow-md hover:bg-[#fff]"></div>
                    </div>
                </div>
            </div>
        </>
    );
};