import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './HomeScreen.js'
import CategoryScreen from './CategoryScreen.js'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titlecontainer: {
    backgroundColor: "lavender",
    padding: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  taskcontainer: {
    marginTop: 20
  }
});
