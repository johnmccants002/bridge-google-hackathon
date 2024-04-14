import OnboardingFour from "@/screens/onboarding/svgs/OnboardingFour";
import OnboardingOne from "@/screens/onboarding/svgs/OnboardingOne";
import OnboardingThree from "@/screens/onboarding/svgs/OnboardingThree";
import OnboardingTwo from "@/screens/onboarding/svgs/OnboardingTwo";
import OnboardingZero from "@/screens/onboarding/svgs/OnboardingZero";
import Fonts from "@/constants/Fonts";
import React from "react";
import { View, Text } from "react-native";

type Props = {
  index: number;
};

const Carouseltem = (props: Props) => {
  const components = [
    <OnboardingZero />,
    <OnboardingOne />,
    <OnboardingTwo />,
    <OnboardingThree />,
    <OnboardingFour />,
  ];
  const titles = [
    "Why Bridge?",
    "It's All Here!",
    "Anytime Anywhere",
    "It's All About You",
    "Count On Us!",
  ];
  const descriptions = [
    "Bridge is your guide to finding essential resources and support-no matter where you are in your immigration journey.",
    "No combing through endless clunky government and non profit websites.",
    "Bridge is always available - so you can get the info you need, when you need it.",
    "Information and resources tailored to your specific situation!",
    "No wondering if you're missing something-we are here to support you!",
  ];
  return (
    <View
      style={{
        width: 340,
        height: 440,
        borderRadius: 8,
        backgroundColor: "#E7FFFB",
        alignItems: "center",
        justifyContent: "space-around",

        padding: 8,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ height: 240, width: "auto" }}>
        {components[props.index]}
      </View>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text
          style={{ fontFamily: Fonts.bold, fontSize: 30, textAlign: "center" }}
        >
          {titles[props.index]}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.regular,
            fontSize: 14,
            textAlign: "center",
            paddingHorizontal: 18,
          }}
        >
          {descriptions[props.index]}
        </Text>
      </View>
    </View>
  );
};

export default Carouseltem;
