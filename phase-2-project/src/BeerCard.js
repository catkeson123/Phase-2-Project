import React, {useState} from "react"

function BeerCard({ name, tagline, image, description, contribute }) {
const[showFront, setShowFront] = useState(true)

const handleFlip =() =>{
  setShowFront(!showFront)
}

  return (
    <div className="col-4" onClick={(handleFlip)}>
      <h1 className="beerInfo">{name}</h1>
      {showFront ? <img className="beerimage" src={image} alt={name}/> : <p className="beerInfo">{description}</p>}
      <h2 className="beerInfo">{showFront ? tagline : contribute}</h2>
    </div>
  );
}

export default BeerCard;
