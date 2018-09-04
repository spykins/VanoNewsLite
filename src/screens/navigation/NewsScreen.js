import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {WEB_SCREEN} from '././../../utility/screenConstants'

export default class NewsScreen extends Component {
    state = {
        news: null,
        vendors: {}
    }

    handleNewsVendorPressed = (newsVendor) => {
        this.props.navigator.push({
            screen: WEB_SCREEN,
            title: newsVendor,
            passProps: { url: this.state.vendors[newsVendor][0]}
        });
    }

    componentDidMount() {
        console.log(this.props.continent);
        console.log(this.props.country);
        let newsVendorsInCountry = this.props.newsObject[this.props.continent];
        newsVendorsInCountry = newsVendorsInCountry[this.props.country];
        var tempArray = [];
        for (var news in newsVendorsInCountry) {
            tempArray.push({key: news, value: news});
        }


        this.setState(() => ({
            news: tempArray,
            vendors: newsVendorsInCountry
        }));
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.news}
                    renderItem={({ item }) => (<ContinentListItem continent={item.value} onContinentItemPressed={this.handleNewsVendorPressed} />)} />
            </View>
        );
    }
}