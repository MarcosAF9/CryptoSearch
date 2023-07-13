import { NextResponse } from "next/server";

export async function fetchCoins() {
  const res = await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.KEY_URL}`,
        "X-RapidAPI-Host": `${process.env.HOST_URL}`,
      },
    }
  );

  const coins = await res.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  const filteredCoins = coins.data.coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  });

  return NextResponse.json(filteredCoins);
}
