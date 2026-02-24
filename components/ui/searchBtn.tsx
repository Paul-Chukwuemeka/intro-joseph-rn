import { Svg, Path, Circle } from "react-native-svg";
import React, { useContext } from "react";
import { Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { AppContext } from "@/context/appContext";

const SearchBtn = () => {
  const { setIsSearch ,theme} = useContext(AppContext)!;
  function handleClick() {
    setIsSearch(true);
  }

  return (
    <Pressable
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
      }}
      onPress={handleClick}
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
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.primaryText}
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
