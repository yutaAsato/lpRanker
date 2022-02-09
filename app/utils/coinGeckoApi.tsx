import React from "react";

async function getCoinGeckoBTCData() {
  const btcData = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
  ).then((res) => res.json());

  return btcData;
}

export { getCoinGeckoBTCData };
