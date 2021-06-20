

const initialState = {
  value: 5
};


export const firstReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return {...state,cars:"fdfd"};

    default:
      return state;
  }
};
