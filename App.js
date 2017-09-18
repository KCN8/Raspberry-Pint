import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main'
// import OnTap from './components/OnTap'
// import KegStatus from './components/KegStatus'

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
      <Main />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
