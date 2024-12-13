import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const Splash = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          maxWidth: 400,
          height: 200,
          backgroundColor: "black",
        }}
        source={require("../assets/lottieAnim/lottie.json")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
