import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Trailers extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Trailers</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Trailers;