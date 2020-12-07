import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Carouselcard({carouselCardDetails}) {
  
  console.log(carouselCardDetails);
    return (
  <Carousel.Item>
    {/* <img className="d-block w-100" src={require('../Images/nature1.jpg')} alt="First slide" /> */}
    <Carousel.Caption>
      <h3>{carouselCardDetails.title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
    )
}
export default Carouselcard;