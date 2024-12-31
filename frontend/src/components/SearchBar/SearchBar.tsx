import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleClear = () => {
    setSearchTerm('');
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
          className="max-w-2xl px-8 py-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
         {searchTerm && (
          <IoMdClose
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            size={20}
            color="#888"
          />
        )}
      </div>
    </div>
  );
};
