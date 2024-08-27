import { FC, useCallback, useEffect, useRef, useState } from "react";

import { tracks } from "@/data/tracks";
import { Track, useAudioPlayerContext } from "@/contexts/audio-player-context";
import { BsFillFastForwardFill, BsFillRewindFill, BsRepeat, BsShuffle, BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import {Spinner} from "@nextui-org/react";

export const Controls: FC = () => {
    const {
        currentTrack,
        audioRef,
        setDuration,
        duration,
        setTimeProgress,
        progressBarRef,
        progressBarRefForDiv,
        setTrackIndex,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        isLoading,
        setIsLoading,
        setListeningHistory,
        isShuffle, 
        setIsShuffle,
        isRepeat, 
        setIsRepeat
    } = useAudioPlayerContext();

    const shuffleTracks = (trackss: Track[]): Track[] => {
        const shuffledTracks = [...trackss];
        // Fisher-Yates Shuffle Algorithm
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        return shuffledTracks;
    };

    const playAnimationRef = useRef<number | null>(null);

    const updateProgress = useCallback(() => {
        if (audioRef.current && progressBarRef.current && progressBarRefForDiv.current && duration) {
            const currentTime = audioRef.current.currentTime;
            setTimeProgress(currentTime);

            progressBarRefForDiv.current.nodeValue = currentTime.toString();
            progressBarRefForDiv.current?.style.setProperty(
                'width',
                `${(currentTime / duration) * 100}%`
            );
            progressBarRef.current.value = currentTime.toString();
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(currentTime / duration) * 100}%`
            );
        }
    }, [duration, setTimeProgress, audioRef, progressBarRef]);

    const startAnimation = useCallback(() => {
        if (audioRef.current && progressBarRef.current && progressBarRefForDiv.current && duration) {
            const animate = () => {
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate);
            };
            playAnimationRef.current = requestAnimationFrame(animate);
        }
    }, [updateProgress, duration, audioRef, progressBarRef, progressBarRefForDiv]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
            startAnimation();
        } else {
            audioRef.current?.pause();
            setIsLoading(false);
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
    }, [isPlaying, startAnimation, updateProgress, audioRef, setIsLoading]);

    const onLoadedMetadata = () => {
        const seconds = audioRef.current?.duration;
        if (seconds !== undefined) {
            setDuration(seconds);
            if (progressBarRef.current && progressBarRefForDiv.current) {
                progressBarRef.current.max = seconds.toString();
                progressBarRefForDiv.current.ariaValueMax = seconds.toString();
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

    useEffect(() => {
        const currentAudioRef = audioRef.current;
    
        if (currentAudioRef) {
          const handlePlaying = () => {
            console.log("Audio has started playing");
            setIsLoading(false); // Audio has started playing
          };
    
          const handleWaiting = () => {
            console.log("Audio is buffering");
            setIsLoading(true); // Audio is buffering
          };
    
          currentAudioRef.addEventListener('playing', handlePlaying);
          currentAudioRef.addEventListener('waiting', handleWaiting);
          currentAudioRef.addEventListener("seeking", handleWaiting);
          currentAudioRef.addEventListener('pause', () => {
            console.log("Audio has stopped playing");
            setIsLoading(false); // Audio has stopped playing
          });
          currentAudioRef.addEventListener('stalled', () => {
            console.log("Audio has stopped buffering");
            setIsLoading(true); // Audio has stopped buffering
          });
    
          // Cleanup on component unmount or when audioRef changes
          return () => {
            currentAudioRef.removeEventListener('playing', handlePlaying);
            currentAudioRef.removeEventListener('waiting', handleWaiting);
            currentAudioRef.removeEventListener('seeking', handleWaiting);
            currentAudioRef.removeEventListener('pause', handleWaiting);
            currentAudioRef.removeEventListener('stalled', handleWaiting);
            // currentAudioRef.removeEventListener('seeking', handleWaiting);
          };
        }
      }, [audioRef, setIsLoading]);

    useEffect(() => {
        setListeningHistory(prevHistory => {
            // Prevent duplicates, add to the beginning
            const uniqueHistory = prevHistory.filter(t => t.id !== currentTrack.id);
            // Limit history to 10 items
            const limitedHistory = [currentTrack, ...uniqueHistory].slice(0, 10);
            return limitedHistory;
        });
    }, [currentTrack, setListeningHistory]);

    navigator.mediaSession.setActionHandler('play', () =>{
        return audioRef.current?.play();
    })

    navigator.mediaSession.setActionHandler('pause', () =>{
        return audioRef.current?.pause();
    })

    navigator.mediaSession.setActionHandler('nexttrack', () =>{
        return handleNext();
    })

    navigator.mediaSession.setActionHandler('previoustrack', () =>{
        return handlePrevious();
    })

    navigator.mediaSession.setActionHandler('seekforward', () =>{
        return skipForward();
    })

    navigator.mediaSession.setActionHandler('seekbackward', () =>{
        return skipBackward();
    })

    

    return (
        <div className="flex gap-4 items-center">
            <audio
                src={currentTrack.file}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            <button onClick={() => setIsShuffle((prev) => !prev)}>
                <BsShuffle
                    size={20}
                    className={isShuffle ? 'text-[#2dcece]' : 'text-[#99938f]'}
                />
            </button>
            <button onClick={handlePrevious}>
                <BsSkipStartFill size={20} color="#2dcece" />
            </button>
            <button onClick={skipBackward}>
                <BsFillRewindFill size={20} color="#2dcece" />
            </button>

            <button
                onClick={() => {setIsPlaying((prev) => !prev); isPlaying ? null : setIsPlaying(true)} }
                className="w-14 h-14 rounded-full bg-[#2dcece] flex items-center justify-center shadow-md"
            >
                {isLoading ? (
                    <Spinner color="white" className="text-[#99938f]"/>
                ) : isPlaying ? (
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
            <button onClick={() => setIsRepeat((prev) => !prev)}>
                <BsRepeat
                    size={20}
                    className={isRepeat ? 'text-[#2dcece]' : 'text-[#99938f]'}
                />
            </button>

        </div>
    )
}