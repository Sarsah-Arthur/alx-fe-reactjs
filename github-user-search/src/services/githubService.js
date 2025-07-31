import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
  
  return response.data.items;
};

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};
