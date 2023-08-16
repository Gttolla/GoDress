import { TouchableOpacity, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

export default function CustomButton ({ title, onChange, className, ...props }){
    return(
        <TouchableOpacity onChange={onChange}>
            <View className={twMerge('flex items-center justify-center', className)} {...props}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );  
} 
