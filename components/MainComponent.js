import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chatbox from "./ChatboxComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import { View, StatusBar } from "react-native";

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
