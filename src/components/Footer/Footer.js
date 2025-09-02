import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="text-center">
          <p className="copyright-text">© Copyright 2025 NetBramha Studio LLP. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">FAQs</a>
            <a href="#" className="footer-link">Terms and Conditions</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Raise a Dispute</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
