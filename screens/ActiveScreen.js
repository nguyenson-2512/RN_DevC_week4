import React, {useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_active'
export default function ActiveScreen(props) {
	// const { id, status, body } = props.route.params.doneTask;
  // console.log(body)
  // console.log('active---',AsyncStorage.getItem(STORAGE_KEY))
  // const a = AsyncStorage.getItem(STORAGE_KEY)
  // console.log('--a',a)
  // const u = AsyncStorage.getItem(STORAGE_KEY).then((value) => JSON.stringify(value))
  // console.log(u)
  // const { x } = props.route.params.activeList;
  // console.log('active-side---',x)

  // if(props.route.params.hasOwnProperty('activeList')){
  //   console.log(props.route.params.activeList)}
  // else return null;


  return (
    <View style={styles.container}>
      <Text>Active Screen</Text>
      <Text></Text>
    </View>
  );
}

ActiveScreen.navigationOptions = {
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