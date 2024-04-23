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

import { useColorScheme } from "@/hooks/useColorScheme";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Colors } from "@/constants/Colors";
import NavigationHeader from "@/components/headers/NavigationHeader";

const queryClient = new QueryClient();

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
    KarlaMedium: require("../assets/fonts/Karla-Medium.ttf"),
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

  const Header = (props: { color: string; iconTextColor: string }) => {
    return (
      <View
        style={{
          backgroundColor: props.color,
          justifyContent: "center",
          height: 120,
          paddingTop: 60,
          padding: 20,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            backgroundColor: props.color,
          }}
          onPress={router.back}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={props.iconTextColor ? props.iconTextColor : "white"}
          />
          <Text
            style={{
              fontFamily: "KarlaRegular",
              fontWeight: "500",
              fontSize: 24,
              color: props.iconTextColor ? props.iconTextColor : "white",
            }}
          >
            Back
          </Text>
        </Pressable>
      </View>
    );
  };

  const editDemographicsButton =
    <Pressable
      onPress={() => router.push("/edit-demographics")}
    >
      <Text
        style={{
          textDecorationLine: "underline",
          fontFamily: "KarlaMedium",
          fontSize: 14,
          color: Colors.accentDark,
        }}
      >
        Edit Demographics
      </Text>
    </Pressable>

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="results"
              options={{
                header: () => <NavigationHeader rightItem={editDemographicsButton} />,
                title: "",
              }}
            />
            <Stack.Screen
              name="login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="register"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account-created"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="search"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="edit-demographics"
              options={{
                headerShown: true,
                header: () => <NavigationHeader />,
              }}
            />
            <Stack.Screen
              name="onboarding"
              options={{
                headerShown: true,
                header: () => <NavigationHeader tintColor="white" backgroundColor={Colors.accentPrimary} />,
              }}
            />
            <Stack.Screen
              name="onboarding-next"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="user-story"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="[resource]"
              options={{
                headerShown: true,
                header: () => <NavigationHeader />,
              }}
            />
          </Stack>
        </QueryClientProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
