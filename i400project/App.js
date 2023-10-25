import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Task from './Task.js';
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


// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <View style={styles.titlecontainer}>
//     //     <Text style={styles.sectionTitle}>Personal</Text>
//     //   </View>
//     //   <View style={styles.taskcontainer}>
//     //     <Task text="task1" priority="red"/>
//     //     <Task text="task2" priority="yellow"/>
//     //   </View>
//     // </View>
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
