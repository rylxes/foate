import React from "react";

export default function Table({cardData}) {
  return (
    <div className={` invest__card-container ${cardData.ideal ? 'invest__card-active' : ''}`} >
      <div className="invest__card">
        <div className="invest__card-front">
          {
            cardData.ideal ? (
              <span className="invest__card-recommend">Recommended</span>
            ) : <span className="empty"></span>
          }
          <h1 className="invest__card-title">{cardData.title}</h1>
          <span className="invest__card-amount">{cardData.amount}</span>
          <ul className="invest__card-services">
            {cardData.desc.map((item, i)=> (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="invest__card-back">Back</div>
      </div>
    </div>
  );
}
