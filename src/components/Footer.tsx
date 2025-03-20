import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--secondary-color)] text-[var(--background-color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className='flex gap-2 font-semibold'>
            <Link to="/about">
              Giới thiệu
            </Link>·
            <Link to="/contact">
              Liên hệ
            </Link>·
            <Link to="/search">
              Tìm kiếm
            </Link>
          </div>
          <div className='flex gap-3 text-right'>
            <Link to="/instagram">
              <i className="fi fi-brands-instagram"></i>
            </Link>
            <Link to="/twitter">
              <i className="fi fi-brands-twitter-alt"></i>
            </Link>
            <Link to="/facebook">
              <i className="fi fi-brands-facebook"></i>
            </Link>
            <Link to="/facebook">
              <i className="fi fi-brands-discord"></i>
            </Link>
          </div>
        </div>
        <div className="mt-4 italic text-sm">
          © {new Date().getFullYear()} Home Blog. Mọi quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;