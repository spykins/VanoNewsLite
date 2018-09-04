import React, {Component} from 'react';
import { WebView, View } from 'react-native';

export default class VanoWebView extends Component {
  render() {
    console.log(this.props.url);
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 20}}
      />
    );
  }
}