import React from "react";
import { Link } from "react-router-dom";
import logo from "../../icons/logo.svg";
import logoBlack from "../../icons/logo-black.svg";
import globe from "../../icons/globe.svg";
import settings from "../../icons/settings.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="h-left">
        <img id="logo" src={logo} alt="Core Logo" />
        <nav>
          <ul>
            <li className="active-page">
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="#">Trade</Link>
            </li>
            <li>
              <Link to="#">Earn</Link>
            </li>
            <li>
              <Link to="#">Win</Link>
            </li>
            <li>
              <Link to="#">NFT</Link>
            </li>
            <li>
              <Link to="#">More</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-right">
        <ul>
          <li className="balance">
            <img src={logoBlack} alt="Core Logo with black background" />
            <div>
              <span>$</span>0
            </div>
          </li>
          <li className="language">
            <img src={globe} alt="Core Logo with black background" />
            <div>EN</div>
          </li>
          <li className="settings">
            <img src={settings} alt="settings menu icon" />
          </li>
          <li className="connect">
            <div>Connect Wallet</div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
