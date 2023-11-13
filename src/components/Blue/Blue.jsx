import React from 'react'

export const Blue = ({ coloring }) => {
  return (
    <>
      <div onClick={coloring} className="card__wrapper__blue">
        <h1 className="card__text">You</h1>
      </div>
    </>
  );
};

