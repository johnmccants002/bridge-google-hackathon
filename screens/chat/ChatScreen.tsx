import LogoContainer from "@/components/LogoContainer";
import BotMessage from "@/components/messages/BotMessage";
import UserMessage from "@/components/messages/UserMessage";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import ButtonDisplay from "./ButtonDisplay";

type Props = {};

const ChatScreen = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.accentPrimary }}>
      <LogoContainer />
      <ScrollView style={{ width: width }}>
        <BotMessage />
        <UserMessage />
        <ButtonDisplay />
      </ScrollView>
      <View
        style={{
          width: width * 0.8,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <TextInput
          style={styles.textInput}
          allowFontScaling
          editable
          multiline
          textAlignVertical="center"
          placeholder="Start typing here"
          placeholderTextColor="#125858"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    // width: 240,
    width: "100%",
    // minHeight: 32,
    borderRadius: 8,
    padding: 8,
    paddingTop: 8,
    marginTop: 20,
    marginBottom: 40,
    fontSize: 16,
    color: "#125858",
  },
});

export default ChatScreen;
