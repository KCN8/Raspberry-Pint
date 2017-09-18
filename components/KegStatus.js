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

        <Header>
          <Left>
          
          </Left>
          <Body>
            <Title>R PInt</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <Card style={{flex: 1}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'http://blog.patternbank.com/wp-content/uploads/2012/12/vintage-beer-labels-michigan-all-over-beer-02-700x733.jpg'}} />
              <Body>
                <Text>Detroit Premium Beer</Text>
                <Text note>ABV: 12%</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <Image
                source={{uri: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brewpalacekegbot.com%2Fstatic%2Fimages%2Fkeg%2Ffull%2Fkeg-srm14-3.png&f=1'}}
                style={styles.image}/>
              <Text>
                //Your text here
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="beer" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        </Content>

        <Footer>
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
