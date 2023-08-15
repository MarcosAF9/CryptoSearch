"use client";
import { useRef, useState } from "react";

const SearchCoins = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/coins/search?query=${query}`);

    const coin = await res.json();

    getSearchResults(coin);

    setQuery("");

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div className="text-center my-20">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black border-2 border-black rounded-full px-3 py-2"
          ref={inputRef}
        />
        <button
          type="submit"
          className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60"
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
};

export default SearchCoins;
