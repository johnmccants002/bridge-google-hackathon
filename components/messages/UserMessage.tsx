import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import BotIcon from "./BotIcon";
import Fonts from "@/constants/Fonts";
import Color from "@/constants/Color";
import UserIcon from "./UserIcon";

type Props = {
  message: string;
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
          backgroundColor: Color.white,
          borderRadius: 8,
          flexGrow: 1,
          paddingHorizontal: 12,
        }}
      >
        <Text style={{ fontFamily: Fonts.medium, color: Color.accentDark }}>
          {props.message}
        </Text>
      </View>
      <UserIcon />
    </View>
  );
};

export default UserMessage;
