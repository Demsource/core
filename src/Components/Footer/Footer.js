import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoGrey from "../../icons/logo-grey.svg";
import socFacebook from "../../icons/soc-facebook.svg";
import socTwitter from "../../icons/soc-twitter.svg";
import socSocLinkedIn from "../../icons/soc-linked-in.svg";
import socGithub from "../../icons/soc-github.svg";
import globe from "../../icons/globe.svg";
import settings from "../../icons/settings.svg";
import scrollUp from "../../icons/scroll-up.svg";

function Footer() {
  return (
    <footer>
      <div className="f-wrap">
        <div className="f-left">
          <div>
            <img src={logoGrey} alt="CORE Logo gray" />
          </div>
          <ul className="soc-icons">
            <li>
              <img src={socFacebook} alt="Facebook Social icon" />
            </li>
            <li>
              <img src={socTwitter} alt="Twitter Social icon" />
            </li>
            <li>
              <img src={socSocLinkedIn} alt="SocLinkedIn Social icon" />
            </li>
            <li>
              <img src={socGithub} alt="Github Social icon" />
            </li>
          </ul>
          <ul className="terms-and-privacy">
            <li>
              <Link to="#">Terms of Service</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
          </ul>
          <ul className="language-and-preferences">
            <li className="language">
              <img src={globe} alt="Core Logo with black background" />
              <div>EN</div>
            </li>
            <li className="settings">
              <img src={settings} alt="settings menu icon" />
            </li>
          </ul>
        </div>
        <div className="f-right">
          <ul>
            <li>About</li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Band</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Community</Link>
            </li>
            <li>
              <Link to="#">CORE Token</Link>
            </li>
            <li>
              <Link to="#">Online Store</Link>
            </li>
          </ul>
          <ul>
            <li>Help</li>
            <li>
              <Link to="#">Customer Support</Link>
            </li>
            <li>
              <Link to="#">Troubleshooting</Link>
            </li>
            <li>
              <Link to="#">Guides</Link>
            </li>
          </ul>
          <ul>
            <li>Developers</li>
            <li>
              <Link to="#">Github</Link>
            </li>
            <li>
              <Link to="#">Documentation</Link>
            </li>
            <li>
              <Link to="#">Bug Bounty</Link>
            </li>
            <li>
              <Link to="#">Audits</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-license">
        <div className="cl-wrap">
          <div className="fb-left">
            © CORE Multi-Chain, 2021 All rights reserved
          </div>
          <div
            className="scroll-up"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={scrollUp} alt="Scroll Up icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
