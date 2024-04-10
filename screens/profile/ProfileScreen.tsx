import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Select from "react-select";
import { defaultStyles } from "../../components/defaultStyles";
import "./index.css";
import { useQuery } from "@tanstack/react-query";

interface ResponseData {
  createdAt: number;
  demographics: Demographics;
  id: string;
  updatedAt: number;
}

interface Demographics {
  income: number;
  ethnicity: string;
  veteran: boolean;
  gender: string;
  age: number;
  disability: boolean;
}

const ageOptions = [
  { label: "68 years old", value: "68" },
  { label: "67 years old", value: "67" },
  { label: "66 years old", value: "66" },
  { label: "24 years old", value: "24" },
];

const incomeOptions = [
  { label: "Very low income (<$15,000)", value: "<15000" },
  { label: "Low income ($15,000 - $30,000)", value: "15000-30000" },
  { label: "Middle income ($30,000 - $50,000)", value: "30000-50000" },
  { label: "High income (>$50,000)", value: ">50000" },
];

const ethnicityOptions = [
  { label: "Hispanic/Latino", value: "hispanic_latino" },
  { label: "Caucasian", value: "white" },
  { label: "African American", value: "african_american" },
  { label: "Asian", value: "asian" },
  { label: "Native American", value: "native_american" },
  { label: "Pacific Islander", value: "pacific_islander" },
  { label: "Other", value: "other" },
];

const veteranStatusOptions = [
  { label: "Veteran", value: "veteran" },
  { label: "Active Duty", value: "active_duty" },
  { label: "Reserve", value: "reserve" },
  { label: "Not a Veteran", value: "non_veteran" },
];

const genderOptions = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non-Binary", value: "non_binary" },
  { label: "Prefer not to say", value: "prefer_not_to_say" },
  { label: "Other", value: "other" },
];

const disabilityOptions = [
  { label: "Disabled", value: "disabled" },
  { label: "Not Disabled", value: "not_disabled" },
];

interface DropdownOption {
  label: string;
  value: string | number; // Adjust this type based on your actual value types
}

// Define a type for the keys used in demographicMappings
type DemographicKey =
  | "age"
  | "income"
  | "ethnicity"
  | "veteran"
  | "gender"
  | "disability";

// Assuming demographicMappings is an object with keys of DemographicKey type
// and values of DropdownOption array type
const demographicMappings: Record<DemographicKey, DropdownOption[]> = {
  age: ageOptions,
  income: incomeOptions,
  ethnicity: ethnicityOptions,
  veteran: veteranStatusOptions,
  gender: genderOptions,
  disability: disabilityOptions,
  // Add other mappings as necessary
};

function determineIncomeOption(income: number): DropdownOption {
  return (
    incomeOptions.find((option) => {
      const value = option.value;
      if (value.startsWith("<")) {
        const maxValue = parseInt(value.substring(1), 10);
        return income < maxValue;
      } else if (value.startsWith(">")) {
        const minValue = parseInt(value.substring(1), 10);
        return income > minValue;
      } else {
        const [minValue, maxValue] = value.split("-").map(Number);
        return income >= minValue && income <= maxValue;
      }
    }) || incomeOptions[0]
  ); // Default to the first option if no match is found
}

function findDropdownValue(
  demographicKey: DemographicKey,
  value: string | number | boolean
): string {
  const options = demographicMappings[demographicKey];

  // Custom mapping logic here based on the demographicKey and value
  if (demographicKey === "veteran" || demographicKey === "disability") {
    return (
      options
        .find((option) => option.value === (value ? "veteran" : "non_veteran"))
        ?.value.toString() || ""
    );
  }

  return (
    options
      .find((option) => option.value.toString() === value.toString())
      ?.value.toString() || ""
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: "#000",
    fontFamily: "KarlaMedium",
    marginBottom: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    marginBottom: 20,
    padding: 6,
  },
  dropdownWeb: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#10AB8F",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "KarlaMedium",
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 18,
    fontFamily: "KarlaRegular",
    color: "#000",
  },
  label: {
    fontSize: 16,
    fontFamily: "KarlaMedium",
    color: "#10AB8F",
    marginBottom: 5,
  },
});

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

