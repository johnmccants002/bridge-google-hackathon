import { Datum } from "@/components/mockData/benefits_mock";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import BenefitList from "./BenefitList";
import { defaultStyles } from "./defaultStyles";

interface Props {
  data: Datum[];
}

const ResourceScreen = (props: Props) => {
  const router = useRouter();

  const { data } = props;

  useEffect(() => {}, []);
  return (
    <ScrollView
      contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      style={styles.container}
    >
      <Text
        style={[
          defaultStyles.textBold,
          { color: "#125858", paddingRight: 80, paddingTop: 12 },
        ]}
      >
        We found 8 resources available to you.
      </Text>
      {data.map((item: Datum, idx: number) => (
        <BenefitList data={item} key={idx} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9FBFF",
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
