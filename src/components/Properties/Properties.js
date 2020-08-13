import React from "react";
import PropertiesItem from "./PropertiesItem";


const Properties = ({properties}) => {
  
  return (
    <div className="properties">
      <div className="header">
        <div className="container">
          <h1>Propertiy Listing</h1>
        </div>
      </div>

      <div className="properties__container">
        <div className="properties__sidebar">
          <div className="properties__sidebar-sort">
            <h4>Sort listings</h4>
            <div>
              <label htmlFor="sort">By</label>
              <select name="" id="sort">
                <option value=""> Low to High</option>
                <option value=""> High to Low</option>
                <option value=""> Newest</option>
                <option value=""> Most popular</option>
              </select>
            </div>
          </div>

          <div className="properties__sidebar-results">
            <h4>Search results</h4>
            <span>Showing 8 results</span>
          </div>

          <div className="properties__sidebar-type">
            <h4>Type of property</h4>
            <div>
              <input type="checkbox" id="buy" name="" />
              <label htmlFor="buy">Buy</label>
            </div>
            <div>
              <input type="checkbox" id="rent" name="" />
              <label htmlFor="rent">Rent</label>
            </div>
          </div>

          <div className="properties__sidebar-building">
            <h4>Type of building</h4>
            <div>
              <input type="checkbox" id="appartment" name="" />
              <label htmlFor="appartment">Appartment</label>
            </div>
            <div>
              <input type="checkbox" id="duplex" name="" />
              <label htmlFor="duplex">Duplex</label>
            </div>
            <div>
              <input type="checkbox" id="studio" name="" />
              <label htmlFor="studio">Studio</label>
            </div>
          </div>

          <div className="properties__sidebar-filter">
            <h4>Filter search</h4>
            <div>
              <label htmlFor="beds">Beds</label>
              <input type="text" id="beds" placeholder="Beds" />
            </div>
            <div>
              <label htmlFor="baths">Bathrooms</label>
              <input type="text" id="baths" placeholder="Baths" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="range" id="price" />
            </div>
          </div>
        </div>

        <div className="properties__main">
          <div className="properties__cards">
            {properties.map((property, index) => {
              return (
                <div key={property._id}>
                  <PropertiesItem cardData={property} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
