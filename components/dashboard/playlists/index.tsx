import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { CiMicrophoneOn } from "react-icons/ci";
import { MdMicNone } from "react-icons/md";
export interface PlaylistData {
    id: string;
    user_id: string;
    name: string;
    description: string;
    image: string;
};

const playlists: PlaylistData[] = [
    {
        "id": "93a2ec63-141b-4b97-8395-684b0b13fe2a",
        "user_id": "55",
        "name": "Top 100",
        "description": "top 100 hot songs",
        "image": "http://185.158.107.161:3000/uploads/others/1723832315163-7ucky-pg-22-23-293x300.jpg"
    },
    {
        "id": "f758a197-3673-4890-8304-2e511f9c7662",
        "user_id": "55",
        "name": "Afrobeats Today",
        "description": "Afrobeats Today",
        "image": "http://185.158.107.161:3000/uploads/others/1725019402245-afrobeats1.png"
    }
];

interface PlaylistProps {
    playlistId?: string;
}

export const Playlists: NextPage<PlaylistProps> = ({ playlistId }) => {
    const router = useRouter();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        // setSearchQuery(newQuery);
        // router.push(`/dashboard/albums/${newQuery}`, undefined, { shallow: true });
    };

    return (
        <div className="h-full lg:px-6 mt-9">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[910rem] mx-auto w-full">
                <div className="h-full p-5 bg-white/5 rounded-tr-3xl rounded-br-3xl shadow shadow-inner backdrop-blur-[100px] flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-9 px-2 bg-[#0c0c0c]/10 rounded-[10px] border border-[#7e8389] shadow-inner flex items-center">
                            <div className="w-4 h-4 mr-1">
                                <MdMicNone onClick={() => {}} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search in Albums"
                                className="w-full bg-transparent text-white/75 text-sm font-medium focus:outline-none"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {playlists.map((playlist) => (
                            <Link
                                key={playlist.id}
                                className="flex flex-col items-start gap-2 hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                                href={`/dashboard/playlists/${playlist.id}`}
                            >
                                <img
                                    className="w-[194px] h-[194px] rounded-lg object-cover"
                                    src={playlist.image}
                                    alt={playlist.name}
                                />
                                <div className="text-[#f9f9f9] text-sm font-semibold font-roboto capitalize m-1">
                                    {playlist.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
