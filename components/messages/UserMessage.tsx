import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import BotIcon from "./BotIcon";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import UserIcon from "./UserIcon";

type Props = {
  message?: string;
};

const UserMessage = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        width: width,
      }}
    >
      <View
        style={{
          padding: 8,
          backgroundColor: Colors.white,
          borderRadius: 8,
          flexGrow: 1,
        }}
      >
        <Text style={{ fontFamily: Fonts.medium, color: Colors.accentDark }}>
          Houston, Texas 77001
        </Text>
      </View>
      <UserIcon />
    </View>
  );
};

export default UserMessage;
