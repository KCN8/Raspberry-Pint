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

export default class KegStatus extends Component {
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
        <Card style={{flex: 1}}>
          <CardItem style={styles.background}>
            <Left>
              <Thumbnail source={{uri: 'http://blog.patternbank.com/wp-content/uploads/2012/12/vintage-beer-labels-michigan-all-over-beer-02-700x733.jpg'}} />
              <Body>
                <Text style={styles.text}>Detroit Premium Beer</Text>
                <Text style={styles.text} note>ABV: 12%</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem style={styles.background}>
            <Body>
              <Image
                source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brewpalacekegbot.com%2Fstatic%2Fimages%2Fkeg%2Ffull%2Fkeg-srm14-3.png&f=1'}}
                style={styles.image}/>
              <Text>
                //Your text here
              </Text>
            </Body>
          </CardItem>

          <CardItem style={styles.background}>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="beer" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
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
            <Button active>
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
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  image: {
    // flexGrow:1,
    height:200,
    width: 200,
    marginLeft: 40,
    marginTop: 20,
    // width:null,
  },
  paragraph: {
    textAlign: 'center',
  },
  text: {
    color: '#ffffff'
  },
  background: {
    backgroundColor: '#000'
  }
});
