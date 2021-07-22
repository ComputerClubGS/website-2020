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
    <h2 className="ss" style={{marginTop:"0"}}>
      Members
    </h2>
      </center>
      <div className="sop">
        {membercard} 
      </div>
      </div>
      
  )
}