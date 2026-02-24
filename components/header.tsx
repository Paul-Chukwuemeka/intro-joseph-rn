import SearchBtn from "@/components/ui/searchBtn";
import { style } from "@/constants/stylesheet";
import { AppContext } from "@/context/appContext";
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { getDate } from "@/utils/getDate";

const Header = () => {
  const { theme, data } = useContext(AppContext)!;
  const date = getDate();

 
  return (
    <View style={style.top}>
      <View style={style.topbar}>
        <Text style={[style.location, { color: theme.primaryText }]}>
          {data?.location.name}
        </Text>
        <SearchBtn />
      </View>
      <Text style={[style.date, { color: theme.primaryText,backgroundColor:theme.card }]}>{date}</Text>
    </View>
  );
};

export default Header;
