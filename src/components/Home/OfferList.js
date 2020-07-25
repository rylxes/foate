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
    <div className="container mx-auto">
      <div className="container flex flex-wrap my-64 justify-between">
        {cardData.map((data, index) => {
          return (
            <div key={index}>
              <Offer cardData={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
