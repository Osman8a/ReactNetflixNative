
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/src/List'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={[{ flex: 1 }, styles.container]}>
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
