import React from "react";
import {FaHandHoldingUsd, FaHouseUser} from 'react-icons/fa'

export default function Offer() {
  return (
    <div className="card w-64 text-center ml-24 pt-10">
      <div className="">
        <FaHandHoldingUsd className="card__icon w-24 h-24 mx-auto bg-white rounded-full"/>
        {/* <svg
          className="card__icon w-24 h-24 mx-auto bg-white rounded-full "
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          ></path>
        </svg> */}
      </div>
      
        <div className="card_title text-2xl mt-2 text-white">Card Title</div>
        <div className="card__content text-sm p-1 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          asperiores hic animi voluptate accusamus beatae.
        </div>
    </div>
  );
}
