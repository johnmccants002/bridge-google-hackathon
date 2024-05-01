import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import CTAButton from "@/components/buttons/CTAButton";
import Color from "@/constants/Color";
import { window } from "@/constants/Web";
import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import IllustrationMosaic from "./IllustrationMosaic";

function StartScreen() {
  const router = useRouter();
  const navigateToLogin = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: Color.accentPrimary,
      }}
    >

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 16,
          // justifyContent: "space-around",
          backgroundColor: Color.accentLight,
          alignItems: "center",
          padding: 24,
          borderRadius: 8,
          margin: 20
        }}
      >
        <IllustrationMosaic />
        <Text style={styles.title}>Immigration support the right way</Text>
        <Text style={styles.description}>Bridge is your guide to finding essential resources and support-no matter where you are in your immigration journey.</Text>
      </View>

      <Pressable
        style={{ alignSelf: "center" }}
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text style={styles.loginText}>Been here already? Login.</Text>
      </Pressable>

      <CTAButton
        style={{ marginVertical: 20 }}
        onPress={() => router.push("/onboarding")}
        text="Get Started"
        type="primary"
      />

      <Pressable
        style={{ alignSelf: "center" }}
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text
          style={styles.loginText}
        >{`Don't speak English?\nContinuar en Espanol`}</Text>
      </Pressable>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    marginHorizontal: 4,
  },
  container: {
    paddingHorizontal: 20,
    // marginTop: 20
    // alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "KarlaRegular",
    fontSize: 16,
    lineHeight: 20,
    textDecorationLine: "underline",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontFamily: "KarlaMedium",
    fontSize: 24,
    textAlign: "left",
  },
  description: {
    fontFamily: "KarlaRegular",
    fontSize: 16,
    textAlign: "left",
  }
});

export default StartScreen;
