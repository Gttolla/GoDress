import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import CustomButton from "./components/button";

export default function Main() {
  return (
    <View className="pt-10 px-5">
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="text-2xl font-bold">Olá, Nome</Text>
          <Link href="/settings" asChild>
            <Text className="opacity-50 font-bold">Que tal esse look para hoje?</Text>
          </Link>
        </View>
        
        <CustomButton title="N" className="bg-gray-500 rounded-full h-14 w-14"/>
      </View>

      <View className="flex flex-row justify-between mt-10">
        <View className="w-20 h-10 bg-black rounded-md"></View>
        <View className="w-20 h-10 bg-black rounded-md"></View>
        <View className="w-20 h-10 bg-black rounded-md"></View>
      </View>
    
    </View>
  );
}


