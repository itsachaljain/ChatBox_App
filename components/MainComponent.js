import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chatbox from "./ChatboxComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import { View, StatusBar } from "react-native";
import Contacts from "./ContactsComponent";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCOrCKRwAsOcbvobIc-hTIMkylSg6U_fPo",
  authDomain: "the-chatbox.firebaseapp.com",
  databaseURL: "https://the-chatbox.firebaseio.com",
  projectId: "the-chatbox",
  storageBucket: "the-chatbox.appspot.com",
  messagingSenderId: "711851006642",
  appId: "1:711851006642:web:18b4527fde22fe242f07ab",
  measurementId: "G-XPPFWWYSF0",
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#128c7e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <LoginNavigator.Screen name="Login" component={Login} />
      <LoginNavigator.Screen
        name="The Chatbox"
        component={Chatbox}
        options={{ headerTitle: "The Chatbox" }}
      />
      <LoginNavigator.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: "Register" }}
      />
      <LoginNavigator.Screen
        name="Contacts"
        component={Contacts}
        options={{ headerTitle: "Contacts" }}
      />
    </LoginNavigator.Navigator>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        }}
      >
        <NavigationContainer>
          <LoginNavigatorScreen />
        </NavigationContainer>
      </View>
    );
  }
}
export default Main;
