import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

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
                <Text note>Sering Temp: {this.props.serving_temp}</Text>
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
              <Button  textStyle={{color: '#87838B'}} style={{ marginLeft: 55 }}>
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
