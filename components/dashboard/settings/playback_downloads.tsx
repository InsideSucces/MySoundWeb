import { FC, useState } from "react"

type PlaybackAndDownloadsProps = {

}

export const PlaybackAndDownloads: FC = () => {
    const [audioQuality, setAudioQuality] = useState(false);
    const [automix, setAutomix] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const [explicitContent, setExplicitContent] = useState(false);

    const handleAudioQualityChange = () => {
        setAudioQuality(!audioQuality);
    };
    return (
        <div className="w-full md:w-full p-6">
            <div className="flex flex-col gap-6 -mx-6">
                <div className="flex justify-between items-center px-6">
                    <div className="flex flex-col gap-1.5 gap-1.5">
                        <h2 className="text-white text-2xl font-medium font-urbanist capitalize">
                            Audio Quality
                        </h2>
                        <p className="text-[#7e8389] text-xl font-medium font-urbanist leading-tight break-words max-w-[480px]">
                            Sets your audio quality to low (equivalent to 24kbit/s) to save data
                        </p>
                    </div>
                    <div className="mx-[1rem] md:mx-[8rem]"></div>
                    <label
                        htmlFor="explicitContentToggle"
                        className="relative inline-block w-14 h-8 rounded-full transition duration-200 ease-in-out"
                    >
                        <input
                            type="checkbox"
                            id="explicitContentToggle"
                            className="opacity-0 w-0 h-0 peer"
                            checked={explicitContent}
                            onChange={() => setAudioQuality(!audioQuality)}
                        />
                        <span className="absolute top-0 left-0 w-8 h-8 rounded-full bg-black shadow-md transform transition duration-200 ease-in-out peer-checked:translate-x-6"></span>
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-neutral-300 peer-checked:bg-gradient-to-tl peer-checked:from-neutral-300 peer-checked:to-[#1c1f22] transition duration-200 ease-in-out"></span>
                    </label>
                    {/* <label
                        htmlFor="audioQualityToggle" // Connect label to the checkbox
                        // className="relative w-11 h-7 bg-gray-200 rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
                    >
                        <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="audioQualityToggle"
                            //   className="hidden" // Hide the default checkbox
                            checked={audioQuality}
                            onChange={() => setAudioQuality(!audioQuality)}
                        />
                    </label> */}
                </div>
            </div>
        </div>
    )
}