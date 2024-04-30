import React from "react";
import { View, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/constants/Color";

const LogoContainer = () => {
  return (
    <SafeAreaView 
      edges={["top"]}
      style={{
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "web" ? 20 : 0,
        backgroundColor: Color.accentPrimary,
      }}
    >
      <Image
        source={require("../assets/images/bridgelogo.png")}
        style={{
          resizeMode: "contain",
          width: 100,
          height: 60,
        }}
      />
    </SafeAreaView>
  );
};

export default LogoContainer;
