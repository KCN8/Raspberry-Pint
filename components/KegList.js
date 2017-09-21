import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { StyleSheet, Image, View, Item, Modal, TouchableHighlight } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Form, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegStatus from './KegStatus'


export default class KegList extends Component {

  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      modaleVisibleFalse: false,
    };
  }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    setModalVisibieFalse() {
      this.setState({modaleVisibleFalse: true});
    }

    render() {
      return (

      <View>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>

              <Body>
                <Text>{this.props.name}</Text>
                <Text note>Sering Temp: {this.props.serving_temp}</Text>
>>>>>>> a1c09aad907af089eb538d100afb660ffc57c188
              </Body>
            </Left>
          </CardItem>

<<<<<<< HEAD


          <CardItem>
            <Left>
              <Button style={{ marginLeft: 20, marginBottom: 20, marginTop: 20,}} textStyle={{color: '#87838B'}} onPress={(id) => this.props.deleteKeg(this.props.KegID)}>
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


=======
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
              <Button  textStyle={{color: '#87838B'}} style={{ marginLeft: 5 }} onPress={() => this.setModalVisible(true) }>
                <Icon name="beer" />
                <Text>Keg Status</Text>
              </Button>
            </Left>
          </CardItem>
          </Card>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <TouchableHighlight style={{ marginTop: 30, marginLeft: 10}} onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
          <Text style={{ fontSize: 20}}>✕</Text>
          </TouchableHighlight>
            <KegStatus />
          </Modal>
        </View>
>>>>>>> a1c09aad907af089eb538d100afb660ffc57c188
    );
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    // flex: 1,
=======
    flex: 1,
>>>>>>> a1c09aad907af089eb538d100afb660ffc57c188
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
