import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.formButton}>
          <Icon
            reverse
            name = "mobile"
            type = "font-awesome"
            color = "#128c7e"
            size = {23}
            />
          <Text style = {styles.text}>LOG IN WITH PHONE NO.</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.formButton}>
          <Icon 
            reverse
            name = "envelope"
            type = "font-awesome"
            color = "#128c79"
            size = {20}
          />
          <Text style = {styles.text}>
            LOG IN WITH E-MAIL
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "aquamarine",
  },
  text: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: "bold"
  },
  formButton: {
    margin: 40,
    borderRadius: 28,
    width: "80%",
    backgroundColor: "#128c7e",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
});

export default Register;
