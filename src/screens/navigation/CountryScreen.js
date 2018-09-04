import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { NEWS_SCREEN } from '../../utility/screenConstants'

export default class CountryScreen extends Component {
    state = {
        countries: [],
        continent: ""
    }

    handleCountryItemPressed = (country) => {
        this.props.navigator.push({
            screen: NEWS_SCREEN,
            title: country,
            passProps: {
                continent: this.props.continent,
                newsObject: this.props.newsObject,
                country: country
            }
        })
    }

    componentDidMount() {
        this.setState(() => ({
            countries: Object.keys(this.props.newsObject[this.props.continent]).map((country) => ({ key: country, country: country })),
            continent: this.props.continent
        }));
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.countries}
                    renderItem={({ item }) => (<ContinentListItem continent={item.country} onContinentItemPressed={this.handleCountryItemPressed} />)} />
            </View>
        );
    }
}