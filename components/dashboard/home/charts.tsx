import { truncateString } from '@/helpers';
import React, { FC, useRef, useState } from 'react';

type Chart = {
    id: string;
    user_id: string;
    name: string;
    description: string;
    image: string;
    type: string;
  };
  

type ChartProps = {
    charts: Chart[];
}

export const Charts: FC<ChartProps> = ({ charts }) => {
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

        <div className="mx-auto max-w-full justify-start items-center inline-flex overflow-x-auto">
            <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex w-full">
                <div
                    ref={chartContainerRef}
                    className="flex flex-nowrap gap-6 py-8 overflow-x-auto" // Key classes for scrolling
                >
                    {charts.map((chart, index) => (
                        <div key={`${index}-${chart.id}`}>
                            <div className="px-4 pt-4 pb-3 rounded-2xl border border-[#2dcece] flex-col justify-start items-center gap-3 inline-flex" onClick={()=> {}}>
                                <div className="w-36 h-[121px] justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
                                        <img className="w-32 h-[121px] object-cover" src={chart.image ?? "https://via.placeholder.com/128x121"} />
                                    </div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="w-[120px] text-white text-base font-medium font-semibold font-roboto tracking-tight truncate">{chart.name ?? "AI Music Genre"}</div>
                                    <div className="w-[105px] text-[#99938f] text-sm font-medium font-roboto tracking-tight truncate">{ chart.description ?? "Top 50"}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};