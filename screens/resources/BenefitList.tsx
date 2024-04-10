import { Benefit, Datum } from "@/screens/resources/mockData/benefits_mock";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import BenefitCell from "./BenefitCell";

interface Props {
  data: Datum;
}

const ResourceScreen = (props: Props) => {
  const router = useRouter();

  const { data } = props;

  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  const Benefits = () => {
    return (
      <View>
        <View style={styles.line} />

        {data.benefits.map((item: Benefit, idx: number) => (
          <BenefitCell key={idx} benefit={item} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textBold}>{data.type}</Text>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => setCollapsed(!isCollapsed)}
        >
          <Image
            source={
              isCollapsed
                ? require("@/assets/images/down.png")
                : require("@/assets/images/up.png")
            }
            style={{ height: 14, width: 24 }}
          />
        </TouchableOpacity>
      </View>
      {isCollapsed ? <></> : <Benefits />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9FBFF",
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
    alignItems: "center",
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
    fontFamily: "KarlaMedium",
    fontSize: 24,
  },
  textSmall: {
    fontFamily: "KarlaRegular",
    fontSize: 14,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "94%",
    alignSelf: "center",
  },
});

export default ResourceScreen;
