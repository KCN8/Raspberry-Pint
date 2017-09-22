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
   this.newBeer = this.newBeer.bind(this);
 }



   async componentDidMount(){
     const kegAndBeerResponse = await fetch(`${baseURL}/keg-and-beer`)
     const kegAndBeerJSON  = await kegAndBeerResponse.json()
     this.setState({kegAndBeer: kegAndBeerJSON})
   }

 newBeer (newBeer) {
   console.log(newBeer);
   let beer = this.state.kegAndBeer
   beer.push(newBeer)
   this.setState({kegAndBeer: beer})
 }
 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
 }


 render() {
   return (
     <Container>
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.state.kegAndBeer.map(kegWithItsBeer => {
               return(<KegList key={kegWithItsBeer.id} BeerID={kegWithItsBeer.beer_id} BeerDescription={kegWithItsBeer.description} KegID={kegWithItsBeer.id} KegSizeLiters={kegWithItsBeer.keg_size_liters} litersUsed={kegWithItsBeer.liters_used} beerName={kegWithItsBeer.name} beerPhoto={kegWithItsBeer.photo}  servingTemp={kegWithItsBeer.serving_temp}  kegTemp={kegWithItsBeer.kegTemp}/>);
           })}
       </Content>
      <AddButton beers={this.props.beers} newBeer={this.newBeer}/>
    </Container>
   );
 }
}
