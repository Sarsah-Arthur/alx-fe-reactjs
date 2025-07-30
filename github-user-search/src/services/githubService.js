import axios from 'axios';

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  
  return response.data.items;
};
