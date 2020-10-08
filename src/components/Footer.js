import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
import Image from 'react-bootstrap/Image'
import BayroLogo from '../assets/images/bayrologo-nobackground.png'


export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="copyright">
          <li>Built with ❤️ by <a href="http://www.bayro.io"><Image src={BayroLogo} alt="" width="50" height="18"/></a></li>
        </ul>
      </div>
    </footer>
  );
}
