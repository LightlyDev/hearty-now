import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to habit screen"
      onPress={() =>
        navigation.navigate('Habit', {name: 'Jane'})
      }
    />
  );
};

export default HomeScreen;
