import * as WebBrowser from "expo-web-browser";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Benefit } from "./mockData/benefits_mock";

interface BenefitCellProps {
  benefit: Benefit;
}

const BenefitCell = (props: BenefitCellProps) => {
  const { description, category, link, name } = props.benefit;
  const handleLinkPressed = () => {
    if (Platform.OS === "web") {
      const win = window.open(link, "_blank");
      // win.focus();
    } else {
      WebBrowser.openBrowserAsync(link);
    }
  };

  return (
    <View style={styles.descriptionItems}>
      <View style={styles.row}>
        <Text style={styles.textRegular}>{name}</Text>
        <Text>{"(" + category + ")"}</Text>
      </View>
      <Text style={styles.textSmall}>{description}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#10AB8F",
          padding: 12,
          borderRadius: 16,
          height: 24,
          width: 180,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
        }}
        onPress={handleLinkPressed}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "KarlaRegular",
            textAlign: "center",
            fontSize: 16,
            alignSelf: "center",
            // width: 200,
            height: 20,
          }}
        >
          Link to Website
        </Text>
        <Image
          source={require("@/assets/images/arrow-up-right.png")}
          style={{ height: 14, width: 14 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
  descriptionItems: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  buttonText: {
    color: "#227272",
    fontFamily: "KarlaBold",
  },
  textRegular: {
    fontFamily: "KarlaRegular",
    fontSize: 16,
    padding: 0,
  },
  textBold: {
    fontFamily: "KarlaRegular",
    fontSize: 24,
  },
  textSmall: {
    fontFamily: "KarlaRegular",
    fontSize: 14,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    left: 5,
    right: 5,
  },
});

export default BenefitCell;
