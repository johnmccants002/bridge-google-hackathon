import LogoContainer from "@/components/LogoContainer";
import LocationButton from "@/components/buttons/LocationButton";
import BotMessage from "@/components/messages/BotMessage";
import UserMessage from "@/components/messages/UserMessage";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import ButtonDisplay from "./ButtonDisplay";

type Props = {};

const ChatScreen = (props: Props) => {
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const inputRef = useRef<TextInput | null>(null);
  const [message, setMessage] = useState("");
  const [components, setComponents] = useState<React.JSX.Element[]>([]);
  const [keyboardPadding, setKeyboardPadding] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState({
    location: false,
    situation: false,
  });
  const bottomPosition = useRef(new Animated.Value(20)).current; // Initial bottom position

  const botMessages = [
    "Let's get started on your journey to finding assistance tailored to your needs!",
    "First things first, where are you located?",
    "Great, thanks! This will help us connect you to state and local resources.",
    "Which of the following best describes your situation?",
  ];

  const scrollToBottom = () => {
    if (scrollViewRef) {
      scrollViewRef.current?.scrollToEnd();
    }
  };

  const sendMessage = () => {
    setComponents([
      ...components,
      <UserMessage message={message} key={components.length} />,
    ]);
    setMessage("");
  };

  const locationPressed = () => {
    setQuestionsAnswered({ ...questionsAnswered, location: true });

    setComponents((prevComponents) => {
      // Replace the component with key "2" and add new components
      if (prevComponents)
        return [
          ...prevComponents.map((comp) =>
            comp.key === "2" ? (
              <UserMessage message={"Sacramento, CA"} key={2} />
            ) : (
              comp
            )
          ),
          <BotMessage message={botMessages[2]} key={3} />,
          <BotMessage message={botMessages[3]} key={4} />,
          <ButtonDisplay key={5} />, // Make sure to assign a unique key
        ];
    });
  };

  const sendFirstTwoMessages = () => {
    setComponents([
      ...components,
      <BotMessage message={botMessages[0]} key={0} />,
      <BotMessage message={botMessages[1]} key={1} />,
      <LocationButton
        onPress={locationPressed}
        type="primary"
        key={2}
        style={{ width: 240, alignSelf: "center", marginTop: 12 }}
      />,
    ]);
  };

  const sendNextTwoMessages = () => {
    setComponents([
      ...components,
      <BotMessage message={botMessages[2]} key={3} />,
      <BotMessage message={botMessages[3]} key={4} />,
      <ButtonDisplay />,
    ]);
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

    if (components.length === 0) {
      sendFirstTwoMessages();
    }

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
        contentContainerStyle={{ paddingBottom: 100, gap: 8 }}
        ref={scrollViewRef}
      >
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
