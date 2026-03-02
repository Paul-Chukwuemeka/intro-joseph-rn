import { StyleSheet } from "react-native";
import {
  spacing,
  typography,
  radius,
  lineHeight,
  fontWeights,
  letterSpacings,
} from "@/constants/constants";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xxl,
    gap: 50,
    width: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  top: {
    marginTop: spacing.xl,
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    height: 100,
    gap:0,
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    width:"100%"
  },
  date: {
    width: "auto",
    alignSelf: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    fontSize: typography.body,
    fontFamily: fontWeights.Medium,
    letterSpacing: letterSpacings.tiny
  },
  weather: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: 0,
    fontSize: typography.h2,
    fontFamily: fontWeights.SemiBold,
  },
  temp: {
    fontSize: typography.display,
    textAlign: "center",
    letterSpacing: letterSpacings.display,
    lineHeight: lineHeight.display,
  },
  stats: {
    borderRadius: radius.md,
    width: "100%",
    height: 200,
    marginTop: spacing.xxl,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  icon: {
    fontSize: 60,
  },
  statValue: {
    fontSize: typography.h2,
    fontFamily: fontWeights.SemiBold,
  },
  statProp: {
    fontSize: typography.body,
  },
  statBox: {
    alignItems: "center",
    gap: 2,
  },
  forecasts: {
    flexDirection: "row",
    gap: 20,
    height: 110,
  },
  forecast: {
    flex: 1,
    alignItems: "center",
    padding: spacing.md,
    borderRadius: radius.sm,
    justifyContent: "space-between",
    gap: 2,
  },
  location: {
    flex: 1,
    transform: [{ translateX: 25 }],
    textAlign: "center",
    fontSize: typography.h1,
    fontFamily: fontWeights.ExtraBold,
    letterSpacing: letterSpacings.h1,
  },
  searchField: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    paddingVertical: 100,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "white",
    paddingHorizontal: 15,
    height: 50,
    zIndex: 100,
    position: "relative",
    borderRadius: radius.sm,
    fontFamily: fontWeights.SemiBold,
    fontSize: typography.body,
  },
  inputBlur: {
    width: 10000,
    position: "absolute",
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
  },
  city: {
    padding: 10,
    paddingVertical: 15,
    borderRadius: radius.xs,
    backgroundColor: "white",
  },
  cities: {
    width: "100%",
    maxWidth: 500,
    display: "flex",
    gap: 5,
    zIndex: 100,
  },
  image:{
    width:40,
    height:40,
  }
});
