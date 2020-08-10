import React from "react";
import NextLink from "next/link";

const PropertiesItem = ({cardData}) => {
  return (
    <NextLink href="/">
      <div className="listing-card rounded-lg shadow-lg overflow-hidden">
      <img src={`./img/${cardData.img}`} alt="property thumbnail" className="listing-card__img"/>

      <div className="listing-card__content">
        
        <h5 className="listing-card__title text-center py-6 text-primary text-lg">{cardData.location}</h5>

        <div className="listing-card__stat">
          <img src="./img/size.svg" alt="property size" />
          <img src="./img/bath.svg" alt="property bathrooms" />
          <img src="./img/bed.svg" alt="property bedrooms"/>
          <span>{cardData.size}</span>
          <span>{cardData.bathrooms}</span>
          <span>{cardData.bedrooms}</span>
        </div>
        <p className="listing-card__amount">
          £{cardData.amount}/month
        </p>
      </div>
    </div>
    </NextLink>
  );
};


export default PropertiesItem;