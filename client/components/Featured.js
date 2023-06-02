import { View } from "react-native";
import React from "react";

import { featured } from "../constants";
import FeaturedRow from "./FeaturedRow";

export default function Featured() {
  return (
    <View className="mt-5">
      {[featured, featured, featured].map((item, index) => {
        return (
          <FeaturedRow
            key={index}
            title={item.title}
            restaurants={item.restaurants}
            description={item.description}
          />
        );
      })}
    </View>
  );
}
