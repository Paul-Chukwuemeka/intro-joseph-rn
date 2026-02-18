import * as expoLocation from "expo-location";

const getLocation = async () => {
  let { status } = await expoLocation.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.log("permission denied");
    return;
  }

  let location = await expoLocation.getCurrentPositionAsync({});

  return { lat: location.coords.latitude, long: location.coords.longitude };
};

export { getLocation };
