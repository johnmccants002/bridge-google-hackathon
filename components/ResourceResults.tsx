import { useState, useEffect, ReactElement } from "react";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { data } from "@/components/mockData/benefits_mock";
import { Benefit } from "@/components/mockData/benefits_mock";

interface Props {}

const ResourceResults = (props: Props) => {
  const router = useRouter();

  const CollapsableItem = () => {
    const [isCollapsed, setCollapsed] = useState<boolean>(false);

    const resultsMock = data.data[0];

    const benefitCell = (
      name: string,
      description: string,
      category: string,
      link: string
    ) => {
      return (
        <View style={styles.descriptionItems}>
          <View style={styles.row}>
            <Text style={styles.textRegular}>{name}</Text>
            <Text>{"(" + category + ")"}</Text>
          </View>
          <Text style={styles.textSmall}>{description}</Text>
          <Text>{link}</Text>
        </View>
      );
    };

    const benefits = () => {
      return (
        <View>
          <View style={styles.line} />
          {resultsMock.benefits.map((item: Benefit) => {
            return benefitCell(
              item.name,
              item.description,
              item.category,
              item.link
            );
          })}
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.textBold}>{resultsMock.type}</Text>
          <Text>V</Text>
        </View>
        {isCollapsed ? <></> : benefits()}
      </View>
    );
  };

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <CollapsableItem />
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

export default ResourceResults;
