import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage'
const STORAGE_KEY = '@save_active'

import TodoItem from '../components/TodoItem'
import { TODOS } from "../constants";
import styles from "../styles";

import AllContext from "../AllContext";

export default function AllScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");

  // useEffect(() => {
    // props.navigation.navigate('Active', {
    //   activeTodo: todoList[2]
    // })

  // }, [todoList])
  // props.navigation.navigate('Active', {
  //   todoList
  // })
  // const sendActive = () => {
  //   props.navigation.navigate('Active', {
  //     todoList
  //   })
  // }

  // const saveData = async (item) => {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, item)
  //     console.log('--all---',item)
  //     alert('Data saved')
  //   } catch (e) {
  //     alert('Fail to save')
  //   }
  // }



  // const readData = async () => {
  //   try {
  //     const list = await AsyncStorage.getItem(STORAGE_KEY)
  //     if(list !== null) console.log('---readData()---',list)
  //     //else console.log('null roi, k log dc')
  //   } catch (e) {
  //     alert('Fail to fetch data')
  //   }
  // }

  // useEffect(() => {
  //   readData()


  // }, [todoList])
  useEffect(() => {
    props.navigation.setParams({ todoList})
  }, [todoList])


  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    // saveData(todo)
    // if(todo.status === "Done"){
    //   props.navigation.navigate("Complete", {
    //     doneTask: todo
    //   })
    // } else props.navigation.navigate("Active", {
    //   activeTask: todo
    // })

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

  const onActive = () => {
    const todo_active = todoList.filter(item => item.status === "Active");
    setTimeout(() => {
      props.navigation.navigate("Active", {
        activeList: todo_active
      })
    },1000)
  }



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
    <ImageBackground
      style={styles.imgBg}
      source={require("../assets/bg.jpg")}
    >
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


                <TouchableOpacity style={styles.button} onPress={onActive}>
                <Text style={styles.buttonText}>Active</Text>
              </TouchableOpacity>

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
