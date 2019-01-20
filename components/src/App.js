
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SideMenu from 'react-native-side-menu';
import List from './List';
import Slide from './Slider'
import Header from './Header'
import Menu from './Menu'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  /**
   * @function toggle permite
   * abrir y cerrar el menú a
   * partir del ícono
   * @memberof App
   */
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  /**
   * @function updateMenu  actualiza el
   * estado
   * @param {*} isOpen recibe si 
   * el menú está abierto o no
   * @memberof App
   */
  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <ScrollView style={[{ flex: 1 }, styles.container]}>
            <Header navigator={this.props.navigator} toogle={this.toggle.bind(this)} />
            <Slide />
            <List navigator={this.props.navigator} />
          </ScrollView>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
})
