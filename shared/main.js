
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
import Learning from '../components/Learning';
import VolunteerProfile from '../components/VolunteerProfile';
import Login from '../components/Login';
import Documents from '../components/Documents';
import LoginHome from '../components/LoginHome';
import Medicalrecords from '../components/Medicalrecords';
import DistanceView from "../components/DistanceView";
import OTPScreen from "../components/OTPScreen";
import LoginTwo from "../components/LoginTwo";
import ViewMap from "../components/ViewMap";
import BluetoothScan from '../components/BluetoothScan';
import BluetoothConnect from '../components/BluetoothConnect';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopColor: "#000",
          paddingBottom: 10,
          height: 55,
        },
        tabBarActiveTintColor: "#fff",
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Health" component={Health} />

      <Tab.Screen name="StatsStack" component={StatsStack} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home Page">
      <Stack.Screen
        name="Home Page"
        component={Tabs}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          title: "Home Page",
        }}
      />
      <Stack.Screen
        name="Learning"
        component={Learning}
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="DistanceView"
        component={DistanceView}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

 <Stack.Screen
        name="LoginHome"
        
        component={LoginHome}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
  <Stack.Screen
        name="MedicalRecords"
        
        component={Medicalrecords}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="LoginTwo"
        component={LoginTwo}
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ViewMap"
        component={ViewMap}
        options={{
        
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
       
    </Stack.Navigator>
  );
};

const StatsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Stats">
      <Stack.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="VolunteerProfile"
        component={VolunteerProfile}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

// This is the main App where everything stems
const MainApp = () => {
  const [loaded, error] = useFonts({
    Inter: require("../assets/fonts/Inter.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
  });

  return <NavigationContainer>{HomeStack()}</NavigationContainer>;
};

export default MainApp;
  