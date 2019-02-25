import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer>
        <a  href="https://www.linkedin.com/in/sarah-lopriore-5b058b168/" className="icon-link round linkedin filled" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/sarahlopriore" className="icon-link round github filled" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
        </a>
        <a href="mailto:sarah.lopriore@gmail.com" className="icon-link round envelope filled" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope"></i>
        </a>
    </footer>
)

export default Footer;