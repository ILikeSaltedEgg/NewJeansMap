import React, { useState, useEffect, useRef } from 'react';
import { getAudioPath } from '../data/cityData';

const CityDetails = ({ city, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Auto-play when city is selected
  useEffect(() => {
    if (city && city.audioFile && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log('Auto-play blocked:', error));
    }

    // Cleanup: pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  }, [city]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickX = e.nativeEvent.offsetX;
      const width = progressBar.offsetWidth;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="city-info">
      <div className="song-card">
        <div className="city-name">
          <span>📍</span>
          <span className="city-text">{city.name}</span>
        </div>
        
        <div className="song-title">
          <span>🎵</span>
          <span>{city.song}</span>
          {isPlaying && <span className="now-playing">♪</span>}
        </div>
        
        <div className="album-info">
          <span>💿</span>
          <span>Album: {city.album}</span>
        </div>

        {/* Audio Player */}
        {city.audioFile && (
          <div className="audio-player">
            <audio
              ref={audioRef}
              src={getAudioPath(city.audioFile)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />
            
            <div className="audio-controls">
              <button 
                className="play-pause-btn"
                onClick={togglePlayPause}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? '⏸' : '▶️'}
              </button>
              
              <div className="audio-info">
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                
                <div 
                  className="progress-bar" 
                  onClick={handleProgressClick}
                  title="Click to seek"
                >
                  <div 
                    className="progress-fill"
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="reason-box">
          <div className="reason-label">💭 Why?</div>
          <div className="reason-text">{city.reason}</div>
        </div>
      </div>
      
      <button 
        className="submit-btn secondary"
        onClick={onClose}
      >
        ✕ Close
      </button>
    </div>
  );
};

export default CityDetails;