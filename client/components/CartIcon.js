import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";

export default function CartIcon() {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row items-center justify-between rounded-full mx-5 p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="text-white text-lg text-center font-extrabold flex-1">
          View Cart
        </Text>
        <Text className="text-white font-extrabold text-lg">${10}</Text>
      </TouchableOpacity>
    </View>
  );
}
