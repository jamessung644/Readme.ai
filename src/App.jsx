import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MarkdownEditor from './components/MarkdownEditor';
import ReadmePreviewModal from './components/ReadmePreviewModal';

function App() {
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleCopyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>GitHub README.md Generator</h1>
      <Routes>
        <Route path="/" element={<MarkdownEditor onContentChange={handleContentChange} />} />
      </Routes>
      <button onClick={handleCopyClick}>Copy to Clipboard</button>
      {isModalOpen && (
        <ReadmePreviewModal content={content} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
