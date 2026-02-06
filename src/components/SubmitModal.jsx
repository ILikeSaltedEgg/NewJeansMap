import React, { useState } from 'react';

const SubmitModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    country: '',
    songName: '',
    album: '',
    reason: '',
    submitterName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      country: '',
      songName: '',
      album: '',
      reason: '',
      submitterName: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">
            🐰 Share Your City's Favorite Song! 🎵
          </h3>
          <p className="modal-subtitle">
            Help us build the ultimate NewJeans fan map!
          </p>
        </div>
        
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input
              className="form-input"
              placeholder="🌆 City, Country (e.g., Seoul, South Korea)"
              value={formData.country}
              onChange={(e) => handleChange('country', e.target.value)}
              required
            />
            
            <input
              className="form-input"
              placeholder="🎵 Favorite NewJeans Song (e.g., Ditto, Super Shy)"
              value={formData.songName}
              onChange={(e) => handleChange('songName', e.target.value)}
              required
            />
            
            <input
              className="form-input"
              placeholder="💿 Album (e.g., Get Up, OMG, New Jeans)"
              value={formData.album}
              onChange={(e) => handleChange('album', e.target.value)}
              required
            />
            
            <textarea
              className="form-input form-textarea"
              placeholder="💭 Why is this song special in your city? Share your story!"
              value={formData.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              rows="3"
              required
            />
            
            <input
              className="form-input"
              placeholder="👤 Your Bunny Nickname (e.g., BunnyLover123)"
              value={formData.submitterName}
              onChange={(e) => handleChange('submitterName', e.target.value)}
              required
            />
            
            <div className="modal-actions">
              <button 
                type="submit" 
                className="submit-btn primary"
              >
                ✓ Submit 🐰
              </button>
              <button 
                type="button" 
                className="submit-btn secondary"
                onClick={onClose}
              >
                ✕ Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitModal;
