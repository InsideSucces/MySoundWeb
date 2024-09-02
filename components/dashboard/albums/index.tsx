import { Input } from "@nextui-org/input";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

export interface Album {
  id: string;
  artist_id: string;
  name: string;
  description: string;
  image: string;
  price_ngn: number;
  price_usd: number;
}

const albums: Album[] = [
  {
    "id": "c79445f4-2116-47f2-98e4-6bda1c8190ff",
    "artist_id": "2",
    "name": "Bagge",
    "description": "Bagge's album",
    "image": "http://185.158.107.161:3000/uploads/album/1724953729454-bagge.jpeg",
    "price_ngn": 20000,
    "price_usd": 9.99
  },
  {
    "id": "f4bba625-4ef9-4c51-87b1-868eb6843aea",
    "artist_id": "1",
    "name": "7ucky",
    "description": "7ucky's album",
    "image": "http://185.158.107.161:3000/uploads/album/1724953460180-7ucky-pg-22-23-293x300.jpg",
    "price_ngn": 20000,
    "price_usd": 9.99
  }
];

export const Albums: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const filteredAlbums = albums.filter(album =>
    album.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <main className="flex-1 overflow-y-auto">
      <header className="bg-background p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <Input className="w-full max-w-sm" placeholder="Search albums..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </header>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredAlbums.map((album) => (
          <Link href={`/dashboard/albums/${album.id}`} key={album.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:bg-accent transition-colors">
            <img src={album.image} alt={`${album.name} cover`} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="font-semibold truncate">{album.name}</h2>
              <p className="text-sm text-muted-foreground truncate">By {album.name}</p>
              <p className="text-sm font-bold mt-2">${album.price_usd.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
