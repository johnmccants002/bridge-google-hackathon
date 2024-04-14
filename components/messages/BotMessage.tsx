import React, { useState } from "react";
import { View, Text } from "react-native";
import BotIcon from "./BotIcon";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import LoadingAnimation, { Dot } from "../LoadingAnimation";

type Props = {
  message: string;
  delay?: number;
};

const BotMessage = (props: Props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

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
      {loading ? (
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Colors.accentPrimary,
            width: 120,
            height: "auto",
          }}
        >
          <Dot animationDelay={0} />
          <Dot animationDelay={200} />
          <Dot animationDelay={400} />
        </View>
      ) : (
        <View
          style={{
            padding: 8,
            backgroundColor: Colors.offWhite,
            borderRadius: 8,
            paddingHorizontal: 12,
            flexGrow: 1,
            maxWidth: 300,
          }}
        >
          <Text style={{ fontFamily: Fonts.medium, color: Colors.accentDark }}>
            {props.message}
          </Text>
        </View>
      )}
    </View>
  );
};

export default BotMessage;
