import React from 'react';
import BentoBlogShowcase from '../components/BentoBlogShowcase';
import NewsletterSection from '../components/NewsletterSection';
import SectionRecommend from '../components/SectionRecommend';
import { bentoBlogData } from '../datas/exData';

const Home: React.FC = () => {
  return (
    <>
      <SectionRecommend />
      <NewsletterSection />
      <BentoBlogShowcase blogs={bentoBlogData} />
    </>
  );
};

export default Home;