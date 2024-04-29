import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import LogoContainer from "../../components/LogoContainer";
import { defaultStyles } from "../../components/defaultStyles";
import Color from "@/constants/Color";
import PrimaryTextInput from "@/components/inputs/PrimaryTextInput";
import CTAButton from "@/components/buttons/CTAButton";
import { useRouter } from "expo-router";
import { signup } from "@/services/api-serivce";
import axios from "axios";

type Props = {};

const Index = (props: Props) => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (fieldName: string, value: string) => {
    setUser((user) => ({
      ...user,
      [fieldName]: value,
    }));
  };

  const createAccount = async () => {
    try {
      const response = await signup(user.email, user.password);
      console.log("Registration response:", response);
      router.push("/profile");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <LogoContainer />
      {/* TODO: Implement as a scrollView with offset when keyboard is revealed in mobile */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("@/assets/images/bridgeicon.png")}
          style={{ height: 80, width: 80 }}
        />
        <Text style={defaultStyles.textBold}>
          Creating a bridge account lets you save your results and access them
          anytime.
        </Text>
        <View
          style={{
            paddingTop: 20,
            flexDirection: "column",
            gap: 12,
            width: width,
            alignItems: "center",
          }}
        >
          <PrimaryTextInput label="First name" placeholder="John" />
          <PrimaryTextInput label="Last name" placeholder="Smith" />
          <PrimaryTextInput
            label="Email"
            placeholder="example@mail.com"
            onChangeText={(text) => handleChange("email", text)}
          />
          <PrimaryTextInput
            label="Password"
            placeholder="********"
            onChangeText={(text) => handleChange("password", text)}
          />

          <CTAButton
            style={{ marginTop: 20 }}
            onPress={() => createAccount()}
            text="Create Account"
            type="primary"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.accentPrimary,
    zIndex: 1,
  },
  input: {
    backgroundColor: "white",
    width: 240,
    color: "gray",
    height: 35,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  loginText: {
    color: "#E9FBFF",
  },
});

export default Index;
