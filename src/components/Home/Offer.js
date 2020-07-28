import React from "react";

export default function Offer({cardData}) {
  return (
    <div className="offer-card">
      <div className="offer-card__icon">
        <img className="offer-card__img" src={`./img/${cardData.font}`} alt="card icon"/>
      </div>
      
      <span className="offer-card__title">{cardData.title}</span>
      <span className="offer-card__content">
        {cardData.content}
      </span>
    </div>
  );
}
