import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cityData = [

  { name: "New York, USA", coords: [40.7128, -74.0060], song: "Super Shy", album: "Get Up", reason: "NYC Bunnies love the energy!" },
  { name: "Los Angeles, USA", coords: [34.0522, -118.2437], song: "Hype Boy", album: "New Jeans", reason: "West Coast vibes" },
  { name: "Toronto, Canada", coords: [43.6532, -79.3832], song: "OMG", album: "OMG", reason: "Winter anthem here!" },
  { name: "Mexico City, Mexico", coords: [19.4326, -99.1332], song: "Attention", album: "New Jeans", reason: "Dance challenge went viral!" },

  { name: "São Paulo, Brazil", coords: [-23.5505, -46.6333], song: "Hype Boy", album: "New Jeans", reason: "TikTok sensation!" },
  { name: "Buenos Aires, Argentina", coords: [-34.6037, -58.3816], song: "Super Shy", album: "Get Up", reason: "Radio favorite" },
  { name: "Bogotá, Colombia", coords: [4.7110, -74.0721], song: "Attention", album: "New Jeans", reason: "Colombian Bunnies unite!" },
  
  { name: "London, UK", coords: [51.5074, -0.1278], song: "Ditto", album: "OMG", reason: "That nostalgic MV aesthetic" },
  { name: "Paris, France", coords: [48.8566, 2.3522], song: "Attention", album: "New Jeans", reason: "Très chic!" },
  { name: "Berlin, Germany", coords: [52.5200, 13.4050], song: "Cool With You", album: "Get Up", reason: "Nighttime city vibes" },
  { name: "Madrid, Spain", coords: [40.4168, -3.7038], song: "New Jeans", album: "New Jeans", reason: "Summer feeling!" },
  { name: "Rome, Italy", coords: [41.9028, 12.4964], song: "ETA", album: "Get Up", reason: "Dramatic production" },
  { name: "Amsterdam, Netherlands", coords: [52.3676, 4.9041], song: "OMG", album: "OMG", reason: "Chart topper!" },
  { name: "Stockholm, Sweden", coords: [59.3293, 18.0686], song: "Super Shy", album: "Get Up", reason: "Nordic K-pop love" },
  
  { name: "Seoul, South Korea 🇰🇷", coords: [37.5665, 126.9780], song: "Ditto", album: "OMG", reason: "HOME OF NEWJEANS! 🐰💙" },
  { name: "Tokyo, Japan", coords: [35.6762, 139.6503], song: "OMG", album: "OMG", reason: "Massive on Japanese charts!" },
  { name: "Osaka, Japan", coords: [34.6937, 135.5023], song: "Super Shy", album: "Get Up", reason: "Kansai loves it!" },
  { name: "Beijing, China", coords: [39.9042, 116.4074], song: "Hype Boy", album: "New Jeans", reason: "Most streamed" },
  { name: "Shanghai, China", coords: [31.2304, 121.4737], song: "Attention", album: "New Jeans", reason: "City pop vibes" },
  { name: "Bangkok, Thailand", coords: [13.7563, 100.5018], song: "Super Shy", album: "Get Up", reason: "Thai Bunnies love it!" },
  { name: "Manila, Philippines", coords: [14.5995, 120.9842], song: "Attention", album: "New Jeans", reason: "Debut song hits hard!" },
  { name: "Jakarta, Indonesia", coords: [-6.2088, 106.8456], song: "Hype Boy", album: "New Jeans", reason: "Huge in Jakarta!" },
  { name: "Singapore", coords: [1.3521, 103.8198], song: "Cool With You", album: "Get Up", reason: "City state anthem" },
  { name: "Kuala Lumpur, Malaysia", coords: [3.1390, 101.6869], song: "OMG", album: "OMG", reason: "Malaysian Bunnies!" },
  { name: "Ho Chi Minh City, Vietnam", coords: [10.8231, 106.6297], song: "Attention", album: "New Jeans", reason: "Vietnamese fans" },
  { name: "Taipei, Taiwan", coords: [25.0330, 121.5654], song: "Ditto", album: "OMG", reason: "Taiwan favorite" },
  { name: "Hong Kong", coords: [22.3193, 114.1694], song: "Super Shy", album: "Get Up", reason: "HK Bunnies unite!" },
  { name: "Mumbai, India", coords: [19.0760, 72.8777], song: "ASAP", album: "Get Up", reason: "Upbeat energy!" },
  { name: "Delhi, India", coords: [28.7041, 77.1025], song: "Hype Boy", album: "New Jeans", reason: "North India fav" },
  
  { name: "Sydney, Australia", coords: [-33.8688, 151.2093], song: "Super Shy", album: "Get Up", reason: "Summer anthem!" },
  { name: "Melbourne, Australia", coords: [-37.8136, 144.9631], song: "Cool With You", album: "Get Up", reason: "Melbourne vibes" },
  { name: "Auckland, New Zealand", coords: [-36.8485, 174.7633], song: "Ditto", album: "OMG", reason: "Kiwi Bunnies" },
  
  { name: "Dubai, UAE", coords: [25.2048, 55.2708], song: "OMG", album: "OMG", reason: "Dubai loves NewJeans" },
  { name: "Istanbul, Turkey", coords: [41.0082, 28.9784], song: "Super Shy", album: "Get Up", reason: "Bridge between worlds" },
  
  { name: "Cape Town, South Africa", coords: [-33.9249, 18.4241], song: "Attention", album: "New Jeans", reason: "Breaking into the market" },
];

const NewJeansMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    country: '',
    songName: '',
    album: '',
    reason: '',
    submitterName: ''
  });
  
  const [position, setPosition] = useState({ x: window.innerWidth - 420, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('.drag-handle')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const newSubmission = await response.json();
        setSubmissions([...submissions, newSubmission]);
        setFormData({ country: '', songName: '', album: '', reason: '', submitterName: '' });
        setShowSubmitForm(false);
        alert('Thank you for your submission! 🐰');
      }
    } catch (error) {
      console.log('Demo mode - submission saved locally');
      setSubmissions([...submissions, { ...formData, id: Date.now() }]);
      setFormData({ country: '', songName: '', album: '', reason: '', submitterName: '' });
      setShowSubmitForm(false);
      alert('Submission saved (demo mode)! 🎵');
    }
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      fontFamily: "'Press Start 2P', monospace",
      background: '#1a1a2e'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .leaflet-container {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .leaflet-tile {
          image-rendering: pixelated !important;
        }
        
        .info-box {
          position: absolute;
          background: rgba(26, 26, 46, 0.98);
          padding: 0;
          border: 4px solid #00ff88;
          border-radius: 8px;
          z-index: 1000;
          min-width: 340px;
          max-width: 380px;
          box-shadow: 12px 12px 0 rgba(0, 255, 136, 0.4), 0 0 40px rgba(0, 255, 136, 0.2);
          cursor: move;
          transition: box-shadow 0.3s;
        }
        
        .info-box:hover {
          box-shadow: 16px 16px 0 rgba(0, 255, 136, 0.5), 0 0 50px rgba(0, 255, 136, 0.3);
        }
        
        .drag-handle {
          background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
          padding: 12px 20px;
          cursor: grab;
          border-radius: 4px 4px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
        }
        
        .drag-handle:active {
          cursor: grabbing;
          background: linear-gradient(135deg, #00cc6a 0%, #00aa55 100%);
        }
        
        .info-content {
          padding: 20px;
        }
        
        .title {
          color: #1a1a2e;
          font-size: 10px;
          text-align: center;
          text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
          font-weight: bold;
        }
        
        .bunny-icon {
          font-size: 14px;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .song-card {
          background: rgba(255, 0, 128, 0.1);
          border: 2px solid #ff0080;
          border-radius: 8px;
          padding: 15px;
          margin: 15px 0;
          box-shadow: 0 4px 10px rgba(255, 0, 128, 0.2);
        }
        
        .city-info {
          color: #fff;
          font-size: 8px;
          line-height: 1.8;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #ff0080 0%, #cc0066 100%);
          color: #fff;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
          font-family: 'Press Start 2P';
          font-size: 8px;
          margin-top: 10px;
          box-shadow: 0 4px 8px rgba(255, 0, 128, 0.3);
          width: 100%;
          transition: all 0.3s ease;
          border-radius: 6px;
        }
        
        .submit-btn:hover {
          background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 255, 136, 0.4);
        }
        
        .form-input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          background: rgba(15, 52, 96, 0.8);
          border: 2px solid #00ff88;
          color: #fff;
          font-family: 'Press Start 2P';
          font-size: 8px;
          box-sizing: border-box;
          border-radius: 6px;
          transition: all 0.3s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #ff0080;
          background: rgba(15, 52, 96, 1);
          box-shadow: 0 0 15px rgba(255, 0, 128, 0.3);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 0;
          border: 4px solid #ff0080;
          z-index: 2000;
          box-shadow: 0 20px 60px rgba(255, 0, 128, 0.4), 0 0 80px rgba(0, 255, 136, 0.2);
          max-width: 500px;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .modal-header {
          background: linear-gradient(135deg, #ff0080 0%, #cc0066 100%);
          padding: 20px;
          text-align: center;
        }
        
        .modal-content {
          padding: 30px;
        }
        
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1999;
        }

        .leaflet-popup-content-wrapper {
          background: #1a1a2e;
          color: #00ff88;
          border: 3px solid #ff0080;
          border-radius: 0;
          font-family: 'Press Start 2P';
          box-shadow: 6px 6px 0 rgba(255, 0, 128, 0.4);
        }

        .leaflet-popup-content {
          margin: 15px;
          font-size: 8px;
          line-height: 1.6;
        }

        .leaflet-popup-tip {
          background: #ff0080;
        }

        .city-marker {
          cursor: pointer;
          transition: all 0.2s;
        }

        .city-marker:hover {
          transform: scale(1.3);
        }
      `}</style>

      <div 
        className="info-box" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="drag-handle">
          <div className="title">
            <span className="bunny-icon">🐰</span> NEWJEANS WORLD MAP <span className="bunny-icon">🎧</span>
          </div>
          <div style={{ fontSize: '8px', color: '#1a1a2e', opacity: 0.7 }}>
            ↔️ Drag me!
          </div>
        </div>
        
        <div className="info-content">
          {selectedCity ? (
            <div className="city-info">
              <div className="song-card">
                <div style={{ color: '#00ff88', marginBottom: '12px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📍</span>
                  <span style={{ flex: 1 }}>{selectedCity.name}</span>
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  marginBottom: '8px', 
                  color: '#fff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🎵</span>
                  <span>{selectedCity.song}</span>
                </div>
                <div style={{ 
                  fontSize: '7px', 
                  marginTop: '8px', 
                  color: '#ff0080',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>💿</span>
                  <span>Album: {selectedCity.album}</span>
                </div>
                <div style={{ 
                  fontSize: '7px', 
                  marginTop: '12px', 
                  padding: '10px',
                  background: 'rgba(0, 255, 136, 0.05)',
                  borderRadius: '4px',
                  color: '#aaa', 
                  lineHeight: '1.6',
                  borderLeft: '3px solid #00ff88'
                }}>
                  <div style={{ color: '#00ff88', marginBottom: '5px' }}>💭 Why?</div>
                  {selectedCity.reason}
                </div>
              </div>
              <button 
                style={{ 
                  marginTop: '10px', 
                  background: 'linear-gradient(135deg, #666 0%, #444 100%)',
                  fontSize: '7px',
                  padding: '10px',
                  border: '2px solid #888',
                  borderRadius: '4px'
                }}
                className="submit-btn"
                onClick={() => setSelectedCity(null)}
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <div className="city-info">
              <div style={{ 
                fontSize: '7px', 
                lineHeight: '2', 
                marginBottom: '15px',
                textAlign: 'center',
                padding: '15px',
                background: 'rgba(0, 255, 136, 0.05)',
                borderRadius: '8px',
                border: '2px dashed #00ff88'
              }}>
                <div style={{ fontSize: '20px', marginBottom: '10px' }}>🎯</div>
                <div style={{ color: '#00ff88', marginBottom: '8px', fontSize: '8px' }}>
                  Click any pink circle!
                </div>
                <div style={{ color: '#aaa', marginBottom: '10px' }}>
                  Discover favorite NewJeans songs from cities around the world
                </div>
                <div style={{ fontSize: '6px', color: '#ff0080', marginTop: '10px' }}>
                  🌟 Try: Seoul 🇰🇷 • Tokyo • Manila • Bangkok • NYC • London
                </div>
              </div>
              <div style={{ 
                textAlign: 'center', 
                padding: '10px',
                background: 'rgba(255, 0, 128, 0.1)',
                borderRadius: '6px',
                fontSize: '8px',
                color: '#fff'
              }}>
                📊 <strong>{cityData.length}</strong> cities worldwide!
              </div>
            </div>
          )}
          
          <button 
            className="submit-btn"
            onClick={() => setShowSubmitForm(true)}
            style={{
              background: 'linear-gradient(135deg, #ff0080 0%, #cc0066 100%)',
              borderRadius: '6px',
              border: '2px solid #ff0080',
              padding: '12px'
            }}
          >
            ➕ Submit Your City! 🎵
          </button>
          
          {submissions.length > 0 && (
            <div style={{ 
              marginTop: '15px', 
              fontSize: '6px', 
              color: '#00ff88',
              textAlign: 'center',
              padding: '8px',
              background: 'rgba(0, 255, 136, 0.1)',
              borderRadius: '4px'
            }}>
              ✨ {submissions.length} community submission(s)
            </div>
          )}
        </div>
      </div>

      {showSubmitForm && (
        <>
          <div className="overlay" onClick={() => setShowSubmitForm(false)} />
          <div className="modal">
            <div className="modal-header">
              <h3 style={{ color: '#fff', fontSize: '11px', margin: 0, textShadow: '2px 2px rgba(0,0,0,0.3)' }}>
                🐰 Share Your City's Fav Song! 🎵
              </h3>
            </div>
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  placeholder="🌆 City Name (e.g., Seoul, Tokyo)"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                />
                <input
                  className="form-input"
                  placeholder="🎵 Favorite NewJeans Song"
                  value={formData.songName}
                  onChange={(e) => setFormData({...formData, songName: e.target.value})}
                  required
                />
                <input
                  className="form-input"
                  placeholder="💿 Album (e.g., Get Up, OMG)"
                  value={formData.album}
                  onChange={(e) => setFormData({...formData, album: e.target.value})}
                  required
                />
                <input
                  className="form-input"
                  placeholder="💭 Why this song? (reason)"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  required
                />
                <input
                  className="form-input"
                  placeholder="👤 Your Name (Bunny nickname!)"
                  value={formData.submitterName}
                  onChange={(e) => setFormData({...formData, submitterName: e.target.value})}
                  required
                />
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    style={{
                      background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                      border: '2px solid #00ff88'
                    }}
                  >
                  
                  </button>
                  <button 
                    type="button" 
                    className="submit-btn" 
                    style={{ 
                      background: 'linear-gradient(135deg, #666 0%, #444 100%)',
                      border: '2px solid #888'
                    }}
                    onClick={() => setShowSubmitForm(false)}
                  >
                    ✕ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        minZoom={2}
        maxZoom={8}
        maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
        />
        
        {cityData.map((city, index) => (
          <CircleMarker
            key={index}
            center={city.coords}
            radius={8}
            pathOptions={{
              fillColor: '#ff0080',
              fillOpacity: 0.8,
              color: '#00ff88',
              weight: 2
            }}
            eventHandlers={{
              click: () => {
                setSelectedCity(city);
                console.log(`Clicked: ${city.name} - Song: ${city.song}`);
              }
            }}
          >
            <Popup>
              <div style={{ color: '#00ff88', fontWeight: 'bold' }}>
                📍 {city.name}
              </div>
              <div style={{ color: '#fff', marginTop: '5px' }}>
                🎵 {city.song}
              </div>
              <div style={{ color: '#ff0080', marginTop: '3px', fontSize: '7px' }}>
                💿 {city.album}
              </div>
              <div style={{ color: '#ccc', marginTop: '5px', fontSize: '6px' }}>
                {city.reason}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};


export default NewJeansMap;



