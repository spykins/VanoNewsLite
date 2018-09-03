import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SIDE_DRAWER_TOGGLE_EVENT_ID } from '../../utility/screenConstants'
import xmlDom from 'xmldom';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


let DOMParser = xmlDom.DOMParser;
    
export default class HomeScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange",
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    //TODO: move to a datafetcher data class for that purpose
    fetch('https://punchng.com/feed/')
        .then(response => response.text())
        .then((responseText) => {
          var parser = new DOMParser();
          var doc = parser.parseFromString(responseText,"text/xml").documentElement;
          console.log("************", doc);
        }).catch((err) => {
            console.log('fetch', err)
        });
  }

  //TODO: refactor duplicate code in Favourite, continent and HomeScreen, pass a props or dispatch an action to handle it
  onNavigatorEvent = (event) => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === SIDE_DRAWER_TOGGLE_EVENT_ID) {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}> to Vano News YOH!</Text>
        <Text style={styles.instructions}>To get started, Set up Icons and testing</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text testID="welcome">Holla</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});