import NextLink from "next/link";
import slugify from 'slugify'

export default function ListingItem({ cardData }) {
  return (
    <NextLink href={`/properties/${slugify(cardData.street).toLowerCase()}`}>

    <div className="listing-card">
      <img src={cardData.images[0].url} alt={cardData.street} className="listing-card__img"/>

      <div className="listing-card__content">
        
        <h5 className="listing-card__title">{cardData.street}</h5>
        <span className="listing-card__subtitle">{cardData.city}</span>

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
}
