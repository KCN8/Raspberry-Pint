import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base';
export default class Main extends Component {
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button active>
              <Icon active name="beer" />
            </Button>
            <Button >
              <Icon name="add" />
            </Button>
            <Button>
              <Icon name="contact" />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
