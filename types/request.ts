import { Wallet } from "./wallet";

export interface ResponseDataType {
  success: boolean;
  message?: string;
  data?: any;
}

export interface UserData {
  id: string;
  name: string | null;
  bio: string | null;
  email: string | null;
  github: string | null;
  twitter: string | null;
  nostr: string | null;
  npub: string | null;
  discord: string | null;
  lud06: string | null;
  relayIDs: string[];
  otSignIn: string | null;
  nextOtToken: string | null;
}

export interface CreatedUserResponse extends ResponseDataType {
  data?: UserData;
}

export interface CreatedWalletResponse extends ResponseDataType {
  data?: Wallet & { nextOtToken: string };
}
