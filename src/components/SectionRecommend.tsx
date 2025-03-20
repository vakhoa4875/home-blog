import React from 'react';
import RecommendedBlog from './RecommendedBlog';

const SectionRecommend: React.FC = () => {
    const cardData = [
        {
            title: '10 Bedside Tables And Nightstands For A Nontoxic Bedroom',
            category: 'Decor',
            imageUrl: 'https://www.thegoodtrade.com/wp-content/uploads/2025/03/AVOCADO_MALIBU_WOOD_NIGHTSTAND_MAPLE_6639_2000w_800x-576x576.webp',
            url: '/blog',
        },
        {
            title: 'A Therapist Explains How To Regulate Your Nervous System When You’re Overwhelme ',
            category: 'Self',
            imageUrl: 'https://www.thegoodtrade.com/wp-content/uploads/2025/03/keren-levand-UyfAD6vaoDA-unsplash-576x862.jpg',
            url: '/blog',
        },
        {
            title: 'Why The Spring Equinox is The Best Time to Go After Your Goals ',
            category: 'Self',
            imageUrl: 'https://www.thegoodtrade.com/wp-content/uploads/2025/03/masaaki-komori-Z8TQv3yKQd4-unsplash-576x863.jpg',
            url: '/blog',
        },
    ];

    const renderBlogCards = () => {
        return cardData.map((card, index) => (
            <RecommendedBlog
                key={index}
                title={card.title}
                category={card.category}
                imageUrl={card.imageUrl}
                url={card.url}
            />
        ));
    };

    return (
        <section className="bg-[var(--background-color)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderBlogCards()}
                </div>
            </div>
        </section>
    );
};

export default SectionRecommend;