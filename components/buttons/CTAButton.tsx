import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";

import Color from "@/constants/Color";
import Fonts from "@/constants/Fonts";
import { AntDesign } from "@expo/vector-icons";

// Assuming Colors is defined in another file, import it

// Use keyof typeof to ensure props accept only keys from Colors
type ButtonTypeKeys = keyof typeof ButtonType;

type CTAButtonProps = {
  onPress: () => void;
  text: string;
  type: ButtonTypeKeys;
  style?: ViewStyle;
};

const ButtonType = {
  primary: "primary",
  secondary: "secondary",
  desktopPrimary: "desktopPrimary"
};

const CTAButton: React.FC<CTAButtonProps> = ({
  onPress,
  text,
  type,
  style,
}) => {
  // Use the colors from the Colors object, providing fallbacks
  const buttonStyle = StyleSheet.create({
    primary: {
      backgroundColor: Color.accentLight,
      color: Color.accentDark,
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width: "auto",
      paddingHorizontal: 16,
      borderRadius: 24,
      flexDirection: "row",
      gap: 12,
    },

    secondary: {
      backgroundColor: Color.accentDark,
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      borderRadius: 16,
      paddingHorizontal: 16,
      flexDirection: "row",
      gap: 8,
    },

    desktopPrimary: {
      backgroundColor: Color.accentPrimary,
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width: "auto",
      paddingHorizontal: 16,
      borderRadius: 24,
      flexDirection: "row",
      alignSelf: 'flex-start',
      gap: 12,
    },
  });

  const textStyle = StyleSheet.create({
    primary: {
      color: Color.accentDark,
      fontFamily: Fonts.medium,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 18.7,
      textAlign: "left",
    },
    secondary: {
      color: Color.accentLight,
      fontFamily: Fonts.medium,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 18.7,
      textAlign: "left",
    },
    desktopPrimary: {
      color: Color.accentLight,
      fontFamily: Fonts.medium,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 18.7,
      textAlign: "left",
    }
  });

  return (
    <TouchableOpacity style={[buttonStyle[type], style]} onPress={onPress}>
      {/* Assuming you want to display the iconName or some text here */}
      <Text style={textStyle[type]}>{text}</Text>
      <AntDesign style={{ fontSize: 28 }}
        name={type === "primary" || "desktopPrimary" ? "arrowright" : "check"}
        color={type === "primary" ? Color.accentDark : Color.accentLight}
      />

      {/* If you have an Icon component, it could be used here based on iconName */}
    </TouchableOpacity>
  );
};

export default CTAButton;
