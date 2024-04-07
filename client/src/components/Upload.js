import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Upload() {
    let navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await fetch('http://localhost:4000/fileupload', {
        method: 'POST',
        body: formData,
      });

      navigate("/welcome");
    } catch (error) {
      console.error('Error uploading file:', error);
      // You can add further handling here, like displaying an error message
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
