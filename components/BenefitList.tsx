import { useState, useEffect, ReactElement } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { BenefitData, Datum, data } from "@/components/mockData/benefits_mock";
import { Benefit } from "@/components/mockData/benefits_mock";
import * as WebBrowser from "expo-web-browser";
import BenefitCell from "./BenefitCell";

interface Props {
  data: Datum;
}

const ResourceScreen = (props: Props) => {
  const router = useRouter();

  const { data } = props;

  const CollapsableItem = () => {
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
          <TouchableOpacity onPress={() => setCollapsed(!isCollapsed)}>
            <AntDesign name={isCollapsed ? "down" : "up"} size={24} />
          </TouchableOpacity>
        </View>
        {isCollapsed ? <></> : <Benefits />}
      </View>
    );
  };

  useEffect(() => {}, []);
  return <CollapsableItem />;
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

export default ResourceScreen;
