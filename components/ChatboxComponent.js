import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

class Chatbox extends Component {
  constructor(props) {
    super(props);

    this.state ={
      messages : [],
    };
  }

  handleOnChange = (event) =>{
    this.setState({
      messages: event.target.value
    });
  }

  handleSubmit

  render() {
    return (
      <View>
        <TextInput
          value = {this.state.messages}
          placeholder = "Type a message"
          onChangeText = {this.handleOnChange}
        />
        
        <Icon 
          raised
          reverse
          name = "fa fa-paper-plane"
          type = "font-awesome"
          onPress = {this.handleSubmit}
        />
      </View>
    );
  }
}
export default Chatbox;
