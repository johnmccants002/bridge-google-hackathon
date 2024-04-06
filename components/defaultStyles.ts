import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    // width: 240,
    color: "gray",
    height: 35,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textBold: {
    fontFamily: "KarlaRegular",
    color: "white",
    fontSize: 24,
    lineHeight: 28,
  },
  buttonText: {
    color: "#227272",
    fontFamily: "KarlaBold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    width: 164,
    height: 48,
    borderRadius: 16,
    gap: 8,
    justifyContent: "center",
    marginTop: 40,
  },
  inputLabelText: {
    fontSize: 16,
    fontFamily: "KarlaRegular",
    color: "#E9FBFF",
    lineHeight: 18.7,
  },
  container: {
    flex: 1,
    backgroundColor: "#4BA4A4",
    zIndex: 1,
  },
});
