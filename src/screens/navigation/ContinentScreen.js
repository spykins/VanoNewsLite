import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SIDE_DRAWER_TOGGLE_EVENT_ID } from '../../utility/screenConstants'

export default class ContinentScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
        return <View>
            <Text>Continent screen</Text>
        </View>
    }
}