const DropdownComponent = ({ label, value, onValueChange, items }) => {
  return (
    <View style={{ zIndex: 1 }}>
      <Label>{label}</Label>
      {Platform.OS === "web" ? (
        <Select
          className={"dropdownWeb"}
          value={items.find((item) => item.value === value)}
          onChange={(selectedOption) => onValueChange(selectedOption.value)}
          options={items}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      ) : (
        <Dropdown
          data={items}
          labelField="label"
          valueField="value"
          value={value}
          onChange={(item) => onValueChange(item.value)}
          style={styles.dropdown}
          selectedTextStyle={{
            paddingHorizontal: 8,
            fontFamily: "KarlaRegular",
          }}
          renderRightIcon={() => (
            <View
              style={{
                paddingRight: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("@/assets/images/down.png")}
                style={{ height: 10, width: 18 }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const ProfileScreen = () => {
  const [age, setAge] = useState("68");
  const [income, setIncome] = useState("<15000");
  const [ethnicity, setEthnicity] = useState("hispanic_latino");
  const [veteranStatus, setVeteranStatus] = useState("veteran");
  const [gender, setGender] = useState("female");
  const [emailToggle, setEmailToggle] = useState(true);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async (): Promise<ResponseData> => {
      const response = await fetch(
        "https://dpnk8ddrr0.execute-api.us-west-1.amazonaws.com/dev/handler/test@example.com"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  useEffect(() => {
    // Only update states if data is available
    if (data) {
      setAge(findDropdownValue("age", data.demographics.age));
      setIncome(findDropdownValue("income", data.demographics.income));
      setEthnicity(findDropdownValue("ethnicity", data.demographics.ethnicity));
      setVeteranStatus(findDropdownValue("veteran", data.demographics.veteran));
      setGender(findDropdownValue("gender", data.demographics.gender));
    }
  }, [data]);

  // useEffect(() => {
  //   console.log("THIS IS THE DATA: ", data);
  // }, [data]);

  if (isPending)
    return (
      <View>
        <Text>Loading data...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text style={styles.header}>Hi John Smith</Text>
        <Image
          source={require("@/assets/images/greenhappy.png")}
          style={{ height: 80, width: 80, marginVertical: 12 }}
        />
      </View>

      <Text
        style={{
          fontFamily: "KarlaRegular",
          fontSize: 24,
          color: "#000000E5",
          paddingBottom: 10,
        }}
      >
        Your Demographics
      </Text>
      <DropdownComponent
        label="Age"
        value={age}
        onValueChange={setAge}
        items={ageOptions}
      />

      <DropdownComponent
        label="Income"
        value={determineIncomeOption(parseInt(income))}
        onValueChange={setIncome}
        items={incomeOptions}
      />

      <DropdownComponent
        label="Ethnicity"
        value={ethnicity}
        onValueChange={setEthnicity}
        items={ethnicityOptions}
      />

      <DropdownComponent
        label="Veteran Status"
        value={veteranStatus}
        onValueChange={setVeteranStatus}
        items={veteranStatusOptions}
      />

      <DropdownComponent
        label="Gender"
        value={gender}
        onValueChange={setGender}
        items={genderOptions}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          Email me when Bridge finds new resources?
        </Text>
        <Switch
          value={emailToggle}
          trackColor={{ true: "#10AB8F" }}
          onValueChange={() => {
            setEmailToggle(!emailToggle);
          }}
        />
      </View>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          {
            backgroundColor: "#10AB8F",
            marginHorizontal: 80,
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          },
        ]}
      >
        <Text style={styles.buttonText}>See my resources</Text>
        <AntDesign name="arrowright" color={"white"} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
