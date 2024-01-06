import React from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet, TextInput } from "react-native";
import product_data from "./product_data.json";
import ProductCard from './components/ProductCard';

function App(){
  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Search" caretHidden={true}></TextInput>
      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={({item}) => <ProductCard products={item} />}
        numColumns={2}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#dcdcdc",
  },
  header:{
    fontSize:40,
    fontWeight:"bold",
    textAlign:"left",
    padding:15,
    color:"#8b008b",
    fontStyle:"italic"
  },
  input:{
    height: 40,
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius:10,
  }
});

export default App;