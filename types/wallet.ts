export interface Wallet {
  username: string;
  handle: string;
  lnAddress: string;
  lnbitUser: string;
  endpoint: string;
  walletUrl: string;
  lndhub: {
    login: string;
    password: string;
    url: string;
  };
}
