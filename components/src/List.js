import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { movieOne, movieTwo } from '../../config'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
                    <Text style={styles.text}>My list</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={movieOne}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Top pic for you</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => this._renderItem(item)}
                        data={movieTwo.reverse()}
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