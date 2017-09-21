import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Modal, Text, TouchableHighlight, View } from 'react-native';
import { Content, Fab, Icon, Button, Item, Input, Picker, Form, Right } from 'native-base';
import { Alert, TextInput } from 'react-native';

export default class AddButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      addKegNewBeerModal: false,
      addKegExistingBeerModal: false,
      selected1: undefined,
      name: '',
      description: '',
      servingtemp: '',
      photo: '',
      beers:props.beers,
      active: false
    }
  }

  setAddKegNewBeerModalTrue() {
    this.setState({addKegNewBeerModal: true});
  }


  setAddKegExistingBeerModalTrue() {
    this.setState({addKegExistingBeerModal: true});
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  postBeer() {
    const body = {
      name: this.state.name,
      description: this.state.description,
      servingtemp: this.state.servingtemp,
      photo: this.state.photo
    }
    fetch('https://raspberry-pint-api.herokuapp.com/beers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        description: body.description,
        serving_temp: body.servingtemp,
        photo: body.photo
      })
    })
  }



  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.addKegNewBeerModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
          <Form>

            <Item>
              <Icon active name='ios-beer' />
              <TextInput
                style={{height: 40}}
                placeholder="Name"
                onChangeText={(name) => this.setState({name})}
              />
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <TextInput
                style={{height: 40}}
                placeholder="Description"
                onChangeText={(description) => this.setState({description})}
                value={this.state.description}
              />
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <TextInput
                style={{height: 40}}
                placeholder="Serving Temp"
                onChangeText={(servingtemp) => this.setState({servingtemp})}
                value={this.state.servingtemp}
              />
            </Item>
            <Item>
              <Icon active name='ios-beer' />
              <TextInput
                style={{height: 40}}
                placeholder="Photo URL"
                onChangeText={(photo) => this.setState({photo})}
                value={this.state.photo}
              />
            </Item>
          </Form>

            <Button onPress={() => {
              this.setState({ addKegNewBeerModal: !this.state.addKegNewBeerModal })
            }} style={{ backgroundColor: '#3B5998', paddingLeft: 20, paddingRight: 20, marginTop: 100, alignSelf: "center" }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Close</Text>
            </Button>



              <Button onPress={() => this.postBeer()} style={{ backgroundColor: '#3B5998', paddingLeft: 20, paddingRight: 20, marginTop: 10, alignSelf: "center" }}>
                <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
              </Button>


          </View>
         </View>
        </Modal>




        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.addKegExistingBeerModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
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

            <Button onPress={() => {
              this.setState({ addKegExistingBeerModal: !this.state.addKegExistingBeerModal })
            }} style={{ backgroundColor: '#3B5998', paddingLeft: 20, paddingRight: 20, marginTop: 100, alignSelf: "center" }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Close</Text>
            </Button>

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
            <Icon name="ios-add" />
            <Button style={{ backgroundColor: '#34A34F', width: 200, marginLeft: -160}} onPress={() => this.setAddKegExistingBeerModalTrue()}>
              <Text style={{color: 'white'}}> Add Keg With Existing Beer</Text>
            </Button>
            <Button style={{ backgroundColor: '#3B5998', width: 200, marginLeft: -160}} onPress={() => this.setAddKegNewBeerModalTrue()}>
              <Text style={{color: 'white'}}> Add Keg With New Beer</Text>
            </Button>

          </Fab>

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
