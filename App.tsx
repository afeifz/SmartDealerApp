import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

import React from 'react';



export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="dark"/>
      <HomeScreen />
    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',

  },

});