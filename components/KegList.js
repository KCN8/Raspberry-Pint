import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation'
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegStatus from './KegStatus';

class KegList extends Component {

  constructor(props){
    super(props)
  }


  render() {
    const { navigate } = this.props.navigation;

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
            <Button style={{ marginLeft: 55, backgroundColor: '#3B5998'}} onPress={() => navigate('KegStatus')}>
              <Icon name="beer" />
              <Text>Keg Status</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const BeerNavigator = StackNavigator(
  {
    KegList: { screen: KegList },
    KegStatus: { screen: KegStatus}
  }
);

export default class KegInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BeerNavigator style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  image: {
    // flexGrow:1,
    height: '100%',
    width: '100%',
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
