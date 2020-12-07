import React from 'react';
import '../Css files/Members.css'
import Membercard from './Membercard';
import details from './details';


export default function Members(){

  const membercard = details.map(details => <Membercard name={details.name}
    description={details.description}
    designation={details.designation}
    img={details.img}/>);
  
  return(
    <>
    <h1 className="ss">
        Members
      </h1>
      <div className="sop">
      {membercard} 
      </div>
      </>
  )
}