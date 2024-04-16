import LogoContainer from "@/components/LogoContainer";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";

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
