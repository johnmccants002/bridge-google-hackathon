import LogoContainer from "@/components/LogoContainer";
import StartScreen from "@/screens/start";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/constants/Color"

interface Props {}

const Page = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.accentPrimary }}>
      <LogoContainer />
      <StartScreen />
    </SafeAreaView>
  );
};

export default Page;
