import type { NextPage } from "next";
import { Charts } from "./charts";
import { ListeningHistory } from "./listening_history";
import { MusicPlayer } from "./music_player";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const songData = [
  {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  },

  {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  }, {
    id: 1,
    title: "Good Days",
    artist: "SZA",
    imageUrl: "https://via.placeholder.com/248x213",
    length: "3:21",
  },
];

const charts = [
  {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  },

  {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  }, {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  }, {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  }, {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  }, {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  }, {
    id: 1,
    title: "AI Music Genre",
    description: "Top 50",
    image: "https://via.placeholder.com/128x121",
  },
];

export const Home: NextPage = () => {
  return (
    <div className="h-full px-9 lg:px-6">
      <div className="py-[24.50px]">
        <div className="flex flex-row justify-between items-center inline-flex w-full ">
          <div className="text-white text-xl font-medium font-roboto leading-normal tracking-wide">
            Charts: Top 50
          </div>
          <div className='flex gap-x-2 items-center'>
          <button
            onClick={() => {}}
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => {}}
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        </div>
        <Charts charts={charts} />
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-2/3 items-start">
          <ListeningHistory />
        </div>
        <div className="md:w-1/3 w-full flex justify-center mt-[90px] mb-[90px] md:ml-[190px]">
          {/* <MusicPlayer song={{}} /> */}
        </div>
      </div>
    </div>
  );
};