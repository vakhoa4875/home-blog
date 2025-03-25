import React from 'react';
import { recommendData } from '../datas/exData';
import BlogHeaderEditor from '../modules/blog-editor/components/BlogHeaderEditor';
import BlogContentDisplay from '../modules/blog-page/components/BlogContentDisplay';

const BlogEditor: React.FC = () => {
    return (
        <>
            <BlogHeaderEditor
                title="Kem chống nắng Daygleamer của Well People có phải là sản phẩm chăm sóc da không thể thiếu? Chúng tôi đánh giá"
                authorName="Kate Arceo"
                authorAvatar="/vite.svg"
                date="21 tháng 3, 2025"
                imageUrl={recommendData[2].imageUrl} />
            <BlogContentDisplay content={recommendData[2].title} />
        </>
    );
};

export default BlogEditor;