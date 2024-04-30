import LogoContainer from "@/components/LogoContainer";
import StartScreen from "@/screens/start";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "@/constants/Color"
import { Platform } from "react-native";

interface Props {}

const Page = (props: Props) => {
  // const maxHeight = Platform.OS === "web" ? 40 : 0
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.accentPrimary }}>
      <LogoContainer />
      <StartScreen />
    </SafeAreaView>
  );
};

export default Page;
