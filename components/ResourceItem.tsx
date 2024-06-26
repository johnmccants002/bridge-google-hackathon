import React from "react";
import { Pressable, Text, View, ViewStyle, TextStyle } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Color from "@/constants/Color";
import { useRouter } from "expo-router";

// Define the types for the props
type Props = {
  title?: string; // Optional prop for the title
  description?: string; // Optional prop for the description
  tags?: string[]; // Optional prop for the label inside the small bordered View
};

const ResourceItem: React.FC<Props> = ({ title, description, tags }) => {
  const router = useRouter();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
      onPress={() => router.push(`/${title}`)}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 12,
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            color: Color.accentDark,
            fontFamily: "KarlaBold",
            fontSize: 16,
            maxWidth: "80%",
          }}
        >
          {title || "Center for Career Transformation, Houston"}
        </Text>
        <Text
          style={{
            color: Color.accentDark,
            fontFamily: "KarlaRegular",
            fontSize: 14,
            maxWidth: "80%",
          }}
        >
          {description ||
            "Provides guidance, training, and support for career readiness and employee retention to job seekers,"}
        </Text>
        {tags ? (
          <View style={{ flexDirection: "row", gap: 6 }}>
            {tags.map((tag) => (
              <View
                key={tag} // It's important to have a unique key when rendering lists
                style={{
                  alignSelf: "flex-start",
                  borderWidth: 1,
                  borderColor: Color.accentPrimary,
                  borderRadius: 16,
                  padding: 4,
                }}
              >
                <Text
                  style={{
                    color: Color.accentPrimary,
                    fontFamily: "KarlaRegular",
                    fontSize: 14,
                  }}
                >
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        ) : null}
      </View>

      <Octicons name="chevron-right" color={Color.accentDark} size={32} />
    </Pressable>
  );
};

export default ResourceItem;
