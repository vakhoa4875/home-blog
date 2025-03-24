import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Style mặc định

interface BlogContentEditorProps {
  initialValue: string;
  onChange: (content: string) => void;
}

const BlogContentEditor: React.FC<BlogContentEditorProps> = ({ initialValue, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={initialValue}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      }}
      formats={[
        'header',
        'bold',
        'italic',
        'underline',
        'image',
        'link',
        'list',
        'bullet',
      ]}
      className="bg-white"
    />
  );
};

export default BlogContentEditor;