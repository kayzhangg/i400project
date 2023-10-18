import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Task from './Task.js';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.sectionTitle}>Personal</Text>
      </View>
      <View style={styles.taskcontainer}>
        <Task text="task1" priority="red"/>
        <Task text="task2" priority="yellow"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titlecontainer:{
    backgroundColor: "lavender",
    padding: 50,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  taskcontainer:{
    marginTop:20
  }
});
