import React from 'react'

export const Green = ({changer}) => {
  return (
    <>
      <div onClick={changer} className="card__wrapper__green">
        <h1 className="card__text">Love</h1>
      </div>
    </>
  );
}
