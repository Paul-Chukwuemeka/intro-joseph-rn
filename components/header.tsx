import SearchBtn from "@/components/ui/searchBtn";
import { style } from "@/constants/stylesheet";
import { AppContext } from "@/context/appContext";
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { getDate } from "@/utils/getDate";
import { Menubtn } from "./ui/menuBtn";

const Header = () => {
  const { theme, data } = useContext(AppContext)!;
  const date = getDate();

  return (
    <View style={style.top}>
      <View style={style.topbar}>
        <Menubtn />
        <SearchBtn />
      </View>
      <Text
        style={[
          style.date,
          { color: theme.primaryText, backgroundColor: theme.card },
        ]}
      >
        {date}
      </Text>
    </View>
  );
};

export default Header;
