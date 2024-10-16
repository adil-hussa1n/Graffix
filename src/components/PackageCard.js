import React from "react";

export const PackageCard = ({ title, price, features }) => {
  return (
    <div className="package-card" style={{ backgroundColor: '#1e1e2f', padding: '20px', borderRadius: '10px', color: '#fff' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: 'center' }}>{title}</h5>
        <h6 className="card-price" style={{ textAlign: 'center' }}>{price}</h6>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary mt-3" style={{display: 'block', margin: 'auto'}}>Learn More</a>
      </div>
    </div>
  );
};
