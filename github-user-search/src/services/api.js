import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Example: fetch a user
export const fetchUser = (username) => {
  return githubApi.get(`/users/${username}`);
};
