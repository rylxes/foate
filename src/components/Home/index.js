import Hero from './Hero'
import OfferList from './OfferList'
import Listing from './Listing'
import InvestmentA from './InvestmentA'
import InvestmentB from './InvestmentB'




export default function Index({home, properties}) {
  return (
    <div>
      <Hero home={home}/>
      <OfferList home={home}/>
      <Listing properties={properties}/>
      <InvestmentA home={home}/>
      <InvestmentB home={home}/>
    </div>
  )
}
