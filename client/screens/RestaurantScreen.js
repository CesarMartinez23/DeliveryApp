import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white pt-5 -mt-9"
        >
          <View className="px-5">
            <Text className="font-bold text-3xl">{item.name}</Text>
            <View className="space-x-2 my-1 space-y-2">
              {/*  */}
              <View className="flex-row items-center space-x-1">
                <Image
                  className="h-4 w-4"
                  source={require("../assets/images/fullStar.png")}
                />
                <Text
                  style={{ color: themeColors.text }}
                  className="font-semibold"
                >
                  {item.stars}
                </Text>
                <Text className="text-gray-700">
                  ({item.reviews} review) |{" "}
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color={"gray"} width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby | {item.address}
                </Text>
              </View>
              {/*  */}
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="bg-white pb-24">
          <Text className="font-bold text-3xl px-5 py-4">Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
