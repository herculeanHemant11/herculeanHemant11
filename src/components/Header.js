import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
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
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
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
