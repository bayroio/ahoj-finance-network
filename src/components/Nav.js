import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Swap">AHOJ.SWAP</Link>
          </li>
          <li>
            <Link to="/Mint">AHOJ.MINT</Link>
          </li>
          <li>
            <Link to="/Invest">AHOJ.INVEST</Link>
          </li>
          <li>
            <Link to="/Dashboard">AHOJ.DASHBOARD</Link>
          </li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
