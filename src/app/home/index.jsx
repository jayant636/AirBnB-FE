import React from 'react';
import Hero_Section from './Hero_Section';
import Trending_Destination from './Trending_Destination';
import Search from '@/features/search/Search';

const Home = () => {
  return (
    <>
      <Hero_Section />
      <div className="-mt-8 relative z-[2]">
        <Search />
      </div>

      <Trending_Destination />
    </>
  );
};

export default Home;
