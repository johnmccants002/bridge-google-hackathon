import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import CTAButton from "./buttons/CTAButton";

type Props = {
  onPress: () => void;
};

const ToolTip = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.accentLight,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        gap: 20,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "KarlaMedium",
          fontSize: 18,
          color: Colors.accentDark,
          paddingHorizontal: 20,
          maxWidth: 300,
        }}
      >
        {`Bridge uses the info you provide to pull resources from federal, state, and local databases. \n\n Factors that help us determine available resources: \n\n ● Age \n ● Household size \n ● Income \n ● Employment status \n ● Dependents`}
      </Text>
      <CTAButton
        onPress={props.onPress}
        text="Ok"
        type="secondary"
        style={{ width: 120 }}
      />
    </View>
  );
};

export default ToolTip;
