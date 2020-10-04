import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default function CompleteScreen(props) {
  try {
    const doneList = props.route.params.doneList;
    let list = [];
    doneList.map((td) => {
      list.push(td.body);
    });
    return list.map((item, index) => {
      return (
        <View key={index} style={styles.todoItem}>
          <Text style={styles.todoText}>{item}</Text>
        </View>
      );
    });
  } catch (e) {
    return (
      <View style={styles.container}>
        <Text>Complete Screen</Text>
      </View>
    );
  }
}

CompleteScreen.navigationOptions = {
  header: "",
};
