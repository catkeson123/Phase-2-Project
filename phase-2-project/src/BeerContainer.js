import BeerCard from "./BeerCard";
import Search from "./Search";

function BeerContainer({ beerList, updateSearch }) {
  const beerCards = beerList.map((beer) => (
    <BeerCard
      key={beer.id}
      name={beer.name}
      tagline={beer.tagline}
      image={beer.image_url}
      description={beer.description}
      contribute={beer.contributed_by}
    />
  ));

  return (
    <div>
      <Search updateSearch={updateSearch} />
      {beerCards}
    </div>
  );
}

export default BeerContainer;
