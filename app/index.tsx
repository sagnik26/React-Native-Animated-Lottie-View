import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const RootIndex = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <Button
          title="Go to Animation"
          onPress={() => router.push("/animation")}
        />
        <Button title="Go to Splash" onPress={() => router.push("/splash")} />
      </View>
    </SafeAreaView>
  );
};

export default RootIndex;

const styles = StyleSheet.create({});
