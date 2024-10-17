import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, ActivityIndicator, StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/Home';
import MyTabBar from './nav';
import { Colors } from './Colors';
import Health from '../components/Health';
import Stats from '../components/Stats';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return(

   <Tab.Navigator screenOptions={{
    headerShown: false,
    animation: 'slide_from_right',
    tabBarHideOnKeyboard: true,
    tabBarStyle: {backgroundColor: '#000', borderTopColor: '#000', paddingBottom: 10, height: 55},
    tabBarActiveTintColor: '#fff'
    
   }} tabBar={props => <MyTabBar {...props}/> }>
  <Tab.Screen name="Home" component={Home} options={{
            
                    tabBarIcon: ({focused}) => {
                      return <Ionicons name={focused ? 'ios-home' : "ios-home-outline"} size={22} color={Colors.TXT} />
                    }
               }}
               />
  <Tab.Screen name="Health" component={Health} options={{
            
            tabBarIcon: ({focused}) => {
              return <Ionicons name={focused ? 'ios-home' : "ios-home-outline"} size={22} color={Colors.TXT} />
            }
       }}
       />
  
  <Tab.Screen name="Stats" component={Stats} options={{
            
            tabBarIcon: ({focused}) => {
              return <Ionicons name={focused ? 'ios-home' : "ios-home-outline"} size={22} color={Colors.TXT} />
            }
       }}
       />

     
  </Tab.Navigator>
  )
}

const HomeStack = () => {
   
  return(
  <Stack.Navigator initialRouteName='Home Page'>
      
  <Stack.Screen name="Home Page" component={Tabs} options={{
               headerShown: false,
               animation: 'slide_from_right',
               title:"Home Page"
       }}
       />
 
    
 
        
  </Stack.Navigator>
  )
}




// This is the main App where everything stems
const MainApp = () => {
  const [loaded, error] = useFonts({
    'Inter': require('../assets/fonts/Inter.ttf'),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf")
  });

    return (
            <NavigationContainer >
              
              <StatusBar backgroundColor={Colors.BG}/>
      
                {

                    HomeStack()
          
                }
               
             
            
           </NavigationContainer>
        );
    }
    




export default MainApp;