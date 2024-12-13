import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Animation = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        // autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../assets/lottieAnim/lottie.json")}
      />

      <View style={{}}>
        <Button
          title="Reset Animation"
          onPress={() => {
            animation.current?.reset();
          }}
        />
        <Button
          title="Play Animation"
          onPress={() => {
            animation.current?.play();
          }}
        />
        <Button
          title="Pause Animation"
          onPress={() => {
            animation.current?.pause();
          }}
        />
      </View>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({});
