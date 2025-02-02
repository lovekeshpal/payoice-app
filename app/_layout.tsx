import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
// Import your global CSS file
import "../global.css";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default Slot;

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Geist-Black": require("../assets/fonts/Geist-Black.ttf"),
    "Geist-Bold": require("../assets/fonts/Geist-Bold.ttf"),
    "Geist-Regular": require("../assets/fonts/Geist-Regular.ttf"),
    "Geist-Light": require("../assets/fonts/Geist-Light.ttf"),
    "Geist-Thin": require("../assets/fonts/Geist-Thin.ttf"),
    "Geist-Medium": require("../assets/fonts/Geist-Medium.ttf"),
    "Geist-SemiBold": require("../assets/fonts/Geist-SemiBold.ttf"),
    "Geist-ExtraBold": require("../assets/fonts/Geist-ExtraBold.ttf"),
    "Geist-ExtraLight": require("../assets/fonts/Geist-ExtraLight.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
