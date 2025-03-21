import React, { useState } from 'react';
import { cardData } from '../datas/exData';
import { BlogProps } from '../types/BlogProps';
import BlogCard from './BlogCard';

const RecommendSection: React.FC = () => {
    const [blogDatas, setBlogDatas] = useState<BlogProps[]>(cardData);

    const renderBlogCards = () => {
        return blogDatas.map((card, index) => (
            <BlogCard
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

export default RecommendSection;