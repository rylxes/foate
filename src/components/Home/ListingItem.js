import React from "react";

export default function ListingItem() {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img src="./img/home1.jpg" alt="property" />
      <div className="bg-white ">
        <h5 className="text-center py-6 text-primary">Newport Pagnell</h5>
        <div className="grid grid-cols-3 pb-6" style={{justifyItems: 'center'}}>
          <svg className="w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg className="w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg className="w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            ></path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
          </svg>
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
        <p className="text-primary pb-3 text-center font-bold">£1,200/month</p>
      </div>
    </div>
  );
}
