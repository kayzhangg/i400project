import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import AddCategory from './AddCategory';
import AddTask from './AddTask';


export default function HomeScreen( {navigation} ){
    const [categories, setCategories] = useState([]); // Use an array for categories

  const addCategory = categoryName => {
    setCategories([...categories, categoryName]);
  };

  return (
    <View>
      <Text>Create Categories</Text>
      <AddCategory onAddCategory={addCategory} />
      <Text>Categories:</Text>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={category} // Use category name as the key
          onPress={() =>
            navigation.navigate('Category', { categoryName: category })
          }
          style={{
            backgroundColor: 'lightgray',
            padding: 10,
            margin: 5,
          }}
        >
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
        }