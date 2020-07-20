const INITIAL_STATE = {
  array: [],
  showBasket: false
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;

    case "ADDTOBASKET":
      return {
        ...state,
        array: [...state.array, action.payload.new]
      };
    case "DELETEITEM":
      return {
        ...state,
        array: state.array.filter(({ id }) => id !== action.payload)
      };

    case "SHOWBASKET":
      return {
        ...state,
        showBasket: true
      };
    case "HIDEBASKET":
      return {
        ...state,
        showBasket: false
      };
  }
}

export default reducer;
