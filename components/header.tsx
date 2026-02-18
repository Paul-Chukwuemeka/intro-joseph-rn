import SearchBtn from "@/components/ui/searchBtn";
import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { style } from "@/constants/stylesheet";
import getWeather from "@/utils/getWeather";

const Header = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function load() {
      const data = await getWeather();
      setLocation(data.location.name)
    }
    load();
  }, []);
  return (
    <View style={style.top}>
      <Text style={style.location}>{location}</Text>
      <SearchBtn />
    </View>
  );
};

export default Header;
