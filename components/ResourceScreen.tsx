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
  ScrollView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Datum } from "@/components/mockData/benefits_mock";
import { Benefit } from "@/components/mockData/benefits_mock";
import * as WebBrowser from "expo-web-browser";
import BenefitCell from "./BenefitCell";
import BenefitList from "./BenefitList";

interface Props {
  data: Datum[];
}

const ResourceScreen = (props: Props) => {
  const router = useRouter();

  const { data } = props;

  useEffect(() => {}, []);
  return (
    <ScrollView contentContainerStyle={{ gap: 12 }}>
      {data.map((item: Datum, idx: number) => (
        <BenefitList data={item} key={idx} />
      ))}
    </ScrollView>
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

export default ResourceScreen;
