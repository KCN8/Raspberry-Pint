import React, { Component } from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
        <StatusBar barStyle='light-content'/>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>R PInt</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Image
          // source={{uri: 'http://render.fineartamerica.com/images/rendered/search/print/images-medium-5/vintage-beer-keg-patent-drawing-from-1898-aged-pixel.jpg'}}
          source={{uri: 'https://us.123rf.com/450wm/vladayoung/vladayoung1704/vladayoung170400326/75345098-kraft-beer-barrel-logo-vector-vintage-homebrewing-label-sketched-lager-ale-keg-illustration-for-rest.jpg?ver=6'}}
          // source={{uri: 'https://img0.etsystatic.com/207/0/6057601/il_340x270.1291800932_i1qy.jpg'}}
          style={styles.image}>
            <Text
              style={styles.paragraph, styles.text}>
              
            </Text>
        </Image>
        </Content>
        <Footer style={styles.header}>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="beer" />
            </Button>
            <Button>
              <Icon active name="add" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
