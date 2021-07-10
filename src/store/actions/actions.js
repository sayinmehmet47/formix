export const add = (input) => {
  console.log(input);
  return {
    type: 'ADD_INPUT',
  };
};

export const addOne = () => {
  return {
    type: 'ADD_ONE',
  };
};

export const decreaseOne = () => {
  return {
    type: 'DECREASE_ONE',
  };
};

export const editName = (input) => {
  return {
    type: 'EDIT_NAME',
    payload: input,
  };
};
