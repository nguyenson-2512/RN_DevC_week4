import React from "react";
import { View } from "react-native";
import { Table, Row } from "react-native-table-component";

import styles from "../styles"

const SingleTodoScreen = (props) => {
  //   const { id, status, body } = props.navigation.state.params.updatedTodo;
  const { id, status, body } = props.route.params.updatedTodo;
  console.log(id);
  const tableHead = ["Task", "Status"];
  const tableData = [body, status];
  return (
    <View style={styles.tableContainer}>
      <Table borderStyle={styles.tableBorder}>
        <Row
          data={tableHead}
          flexArr={[2, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <Row
          data={tableData}
          flexArr={[2, 1]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
    </View>
  );
};

SingleTodoScreen.navigationOptions = {
  title: "SingleTodoScreen",
};

export default SingleTodoScreen;

