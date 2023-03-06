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

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/beers">
          <BeerContainer beerList={beerList} />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
