import React from 'react';

import Header from '../component/Header';
import Banner from '../component/Banner';

import Posts from '../component/Posts';
import Footer from '../component/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 