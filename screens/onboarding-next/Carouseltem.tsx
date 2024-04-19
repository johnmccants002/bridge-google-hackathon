import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

// Define the Props type for better type checking and readability
type Props = {
  component: React.ReactNode; // Array of React components
  title: string; // Array of titles
  description: string; // Array of descriptions
  height?: number;
  containerStyle?: ViewStyle;
};

const CarouselItem: React.FC<Props> = ({
  component,
  title,
  description,
  containerStyle,
}) => {
  return (
    <View style={containerStyle ? containerStyle : styles.container}>
      <View style={styles.componentContainer}>{component}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// Using StyleSheet for better performance and cleaner code
const styles = StyleSheet.create({
  container: {
    height: 580,
    borderRadius: 8,
    backgroundColor: "#E7FFFB",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    paddingHorizontal: 12,
    paddingVertical: 80,
    marginHorizontal: 20,
  },
  componentContainer: {
    height: 240,
    width: "auto",
  },
  textContainer: {
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "KarlaBold", // Assuming 'Fonts.bold' refers to the system's bold font
    fontSize: 26,
    textAlign: "left",
  },
  description: {
    fontFamily: "KarlaRegular", // Assuming 'Fonts.regular' refers to the system's regular font
    fontSize: 14,
    textAlign: "left",
  },
});

export default CarouselItem;
