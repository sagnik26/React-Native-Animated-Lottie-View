import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplash = ({
  onAnimationFinish,
}: {
  onAnimationFinish: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <AnimatedLottieView
        exiting={FadeOut.duration(380)}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        ref={animation}
        loop={false}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
        source={require("../assets/lottieAnim/lottie.json")}
      />
    </View>
  );
};

export default AnimatedSplash;

const styles = StyleSheet.create({});
