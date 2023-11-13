import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CategoryScreen({ route, navigation }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const categoryName = route.params.categoryName;

  // adds task
  // i looked through these stack overflow threads for a lot of help on adding/deleting tasks from async storage
  // https://stackoverflow.com/questions/72845413/react-native-not-able-to-store-and-fetch-data-correctly-with-async-storage
  // https://stackoverflow.com/questions/65221232/how-to-add-items-to-react-native-asyncstorage
  const addTask = async () => {
    try {
      if (newTask) {
        const updatedTasks = [...tasks, newTask];
        await AsyncStorage.setItem(categoryName, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setNewTask(''); // Clear the input field after adding the task
      }
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  // deletes the task
  const deleteTask = async (index) => {
    try {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      await AsyncStorage.setItem(categoryName, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  useEffect(() => {
    const getCategoryTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem(categoryName);
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Error retrieving tasks: ', error);
      }
    };
    getCategoryTasks();
  }, [categoryName]);


// https://www.geeksforgeeks.org/how-to-generate-random-colors-by-using-react-hooks/

// generates random background color for category
  const [randomColor, setRandomColor] = useState('#FFFFFF'); // Initial color, e.g., white

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(randomColor);
  };

  useEffect(() => {
    generateRandomColor();
  }, []);


  // displays "No tasks" when there are not any tasks 
  const NoTasksMessage = () => {
    return (
      <Text style={{
        margin: 10
      }}>No tasks, you're all done!</Text>
    );
  };

  return (
    <View style={{flex:1, paddingBottom:20}}>
      <View style={{
        height: 100, flexDirection: 'row', alignItems: 'center', backgroundColor: randomColor, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, marginBottom:10
              }}>
        <Text style={styles.subheader}>Category: {categoryName}</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, padding: 10 }}
          value={newTask}
          onChangeText={text => setNewTask(text)}
          placeholder="Enter a new task"
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      <Text style={{
        width: '100%',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10
      }}>Tasks:</Text>

      {tasks.length === 0 ? NoTasksMessage() : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item}</Text>
              <Button title="Delete" onPress={() => deleteTask(index)} />
            </View>
          )}
        />)}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', 
    alignItems: "center", 
    justifyContent: 'space-between', 
    backgroundColor: 'lightgray', 
    padding: 10, 
    margin: 5, 
    borderRadius:10
  },
  text: {
    fontSize: 15, 
    marginLeft:10
  },
  subheader: {
    width: '100%',
    textAlign: 'center', 
    fontSize:20, 
    fontWeight:"bold"
  }
});
