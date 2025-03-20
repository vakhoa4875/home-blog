import { Card } from 'primereact/card';
import React from 'react';
import { Link } from 'react-router-dom';

interface RecommendedBlogProps {
    title: string;
    category: string;
    imageUrl: string;
    url: string;
}
const RecommendedBlog: React.FC<RecommendedBlogProps> = ({ title, category, imageUrl, url }) => {
    const header = (
        <img
            alt={title}
            src={imageUrl}
            className="w-full h-96 object-cover rounded-lg" // Increased height to make the image taller
        />
    );

    return (
        <Link to={url}>
            <Card header={header} className="max-w-sm mx-auto rounded-lg overflow-hidden bg-transparent!">
                <div className="text-center">
                    <p className="text-gray-900 mb-2 text-center hover:underline">{title}</p>
                    <h2 className="text-lg text-gray-700 italic hover:underline">{category}</h2>
                </div>
            </Card>
        </Link>
    );
};

export default RecommendedBlog;