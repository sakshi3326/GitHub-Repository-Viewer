// src/redux/reducers.js
const initialState = {
  repositories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
