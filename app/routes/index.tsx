import type { LinksFunction } from "remix";
import Navbar from "~/components/navigation";

import { Link, useLoaderData } from "remix";

export const loader = async () => {
  /* This is where we do logic for API calls to fetch data */
  const data: any = [
    {
      name: "LP Ranker",
      key: "lp",
    },
  ];

  console.log("THIS IS FROM THE CONSOLE", data);
  return data;
};

export const Table = () => {
  //This is where a table component will be built in the future
  const data = useLoaderData<any>();
  return (
    <div>
      <h1>This is where the data table will go</h1>
      <ul>
        {data.map((data: any) => (
          <li key={data.key}>
            <Link to={data.name}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Table />
    </>
  );
}
