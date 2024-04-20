import React from "react";
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
import { Colors } from "@/constants/Colors";
import CTAButton from "@/components/buttons/CTAButton";
import PrimaryTextInput from "@/components/inputs/PrimaryTextInput";

type Props = {};

const LoginScreen = (props: Props) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
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
          <PrimaryTextInput label="Email" placeholder="example@mail.com" />
          <PrimaryTextInput label="Password" placeholder="********" />
        </View>

        <CTAButton
          style={{ marginTop: 20 }}
          onPress={() => router.push("/profile")}
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
    backgroundColor: Colors.accentPrimary,
    zIndex: 1,
  },
  loginText: {
    color: "#E9FBFF",
  },
});

export default LoginScreen;
