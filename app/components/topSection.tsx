import React from "react";

export const TopSection = ({ data }: any) => {
  return (
    <div className="relative flex justify-center">
      <div>
        <span className="text-5xl text-white font-bold">
          BTC <span className="text-sky-400">PRICE</span> $
          {data[0].current_price}
        </span>
      </div>
    </div>
  );
};
