import { StyleSheet } from "react-native";
import {
  spacing,
  typography,
  radius,
  lineHeight,
  fontWeights,
  letterSpacings,
  dummyForecast,
  colors,
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
    flexDirection: "row",
  },
  date: {
    width: "auto",
    alignSelf: "center",
    color: colors.Clear,
    backgroundColor: "black",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    fontSize: typography.body,
    fontFamily: fontWeights.Medium,
  },
  weather: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: spacing.lg,
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
    borderWidth: 2,
    height: 200,
    backgroundColor: "black",
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
    color: colors.Clear,
    fontSize: typography.h2,
    fontFamily: fontWeights.Medium,
  },
  statProp: {
    color: colors.Clear,
    fontSize: typography.body,
  },
  statBox: {
    alignItems: "center",
    gap: 2,
  },
  forecasts: {
    flexDirection: "row",
    gap: 20,
    height: 100,
  },
  forecast: {
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    padding: spacing.md,
    borderRadius: radius.sm,
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
});
