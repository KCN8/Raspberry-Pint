import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {StyleSheet, Navigator, StatusBar, Image} from 'react-native'
import { Container, Header, Title, Content, View, Button, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';



export default class AnatomyExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Container>

        <Content>
        <Image
          source={{uri: 'http://render.fineartamerica.com/images/rendered/search/print/images-medium-5/vintage-beer-keg-patent-drawing-from-1898-aged-pixel.jpg'}}
          style={styles.image}>

        </Image>
          <View>
          <Animatable.Text animation="slideInDown" easing="ease-out" iterationCount="infinite" direction="alternate" style={{ textAlign: 'center', color: 'white', fontSize: 50, marginTop: -70}}>👇🏼</Animatable.Text>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount='infinite' direction="alternate" style={{ textAlign: 'center', color: 'white', fontSize: 16, marginTop: -90}}>▽ See Whats on TAP! ▽</Animatable.Text>
          </View>
          </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#bb1142'
  },
  image: {
    flexGrow:1,
    height:450,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  text: {
    color: '#000'
  }
});
