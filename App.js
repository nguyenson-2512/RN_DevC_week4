import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import { routeIcons } from "./constants";
import {
  AllScreen,
  CompleteScreen,
  ActiveScreen,
  SingleTodoScreen,
} from "./screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./TodoReducer";

const store = createStore(todoReducer);

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName={AllScreen}>
      <Stack.Screen name="All" component={AllScreen} />
      <Stack.Screen name="SingleTodo" component={SingleTodoScreen} />
      <Stack.Screen name="Active" component={ActiveScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
    </Stack.Navigator>
  );
};

const CompleteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Complete" component={CompleteScreen} />
    </Stack.Navigator>
  );
};

const ActiveStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Active" component={ActiveScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={routeIcons[route.name]}
                size={24}
                color={focused ? "blue" : "grey"}
              />
            ),
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "grey",
          }}
        >
          <Tab.Screen name="All" component={AllStack} />
          <Tab.Screen name="Complete" component={CompleteStack} />
          <Tab.Screen name="Active" component={ActiveStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
