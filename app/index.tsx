import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SplashScreen from "@/components/SplashScreen";

interface Props {}

const Component = (props: Props) => {
  const router = useRouter();
  const [item, setItem] = useState("");

  useEffect(() => {}, []);
  return <SplashScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Component;
