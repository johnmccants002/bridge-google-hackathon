import Color from "@/constants/Color";
import { Datum } from "@/screens/results/mockData/benefits_mock";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { defaultStyles } from "../../components/defaultStyles";
import ResourceItem from "@/components/ResourceItem";
import { resourceData } from "@/data/DummyData";
import BoldCheck from "@/components/svgs/BoldCheck";
import CTAButton from "@/components/buttons/CTAButton";

interface Props {
  data: Datum[];
}

const Index = (props: Props) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const { data } = props;

  useEffect(() => {}, []);
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 20,
          flexGrow: 1,
          paddingBottom: 300,
        }}
        style={styles.container}
      >
        <Text
          style={[
            defaultStyles.textBold,
            { color: "#125858", paddingRight: 80, paddingTop: 12 },
          ]}
        >
          {`Good news! \nWe found `}
          <Text style={{ textDecorationLine: "underline" }}>
            8 resources
          </Text>{" "}
          available to you.
        </Text>

        <View>
          <Text
            style={{
              fontFamily: "KarlaMedium",
              fontSize: 24,
              color: Color.black,
            }}
          >
            Useful right now
          </Text>
          <View
            style={{
              width: width - 36,
              height: 1,
              backgroundColor: Color.black,
              alignSelf: "center",
              marginTop: 8,
            }}
          />
          {resourceData[0].map((data, index) => (
            <ResourceItem
              title={data.title}
              description={data.description}
              tags={data.tags}
            />
          ))}
        </View>

        <View>
          <Text
            style={{
              fontFamily: "KarlaMedium",
              fontSize: 24,
              color: Color.black,
            }}
          >
            Who can help
          </Text>
          <View
            style={{
              width: width - 36,
              height: 1,
              backgroundColor: Color.black,
              alignSelf: "center",
              marginTop: 8,
            }}
          />
          {resourceData[1].map((data, index) => (
            <ResourceItem
              title={data.title}
              description={data.description}
              tags={data.tags}
            />
          ))}
        </View>

        <View>
          <Text
            style={{
              fontFamily: "KarlaMedium",
              fontSize: 24,
              color: Color.black,
            }}
          >
            Next Steps
          </Text>
          <View
            style={{
              width: width - 36,
              height: 1,
              backgroundColor: Color.black,
              alignSelf: "center",
              marginTop: 8,
            }}
          />
          {resourceData[2].map((data, index) => (
            <ResourceItem
              title={data.title}
              description={data.description}
              tags={data.tags}
            />
          ))}
        </View>

        <Pressable
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 8,
            borderRadius: 24,
            borderWidth: 2,
            borderColor: Color.accentDark,
            height: 40,
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "KarlaMedium",
              fontSize: 14,
              color: Color.accentDark,
            }}
          >
            Create account and save to profile
          </Text>
          <BoldCheck />
        </Pressable>
        <View
          style={{
            backgroundColor: "#10AB8F",
            padding: 30,
            gap: 16,
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: 260,
          }}
        >
          <Text
            style={{ fontFamily: "KarlaBold", fontSize: 18, color: "white" }}
          >
            Don't want to create an account? Get this list in an email instead.
          </Text>

          <View>
            <Text style={defaultStyles.inputLabelText}>Your Email</Text>

            <TextInput
              style={{
                backgroundColor: Color.accentLight,
                color: Color.accentDark,
                height: 40,
                borderRadius: 8,
                paddingHorizontal: 10,
                marginTop: 8,
                marginBottom: 16
              }}
              placeholder="example@mail.com"
            />
  
            <CTAButton
              type="primary"
              text="Send"
              onPress={() => {
                console.log("pressed");
              }}
              style={{
                alignSelf: "center"
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
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

export default Index;
