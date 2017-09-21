import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import KegList from './KegList'
import KegStatus from './KegStatus'
import AddButton from './AddButton'

let exam = null;
class OnTap extends Component {

  constructor(props){
   super(props);
   this.state = {
     active: false,
     beers: exam
   }
 }

 setCurrentReadOffset = (event) => {
   let itemHeight = 402;
   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
   // this.state.dataset.setReadOffset(currentItemIndex);
 }


 render() {
   const { navigate } = this.props.navigation;
   return (
     <Container>
       <Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset}>
           {this.state.beers.map(beer => {
               return(<KegList key={beer.id} abv={beer.abv} onPress={() => navigate('KegStatus')} name={beer.name} description={beer.description}/>);
           })}
       </Content>
      <AddButton beers={this.state.beers}/>
    </Container>
   );
 }
}

const BeerNavigator = StackNavigator(
  {
    OnTap: { screen: OnTap },
    KegStatus: { screen: KegStatus}
  }
);

export default class App extends Component {
  render() {
    exam = this.props.beers
    return (
      <View style={styles.container}>
        <BeerNavigator style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
});
