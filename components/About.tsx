import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Alert,
  Button,
} from "react-native";
// import QuestionMarkIcon from "../assets/images/question-mark-icon.png";

const createThreeButtonAlert = () =>
  Alert.alert('',
    `Bridge uses the info you provide to pull resources from federal, state, and local databases. 
     Factors that help us determine available resources:

     • Age
     • Citizenship status
     • Location (state, city)
     • Household size
     • Household income
     • Employment status
     • Marriage status
     • Disability status`
    , [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

const About = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        Tell us a little about yourself and your situation.
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <Text style={styles.textBold}>How can we help?</Text>
        <Pressable
          onPress={createThreeButtonAlert}
        >
          <Image
            source={require("../assets/images/question-mark-icon.png")}
            style={{ height: 35, width: 35, marginTop: 4 }}
          />
        </Pressable>

      </View>


      <TextInput
        style={styles.textInput}
        allowFontScaling
        editable
        multiline
        textAlignVertical="center"
        placeholder="Start typing here"
        placeholderTextColor="#125858"
      />

      <Pressable
        style={styles.confirmButton}
        onPress={() => router.push("/results")}
      >
        <Text style={styles.confirmButtonText}>Search</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    paddingTop: 140,
    padding: 16,
  },
  textInput: {
    backgroundColor: "white",
    // width: 240,
    width: "100%",
    // minHeight: 32,
    borderRadius: 8,
    padding: 8,
    paddingTop: 8,
    marginTop: 20,
    marginBottom: 40,
    fontSize: 16,
    color: "#125858"
  },
  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  confirmButtonText: {
    color: "#125858",
    fontFamily: "KarlaBold",
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

export default About;
