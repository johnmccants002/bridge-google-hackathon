import ToolTip from "@/components/ToolTip";
import CTAButton from "@/components/buttons/CTAButton";
import NavigationHeader from "@/components/headers/NavigationHeader";
import BotMessage from "@/components/messages/BotMessage";
import UserMessage from "@/components/messages/UserMessage";
import { buildPrompt, runPrompt } from "./gemini-service";
import Color from "@/constants/Color";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
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
  Text,
  Modal,
} from "react-native";

type Props = {};

const Index = (props: Props) => {
  const userInputs: UserInputs = useLocalSearchParams();
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const inputRef = useRef<TextInput | null>(null);
  const [message, setMessage] = useState("");
  const [components, setComponents] = useState<React.JSX.Element[]>([]);
  const [showToolTip, setShowToolTip] = useState(false);
  const [keyboardPadding, setKeyboardPadding] = useState(0);
  const [botStep, setBotStep] = useState(0);
  const [isFetchingResults, setIsFetchingResults] = useState(false);

  const bottomPosition = useRef(new Animated.Value(20)).current; // Initial bottom position
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const createBotMessage = (type: string, key: number) => {
    switch (type) {
      case "firstMessage":
        return (
          <BotMessage
            message="Now tell me a little about yourself and your situation. How may I assist you?"
            key={key}
            toolTip={true}
            toolTipPressed={() => setShowToolTip(true)}
          />
        );
      case "thanks":
        return (
          <BotMessage message="Thanks, that's helpful to know!" key={key} />
        );
      case "ageQuestion":
        return (
          <BotMessage
            message="One more thing - could you tell us how old you are?"
            key={key}
          />
        );
      case "resultsFound":
        return (
          <BotMessage
            message="Awesome, we've got everything we need! Let's take a look at what we found."
            key={key}
          />
        );
      default:
        return <></>; // Return null or a default component if the type is not found
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef) {
      scrollViewRef.current?.scrollToEnd();
    }
  };

  const analyzeAndSendMessage = () => {
    setComponents((prev) => [
      ...prev,
      <UserMessage key={prev.length} message={message} />,
    ]);
    storeUserInput();
    setMessage("");
    analyzeAndSendBotMessage();
    setBotStep(botStep + 1);
  };

  const storeUserInput = () => {
    switch (botStep) {
      case 0:
        userInputs.situation = message
      case 1:
        userInputs.age = message
    }
  }

  const analyzeAndSendBotMessage = () => {
    console.log(components.length);

    switch (botStep) {
      case 0:
        setComponents((prev) => [
          ...prev,
          createBotMessage("thanks", components.length + 1),
          createBotMessage("ageQuestion", components.length + 2),
        ]);
        return;

      case 1:
        setComponents((prev) => [
          ...prev,
          createBotMessage("resultsFound", components.length + 3),
        ]);
        return;
    }
  };

  const sendBotResultsMessage = () => {
    setTimeout(() => {
      setComponents((prev) => [
        ...prev,
        <BotMessage
          key={prev.length}
          message={
            "Awesome, we've got everything we need! Let's take a look at what we found."
          }
        />,
      ]);
    }, 500);

    setTimeout(() => {
      setShowResults(true);
    }, 2000);
  };

  const sendFirstMessage = () => {
    // Add the first bot message immediately

    // Add the second bot message after an additional delay
    setTimeout(() => {
      setComponents((prevComponents) => [
        ...prevComponents,
        <BotMessage
          message={
            "Now tell me a little about yourself and your situation. How may I assist you?"
          }
          key={0}
          toolTip={true}
          toolTipPressed={() => {
            setShowToolTip(true);
          }}
        />,
      ]);
    }, 500); // Total 8 seconds delay (3s + 5s)

    // Add the location button after an additional delay
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
      sendFirstMessage();
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
          backgroundColor: Color.accentPrimary,
          paddingBottom: keyboardPadding,
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <NavigationHeader tintColor="white" backgroundColor={Color.accentPrimary} />

      <ScrollView
        style={{ width: width, paddingTop: 40 }}
        contentContainerStyle={{ paddingBottom: 100, gap: 8 }}
        ref={scrollViewRef}
      >
        {components}
      </ScrollView>
      {botStep === 2 ? (
        <CTAButton
          type="primary"
          text="See my results"
          isAnimating={isFetchingResults}
          onPress={ () => {
            if (isFetchingResults) {
              return
            }

            setIsFetchingResults(true)
            console.log(userInputs)
            runPrompt(buildPrompt(userInputs))
            .then(res => {
              const serializedData = JSON.stringify(res.data);
              setIsFetchingResults(false)
              router.push({ pathname: "/results", params: { data: serializedData }})
            })
            .catch(err => console.log(err))

          }}
          style={{
            left: 20,
            right: 20,
            position: "absolute",
            bottom: 40,
          }}
        />
      ) : (
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
            <Pressable onPress={analyzeAndSendMessage}>
              <FontAwesome
                name={message === "" ? "microphone" : "arrow-circle-o-up"}
                size={24}
                color={Color.accentPrimary}
              />
            </Pressable>
          </View>
        </Animated.View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showToolTip}
        onRequestClose={() => {
          setShowToolTip(false);
        }}
        presentationStyle="overFullScreen"
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
            backgroundColor: "rgba(52, 52, 52, 0.4)",
          }}
        >
          <ToolTip
            onPress={() => {
              setShowToolTip(false);
            }}
          />
        </View>
      </Modal>
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

export default Index;
