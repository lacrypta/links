import Image from "next/image";
import SatSvg from "../../../public/images/wallet/sat.svg";
import { useWallet } from "../../../contexts/Wallet";
import { useCallback, useEffect, useState } from "react";

interface IBalanceProps {
  data: {
    provider: string;
    label: string;
    currency: string;
    url?: string;
  };
}

const Balance = ({ data: { currency, label } }: IBalanceProps) => {
  const [amount, setAmount] = useState(0);
  const { getBalance } = useWallet();

  const refreshBalance = useCallback(async () => {
    setAmount(await getBalance());
  }, [getBalance]);

  useEffect(() => {
    refreshBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=' w-full text-center flex flex-col'>
      <div className='text-xs text-gray-400'>{label}</div>
      <div className='flex flex-row justify-center space-x-1 items-center'>
        <div className='text-sm'>Activity</div>
      </div>
    </div>
  );
};

export default Balance;
