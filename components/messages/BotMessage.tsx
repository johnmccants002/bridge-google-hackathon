import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import BotIcon from "./BotIcon";
import Fonts from "@/constants/Fonts";
import Color from "@/constants/Color";
import LoadingAnimation, { Dot } from "../LoadingAnimation";
import ToolTipIcon from "../svgs/ToolTipIcon";

type Props = {
  message: string;
  delay?: number;
  toolTip?: boolean;
  toolTipPressed?: () => void;
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
            backgroundColor: Color.accentPrimary,
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
            backgroundColor: Color.offWhite,
            borderRadius: 8,
            paddingHorizontal: 12,
            flexGrow: 1,
            maxWidth: 300,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.medium,
              fontSize: 16,
              color: Color.accentDark,
              width: props.toolTip ? "80%" : "auto",
            }}
          >
            {props.message}
          </Text>
          {props.toolTip ? (
            <Pressable onPress={props.toolTipPressed}>
              <ToolTipIcon />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      )}
    </View>
  );
};

export default BotMessage;
