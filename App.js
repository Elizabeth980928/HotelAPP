
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
  Navigation
} from "react-native";
import { Button } from "react-native-paper";
import colors from './components/colors';
//import MapView from 'react-native-maps'


 import signIn from './components/signIn';
 import SignUp from "./components/signUp";
 import getStarted from './components/getStarted';
 import ForgotPassword from './components/forgotPassword';
 import ResetPassword from "./components/ResetPassword";
 import BookingsScreen from './navigation/screens/BookingsScreen';
 import HistoryScreen from './navigation/screens/HistoryScreen';
 import mainContainer from './navigation/screens/MainContainer';
 import ProfileScreen from './navigation/screens/ProfileScreen';
 import HomeScreen from "./navigation/screens/BookingsScreen";
 import DetailsScreen from './src/views/screens/DetailsScreen';
 import OnBoardScreen from "./src/views/screens/OnBoardScreen";
 import CheckOut from "./src/views/screens/CheckOut";
 import Payment from "./src/views/screens/Payment";
 import Receipt from "./components/Receipt";
 import Map from "./src/views/screens/Map";
 import Next from "./src/next";
 import SearchRooms from "./src/views/screens/SearchRooms.jsx";
 import Rooms from "./src/views/screens/Rooms";
//  import UploadImage from "./navigation/screens/UploadImage";

// import colors from './components/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName = { 'getStarted' } screenOptions={{headerShown:false}}>
   <Stack.Screen name = { 'getStarted' } component={getStarted}/>
   <Stack.Screen name = { 'signIn' } component={signIn}/>
   <Stack.Screen name = { 'SignUp' } component={ SignUp}/>
   <Stack.Screen name = { 'ForgotPassword' } component={ForgotPassword}/>
   <Stack.Screen name = { 'ResetPassword'} component={ResetPassword}/>
   <Stack.Screen name = { 'MainContainer' } component={mainContainer}/>
   <Stack.Screen name = { 'BookingsScreen' } component={BookingsScreen}/>
   <Stack.Screen name = { 'HistoryScreen' } component={HistoryScreen}/>
   <Stack.Screen name = { 'ProfileScreen' } component={ProfileScreen}/>
   <Stack.Screen name = { 'DetailsScreen' } component={DetailsScreen}/>
   <Stack.Screen name ={ 'CheckOut' } component={CheckOut}/> 
   <Stack.Screen name = { 'Map' } component={Map}/>
   <Stack.Screen name ={ 'Payment' } component={Payment}/> 
   <Stack.Screen name ={ 'Receipt' } component={Receipt}/> 
   <Stack.Screen name ={ 'Next' } component={Next}/>
   <Stack.Screen name ={ 'Rooms' } component={Rooms}/>
   <Stack.Screen name ={ 'SearchRooms' } component={SearchRooms}/>
   {/* <Stack.Screen name ={ 'UploadImage' } component={UploadImage}/> */}

   </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: 50,
    fontStyle: "italic",
  },
   textStyle: { fontSize: 20, color: colors.grey, fontStyle: "italic" },
});
export default App;
