import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './MarkdownEditor.css';
import htmlToMarkdown from 'html-to-markdown';

const MarkdownEditor = ({ onContentChange, content }) => {
  const [editorContent, setEditorContent] = useState(content);

  useEffect(() => {
    setEditorContent(content);
  }, [content]);

  const handleChange = (value) => {
    setEditorContent(value);
    onContentChange(value);
  };

  const convertToMarkdown = () => {
    return htmlToMarkdown.convert(editorContent);
  };

  return (
    <div>
      <ReactQuill value={editorContent} onChange={handleChange} />
      <button onClick={() => navigator.clipboard.writeText(convertToMarkdown())}>
        Copy Markdown to Clipboard
      </button>
    </div>
  );
};

export default MarkdownEditor;
