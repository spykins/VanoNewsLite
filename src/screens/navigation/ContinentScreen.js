import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SIDE_DRAWER_TOGGLE_EVENT_ID, COUNTRY_SCREEN } from '../../utility/screenConstants'
import continent from '../../resources/vanonews.json';
import ContinentListItem from '../list/ContinentListItem';
export default class ContinentScreen extends Component {

    state = {
        continent: []
    }
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentDidMount() {
        this.setState(() => ({
            continent: Object.keys(continent).map(continent => ({key: continent, continent: continent}))
        }));
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

    handleOnContinentItemPressed = (continent) => {
        console.log(">>>>>>> ", continent);
        this.props.navigator.push({
            screen:COUNTRY_SCREEN,
            title: continent
        })
        
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.continent}
                    renderItem={({ item }) => (<ContinentListItem continent={item.continent} onContinentItemPressed={this.handleOnContinentItemPressed} />)} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})