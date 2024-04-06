import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    KarlaRegular: require("../assets/fonts/Karla-Regular.ttf"),
    KarlaBold: require("../assets/fonts/Karla-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="results"
          options={{
            headerLeft: () => (
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                onPress={router.back}
              >
                <AntDesign name="arrowleft" size={24} color={"#4BA4A4"} />
                <Text
                  style={{
                    fontFamily: "KarlaRegular",
                    fontWeight: "500",
                    fontSize: 24,
                    color: "#4BA4A4",
                  }}
                >
                  Back
                </Text>
              </Pressable>
            ),
            title: "",
          }}
        />

        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
