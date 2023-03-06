function BeerCard({ name, tagline, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h2>{tagline}</h2>
    </div>
  );
}

export default BeerCard;
