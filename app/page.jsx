"use client";
import { useEffect, useState } from "react";
import Coins from "./components/Coins";
import SearchCoins from "./components/SearchCoins";
import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
  };

  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-center relative">
      <Link href={"/"} onClick={() => fetchData()}>
        <h1 className="font-bold text-6xl mt-14">CryptoSearch</h1>
      </Link>
      <SearchCoins getSearchResults={(results) => setCoins(results)} />
      <Coins coins={coins} />
      <button
        className={`${
          showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        } text-5xl fixed bottom-4 right-4 transition-transform duration-300`}
        onClick={scrollToTopButton}
      >
        <BsFillArrowUpCircleFill />
      </button>
    </div>
  );
}
