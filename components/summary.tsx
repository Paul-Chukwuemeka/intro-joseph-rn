import { View, Text } from "react-native";
import {
  fontWeights,
  letterSpacings,
  lineHeight,
  spacing,
  typography,
} from "@/constants/constants";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";

const Summary = () => {
  const { theme} = useContext(AppContext)!;
  return (
    <View
      style={{
        marginTop: spacing.section,
      }}
    >
      <Text
        style={{
          fontFamily: fontWeights.ExtraBold,
          fontSize: typography.h2,
          letterSpacing: letterSpacings.h2,
          color: theme.secondaryText,
          lineHeight: lineHeight.body,
        }}
      >
        Today at a glance
      </Text>
      {/* <Text
        style={{
          fontSize: typography.body,
          fontFamily: fontWeights.Medium,
          color: theme.secondaryText,
        }}
      >
        
      </Text> */}
    </View>
  );
};

export default Summary;
