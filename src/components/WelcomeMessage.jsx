import React from 'react';

const WelcomeMessage = ({ totalCities }) => {
  const featuredCities = [
    { emoji: '🇰🇷', name: 'Seoul' },
    { emoji: '🇯🇵', name: 'Tokyo' },
    { emoji: '🇵🇭', name: 'Manila' },
    { emoji: '🇹🇭', name: 'Bangkok' },
    { emoji: '🇺🇸', name: 'NYC' },
    { emoji: '🇬🇧', name: 'London' }
  ];

  return (
    <div className="city-info">
      <div className="welcome-section">
        <div className="welcome-icon">🌍✨</div>
        <div className="welcome-title">
          Explore NewJeans Around the World!
        </div>
        <div className="welcome-description">
          Discover what NewJeans songs resonate most in different cities across the globe. 
          From K-pop's birthplace in Seoul to fan communities worldwide, each location has 
          its own favorite track!
        </div>
        
        <div className="instructions">
          <div className="instruction-title">
            🎯 How to Explore:
          </div>
          <div className="instruction-text">
            Click any <strong style={{ color: '#ff0080' }}>pink circle</strong> on the map 
            to see that city's favorite NewJeans song, album, and the story behind why it's loved there.
          </div>
        </div>

        <div className="featured-cities">
          <div className="featured-label">🌟 Featured Cities:</div>
          <div className="cities-grid">
            {featuredCities.map((city, index) => (
              <div key={index} className="city-chip">
                <span className="city-emoji">{city.emoji}</span>
                <span className="city-chip-name">{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="stats-box">
        <div className="stats-icon">📊</div>
        <div className="stats-text">
          <strong>{totalCities}</strong> cities worldwide tracking their favorite NewJeans songs!
        </div>
      </div>

      <div className="fun-facts">
        <div className="fun-fact-title">💡 Did You Know?</div>
        <ul className="fun-fact-list">
          <li>Seoul's favorite is "Ditto" - where it all began! 🏠</li>
          <li>Asia dominates with the most cities represented 🌏</li>
          <li>"Super Shy" and "Hype Boy" are global favorites 🎵</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeMessage;
