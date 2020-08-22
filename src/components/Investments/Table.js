import React from "react";

export default function Table({ cardData }) {
  return (
    <div
      className={` invest__card-container ${
        cardData.ideal ? "invest__card-active" : ""
      }`}
    >
      <div className="invest__card">
        <div className="invest__card-front">
          {cardData.ideal ? (
            <span className="invest__card-recommend">Recommended</span>
          ) : (
            <span className="empty"></span>
          )}
          <img src={cardData.img} alt="" />
          <h1 className="invest__card-title">{cardData.title}</h1>
          {/* <span className="invest__card-amount">{cardData.title}</span> */}
          <p>{cardData.about}</p>
        </div>
        <div className="invest__card-back">
          <ul className="invest__card-services">
            {cardData.desc.map((item, i) => (
              <li key={i}>
                <i className={item.icon}></i>
                <span>
                <h5>{item.h5}</h5>
                {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
