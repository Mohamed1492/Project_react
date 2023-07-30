import React from 'react';
import { Link } from 'react-router-dom';

function ChoiceButton({ id, name, lien, handleClick }) {
  return (
    <>
      <Link to='/LevelChoice'>
        <button className='btn' value={id} onClick={() => handleClick(id)}>
          <img src={lien} alt='Button Icon' />
          <span>{name}</span>
        </button>
      </Link>
    </>
  );
}

export default ChoiceButton;