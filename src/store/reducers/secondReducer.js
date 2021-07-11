import React, { useEffect } from 'react';
import db from '../../firebase';

const initialState = {
  school: 'SCH',
};

export const secondReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, cars: 'fdfd' };
    case 'ADD_ONE':
      return { ...state, value: state.value + 1 };

    default:
      return state;
  }
};
