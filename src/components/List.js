import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import Orientation from 'react-native-orientation';
import { getTwoItems } from '../api/api'

/**
 * @class List muestra las dos listas horizontales
 * @extends {Component}
 */
class List extends Component {

    UNSAFE_componentWillMount() {
        Orientation.lockToPortrait();
    }

    /**
     *
     * @function newPushContent renderiza la vista de 
     * Details 
     * @param {*} item elemento a renderizar
     * @memberof List
     */
    newPushContent(item) {
        this.props.navigator.push({
            ident: 'Details',
            passProps: {
                item
            }
        })
    }

    /**
     * @param {*} item posición del vector
     * @returns el componente Image una imagen
     * @memberof List
     */
    _renderItem(item) {
        const { navigate } = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item: item })}>
                <Image
                    style={styles.imagen}
                    source={{ uri: item.image }}
                />
            </TouchableWithoutFeedback>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.text}>Mi Lista</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={getTwoItems[0]}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Top recomendadas para ti</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={styles.separator} />} //separador
                        keyExtractor={(item) => item.id} //key
                        renderItem={({ item }) => this._renderItem(item)} //renderiza los elementos
                        data={getTwoItems[1]} //el vector a renderizar
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagen: {
        width: 120,
        height: 180
    },
    separator: {
        width: 5
    },
    text: {
        color: 'white'
    }
});

export default List;