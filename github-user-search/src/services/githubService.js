// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch single user details (used for username exact lookup and to enrich search results).
 * Calls: GET https://api.github.com/users/{username}
 */
export const fetchUserData = async (username) => {
  if (!username) throw new Error("username required");
  const res = await axios.get(`${BASE_URL}/users/${encodeURIComponent(username)}`);
  return res.data;
};

/**
 * Advanced search using GitHub Search API.
 * Calls: GET https://api.github.com/search/users?q={query}
 * Build query from username, location, minRepos.
 */
export const fetchAdvancedUserData = async (username = "", location = "", minRepos = "") => {
  const parts = [];
  if (username) parts.push(`${username} in:login`);
  if (location) parts.push(`location:${location}`);
  if (minRepos) parts.push(`repos:>=${minRepos}`);
  // if nothing provided, fallback to a general query (list users) - keep it safe
  const q = encodeURIComponent(parts.length ? parts.join(" ") : "type:user");
  const res = await axios.get(`${BASE_URL}/search/users?q=${q}&per_page=30`);
  return res.data; // { total_count, items: [...] }
};

