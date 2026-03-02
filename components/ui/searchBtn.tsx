import { Svg, Path, Circle } from "react-native-svg";
import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { AppContext } from "@/context/appContext";

const SearchBtn = () => {
  const { setIsSearch, theme } = useContext(AppContext)!;
  function handleClick() {
    setIsSearch(true);
  }

  return (
    <Pressable
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handleClick}
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
    </Pressable>
  );
};

export default SearchBtn;
