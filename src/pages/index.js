import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
//import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
//import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
      <h4>"Coming soon..."</h4>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="">
              <h5>Ahoj.Mix</h5>
              <div className="content">
                <p>
                Automated liquidity protocol powered by an Automated Market Maker. 
                </p>
                <b>Ahoj.Jars:</b> Liquidity Provider Protocol.
                <br></br>
                <b>Ahoj.Swap:</b> Trade one asset for another.
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="">
              <h5>Ahoj.Synth</h5>
              <div className="content">
                <p>
                A service for creating economic or financial rules to mint new <b>ASA</b> (Ahoj Synthetic Assets).
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="">
              <h5>Ahoj.Token</h5>
              <div className="content">
                <p>
                Is a Synthetic Commodity Money to be used as a stablecoin within the protocol, and among other things that can be used as collateral / guarantee at the time of minting an <b>ASA</b> in the protocol.
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
            <Link to="">
              <h5>Ahoj.Dash</h5>
              <div className="content">
                <p>
                Dashboard with all financial information concerning Ahoj.Token & ASA market cap.
                </p>
              </div>
            </Link>
          </article>

        </section>
        
      </div>
    </div>
  </Layout>
);

export default IndexPage;
