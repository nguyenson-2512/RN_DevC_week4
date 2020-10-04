import { combineReducers } from "redux";
import { TODOS } from "./constants";

const INITIAL_STATE = {
  todoList: TODOS,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ACTIVE":
      const { todoList } = state;
      const newTodoList = todoList.filter((todo) => todo.status === "Active");
      return newTodoList;
    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
});
