import React from 'react';
import BannerAd from '../components/BannerAd';
import MatchSection from '../components/MatchSection';
import IplFixtures from '../components/IplFixtures';
import ShortsSection from '../components/ShortsSection';
import NewsSection from '../components/NewsSection';

const Homepage = () => {
  return (
    <>
      <BannerAd />
      <MatchSection />
      <IplFixtures />
      <ShortsSection />
      <NewsSection />
    </>
  );
};

export default Homepage;
