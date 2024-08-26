import { FC, useCallback, useEffect, useRef, useState } from "react";

import { tracks } from "@/data/tracks";
import { Track, useAudioPlayerContext } from "@/contexts/audio-player-context";
import { BsFillFastForwardFill, BsFillRewindFill, BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";

export const Controls: FC = () => {
    const {
        currentTrack,
        audioRef,
        setDuration,
        duration,
        setTimeProgress,
        progressBarRef,
        setTrackIndex,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        // setListeningHistory,
        updateListeningHistory,
    } = useAudioPlayerContext();

    const [isShuffle, setIsShuffle] = useState<boolean>(false);
    const [isRepeat, setIsRepeat] = useState<boolean>(false);
    const [shuffledTrackList, setShuffledTrackList] = useState<Track[]>([]);

    const shuffleTracks = (tracks: Track[]): Track[] => {
        // Create a copy of the array to avoid mutating the original
        const shuffledTracks = [...tracks];

        // Fisher-Yates Shuffle Algorithm
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }

        return shuffledTracks;
    };


    const playAnimationRef = useRef<number | null>(null);

    const updateProgress = useCallback(() => {
        if (audioRef.current && progressBarRef.current && duration) {
            const currentTime = audioRef.current.currentTime;
            setTimeProgress(currentTime);

            progressBarRef.current.value = currentTime.toString();
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(currentTime / duration) * 100}%`
            );
        }
    }, [duration, setTimeProgress, audioRef, progressBarRef]);

    const startAnimation = useCallback(() => {
        if (audioRef.current && progressBarRef.current && duration) {
            const animate = () => {
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate);
            };
            playAnimationRef.current = requestAnimationFrame(animate);
        }
    }, [updateProgress, duration, audioRef, progressBarRef]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
            startAnimation();
        } else {
            audioRef.current?.pause();
            if (playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
                playAnimationRef.current = null;
            }
            updateProgress(); // Ensure progress is updated immediately when paused
        }

        return () => {
            if (playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        };
    }, [isPlaying, startAnimation, updateProgress, audioRef]);

    const onLoadedMetadata = () => {
        const seconds = audioRef.current?.duration;
        if (seconds !== undefined) {
            setDuration(seconds);
            if (progressBarRef.current) {
                progressBarRef.current.max = seconds.toString();
            }
        }
    }

    const skipForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 15;
            updateProgress();
        }
    };

    const skipBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 15;
            updateProgress();
        }
    };

    const handlePrevious = useCallback(() => {
        setTrackIndex((prev) => {
            const newIndex = isShuffle
                ? Math.floor(Math.random() * tracks.length)
                : prev === 0
                    ? tracks.length - 1
                    : prev - 1;
            setCurrentTrack(tracks[newIndex]);
            updateListeningHistory(tracks[newIndex]);
            return newIndex;
        });
    }, [isShuffle, setCurrentTrack, setTrackIndex]);

    const handleNext = useCallback(() => {
        setTrackIndex((prev) => {
            const newIndex = isShuffle
                ? Math.floor(Math.random() * tracks.length)
                : prev >= tracks.length - 1
                    ? 0
                    : prev + 1;
            setCurrentTrack(tracks[newIndex]);
            updateListeningHistory(tracks[newIndex]);
            return newIndex;
        });
    }, [isShuffle, setCurrentTrack, setTrackIndex]);


    useEffect(() => {
        const currentAudioRef = audioRef.current;

        if (currentAudioRef) {
            currentAudioRef.onended = () => {
                if (isRepeat) {
                    currentAudioRef.play();
                } else {
                    handleNext(); // This function should handle both shuffle and non-shuffle scenarios
                }
            };
        }

        return () => {
            if (currentAudioRef) {
                currentAudioRef.onended = null;
            }
        };
    }, [isRepeat, handleNext, audioRef]);

    // useEffect(() => {
    //     // Shuffle the tracks when the component mounts
    //     const shuffled = shuffleTracks(tracks);
    //     setShuffledTrackList(shuffled);
    // }, []);

    return (
        <div className="flex gap-4 items-center">
            <audio
                src={currentTrack.file}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            <button onClick={handlePrevious}>
                <BsSkipStartFill size={20} color="#2dcece" />
            </button>
            <button onClick={skipBackward}>
                <BsFillRewindFill size={20} color="#2dcece" />
            </button>

            <button
                onClick={() => setIsPlaying((prev) => !prev)}
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
            <button onClick={skipForward}>
                <BsFillFastForwardFill size={20} color="#2dcece" />
            </button>
            <button onClick={handleNext}>
                <BsSkipEndFill size={20} color="#2dcece" />
            </button>
        </div>
    )
}