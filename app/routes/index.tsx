import type { LinksFunction } from "remix";
import Navbar from "~/components/navigation";

import { Link, useLoaderData } from "remix";
import { getCoinGeckoBTCData } from "~/utils/coinGeckoApi";
import { TopSection } from "~/components/topSection";
import { Table } from "~/components/table";

export const loader = async () => {
  /* This is where we do logic for API calls to fetch data */
  const btcData = await getCoinGeckoBTCData();

  return { btcData };
};

export default function Index() {
  const { btcData } = useLoaderData<any>();

  return (
    <>
      <Navbar />
      <TopSection data={btcData} />
      <Table />
    </>
  );
}
