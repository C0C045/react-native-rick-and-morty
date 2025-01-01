import "../global.css";
import { View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    // <View className="flex-1 items-center justify-center bg-[#080c0f]">
    <View className="flex-1 bg-[#080c0f]">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#080c0f" },
          headerTintColor: "#080c0f",
          headerTitle: () => (
            <View className="mt-5 mb-5 w-full items-center">
              <Logo />
            </View>
          ),
        }}
      />
    </View>
  );
}
