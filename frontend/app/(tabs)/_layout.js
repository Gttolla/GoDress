import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        elevation: 0,
        height: 50,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name="home"
              size={24}
              color={focused ? '#4d4add' : '#454545'}
            />)
          }
        }}
      />
      <Tabs.Screen
        name="cupboard"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name="albums"
              size={24}
              color={focused ? '#4d4add' : '#454545'}
            />)
          }
        }}
      />
      <Tabs.Screen
        name="new_outfit"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name="add"
              size={24}
              color={focused ? '#4d4add' : '#454545'}
            />)
          }
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name="search"
              size={24}
              color={focused ? '#4d4add' : '#454545'}
            />)
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<Ionicons
              name="person"
              size={24}
              color={focused ? '#4d4add' : '#454545'}
            />)
          }
        }}
      />
    </Tabs>
  );
}