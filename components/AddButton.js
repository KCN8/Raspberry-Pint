
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Modal, Text, TouchableHighlight, View } from 'react-native';
import { Content, Fab, Icon, Button, Item, Input, Picker, Form } from 'native-base';
import { Alert } from 'react-native';

export default class AddButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      selected1: undefined,
      beers:props.beers,
      active: false
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
          <Image
             source={{url:'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/1098353_643347905675898_2102289501_n.jpg?oh=7878ae0cf00260c748acd4953a3036fc&oe=5A1270BE'}}
             style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
          />
          <Form>
            <Picker
              iosHeader="Select one"
              placeholder="Select one"
              mode="dropdown"
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
            {this.props.beers.map(beer =>{
              return <Item key={beer.id} label={beer.name} value={beer.id} />
            })
            }
            </Picker>
          </Form>
            <Item>
              <Icon active name='home' />
              <Input placeholder='Name'/>
            </Item>
            <Item>
              <Icon active name='ios-nuclear' />
              <Input placeholder='Company'/>
            </Item>
            <Item>
              <Icon active name='ios-umbrella' />
              <Input placeholder='URL'/>
            </Item>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        <Fab
           active={this.state.active}
           direction="up"
           containerStyle={{ }}
           style={{ backgroundColor: '#5067FF' }}
           position="bottomRight"
           onPress={() => this.setState({ active: !this.state.active })}>
           <Icon name="share" />
           <Button style={{ backgroundColor: '#34A34F' }} onPress={() => {
             this.setModalVisible(true)
           }}>
             <Icon name="logo-whatsapp" />
           </Button>
           <Button style={{ backgroundColor: '#3B5998' }}>
             <Icon name="logo-facebook" />
           </Button>
         </Fab>

      </View>
    );
  }
}
