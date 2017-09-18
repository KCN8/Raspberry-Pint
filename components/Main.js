import React, { Component } from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>

        <Content>
        <Image
          source={{uri: 'http://render.fineartamerica.com/images/rendered/search/print/images-medium-5/vintage-beer-keg-patent-drawing-from-1898-aged-pixel.jpg'}}
          // source={{uri: 'https://us.123rf.com/450wm/vladayoung/vladayoung1704/vladayoung170400326/75345098-kraft-beer-barrel-logo-vector-vintage-homebrewing-label-sketched-lager-ale-keg-illustration-for-rest.jpg?ver=6'}}
          // source={{uri: 'https://img0.etsystatic.com/207/0/6057601/il_340x270.1291800932_i1qy.jpg'}}
          style={styles.image}>
            <Text>

            </Text>
        </Image>
        </Content>

        <Button full style={styles.header}>
            <Text>See whats on TAP!</Text>
          </Button>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'rgb(188, 17, 66)'
  },
  image: {
    // flexGrow:1,
    height:500,
    // width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
  text: {
    color: '#ffffff'
  }
});
