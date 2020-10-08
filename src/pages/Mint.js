import React from 'react';

import Layout from '../components/Layout';
import pic2 from '../assets/images/02.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>AHOJ.MINT</h1>
        <span className="image main">
          <img src={pic2} alt="" />
        </span>
        <p>
          This is the right way to define economics/financial rules to create new ASA (AHOJ Synthetic Assets).
        </p>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit tristique.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
