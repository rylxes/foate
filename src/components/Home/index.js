import React from 'react'
import Hero from './Hero'
import OfferList from './OfferList'
import Listing from './Listing'
import InvestmentA from './InvestmentA'
import InvestmentB from './InvestmentB'
import Newsletter from './Newsletter'



export default function Index() {
  return (
    <div>
      <Hero/>
      <OfferList/>
      <Listing/>
      <InvestmentA/>
      <InvestmentB/>
      <Newsletter/>
    </div>
  )
}
