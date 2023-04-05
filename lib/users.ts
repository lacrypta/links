export const getUsers = async () => {
  const url = process.env.USERS_API_URL || "";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
