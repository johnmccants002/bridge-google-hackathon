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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { isValidUrl } from "@/constants/helpers";

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
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <Text style={[styles.textRegular, { width: 140 }]}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            maxWidth: 200,
          }}
        >
          <MaterialCommunityIcons
            name={categoryIcons[`${category}`].icon}
            color={"#10AB8F"}
          />

          <Text
            style={{
              fontFamily: "KarlaRegular",
              fontSize: 14,
              color: "#10AB8F",
              paddingRight: 4,
            }}
          >
            {category}
          </Text>
        </View>
      </View>
      <Text style={styles.textSmall}>{description}</Text>

      {isValidUrl(link) ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#10AB8F",
            padding: 14,
            borderRadius: 16,
            height: 24,
            width: 150,
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
            Link to website
          </Text>
          <Image
            source={require("@/assets/images/arrow-up-right.png")}
            style={{ height: 12, width: 12 }}
          />
        </TouchableOpacity>
      ) : (
        <Text style={styles.textSmall}>{link}</Text>
      )}
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
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    gap: 12,
    paddingTop: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "flex-start",
  },
  buttonText: {
    color: "#227272",
    fontFamily: "KarlaBold",
  },
  textRegular: {
    fontFamily: "KarlaMedium",
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
    width: "90%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    left: 5,
    right: 5,
  },
});

export default BenefitCell;

const categoryIcons = {
  "Financial Assistance": {
    pack: "MaterialCommunityIcons",
    icon: "account-cash",
  },
  "Food and Nutrition": {
    pack: "MaterialCommunityIcons",
    icon: "food-apple",
  },
  Healthcare: {
    pack: "MaterialCommunityIcons",
    icon: "hospital-box",
  },
  Housing: {
    pack: "MaterialCommunityIcons",
    icon: "home-city",
  },
  "Social and Community Support": {
    pack: "MaterialCommunityIcons",
    icon: "account-group",
  },
  default: {
    icon: "account",
  },
};
