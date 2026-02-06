import React from 'react';
import { Popup } from 'react-leaflet';

const MapPopup = ({ city }) => {
  return (
    <Popup>
      <div className="popup-content">
        <div className="popup-city">
          📍 {city.name}
        </div>
        <div className="popup-song">
          🎵 {city.song}
        </div>
        <div className="popup-album">
          💿 {city.album}
        </div>
        <div className="popup-reason">
          {city.reason}
        </div>
      </div>
    </Popup>
  );
};

export default MapPopup;
