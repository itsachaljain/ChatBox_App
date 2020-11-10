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
import { useScreens } from "react-native-screens";
import { db } from "../config";

class Chatbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [
        {
          user: "Achal",
          text: "Hey",
        },
        {
          user: "Naman",
          text: "Hey",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://192.168.1.7:3000/messages", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ messages: response });
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
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

  listOfMessages = () => {
    return this.state.messages.map((element) => {
      if (element.user === "Achal") {
        return (
          <View style={styles.bubble}>
            <Text style={{ fontSize: 10, color: "green" }}>{element.user}</Text>
            <View style={{ borderWidth: 0.6 }}></View>
            <Text>{element.text}</Text>
          </View>
        );
      } else if (element.user === "Naman") {
        return (
          <View style={styles.bubble2}>
            <Text style={{ fontSize: 10, color: "green" }}>{element.user}</Text>
            <View style={{ borderWidth: 0.6 }}></View>
            <Text>{element.text}</Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text>Fake User</Text>
          </View>
        );
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBottom}>
          <ScrollView>
            <View>{this.listOfMessages()}</View>
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
    position: "absolute",
    bottom: 0,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 7,
  },
  bubble: {
    padding: 10,
    backgroundColor: "#A9A9A9",
    borderWidth: 2,
    borderColor: "gray",
    marginVertical: 5,
    borderRadius: 25,
    alignSelf: "auto",
    marginRight: 10,
    marginLeft: 10,
  },
  bubble2: {
    padding: 10,
    backgroundColor: "#A9A9A9",
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 15,
    borderRadius: 25,
    alignSelf: "auto",
    marginRight: 10,
    marginLeft: 10,
  },
  messageBottom: {
    position: "absolute",
    bottom: 50,
  },
});

export default Chatbox;
