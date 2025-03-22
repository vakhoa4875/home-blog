import { Link } from "react-router-dom";
import { BlogSectionTitleProps } from "../types/BlogProps";

const CarouselSectionHeader: React.FC<BlogSectionTitleProps> = ({ title, subTitle, url }) => {
    return (
        
        <div className="relative mb-4">
        <div className="flex flex-col justify-center items-center">
            <p className="text-sm!">{subTitle}</p>
            <h2 className="font-title mb-2!">{title}</h2>
        </div>
        <Link to={url}
            className="hover:underline absolute right-0 bottom-0 p-2!">
            Xem tất cả
        </Link>
    </div>
    );
};

export default CarouselSectionHeader;