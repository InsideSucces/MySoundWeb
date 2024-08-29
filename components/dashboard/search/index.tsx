import { Input } from "@nextui-org/input";
import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Link from "next/link";

interface SearchProps {
  search?: string;
}

export const Search: NextPage<SearchProps> = ({ search }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    router.push(`/dashboard/search/${newQuery}`, undefined, { shallow: true });
  };

  const exploreCategories = [
    { id: 1, name: "Hip-Hop", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Electronic", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Rock", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Pop", image: "https://via.placeholder.com/150" },
    // ... more categories
  ];

  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        // ... other styling props
        />
      </div>

      {/* Explore Grid Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-4 px-4 lg:px-0">Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-0">
          {exploreCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/dashboard/search/${category.name.toLowerCase()}`} // Update with your actual search route
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-32 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <h3 className="text-white text-lg font-semibold text-center truncate">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
