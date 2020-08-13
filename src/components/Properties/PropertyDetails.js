import React from "react";
import Carousel from "./Carousel";
import ReactMarkDown from "react-markdown";

const PropertiesDetails = ({ currentCard }) => {
  return (
    <div className="properties">
      <div className="header">
        <div className="container">
          <h1>{currentCard.street}</h1>
          <h3 className="subtitle">{currentCard.city}</h3>
          <h3 className="subtitle">{`£${currentCard.amount}/month`}</h3>
        </div>
      </div>

      <div className="container">
        <Carousel currentCard={currentCard} />

        <div className="properties__feature">
          <div className="properties__feature-stat">
            <img src="/img/size.svg" alt="property size" />
            <img src="/img/bath.svg" alt="property bathrooms" />
            <img src="/img/bed.svg" alt="property bedrooms" />
            <span>Size</span>
            <span>Bathrooms</span>
            <span>Beds</span>
            <span>{currentCard.size}</span>
            <span>{currentCard.bathrooms}</span>
            <span>{currentCard.beds}</span>
          </div>

          <h5>Amenities</h5>
          <div className="properties__feature-list">
            <ReactMarkDown source={currentCard.amenity} />
          </div>

          <h5>Description</h5>
          <div>
            <ReactMarkDown source={currentCard.description} />
          </div>
          <br />
          <img src="/img/Manchester_map.svg" alt="" />
        </div>

        <form className="contact__form">
          <h1>Contact Realtor</h1>
          <p>
            Call us on 0161 714 4222 or email us at sales@foate.co.uk for more
            info and to book a viewing. Alternatively, you can fill the form
            below and someone from our sales department will get in touch with
            you as soon as possible.
          </p>
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="contact__form-input"
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="contact__form-input"
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Phone number"
              className="contact__form-input valid"
            />
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>

        <br/><br/>
      </div>
    </div>
  );
};

export default PropertiesDetails;
