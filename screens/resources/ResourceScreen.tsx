import { Datum } from "@/screens/resources/mockData/benefits_mock";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import BenefitList from "./BenefitList";
import { defaultStyles } from "../../components/defaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  data: Datum[];
}

const ResourcesScreen = (props: Props) => {
  const [emailState, setEmailState] = useState("")


  const [errorMessage, setErrorMessage] = useState('');
  const email  = emailState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setEmailState({ ...emailState, [e.target.name]: e.target.value });
      console.log('Handle Form', emailState);
    }
  };
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
          We found 8 resources available to you.
        </Text>
        {data.map((item: Datum, idx: number) => (
          <BenefitList data={item} key={idx} />
        ))}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 8,
            borderWidth: 2,
            borderColor: "#125858",
            borderRadius: 24,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            alignSelf: "center",
          }}
        >
          <Text>Save to profile</Text>
          <MaterialCommunityIcons name="check" color={"#125858"} size={20} />
        </TouchableOpacity>
        <form action="submit" onSubmit={handleSubmit}>
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
            style={{ fontFamily: "KarlaMedium", fontSize: 18, color: "white" }}
          >
            Don't want to create an account? Get this list in an email instead.
          </Text>

          <View>
            <Text style={defaultStyles.inputLabelText}>Your Email</Text>
            <TextInput
              name="email" 
              style={defaultStyles.input}
              placeholder="example@mail.com"
            />
            <TouchableOpacity
              style={[defaultStyles.button, { alignSelf: "center", gap: 20 }]}
            >
              <Text style={[defaultStyles.buttonText]}>Send</Text>
              <MaterialCommunityIcons
                name="arrow-right"
                color={"#4BA4A4"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        </form>
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

export default ResourcesScreen;
