// reducers/rootReducer.js

const initialState = {
  apiData: null,
  stock1: null,
  stock2: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_DATA':
      return { ...state, apiData: action.payload };
    case 'UPDATE_STOCKS':
      return {
        ...state,
        stock1: action.payload.stock1,
        stock2: action.payload.stock2,
      };
    default:
      return state;
  }
};

export default rootReducer;
