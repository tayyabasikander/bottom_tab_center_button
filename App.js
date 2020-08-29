
import React from 'react';

import { View, Text, TouchableOpacity,Dimensions } from 'react-native';
import HomeScreen from './src/Home_screen';
import SettingsScreen from './src/Settings_screen';
import ScanQrScreen from './src/Scan_qr_screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window')

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        if(index===1){
          return(
            <TouchableOpacity
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 ,justifyContent:'center' ,
             alignItems:"center", height:56,backgroundColor:'#ff9f43',
            position:'absolute', 
            left:(width/2)-30,bottom:30,
            borderRadius:30,width:60,height:60,zIndex:99
          
          }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
          )
        }


        return (
          <TouchableOpacity
          activeOpacity={0.1}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 ,justifyContent:'center' , alignItems:"center", 
            height:56,backgroundColor:"#2e86de"
          }}
          >
            <Text style={{ color: isFocused ? 'white' : '#48dbfb' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const App = () => {

  return (
    <NavigationContainer>
       <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SCAN" component={ScanQrScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;
