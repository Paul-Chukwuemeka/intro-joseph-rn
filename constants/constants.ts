export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24, // Standard screen side padding
  xxxl: 32,
  section: 30, // Increased for the generous vertical breathing room
};

export const typography = {
  display: 180, // Scaled slightly down from 204 for better device fit
  h1: 36, // "Paris" (Needs to be larger/bolder than 28)
  h2: 18, // "Daily Summary", "Weekly forecast"
  body: 15, // Summary text
  cardTemp: 16, // Temperatures inside the small forecast cards
  caption: 12, // "Wind", "Humidity", "21 Jan"
  tiny: 10,
};

export const lineHeight = {
  display: 160, // Tight line height for the massive 31°
  h1: 40,
  body: 20,
  caption: 16,
};

export const radius = {
  xs: 8,
  sm: 12, // Weekly forecast small cards
  md: 20, // The black "Daily Summary" card
  lg: 32, // The main yellow outer container
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
  display: -8, // Roughly -4% to -5% of font size

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
  // Clear: "#FFD524",
  // ClearNight: "#FFA500", // darker gold for night
  // Clouds: "#B0C4DE",
  // CloudsNight: "#708090", // slate gray for night
  // Rain: "#1E90FF",
  // RainNight: "#104E8B", // darker blue
  // Thunderstorm: "#4B0082",
  // ThunderstormNight: "#2E0854",
  // Snow: "#ADD8E6",
  // SnowNight: "#87CEFA",
  // Mist: "#708090",
  // MistNight: "#2F4F4F",
  // black: "#000000",
  Neutral: {
    background: "#FAFAFA",
    card: "#FFFFFF",
    primaryText: "#111111",
    secondaryText: "#888888",
    accent: "#000000",
  },
  Clear: {
    background: "#F7C948",
    card: "#111111",
    primaryText: "#ffffff",
    secondaryText: "#ffffff",
    accent: "#FF9F1C",
  },
  ClearNight: {
    background: "#0F172A",
    card: "#1E293B",
    primaryText: "#F8FAFC",
    secondaryText: "#94A3B8",
    accent: "#FBBF24",
  },
  Clouds: {
    background: "#E2E8F0",
    card: "#FFFFFF",
    primaryText: "#1E293B",
    secondaryText: "#64748B",
    accent: "#94A3B8",
  },
  CloudsNight: {
    background: "#1E293B",
    card: "#334155",
    primaryText: "#F1F5F9",
    secondaryText: "#CBD5E1",
    accent: "#64748B",
  },
  Rain: {
    background: "#5DA9E9",
    card: "#092842",
    primaryText: "#F8FAFC",
    secondaryText: "#dce8fa",
    accent: "#4a77f1",
  },
  RainNight: {
    background: "#1E3A8A",
    card: "#0F172A",
    primaryText: "#F1F5F9",
    secondaryText: "#CBD5E1",
    accent: "#60A5FA",
  },
  ThunderstormNight: {
    background: "#1E1B4B",
    card: "#0F172A",
    primaryText: "#F8FAFC",
    secondaryText: "#C7D2FE",
    accent: "#6366F1",
  },
  Snow: {
    background: "#F8FAFC",
    card: "#FFFFFF",
    primaryText: "#0F172A",
    secondaryText: "#64748B",
    accent: "#38BDF8",
  },
  SnowNight: {
    background: "#1E293B",
    card: "#334155",
    primaryText: "#F1F5F9",
    secondaryText: "#CBD5E1",
    accent: "#7DD3FC",
  },
  Mist: {
    background: "#CBD5E1",
    card: "#FFFFFF",
    primaryText: "#1E293B",
    secondaryText: "#475569",
    accent: "#94A3B8",
  },
  MistNight: {
    background: "#334155",
    card: "#1E293B",
    primaryText: "#F8FAFC",
    secondaryText: "#CBD5E1",
    accent: "#64748B",
  },
  Thunderstorm: {
    background: "#312E81",
    card: "#111827",
    primaryText: "#F8FAFC",
    secondaryText: "#A5B4FC",
    accent: "#818CF8",
  },
};
