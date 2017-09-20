
import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native'
import { Container, Title, Content, FooterTab, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Header from './components/Header';
import Main from './components/Main'
import OnTap from './components/OnTap'
import Contact from './components/Contact'
import Bubbles from './components/Bubbles'
import Expo from 'expo';

const baseURL = 'http://api.brewerydb.com/v2/beers?key=bc51e892faa1dfdd3217aebd83b27aef'
const brewsURL = 'https://raspberry-pint-api.herokuapp.com/beers'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      index: 0,
      beers: [],
     };
  }

  switchScreen(index){
    this.setState({ index: index })
  }

  async componentDidMount() {
    const response = await fetch(`${brewsURL}`)
    const json = await response.json()
    this.setState({beers: json})

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
}

  render() {

    let AppComponent = 0;

      if (this.state.index == 0) {
        AppComponent = <Main />
      } else if (this.state.index == 1) {
        AppComponent = <OnTap beers={this.state.beers}/>
      } else if (this.state.index == 2) {
        AppComponent = <Contact />
      }

    return (
      <Container style={styles.container}>
        <Header />
        {AppComponent}
          <Footer>
            <FooterTab>
              <Button vertical onPress={() => this.switchScreen(0) }>
                <Icon name="ios-home" />
                <Text>Home</Text>
              </Button>
              <Button vertical onPress={() => this.switchScreen(1) }>
                <Icon name="ios-beer" />
                <Text>Beer</Text>
              </Button>
              <Button vertical onPress={() => this.switchScreen(2) }>
                <Icon active name="ios-contact" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#04172d'
  },
});
