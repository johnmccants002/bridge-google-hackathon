import React, { useState } from "react";
import { login } from "@/services/api-serivce";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import LogoContainer from "../../components/LogoContainer";
import { AntDesign } from "@expo/vector-icons";
import { defaultStyles } from "../../components/defaultStyles";
import { useRouter } from "expo-router";
import Color from "@/constants/Color";
import CTAButton from "@/components/buttons/CTAButton";
import PrimaryTextInput from "@/components/inputs/PrimaryTextInput";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
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

  const handleLogin = async () => {
    try {
      const response = await login(user.email, user.password);
      console.log("Login response:", response.data);
      router.push("/profile");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <LogoContainer />
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
          Login to your Bridge account.
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
        </View>

        <CTAButton
          style={{ marginTop: 20 }}
          // onPress={() => router.push("/profile")}
          onPress={handleLogin}
          text="Login"
          type="primary"
        />

        <Pressable onPress={() => router.push("/register")}>
          <Text
            style={{
              textDecorationLine: "underline",
              fontFamily: "Karla-Medium",
              fontSize: 14,
            }}
          >
            Already have an account?
          </Text>
        </Pressable>
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
  loginText: {
    color: "#E9FBFF",
  },
});

export default Index;
