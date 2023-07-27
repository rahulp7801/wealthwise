//Data from stockSelect to stockSearch
const initialState = {
  apiData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_DATA':
      return { ...state, apiData: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
