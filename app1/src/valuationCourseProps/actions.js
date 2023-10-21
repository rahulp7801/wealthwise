export const setApiData = (data) => ({
  type: 'SET_API_DATA',
  payload: data,
});
export const updateStocks = (stock1, stock2) => ({
  type: 'UPDATE_STOCKS',
  payload: { stock1, stock2 },
});
