import React, {Component} from 'react';
import { WebView, Platform} from 'react-native';

export default class VanoWebView extends Component {
  render() {
    console.log(this.props.url);
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 20}}
        useWebKit={Platform.OS === 'ios'}
        startInLoadingState={true}
        originWhitelist={['*']}
      />
    );
  }
}

//possible unhandled promise rejection unaboe to open url about blan