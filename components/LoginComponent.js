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
import { Text, CheckBox, ListItem, Icon,  } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import * as firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      answer: "",
      returnSecureToken: true,
      showModal: false,
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

  handleLogin = () => {
    const { email, password } = this.state;
    firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("Contacts");
      })
      .catch((error) => Alert.alert("Invalid Input!"));
  };

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
                placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
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
            <TouchableOpacity
              onPress={() =>
                firebase.default
                  .auth()
                  .sendPasswordResetEmail(this.state.email)
                  .then(function () {
                    Alert.alert("An Email sent to your registered Email Id.");
                  })
                  .catch(function (error) {
                    Alert.alert("An error Occurred. Please try again!");
                  })
              }
            >
              <View>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <CheckBox
              title="Remember me"
              center
              checked={this.state.remember}
              onPress={() => this.setState({ remember: !this.state.remember })}
              containerStyle={styles.formCheckbox}
            />

            <TouchableOpacity onPress={this.handleLogin}>
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
            <Text style={{ margin: 20 }}></Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <View>
                <Text style={styles.forgot}>About Us! ;)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Modal
                visible={this.state.showModal}
                onDismiss={() => this.toggleModal()}
                onRequestClose={() => {
                  this.toggleModal();
                }}
                animationType = "fade"
              >
                <View style={styles.modal}>
                  <View style={styles.modalview}>
                    <Image source={require("../assets/logo.png")} />
                    <View style = {{
                      alignContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "center"
                    }}>
                      <Image source = {require("../assets/Achal.jpg")}
                        style = {styles.auimage}
                      />

                      <Image source = {require("../assets/Naman.jpg")}
                        style = {styles.auimage}
                      />
                    </View>
                    <Text style={styles.aboutus}>
                      This is an app created by two people, Achal and Naman, in the hopes of bringing people closer. You can reach us at the following:
                    </Text>

                    <View style = {{justifyContent: "center",}}>
                      <ListItem>
                        <Icon
                          name = "github"
                          type = "font-awesome"
                          size = {25} 
                        />
                        <Text>itsachaljain</Text>
                        </ListItem>
                        <ListItem>
                        <Icon
                          name = "instagram"
                          type = "font-awesome"
                          size = {25} 
                        />
                        <Text>@itsachaljain</Text>
                      </ListItem>
                    </View>

                    <View style = {{}}>
                      <ListItem>
                        <Icon
                            name = "github"
                            type = "font-awesome"
                            size = {25} 
                          />
                          <Text>naman-gurnaaz</Text>
                      </ListItem>
                      <ListItem>
                        <Icon 
                          name = "instagram"
                          type = "font-awesome"
                          size = {25} 
                        />
                        <Text>@naman_gurnaaz</Text>
                      </ListItem>
                    </View>
                  </View>
                </View>
              </Modal>
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
  aboutus: {
    fontSize: 20,
    alignItems: "center",
    marginBottom:20
  },
  auimage: {
    borderRadius: 45,
    height: 90,
    width: 90,
    margin: 10,

  }
});

export default Login;
