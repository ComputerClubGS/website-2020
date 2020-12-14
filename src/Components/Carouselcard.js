import React from 'react'
import {  MDBCarouselCaption, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
function Carouselcard({carouselCardDetails}) {
  return(
    <div>
        <MDBCarouselItem itemId={carouselCardDetails.id}>
          <MDBView>
            <img
              className="d-block w-100"
              src={carouselCardDetails.image}
              alt={carouselCardDetails.id +" Slide"}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3">{carouselCardDetails.title}</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>    
    </div>
  ) 
}
export default Carouselcard;