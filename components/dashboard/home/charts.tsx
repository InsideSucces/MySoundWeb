import React, { useRef, useState } from 'react';

export const Charts = () => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleScroll = (direction: 'left' | 'right') => {
        const container = chartContainerRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // Adjust scroll amount as needed

            if (direction === 'left') {
                setScrollPosition(Math.max(scrollPosition - scrollAmount, 0));
            } else {
                setScrollPosition(
                    Math.min(
                        scrollPosition + scrollAmount,
                        container.scrollWidth - container.offsetWidth
                    )
                );
            }
        }
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(event.targetTouches[0].clientX);
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStart - touchEnd > 50) {
            handleScroll('right');
        }

        if (touchEnd - touchStart > 50) {
            handleScroll('left');
        }
    };
    return (
        <>
            <div className="mx-auto max-w-full pl-2 py-[24.50px] justify-start items-center inline-flex"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex w-full">
                    <div className="flex flex-row justify-between items-center inline-flex w-full">
                        <div className="text-white text-xl font-medium font-roboto leading-normal tracking-wide">Charts: Top 50</div>
                        <div className="w-[92px] h-11 relative">
                            <div className="w-[92px] h-11 left-0 top-0 absolute bg-[#2dcece]/25 rounded-[44px] blur-[150px]" />
                            <div className="w-[52px] h-4 left-[20px] top-[14px] absolute">
                                <button
                                    onClick={() => handleScroll('right')}
                                    className="w-4 h-4 right-2 top-1/2 transform -translate-y-1/2 absolute justify-center items-center inline-flex"
                                >
                                    {'>'}
                                </button>
                                <button
                                    onClick={() => handleScroll('left')}
                                    className="w-4 h-4 left-2 top-1/2 transform -translate-y-1/2 absolute justify-center items-center inline-flex"
                                >
                                    {'<'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto  flex flex-nowrap">
                        <div className="overflow-x-auto justify-center items-center gap-8 inline-flex">
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">Al Music Genre</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">Pop</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">Hip Hop</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">Rock</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">R&B Soul</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>

                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">R&B Soul</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">R&B Soul</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">R&B Soul</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px]" src="https://via.placeholder.com/128x121" />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">R&B Soul</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex">
                                <div className="w-32 h-[121px] justify-center items-center inline-flex">
                                    <img className="w-32 h-[121px] rounded-[15px]" src="https://via.placeholder.com/128x121" />
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-roboto tracking-tight">Country</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight">Top 50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};