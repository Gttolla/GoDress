import { TouchableOpacity, Text, View } from "react-native";

import { twMerge } from "tailwind-merge";
import { styled } from "nativewind";

const StyledView = styled(View)
const StyledText = styled(Text)

import { MaterialIcons } from "@expo/vector-icons";

import { Link } from "expo-router";

export default function CustomButton({ link, title, onChange, cView, cText, icon, color, size, ...props }) {
    return (
        <Link href={link} asChild>
            <TouchableOpacity onChange={onChange}>
                <StyledView className={twMerge('flex items-center justify-center', cView)} {...props}>
                    <StyledText className={twMerge('absolute',cText)}>{title}</StyledText>
                    <MaterialIcons name={icon} color={color} size={size}/>
                </StyledView>
            </TouchableOpacity>
        </Link>     
    );
} 
