import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";



const Dot = ({animationDelay}: {animationDelay: number}) => {

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: animationDelay,
    })
    Animated.loop(animation, {}).start()
  }, [animatedValue]);

  const styles = StyleSheet.create({
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "white",
      opacity: animatedValue
    }
  })

  return <Animated.View style={styles.dot} />
}

const LoadingAnimation = () => {
  

  return (
    <View style={styles.row}>
      <Text style={styles.text}>Thinking</Text>
      <Dot animationDelay={0} />
      <Dot animationDelay={300} />
      <Dot animationDelay={600} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "KarlaRegular",
    color: "white",
    fontSize: 28
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    backgroundColor: "#4BA4A4",
    paddingTop: 140,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default LoadingAnimation;