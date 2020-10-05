import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
//import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
//import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <i>...working with the help of narwhals.</i>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Swap">
              <h5>Ahoj.Swap</h5>
              <div className="content">
                <p>
                Our liquidity provision protocol. For you... a simple way to trade one asset for another.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Mint">
              <h5>Ahoj.Mint</h5>
              <div className="content">
                <p>
                This is the right way to define economics/financial rules 
                to create new ASA (AHOJ Synthetic Assets).
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Invest">
              <h5>Ahoj.Invest</h5>
              <div className="content">
                <p>
                A service to trade all minted ASA (AHOJ Synthetic Assets).
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Dashboard">
              <h5>Ahoj.Dashboard</h5>
              <div className="content">
                <p>
                If you want check all the financial information around 
                our synthetic market... this is the right place.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
