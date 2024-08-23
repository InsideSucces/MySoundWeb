import type { NextPage } from "next";


interface PlaylistData {
    id: number;
    name: string;
    imageUrl: string;
};

const playlists: PlaylistData[] = [
    {
        id: 1,
        name: "Back in Time",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 2,
        name: "Cool Vibes",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 3,
        name: "Afrobeats 2024",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 4,
        name: "Party Time",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 5,
        name: "Global Mix",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 6,
        name: "Hot New Releases",
        imageUrl:
            "https://via.placeholder.com/87x87/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 7,
        name: "We Love R&B",
        imageUrl:
            "https://via.placeholder.com/87x87/000000/FFFFFF/?text=Giddy1Billion",
    },
    {
        id: 8,
        name: "Gym Beats",
        imageUrl: "https://via.placeholder.com/174x174/000000/FFFFFF/?text=Giddy1Billion",
    },
];

export const Playlists: NextPage = () => {
    return (
        <div className="h-full lg:px-6 mt-9">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[910rem] mx-auto w-full">
                <div className="h-full p-5 bg-white/5 rounded-tr-3xl rounded-br-3xl shadow shadow-inner backdrop-blur-[100px] flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-9 px-2 bg-[#0c0c0c]/10 rounded-[10px] shadow-inner flex items-center">
                            <div className="w-4 h-4 mr-1" />
                            <input
                                type="text"
                                placeholder="Search in Albums"
                                className="w-full bg-transparent text-white/75 text-sm font-medium focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {playlists.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="flex flex-col items-center gap-2"
                            >
                                <img
                                    className="w-[194px] h-[194px] rounded-lg object-cover"
                                    src={playlist.imageUrl}
                                    alt={playlist.name}
                                />
                                <div className="text-[#f9f9f9] text-sm font-semibold font-roboto capitalize mt-3">
                                    {playlist.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
