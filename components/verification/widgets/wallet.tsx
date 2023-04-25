import { UserData } from "../../../types/request";

interface WalletProps {
  user: UserData;
}

export const Wallet = ({ user }: WalletProps) => {
  return (
    <div>
      <div>Datos de la Wallet</div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default Wallet;
