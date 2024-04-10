import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

import { Colors } from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import { AntDesign } from "@expo/vector-icons";

// Assuming Colors is defined in another file, import it

// Use keyof typeof to ensure props accept only keys from Colors
type ButtonTypeKeys = keyof typeof ButtonType;

type CTAButtonProps = {
  onPress: () => void;
  text: string;
  type: ButtonTypeKeys;
};

const ButtonType = {
  primary: "primary",
  secondary: "secondary",
};

const CTAButton: React.FC<CTAButtonProps> = ({ onPress, text, type }) => {
  // Use the colors from the Colors object, providing fallbacks
  const buttonStyle = StyleSheet.create({
    primary: {
      backgroundColor: Colors.accentLight,
      color: Colors.accentDark,
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width: "auto",
      paddingHorizontal: 16,
      borderRadius: 24,
      flexDirection: "row",
      gap: 8,
    },

    secondary: {
      backgroundColor: Colors.accentDark,
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      width: "auto",
      borderRadius: 16,
      paddingHorizontal: 16,
      flexDirection: "row",
      gap: 8,
    },
  });

  const textStyle = StyleSheet.create({
    primary: {
      color: Colors.accentDark,
      fontFamily: Fonts.medium,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 18.7,
      textAlign: "left",
    },
    secondary: {
      color: Colors.accentLight,
      fontFamily: Fonts.medium,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 18.7,
      textAlign: "left",
    },
  });

  return (
    <Pressable style={buttonStyle[type]} onPress={onPress}>
      {/* Assuming you want to display the iconName or some text here */}
      <Text style={textStyle[type]}>{text}</Text>
      <AntDesign
        name={type === "primary" ? "arrowright" : "check"}
        color={type === "primary" ? Colors.accentDark : Colors.accentLight}
      />

      {/* If you have an Icon component, it could be used here based on iconName */}
    </Pressable>
  );
};

export default CTAButton;
