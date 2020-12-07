// import { MDBCardGroup } from 'mdbreact'
import React from 'react';
import '../Css files/Events.css';
import Card from './Card';
import Carouselcard from './Carouselcard';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
function Events() {
  const cardDetails = [
    {
      id: "1",
      title: "CODICTION - COME . CODE . CONQUER",
      text: "  This spring season, with blooming flowers, let your coding skills blossom as well. Computer Club, SGSITS brings you a golden opportunity to put your skills to the test as you work your way through multiple rounds of algorithmic puzzles and also get a chance to win exciting prizes. ",
      image: <img src={require('../Images/codiction-poster.jpeg')} className="card-img-top" alt=" " />
    },
    {
      id: "2",
      title: "CODICTION - COME . CODE . CONQUER",
      text: "This spring season, with blooming flowers, let your coding skills blossom as well. Computer Club, SGSITS brings you a golden opportunity to put your skills to the test as you work your way through multiple rounds of algorithmic puzzles and also get a chance to win exciting prizes. ",
      image: <img src={require('../Images/codiction-poster.jpeg')} className="card-img-top" alt=" " />
    },
    {
      id: "3",
      title: "CODICTION - COME . CODE . CONQUER",
      text: "This spring season, with blooming flowers, let your coding skills blossom as well. Computer Club, SGSITS brings you a golden opportunity to put your skills to the test as you work your way through multiple rounds of algorithmic puzzles and also get a chance to win exciting prizes. ",
      image: <img src={require('../Images/codiction-poster.jpeg')} className="card-img-top" alt=" " />
    },
    {
      id: "4",
      title: "CODICTION - COME . CODE . CONQUER",
      text: "This spring season, with blooming flowers, let your coding skills blossom as well. Computer Club, SGSITS brings you a golden opportunity to put your skills to the test as you work your way through multiple rounds of algorithmic puzzles and also get a chance to win exciting prizes. ",
      image: <img src={require('../Images/codiction-poster.jpeg')} className="card-img-top" alt=" " />
    }
  ]
  const carouselCardDetails = [
    {
      id: "1",
      title: "Slide 1",
      image:require('../Images/nature1.jpg')
    },
    {
      id: "2",
      title: "Slide 2",
      image: require('../Images/nature1.jpg')
    },
    {
      id: "3",
      title: "Slide 3",
      image: require('../Images/nature1.jpg')
    },
    {
      id: "4",
      title: "Slide 4",
      image:require('../Images/nature1.jpg')
    }
  ]

  const cards = cardDetails.map(cardDetails => <Card cardDetails={cardDetails} key={cardDetails.id} />);
  const carouselcards = carouselCardDetails.map(carouselCardDetails => <Carouselcard carouselCardDetails={carouselCardDetails} key={carouselCardDetails.id} />);
  return (
    <div className="events">
      <div className="events-header">
        Events
      </div>
      <div className="carousel">
        <Carousel interval={1000}>
          {carouselcards}
        </Carousel>
      </div>
      <div className="card-style">{cards}</div>
    </div>
  )
}

export default Events;