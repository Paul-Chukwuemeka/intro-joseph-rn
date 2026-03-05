import { Svg, Path } from "react-native-svg";
import React, { useContext } from "react";
import { Pressable } from "react-native";
import { AppContext } from "@/context/appContext";

export function Menubtn() {
  const { theme } = useContext(AppContext)!;
  return (
    <Pressable>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme.primaryText}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M4 5h16" />
        <Path d="M4 12h16" />
        <Path d="M4 19h16" />
      </Svg>
    </Pressable>
  );
}
