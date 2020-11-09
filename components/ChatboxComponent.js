import React, { Component } from "react";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";

function RenderMessages() {
  return (
    <View style={styles.bubble}>
      <Text>Haha</Text>
    </View>
  );
}

class Chatbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.message === "") {
      this.setState({ message: "" });
    } else {
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBottom}>
          <ScrollView>
            <RenderMessages />
          </ScrollView>
        </View>
        <View style={styles.bottomView}>
          <KeyboardAvoidingView style={styles.footer}>
            <TextInput
              value={this.state.message}
              placeholder="Type a message"
              style={styles.messages}
              onChangeText={this.handleOnChange}
              returnKeyType="send"
            />

            <Icon
              raised
              reverse
              size={20}
              color="#128c7e"
              style={{}}
              name="paper-plane"
              type="font-awesome"
              onPress={this.handleSubmit}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    width: 300,
    height: 45,
    fontSize: 20,
    backgroundColor: "#91c4ae",
    borderRadius: 35,
    paddingHorizontal: 25,
    justifyContent: "flex-end",
    position: "relative",
  },

  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#DCF6C2",
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  bubble: {
    padding: 10,
    backgroundColor: "#A9A9A9",
    borderWidth: 2,
    borderColor: "gray",
    marginVertical: 10,
    borderRadius: 25,
    alignSelf: "auto",
    marginRight: 10,
  },
  messageBottom: {
    position: "absolute",
    bottom: 50,
  },
});

export default Chatbox;
