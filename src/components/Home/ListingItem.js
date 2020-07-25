import React from "react";

export default function ListingItem({ cardData }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img src={`./img/${cardData.img}`} alt="property thumbnail" className="w-full h-64 object-cover"/>
      <div className="bg-white">
        <h5 className="text-center py-6 text-primary text-lg">{cardData.location}</h5>
        <div
          className="grid grid-cols-3 pb-6 max-h-full"
          style={{ justifyItems: "center" }}
        >
          <img className="w-8" src="./img/size.svg" alt="property size" />
          <img className="w-8" src="./img/bath.svg" alt="property bathrooms" />
          <img className="w-8" src="./img/bed.svg" alt="property bedrooms" />

          <span className="text-primary">{cardData.size}</span>
          <span className="text-primary">{cardData.bathrooms}</span>
          <span className="text-primary">{cardData.bedrooms}</span>

        </div>
        <p className="text-primary pb-3 text-center font-bold">
          £{cardData.amount}/month
        </p>
      </div>
    </div>
  );
}
