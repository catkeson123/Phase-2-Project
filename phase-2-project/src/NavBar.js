import { NavLink } from "react-router-dom";

  
  function NavBar() {
    return (
      <nav>
        <div className="navigation">
          <NavLink
            to="/"
            exact
            className="button"
          >
            <img className="beerGif" src = "https://em-content.zobj.net/source/microsoft-teams/337/beer-mug_1f37a.png" alt="Home"></img>
          </NavLink>
          <NavLink
            to="/beers"
            exact
            activeStyle={{
              background: "rgba(105, 105, 105, 0.765)",
            }}
            className="button"
          >
            Beers
          </NavLink>
          <NavLink
            to="/form"
            exact
            activeStyle={{
              background: "rgba(105, 105, 105, 0.765)",
            }}
            className="button"
          >
            Add a New Beer
          </NavLink>
        </div>
       
      </nav>
    );
  }

export default NavBar;