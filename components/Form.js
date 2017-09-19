import React, { Component } from 'react';
import { Container, Header, Card, Left, Thumbnail, Body, CardItem, Image, Button, Icon, Text, Content, Form, Item, Input, Label } from 'native-base';

export default class inputForm extends Component {

  render() {
    return (

        <Content>

          <Form>
            <Item stackedLabel>
              <Label>Beer name:</Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label>Description:</Label>
              <Input />
            </Item>

            <Item stackedLabel>
                <Label>Keg size:</Label>
                <Input />
            </Item>

            {/*<Card>
              <CardItem style={{height: 100, width: null, flex: 1}}>
                <Thumbnail
                  source={{uri: 'http://blog.patternbank.com/wp-content/uploads/2012/12/vintage-beer-labels-michigan-all-over-beer-02-700x733.jpg'}}
                  style={{height: 100, width: 100}}/>
              </CardItem>
            </Card>*/}


            <Button iconLeft bordered style={{ marginLeft: 100, marginTop: 10}}>
              <Icon name='pint' />
              <Text>Submit</Text>
            </Button>

          </Form>

        </Content>

    );
  }
}
