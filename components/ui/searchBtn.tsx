import { Svg, Path, Circle } from "react-native-svg";
import React from "react";
import { Pressable } from "react-native";
import { BlurView } from "expo-blur";

const SearchBtn = () => {
  return (
    <Pressable
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="m21 21-4.34-4.34" />
          <Circle cx="11" cy="11" r="8" />
        </Svg>
      </BlurView>
    </Pressable>
  );
};

export default SearchBtn;
