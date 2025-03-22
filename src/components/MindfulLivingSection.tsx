import { Carousel } from 'primereact/carousel';
import React from 'react';
import { BlogProps, BlogSectionProps } from '../types/BlogProps';
import BlogCard from './BlogCard';
import CarouselSectionHeader from './CarouselSectionHeader';

const MindfulLivingSection: React.FC<BlogSectionProps> = ({ blogs, header }) => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '640px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const blogTemplate = (blog: BlogProps) => {
        return (
            <div className="p-2">
                <BlogCard
                    title={blog.title}
                    category={blog.category}
                    imageUrl={blog.imageUrl}
                    imageHeight={blog.imageHeight}
                    url={blog.url}
                />
            </div>
        );
    };

    return (
        <div className="p-4">
            <CarouselSectionHeader
                title={header?.title ?? 'No title'}
                subTitle={header?.subTitle ?? 'No subtitle'}
                url={header?.url ?? '#'}
            />
            <Carousel
                value={blogs}
                numVisible={4}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={blogTemplate}
                circular
                showIndicators={false}
            />
        </div>
    );
};

export default MindfulLivingSection;