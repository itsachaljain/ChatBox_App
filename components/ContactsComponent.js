import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("The Chatbox");
          }}
        >
          <Card>
            <Card.Title>Naman</Card.Title>
            <Card.Divider />
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  users: {
    justifyContent: "center",
    margin: 5,
  },
});

export default Contacts;
