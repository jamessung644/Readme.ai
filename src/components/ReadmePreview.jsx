import React from 'react';

const ReadmePreview = ({ formData }) => {
  return (
    <div>
      <h2>Preview</h2>
      <pre>
        {`
# ${formData.username}

## Bio
${formData.bio}

## Projects
${formData.projects}

## Tech Stack
${formData.techStack}

## Contact
${formData.contact}
        `}
      </pre>
    </div>
  );
};

export default ReadmePreview;
