"use client";
import { useEffect, useState } from "react";
import Coins from "./components/Coins";
import SearchCoins from "./components/SearchCoins";

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch("api/coins");
      const coins = await res.json();
      setCoins(coins.data.coins);
    };
    fetchCoins();
  }, []);

  return (
    <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">CryptoSearch</h1>
      <SearchCoins getSearchResults={(results) => setCoins(results)} />
      <Coins coins={coins} />
    </div>
  );
}
