import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "../styles";

const TodoItem = (props) => {
  const statusCheckStyle = {
    color: props.todo.status === "Done" ? "green" : "black",
  };

  const statusBgStyle = {
    backgroundColor: props.todo.status === "Done" ? "#aaedbe" : "#aaa7d6",
  };

  const onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      "Delete your todo?",
      prompt,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.onDeleteTodo(todo.id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      key={props.todo}
      style={[styles.todoItem, statusBgStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}
    >
      <AntDesign
        name="checkcircleo"
        size={24}
        color="black"
        style={[styles.check, statusCheckStyle]}
      />
      <Text style={styles.todoText}>
        {props.index + 1}. {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
