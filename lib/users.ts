import { ProviderType } from "../types/provider";
import {
  CreatedUserResponse,
  ResponseDataType,
  UserData,
} from "../types/request";

const API_ENPOINT =
  process.env.NEXT_PUBLIC_USERS_API_URL || "https://hodl.ar/api/users";

export const getUsers = async () => {
  return fetch(`${API_ENPOINT}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const createUser = async (
  username: string,
  provider: ProviderType
): Promise<UserData> => {
  const jsonData = JSON.stringify({
    username,
    provider,
  });

  // throw new Error("Not implemented");

  try {
    const response = await fetch(`${API_ENPOINT}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res: CreatedUserResponse = await response.json();

    if (!res.success) {
      throw new Error(res.message);
    }

    return res.data as UserData;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
