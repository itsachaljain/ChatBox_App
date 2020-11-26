import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.card}>
          <Image
            source={require("../assets/logo.png")}
            style={{ marginLeft: 10 }}
          />
          <View style={styles.formInput}>
            <TextInput
              placeholder="E-mail"
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder="Password"
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <View style={styles.formButton}>
                <Text>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "aquamarine",
  },
  text: {
    fontStyle: "normal",
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
