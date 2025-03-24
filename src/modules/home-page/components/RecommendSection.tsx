import React from 'react';
import { BlogSectionProps } from '../../../types/BlogProps';
import BlogCard from './BlogCard';

const RecommendSection: React.FC<BlogSectionProps> = ({ blogs }) => {

    const renderBlogCards = () => {
        return blogs.slice(0, 3).map((card, index) => (
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