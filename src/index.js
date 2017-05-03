import React, { Component } from 'react';
import MyWebView from 'react-native-webview-autoheight';
import ActionButton from 'react-native-action-button';
import Icon  from 'react-native-vector-icons/Ionicons';

import {
    StyleSheet,
    View,
    Alert,
    WebView
} from 'react-native';

import html from './gameview/paint'

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.webView = null;
        this.longTime = 0;
    }

    onButtonPress(action,type) {
        try{
            this.webView.postMessage(JSON.stringify({action,type,long:this.longTime}));
        } catch (e) {
            alert('e '+e)
        }
    };

    _onMessage = e => {
        alert('onMessage '+e.nativeEvent.data);
    };

  render() {
      const STEP = 15;

    return (

    <View style={{flex:1, backgroundColor: '#f3f3f3'}}>


        {/*<MyWebView*/}
            {/*source={{html}}*/}
            {/*startInLoadingState={true}*/}
            {/*automaticallyAdjustContentInsets={true}*/}
            {/*ref={( webView ) => this.webView = webView}*/}
            {/*onMessage={this._onMessage.bind(this)}*/}
        {/*/>*/}

        <WebView
            style={{width:'100%'}}
            source={{html}}
            ref={( webView ) => this.webView = webView}
            onMessage={this._onMessage.bind(this)}
        />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton
            offsetX={STEP*3}
            offsetY={STEP*3}
            buttonColor="rgba(1,1,1,0.5)"
            hideShadow={true}
            degrees={0}
            position="left"
            onPress={this.onButtonPress.bind(this,'action','presss')}
            onLongPress={this.onButtonPress.bind(this,'action','long')}
            buttonText="➶"
        />
        <ActionButton
            offsetX={STEP*1}
            offsetY={STEP*4}
            buttonColor="rgba(1,1,1,0.5)"
            hideShadow={true}
            degrees={0}
            position="right"
            onPress={this.onButtonPress.bind(this,'right','presss')}
            onLongPress={this.onButtonPress.bind(this,'right','long')}
            buttonText="▶"
        />
        <ActionButton
            offsetX={STEP*4}
            offsetY={STEP*7}
            buttonColor="rgba(1,1,1,0.5)"
            hideShadow={true}
            degrees={0}
            position="right"
            onPress={this.onButtonPress.bind(this,'top','presss')}
            onLongPress={this.onButtonPress.bind(this,'top','long')}
            buttonText="▲"
        />
        <ActionButton
            offsetX={STEP*7}
            offsetY={STEP*4}
            buttonColor="rgba(1,1,1,0.5)"
            hideShadow={true}
            degrees={0}
            position="right"
            onPress={this.onButtonPress.bind(this,'left','presss')}
            onLongPress={this.onButtonPress.bind(this,'left','long')}
            buttonText="◀"
        />
        <ActionButton
            offsetX={STEP*4}
            offsetY={STEP*1}
            buttonColor="rgba(1,1,1,0.5)"
            hideShadow={true}
            degrees={0}
            position="right"
            onPress={this.onButtonPress.bind(this,'down','presss')}
            onLongPress={this.onButtonPress.bind(this,'down','long')}
            buttonText="▼"
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  button: {
      flex: 1,
      position: 'absolute'
  },
  up: {
    left: 0,
    bottom: 0
  },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
