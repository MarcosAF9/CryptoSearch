import Image from "next/image";
import React from "react";

const Coins = ({ coins }) => {
  return (
    <>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
        {coins.map((coin) => (
          <li key={coin.uuid} className="flex flex-col">
            <Image
              src={coin.iconUrl}
              alt={`${coin.name} icon`}
              height={70}
              width={70}
              priority
            />
            <h3>{coin.name}</h3>
            <p>{coin.symbol}</p>
            <p>{Number(coin.price).toFixed(6)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Coins;
