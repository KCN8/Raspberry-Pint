
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Modal, Text, TouchableHighlight, View } from 'react-native';
import { Content, Fab, Icon, Button, Item, Input, Picker, Form, Right } from 'native-base';
import { Alert } from 'react-native';

export default class AddButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      selected1: undefined

    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  postBeer() {

    // fetch('https://raspberry-pint-api.herokuapp.com/beers', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: '',
    //     description: '',
    //     serving_temp: '',
    //   })
    // })
  }



  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Item>
              <Icon active name='ios-beer' />
              <Input placeholder='Name'
              value=''/>
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <Input placeholder='Company'
              value=''/>
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <Input placeholder='Serving Temp'
              value=''/>
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <Input placeholder='Photo URL'
              value=''/>
            </Item>


            <Button textStyle={{color: '#87838B'}} style={{ marginLeft: 55, marginTop: 55 }} >
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
              </TouchableHighlight>
            </Button>

            <Right>
              <Button textStyle={{color: '#87838B'}} style={{ marginLeft: 55, marginTop: -45 }} onPress={this.postBeer} >
                <Text>Submit</Text>
              </Button>
            </Right>

          </View>
         </View>
        </Modal>
        <Button style={{ backgroundColor: '#3B5998',borderRadius: 50, position: 'absolute', right: 25,bottom: 25}} onPress={() => {
          this.setModalVisible(true)
        }}>
          <Icon name="ios-add" />
        </Button>

      </View>
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
