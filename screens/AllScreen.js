import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import TodoItem from "../components/TodoItem";
import styles from "../styles";
import { connect } from "react-redux";

function AllScreen(props) {
  const [todoList, setTodoList] = useState(props.todo.todoList);
  const [todoBody, setTodoBody] = useState("");

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";

    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      props.navigation.navigate("SingleTodo", {
        updatedTodo: todo,
      });
    }, 500);
  };

  const getActiveList = () => {
    const todo_active = todoList.filter((item) => item.status === "Active");
    setTimeout(() => {
      props.navigation.navigate("Active", {
        activeList: todo_active,
      });
    }, 1000);
  };

  const getDoneList = () => {
    const todo_done = todoList.filter((item) => item.status === "Done");
    setTimeout(() => {
      props.navigation.navigate("Complete", {
        doneList: todo_done,
      });
    }, 1000);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: "Active",
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  return (
    <ImageBackground style={styles.imgBg} source={require("../assets/bg.jpg")}>
      <KeyboardAvoidingView enabled behavior="padding">
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: "200%" }}>
            <View style={styles.container}>
              {todoList.map((todo, index) => {
                return (
                  <TodoItem
                    key={todo.body}
                    todo={todo}
                    index={index}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                  />
                );
              })}
              <View style={styles.inputContainer}>
                <TextInput
                  value={todoBody}
                  style={styles.todoInput}
                  onChangeText={(text) => setTodoBody(text)}
                  placeholder="Add next task"
                />
                <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.buttonsWrapper}>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={getActiveList}
                  >
                    <Text style={styles.buttonText}>Active</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={getDoneList}
                  >
                    <Text style={styles.buttonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

AllScreen.navigationOptions = {
  title: "All Todos",
};

const mapStateToProps = (state) => {
  const { todo } = state;
  return { todo };
};

export default connect(mapStateToProps)(AllScreen);
