import React, { Component } from "react";
import { ScrollView, TextInput, StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { Card, Icon } from "react-native-elements";

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

  handleSubmit = () => {

  }

  render() {
    return (
      <ScrollView>
        <View>
          <KeyboardAvoidingView style = {styles.container}>

            <TextInput
              value = {this.state.messages}
              placeholder = "Type a message"
              style = {styles.messages}
              onChangeText = {this.handleOnChange}
            />

            <Icon 
              raised
              reverse
              color = "#128c7e"
              name = "paper-plane"
              type = "font-awesome"
              onPress = {this.handleSubmit}
            />

          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

messages: {
  width: 300,
  height: 45,
  fontSize: 20,
  backgroundColor: '#91c4ae',
  borderRadius: 25,
  paddingHorizontal: 25,
  marginTop: 25,
  justifyContent: "flex-end",
  position: 'relative',
},

container: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  flexDirection: 'row',
}

})

export default Chatbox;
