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
          <View>
            <Text style={defaultStyles.inputLabelText}>Email</Text>
            <TextInput
              style={[styles.input, { width: width - 40 }]}
              placeholder="example@mail.com"
            />
          </View>
          <View>
            <Text style={defaultStyles.inputLabelText}>Password</Text>
            <TextInput
              style={[styles.input, { width: width - 40 }]}
              placeholder="********"
            />
          </View>
        </View>

        <TouchableOpacity
          style={defaultStyles.button}
          onPress={() => router.push("/profile")}
        >
          <Text style={defaultStyles.buttonText}>Login</Text>
          <AntDesign name="arrowright" color={"#1C6A6A"} />
        </TouchableOpacity>
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

export default LoginScreen;
