import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Alert, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { Icon, Text, CheckBox, Button, } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      remember: false,
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ username: userinfo.username });
        this.setState({ password: userinfo.password });
        this.setState({ remember: true });
      }
    });
  }

  handleLogin() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "aquamarine" }}>
        <View style={styles.container}>
          <KeyboardAvoidingView style = {styles.card}>
            <View style={styles.formInput}>
              <TextInput
                placeholder="Username"
                leftIcon={{ type: "font-awesome", name: "user-o" }}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style = {styles.formInput}>
              {/*<Icon
                type= "font-awesome"
                name= "key"
              />*/}
              <TextInput
                placeholder="Password"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity>
              <Text style = {styles.forgot}>
                Forgot Password
              </Text>
            </TouchableOpacity>
            <CheckBox
              title="Remember me"
              center
              checked={this.state.remember}
              onPress={() => this.setState({ remember: !this.state.remember })}
              containerStyle={styles.formCheckbox}
            />
            <View style={styles.formButton}>
              <TouchableOpacity
                onPress={() => {
                  if (
                    this.state.username === "Achal" &&
                    this.state.password === "achal"
                  ) {
                    this.props.navigation.navigate("The Chatbox");
                  } else {
                    Alert.alert(
                      "Please enter the correct username and password!"
                    );
                  }
                  this.handleLogin();
                }}
              >
                <Text> LOGIN </Text>
                {/*color="#128c7e"
                icon={
                  <Icon
                    name="sign-in"
                    type="font-awesome"
                    size={24}
                    color="white"
                  />
                }
                buttonStyle={{
                  backgroundColor: "#128c7e",
                }*/}
              </TouchableOpacity>
            </View>
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
  formInput: {
    width:"90%",
    backgroundColor:"pink",
    borderRadius:25,
    height: 55,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
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
    justifyContent : "center",
    alignItems: "center",
    height: 50,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 15,
    backgroundColor: "aquamarine",
    padding: 20,
    marginTop: 20,
  },
  forgot: { 
    alignSelf: "center",
    padding : 5, 
    color : "black",
    fontSize : 12,
    fontWeight: "bold",
  }
});

export default Login;
