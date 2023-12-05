import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import ButtonNew from '../../components/buttonNew'

import Clothes from './clothes'
import Outfits from './outfits'
import Events from './events'

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#A52BD0',
                tabBarInactiveTintColor: '#000',

                tabBarStyle: {
                    paddingVertical: 5,
                },

            }}
        >
            <Tab.Screen name='Clothes' component={Clothes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="tshirt-crew" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='Outfits' component={Outfits}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <ButtonNew/>
                    )
                }}
            />
            <Tab.Screen name='Events' component={Events}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}