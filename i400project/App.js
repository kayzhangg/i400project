import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Task} from './Task.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
      <View>
        <Task text="Text1"/>
        <Task text="Text2"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
