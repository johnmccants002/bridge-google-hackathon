import React from "react";
import { View, Image } from "react-native";

const LogoContainer = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 80,
        backgroundColor: "#4BA4A4",
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
    </View>
  );
};

export default LogoContainer;
