import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Navigator } from "./Navigator";

export default function App(){
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>

  )
}