import ResourceItem from "@/components/ResourceItem";
import UpRightArrow from "@/components/svgs/UpRightArrow";
import Color from "@/constants/Color";
import { Octicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type Props = {};

const ResourceDetailScreen = (props: Props) => {
  const { width } = useWindowDimensions();
  const params = useLocalSearchParams();
  const [showSimilar, setShowSimilar] = useState(false);
  const [showHours, setShowHours] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "flex-start",
        flex: 1,
        paddingHorizontal: 20,
        gap: 16,
        backgroundColor: Color.accentLight,
      }}
      style={{ backgroundColor: Color.accentLight }}
    >
      <Text
        style={{
          fontFamily: "KarlaBold",
          fontSize: 24,
          color: Color.black,
        }}
      >
        United We Dream's Texas Know Your Rights Fact Sheet
      </Text>
      <Text
        style={{
          fontFamily: "KarlaRegular",
          fontSize: 24,
          color: Color.accentDark,
        }}
      >
        List of recommendations for ICE agent encounters
      </Text>
      <Text
        style={{
          fontFamily: "KarlaMedium",
          fontSize: 24,
          color: Color.accentDark,
        }}
      >
        {params.resource}
      </Text>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text
          style={{
            color: Color.accentDark,
            fontSize: 16,
            fontFamily: "KarlaMedium",
          }}
        >
          Address
        </Text>
        <Text
          style={{
            fontFamily: "KarlaRegular",
            fontSize: 16,
            color: Color.accentDark,
          }}
        >
          6363 Richmond Ave, Houston, TX
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Color.accentDark,
              fontSize: 16,
              fontFamily: "KarlaMedium",
            }}
          >
            Hours of Operation
          </Text>
          <Pressable onPress={() => setShowHours(!showHours)}>
            <Octicons
              name={showHours ? "chevron-up" : "chevron-down"}
              size={24}
              color={Color.black}
            />
          </Pressable>
        </View>
        {showHours ? (
          <Text
            style={{
              fontFamily: "KarlaRegular",
              fontSize: 16,
              color: Color.accentDark,
            }}
          >
            {`
Monday 9 AM-9 PM
Tuesday 9 AM-9 PM
Wednesday 9 AM-9 PM
Thursday 9 AM-9 PM
Friday 9AM-6 PM
Saturday Closed
Sunday Closed`}
          </Text>
        ) : (
          <></>
        )}
      </View>
      <Pressable
        style={{
          backgroundColor: Color.accentPrimary,
          flexDirection: "row",
          justifyContent: "center",
          padding: 12,
          borderRadius: 20,
          height: 40,
          gap: 8,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: Color.white,
            fontFamily: "KarlaMedium",
            fontSize: 16,
          }}
        >
          Link to website
        </Text>
        <UpRightArrow />
      </Pressable>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 12,
          paddingVertical: 16,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: Color.black,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "KarlaMedium", fontSize: 24 }}>
            Similiar Resources
          </Text>
          <Pressable onPress={() => setShowSimilar(!showSimilar)}>
            <Octicons
              name={showSimilar ? "chevron-up" : "chevron-down"}
              color={Color.black}
              size={32}
            />
          </Pressable>
        </View>
        {showSimilar ? (
          <View>
            <View
              style={{
                backgroundColor: Color.black,
                width: width - 34,
                marginTop: 8,
              }}
            />
            <ResourceItem tags={["job training"]} />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default ResourceDetailScreen;
