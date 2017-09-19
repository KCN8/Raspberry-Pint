import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegList from './KegList'


export default class OnTap extends Component {

  constructor(props){
   super(props);
 }

 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
   // this.state.dataset.setReadOffset(currentItemIndex);
 }


 render() {
   return (
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.props.beers.map(beer => {
               return(<KegList key={beer.id} abv={beer.abv} name={beer.name} description={beer.description}/>);
           })}
       </Content>
   );
 }
}
