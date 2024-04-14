import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

export const Dot = ({ animationDelay }: { animationDelay: number }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const doAnimation = () => {
    // Once the initial animation completes, loop without the initial delay
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    setTimeout(doAnimation, animationDelay);
  }, [animatedValue, animationDelay]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 5, 10, -5, -10],
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        { transform: [{ translateY }] }, // Apply translateY transformation
      ]}
    />
  );
};

const LoadingAnimation = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Thinking</Text>
      <Dot animationDelay={200} />
      <Dot animationDelay={400} />
      <Dot animationDelay={600} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "KarlaRegular",
    color: "white",
    fontSize: 28,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#4BA4A4",
    paddingTop: 140,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4, // Ensure dots are not too close together
  },
});

export default LoadingAnimation;
