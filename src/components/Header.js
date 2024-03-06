import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Header = () => {
  // If there is no dependency array, useEffect is called on every render.

  //If dependency array = [], useEfeect is called on initial render means its called only once.

  //If dependency [btnName], useEffect is called when btnName is changes.

  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header ">
      <div className="header-container d-flex">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <div className="header-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>Cart</li>
              <button
                className="login-button"
                onClick={() => {
                  btnName == "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
