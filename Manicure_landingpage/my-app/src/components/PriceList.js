import React from 'react';

const PriceList = () => {
  return (
    <div className="price-list">
      <h1 className="price-list-title">Price List</h1>
      <div className="price-list-container">
        <div className="price-category">
          <h2>Manicure</h2>
          <ul>
            <li>
              <span className="service-name">Classic Manicure</span>
              <span className="service-price">₪25</span>
            </li>
            <li>
              <span className="service-name">French Manicure</span>
              <span className="service-price">₪30</span>
            </li>
            <li>
              <span className="service-name">Gel Manicure</span>
              <span className="service-price">₪40</span>
            </li>
          </ul>
        </div>
        <div className="price-category">
          <h2>Pedicure</h2>
          <ul>
            <li>
              <span className="service-name">Classic Pedicure</span>
              <span className="service-price">₪35</span>
            </li>
            <li>
              <span className="service-name">Spa Pedicure</span>
              <span className="service-price">₪45</span>
            </li>
            <li>
              <span className="service-name">Gel Pedicure</span>
              <span className="service-price">₪50</span>
            </li>
          </ul>
        </div>
        <div className="price-category">
          <h2>Add-Ons</h2>
          <ul>
            <li>
              <span className="service-name">Nail Art</span>
              <span className="service-price">₪15</span>
            </li>
            <li>
              <span className="service-name">Paraffin Treatment</span>
              <span className="service-price">₪20</span>
            </li>
            <li>
              <span className="service-name">Callus Removal</span>
              <span className="service-price">₪10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
