import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      returnSecureToken: true,
    };
  }

  signUpNewUser = (email, password) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOrCKRwAsOcbvobIc-hTIMkylSg6U_fPo ",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
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
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "aquamarine" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/logo.png")}
            style={{ marginLeft: 20 }}
          />
          <KeyboardAvoidingView style={styles.card}>
            <View style={styles.formInput}>
              <TextInput
                placeholder="E-mail"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email: email })}
              />
            </View>
            <View style={styles.formInput}>
              <TextInput
                placeholder="Password"
                value={this.state.password}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                this.signUpNewUser(this.state.email, this.state.password)
              }
            >
              <View style={styles.formButton}>
                <Text>Register</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 5,
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
    alignSelf: "center",
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
  card: {
    borderRadius: 15,
    backgroundColor: "aquamarine",
    padding: 20,
    marginTop: 20,
  },
});

export default Register;
