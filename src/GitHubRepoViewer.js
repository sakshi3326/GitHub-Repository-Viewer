
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from './redux/actions';
import './GitHubRepoViewer.css'; 

const GitHubRepoViewer = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repositories);
  const [username, setUsername] = useState('');

  const handleFetchRepositories = async () => {
    dispatch(await fetchRepositories(username));
  };

  return (
    <div className="github-repo-viewer">
      <h1>GitHub Repo Viewer</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleFetchRepositories}>Get Repositories</button>
      </div>
      {repositories.length > 0 && (
        <div>
          <h2>Repositories: Click to get code</h2>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitHubRepoViewer;
