import { NavLink } from "react-router-dom";

  
  function NavBar() {
    return (
      <nav>
        <div className="navigation">
          <NavLink
            to="/"
            exact
            activeStyle={{
              background: "yellow" ,
            }}
            className="button"
          >
            Home
          </NavLink>
          <NavLink
            to="/beers"
            exact
            activeStyle={{
              background: "yellow",
            }}
            className="button"
          >
            Beers
          </NavLink>
          <NavLink
            to="/form"
            exact
            activeStyle={{
              background: "yellow",
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