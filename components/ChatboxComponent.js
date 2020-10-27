import React, { Component } from "react";
import { Text, ScrollView } from "react-native";

class Chatbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "aquamarine" }}>
        <Text>Hehe</Text>
      </ScrollView>
    );
  }
}
export default Chatbox;
