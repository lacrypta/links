import { capitalize } from "../../lib/utils";
import { Block as IBlock } from "../../types/block";

interface BlockProps {
  data: IBlock;
}

const Block = ({ data }: BlockProps) => {
  data.type = data.type ? data.type : "link"; // Default
  const BlockComponent = require(`./${capitalize(data.type)}`).default;
  return <BlockComponent data={data} />;
};

export default Block;
