import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOne, decreaseOne, editName } from '../../store/actions/actions';
import ReactPlayer from 'react-player';

export const Redux = () => {
  const value = useSelector((state) => state.first.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(value);
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(addOne())}>Increase</button>
      <button onClick={() => dispatch(decreaseOne())}>Decrease</button>
      <button onClick={() => dispatch(editName('ali sayar'))}>Edit Name</button>
      <button onClick={handleClick}>CLick</button>
      <ReactPlayer url="https://streamable.com/fu8iyk" controls={true} />
    </div>
  );
};
