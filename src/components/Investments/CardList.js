import React from "react";

export default function CardList({ cardData, index }) {
  
  return (
    <div
      className={` invest__card-container ${index === 1 ? "invest__card-active" : ""}`}>
      <div className="invest__card">
        <div className="invest__card-front">
          {index === 1 ? (
            <span className="invest__card-recommend">Recommended</span>
          ) : (
            <span className="empty"></span>
          )}
          <img src={cardData.card_front_img[0].url} alt={cardData.card_front_title} />
          <h1 className="invest__card-title">{cardData.card_front_title}</h1>
          {/* <span className="invest__card-amount">{cardData.title}</span> */}
          <p>{cardData.card_front_content}</p>
        </div>
        <div className="invest__card-back">
          <ul className="invest__card-services">
            
              <li>
                <i className={cardData.card_back_icon_1}></i>
                <span>
                  <h5>{cardData.card_back_text_1}</h5>
                  {cardData.card_back_content_1}
                </span>
              </li>
              <li>
                <i className={cardData.card_back_icon_2}></i>
                <span>
                  <h5>{cardData.card_back_text_2}</h5>
                  {cardData.card_back_content_2}
                </span>
              </li>
              <li>
                <i className={cardData.card_back_icon_3}></i>
                <span>
                  <h5>{cardData.card_back_text_3}</h5>
                  {cardData.card_back_content_3}
                </span>
              </li>
              <li>
                <i className={cardData.card_back_icon_4}></i>
                <span>
                  <h5>{cardData.card_back_text_4}</h5>
                  {cardData.card_back_content_4}
                </span>
              </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
