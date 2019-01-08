import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import movies from '../../config'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderItem(item) {
        return (
            <Text>
                {item.name}
            </Text>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    renderItem={({ item }) => this._renderItem(item)}
                    data={movies}
                />
            </View>
        );
    }
}

export default List;