import { ScrollView, View } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
import Featured from "../components/Featured";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Search Bar */}
      <SearchBar />

      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <Featured />
      </ScrollView>
    </SafeAreaView>
  );
}
