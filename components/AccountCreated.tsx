import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import { defaultStyles } from "./defaultStyles";
import LogoContainer from "./LogoContainer";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const AccountCreated = (props: Props) => {
  const { height } = useWindowDimensions();
  return (
    <View style={defaultStyles.container}>
      <LogoContainer />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          height: height - 240,
        }}
      >
        <Image
          source={require("@/assets/images/happy.png")}
          style={{ height: 80, width: 80, marginVertical: 12 }}
        />
        <Text style={defaultStyles.textBold}>
          Congrats! Your account was created successfully.
        </Text>
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>See my profile</Text>
          <AntDesign name="arrowright" color={"#1C6A6A"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountCreated;
