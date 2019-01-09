
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import List from './components/src/List';
import Slide from './components/src/Slider'


export default class App extends Component {
  render() {
    return (
      <View style={[{ flex: 1 }, styles.container]}>
        <Slide />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
});
