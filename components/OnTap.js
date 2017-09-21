import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegList from './KegList'
import AddButton from './AddButton'
const baseURL = 'https://raspberry-pint-api.herokuapp.com'

 export default class OnTap extends Component {

  constructor(props){
   super(props);
   this.state = {
     active: false,
     kegAndBeer: []
   }
 }



   async componentDidMount(){
     const kegAndBeerResponse = await fetch(`${baseURL}/keg-and-beer`)
     const kegAndBeerJSON  = await kegAndBeerResponse.json()
     this.setState({kegAndBeer: kegAndBeerJSON})
     console.log(this.state.kegAndBeer);
   }

 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
   // this.state.dataset.setReadOffset(currentItemIndex);
 }


 render() {
   return (
     <Container>
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.state.kegAndBeer.map(kegWithItsBeer => {
               return(<KegList key={kegWithItsBeer.id} BeerID={kegWithItsBeer.beer_id} BeerDescription={kegWithItsBeer.description} KegID={kegWithItsBeer.id} KegSizeLiters={kegWithItsBeer.keg_size_liters} litersUsed={kegWithItsBeer.liters_used} beerName={kegWithItsBeer.name} beerPhoto={kegWithItsBeer.photo}  servingTemp={kegWithItsBeer.serving_temp}  kegTemp={kegWithItsBeer.kegTemp}/>);
           })}
       </Content>
      <AddButton beers={this.props.beers}/>
    </Container>
   );
 }
}
