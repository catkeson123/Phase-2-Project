import React, {useState} from "react"

function BeerCard({ name, tagline, image, description, contribute }) {
const[showFront, setShowFront] = useState(true)

const handleFlip =() =>{
  setShowFront(!showFront)
}

  return (
    <div onClick={(handleFlip)}>
      <h1>{name}</h1>
      {showFront ? <img src={image} alt={name}/> : <p>{description}</p>}
      <h2>{showFront ? tagline : contribute}</h2>
    </div>
  );
}

export default BeerCard;
