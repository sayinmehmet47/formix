
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/actions/actions.js';
import { Contact } from '../Contact/Contact.js';
import {Box} from './Styled.style.jsx';

export const Styled = () => {
   const dispatch = useDispatch()
  return (
    <Box>
      <h1>hello</h1>
      <button onClick={()=>dispatch(add())}>Click</button>
      <Contact/>

    </Box>
  );
};
