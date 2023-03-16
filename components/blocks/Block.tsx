import dynamic from "next/dynamic";
import { capitalize } from "../../lib/utils";
import { Block as IBlock } from "../../types/block";
import Link from "./Link";

interface BlockProps {
  data: IBlock;
}

const Block = ({ data }: BlockProps) => {
  data.type = data.type ? data.type : "link"; // Default

  const BlockComponent = require(`./${capitalize(data.type)}`).default;

  //   const BlockComponent = dynamic(() => import("./Link"), {
  //     // loading: () => <p>Loading...</p>,
  //   });

  return <BlockComponent data={data} />;
};

export default Block;
