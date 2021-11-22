import React from 'react';
import './Footer.css';
import fbIcon from './img/fbIcon.png';
import linkedInIcon from './img/linkedInIcon.png';
import twitterIcon from './img/twitterIcon.png';

const Footer = () => {
  return (
    <div className="footer-grid">
      <div className="social-network">
        <img src={fbIcon} alt="Facebook" className="social-network-icon" />
        <img
          src={linkedInIcon}
          alt="LinkedIn"
          className="social-network-icon"
        />
        <img src={twitterIcon} alt="Twitter" className="social-network-icon" />
      </div>

      <a
        href="https://www.economie.gouv.fr/entreprises/site-internet-mentions-obligatoires"
        target="_blank"
        className="footer-item"
      >
        Legal notice
      </a>
      <div className="footer-item">FAQ</div>
      <div className="footer-item">About</div>
      <a href="./Contact/Contact.jsx" className="footer-item">
        Contact
      </a>
    </div>
  );
};
export default Footer;
