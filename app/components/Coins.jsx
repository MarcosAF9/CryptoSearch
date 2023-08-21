import Image from "next/image";
import React from "react";

const Coins = ({ coins }) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-[1260px] gap-10">
        {coins.map((coin) => (
          <li
            key={coin.uuid}
            className="mb-6 py-3 flex flex-col items-center rounded-lg shadow-lg"
          >
            <Image
              src={coin.iconUrl}
              alt={`${coin.name} icon`}
              height={70}
              width={70}
              priority
              className="h-16"
            />
            <h3>{coin.name}</h3>
            <p>{coin.symbol}</p>
            <p>${Number(coin.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Coins;
