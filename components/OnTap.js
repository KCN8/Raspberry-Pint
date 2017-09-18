import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Right,
  Left,
  Body} from 'native-base';

export default class OnTap extends Component {
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

        <Content style={styles.container}>

          <Card style={{flex: 0, marginTop: 30, marginBottom: 10}}>
            <CardItem style={styles.background}>
              <Body>
                <Image
                  source={{uri: 'http://blog.patternbank.com/wp-content/uploads/2012/12/vintage-beer-labels-michigan-all-over-beer-02-700x733.jpg'}}
                  style={{height: 100, width: 100, flex: 1}}/>
                <Text style={styles.text2}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </Body>
            </CardItem>
            </Card>

            <Card style={{flex: 0, marginTop: 10, marginBottom: 10}}>
            <CardItem style={styles.background}>
              <Body>
                <Image source={{uri: 'http://beerpulse.com/wp-content/uploads/2011/05/5x4-beer-label.png'}} style={{height: 100, width: 100, flex: 1}}/>
                <Text style={styles.text2}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </Body>
            </CardItem>
          </Card>

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
    // alignItems: 'stretch',
    // justifyContent: 'center',
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
    color: '#ffffff',
  },
  text2: {
    color: '#ffffff',
    marginTop: 15
  },
  background: {
    backgroundColor: '#000'
  }
});
