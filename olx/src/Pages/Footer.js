import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>OLX is the world's leading classifieds platform, with more than 400 million monthly users.</p>
          </div>
          <div className="col-md-4">
            <h5>Categories</h5>
            <ul>
              <li><a href="/">Vehicles</a></li>
              <li><a href="/">Real Estate</a></li>
              <li><a href="/">Electronics</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Services</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="/"><FaFacebook /></a>
              <a href="/"><FaTwitter /></a>
              <a href="/"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© {new Date().getFullYear()} OLX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
