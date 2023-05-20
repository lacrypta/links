import { Block as IBlock } from "../../types/block";

interface BlockProps {
  data: IBlock;
}

const Block = ({ data }: BlockProps) => {
  data.type = data.type ? data.type : "link"; // Default
  let BlockComponent;
  try {
    BlockComponent = require(`./${data.type}`).default;
  } catch (e) {
    console.error(`Block type ${data.type} not found`);
    return (
      <div className='text-center'>
        Block type <b>{data.type}</b> not found
      </div>
    );
  }

  return (
    <div className='m-1 mx-6'>
      <BlockComponent data={data} />
    </div>
  );
};

export default Block;
