import React from 'react';
import Navbar from '../components/Navbar';
import BannerAd from '../components/BannerAd';
import MatchSection from '../components/MatchSection';
import IplFixtures from '../components/IplFixtures';
import ShortsSection from '../components/ShortsSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <BannerAd />
      <MatchSection />
      <IplFixtures />
      <ShortsSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Homepage;
