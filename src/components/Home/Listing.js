import React from "react";
import ListingItem from "./ListingItem";

export default function Listing() {
  const cardData = [
    {img: 'home1.jpg', location:'Salford, Manchester', size: '42sqm', bathrooms: '2', bedrooms: '3', amount: '1,350'},
    {img: 'home2.jpg', location:'Droylsden, Manchester', size: '39sqm', bathrooms: '1', bedrooms: '2', amount: '1,200'},
    {img: 'home3.jpg', location:'Stretford, Manchester', size: '45sqm', bathrooms: '2', bedrooms: '3', amount: '1,500'},
    {img: 'home4.jpg', location:'Prestwich, Manchester', size: '47sqm', bathrooms: '2', bedrooms: '4', amount: '1,700'},
    {img: 'home5.jpg', location:'Eccles, Manchester', size: '30sqm', bathrooms: '1', bedrooms: '1', amount: '800'},
    {img: 'home6.jpg', location:'Middleton, Manchester', size: '44sqm', bathrooms: '2', bedrooms: '3', amount: '1,500'},
  ]

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-primary text-6xl font-light text-center	my-10">
        Featured Listings
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center gap-24">
          {cardData.map((item, index) => {
            return (
              <div key={index}>
                <ListingItem cardData={item} />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button className="rounded-full bg-orange-500 text-white px-5 py-3 mx-auto my-24 hover:bg-orange-600">View More</button>
        </div>
      </div>
    </div>
  );
}
