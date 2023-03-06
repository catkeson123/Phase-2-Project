import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import BeerContainer from "./BeerContainer";
import Home from "./Home";
import NavBar from "./NavBar"


function Header () {
    return ( 
        <div>
            <NavBar />
            <Switch>
                <Route path="/beers">
                    <BeerContainer />
                </Route>
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
   
}

export default Header;