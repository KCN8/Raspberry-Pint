
import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native'
import { Container, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Header from './components/Header';
import Main from './components/Main'
// import OnTap from './components/OnTap'
// import KegStatus from './components/KegStatus'

export default class App extends React.Component {
  render() {

    return (
      <Container style={styles.container}>
        <Header />
        <Main />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
