import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {StyleSheet, Image} from 'react-native'
import { Container, Title, Content, View, Button, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';



export default class AnatomyExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <Content>
            <Text style={{ textAlign: 'center', color: 'gray', fontSize: 30, paddingTop: 300}}>Kegorator Monitor</Text>
          <Animatable.Text animation="slideInDown" easing="ease-out" iterationCount="infinite" direction="alternate" style={{ textAlign: 'center', color: 'white', fontSize: 50, paddingTop: 180}}>👇🏼</Animatable.Text>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount='infinite' direction="alternate" style={{ textAlign: 'center', color: 'white', fontSize: 16, }}>▽ See Whats on TAP! ▽</Animatable.Text>

        </Content>
    );
  }
}


const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'contain',
  },
});
