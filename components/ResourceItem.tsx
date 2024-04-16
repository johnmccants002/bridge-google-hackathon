import React from "react";
import { Pressable, Text, View, ViewStyle, TextStyle } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

// Define the types for the props
type Props = {
  title?: string; // Optional prop for the title
  description?: string; // Optional prop for the description
  tags?: string[]; // Optional prop for the label inside the small bordered View
};

const ResourceItem: React.FC<Props> = ({ title, description, tags }) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
    >
      <View style={{ flexDirection: "column", gap: 12, paddingTop: 20 }}>
        <Text
          style={{
            color: Colors.accentDark,
            fontFamily: "KarlaBold",
            fontSize: 16,
          }}
        >
          {title || "Center for Career Transformation, Houston"}
        </Text>
        <Text
          style={{
            color: Colors.accentDark,
            fontFamily: "KarlaRegular",
            fontSize: 14,
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
                  borderColor: Colors.accentPrimary,
                  borderRadius: 16,
                  padding: 4,
                }}
              >
                <Text
                  style={{
                    color: Colors.accentPrimary,
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

      <Octicons name="chevron-right" color={Colors.accentDark} size={32} />
    </Pressable>
  );
};

export default ResourceItem;
