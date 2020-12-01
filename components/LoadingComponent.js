import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Contacts" : "Register");
    });
  }

  render() {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" color="#128c7e" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#128c7e",
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default Loading;
