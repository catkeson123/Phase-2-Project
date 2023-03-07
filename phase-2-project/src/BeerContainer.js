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
    <div className="container text-center">
      <Search updateSearch={updateSearch} />
      <div className='row g-2'>
        {beerCards}
      </div>
    </div>
  );
}

export default BeerContainer;
