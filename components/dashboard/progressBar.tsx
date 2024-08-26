import { FC } from "react";

import { useAudioPlayerContext } from "@/contexts/audio-player-context";

export const ProgressBar: FC = () => {
    const {
        progressBarRef,
        audioRef,
        timeProgress,
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

    const formatTime = (time: number | undefined): string => {
        if (typeof time === 'number' && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);

            // Convert to string and pad with leading zeros if necessary
            const formatMinutes = minutes.toString().padStart(2, '0');
            const formatSeconds = seconds.toString().padStart(2, '0');

            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <div className="flex flex-column items-center justify-center gap-5 w-full">
            <input
                className="w-full bg-gray-300 text-[#2dcece]"
                ref={progressBarRef}
                type="range"
                defaultValue="0"
                onChange={handleProgressChange}
            />
        </div>
    );
};