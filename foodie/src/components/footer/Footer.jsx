import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Youtube from "../../img/social-icons/Youtube.svg";
import Telegram from "../../img/social-icons/Telegram.svg";
import Facebook from "../../img/social-icons/Facebook.svg";
import Instagram from "../../img/social-icons/Instagram.svg";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="FooterLogo"></div>
        <div className="FooterContacts">
          <h3>Contact</h3>
          <div className="ContactEmail">
            <EmailIcon />
            <a href="">rahimoff.dilmurod@gmail.com</a>
          </div>
          <div className="ContacftPhone">
            <PhoneIcon />
            <p>+999 23 777 18 88</p>
          </div>
        </div>
        <div className="SocialIcons">
          <img src={Youtube} className="Icons" />
          <img src={Telegram} className="Icons" />
          <img src={Facebook} className="Icons" />
          <img src={Instagram} />
        </div>
        <div className="Copyright">
          <CopyrightIcon />
          <p>Dlmrd 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
