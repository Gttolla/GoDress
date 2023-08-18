import { Tabs } from 'expo-router/tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        elevation: 0,
        height: 50,
      }
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<MaterialIcons 
              name="home" 
              size={24} 
              color={focused ? '#edd447' : '#454545'} 
            />) 
          }
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (<MaterialIcons 
              name="person" 
              size={24} 
              color={focused ? '#edd447' : '#454545'} 
            />)
          }
        }}
      />
    </Tabs>
  );
}