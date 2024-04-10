import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import StartScreen from "@/screens/start/StartScreen";

interface Props {}

const Page = (props: Props) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <StartScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    zIndex: 1,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Page;
