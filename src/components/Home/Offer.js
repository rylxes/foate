import React from "react";

export default function Offer({cardData}) {
  return (
    <div className="card w-56 text-center  pt-10">
      <div className=" bg-white rounded-full w-20 p-3 mx-auto">
        <img src={`./img/${cardData.font}`} alt="card icon"/>
      </div>
      
  <div className="card_title text-2xl mt-2 text-white">{cardData.title}</div>
        <div className="card__content text-sm p-1 text-white">
          {cardData.content}
        </div>
    </div>
  );
}
