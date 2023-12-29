// src/redux/actions.js
export const setRepositories = (repositories) => ({
  type: 'SET_REPOSITORIES',
  payload: repositories,
});

export const fetchRepositories = (username) => async (dispatch) => {
  try {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('User not found or repositories not available');
    }

    dispatch(setRepositories(data));
  } catch (error) {
    console.error(error.message);
    // You may dispatch an action to handle errors in the state
  }
};
