import Color from "@/constants/Color";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react"
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationHeaderProps = {
  tintColor?: string,
  backgroundColor?: string,
  rightItem?: React.JSX.Element
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ tintColor, backgroundColor, rightItem }) => {
  const router = useRouter();
  const tint = tintColor ?? Color.accentDark
  const background = backgroundColor ?? Color.accentLight

  const styles = StyleSheet.create({
    backButton: {
        backgroundColor: background,
        justifyContent: "space-between",
        paddingVertical: Platform.OS === "web" ? 40 : 8,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    backButtonText:{
      fontFamily: "KarlaRegular",
      fontWeight: "500",
      fontSize: 24,
      color: tint,
    },
    flexContainer: {
      flexDirection: "row",
          alignItems: "center",
          gap: 4,
    },
  })
  
  return (
  <SafeAreaView edges={["top"]} style={styles.backButton} >
      <Pressable style={styles.flexContainer} onPress={router.back} >
        <AntDesign name="arrowleft" size={Platform.OS === "web" ? 36 : 24} color={tint} />
        <Text style={styles.backButtonText}>
          Back
        </Text>
      </Pressable>
      {rightItem}
    </SafeAreaView>
    )
}

export default NavigationHeader