import { View, TextInput, Text, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/context/appContext";
import { style } from "@/constants/stylesheet";
import useDebounce from "@/hooks/useDebounce";
import { getCities } from "@/utils/getCities";
import { typography } from "@/constants/constants";

const SearchField = () => {
  const { 
    setIsSearch, 
    setSearchQuery, 
    searchQuery, 
    theme, 
    setCities, 
    cities ,
    setQuery
  } = useContext(AppContext)!;

  const inputRef = useRef<TextInput>(null);
  const debouncedQuery = useDebounce(searchQuery)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!debouncedQuery) {
      setCities([]);
      return;
    }

    const loadCities = async () => {
      try {
        const data = await getCities(debouncedQuery);
        setCities(data);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      }
    };

    loadCities();
  }, [debouncedQuery, setCities]);

  return (
    <View style={style.searchField}>
      <Pressable
        style={[style.inputBlur, { backgroundColor: theme.card, opacity: 0.5 }]}
        onPress={() => setIsSearch(false)}
      >
        <BlurView style={{ flex: 1 }} intensity={90} />
      </Pressable>

      <TextInput
        ref={inputRef}
        placeholder="Search for a city..."
        style={style.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {cities && cities.length > 0 && (
        <View style={style.cities}>
          {cities.map((city,i) => (
            <Pressable 
              style={style.city} 
              key={`${city.name}-${city.region}-${i}`} 
              onPress={() => {
                setQuery(`${city.name}, ${city.region}`);
                setIsSearch(false);
              }}
            >
              <Text style={{ fontSize: typography.h2 }}>
                {city.name}, {city.region}, {city.country}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchField;