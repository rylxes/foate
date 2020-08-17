import Hero from './Hero'
import OfferList from './OfferList'
import Listing from './Listing'
import InvestmentA from './InvestmentA'
import InvestmentB from './InvestmentB'




export default function Index({properties}) {
  return (
    <div>
      <Hero/>
      <OfferList/>
      <Listing properties={properties}/>
      <InvestmentA/>
      <InvestmentB/>
    </div>
  )
}
