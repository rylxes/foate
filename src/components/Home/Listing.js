import React from "react";
import ListingItem from "./ListingItem";



export default function Listing({properties}) {

  return (
    <div className="listing">
      <div className="container">
        <h1 className="listing__title">
          Featured Listings
        </h1>
        <div className="">
          <div className="listing__content">
            {properties.map((property, index) => {
              return (
                <div key={index}>
                  <ListingItem cardData={property} />
                </div>
              );
            })}
          </div><br/><br/><br/>
        </div>
      </div>
    </div>
  );
}
