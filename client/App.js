import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import { Provider } from 'react-redux'
import { store } from "./Store/Store";


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
