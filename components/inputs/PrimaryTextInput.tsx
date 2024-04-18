import React from "react";
import { Text, StyleSheet, ViewStyle, TextInput, useWindowDimensions, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { defaultStyles } from "../defaultStyles";

type TextInputProps = {
  onChange?: () => void;
  label?: string;
  placeholder: string;
};

const PrimaryTextInput: React.FC<TextInputProps> = ({ onChange, label, placeholder }) => {
  const { width } = useWindowDimensions();
  
  const styles = StyleSheet.create({
    primary: {
      backgroundColor: Colors.accentLight,
      width: Math.min(width - 40, 800),
      color: Colors.accentDark,
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
      <TextInput style={styles.primary} placeholder={placeholder} onChange={onChange}/>
    </View>
  )
}

export default PrimaryTextInput;