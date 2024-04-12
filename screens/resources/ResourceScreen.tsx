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
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



interface Props {
  data: Datum[];
}

const ResourcesScreen = (props: Props) => {
  const formRef = useRef();
  const [emailState, setEmailState] = useState("")
  const [errorMessage, setErrorMessage] = useState('');

  const email  = emailState;

  const handleChange = () => {
      setEmailState({ ...emailState });
      console.log('Handle Form', emailState);
  };

  const handleSubmit = () => {

    console.log(emailState)
    if (!emailState) {
      setErrorMessage('Email is required');
      return;
    }

    emailjs
      .send('service_iyl7re8', 'template_482g639', formRef.current,
        {
          to: emailState,
          subject: 'Resource List from Bridge',
          body: 'Your email body',
          publicKey: 'y1DaFwS2V7KFYvabW',
        },

      )
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };
  const router = useRouter();

  const { data } = props;

  useEffect(() => {
  }, []);

  const sendEmail = () => {

    emailjs
      .sendForm('service_iyl7re8', 'template_482g639', form.current, {
        publicKey: 'y1DaFwS2V7KFYvabW',
        
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    }
  
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
              onChangeText={((text) => {
                setEmailState(text);
                setErrorMessage('');
                console.log(emailState)
              })}
              name="email" 
              style={defaultStyles.input}
              placeholder="jaydevvs16@gmail.com"
            />
            <TouchableOpacity
             onPress={(()=>handleSubmit())}
             style={[defaultStyles.button, 
              { alignSelf: "center", gap: 20 }]}
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
