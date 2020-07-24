import React from 'react'
import Offer from './Offer'


export default function OfferList() {
  let arr = [1,2,3,4];
  return(
    <div className="flex flex-wrap my-64">
      {
        arr.map((item, index) => {
          return (
            <div key={index}>
              <Offer />
            </div>
          )
        })
      }
    </div>
  ) 
}
