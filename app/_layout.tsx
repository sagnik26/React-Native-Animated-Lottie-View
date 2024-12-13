import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import AnimatedSplash from "@/components/AnimatedSplash";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const isSplashScreen = !appReady || !splashAnimationFinished;

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [loaded]);

  if (isSplashScreen) {
    return (
      <AnimatedSplash
        onAnimationFinish={(isCancelled: boolean) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="animation" />
          <Stack.Screen name="splash" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
