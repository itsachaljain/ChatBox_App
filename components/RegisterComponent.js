import React, { Component } from "react";
import { View } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 5,
  },
  formInput: {
    width: "90%",
    backgroundColor: "pink",
    borderRadius: 25,
    height: 55,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
  },
  formCheckbox: {
    margin: 30,
    backgroundColor: null,
    borderColor: "aquamarine",
  },
  formButton: {
    margin: 40,
    borderRadius: 25,
    width: "70%",
    backgroundColor: "#128c7e",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    fontWeight: "bold",
  },
});

export default Register;
