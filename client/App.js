import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-4xl text-orange-500">Welcome to DeliveryApp !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
