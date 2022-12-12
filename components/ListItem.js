import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../utils/Colors";

const ListItem = ({ text, id, removeItem }) => {
  return (
    <Pressable onPress={removeItem.bind(this, id)}>
      <View key={id} style={styles.itemContainer}>
        <Text style={styles.item}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    backgroundColor: Colors.light,
    borderRadius: 6,
    alignSelf: "center",
  },

  item: {
    color: Platform.select({ ios: Colors.blue, android: Colors.darkGreen }),
    fontSize: 18,
  },
});
