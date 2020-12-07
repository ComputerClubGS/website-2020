import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css files/Card.css'
export default function Card({cardDetails}) {
  console.log({cardDetails});
  return (
    <div className="card mb-3">
      {cardDetails.image}
      <div className="card-body">
        <h3 className="card-title">{cardDetails.title}</h3>
        <p className="card-text">{cardDetails.text}</p>
      </div>
    </div>
  );
}