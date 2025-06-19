import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Features from '../components/Features'
import UseCases from '../components/UseCases';
import TrendingTopics from '../components/TrendingTopics';
import Footer from '../components/Footer';

const handleTopicSelect = (topic) => {

  window.location.href = `/create?topic=${encodeURIComponent(topic)}`;
};

const Home = () => (
  <>
  <div className='bg-gradient-to-br from-[#040e2e]  to-[#088395]'>
    <Navbar/>
  <Hero/>
  <Features/>
  <UseCases/>
  <TrendingTopics onSelectTopic={handleTopicSelect}/>
  <Footer/>
  </div>
  </>
);

export default Home;
