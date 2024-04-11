import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import SplashScreen from "@/screens/splash/SplashScreen";
import QueryEntryScreen from "@/screens/queryEntry/QueryEntryScreen";

interface Props {}

const Component = (props: Props) => {
  const router = useRouter();
  const [item, setItem] = useState("");

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <QueryEntryScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    zIndex: 1,
    paddingHorizontal: 40,
  },
});

export default Component;
