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
    <View style={styles.container}>
      <TextInput
        placeholder="ADD A TODO"
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={() => add(text)}>
        <Icon style={styles.btnText} name="plus" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "row",
  },
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
    borderRadius: 4,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 5,
  },
});

export default AddItem;
