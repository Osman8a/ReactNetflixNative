import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { movieOne } from '../../config';

const { width, height } = Dimensions.get('window');

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }

    /**
     * @function filter permite filtrar lo que se 
     * busca en el input
     * @param {*} text
     * @memberof Search
     */
    filter(text) {
        const newData = movieOne.filter((item) => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            text: text,
            data: newData
        })
    }
    /**
     *
     * @function deleteData elimina lo escrito
     * en el input
     * @memberof Search
     */
    deleteData() {
        this.setState({ text: '', data: '' })
    }

    _renderItem(item) {
        return (
            <Image
                key={item.key}
                style={styles.image}
                source={{ uri: item.image }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon
                        name='search'
                        color='grey'
                        size={18}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                        placeholder='Buscar'
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon
                                name="times-circle"
                                color="grey"
                                size={18}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                        : null}
                    <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => this.props.navigator.pop()}>
                        <View style={styles.containerButton}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList
                        style={{ marginHorizontal: 5 }}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent',
    },
    iconInputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        fontSize: 18,
        width: width - (width / 4),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3
    },
    cancelButtonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})
export default Search;