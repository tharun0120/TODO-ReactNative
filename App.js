import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "milk",
    },
    {
      id: 2,
      text: "eggs",
    },
    {
      id: 3,
      text: "bread",
    },
    {
      id: 4,
      text: "juice",
    },
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "OK" }]);
    } else
      setItems((prevItem) => {
        return [{ id: Math.floor(Math.random() * 100), text }, ...prevItem];
      });
    // console.log(items);
  };

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
    // console.log(items);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List"></Header>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
