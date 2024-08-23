import type { NextPage } from "next";
import { Charts } from "./charts";
import { ListeningHistory } from "./listening_history";
import { MusicPlayer } from "./music_player";

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







  // Add more song data as needed
];

export const Home: NextPage = () => {
  return (
    <div className="h-full px-3 lg:px-6">
      <div className="">
        <Charts />
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-2/3 items-start">
          <ListeningHistory songData={songData} />
        </div>
        <div className="md:w-1/3 w-full flex justify-center mt-[90px] md:ml-[190px]">
          <MusicPlayer song={{}} />
        </div>
      </div>
    </div>
  );
};