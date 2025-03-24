import React from 'react';
import { Avatar } from 'primereact/avatar';

interface BlogHeaderSectionProps {
  title: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  imageUrl: string;
}

const BlogHeaderSection: React.FC<BlogHeaderSectionProps> = ({
  title,
  authorName,
  authorAvatar,
  date,
  imageUrl,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/3">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-96 md:h-[28rem] object-cover rounded-lg"
          />
        </div>
        {/* Nội dung bên phải */}
        <div className="md:w-2/3 flex flex-col justify-center md:mx-8">
          <div className="text-2xl md:text-4xl text-gray-900 mb-3 font-title text-left!">
            {title}
          </div>
          <div className="flex items-center gap-3">
            <Avatar
              image={authorAvatar}
              shape="circle"
              size="large"
              className="border border-gray-300"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Viết bởi {authorName}
              </p>
              <p className="text-sm text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeaderSection;