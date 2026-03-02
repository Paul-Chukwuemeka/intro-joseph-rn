import * as expoLocation from "expo-location";

const getLocation = async () => {
  let { status } = await expoLocation.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.log("permission denied");
    return;
  }

  const provider = await expoLocation.getProviderStatusAsync();

  if (!provider.locationServicesEnabled) {
    console.log("location services disabled");
    return null;
  }
 
  let location = await expoLocation.getCurrentPositionAsync({
    accuracy: expoLocation.Accuracy.High, 
  });
  return { latitude: location.coords.latitude, longitude: location.coords.longitude };
};

export { getLocation };
