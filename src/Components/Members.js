import React from 'react';
import '../Css files/Members.css'
import Membercard from './Membercard';
import details from './details';
import { TextTypeWriter } from 'react-text-effects';


export default function Members(){

  const membercard = details.map(details => <Membercard name={details.name}
    description={details.description}
    designation={details.designation}
    img={details.img}/>);
  
  return(
    
    <div clasName="members">
    <center>
    <h1 className="ab">
    <TextTypeWriter duration='5s'>
    <h1 className="ss">
      Members
    </h1>
      </TextTypeWriter>
      </h1>
      </center>
      <div className="sop">
        {membercard} 
      </div>
      </div>
      
  )
}