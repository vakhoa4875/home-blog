import React from 'react';
import NewsletterSection from '../components/NewsletterSection';
import SectionRecommend from '../components/SectionRecommend';

const Home: React.FC = () => {
  return (
    <>
      <SectionRecommend />
      <NewsletterSection />
    </>
  );
};

export default Home;