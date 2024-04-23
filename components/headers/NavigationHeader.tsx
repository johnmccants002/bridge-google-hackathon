import Color from "@/constants/Color";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react"
import { Pressable, Text, View, StyleSheet } from "react-native";

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
        height: 120,
        paddingTop: 60,
        padding: 20,
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
  <View style={styles.backButton} >
      <Pressable style={styles.flexContainer} onPress={router.back} >
        <AntDesign name="arrowleft" size={24} color={tint} />
        <Text style={styles.backButtonText}>
          Back
        </Text>
      </Pressable>
      {rightItem}
    </View>
    )
}

export default NavigationHeader