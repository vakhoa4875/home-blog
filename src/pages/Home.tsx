import React from 'react';
import BentoBlogShowcase from '../components/BentoBlogShowcase';
import MindfulLivingSection from '../components/MindfulLivingSection';
import NewsletterSection from '../components/NewsletterSection';
import RecommendSection from '../components/RecommendSection';
import { bentoBlogData, carouselData, carouselTitles, recommendData } from '../datas/exData';

const Home: React.FC = () => {
  return (
    <>
      <RecommendSection blogs={recommendData} header={carouselTitles[0]} />
      <NewsletterSection />
      <BentoBlogShowcase blogs={bentoBlogData} />
      <MindfulLivingSection blogs={carouselData} header={carouselTitles[1]} />
    </>
  );
};

export default Home;