import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { FAVOURITE_SCREEN, CONTINENT_SCREEN, HOME_SCREEN } from '../../utility/screenConstants';
import { FAVOURITE_SCREEN_TITLE, CONTINENT_SCREEN_TITLE, HOME_SCREEN_TITLE } from '../../utility/screenTitleConstants';
import Icon from 'react-native-vector-icons/Ionicons'

//TODO: move this to constant class.. if it is ever used anywhere else

const HOME_TAPPED = "feedScreenTapped";
const FAVOURITE_TAPPED = "favouriteScreen";
const CONTINENT_TAPPED = "continentScreen";

class SideDrawer extends Component {

    handleFeedNavButton = () => {
        this.pushNewNavigationScreen(HOME_TAPPED);
    }

    handleContinentNavButton = () => {
        this.pushNewNavigationScreen(CONTINENT_TAPPED);
    }

    handleFavouriteNavButton = () => {
        this.pushNewNavigationScreen(FAVOURITE_TAPPED);
    }

    closeNavigation = () => {
        this.props.navigator.toggleDrawer({
            side: "left"
        });
    }
    //TODO: move this function to the calling function or manage by redux
    pushNewNavigationScreen = (screenTapped) => {
        let screen;
        let title;

        switch (screenTapped) {
            case FAVOURITE_TAPPED:
                screen = FAVOURITE_SCREEN;
                title = FAVOURITE_SCREEN_TITLE;
                break;
            case CONTINENT_TAPPED:
                screen = CONTINENT_SCREEN;
                title = CONTINENT_SCREEN_TITLE;
                break;
            default:
                screen = HOME_SCREEN;
                title = HOME_SCREEN_TITLE
        }

        console.log("screen ", screen, " title ", title);
        this.props.navigator.resetTo({
            screen,
            title
        });
        this.closeNavigation();
    }

    //TODO: format the render function, split each one into a View and load the view
    render() {
        return (
            <View style={[styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
                <TouchableOpacity onPress={this.handleFeedNavButton}>
                    <View style={styles.drawerItem}>
                        <Icon name="logo-rss" size={30} color="#aaa" style={styles.drawerItemIcon} />
                        <Text>Feeds</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleContinentNavButton}>
                    <View style={styles.drawerItem}>
                        <Icon name={Platform.OS === 'android' ? "md-flag" : "ios-flag"} size={30} color="#aaa" style={styles.drawerItemIcon} />
                        <Text>Continent</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleFavouriteNavButton}>
                    <View style={styles.drawerItem}>
                        <Icon name={Platform.OS === 'android' ? "md-bookmark" : "ios-bookmark"} size={30} color="#aaa" style={styles.drawerItemIcon} />
                        <Text>Favourite</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'white',
        flex: 1
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#eee'
    },
    drawerItemIcon: {
        marginRight: 10,
    }
});

export default SideDrawer;
