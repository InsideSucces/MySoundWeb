import type { NextPage } from "next";
import { useEffect, useState } from "react";

interface SearchProps {
  search?: string;
}

export const Search: NextPage<SearchProps> = ({search}) => {
  const [query, setSearchQuery] = useState<string>()

  useEffect(() => {
    setSearchQuery(search)
  }, [search])

  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        {query ? (
          <p className="text-center font-bold text-[40px]">Searching for {query}...</p>
        ): (
          <p className="text-center font-bold text-[40px]">Search Page</p>
        )}
      </div>
    </div>
  );
}
