import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="preferences" />
      <Stack.Screen name="connect-instagram" />
      <Stack.Screen name="automation" />
      <Stack.Screen name="analytics" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}