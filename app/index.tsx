import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SplashScreen from "@/screens/splash/SplashScreen";
import About from "@/screens/queryEntry/QueryEntryScreen";
import LogoContainer from "@/components/LogoContainer";
import ResourceScreen from "@/screens/resources/ResourceScreen";
import { response } from "@/screens/resources/mockData/benefits_mock";
import AccountCreated from "@/screens/accountCreated/AccountCreatedScreen";

interface Props {}

const Component = (props: Props) => {
  const router = useRouter();
  const [item, setItem] = useState("");

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      {/* <LogoContainer /> */}

      <SplashScreen />
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
