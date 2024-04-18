import LogoContainer from "@/components/LogoContainer";
import OnboardingScreen from "@/screens/onboarding/OnboardingScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors"

interface Props {}

const Page = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.accentPrimary }}>
      <LogoContainer />
      <OnboardingScreen />
    </SafeAreaView>
  );
};

export default Page;
