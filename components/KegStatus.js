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

        <Content>
        <Card style={{flex: 1}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F5519a5eae4b0d37c5805566b%2F553ea190e4b0e1b549d3fd21%2F5565fe80e4b02cc99128c794%2F1432747650173%2FMojo6Pack_WEB.jpg%3Fformat%3D750w'}} />
              <Body>
                <Text>Mojo IPA</Text>
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
              Pints Remaining: 124
              Temperature: 48
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


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: {

    height:200,
    width: 200,
    marginLeft: 60,
    marginTop: 20,
  }
});
