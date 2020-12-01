import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { Avatar } from "react-native-gifted-chat";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {list.map((l, i) => (
          <ListItem
            style={styles.listitem}
            key={i}
            bottomDivider
            onPress={() => {
              this.props.navigation.navigate("The Chatbox");
            }}
          >
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <Card.Divider />
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
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
  listitem: {
    borderRadius: 25,
    backgroundColor: "pink",
    padding: 0,
    margin: 0,
  },
});

export default Contacts;
