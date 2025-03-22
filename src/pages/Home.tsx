import React from 'react';
import BentoBlogShowcase from '../components/BentoBlogShowcase';
import CarouselSection from '../components/CarouselSection';
import NewsletterSection from '../components/NewsletterSection';
import RecommendSection from '../components/RecommendSection';
import { bentoBlogData, carouselData, carouselTitles, recommendData } from '../datas/exData';

const Home: React.FC = () => {
  return (
    <>
      <RecommendSection blogs={recommendData} header={carouselTitles[0]} />
      <NewsletterSection style='md:py-12 py-8 my-8' />
      <BentoBlogShowcase blogs={bentoBlogData} />
      <CarouselSection blogs={carouselData} header={carouselTitles[1]} />
      <CarouselSection blogs={carouselData} header={carouselTitles[2]} style='md:p-16 p-10 bg-white rounded-lg' />
      <CarouselSection blogs={carouselData} header={carouselTitles[3]} />
      <CarouselSection blogs={carouselData} header={carouselTitles[4]} style='md:p-16 p-10 bg-white rounded-lg' />
    </>
  );
};

export default Home;