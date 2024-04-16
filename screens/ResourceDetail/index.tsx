import UpRightArrow from "@/components/svgs/UpRightArrow";
import { Colors } from "@/constants/Colors";
import { Feather, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type Props = {};

const ResourceDetailScreen = (props: Props) => {
  const params = useLocalSearchParams();
  const [showHours, setShowHours] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "flex-start",
        flex: 1,
        paddingHorizontal: 20,
        gap: 16,
        backgroundColor: Colors.accentLight,
      }}
    >
      <Text
        style={{
          fontFamily: "KarlaBold",
          fontSize: 24,
          color: Colors.black,
        }}
      >
        United We Dream's Texas Know Your Rights Fact Sheet
      </Text>
      <Text
        style={{
          fontFamily: "KarlaRegular",
          fontSize: 24,
          color: Colors.accentDark,
        }}
      >
        List of recommendations for ICE agent encounters
      </Text>
      <Text
        style={{
          fontFamily: "KarlaMedium",
          fontSize: 24,
          color: Colors.accentDark,
        }}
      >
        {params.resource}
      </Text>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text
          style={{
            color: Colors.accentDark,
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
            color: Colors.accentDark,
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
              color: Colors.accentDark,
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
              color={Colors.black}
            />
          </Pressable>
        </View>
        {showHours ? (
          <Text
            style={{
              fontFamily: "KarlaRegular",
              fontSize: 16,
              color: Colors.accentDark,
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
          backgroundColor: Colors.accentPrimary,
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
            color: Colors.white,
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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 16,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: Colors.black,
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "KarlaMedium", fontSize: 24 }}>
          Similiar Resources
        </Text>
        <Octicons name="chevron-down" color={Colors.black} size={32} />
      </View>
    </ScrollView>
  );
};

export default ResourceDetailScreen;
