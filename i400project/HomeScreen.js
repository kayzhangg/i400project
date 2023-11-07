import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import AddCategory from './AddCategory';


export default function HomeScreen( {navigation} ){
  const [categories, setCategories] = useState([]);

  const addCategory = categoryName => {
    setCategories([...categories, categoryName]);
  };


  return (
    <View>
      <View style={{
        height: 80, flexDirection: 'row',alignItems: 'center', backgroundColor:"lavender", marginBottom: 15}}>
        <Text style={{
        width: '100%',textAlign: 'center', fontSize:20,fontWeight:"bold"
        }}>Create Category</Text>
      </View>
     
      <AddCategory onAddCategory={addCategory}/> 
      <View style={{
        height: 30, flexDirection: 'row',alignItems: 'center', marginTop:20}}>
        <Text style={{
        width: '100%',textAlign: 'center', fontSize:16, fontWeight:"bold"
        }}>Categories:</Text>
      </View>
 
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Category', { categoryName: category })
          }
          style={{
            backgroundColor: 'lightgray',
            padding: 10,
            margin: 5
          }}>
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};