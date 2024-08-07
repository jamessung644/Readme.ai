import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MarkdownEditor from './components/MarkdownEditor';
import ReadmePreviewModal from './components/ReadmePreviewModal';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sharedUrl, setSharedUrl] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedContent = params.get('content');
    if (encodedContent) {
      const decodedContent = decodeURIComponent(atob(encodedContent));
      setContent(decodedContent);
    }
  }, [location.search]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleShareClick = () => {
    const encodedContent = btoa(encodeURIComponent(content));
    // Update the URL with the encoded content
    const newUrl = `${window.location.origin}${window.location.pathname}?content=${encodedContent}`;
    setSharedUrl(newUrl); 
    navigate(newUrl, { replace: true });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>GitHub README.md Generator</h1>
      <Routes>
        <Route path="/" element={<MarkdownEditor onContentChange={handleContentChange} content={content} />} />
      </Routes>
      <button onClick={handleShareClick}>Share</button>
      {isModalOpen && (
        <ReadmePreviewModal content={content} onClose={handleCloseModal} sharedUrl={sharedUrl} />
      )}
    </div>
  );
}

export default App;