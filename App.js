
import React from 'react';
import { View ,Text} from 'react-native';
import HomeScreen from './src/Home_screen';
import SettingsScreen from './src/Settings_screen';
import ScanQrScreen from './src/Scan_qr_screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {

  return (
    <NavigationContainer>
       <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QR" component={ScanQrScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;
