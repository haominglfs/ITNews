import React, { Component } from 'react';
import {View,StyleSheet,Text,AppRegistry} from 'react-native'
import ListViewBasics from './ListViewBasics'
import { StackNavigator,navigation } from 'react-navigation';
import WebViewExample from './WebViewExample';


export default class AwesomeProject extends Component {

    constructor(props){
      super(props);
    }

      render() {
        return (
          <ListViewBasics></ListViewBasics>
        )
  }


}

const app = StackNavigator({
  Home: { screen: ListViewBasics },
  Detail:{ screen:WebViewExample},
});

AppRegistry.registerComponent('AwesomeProject', () => app);
  
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
    navigationBarStyle:{
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      shadowOffset: {
          width: 1,
          height: 0.5,
      },
      shadowColor: '#999999',
      shadowOpacity: 0.2,
    },
  });