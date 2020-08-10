import React from "react";
import PropertiesItem from "./PropertiesItem";

const Properties = () => {
  const cardData = [
    {
      img: "home1.jpg",
      location: "Salford, Manchester",
      size: "42sqm",
      bathrooms: "2",
      bedrooms: "3",
      amount: "1,350",
    },
    {
      img: "home2.jpg",
      location: "Droylsden, Manchester",
      size: "39sqm",
      bathrooms: "1",
      bedrooms: "2",
      amount: "1,200",
    },
    {
      img: "home3.jpg",
      location: "Stretford, Manchester",
      size: "45sqm",
      bathrooms: "2",
      bedrooms: "3",
      amount: "1,500",
    },
    {
      img: "home4.jpg",
      location: "Prestwich, Manchester",
      size: "47sqm",
      bathrooms: "2",
      bedrooms: "4",
      amount: "1,700",
    },
    {
      img: "home5.jpg",
      location: "Eccles, Manchester",
      size: "30sqm",
      bathrooms: "1",
      bedrooms: "1",
      amount: "800",
    },
    {
      img: "home6.jpg",
      location: "Middleton, Manchester",
      size: "44sqm",
      bathrooms: "2",
      bedrooms: "3",
      amount: "1,500",
    },
  ];

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
              <label htmlFor="beds">By</label>
              <select name="" id="beds">
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
            {cardData.map((item, index) => {
              return (
                <div key={index}>
                  <PropertiesItem cardData={item} />
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
