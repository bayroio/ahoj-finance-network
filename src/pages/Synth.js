import React from 'react';

import Layout from '../components/Layout';
import pic2 from '../assets/images/02.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>AHOJ.SYNTH</h1>
        <span className="image main">
          <img src={pic2} alt="" />
        </span>
        <p>
        Ahoj Synthetic Assets (ASA)
        </p>
        <p>
        ASA represent ≥1 financial instruments

        $AHOJ holders can stake $AHOJ
to issue ASA
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
