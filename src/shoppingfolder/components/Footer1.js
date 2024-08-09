import React from 'react';
import { FaInstagram, FaFacebook, FaGoogle, FaSnapchat } from 'react-icons/fa';


const Footer1 = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <p>© 2021 C.B.R Milk Dairy</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
          <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
            <FaSnapchat />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
