import { Carousel } from 'primereact/carousel';
import React from 'react';
import { BlogProps, BlogSectionProps } from '../../../types/BlogProps';
import BlogCard from './BlogCard';
import CarouselSectionHeader from './CarouselSectionHeader';

const CarouselSection: React.FC<BlogSectionProps> = ({ blogs, header, style }) => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: style ? 3 : 4,
            numScroll: 1,
        },
        {
            breakpoint: '768px',
            numVisible: style ? 2 : 3,
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
        <div className={style ?? 'my-8'}>
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

export default CarouselSection;