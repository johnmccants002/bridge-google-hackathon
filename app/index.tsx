import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import StartScreen from "@/screens/start/StartScreen";
import LoadingAnimation from "@/components/LoadingAnimation";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import OnboardingOne from "@/screens/onboarding/svgs/OnboardingOne";
import QueryEntryScreen from "@/screens/queryEntry/QueryEntryScreen";
import ChatScreen from "@/screens/chat/ChatScreen";

interface Props {}

const Page = (props: Props) => {
  useEffect(() => {}, []);
  return <ChatScreen />;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#4BA4A4",
    // zIndex: 1,
    // paddingHorizontal: 40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Page;
