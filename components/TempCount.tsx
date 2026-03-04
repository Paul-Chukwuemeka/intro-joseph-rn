import { useEffect, useState } from "react";
import { View,Text } from "react-native";
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { typography, spacing } from "@/constants/constants";

export default function Counter({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const progress = useSharedValue(target >= 20 ? target - 20: 0);
  const [displayValue, setDisplayValue] = useState(0);

  useAnimatedReaction(
    () => Math.round(progress.value),
    (current, prev) => {
      if (current !== prev) {
        scheduleOnRN(setDisplayValue, current);
      }
    },
  );

  useEffect(() => {
    progress.value = withTiming(target, {
      duration,
      easing: Easing.out(Easing.quad),
    });
  }, [target, duration, progress]);

  return (
    <View
      style={{
        marginTop: spacing.xxl,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"flex-start"
        
      }}
    >
      <Animated.Text style={{ fontSize: typography.display,lineHeight:150 }}>
        {displayValue}
      </Animated.Text>
      <Text style={{ fontSize: typography.unit }}>°c</Text>
    </View>
  );
}
