import { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {}

const Component = (props: Props) => {
  const router = useRouter();
  const [item, setItem] = useState("");

  const navigateToLogin = () => {
    router.replace("/login");
  };

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bridgelogo.png")}
        style={{ top: 40, left: 20, resizeMode: "contain", width: 100 }}
      />
      <View style={{ marginTop: 140, paddingLeft: 20 }}>
        <Text style={styles.textBold}>
          Hi there. We're Bridge. We help connect people to the resources that
          they need.
        </Text>
        <Text style={styles.textRegular}>
          No combing through endless government websites
        </Text>
        <Text style={styles.textRegular}>
          No wondering if you're missing something.
        </Text>
        <Text style={styles.textRegular}>Just help.</Text>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 12,
            width: 164,
            height: 48,
            borderRadius: 16,
            gap: 8,
            justifyContent: "center",
            marginTop: 40,
          }}
          onPress={() =>
            Platform.OS === "web"
              ? router.push("/search")
              : router.push("/results")
          }
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <MaterialCommunityIcons name="arrow-right" color={"#4BA4A4"} />
        </Pressable>
      </View>
      <Pressable
        style={{ bottom: 60, alignSelf: "center", position: "absolute" }}
        onPress={navigateToLogin}
      >
        <Text style={styles.loginText}>Been here already? Login.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
  },
  buttonText: {
    color: "#227272",
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
  loginText: {
    fontFamily: "KarlaRegular",
    fontSize: 19,
    lineHeight: 28,
    textDecorationLine: "underline",
    color: "#227272",
  },
});

export default Component;
