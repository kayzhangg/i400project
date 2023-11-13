import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';


export default function HomeScreen( {navigation} ){
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = categoryName => {
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const deleteCategory = index => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <ScrollView style={{flex:1, paddingBottom:30}}>

    
    <View >
      <View style={styles.header}>
        <Text style={{
        width: '100%',textAlign: 'center', fontSize:20,fontWeight:"bold"
        }}>My Categories</Text>
      </View>
     
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, padding: 10 }}
          value={newCategory}
          onChangeText={text => setNewCategory(text)}
          placeholder="Enter a new category"
        />
        <Button title="Add Category" onPress={addCategory} />
      </View>
      <Text style={{
        width: '100%',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10
      }}>Categories:</Text>
 
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Category', { categoryName: category })
          }>
            <View style={{ flexDirection: 'row', 
              alignItems: "center", 
              justifyContent: 'space-between', 
              backgroundColor: 'lightgray', 
              padding: 10, 
              margin: 5, 
              borderRadius:10}}>
              <Text style={styles.text}>{category}</Text>
              <Button title="Delete" onPress={() => deleteCategory(index)} />
            </View>
          {/* <Text style={{fontSize: 15, marginLeft:10}}>{category}</Text> */}
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  header:{
    height: 100, 
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor:"skyblue", 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    marginBottom:25
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