import React from "react";
import Offer from "./Offer";

export default function OfferList({home}) {
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
          {cardData.map((data, i) => {
            return (
              <div className="offer-card__wrap" key={i}>
                <Offer cardData={{...data, title: home.hexagons[i].title, content: home.hexagons[i].content}} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
