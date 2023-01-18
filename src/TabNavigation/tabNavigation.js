import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactScreen, HomeScreen, SettingsScreen } from './screens';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{backgroundColor:'purple'}
      }}>
        <Tab.Screen name="Home" component={HomeScreen} 
        // options={{
        //     tabBarIcon:({})=>{
        //     // <icon/>
        // }
        // }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}