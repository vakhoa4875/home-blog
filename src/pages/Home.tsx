import React from 'react';
import BentoBlogShowcase from '../components/BentoBlogShowcase';
import NewsletterSection from '../components/NewsletterSection';
import RecommendSection from '../components/RecommendSection';
import { bentoBlogData } from '../datas/exData';

const Home: React.FC = () => {
  return (
    <>
      <RecommendSection />
      <NewsletterSection />
      <BentoBlogShowcase blogs={bentoBlogData} />
    </>
  );
};

export default Home;