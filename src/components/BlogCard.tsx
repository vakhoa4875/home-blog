import { Card } from 'primereact/card';
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogProps } from '../types/BlogProps';

const BlogCard: React.FC<BlogProps> = ({ title, category, imageUrl, url, imageHeight }) => {
    const header = (
        <img
            alt={title}
            src={imageUrl}
            className={`w-full object-cover rounded-lg ${imageHeight ?? 'h-72 md:h-[28rem]'}`}
        />
    );

    return (
        <Link to={url}>
            <Card header={header} className="mx-auto rounded-lg overflow-hidden bg-transparent!">
                <div className="text-center">
                    <p className="text-gray-900 mb-2 text-center">{title}</p>
                    <h2 className="text-lg text-gray-700 italic">{category}</h2>
                </div>
            </Card>
        </Link>
    );
};

export default BlogCard;