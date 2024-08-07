import React from 'react';
import './ReadmePreviewModal.css';
import htmlToMarkdown from 'html-to-markdown';

const ReadmePreviewModal = ({ content, onClose, sharedUrl }) => {
  const markdownContent = htmlToMarkdown.convert(content);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Preview</h2>
        <pre>{markdownContent}</pre>
        <button onClick={handleCopy}>Copy to Clipboard</button>
        <button onClick={onClose}>Close</button>
        {sharedUrl && (
          <div>
            <p>Share this link: <a href={sharedUrl}>{sharedUrl}</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadmePreviewModal;