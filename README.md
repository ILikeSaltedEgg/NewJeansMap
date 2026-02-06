# 🐰 NewJeans World Map 🎧

<div align="center">

![NewJeans](https://img.shields.io/badge/NewJeans-Fan_Project-ff0080?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-00ff88?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)

**An interactive world map showcasing favorite NewJeans songs from cities around the globe!**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

NewJeans World Map is a fan-made interactive web application that displays which NewJeans songs are most loved in different cities worldwide. Click on pink markers scattered across the world to discover local favorites, complete with album details and reasons why fans love them!

Built with love by Bunnies, for Bunnies 🐰💙

---

## ✨ Features

### 🎯 Interactive Map
- **36+ Cities Worldwide** - Pre-loaded with favorite songs from major cities
- **Clickable Markers** - Pink circular markers on the map
- **Two Display Modes** - Click shows info in both popup AND draggable panel
- **Smooth Navigation** - Pan, zoom, and explore the world

### 🎨 Beautiful Design
- **Pixelated Retro Aesthetic** - 8-bit style with modern gradients
- **Draggable Info Box** - Move the info panel anywhere on screen
- **Animated Elements** - Bouncing bunnies, glowing buttons, smooth transitions
- **Responsive Layout** - Works on desktop and mobile

### 🎵 Song Information
Each city displays:
- 📍 City name and location
- 🎵 Favorite NewJeans song
- 💿 Album name
- 💭 Reason why it's loved

### 🌐 Community Features
- **Submit Your City** - Add your city's favorite song
- **Backend API** - Store and retrieve submissions
- **Real-time Updates** - See community contributions

---

## 🚀 Installation

### Prerequisites

Before you begin, make sure you have:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

Check your versions:
```bash
node --version
npm --version
```

### Backend Setup

```bash
# 1. Create backend folder
mkdir newjeans-map-backend
cd newjeans-map-backend

# 2. Initialize project
npm init -y

# 3. Install dependencies
npm install express cors body-parser

# 4. Copy server.js file into this folder

# 5. Start the backend
node server.js
```

✅ You should see: `🐰 NewJeans World Map Backend running on http://localhost:3001`

### Frontend Setup

Open a **NEW terminal** (keep backend running):

```bash
# 1. Create React app
npx create-react-app newjeans-world-map
cd newjeans-world-map

# 2. Install map libraries
npm install leaflet react-leaflet

# 3. Copy files:
# - newjeans-map.jsx → src/
# - App.js → src/
# - App.css → src/
# - index.js → src/
# - index.css → src/
# - index.html → public/

# 4. Start the frontend
npm start
```

✅ Browser opens at `http://localhost:3000` 🎉

---

## 📁 Project Structure

```
newjeans-world-map/
├── src/
│   ├── newjeans-map.jsx    # Main map component ⭐
│   ├── App.js               # App wrapper
│   ├── App.css              # App styles
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
├── public/
│   └── index.html           # HTML template
└── package.json

newjeans-map-backend/
├── server.js                # Express server ⭐
└── package.json
```

---

## 🎮 Usage

### Exploring the Map

1. **Open** `http://localhost:3000`
2. **Find pink circles** on the world map
3. **Click a circle** to see the city's favorite song
4. **Drag the info box** by grabbing the green header
5. **Close** with the "✕ Close" button

### Adding Your City

1. Click **"➕ Submit Your City! 🎵"**
2. Fill in the form:
   - 🌆 City name
   - 🎵 Favorite song
   - 💿 Album
   - 💭 Reason
   - 👤 Your nickname
3. Click **"✓ Submit 🐰"**

---

## 🔌 API Documentation

### Base URL
```
http://localhost:3001
```

### Endpoints

#### Get All Submissions
```http
GET /api/submissions
```

#### Submit New City
```http
POST /api/submissions
Content-Type: application/json

{
  "country": "Seoul, Korea",
  "songName": "Ditto",
  "album": "OMG",
  "reason": "Home country favorite!",
  "submitterName": "Bunny123"
}
```

#### Get by Country
```http
GET /api/submissions/country/:country
```

#### Update Status
```http
PATCH /api/submissions/:id

{
  "status": "approved"
}
```

#### Delete Submission
```http
DELETE /api/submissions/:id
```

#### Health Check
```http
GET /health
```

---

## 🎨 Customization

### Adding More Cities

Edit `newjeans-map.jsx`:

```javascript
const cityData = [
  { 
    name: "Your City", 
    coords: [latitude, longitude], 
    song: "Song Name", 
    album: "Album", 
    reason: "Why!" 
  },
  // ... more cities
];
```

Find coordinates at [LatLong.net](https://www.latlong.net/)

### Changing Colors

- `#00ff88` - Mint green (primary)
- `#ff0080` - Hot pink (secondary)
- `#1a1a2e` - Dark background

### Marker Size

```javascript
<CircleMarker
  radius={8}  // Change this
/>
```

---

## 🛠️ Tech Stack

**Frontend:** React, Leaflet.js, React-Leaflet  
**Backend:** Node.js, Express, CORS  
**Styling:** CSS3, Google Fonts (Press Start 2P)  
**Maps:** OpenStreetMap tiles  

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Map not loading | Check internet connection |
| "Cannot GET /" | Restart backend: `node server.js` |
| Markers not showing | Check browser console (F12) |
| Port 3000 in use | Type `Y` when prompted |
| Can't drag info box | Click the green header bar |

---

## 🔮 Future Features

- [ ] 🎵 Audio playback
- [ ] 🗄️ Database integration
- [ ] 🔐 User accounts
- [ ] 📊 Statistics & charts
- [ ] 🌓 Dark/light mode
- [ ] 📱 Mobile app
- [ ] 🌍 100+ cities

---

## 🤝 Contributing

Contributions welcome! 🐰

1. Fork the repo
2. Create a branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📊 Statistics

- **36 Cities** across 6 continents
- **8 NewJeans Songs** featured
- **3 Albums** (New Jeans, OMG, Get Up)
- **100% Open Source** 💙

---

## 🙏 Acknowledgments

- **NewJeans** - For the amazing music! 🐰
- **ADOR** - NewJeans' label
- **Bunnies** - Worldwide fanbase
- **OpenStreetMap** - Map data
- **Leaflet.js** - Mapping library
- **React Team** - UI framework

---

## 📜 License

Apache License

---

<div align="center">

### Made with 💙 by Bunnies, for Bunnies

**NewJeans forever!** 🐰🎵

[⬆ Back to Top](#-newjeans-world-map-)

</div>
