// City data with NewJeans favorite songs
// Each city now includes an audioFile property for song playback

// Audio file mapping for songs
const audioFileMap = {
  "Super Shy": "super-shy.mp3",
  "Hype Boy": "hype-boy.mp3",
  "Ditto": "ditto.mp3",
  "OMG": "omg.mp3",
  "Attention": "attention.mp3",
  "Cool With You": "cool-with-you.mp3",
  "ETA": "eta.mp3",
  "ASAP": "asap.mp3",
  "New Jeans": "new-jeans.mp3"
};

export const cityData = [
  // North America
  { 
    name: "New York, USA", 
    coords: [40.7128, -74.0060], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "NYC Bunnies love the energy and infectious beat that matches the city's vibrant pace!",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Los Angeles, USA", 
    coords: [34.0522, -118.2437], 
    song: "Hype Boy", 
    album: "New Jeans", 
    reason: "Perfect West Coast vibes with that laid-back yet catchy sound",
    audioFile: audioFileMap["Hype Boy"]
  },
  { 
    name: "Toronto, Canada", 
    coords: [43.6532, -79.3832], 
    song: "OMG", 
    album: "OMG", 
    reason: "The ultimate winter anthem that kept Toronto warm during cold months!",
    audioFile: audioFileMap["OMG"]
  },
  { 
    name: "Mexico City, Mexico", 
    coords: [19.4326, -99.1332], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Dance challenge went massively viral in CDMX!",
    audioFile: audioFileMap["Attention"]
  },
  
  // South America
  { 
    name: "São Paulo, Brazil", 
    coords: [-23.5505, -46.6333], 
    song: "Hype Boy", 
    album: "New Jeans", 
    reason: "Became a TikTok sensation among Brazilian Bunnies!",
    audioFile: audioFileMap["Hype Boy"]
  },
  { 
    name: "Buenos Aires, Argentina", 
    coords: [-34.6037, -58.3816], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "Top radio favorite and playlist staple in BA",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Bogotá, Colombia", 
    coords: [4.7110, -74.0721], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Colombian Bunnies united around this debut masterpiece!",
    audioFile: audioFileMap["Attention"]
  },
  
  // Europe
  { 
    name: "London, UK", 
    coords: [51.5074, -0.1278], 
    song: "Ditto", 
    album: "OMG", 
    reason: "The nostalgic MV aesthetic resonated deeply with UK fans",
    audioFile: audioFileMap["Ditto"]
  },
  { 
    name: "Paris, France", 
    coords: [48.8566, 2.3522], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Très chic! French fans love the sophisticated Y2K sound",
    audioFile: audioFileMap["Attention"]
  },
  { 
    name: "Berlin, Germany", 
    coords: [52.5200, 13.4050], 
    song: "Cool With You", 
    album: "Get Up", 
    reason: "Perfect nighttime city vibes for Berlin's club culture",
    audioFile: audioFileMap["Cool With You"]
  },
  { 
    name: "Madrid, Spain", 
    coords: [40.4168, -3.7038], 
    song: "New Jeans", 
    album: "New Jeans", 
    reason: "The ultimate summer feeling track for Spanish Bunnies!",
    audioFile: audioFileMap["New Jeans"]
  },
  { 
    name: "Rome, Italy", 
    coords: [41.9028, 12.4964], 
    song: "ETA", 
    album: "Get Up", 
    reason: "Italian fans appreciate the dramatic and bold production",
    audioFile: audioFileMap["ETA"]
  },
  { 
    name: "Amsterdam, Netherlands", 
    coords: [52.3676, 4.9041], 
    song: "OMG", 
    album: "OMG", 
    reason: "Topped Dutch streaming charts for weeks!",
    audioFile: audioFileMap["OMG"]
  },
  { 
    name: "Stockholm, Sweden", 
    coords: [59.3293, 18.0686], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "Nordic K-pop fans embraced the fresh sound immediately",
    audioFile: audioFileMap["Super Shy"]
  },
  
  // Asia - THE MAIN REGION!
  { 
    name: "Seoul, South Korea 🇰🇷", 
    coords: [37.5665, 126.9780], 
    song: "Ditto", 
    album: "OMG", 
    reason: "HOME OF NEWJEANS! Where the magic began and the song that defined a generation 🐰💙",
    audioFile: audioFileMap["Ditto"]
  },
  { 
    name: "Tokyo, Japan", 
    coords: [35.6762, 139.6503], 
    song: "OMG", 
    album: "OMG", 
    reason: "Massive hit on Japanese charts, beloved by J-Bunnies!",
    audioFile: audioFileMap["OMG"]
  },
  { 
    name: "Osaka, Japan", 
    coords: [34.6937, 135.5023], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "Kansai region's favorite summer anthem!",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Beijing, China", 
    coords: [39.9042, 116.4074], 
    song: "Hype Boy", 
    album: "New Jeans", 
    reason: "Most streamed NewJeans track in mainland China",
    audioFile: audioFileMap["Hype Boy"]
  },
  { 
    name: "Shanghai, China", 
    coords: [31.2304, 121.4737], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Perfect blend of city pop vibes for Shanghai's urban culture",
    audioFile: audioFileMap["Attention"]
  },
  { 
    name: "Bangkok, Thailand", 
    coords: [13.7563, 100.5018], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "Thai Bunnies made this their anthem of 2023!",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Manila, Philippines", 
    coords: [14.5995, 120.9842], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "The debut song that captured Filipino hearts immediately!",
    audioFile: audioFileMap["Attention"]
  },
  { 
    name: "Jakarta, Indonesia", 
    coords: [-6.2088, 106.8456], 
    song: "Hype Boy", 
    album: "New Jeans", 
    reason: "Absolutely huge among Indonesian fans, constant radio play!",
    audioFile: audioFileMap["Hype Boy"]
  },
  { 
    name: "Singapore", 
    coords: [1.3521, 103.8198], 
    song: "Cool With You", 
    album: "Get Up", 
    reason: "The sophisticated sound perfect for the city-state",
    audioFile: audioFileMap["Cool With You"]
  },
  { 
    name: "Kuala Lumpur, Malaysia", 
    coords: [3.1390, 101.6869], 
    song: "OMG", 
    album: "OMG", 
    reason: "Malaysian Bunnies' top choice for every playlist!",
    audioFile: audioFileMap["OMG"]
  },
  { 
    name: "Ho Chi Minh City, Vietnam", 
    coords: [10.8231, 106.6297], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Vietnamese fans connected instantly with the fresh sound",
    audioFile: audioFileMap["Attention"]
  },
  { 
    name: "Taipei, Taiwan", 
    coords: [25.0330, 121.5654], 
    song: "Ditto", 
    album: "OMG", 
    reason: "Taiwan's favorite, loved for its emotional depth",
    audioFile: audioFileMap["Ditto"]
  },
  { 
    name: "Hong Kong", 
    coords: [22.3193, 114.1694], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "HK Bunnies unite around this energetic track!",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Mumbai, India", 
    coords: [19.0760, 72.8777], 
    song: "ASAP", 
    album: "Get Up", 
    reason: "The upbeat energy matches Mumbai's fast-paced lifestyle!",
    audioFile: audioFileMap["ASAP"]
  },
  { 
    name: "Delhi, India", 
    coords: [28.7041, 77.1025], 
    song: "Hype Boy", 
    album: "New Jeans", 
    reason: "North India's favorite NewJeans track",
    audioFile: audioFileMap["Hype Boy"]
  },
  
  // Oceania
  { 
    name: "Sydney, Australia", 
    coords: [-33.8688, 151.2093], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "The perfect Australian summer anthem for beach days!",
    audioFile: audioFileMap["Super Shy"]
  },
  { 
    name: "Melbourne, Australia", 
    coords: [-37.8136, 144.9631], 
    song: "Cool With You", 
    album: "Get Up", 
    reason: "Matches Melbourne's cool, artistic vibe perfectly",
    audioFile: audioFileMap["Cool With You"]
  },
  { 
    name: "Auckland, New Zealand", 
    coords: [-36.8485, 174.7633], 
    song: "Ditto", 
    album: "OMG", 
    reason: "Kiwi Bunnies love the nostalgic aesthetic",
    audioFile: audioFileMap["Ditto"]
  },
  
  // Middle East
  { 
    name: "Dubai, UAE", 
    coords: [25.2048, 55.2708], 
    song: "OMG", 
    album: "OMG", 
    reason: "Dubai's K-pop community embraced NewJeans immediately",
    audioFile: audioFileMap["OMG"]
  },
  { 
    name: "Istanbul, Turkey", 
    coords: [41.0082, 28.9784], 
    song: "Super Shy", 
    album: "Get Up", 
    reason: "A bridge between worlds, just like Istanbul itself",
    audioFile: audioFileMap["Super Shy"]
  },
  
  // Africa
  { 
    name: "Cape Town, South Africa", 
    coords: [-33.9249, 18.4241], 
    song: "Attention", 
    album: "New Jeans", 
    reason: "Breaking into the South African market with style!",
    audioFile: audioFileMap["Attention"]
  },
];

// Helper function to get audio file path
export const getAudioPath = (audioFile) => {
  return audioFile ? `/audio/${audioFile}` : null;
};




