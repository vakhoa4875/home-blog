import React from 'react';

interface BlogContentDisplayProps {
  content: string;
}

const BlogContentDisplay: React.FC<BlogContentDisplayProps> = ({ content }) => {
  return (
    <div
      className="prose mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContentDisplay;