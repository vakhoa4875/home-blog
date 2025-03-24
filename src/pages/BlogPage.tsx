import React from 'react';
import BlogHeaderSection from '../modules/blog-page/components/BlogHeaderSection';
import { recommendData } from '../datas/exData';

const BlogPage: React.FC = () => {
    return (
        <div className="p-4">
            <BlogHeaderSection
                title="Kem chống nắng Daygleamer của Well People có phải là sản phẩm chăm sóc da không thể thiếu? Chúng tôi đánh giá"
                authorName="Kate Arceo"
                authorAvatar="/vite.svg"
                date="21 tháng 3, 2025"
                imageUrl={recommendData[2].imageUrl}
            />
        </div>
    );
};

export default BlogPage;