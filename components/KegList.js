import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Content, Container, Icon, Header, Footer, FooterTab, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import KegStatus from './KegStatus';
import { Constants } from 'expo';

export default class KegList extends Component {

  constructor(props){
    super(props)
  }


  render() {
    return (

      <Card style={{flex: 0}}>
        <CardItem>
          <Left>

            <Body>
              <Text>{this.props.name}</Text>
              <Text note>ABV: {this.props.abv}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Image
              source={{ uri: this.props.url }}
              style={styles.image}/>
            <Text style={{ marginTop: 10} }>
               {this.props.description}
            </Text>
          </Body>
        </CardItem>

        <CardItem>
          <Left>
            <Button style={{ backgroundColor: 'red'}} onPress={this.props.onPress}>
              <Icon name="beer" />
              <Text>Keg Status</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
});
