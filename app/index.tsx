import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import CTAButton from "@/components/buttons/CTAButton";

interface Props {}

const Component = (props: Props) => {
  const router = useRouter();
  const [item, setItem] = useState("");

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      {/* <LogoContainer /> */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CTAButton text="Continue" onPress={() => {}} type="secondary" />
      </View>

      {/* <SplashScreen /> */}
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

export default Component;
