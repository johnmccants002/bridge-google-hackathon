import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TouchableOpacity, ActivityIndicator } from "react-native";

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
  isAnimating?: boolean;
  style?: ViewStyle;
};

const ButtonType = {
  primary: "primary",
  secondary: "secondary",
};

const CTAButton: React.FC<CTAButtonProps> = ({
  onPress,
  text,
  type,
  isAnimating,
  style
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
      width: "auto",
      borderRadius: 16,
      paddingHorizontal: 16,
      flexDirection: "row",
      gap: 8,
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
  });

  const content = () => {
    if (isAnimating) {
      return <ActivityIndicator />
    }

    return (
      <>
        <Text style={textStyle[type]}>{text}</Text>
        <AntDesign style={{ fontSize: 28 }}
          name={type === "primary" ? "arrowright" : "check"}
          color={type === "primary" ? Color.accentDark : Color.accentLight}
        />
      </>
    )
  }

  return (
    <TouchableOpacity style={[buttonStyle[type], style]} disabled={isAnimating} onPress={onPress}>
      { content() }
    </TouchableOpacity>
  );
};

export default CTAButton;
