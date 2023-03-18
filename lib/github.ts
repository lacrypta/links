export async function getProfile(username: string) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(profile.message);
      }
      return profile;
    });
}
