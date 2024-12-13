import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplash = ({
  onAnimationFinish,
}: {
  onAnimationFinish: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <Animated.View
      exiting={FadeOut.duration(2000)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <LottieView
        autoPlay
        onAnimationFinish={onAnimationFinish}
        ref={animation}
        loop={false}
        style={{
          width: "100%",
          maxWidth: 400,
          height: 200,
          backgroundColor: "black",
        }}
        source={require("../assets/lottieAnim/lottie.json")}
      />
    </Animated.View>
  );
};

export default AnimatedSplash;

const styles = StyleSheet.create({});
