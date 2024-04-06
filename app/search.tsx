import About from "@/components/About";
import ResourceScreen from "@/components/ResourceScreen";
import React from "react";
import { View, useWindowDimensions } from "react-native";
import { response } from "@/components/mockData/benefits_mock";
import LogoContainer from "@/components/LogoContainer";

type Props = {};

const Page = (props: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          width: width < 768 ? width : width / 2,
          height: height,
          flex: 1,
          gap: 120,
          backgroundColor: "#4BA4A4",
          padding: 40,
        }}
      >
        <LogoContainer />
        <About />
      </View>
      {width > 768 && (
        <View
          style={{
            width: width / 2,
            paddingHorizontal: 100,
            paddingTop: 60,
            backgroundColor: "#E9FBFF",
          }}
        >
          <ResourceScreen data={response.data} />
        </View>
      )}
    </View>
  );
};

export default Page;
