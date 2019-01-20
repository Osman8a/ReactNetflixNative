import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { movieOne, movieTwo } from '../../config'

/**
 * @class List muestra las dos listas horizontales
 * @extends {Component}
 */
class List extends Component {

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
        return (
            <Image
                style={styles.imagen}
                source={{ uri: item.image }}
            />
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
                        data={movieOne}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Top recomendadas para ti</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={styles.separator} />} //separador
                        keyExtractor={(item) => item.id} //key
                        renderItem={({ item }) => this._renderItem(item)} //renderiza los elementos
                        data={movieTwo.reverse()} //el vector a renderizar
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