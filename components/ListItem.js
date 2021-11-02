import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style="styles.listItemText">{item.text}</Text>
        <View style={styles.buttonGroup}>
          <Icon
            style={{ paddingRight: 25 }}
            name="check"
            size={20}
            color="green"
            onPress={() => console.log("check")}
          />
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "steelblue",
    borderBottomWidth: 1,
    borderColor: "#eee",
    margin: 8,
    color: "white",
    borderRadius: 5,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 20,
  },
  buttonGroup: {
    flexDirection: "row",
  },
});

export default ListItem;
