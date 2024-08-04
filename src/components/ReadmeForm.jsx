import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { encodeParams, decodeParams } from '../utils/utils';

const ReadmeForm = ({ onInputChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    projects: '',
    techStack: '',
    contact: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = decodeParams(params.toString());
    if (data) {
      setFormData(data);
      onInputChange(data);
    }
  }, [location.search, onInputChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
    onInputChange(updatedFormData);
    navigate(`?${encodeParams(updatedFormData)}`);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Bio:
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <br />
      <label>
        Projects:
        <textarea name="projects" value={formData.projects} onChange={handleChange} />
      </label>
      <br />
      <label>
        Tech Stack:
        <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} />
      </label>
      <br />
      <label>
        Contact:
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ReadmeForm;
