import React from "react";
import ListingItem from "./ListingItem";

export default function Listing() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-primary text-6xl font-light text-center	my-10">
        Featured Listings
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center gap-24">
          {arr.map((item, index) => {
            return (
              <div key={index}>
                <ListingItem />
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
