import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

export default class KegStatus extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (


        <Card style={{flex: 0}}>
          <CardItem>
            <Left>

              <Body>
                <Text>{this.props.name}</Text>
                <Text note>Sering Temp: {this.props.servingTemp}</Text>
                <Text note>Beer Description: {this.props.BeerDescription}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <Image
                source={{ uri: this.props.url }}
                style={styles.image}/>

            </Body>
          </CardItem>

          <CardItem>
            <Left>
              <Button style={{ marginLeft: 20,}} textStyle={{color: '#87838B'}}>
                <Icon name="beer" />
                <Text>Replenish Keg</Text>
              </Button>
            </Left>
            <Right>
              <Button  style={{ backgroundColor: '#34A34F', marginLeft: 0, }} textStyle={{color: '#87838B'}}>
                <Icon name="beer" />
                <Text>Change Keg</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>


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
    height:100,
    width: 100,
    marginLeft: 0,
    marginTop: 0,
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
