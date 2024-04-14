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
  Pressable,
} from "react-native";
import ButtonDisplay from "./ButtonDisplay";
import { FontAwesome } from "@expo/vector-icons";

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
          //   width: width * 0.8,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",

          bottom: 40,
          right: 20,
          left: 20,
          height: 60,
          position: "relative",
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
        <View
          style={{
            position: "relative",
            right: 40,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Pressable>
            <FontAwesome
              name="microphone"
              size={24}
              color={Colors.accentPrimary}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    width: "90%",
    // flexGrow: 1,
    height: 44,
    borderRadius: 8,
    padding: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,

    fontSize: 16,
    color: "#125858",
  },
});

export default ChatScreen;
