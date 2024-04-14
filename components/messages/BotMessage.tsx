import React from "react";
import { View, Text } from "react-native";
import BotIcon from "./BotIcon";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

type Props = {
  message: string;
};

const BotMessage = (props: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
      }}
    >
      <BotIcon />
      <View
        style={{
          padding: 8,
          backgroundColor: Colors.offWhite,
          borderRadius: 8,
          paddingHorizontal: 12,
          flexGrow: 1,
        }}
      >
        <Text style={{ fontFamily: Fonts.medium, color: Colors.accentDark }}>
          {props.message}
        </Text>
      </View>
    </View>
  );
};

export default BotMessage;
