import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>AHOJ.MINT</h1>
        <span className="image main">
          <img src={pic1} alt="" />
        </span>
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
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent
          rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
          mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget
          turpis at, elementum convallis elit. Pellentesque enim turpis,
          hendrerit tristique lorem ipsum dolor.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
