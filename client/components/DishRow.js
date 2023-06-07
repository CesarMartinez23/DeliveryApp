import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        style={{ height: 100, width: 100 }}
        className="rounded-3xl"
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="px-3">
          <Text className="font-semibold text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row items-center justify-between px-3">
          <Text className="font-bold text-xl text-gray-700">${item.price}</Text>
          <View className="flex-row items-center">
            {/* Delete Item */}
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={30}
                width={30}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text className="px-3">{2}</Text>
            {/* Add Item */}
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={30}
                width={30}
                stroke={"white"}
              />
            </TouchableOpacity>
            {/*  */}
          </View>
        </View>
      </View>
    </View>
  );
}
