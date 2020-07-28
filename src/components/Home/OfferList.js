import React from "react";
import Offer from "./Offer";

export default function OfferList() {
  const cardData = [
    {
      font: "invest.svg",
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiaeasperiores hic animi voluptate accusamus beatae.",
    },
    {
      font: "rent.svg",
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiaeasperiores hic animi voluptate accusamus beatae.",
    },
    {
      font: "business-and-finance.svg",
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiaeasperiores hic animi voluptate accusamus beatae.",
    },
    {
      font: "agent.svg",
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiaeasperiores hic animi voluptate accusamus beatae.",
    },
  ];
  return (
    <div className="container ">
      <div className="offer-list">
        <div className="offer-list__content">
          {cardData.map((data, index) => {
            return (
              <div className="offer-card__wrap" key={index}>
                <Offer cardData={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
