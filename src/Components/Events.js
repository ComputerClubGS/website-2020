import { MDBCarousel , MDBContainer, MDBCarouselInner} from 'mdbreact'
import React from 'react';
import '../Css files/Events.css';
import Cardd from './Card';
import Carouselcard from './Carouselcard';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardDetails from './Eventcarddetails';
import carouselCardDetails from './Eventcarouseldetails'
function Events() {
 
  const cards = cardDetails.map(cardDetails => <Cardd cardDetails={cardDetails} key={cardDetails.id} />);
  const carouselcards = carouselCardDetails.map(carouselCardDetails => <Carouselcard carouselCardDetails={carouselCardDetails} key={carouselCardDetails.id} />);
  return (
    <div className="events">
      <div className="events-header">
        Events
      </div>
      <MDBContainer>
      <MDBCarousel
      activeItem={1}
      interval={2500}
      length={carouselCardDetails.length}
      showControls={true}
      showIndicators={true}
      className="z-depth-1">
        <MDBCarouselInner>
          {carouselcards}
          </MDBCarouselInner>
        </MDBCarousel>
        </MDBContainer>
      <div className="card-style">{cards}</div>
    </div>
  )
}

export default Events;