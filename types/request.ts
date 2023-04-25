export interface ResponseDataType {
  success: boolean;
  message?: string;
  data?: any;
}

export interface UserData {
  username: string;
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

export interface CreatedUserResponse extends ResponseDataType {
  data?: UserData;
}
