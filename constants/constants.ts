export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,       // Standard screen side padding
  xxxl: 32,      
  section: 30,   // Increased for the generous vertical breathing room
};

export const typography = {
  display: 180,      // Scaled slightly down from 204 for better device fit
  h1: 36,            // "Paris" (Needs to be larger/bolder than 28)
  h2: 18,            // "Daily Summary", "Weekly forecast"
  body: 15,          // Summary text
  cardTemp: 16,      // Temperatures inside the small forecast cards
  caption: 12,       // "Wind", "Humidity", "21 Jan"
  tiny: 10,
};

export const lineHeight = {
  display: 160,      // Tight line height for the massive 31°
  h1: 40,
  body: 20,
  caption: 16,
};

export const radius = {
  xs: 8,
  sm: 12,            // Weekly forecast small cards
  md: 20,            // The black "Daily Summary" card
  lg: 32,            // The main yellow outer container
  pill: 999,
};

export const fontWeights = {
  // Brand Serif (Crucial for the "Paris" and "Forecast" background text)
  EditorialSerif: "serif", // Suggest loading: "EB Garamond" or "Playfair Display"
  
  Regular: "Inter_400Regular",
  Medium: "Inter_500Medium",
  SemiBold: "Inter_600SemiBold",
  Bold: "Inter_700Bold",
  ExtraBold: "Inter_800ExtraBold", // Used for the massive "31°"
};

export const letterSpacings = {
  // The 31°: Needs to be very tight to look like a single graphic element
  display: -8,       // Roughly -4% to -5% of font size
  
  // "Paris": Serif fonts in headers benefit from slight tightening
  h1: -0.5,          
  
  // "Daily Summary": UI headers often look cleaner with a tiny bit of tightness
  h2: -0.2,          
  
  // "Wind / Humidity / Visibility": All-caps or small labels often need WIDER spacing
  caption: 0.5,      
  
  // The small dates (21 Jan): Extra breathing room for legibility
  tiny: 0.8,         
}; 
export const dummyForecast = [
  {
    temp: 26,
    condition: "sunny",
    date: "21 Jan",
  },
  {
    temp: 25,
    condition: "sunny",
    date: "21 Jan",
  },
  {
    temp: 27,
    condition: "sunny",
    date: "21 Jan",
  },
  {
    temp: 26,
    condition: "sunny",
    date: "21 Jan",
  },
];

export const colors = {
  Clear: "#FFD524",
  ClearNight: "#FFA500", // darker gold for night
  Clouds: "#B0C4DE",
  CloudsNight: "#708090", // slate gray for night
  Rain: "#1E90FF",
  RainNight: "#104E8B", // darker blue
  Thunderstorm: "#4B0082",
  ThunderstormNight: "#2E0854",
  Snow: "#ADD8E6",
  SnowNight: "#87CEFA",
  Mist: "#708090",
  MistNight: "#2F4F4F",
  black: "#000000",
};
