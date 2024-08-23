import React, { FC } from "react";
export const ListeningHistory: FC<{ songData: any[] }> = ({
    songData,
}) => {
    return (
        <div className="w-full max-w-[770px] rounded-3xl p-6">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-white text-xl font-medium font-roboto mb-4">
                    Listening History
                </h2>
                <button className="text-[#99938f] text-sm font-medium hover:underline">
                    See All
                </button>
            </div>

            <div className="max-h-[500px] overflow-y-auto">
                <ul className="space-y-4">
                    {songData.map((song, index) => (
                        <li key={`${index}-${song.id}`} className="mb-4">
                            <div className="w-full h-[116px] relative flex items-center">
                                <div className="w-[84px] h-[84px] rounded-2xl shadow justify-center items-center flex mr-6">
                                    <img
                                        className="w-[84px] h-[84px] rounded-2xl"
                                        src={song.imageUrl}
                                        alt={song.title}
                                    />
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <div className="text-white text-base font-medium font-['Roboto'] leading-tight tracking-tight">
                                        {song.title}
                                    </div>
                                    <div className="text-[#99938f] text-sm font-medium font-['Roboto'] leading-[16.80px] tracking-tight">
                                        {song.artist}
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 ml-auto">
                                    {/* ... (Your existing code for the buttons) */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};