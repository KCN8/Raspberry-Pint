import React, { Component } from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native'
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
export default class Main extends Component {
  render() {
    return (
      <Header>
        <Left>
        </Left>
        <Body>
          <Image
            source={require('../assets/logo.png')}
            style={{ height: 40, width: 80}}
            />
        </Body>
        <Right />
      </Header>
    );
  }
}
