import { useState } from 'react';
import { fetchAdvancedUsers, fetchUserData } from '../services/githubService';


const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="grid gap-4">
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-yellow-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h3 className="text-xl font-semibold">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
