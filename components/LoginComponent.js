import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { Text, CheckBox } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      answer: "",
      remember: false,
      showModal: false,
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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
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
                placeholder="Username"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <View style={styles.formInput}>
              <TextInput
                placeholder="Password"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity>
              <Modal
                visible={this.state.showModal}
                onDismiss={() => this.toggleModal()}
                onRequestClose={() => {
                  this.toggleModal();
                }}
              >
                <View style={styles.modal}>
                  <View style={styles.modalview}>
                    <Image source={require("../assets/logo.png")} />
                    <Text
                      style={{
                        fontSize: 20,
                        margin: 50,
                        alignItems: "center",
                      }}
                    >
                      Q: Who is Your Best Friend?
                    </Text>
                    <View style={styles.formInput}>
                      <TextInput
                        placeholder="Answer"
                        onChangeText={(answer) => this.setState({ answer })}
                        value={this.state.answer}
                      />
                    </View>
                    <View style={{ margin: 10 }}>
                      <TouchableOpacity
                        onPress={() => {
                          if (this.state.answer === "Jatin") {
                            this.props.navigation.navigate("The Chatbox");
                            this.toggleModal();
                          } else {
                            Alert.alert("The Answer is incorrect!");
                          }
                        }}
                        style={styles.modalbutton1}
                      >
                        <Text>SUBMIT</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10 }}>
                      <TouchableOpacity
                        onPress={() => this.toggleModal()}
                        style={styles.modalbutton2}
                      >
                        <Text>CANCEL</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <View>
                <Text onPress={this.toggleModal} style={styles.forgot}>
                  Forgot Password?
                </Text>
              </View>
            </TouchableOpacity>
            <CheckBox
              title="Remember me"
              center
              checked={this.state.remember}
              onPress={() => this.setState({ remember: !this.state.remember })}
              containerStyle={styles.formCheckbox}
            />

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
              <View style={styles.formButton}>
                <Text> LOGIN </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <View>
                <Text style={styles.forgot}>New here? Register now!</Text>
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
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    fontWeight: "bold",
    alignSelf: "center",
  },
  card: {
    borderRadius: 15,
    backgroundColor: "aquamarine",
    padding: 20,
    marginTop: 20,
  },
  forgot: {
    alignSelf: "center",
    padding: 5,
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  modal: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#128c7e",
  },
  modalview: {
    backgroundColor: "aquamarine",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalbutton1: {
    width: "70%",
    backgroundColor: "#f194ff",
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    fontWeight: "bold",
    justifyContent: "center",
    elevation: 5,
  },
  modalbutton2: {
    width: "70%",
    backgroundColor: "grey",
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    fontWeight: "bold",
    justifyContent: "center",
    elevation: 5,
  },
});

export default Login;
