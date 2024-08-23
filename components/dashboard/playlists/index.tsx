import type { NextPage } from "next";

export const Playlists: NextPage = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[910rem] mx-auto w-full">
                <div className="h-[562px] pl-5 pr-[30px] pt-5 pb-12 bg-white/5 rounded-tr-3xl rounded-br-3xl shadow shadow-inner backdrop-blur-[100px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-[18px] flex">
                        <div className="w-full h-9 pl-2 pr-2.5 bg-[#0c0c0c]/10 rounded-[10px] shadow-inner justify-start items-center inline-flex">
                            <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-[4.16px] pt-0.5 pb-[2.98px] justify-center items-center flex" />
                                <div className="justify-center items-center gap-1.5 flex">
                                    <div className="text-center text-white/75 text-sm font-medium font-roboto">Search in Albums</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Back in Time</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Cool Vibes</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Afrobeats 2024</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Party Time</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Global Mix</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <div className="w-[174px] h-[174px] relative">
                                    <img className="w-[87px] h-[87px] left-0 top-0 absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-[87px] top-0 absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-0 top-[87px] absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-[87px] top-[87px] absolute" src="https://via.placeholder.com/87x87" />
                                </div>
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Hot New Releases</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <div className="w-[174px] h-[174px] relative">
                                    <img className="w-[87px] h-[87px] left-0 top-0 absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-[87px] top-0 absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-0 top-[87px] absolute" src="https://via.placeholder.com/87x87" />
                                    <img className="w-[87px] h-[87px] left-[87px] top-[87px] absolute" src="https://via.placeholder.com/87x87" />
                                </div>
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">We Love R&B</div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-2 inline-flex">
                                <img className="w-[174px] h-[174px] rounded-lg" src="https://via.placeholder.com/174x174" />
                                <div className="flex-col justify-center items-start gap-0.5 flex">
                                    <div className="text-center text-[#f9f9f9] text-sm font-medium font-roboto capitalize">Gym Beats</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
