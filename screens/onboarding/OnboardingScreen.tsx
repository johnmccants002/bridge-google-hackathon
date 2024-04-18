import * as React from "react";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

import CTAButton from "@/components/buttons/CTAButton";
import { Colors } from "@/constants/Colors";
import { window } from "@/constants/Web";
import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carouseltem from "../onboarding-next/Carouseltem";
import OnboardingZero from "./svgs/OnboardingZero";

const PAGE_WIDTH = window.width;

function Index() {
  const windowWidth = useWindowDimensions().width;
  const [data, setData] = React.useState([...new Array(5).keys()]);
  const [isVertical, setIsVertical] = React.useState(false);
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
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
        backgroundColor: Colors.accentPrimary,
      }}
    >
      <View style={styles.container}>
        <Carouseltem
          component={<OnboardingZero />}
          title="Immigration support the right way"
          description="Bridge is your guide to finding essential resources and support-no matter where you are in your immigration journey. "
          containerStyle={{
            height: 460,
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: Colors.accentLight,
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 8,
          }}
        />
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
        onPress={() => router.push("/onboarding")}
        text="Get Started"
        type="primary"
        // style={{ width: 160 }}
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
    marginTop: 20,
    alignItems: "center",
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
});

export default Index;
