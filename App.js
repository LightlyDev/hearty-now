
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Habit from './Components/habit';
import HomeScreen from './Components/Screens/home';
import HabitScreen from './Components/Screens/habitScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Habit" component={HabitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//const App = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator>
//        <Stack.Screen
//          name="Home"
//          component={HomeScreen}
//        />
//        <Stack.Screen name="Habit" component={HabitScreen} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};


export default App;
