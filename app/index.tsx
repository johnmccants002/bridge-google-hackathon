import LogoContainer from "@/components/LogoContainer";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import UserStoryScreen from "@/screens/user-story/UserStoryScreen";

interface Props {}

const Page = (props: Props) => {
  return (
    <>
      <LogoContainer />
      <OnboardingScreen />
    </>
  );
};

export default Page;
