import React from "react";
import { Text, StyleSheet, ViewStyle, TextInput, useWindowDimensions, View, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import Color from "@/constants/Color";
import { defaultStyles } from "../defaultStyles";

type TextInputProps = {
  onChangeText?: (text: string) => void;
  label?: string;
  placeholder: string;
};

const PrimaryTextInput: React.FC<TextInputProps> = ({ onChangeText, label, placeholder }) => {
  const { width } = useWindowDimensions();
  
  const styles = StyleSheet.create({
    primary: {
      backgroundColor: Color.accentLight,
      width: Math.min(width - 40, 400),
      color: Color.accentDark,
      fontSize: 14,
      fontWeight: "500",
      height: 40,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginTop: 10,
    }
  })

  const labelText = <Text style={defaultStyles.inputLabelText}>{label}</Text>

  return (
    <View>
      { label === null ? <></> : labelText }
      <TextInput style={styles.primary} placeholder={placeholder} onChangeText={onChangeText}/>
    </View>
  )
}

export default PrimaryTextInput;