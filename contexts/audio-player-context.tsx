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
    artist_name: string;
}

interface AudioPlayerContextType {
    currentTrack: Track;
    setCurrentTrack: Dispatch<SetStateAction<Track>>;
    isLoading: boolean;
    timeProgress: number;
    setTimeProgress: Dispatch<SetStateAction<number>>;
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
    setTrackIndex: Dispatch<SetStateAction<number>>;
    audioRef: RefObject<HTMLAudioElement>;
    progressBarRef: RefObject<HTMLInputElement>;
    progressBarRefForDiv: RefObject<HTMLDivElement>;
    isPlaying: boolean;
    isShuffle: boolean;
    isRepeat: boolean;
    setIsRepeat: Dispatch<SetStateAction<boolean>>;
    setIsShuffle: Dispatch<SetStateAction<boolean>>;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    listeningHistory: Track[];
    setListeningHistory: Dispatch<SetStateAction<Track[]>>
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);
const LOCAL_STORAGE_LHISTORY_KEY = 'audio-player.listeningHistory';
const LOCAL_STORAGE_STATE_KEY = 'audio-player.state';
const LOCAL_STORAGE_SHUFFLE_KEY = 'audio-player.shuffullState';
const LOCAL_STORAGE_REPEAT_KEY = 'audio-player.repeatState';

export const AudioPlayerProvider = ({ children }: { children: ReactNode; }) => {

    const storedState = typeof window !== 'undefined'
        ? localStorage.getItem(LOCAL_STORAGE_STATE_KEY)
        : null;

    const initialState = storedState
        ? JSON.parse(storedState)
        : {
            trackIndex: 0,
            currentTrack: tracks[0], // Assuming tracks is available here
            timeProgress: 0,
            duration: 0,
            isPlaying: false,
        };
    const [trackIndex, setTrackIndex] = useState<number>(initialState.trackIndex);
    const [currentTrack, setCurrentTrack] = useState<Track>(initialState.currentTrack);
    const [timeProgress, setTimeProgress] = useState<number>(initialState.timeProgress);
    const [duration, setDuration] = useState<number>(initialState.duration);
    const [isPlaying, setIsPlaying] = useState<boolean>(initialState.isPlaying);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isShuffle, setIsShuffle] = useState<boolean>(
        typeof window !== 'undefined' // Check if running on the client-side
            ? localStorage.getItem(LOCAL_STORAGE_SHUFFLE_KEY) === 'true'
            : false
    );
    const [isRepeat, setIsRepeat] = useState<boolean>(
        typeof window !== 'undefined' // Check if running on the client-side
        ? localStorage.getItem(LOCAL_STORAGE_REPEAT_KEY) === 'true'
        : false
    );
    const [listeningHistory, setListeningHistory] = useState<Track[]>(
        typeof window !== 'undefined' // Check if running on the client-side
            ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_LHISTORY_KEY) || '[]')
            : []
    );

    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);
    const progressBarRefForDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Update local storage whenever listeningHistory changes
        localStorage.setItem(LOCAL_STORAGE_LHISTORY_KEY, JSON.stringify(listeningHistory));
    }, [listeningHistory]);

    useEffect(() => {
        // Update local storage whenever isShuffle changes
        localStorage.setItem(LOCAL_STORAGE_SHUFFLE_KEY, isShuffle.toString());
    }, [isShuffle]);

    useEffect(() => {
        // Update local storage whenever isRepeat changes
        localStorage.setItem(LOCAL_STORAGE_REPEAT_KEY, isRepeat.toString());
    }, [isRepeat]);

    // Load state from local storage on component mount
    useEffect(() => {
        const storedState = localStorage.getItem(LOCAL_STORAGE_STATE_KEY);
        if (storedState) {
            const parsedState = JSON.parse(storedState);
            setTrackIndex(parsedState.trackIndex);
            setCurrentTrack(parsedState.currentTrack);
            setTimeProgress(parsedState.timeProgress);
            setDuration(parsedState.duration);
            setIsPlaying(parsedState.isPlaying);
        }
    }, []);

    useEffect(() => {
        const stateToSave = {
            trackIndex,
            currentTrack,
            timeProgress,
            duration,
            isPlaying,
        };
        localStorage.setItem(LOCAL_STORAGE_STATE_KEY, JSON.stringify(stateToSave));
    }, [trackIndex, currentTrack, timeProgress, duration, isPlaying])


    const contextValue = {
        currentTrack,
        setCurrentTrack,
        setListeningHistory,
        audioRef,
        progressBarRef,
        isLoading,
        setIsLoading,
        progressBarRefForDiv,
        timeProgress,
        setTimeProgress,
        duration,
        setDuration,
        setTrackIndex,
        isShuffle,
        setIsShuffle,
        isPlaying,
        setIsPlaying,
        isRepeat, 
        setIsRepeat,
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