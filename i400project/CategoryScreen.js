dTas

import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import AddTask from './AddTask.js'; // Import AddTask

export default function CategoryScreen({ route, navigation }){
  const [toDoItems, setToDoItems] = useState([]);

  const addTask = taskName => {
    setToDoItems([...toDoItems, taskName]);
  };

  return (
    <View>
      <Text>Create To-Do List Items</Text>
      <Text>Category: {route.params.categoryName}</Text>
      <AddTask onAddTask={adk} /> 
      <Text>To-Do List Items in {route.params.categoryName}:</Text>
      <FlatList
        data={toDoItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};