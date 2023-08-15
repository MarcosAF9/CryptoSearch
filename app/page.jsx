"use client";
import { useEffect, useState } from "react";
import Coins from "./components/Coins";
import SearchCoins from "./components/SearchCoins";
import Link from "next/link";

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

  const fetchData = async () => {
    const res = await fetch("api/coins");
    const coins = await res.json();
    setCoins(coins.data.coins);
  }

  return (
    <div className="text-center">
      <Link href={"/"} onClick={() => fetchData()}>
      <h1 className="font-bold text-6xl mt-14">CryptoSearch</h1>
      </Link>
      <SearchCoins getSearchResults={(results) => setCoins(results)} />
      <Coins coins={coins} />
    </div>
  );
}
