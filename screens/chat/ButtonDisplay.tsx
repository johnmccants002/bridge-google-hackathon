import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Colors } from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import CTAButton from "@/components/buttons/CTAButton";

type Props = {};

type ButtonProps = {
  text: string;
  onPress: () => void;
  isSelected: boolean;
};

const Button = ({ text, onPress, isSelected }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={{
        padding: 8,
        borderWidth: 2,
        borderColor: Colors.accentLight,
        backgroundColor: isSelected ? Colors.accentDark : Colors.accentPrimary,
        borderRadius: 24,
        width: "44%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
      underlayColor={Colors.accentDark}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: Fonts.medium,
          fontSize: 16,
          color: Colors.accentLight,
          textAlign: "center",
          padding: 8,
        }}
      >
        {text}
      </Text>
    </TouchableHighlight>
  );
};

const ButtonDisplay = (props: Props) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const handleButtonPress = (buttonText: string) => {
    setSelectedButton(buttonText);
  };
  return (
    <View>
      <View style={{ flexDirection: "column", gap: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            text="Refugee/Asylum seeker"
            isSelected={selectedButton === "Refugee/Asylum seeker"}
            onPress={() => handleButtonPress("Refugee/Asylum seeker")}
          />
          <Button
            text="Seeking Temporary Visa"
            isSelected={selectedButton === "Seeking Temporary Visa"}
            onPress={() => handleButtonPress("Seeking Temporary Visa")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            text="Seeking Green Card (Immigrant Visa)"
            isSelected={
              selectedButton === "Seeking Green Card (Immigrant Visa)"
            }
            onPress={() =>
              handleButtonPress("Seeking Green Card (Immigrant Visa)")
            }
          />
          <Button
            text="On the Path to Citizenship"
            isSelected={selectedButton === "On the Path to Citizenship"}
            onPress={() => handleButtonPress("On the Path to Citizenship")}
          />
        </View>
      </View>
      <TouchableHighlight
        underlayColor={Colors.accentDark}
        style={[
          styles.bottomButton,
          {
            backgroundColor:
              selectedButton === "Other/Unsure"
                ? Colors.accentDark
                : Colors.accentPrimary,
          },
        ]}
        onPress={() => handleButtonPress("Other/Unsure")}
      >
        <Text style={styles.buttonText}>Other/Unsure</Text>
      </TouchableHighlight>

      <View style={{ padding: 8 }}>
        <CTAButton text="Continue" type="primary" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.accentLight,
    textAlign: "center",
    padding: 8,
  },
  bottomButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.accentLight,
    borderRadius: 24,
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8,
  },
});

export default ButtonDisplay;
