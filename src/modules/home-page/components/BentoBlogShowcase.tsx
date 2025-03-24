import React from 'react';
import { BlogProps } from '../../../types/BlogProps';
import BlogCard from './BlogCard';

interface BentoBlogShowcaseProps {
    blogs: BlogProps[];
}

const BentoBlogShowcase: React.FC<BentoBlogShowcaseProps> = ({ blogs }) => {
    if (blogs.length < 3) {
        return <div>Ít nhất cần 3 bài viết để hiển thị!</div>;
    }

    return (
        <div className="my-8">
            <h2 className="font-title">
                Xu hướng tuần này
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BlogCard
                    title={blogs[0].title}
                    category={blogs[0].category}
                    imageUrl={blogs[0].imageUrl}
                    url={blogs[0].url}
                    imageHeight={blogs[0].imageHeight}
                />
                <div className="flex flex-col">
                    <BlogCard
                        title={blogs[1].title}
                        category={blogs[1].category}
                        imageUrl={blogs[1].imageUrl}
                        url={blogs[1].url}
                        imageHeight={blogs[1].imageHeight}
                    />
                    <BlogCard
                        title={blogs[2].title}
                        category={blogs[2].category}
                        imageUrl={blogs[2].imageUrl}
                        url={blogs[2].url}
                        imageHeight={blogs[2].imageHeight}
                    />
                </div>
            </div>
        </div>
    );
};

export default BentoBlogShowcase;