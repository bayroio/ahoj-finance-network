import React from 'react';

import Layout from '../components/Layout';
import pic3 from '../assets/images/03.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>AHOJ.MIX</h1>
        <span className="image main">
          <img src={pic3} alt="" />
        </span>
        <p>
         Automated liquidity protocol powered by a constant product formula.
        </p>
        <p>
        Ahoj.Jars: Liquidity Provider Protocol /Automated Market Maker.
        </p>
        <p>
        Ahoj.Swap: Trade one asset for another.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;