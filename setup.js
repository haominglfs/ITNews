import React, { Component } from 'react';
import {View,StyleSheet,Text,AppRegistry} from 'react-native'
import ListViewBasics from './ListViewBasics'
import WebViewExample from './WebViewExample';
import { StackNavigator,DrawerNavigator,TabNavigator} from 'react-navigation';


class CsdnScreen extends React.Component {
  render() {
    return <ListViewBasics tab='csdnblog' navigation={this.props.navigation}></ListViewBasics>
  }
}

class TtScreen extends React.Component {
  render() {
    return <ListViewBasics tab='ttblog' navigation={this.props.navigation}></ListViewBasics>
  }
}

const MainScreenNavigator = TabNavigator({
  csdn: { screen: CsdnScreen },
  开发者头条: { screen: TtScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'ITNews',
};

const app = StackNavigator({
 Home: { screen: MainScreenNavigator },
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