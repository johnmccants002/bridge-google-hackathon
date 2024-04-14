import LogoContainer from "@/components/LogoContainer";
import BotMessage from "@/components/messages/BotMessage";
import UserMessage from "@/components/messages/UserMessage";
import { Colors } from "@/constants/Colors";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
} from "react-native";
import ButtonDisplay from "./ButtonDisplay";
import { FontAwesome } from "@expo/vector-icons";
import LocationButton from "@/components/buttons/LocationButton";

type Props = {};

const ChatScreen = (props: Props) => {
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const inputRef = useRef<TextInput | null>(null);
  const [message, setMessage] = useState("");
  const [components, setComponents] = useState<React.JSX.Element[] | null>(
    null
  );
  const [keyboardPadding, setKeyboardPadding] = useState(0);
  const bottomPosition = useRef(new Animated.Value(20)).current; // Initial bottom position

  const scrollToBottom = () => {
    if (scrollViewRef) {
      scrollViewRef.current?.scrollToEnd();
    }
  };

  const sendMessage = () => {
    if (scrollViewRef) {
      if (components !== null) {
        setComponents([...components, <UserMessage />]);
      } else {
        setComponents([<UserMessage />]);
      }
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardStatus("Keyboard Shown");
      Animated.timing(bottomPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      scrollToBottom();
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(bottomPosition, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }).start();

      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [components]);
  return (
    <KeyboardAvoidingView
      style={[
        {
          //   flex: 1,
          height: height,
          backgroundColor: Colors.accentPrimary,
          paddingBottom: keyboardPadding,
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LogoContainer />
      <ScrollView
        style={{ width: width, paddingTop: 40 }}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}
        ref={scrollViewRef}
      >
        <BotMessage />
        <UserMessage />
        <ButtonDisplay />
        <LocationButton
          type="primary"
          onPress={() => {}}
          style={{ width: 200 }}
        />
        {components}
      </ScrollView>
      <Animated.View
        style={{
          //   width: width * 0.8,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",

          bottom: bottomPosition,
          right: 20,
          left: 20,
          height: 60,
          position: "relative",
        }}
      >
        <TextInput
          style={styles.textInput}
          ref={inputRef}
          allowFontScaling
          editable
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)}
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
          <Pressable onPress={sendMessage}>
            <FontAwesome
              name={message === "" ? "microphone" : "arrow-circle-o-up"}
              size={24}
              color={Colors.accentPrimary}
            />
          </Pressable>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
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
  textInputTwo: {
    backgroundColor: "white",
    width: "90%",
    // flexGrow: 1,
    height: 44,
    borderRadius: 8,
    padding: 8,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 20,

    fontSize: 16,
    color: "#125858",
  },
});

export default ChatScreen;
