import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import GenerateRandomColor from './GenerateRandomColor';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CategoryScreen({ route, navigation }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(''); // Define newTask state variable
  const categoryName = route.params.categoryName;

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



  const [randomColor, setRandomColor] = useState('#FFFFFF'); // Initial color, e.g., white

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(randomColor);
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  const displayNoTasksMessage = () => {
    return (
      <Text style={{
        margin: 10
      }}>No tasks, you're all done!</Text>
    );
  };

  return (
    <View>
      <View style={{
        height: 80, flexDirection: 'row', alignItems: 'center', backgroundColor: randomColor, borderBottomLeftRadius: 15, borderBottomRightRadius: 15
      }}>
        <Text style={{
          width: '100%', textAlign: 'center', fontSize: 20, fontWeight: "bold"
        }}>Category: {categoryName}</Text>
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

      {tasks.length === 0 ? displayNoTasksMessage() : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{
              flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', backgroundColor: 'lightgray', padding: 10, margin: 5
            }}>
              <Text style={{ fontSize: 15 }}>{item}</Text>
              <Button title="Delete" onPress={() => deleteTask(index)} />
            </View>
          )}
        />)}
    </View>
  );
};

