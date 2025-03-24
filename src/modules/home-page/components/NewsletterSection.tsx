import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const NewsletterSection: React.FC<{style: string}> = ({style}) => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail(''); // Reset input sau khi submit
    };

    return (
        <div className={`text-center max-w-5xl mx-auto h- title-font ${style}`}>
            <h2 className="text-2xl md:text-3xl font-thin text-gray-900 mb-2">
                Bản tin 30 giây gửi đến email của bạn mỗi ngày với mẹo chăm sóc bản thân và sống bền vững 🌿
            </h2>
            <p className="text-gray-800 mb-6 text-lg!">
                Tham gia cùng 250.000 người đã bắt đầu ngày mới với những điều ý nghĩa!
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center gap-4">
                <InputText
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Địa chỉ email"
                    className="w-full max-w-md p-2 border-none! rounded-full title-font text-lg!"
                />
                <Button
                    label="ĐĂNG KÝ"
                    type="submit"
                    className="rounded-full px-6 py-2 title-font text-lg!"
                />
            </form>
        </div>
    );
};

export default NewsletterSection;