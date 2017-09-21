import React, { Component } from 'react';
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
          headerBackButtonText="Baaack!"
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
          </TouchableHighlight>
          <KegStatus />
        </Modal>

          </View>
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
