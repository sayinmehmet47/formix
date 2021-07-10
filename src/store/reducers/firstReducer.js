const initialState = {
  value: 5,
  name: 'Mehmet',
  location: 'Athens',
};

export const firstReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, cars: 'fdfd' };
    case 'ADD_ONE':
      return { ...state, value: state.value + 1 };
    case 'DECREASE_ONE':
      return { ...state, value: state.value - 1 };
    case 'EDIT_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
