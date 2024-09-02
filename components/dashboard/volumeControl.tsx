import { useAudioPlayerContext } from "@/contexts/audio-player-context";
import { FC, useState } from "react";
import { Slider } from '@nextui-org/react';
import { BiVolumeMute, BiVolumeFull } from "react-icons/bi";

export const VolumeControl: FC = () => {
    const { volume, setVolume, isMuted, setIsMuted } = useAudioPlayerContext();
    const handleVolumeChange = (newVolume: any) => {
        setVolume(newVolume);
        setIsMuted(false); // Unmute if volume is changed
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // If muting, store the current volume so we can restore it on unmute
        if (!isMuted) {
            setPreviousVolume(volume);
            setVolume(0); 
        } else {
            setVolume(previousVolume); 
        }
    };

    const [previousVolume, setPreviousVolume] = useState(100); // Store the volume before muting

    return (
        <div className="flex items-center gap-2 w-full">
            <button onClick={toggleMute} className="text-zinc-400 hover:text-[#2dcece] transform transition duration-300 ease-in-out hover:scale-125">
                {isMuted ? <BiVolumeMute size={20} /> : <BiVolumeFull size={20} />}
            </button>
            <Slider
                size="sm"
                maxValue={100}
                minValue={0}
                className="w-[109px] gap-9"
                color="foreground"
                step={1}
                defaultValue={volume}
                value={volume}
                hideThumb={true}
                onChange={handleVolumeChange}
                showTooltip={true}
                classNames={{
                    base: "w-[109px] gap-9",
                    filler: "before:bg-gradient-to-r before:from-[#2dcece] before:to-[#2dcece] bg-gradient-to-r from-[#2dcece] to-[#2dcece] dark:from-[#2dcece] dark:[#2dcece]",
                    value: "font-bold text-default-500 text-small",
                    step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
                }}
                renderThumb={(props) => (
                    <div
                        {...props}
                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                    >
                        <span className="transition-transform bg-gradient-to-br shadow-small from-[#2dcece] to-[#2dcece] rounded-full w-2 h-2 block group-data-[dragging=true]:scale-80" />
                    </div>
                )}
                tooltipProps={{
                    offset: 10,
                    placement: "top",
                    classNames: {
                        base: [
                            // arrow color
                            "before:bg-gradient-to-r before:from-[#2dcece] before:to-[#2dcece]",
                        ],
                        content: [
                            "py-2 shadow-xl",
                            "text-white bg-gradient-to-r from-[#2dcece] to-[#2dcece]",
                        ],
                    },
                }}
                // className="w-[90]"
            // ... other NextUI Slider props for customization
            />
         
        </div>
    )
}