import About from "@/screens/queryEntry/QueryEntryScreen";
import ResourceScreen from "@/screens/results";
import React from "react";
import { View, useWindowDimensions } from "react-native";
import { response } from "@/screens/results/resources-response";
import LogoContainer from "@/components/LogoContainer";

type Props = {};

const Page = (props: Props) => {
  const { width, height } = useWindowDimensions();
  const baseWidth = 768;
  const minPadding = 20;
  const maxPadding = 100;

  // Calculate the padding. It starts at 20 when width is 768, and increases as width increases, up to a maximum of 100.
  let dynamicPadding = minPadding;
  if (width > baseWidth) {
    const widthDifference = width - baseWidth;
    // Calculate the rate of increase, you might adjust these values to suit your design
    // Assuming the full padding is reached at an additional 768 pixels (i.e., at 1536px width)
    dynamicPadding += ((maxPadding - minPadding) * widthDifference) / baseWidth;
    // Cap the padding at the maxPadding value
    dynamicPadding = Math.min(dynamicPadding, maxPadding);
  }
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
            paddingHorizontal: dynamicPadding,
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
