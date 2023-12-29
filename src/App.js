// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import GitHubRepoViewer from './GitHubRepoViewer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <main>
          <GitHubRepoViewer />
        </main>
      </div>
    </Provider>
  );
}

export default App;
