import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => {
    setText(textValue);
  };

  const add = (t) => {
    addItem(t);
    setText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item...."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={() => add(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    margin: 6,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
