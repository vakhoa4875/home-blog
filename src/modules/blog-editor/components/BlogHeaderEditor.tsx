import { Avatar } from 'primereact/avatar';
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from 'react';

interface BlogHeaderEditorProps {
  title: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  imageUrl: string;
}

const BlogHeaderEditor: React.FC<BlogHeaderEditorProps> = ({
  title,
  authorName,
  authorAvatar,
  date,
  imageUrl,
}) => {
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [value, setValue] = useState<string>(title);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newImageUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded image
      setCurrentImage(newImageUrl); // Update the current image
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/3 relative">
          <img
            src={currentImage}
            alt={value}
            className="w-full h-96 md:h-[28rem] object-cover rounded-lg cursor-pointer"
            onClick={() => document.getElementById('imageUpload')?.click()} // Trigger file input click
          />
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        {/* Nội dung bên phải */}
        <div className="md:w-2/3 flex flex-col justify-center md:mx-8">
          <InputTextarea autoResize
            value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            className="text-2xl md:text-4xl text-gray-900 mb-3 font-title text-left! border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent!"
          />
          <div className="flex items-center gap-3">
            <Avatar
              image={authorAvatar}
              shape="circle"
              size="large"
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

export default BlogHeaderEditor;