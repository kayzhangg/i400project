import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddCategory({onAddCategory}){
  const [categoryName, setCategoryName] = useState('');

  const addCategory = () => {
    if (categoryName) {
      onAddCategory(categoryName);
      setCategoryName('');
    }
  };

  return (
    <View>
      <Text>Create Category</Text>
      <TextInput
        placeholder="Category Name"
        value={categoryName}
        onChangeText={text => setCategoryName(text)}
      />
      <Button title="Add Category" onPress={addCategory} />
    </View>
  );
};
