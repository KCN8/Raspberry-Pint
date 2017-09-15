import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connectStyle } from 'native-base';

class CustomComponent extends Component {
  render() {
    // connect styles to props.style defined by the theme
    const styles = this.props.style;
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>
          Your Component with static style
        </Text>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#c9cccc',
  },
  textContent: {
    fontSize: 20,
    color: 'black',
  },
};
// connect the component to the theme
export default connectStyle('../native-base-theme/Variable/material', styles)(CustomComponent);
