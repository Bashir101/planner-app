import React, { useState } from 'react';

const PhotoWidget = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-widget">
      <h2>Photo Widget</h2>
      {selectedPhoto ? (
        <div className="selected-photo">
          <img src={selectedPhoto} alt="Selected" />
        </div>
      ) : (
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <p>Select a photo</p>
        </div>
      )}
    </div>
  );
};

export default PhotoWidget;
