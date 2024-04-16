import LogoContainer from "@/components/LogoContainer";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import UserStoryScreen from "@/screens/user-story/UserStoryScreen";
import { Redirect } from "expo-router";

interface Props {}

const Page = (props: Props) => {
  return (
    <>
      {/* <LogoContainer />
      <OnboardingScreen /> */}
      <Redirect href={"/results"} />
    </>
  );
};

export default Page;
