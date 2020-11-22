import React, { Component } from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Card, FlatList, ListItem } from "react-native-elements";
import { Avatar } from "react-native-gifted-chat";

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
        <Card
          containerStyle = {styles.container}
        >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("The Chatbox");
          }}
        >
          <ListItem style= {styles.listitem}>
            <Avatar />
            <ListItem.Content>
                <ListItem.Title>
                  Naman
                </ListItem.Title>
                <Card.Divider/>
                <ListItem.Subtitle>
                  ABCD
                </ListItem.Subtitle>
              </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
        </Card>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  users: {
    justifyContent: "center",
    margin: 5,
  },
  container: {
    backgroundColor: "aquamarine",

  },
  card: {
    backgroundColor: "aquamarine",
    borderColor: "aquamarine",
    margin : 0,
    padding: 0,
    
  },
  listitem: {
    borderRadius: 15,
    backgroundColor : "pink",
    padding:0,
    margin: 0,
    
  }
});

export default Contacts;
