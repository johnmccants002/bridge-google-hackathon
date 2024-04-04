import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, TextInput } from "react-native";


const About = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        Tell us a little about yourself and your situation. How can we help?
      </Text>
      <View>
        <TextInput>

        </TextInput>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    paddingTop: 140,
    paddingLeft: 20,
  },
  textRegular: {
    color: "#E9FBFF",
    fontFamily: "KarlaRegular",
    fontSize: 16,
    marginTop: 20,
    lineHeight: 18.7,
  },
  textBold: {
    fontFamily: "KarlaRegular",
    color: "white",
    fontSize: 24,
    lineHeight: 28,
  },
});



export default About