import React from "react";
import { Stack } from "expo-router";
import { AppContextProvider } from "@/context/appContext";

const Rootlayout = () => {
  return (
    <AppContextProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </AppContextProvider>
  );
};

export default Rootlayout;
