# 🐰 NewJeans World Map 🎧

<div align="center">

![NewJeans](https://img.shields.io/badge/NewJeans-Fan_Project-ff0080?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Leaflet](https://img.shields.io/badge/Leaflet-Maps-00ff88?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)

**An interactive world map showcasing favorite NewJeans songs from cities around the globe!**

[Features](#-features) • [Installation](#-installation) • [Project Structure](#-project-structure) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

NewJeans World Map is a fan-made interactive web application that displays which NewJeans songs are most loved in different cities worldwide. Click on pink markers scattered across the world to discover local favorites, complete with album details, reasons why fans love them, and **now with audio playback**! 🎵

Built with love by a Bunny, for Bunnies 🐰💙

---

## Working

This is still ongoing, it's still in its beta state right now, but i hope you guys can help me!

## ✨ Features

### 🎯 Interactive Map
- **36+ Cities Worldwide** - Pre-loaded with favorite songs from major cities
- **Clickable Markers** - Pink circular markers on the map
- **🎵 Audio Playback** - Click a city to hear a preview of their favorite song! / NEW
- **Two Display Modes** - Click shows info in both popup AND draggable panel
- **Smooth Navigation** - Pan, zoom, and explore the world

### 🎨 Beautiful Design
- **Pixelated Retro Aesthetic** - 8-bit style with modern gradients
- **Draggable Info Box** - Move the info panel anywhere on screen
- **Enhanced Welcome Screen** - Comprehensive guide with featured cities
- **Animated Elements** - Bouncing bunnies, glowing buttons, smooth transitions
- **Responsive Layout** - Works on desktop and mobile

### 🎵 Song Information
Each city displays:
- 📍 City name and location
- 🎵 Favorite NewJeans song with **play/pause button** / NEW
- 💿 Album name
- 💭 Reason why it's loved
- 🔊 Audio visualization while playing / NEW

### 🏗️ Clean Architecture
- **Modular Components** - Separated into logical, reusable pieces
- **Organized File Structure** - Easy to navigate and maintain
- **Professional Code Quality** - Best practices throughout
- **Well-Documented** - Clear comments and documentation

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

# 3. Create folder structure:
mkdir src/components
mkdir src/data
mkdir src/styles

# 4. Copy refactored files:
# Main component:
#   - NewJeansMap.jsx → src/
#
# Components:
#   - InfoBox.jsx → src/components/
#   - CityDetails.jsx → src/components/
#   - WelcomeMessage.jsx → src/components/
#   - SubmitModal.jsx → src/components/
#   - MapPopup.jsx → src/components/
#
# Data:
#   - cityData.js → src/data/
#
# Styles:
#   - mapStyles.css → src/styles/
#
# Other:
#   - Update App.js import to: import NewJeansMap from './NewJeansMap';

# 5. Start the frontend
npm start
```

✅ Browser opens at `http://localhost:3000` 🎉

---

## 📁 Project Structure

### Frontend (React)
```
newjeans-world-map/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── audio/                    # / NEW - Audio files folder
│   │   ├── super-shy.mp3
│   │   ├── hype-boy.mp3
│   │   ├── ditto.mp3
│   │   ├── omg.mp3
│   │   ├── attention.mp3
│   │   └── ...
│   └── ...
├── src/
│   ├── components/               # / NEW - Organized components
│   │   ├── InfoBox.jsx          # Draggable sidebar
│   │   ├── CityDetails.jsx      # Selected city display
│   │   ├── WelcomeMessage.jsx   # Enhanced welcome screen
│   │   ├── SubmitModal.jsx      # Submission form
│   │   └── MapPopup.jsx         # Map marker popup
│   ├── data/                     # / NEW - Data layer
│   │   └── cityData.js          # All city information
│   ├── styles/                   # / NEW - Styles layer
│   │   └── mapStyles.css        # Organized CSS
│   ├── NewJeansMap.jsx          # / Main component (refactored)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json

newjeans-map-backend/
├── server.js                     # Express server
└── package.json
```

### Key Improvements in Structure
- **Separated Components** - Each component has a single responsibility
- **Data Layer** - City data separated from logic
- **Styles Layer** - All CSS organized in one place
- **Modular Architecture** - Easy to maintain and extend

---

## 🎮 Usage

### Exploring the Map

1. **Open** `http://localhost:3000`
2. **Read the welcome message** with instructions and featured cities
3. **Find pink circles** on the world map
4. **Click a circle** to:
   - See the city's favorite song
   - **🎵 Hear the song play automatically!** / NEW
   - View in both popup AND draggable info panel
5. **Control playback** with play/pause button in the info panel / NEW
6. **Drag the info box** by grabbing the green header
7. **Close** with the "✕ Close" button

### Adding Your City

1. Click **"➕ Submit Your City! 🎵"**
2. Fill in the enhanced form:
   - 🌆 City, Country name
   - 🎵 Favorite NewJeans song
   - 💿 Album name
   - 💭 Detailed reason (textarea)
   - 👤 Your Bunny nickname
3. Click **"✓ Submit 🐰"**
4. See your submission count update!

---

### 1. Audio Features
- ✅ **Auto-play** when city is selected
- ✅ **Play/Pause button** in info panel
- ✅ **Visual indicator** when playing
- ✅ **Smooth transitions** between songs
- ✅ **Volume control** (optional)
- ✅ **Progress bar** (optional)

**Note:** For copyright compliance, use 30-second previews or official snippets only!

---

## 🙏 Acknowledgments

- **NewJeans** (민지, 하니, 다니엘, 해린, 혜인) - For the incredible music! 🐰
- **ADOR** - NewJeans' label
- **Bunnies** - Worldwide fanbase community
- **OpenStreetMap Contributors** - Map data
- **Leaflet.js Team** - Mapping library
- **React Team** - UI framework
- **All Contributors** - Thank you! 💙

---

## 📜 License

This project is licensed under the Apache License 2.0.

**Note:** This is a fan-made project. All NewJeans songs, names, and related content are owned by ADOR/HYBE. This project is for educational and fan community purposes only.

---

## 📞 Contact & Support

- **Issues** - Report bugs via GitHub Issues
- **Questions** - Start a discussion
- **Updates** - Watch the repository for new features

---

<div align="center">

### Made with 💙 by ILikeSaltedEgg a Bunny, for Bunnies

**NewJeans forever!** 🐰🎵

*"We never go out of style!"*

---

⭐ **Star this repo if you love NewJeans!** ⭐

[⬆ Back to Top](#-newjeans-world-map-)

</div>
