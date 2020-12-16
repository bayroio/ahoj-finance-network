import React from 'react';

import Layout from '../components/Layout';
import pic5 from '../assets/images/05.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>AHOJ.DASH</h1>
        <span className="image main">
          <img src={pic5} alt="" />
        </span>
        <p>
          If you want check all the financial information around our synthetic market... this is the right place.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
          ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit
          sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
          fringilla in aliquam at, euismod in lectus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In non lorem sit amet elit placerat maximus. Pellentesque
          aliquam maximus risus, vel venenatis mauris vehicula hendrerit.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
