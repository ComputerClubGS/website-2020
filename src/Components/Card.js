import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css files/Card.css'
import {Card} from 'react-bootstrap'
export default function Cardd({cardDetails}) {
  return (
    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={cardDetails.image} />
  <Card.Body>
    <Card.Title>{cardDetails.title}</Card.Title>
    <Card.Text>
      {cardDetails.text}
    </Card.Text>
  </Card.Body>
</Card>
  );
}