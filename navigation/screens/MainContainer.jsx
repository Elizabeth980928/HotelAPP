
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BookingsScreen from '../screens/BookingsScreen';
import historyScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

// import BookingsScreen from './navigation/screens/BookingsScreen';
// // import HistoryScreen from './navigation/screens/HistoryScreen';
// import ProfileScreen from './navigation/screens/ProfileScreen';

const bookingName = 'Home';
const historyName = 'History';
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer(){
    return(
            <Tab.Navigator
              initialRouteName={bookingName}
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;

                  if(rn === bookingName)
                    {
                        iconName = focused ? 'home' : 'home-outline';
                    } 
                    else if (rn === profileName)
                    {
                      iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (rn === historyName)
                    {
                      iconName = focused ? 'list' : 'list-outline';  
                    
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown:false
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70}
              }}>
            

             <Tab.Screen name = {bookingName} component = {BookingsScreen}/>
             <Tab.Screen name = {historyName} component = {historyScreen}/>
             <Tab.Screen name = {profileName} component = {ProfileScreen}/>
                    

                     
         </Tab.Navigator>
    );
}
export default MainContainer;

