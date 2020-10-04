import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // AllScreen.js
  imgBg: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7eff3",
    justifyContent: "center",
  },
  todoInput: {
    width: "95%",
    minHeight: 40,
    color: "black",
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: "10%",
    marginBottom: "5%",
    borderColor: "#565455",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  button: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#81809e",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonsWrapper: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button1: {
    height: 35,
    width: "30%",
    borderRadius: 40,
    alignItems: "center",
    backgroundColor: "#af69ac",
    justifyContent: "center",
  },
  // TodoItem.js
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    flexDirection: "row",
    width: "95%",
    color: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 2,
  },
  todoText: {
    fontSize: 20,
    color: "black",
    fontWeight: "300",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  // SingleTodoScreen.js
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: "#c8e1ff",
  },
  bodyText: {
    fontSize: 30,
  },
  row: { height: 60, backgroundColor: "white" },
  head: { height: 40, backgroundColor: "#aaf7f6" },
  text: { margin: 6, textAlign: "center" },
});

export default styles;
