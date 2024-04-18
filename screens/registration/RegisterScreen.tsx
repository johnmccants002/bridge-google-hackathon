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
import { Colors } from "@/constants/Colors";
import PrimaryTextInput from "@/components/inputs/PrimaryTextInput";
import CTAButton from "@/components/buttons/CTAButton";
import { useRouter } from "expo-router";
import axios from "axios";

type Props = {};

const RegisterScreen = (props: Props) => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const createAccount = async () => {
    let payload = { email: email, password: password }
    let response = await axios.post("https://dpnk8ddrr0.execute-api.us-west-1.amazonaws.com/dev/signup", payload, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    console.log(response)
  }
  
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
          <PrimaryTextInput label="Email" placeholder="example@mail.com" onChangeText={ (text) => setEmail(text)}/>
          <PrimaryTextInput label="Password" placeholder="********" onChangeText={ (text) => setPassword(text)} />

          <CTAButton
          style={{ marginTop: 20 }}
          onPress={() => createAccount() }
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

export default RegisterScreen;
