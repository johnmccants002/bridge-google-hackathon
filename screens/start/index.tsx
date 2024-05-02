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
  Dimensions, 
  Platform,
} from "react-native";
import IllustrationMosaic from "./IllustrationMosaic";

function StartScreen() {
  const router = useRouter();
  const navigateToLogin = () => {
    router.replace("/login");
  };

  const { width } = Dimensions.get('window');
  const isDesktop = width >= 768 && Platform.OS === 'web';

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
          margin: 20,
          ...(Platform.OS === 'web' ? { alignItems: 'left', width: '60%', margin: 50, } : {})
        }}
      >
        <IllustrationMosaic />
        <View style={{...(Platform.OS === 'web' ? { paddingHorizontal: 30 } : {})}}>
          <Text style={styles.title}>Immigration support</Text> 
          <Text style={{fontFamily: "KarlaRegular", fontSize: 24, ...(Platform.OS === 'web' ? { fontSize: 42, lineHeight: 49 } : {}) }}>the right way</Text>
          <Text style={styles.description}>Bridge is your guide to finding essential resources and support-no matter where you are in your immigration journey.</Text>
        </View>
        {isDesktop && (
          <CTAButton
            style={{ marginTop: -5, marginBottom: 30, marginLeft: '40%'}}
            onPress={() => router.push("/onboarding")}
            text="Get Started"
            type="desktopPrimary"
          />
        )}
      </View>
      {!isDesktop && (
        <CTAButton
          style={{ marginVertical: 20 }}
          onPress={() => router.push("/onboarding")}
          text="Get Started"
          type="primary"
        />
      )}
      
      <View style={{ ...Platform.OS === 'web' ? {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '58%', marginBottom: 50, marginTop: -20} : {} }}>
      <Pressable
        style={{ alignSelf: "center", ...(Platform.OS === 'web' ? {alignSelf: 'left'} : {}) }}
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text style={styles.loginText}>Been here already? Login.</Text>
      </Pressable>

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
      </View>
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
    fontWeight: "700",
    textAlign: "left",
    ...Platform.select({
      web: {
        fontSize: 42,
        marginTop: -200,
      }
    })
  },
  description: {
    fontFamily: "KarlaRegular",
    fontSize: 16,
    textAlign: "left",
    ...Platform.select({
      web: {
        fontSize: 24,
        flexWrap: "wrap",
        width: '90%',
        marginTop: 20,
      }
    })
  }
});

export default StartScreen;
