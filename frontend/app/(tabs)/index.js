import { Text, View, ScrollView } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View)
const StyledText = styled(Text)

import { MaterialIcons } from '@expo/vector-icons';

import CustomButton from "../../components/button";

export default function index() {
  return (
    <ScrollView className="bg-white h-full">
      <View className="pt-8 px-5">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-bold">Olá, Nome</Text>
            <Text className="opacity-50 font-bold">Que tal esse look para hoje?</Text>
          </View>

          <StyledView className=" shadow-2xl shadow-black rounded-full">
            <CustomButton title="N" link="profile"
              cView="bg-white rounded-full h-14 w-14"
              cText="font-bold text-2xl"
            />
          </StyledView>
        </View>

        <View className="mt-6 relative">
          <View className="flex flex-row justify-between">
            <StyledView className="h-[20vh] w-[49%] bg-[#eeee] rounded-xl flex items-center justify-center">
              <Text className="text-center font-semibold opacity-70">Nenhuma calça {"\n"} adicionada</Text>
            </StyledView>
            <StyledView className="h-[20vh] w-[49%] bg-[#eeee] rounded-xl flex items-center justify-center">
              <Text className="text-center font-semibold opacity-70">Nenhum calçado adicionado</Text>
            </StyledView>
          </View>

          <StyledView className="h-[45vh] w-full bg-[#eeee] rounded-xl mt-2 flex items-center justify-center">
            <Text className="text-center font-semibold opacity-70">Nenhuma camisa adicionada</Text>
          </StyledView>

          <View className="flex-1 items-center justify-center absolute right-5 bottom-5">
            <CustomButton title="" link=""
              cView="bg-gray-950 w-14 h-14 rounded-xl"
              icon="chevron-right"
              color="#ffff"
              size={24}
            />
          </View>
        </View>

        <CustomButton title="Meus eventos" link="" />

        <View>
          <Text className="opacity-50 font-bold">
            Armário
          </Text>
          <View className="w-full h-32 bg-[#eeee] rounded-xl flex items-center justify-center"></View>  
        </View>
      </ View>
    </ScrollView>
  );
}
