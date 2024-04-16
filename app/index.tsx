import LogoContainer from "@/components/LogoContainer";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import { Redirect } from "expo-router";

interface Props {}

const Page = (props: Props) => {
  return (
    <>
      <Redirect href={"/results"} />
    </>
  );
};

export default Page;
