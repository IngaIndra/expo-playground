import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function MainLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
