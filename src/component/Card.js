import React from 'react';
import Image from './Image';
import News from './News';

const Card = (props) =>{
    return(
      <div className="cards">
        <Image src={props.src} alt={props.alt} />
        <News content={props.content} />
      </div>
    )
  }

  export default Card;