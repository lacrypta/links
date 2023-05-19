import { Block as IBlock } from "../../types/block";

interface BlockProps {
  data: IBlock;
}

const Block = ({ data }: BlockProps) => {
  data.type = data.type ? data.type : "link"; // Default
  const BlockComponent = require(`./${data.type}`).default;
  return (
    <div className='m-1 mx-6'>
      <BlockComponent data={data} />
    </div>
  );
};

export default Block;
