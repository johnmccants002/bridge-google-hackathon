import * as React from "react";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

import CTAButton from "@/components/buttons/CTAButton";
import { window } from "@/constants/Web";
import {
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carouseltem from "./Carouseltem";
import { useRouter } from "expo-router";

const PAGE_WIDTH = window.width;

function Index() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [data, setData] = React.useState([...new Array(5).keys()]);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const router = useRouter();
  const navigateToLogin = () => {
    router.replace("/login");
  };

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: PAGE_WIDTH / 2,
      } as const);

  const renderDots = () => (
    <View style={styles.dotContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: currentIndex === index ? "#404040" : "white" },
          ]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
      <View style={styles.container}>
        <Carousel
          {...baseOptions}
          loop
          enabled // Default is true, just for demo
          ref={ref}
          defaultScrollOffsetValue={scrollOffsetValue}
          testID={"xxx"}
          style={{ width: 340, height: 440 }}
          autoPlay={true}
          autoPlayInterval={3000}
          data={data}
          onScrollStart={() => {
            console.log("===1");
          }}
          onScrollEnd={() => {
            console.log("===2");
          }}
          onConfigurePanGesture={(g) => g.enabled(false)}
          pagingEnabled={isPagingEnabled}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ index }) => <Carouseltem key={index} index={index} />}
        />
        {renderDots()}
      </View>
      <CTAButton
        onPress={() => {}}
        text="Get Started"
        type="primary"
        style={{ width: 160 }}
      />
      <Pressable
        style={{ bottom: 60, alignSelf: "center", position: "absolute" }}
        onPress={navigateToLogin}
      >
        <Text style={styles.loginText}>Been here already? Login.</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    marginHorizontal: 4,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "KarlaRegular",
    fontSize: 19,
    lineHeight: 28,
    textDecorationLine: "underline",
    color: "white",
  },
});

export default Index;
