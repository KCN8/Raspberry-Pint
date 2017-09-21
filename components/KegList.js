import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

export default class KegStatus extends Component {

  constructor(props){
    super(props);
  }

  deleteKeg(id) {
    fetch('https://raspberry-pint-api.herokuapp.com/kegs-by-id/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.KegID
      })
    })
  }

  render() {
    return (


        <Card style={{flex: 0}}>
          <CardItem>
            <Left>

              <Body>
                <Text style={{fontSize: 20, textAlign: 'center'}}>Keg {this.props.KegID}</Text>
                <Text style={{fontSize: 26, textAlign: 'center'}}>{this.props.beerName}</Text>
                <Text style={{textAlign: 'center', marginBottom: 20}}>Suggested Serving Temp: {this.props.servingTemp}</Text>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: this.props.beerPhoto}}
                />



                <Text style={{marginTop: 25, marginBottom: 20}}>{this.props.BeerDescription}</Text>

                <Text>Keg Size Liters: {this.props.KegSizeLiters}</Text>
                <Text>liters Used: {this.props.litersUsed}</Text>

                <Text>Keg Temp: {this.props.kegTemp}</Text>
              </Body>
            </Left>
          </CardItem>



          <CardItem>
            <Left>
              <Button style={{ marginLeft: 20, marginBottom: 20, marginTop: 20,}} textStyle={{color: '#87838B'}} onPress={(id) => this.deleteKeg(this.props.KegID)}>
                <Icon name="beer" />
                <Text>Delete Keg</Text>
              </Button>
            </Left>
            <Right>
              <Button  style={{ backgroundColor: '#34A34F', marginLeft: 0, marginBottom: 20, marginTop: 20,}} textStyle={{color: '#87838B'}}>
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
