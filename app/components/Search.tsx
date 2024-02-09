"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface inputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: inputProps) => {
  return (
    <>
      <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
        <input
          type="text"
          placeholder="Enter City Name"
          className="w-full border-b-2 placeholder-white outline-none text-white bg-transparent"
          onKeyDown={handleSearch}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="ml-[-25px] text-white cursor-pointer">
          <AiOutlineSearch />
        </div>
      </form>
    </>
  );
};

export default Input;
