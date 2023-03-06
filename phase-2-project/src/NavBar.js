import { NavLink } from "react-router-dom";
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/beers"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Beers
        </NavLink>
        <NavLink
          to="/form"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Add a New Beer
        </NavLink>
      </div>
    );
  }

export default NavBar;