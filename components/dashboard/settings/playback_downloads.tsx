import { FC, useState } from "react"

type PlaybackAndDownloadsProps = {
    title: string;
    description: string;
    value?: boolean | string;
}

export const PlaybackAndDownloads: FC = () => {
    const [audioQuality, setAudioQuality] = useState(false);
    const [automix, setAutomix] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const [crossfade, setSetCrossfade] = useState("10s");
    const [explicitContent, setExplicitContent] = useState(false);

    const handleAudioQualityChange = () => {
        setAudioQuality(!audioQuality);
    };

    const handleAutomixChange = () => {
        setAutomix(!automix);
    };
    const handleAutoplayChange = () => {
        setAutoplay(!autoplay);
    };


    const handleExplicitContentChange = () => {
        setExplicitContent(!explicitContent);
    };

    const handleCrossfadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSetCrossfade(e.target.value);
    };

    const playbackAndDownloadsContents: PlaybackAndDownloadsProps[] = [
        {
            title: "Audio Quality",
            description: "Sets your audio quality to low (equivalent to 24kbit/s) to save data",
            value: audioQuality,
        },
        {
            title: "Automix",
            description: "Allow seamless transitions between songs on select playlists.",
            value: automix,
        },
        {
            title: "Crossfade",
            description: "Allows you to crossfade between songs transitions",
            value: crossfade,
        },
        {
            title: "Autoplay",
            description: "Enjoy nonstop listening - when your audio ends, we’ll play something similar.",
            value: autoplay,
        },

        {
            title: "Allow explicit content",
            description: "Turn on to play explicit content (explicit contents are labeled with “E” tag)",
            value: explicitContent,
        },
    ];


    const handlePlaybackChange = (title: string) => {
        switch (title) {
            case "Audio Quality":
                setAudioQuality(!audioQuality);
                break;
            case "Automix":
                setAutomix(!automix);
                break;
            case "Autoplay":
                setAutoplay(!autoplay);
                break;
            case "Allow explicit content":
                setExplicitContent(!explicitContent);
                break;
            default:
                break;
        }
    };
    return (
        <div className="w-full md:w-full p-6">
            <div className="flex flex-col gap-6 -mx-6">
                {playbackAndDownloadsContents.map((playback, index) => (
                    <div className="flex justify-between items-center py-3 px-6 hover:bg-[#252525] transition duration-300">
                        <div className="flex flex-col gap-1.5 gap-1.5">
                            <h2 className="text-white text-xl md:text-2xl font-semibold font-roboto capitalize">
                                {playback.title}
                            </h2>
                            <p className="text-[#7e8389] text-xl font-semibold font-roboto leading-tight break-words max-w-[480px]">
                                {playback.description}
                            </p>
                        </div>
                        <div className="mx-[1rem] md:mx-[14rem]"></div>
                        {typeof playback.value === "boolean" ? (
                            <label
                                htmlFor={`${playback.title}-toggle`}
                                className="relative inline-block w-11 h-7"
                            >
                                <input
                                    type="checkbox"
                                    id={`${playback.title}-toggle`}
                                    className="opacity-0 w-0 h-0 peer"
                                    checked={playback.value as boolean}
                                    onChange={() => handlePlaybackChange(playback.title)}
                                />
                                <div className="w-11 h-7 left-0 top-0 absolute rounded-3xl bg-gradient-to-r from-[#2dcece] to-[#2dcece]">
                                    <div className="w-11 h-7 left-[44.96px] top-[27.36px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2c3036] to-[#30333b] rounded-3xl" />
                                    <div className="w-11 h-7 left-[46px] top-[28px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2c3036] to-[#30333b] rounded-3xl blur-none" />
                                    <div className="w-10 h-6 left-[43.91px] top-[26.73px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2dcece] to-[#1c1f22] rounded-3xl" />
                                    <div className="w-10 h-6 left-[43.91px] top-[26.73px] absolute origin-top-left -rotate-180 bg-gradient-to-tl from-[#2f353a] to-[#1c1f22] rounded-3xl blur-sm" />
                                </div>
                                <span className="absolute left-[5px] top-[5px] w-4 h-4 bg-[#0d0d0d] rounded-full shadow shadow-inner peer-checked:translate-x-6 peer-checked:bg-white transition duration-200 ease-in-out"></span>
                            </label>
                        ) : (
                            <div className="w-fit px-3 py-2 rounded-lg border border-[#475057] flex items-center justify-center">
                                <span className="text-white text-lg md:text-2xl font-semibold font-roboto">{playback.value}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}