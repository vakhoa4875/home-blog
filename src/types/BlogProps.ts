export interface BlogProps {
    title: string;
    category: string;
    imageUrl: string;
    url: string;
    imageHeight?: string | 'h-96';
}

export interface BlogSectionProps {
  blogs: BlogProps[];
  header?: BlogSectionTitleProps;
  style?: string;
}

export interface BlogSectionTitleProps {
  title: string;
  subTitle: string;
  url: string;
}