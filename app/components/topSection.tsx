import React from "react";

export const TopSection = ({ data }: any) => {
  return (
    <div>
      <div>
        <span>BTC PRICE ${data[0].current_price}</span>
      </div>
    </div>
  );
};
