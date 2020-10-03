import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CompleteScreen(props) {
  //const { id, status, body } = props.route.params.activeTask;
  // const { x } = props.route.params;
  //  console.log(x)
  // console.log(props.route)
  // if(props.route.params != 'undefined') {
  //   const {x} =  props.route.params;
  //   console.log(x)
  // }

  return (
    <View style={styles.container}>
      <Text>Complete Screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  header: ''
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});