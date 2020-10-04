import React from "react";
import { Text, View } from "react-native";

import styles from "../styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { activeList } from "../TodoActions";

function ActiveScreen(props) {
  try {
    const activeList = props.route.params.activeList;
    let list = [];
    activeList.map((td) => {
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
        <Text>Active Screen</Text>
      </View>
    );
  }
}

ActiveScreen.navigationOptions = {
  header: "",
};

const mapStateToProps = (state) => {
  const { todo } = state;
  return { todo };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      activeList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ActiveScreen);
