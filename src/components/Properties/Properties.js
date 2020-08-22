import { useState, useRef } from "react";
import PropertiesItem from "./PropertiesItem";

const Properties = ({ properties }) => {
  const rangeRef= useRef(0)

  const [filteredProps, setFilteredProps] = useState([...properties]);

  const handlePrice = (e) => {
    if (e.target.value === "low") {
      const sortLow = [...properties].sort((a, b) => Number(a.amount) - Number(b.amount));
      return setFilteredProps(sortLow);
    }
    if (e.target.value === "high") {
      const sortHigh = [...properties].sort((a, b) => Number(b.amount) - Number(a.amount));
      return setFilteredProps(sortHigh);
    } 
    if (e.target.value === "time") {
      const sortTime = [...properties].sort((a, b) => (new Date(b.updatedAt).getTime()) - (new Date(a.updatedAt).getTime()));
      return setFilteredProps(sortTime);
    }
  };

  const handleBedFilter = (e) => {
    const val = [...properties].filter(prop => prop.beds === e.target.value);
    setFilteredProps(val)
  }

  const handleBathsFilter = (e) => {
    const val = [...properties].filter(prop => prop.bathrooms === e.target.value);
    setFilteredProps(val);
  }

  const handleRange = (e) => {
    const val = [...properties].filter(prop => +prop.amount < +e.target.value);
    setFilteredProps(val);
  }

  return (
    <div className="properties">
      <div className="header">
        <div className="container">
          <h1>Propertiy Listing</h1>
        </div>
      </div>

      <div className="properties__container">
        <div className="properties__sidebar">
          
          <div className="properties__sidebar-results">
            <h4>Search results</h4>
            <span>Showing {filteredProps.length === 0 ? properties.length : filteredProps.length } results</span>
          </div>

          <div className="properties__sidebar-sort">
            <h4>Sort listings</h4>
            <div>
              <label htmlFor="sort">By</label>
              <select onChange={handlePrice} name="sort" id="sort">
                <option value=""> Sort properties </option>
                <option value="low"> Low to High</option>
                <option value="high"> High to Low</option>
                <option value="time"> Newest</option>
              </select>
            </div>
          </div>

          <div className="properties__sidebar-type">
            <h4>Type of property</h4>
            <div>
              <input type="radio" id="buy" name="property_type" />
              <label htmlFor="buy">Buy</label>
            </div>
            <div>
              <input type="radio" id="rent" name="property_type" />
              <label htmlFor="rent">Rent</label>
            </div>
          </div>

          <div className="properties__sidebar-building">
            <h4>Type of building</h4>
            <div>
              <input type="radio" id="appartment" name="building_type" />
              <label htmlFor="appartment">Appartment</label>
            </div>
            <div>
              <input type="radio" id="duplex" name="building_type" />
              <label htmlFor="duplex">Duplex</label>
            </div>
            <div>
              <input type="radio" id="studio" name="building_type" />
              <label htmlFor="studio">Studio</label>
            </div>
          </div>

          <div className="properties__sidebar-filter">
            <h4>Filter search</h4>
            <div>
              <label htmlFor="beds">Beds</label>
              <input type="number" id="beds" placeholder="Beds" onChange={handleBedFilter} />
            </div>
            <div>
              <label htmlFor="baths">Bathrooms</label>
              <input type="number" id="baths" placeholder="Baths" onChange={handleBathsFilter} />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input 
                type="range" 
                id="price" 
                min="100" 
                max="3000" 
                step="100" 
                onChange={handleRange}
                ref={rangeRef}
                defaultValue="0"
              />
              <span>
                {rangeRef.current.value ? `£${rangeRef.current.value}` : ''}
              </span>
            </div>
          </div>
        </div>

        <div className="properties__main">
          <div className="properties__cards">
            
            
            {filteredProps.length > 0 && filteredProps.map((property) => {
              return (
                <div key={property._id}>
                  <PropertiesItem cardData={property} />
                </div>
              );
            })}

            {filteredProps.length === 0 && properties.map((property) => {
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
