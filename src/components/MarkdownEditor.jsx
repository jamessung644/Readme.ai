import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './MarkdownEditor.css';
import htmlToMarkdown from 'html-to-markdown';

const MarkdownEditor = ({ onContentChange }) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
    onContentChange(value);
  };

  const convertToMarkdown = () => {
    return htmlToMarkdown.convert(content);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
      <button onClick={() => navigator.clipboard.writeText(convertToMarkdown())}>
        Copy Markdown to Clipboard
      </button>
    </div>
  );
};

export default MarkdownEditor;
