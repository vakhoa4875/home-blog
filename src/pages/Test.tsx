import { Splitter, SplitterPanel } from 'primereact/splitter';
import React, { useState } from 'react';
import { recommendData } from '../datas/exData';
import BlogContentEditor from '../modules/blog-editor/components/BlogContentEditor';
import BlogContentDisplay from '../modules/blog-page/components/BlogContentDisplay';
import BlogHeaderSection from '../modules/blog-page/components/BlogHeaderSection';

const Test: React.FC = () => {
    const [content, setContent] = useState<string>(
        '<h2>Giới thiệu</h2><p>Đây là nội dung bài viết mẫu. Bạn có thể chỉnh sửa bằng editor bên dưới.</p>'
    );

    return (
        <div>
            <Splitter>
                <SplitterPanel className="p-3">
                    <div className="relative">
                        <h3 className="text-xl font-semibold mb-4">Chỉnh sửa nội dung</h3>
                        <BlogContentEditor initialValue={content} onChange={setContent} />
                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex items-center justify-center flex-col p-3 container-inline-size">
                    <BlogHeaderSection
                        title="Kem chống nắng Daygleamer của Well People có phải là sản phẩm chăm sóc da không thể thiếu? Chúng tôi đánh giá"
                        authorName="Kate Arceo"
                        authorAvatar="/vite.svg"
                        date="21 tháng 3, 2025"
                        imageUrl={recommendData[2].imageUrl}
                    />
                    <BlogContentDisplay content={content} />
                </SplitterPanel>
            </Splitter>
        </div>
    );
};

export default Test;