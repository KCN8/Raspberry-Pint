
import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native'
import { Container, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import beerList from './db/beers';
import Header from './components/Header';
// import Main from './components/Main'
import OnTap from './components/OnTap'
// import KegStatus from './components/KegStatus'
// import KegList from './components/KegList'
// import Form from './components/Form'
import Footer from './components/Footer'

const baseURL = 'http://api.brewerydb.com/v2/beers?key=bc51e892faa1dfdd3217aebd83b27aef'
const brewsURL = 'https://raspberry-pint-api.herokuapp.com/kegs'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      beers: []
     };
  }

  async componentDidMount() {
    const response = await fetch(`${baseURL}`)
    const json = await response.json()
    this.setState({beers: json.data})
    console.log(json.data);
  }

  render() {

    return (
      <Container style={styles.container}>
        <Header />
        <OnTap beers={this.state.beers}/>
        {/*<KegStatus />*/}
        {/*<Form />*/}
        <Footer />
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
