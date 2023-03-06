import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./Form";
import BeerContainer from "./BeerContainer";
import Home from "./Home";
import NavBar from "./NavBar";

function Header() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/beers")
      .then((res) => res.json())
      .then(setBeerList);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = (newString) => setSearchTerm(newString.toLowerCase());

  const searchedBeers = beerList.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  const addBeerState = (newBeerObj) => {
    setBeerList([...beerList, newBeerObj]) 
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/beers">
          <BeerContainer beerList={searchedBeers} updateSearch={updateSearch} />
        </Route>
        <Route path="/form">
          <Form addBeerState={addBeerState} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
