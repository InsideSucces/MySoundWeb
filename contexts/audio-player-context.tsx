import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    RefObject,
    useRef,
    useEffect,
} from 'react';

import { tracks } from '@/data/tracks';

export interface Track {
    id: string;
    title: string;
    artist_id: number;
    album_id: null;
    duration: null;
    file: string;
    release_date: null;
    cover_image: string;
}

interface AudioPlayerContextType {
    currentTrack: Track;
    setCurrentTrack: Dispatch<SetStateAction<Track>>;
    timeProgress: number;
    setTimeProgress: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
    setTrackIndex: Dispatch<SetStateAction<number>>;
    audioRef: RefObject<HTMLAudioElement>;
    progressBarRef: RefObject<HTMLInputElement>;
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    listeningHistory: Track[];
    updateListeningHistory: (track: Track) => void 
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'audio-player.listeningHistory';

export const AudioPlayerProvider = ({ children }: { children: ReactNode; }) => {
    const [trackIndex, setTrackIndex] = useState<number>(0);

    const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [listeningHistory, setListeningHistory] = useState<Track[]>(
        typeof window !== 'undefined' // Check if running on the client-side
            ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
            : []
    );

    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Update local storage whenever listeningHistory changes
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listeningHistory));
    }, [listeningHistory]);

    const updateListeningHistory = (track: Track) => {
        setListeningHistory(prevHistory => {
            // Prevent duplicates, add to the beginning
            const uniqueHistory = prevHistory.filter(t => t.id !== track.id);
            // Limit history to 10 items
            const limitedHistory = [track, ...uniqueHistory].slice(0, 10); 

            return limitedHistory;
        });
    };

    const contextValue = {
        currentTrack,
        setCurrentTrack,
        updateListeningHistory,
        audioRef,
        progressBarRef,
        timeProgress,
        setTimeProgress,
        duration,
        setDuration,
        setTrackIndex,
        isPlaying,
        setIsPlaying,
        listeningHistory,
    };
    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {children}
        </AudioPlayerContext.Provider>
    );
};


export const useAudioPlayerContext = (): AudioPlayerContextType => {
    const context = useContext(AudioPlayerContext);
    if (context === undefined) {
        throw new Error(
            'useAudioPlayerContext must be used within an AudioPlayerProvider'
        );
    }
    return context;
};